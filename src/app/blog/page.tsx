import React from "react";
import { client } from "../components/lib/sanity";
import { BlogPost } from "../../../Types";
import Link from "next/link";
import Image from "next/image";
import Motion, { childVariants } from "../framer";
import Hero from "../components/ui/hero";
import { Shell } from "../components/ui/shell";
import { machina, redhat } from "../components/exports";

async function getProjects() {
  const query = `*[_type == "blog"]{
      title,
        overview,
        link,
        _id,
        "slug": slug,
        "imageUrl" : image.asset->url
    }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;
export default async function page() {
  const data = (await getProjects()) as BlogPost[];

  return (
    <Shell
      className="flex min-h-screen flex-col  justify-center items-center  relative top-20 overflow-x-hidden overflow-y-hidden
    max-w-full mx-auto "
    >
      <Hero />
      <Motion childVariants={childVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-fit md:w-4/5 mx-auto gap-10 ">
          {data.map((posts) => (
            <article
              key={posts._id}
              className={`flex-1 p-3 h-full  bg-white rounded-lg flex-col justify-center items-start gap-4 inline-flex ${redhat.className}`}
            >
              <Image
                className="rounded-lg w-full h-full"
                src={posts.imageUrl}
                height={500}
                width={500}
                priority
                alt="blog-card-picture"
              />
              <div className="  flex-col justify-center items-start gap-2 flex">
                <Link href={`/posts/${posts.slug.current}`} prefetch>
                  <div
                    className={` text-black text-lg font-extrabold leading-snug line-clamp-2 ${machina.className}`}
                  >
                    {posts.title}
                  </div>
                </Link>

                <div className=" text-black text-opacity-70 text-base font-normal  leading-normal line-clamp-3">
                  {posts.overview}
                </div>
              </div>
              <div className="py-2 rounded-md justify-center items-center gap-2.5 inline-flex">
                <Link
                  href={`/posts/${posts.slug.current}`}
                  prefetch
                  className="text-amber-600 text-base font-semibold  leading-tight "
                >
                  READ ME{" >"}
                </Link>
                <div className="w-4 h-4 relative" />
              </div>
            </article>
          ))}
        </div>
      </Motion>
    </Shell>
  );
}
