import { client } from "@/app/components/lib/sanity";
import React from "react";
import { BlogPost } from "../../../../Types";
import PortableText from "react-portable-text";
import Image from "next/image";
import { machina, redhat } from "@/app/components/exports";
import notFound from "@/app/not-found";

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

  return data;
}
export const revalidate = 60;

export default async function Posts({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = (await getPostDetails(params.slug)) as BlogPost;

  const wordsPerMinute = 200;
  const numberOfWords = data.content.toString().split(/\s/g).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  console.log(minutes, numberOfWords);

  // if (!data) {
  //   notFound();
  // }
  return (
    <main className="flex flex-col  gap-3 mb-20 w-11/12 overflow-x-hidden  lg:w-3/5 items-center mx-auto relative top-24 prose prose-md lg:prose-xl prose-invert prose-a:text-gray-300 md:top-36">
      <h1
        className={`text-center text-xl md:text-2xl lg:text-4xl tracking-tight leading-relaxed text-gray-100 ${machina.className}`}
      >
        {data.title}
      </h1>

      <div className="flex justify-center gap-5">
        <Image
          src="/images/golden-eye.webp"
          alt="author-image"
          height={50}
          width={50}
          className="rounded-full"
        />

        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-400 text-left opacity-50 ">
            {data.author}
            <br />
            {`${new Date(data._createdAt).toISOString().split("T")[0]}`}
          </p>
        </div>
      </div>
      <Image
        className=" rounded-lg "
        src={data.imageUrl}
        height={800}
        width={800}
        alt="blog-card-picture"
      />

      <article className={`w-full text-gray-500 text-md ${redhat.className}`}>
        <PortableText
          content={data.content}
          // serializers={PortableTextComponent}
        />
      </article>
    </main>
  );
}
