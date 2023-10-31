import React from "react";

export default function Portfolio() {
  return (
    <div className="w-80 h-96 flex-col justify-start items-center gap-10 inline-flex">
      <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
        Some Portfolio
      </div>
      <div className="self-stretch h-96 flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch h-96 rounded-2xl flex-col justify-center items-center gap-12 flex">
          <div className="self-stretch h-80 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-center text-white text-lg font-extrabold font-['Neue Machina'] leading-snug">
              01
            </div>
            <div className="self-stretch text-center text-white text-lg font-extrabold font-['Neue Machina'] leading-snug">
              Engineering Design Workshop
            </div>
            <div className="self-stretch text-center text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-tight">
              In collaboration with the esteemed Prof. George Obeng, Dean of the
              Faculty of Mechanical and Chemical Engineering, we hosted an
              enlightening workshop. Many students tend to sidestep engineering
              design, deeming it daunting. Our workshop aimed to change this
              perception by highlighting the incredible value of engineering
              design in career growth and national development. We showcased
              that, with the right tools and techniques, engineering design
              becomes approachable and gratifying. This event not only raised
              awareness about the field but also rekindled student enthusiasm.
              We're committed to nurturing the future of engineering design.
            </div>
          </div>
          <div className="self-stretch h-80 bg-stone-300 bg-opacity-50 rounded-2xl flex-col justify-start items-start gap-4 flex">
            <img
              className="self-stretch grow shrink basis-0"
              src="https://via.placeholder.com/340x335"
              alt="image"
            />
          </div>
        </div>
        <div className="self-stretch h-96 rounded-2xl flex-col justify-center items-center gap-12 flex">
          <div className="self-stretch h-96 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              02
            </div>
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              Disc Brake Casting Process
            </div>
            <div className="self-stretch text-center text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-tight">
              The Foundry Men Association led by Abu-Diyau sought a partner to
              expand their product lines and drive research and development, all
              within budget constraints and technological boundaries. Seizing
              the vision to bolster Ghana's automotive sector, an opportunity
              arose to become Original Equipment Manufacturers (OEMs). Our team
              crafted a disc brake casting process perfectly tailored to their
              existing capabilities and expertise. This endeavor birthed a new
              product line, propelling the foundry towards a promising future
              and a thriving market presence.
            </div>
          </div>
          <div className="self-stretch h-80 rounded-2xl flex-col justify-start items-start gap-4 flex">
            <img
              className="self-stretch grow shrink basis-0"
              src="https://via.placeholder.com/340x335"
              alt="image"
            />
          </div>
        </div>
        <div className="self-stretch h-96 rounded-2xl flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch h-80 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              03
            </div>
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              Laboratory High Shear Mixer
            </div>
            <div className="self-stretch text-center text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-tight">
              In partnership with TCC-CIMET, IMHO proudly presents the
              Laboratory High Shear Mixer, a tailor-made solution for the
              Transport Research and Education Centre (TRECK) at KNUST. This
              cutting-edge equipment is instrumental for blending diverse
              materials and formulating composite substances essential for civil
              laboratory experiments and research. The seamless integration of
              this solution promises to significantly enhance the progress of
              ongoing research endeavors
            </div>
          </div>
          <div className="self-stretch h-80 rounded-2xl flex-col justify-start items-start flex">
            <img
              className="self-stretch grow shrink basis-0"
              src="https://via.placeholder.com/340x335"
              alt="image"
            />
          </div>
        </div>
        <div className="self-stretch h-96 rounded-2xl flex-col justify-center items-center gap-12 flex">
          <div className="self-stretch h-48 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              04
            </div>
            <div className="self-stretch text-center text-white text-2xl font-extrabold font-['Neue Machina'] leading-loose">
              Simple pyrolysis
            </div>
            <div className="self-stretch text-center text-white text-opacity-70 text-sm font-normal font-['Red Hat Display'] leading-tight">
              IMHO has helped deliver the design of simple pyrolysis system for
              charing, plastic to fuel conversion and other circular
              technologies. We have been a great partner for commeph and
              associate, helping deliver various forms of green and and
              sustainable technolgies.
            </div>
          </div>
          <div className="self-stretch h-80 rounded-2xl flex-col justify-start items-start gap-4 flex">
            <img
              className="self-stretch grow shrink basis-0"
              src="https://via.placeholder.com/340x335"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
