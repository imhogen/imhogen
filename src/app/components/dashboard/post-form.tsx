"use client";
import React, { useState } from "react";

import { sendEmail } from "../../../../actions/send-email";

export interface formValues {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const PostForm = () => {
  return (
    <>
      <form
        className="w-full md:w-4/5 lg:w-3/5 text-white flex flex-col mx-auto md:mx-0"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="text"
          name="blog title"
          placeholder="blog title"
          className="w-full bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
        />
        <div className="rounded-lg  border-gray-100 border border-opacity-30 my-2 flex flex-col ">
          <textarea
            name="message"
            cols={30}
            rows={10}
            className="bg-transparent w-full overflow-y-auto no-scrollbar  outline-none resize-none flex  text-sm p-2"
            placeholder="type blog contect here"
          />
        </div>
        <button
          type="submit"
          className="w-2/5 lg:w-1/5 h-9 px-4 py-2 bg-[#EF7D00] rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          Post
        </button>
      </form>
    </>
  );
};

export default PostForm;
