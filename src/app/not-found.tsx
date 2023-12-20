"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./components/ui/button";

import RootLayout from "./layout";
import { machina, redhat } from "./components/exports";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown((prevCount) => prevCount - 1);
      } else {
        router.push("/");
      }
    }, 1000); // Update countdown every second

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <main className="w-screen h-screen bg-white flex-col justify-center items-center  gap-5 md:gap-12 inline-flex">
      <div className=" w-full px-5 md:px-12 flex-col justify-start items-center flex">
        <div
          className={`not-found  text-center  text-[10rem] bg-[500px] lg:bg-[500px] lg:text-[16rem] font-extrabold ${machina.className}`}
        >
          404
        </div>
        <div
          className={` w-full md:w-4/5 text-center text-black text-opacity-60 text-base md:text-xl font-normal ${redhat.className} `}
        >
          The page you are looking for doesn't exist or has been moved.
          <br />
          Redirecting to homepage in {countdown} seconds...
        </div>
      </div>
      <Link href="/">
        <Button text={"Home sweet home"} />
      </Link>
    </main>
  );
}
