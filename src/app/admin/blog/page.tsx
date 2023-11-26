import PostForm from "@/app/components/dashboard/post-form";
import Tag from "@/app/components/dashboard/tags";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <h1>New Post</h1>
        <PostForm />
      </section>

      <Tag />
    </div>
  );
};

export default page;
