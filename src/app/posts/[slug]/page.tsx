import { client } from "@/app/components/lib/sanity";
import Navbar from "@/app/components/navigation/desktop-navigation";
import Dropdown from "@/app/components/navigation/mobile-navigation";
import Slider from "@/app/components/navigation/tablet-navigation";
import React from "react";
import { BlogPost } from "../../../../Types";
import { Shell } from "@/app/components/ui/shell";
import PortableText from "react-portable-text";
import Image from "next/image";

async function getPostDetails(slug: string) {
  // const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const query = `*[_type == "blog" && slug.current == "${slug}"]
  {
    title,
    overview,
    link,
    author,
    _createdAt,
    _id,
    content,
    "slug.current": slug.current,
    "imageUrl" : image.asset->url
  }[0]`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}
export const revalidate = 60;

function estimateReadingTime(text: string) {
  const wordsPerMinute = 200; // average reading speed
  const numberOfWords = text.toString().split(/\s/g).length; // splits the text by spaces and counts the words
  const minutes = numberOfWords / wordsPerMinute;
  return Math.ceil(minutes); // rounds up to the nearest minute
}
export const Posts = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = (await getPostDetails(params.slug)) as BlogPost;
  console.log("working out actually and i am very excited");
  return (
    <main
      className="flex h-full flex-col justify-center items-center overflow-x-hidden overflow-y-hidden
                max-w-full mx-auto "
    >
      <Navbar />
      <Slider />
      <Dropdown />
      <Shell className=" relative top-12 h-full lg:min-h-screen lg:top-28 gap-10  ">
        <div className="flex flex-col gap-5 w-full h-full lg:min-h-screen lg:w-4/5  mx-auto">
          <h1 className=" text-center text-xl md:text-3xl lg:text-5xl tracking-tight leading-relaxed text-gray-100 font-machina ">
            {data.title}
          </h1>

          <div className="flex justify-center gap-5">
            <div>
              <Image
                src="/images/golden-eye.webp"
                alt="author-image"
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center  ">
              <p className="text-sm text-gray-400 text-left opacity-50 ">
                {data.author}
              </p>
              <p className="text-sm text-gray-400 text-left opacity-50 ">
                {`${
                  new Date(data._createdAt).toISOString().split("T")[0]
                } . ${estimateReadingTime(data.content)} min read`}
              </p>
            </div>
          </div>

          <article className="flex gap-10 h-full flex-col text-gray-500 text-md font-redhat ">
            <Image
              className=" mx-auto w-full rounded-lg "
              src={data.imageUrl}
              height={100}
              width={300}
              alt="blog-card-picture"
            />
            <div className="relative">
              <PortableText
                content={data.content}
                // serializers={PortableTextComponent}
              />
            </div>
          </article>
        </div>
      </Shell>
    </main>
  );
};

export default Posts;
