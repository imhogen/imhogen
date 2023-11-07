const MobileFooter = () => {
  return (
    <div className="mx-6 my-3 w-11/12 h-fit px-7 py-3 rounded-3xl border border-white border-opacity-50 gap-2 flex-col justify-start items-center inline-flex">
      <div className="w-full flex grow justify-center ">
        <img
          className="w-[86px] h-[122px] mx-3 mb-3"
          src="https://via.placeholder.com/86x122"
          alt="IMHO Logo"
        />
        <span>
          <p className="text-white text-md md:text-2xl">
            Innovate
            <br />
            Make and <br />
            Have Ours
            <br />
            LTD.
          </p>
          <p className="text-white ">Make it real</p>
        </span>
      </div>
      <div className="flex flex-col justify-between w-full items-center">
        <div className="text-white text-xs text-center mb-3">
          KBI KNUST, Commercial Area
          <br />
          Kumasi, Ghana
        </div>
        <div className="flex flex-col">
          <div className="text-white text-sm text-center">
            admin@imhogen.com
          </div>
          <div className="text-white text-sm">
            +233 501 654 825 / +233 553 812 626
          </div>
        </div>
      </div>
      <div className="h-[0.3px] w-full border border-white border-opacity-30"></div>
      <div className="flex justify-between w-full">
        <div className="text-white flex flex-col">
          <h1 className="text-white">Send us a message</h1>
          <div className="w-full flex gap-2 py-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-3/4 bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg grow text-sm"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-3/4 bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
            />
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
          />
          <div className="rounded-lg border-gray-100 border border-opacity-30 my-2 flex flex-col grow">
            <textarea
              className="bg-transparent w-full outline-none resize-none flex grow text-sm p-2"
              placeholder="Type your message here"
            />
            <div className="w-8 h-6 px-2 py-1 bg-amber-600 rounded-lg justify-start items-center gap-2.5 inline-flex m-2">
              <div className="w-4 h-4 relative" />
            </div>
          </div>
          <div className="w-full h-9 px-4 py-2 bg-amber-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-['Red Hat Display'] leading-tight">
              Send Message
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.3px] w-full border border-white border-opacity-30"></div>
      <div className="w-full flex flex-col justify-between items-center ">
        <div className="text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-[21px]">
          © 2023 IMHO. All rights reserved.
        </div>
        <div className="justify-start items-center gap-5 flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>

          <div className="text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-[21px]">
            Website by
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
