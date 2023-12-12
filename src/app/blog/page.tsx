import React from "react";
import { client } from "../components/lib/sanity";
import { BlogPost } from "../../../Types";
import Link from "next/link";
import Image from "next/image";

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
  console.log(
    data !== null
      ? "this is the part you do not see for my blog page"
      : "this is where you get to know about my weakness"
  );
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-fit gap-10 ">
        {data.map((posts) => (
          <article
            key={posts._id}
            className="w-full flex-1 p-2 h-fit   bg-white rounded-lg flex-col justify-center items-start gap-4 inline-flex font-redhat"
          >
            <Image
              className=" h-fit rounded-lg w-full"
              src={posts.imageUrl}
              height={100}
              width={300}
              alt="blog-card-picture"
            />
            <div className="  flex-col justify-center items-start gap-2 flex">
              <Link href={`/posts/${posts.slug.current}`} prefetch>
                <div className=" text-black text-lg font-extrabold leading-snug font-machina line-clamp-2">
                  {posts.title}
                </div>
              </Link>

              <div className=" text-black text-opacity-70 text-base font-normal  leading-normal line-clamp-3">
                {posts.overview}
              </div>
            </div>
            <div className="py-2 rounded-md justify-center items-center gap-2.5 inline-flex">
              <Link
                href={`/posts/`}
                prefetch
                className="text-amber-600 text-base font-semibold  leading-tight font-redhat"
              >
                READ ME{" >"}
              </Link>
              <div className="w-4 h-4 relative" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
