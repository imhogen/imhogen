import { machina, redhat } from "../exports";
import { value } from "../../../../content/mapped-content";
import Image from "next/image";
import Motion, { childVariants } from "@/app/framer";

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  h-full w-full gap-5 mx-auto pt-10 px-4  ">
      {value.map((item, index) => (
        <div
          key={index}
          className=" background-white-card w-full  h-full  flex-col  items-center  inline-flex"
        >
          {" "}
          <div className="w-36 relative">
            <Image src={item.src} width={200} height={200} alt="icon" />
          </div>
          <Motion childVariants={childVariants}>
            <div className="flex flex-col gap-5">
              <h1
                className={`title-white-card text-center lg:text-left ${machina.className}`}
              >
                {item.title}
              </h1>
              <p
                className={`descriptive-text-white-card text-center lg:text-left ${redhat.className}`}
              >
                {item.description}
              </p>
            </div>
          </Motion>
        </div>
      ))}
    </div>
  );
}

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// import { machina, redhat } from "../exports";
// import { value } from "../../../../content/mapped-content";

// export default function Card() {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgress,
//         opacity: opacityProgress,
//       }}
//       className="grid grid-cols-1 md:grid-cols-2  h-full w-11/12 gap-5 mx-auto py-10 "
//     >
//       {value.map((item, index) => (
//         <div
//           key={index}
//           className="w-full lg:w-11/12  h-full px-5 py-5  lg:px-10 mx-auto  bg-white rounded-2xl flex-col  items-center gap-3 inline-flex"
//         >
//           <div className="w-48 relative">
//             <img src={item.src} width={200} height={200} alt="icon" />
//           </div>
//           <div className="flex flex-col gap-5">
//             <h1
//               className=" text-black text-2xl font-extrabold text-center lg:text-left leading-8"
//               style={machina.style}
//             >
//               {item.title}
//             </h1>
//             <p
//               className="  text-black text-opacity-70 text-base font-normal leading-normal text-center lg:text-left "
//               style={redhat.style}
//             >
//               {item.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );
// }
