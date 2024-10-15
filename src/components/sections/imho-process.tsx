import Motion, { childVariants } from "@/app/animate";
import Image from "next/image";
import { machina } from "../../lib/exports";

export default function Process() {
  return (
    <div>
      <div
        className="w-screen  h-full flex flex-col justify-start items-center gap-20 lg:gap-20 py-10"
        id="process"
      >
        <div className={`text-center sub-heading ${machina.className}`}>
          <span
            className={`imho-gradient-text-to-r font-extrabold leading-10 `}
          >
            IMHO’s
          </span>
          <span className="text-white font-extrabold leading-10"> Process</span>
        </div>
        <div className="w-full flex items-center px-4 lg:px-0">
          <div
            className="w-full flex items-center justify-center lg:w-4/5 mx-auto pb-2"
            style={{ paddingTop: "0%" }}
          >
            <Motion childVariants={childVariants}>
              <Image
                src="/images/imho_process.webp"
                alt="imho's process"
                width={650}
                height={650}
              />
            </Motion>
          </div>
        </div>
      </div>
    </div>
  );
}
