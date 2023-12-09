"use client";

import { File } from "buffer";
import { useState } from "react";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File>();
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return "Please upload a file";
    }

    try {
      const data = new FormData();
      data.set("firstname", firstname);
      data.set("lastname", lastname);
      data.set("email", email);
      data.set("message", message);
      data.set("file", file as Blob);
      setLoading(true);

      const res = await fetch("/api/send", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (err) {
      console.error(err);
    }
  };

  //get form data on target
  const handleFileUpload = (e: any) => {
    setFile(e.target.files?.[0]);
  };

  const handleFirstnameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleLastnameChange = (e: any) => {
    setLastName(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form
        className="w-full md:w-4/5 lg:w-2/5 text-white flex flex-col mx-auto md:mx-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white">Send us a message</h1>

        <div className="w-full flex gap-2 py-2">
          <input
            name="firstname"
            type="text"
            placeholder="firstname"
            className="input-field"
            onChange={handleFirstnameChange}
          />
          <input
            name="lastname"
            type="text"
            placeholder="lastname"
            className="input-field"
            onChange={handleLastnameChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="w-full bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
          onChange={handleEmailChange}
        />
        <div className="rounded-lg border-gray-100 border border-opacity-30 my-2 flex flex-col ">
          <textarea
            name="message"
            cols={30}
            rows={5}
            className="bg-transparent w-full outline-none resize-none flex  text-sm p-2"
            placeholder="type your message here"
            onChange={handleMessageChange}
          />
          <div className="flex items-center space-x-2">
            <label
              htmlFor="fileInput"
              className="flex items-center justify-center bg-[#EF7D00] rounded-lg p-2 cursor-pointer m-2"
            >
              <span className="text-white text-sm px-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-paperclip"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </span>
            </label>
            <input
              type="file"
              id="fileInput"
              name="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-9 px-4 py-2 bg-[#EF7D00] rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          Send Message
        </button>
      </form>
      {/* Thank you message. Displays if form is submitted and is valid
      <div className="mt-4">
        <div
          className={`bg-green-600 text-white px-10 py-5 rounded ${
            formValid ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <p>Thank you for your message!</p>
            <FolderClosedIcon
              className="cursor-pointer"
              onClick={() => setFormValid(false)}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactForm;
