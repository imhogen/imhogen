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
  //   const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const query = `*[_type ==  "blog"]
{
  title,
    overview,
    link,
    _createdAt,
    _id,
    content,
    "slug.current": ${slug},
    "imageUrl" : image.asset->url
}[0]`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
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
      className="flex min-h-screen flex-col justify-center items-center overflow-x-hidden overflow-y-hidden
                max-w-full mx-auto "
    >
      <Navbar />
      <Slider />
      <Dropdown />
      <Shell className="Shell relative lg:top-20 gap-10  ">
        <div className="flex flex-col gap-5 w-full lg:w-3/5  mx-auto">
          <h1 className=" text-center text-xl lg:text-5xl tracking-tight leading-relaxed text-gray-100 font-machina ">
            {data.title}
          </h1>
          <p className="text-sm text-gray-400 text-center opacity-50 mb-10">
            {new Date(data._createdAt).toISOString().split("T")[0]}
          </p>

          <article className="flex gap-5 flex-col text-gray-500 text-md font-redhat">
            <Image
              className=" h-fit rounded-lg w-full "
              src={data.imageUrl}
              height={100}
              width={300}
              alt="blog-card-picture"
            />
            <PortableText
              content={data.content}
              // serializers={PortableTextComponent}
            />
          </article>
        </div>
      </Shell>
    </main>
  );
};

export default Posts;
