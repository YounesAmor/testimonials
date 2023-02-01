import React from "react";
import quotation from "../assets/images/bg-pattern-quotation.svg";
const Testimonials = () => {
  return (
    <div className="">
      <div className=" grid sm:grid-cols-1 lg:grid-cols-4 gap-6 place-content-center p-4">
        <div className="bg-moderateViolet border rounded-lg border-transparent p-[30px] relative lg:col-span-2">
          <div className="flex items-center">
            <img
              src={require("../assets/images/image-daniel.jpg")}
              alt="daniel"
              className="border rounded-full w-12 h-12 mr-4 border-moderateViolet"
            />
            <div className="text-left text-white font-barlow">
              <p>Daniel Clifford</p>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          <img
            src={quotation}
            className="absolute top-0 right-[10px] z-0"
            alt="dems"
          />
          <p className="text-white text-2xl text-left font-barlow z-10 relative mt-2">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className="text-left text-white opacity-70 font-barlow mt-4">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
        <div className="bg-veryDarkGrayishBlue border rounded-lg border-transparent p-[30px] relative">
          <div className="flex items-center">
            <img
              src={require("../assets/images/image-jonathan.jpg")}
              alt="jonathan"
              className="border rounded-full w-12 h-12 mr-4 border-moderateViolet"
            />
            <div className="text-left text-white font-barlow">
              <p>Jonathan Walters</p>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-white text-2xl text-left font-barlow z-10 relative mt-2">
            The team was very supportive and kept me motivated
          </p>
          <p className="text-left text-white opacity-70 font-barlow mt-4">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
        <div className="bg-white border rounded-lg border-transparent p-[30px] relative row-start-2">
          <div className="flex items-center">
            <img
              src={require("../assets/images/image-jeanette.jpg")}
              alt="jean"
              className="border rounded-full w-12 h-12 mr-4 border-moderateViolet"
            />
            <div className="text-left text-veryDarkGrayishBlue font-barlow">
              <p>Jeanette Harmon</p>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-veryDarkGrayishBlue text-2xl text-left font-barlow z-10 relative mt-2">
            An overall wonderful <br />
            and rewarding <br /> experience
          </p>
          <p className="text-left text-veryDarkGrayishBlue opacity-70 font-barlow mt-4">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
        <div className="bg-veryDarkBlackishBlue border rounded-lg border-transparent p-[30px] relative lg:col-span-2 ">
          <div className="flex items-center">
            <img
              src={require("../assets/images/image-patrick.jpg")}
              alt="jean"
              className="border rounded-full w-12 h-12 mr-4 border-moderateViolet"
            />
            <div className="text-left text-white font-barlow">
              <p>Patrick Abrams</p>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-white text-2xl text-left font-barlow z-10 relative mt-2">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className="text-left text-white opacity-70 font-barlow mt-4">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
        <div className="bg-white lg:h-full border rounded-lg border-transparent p-[35px] relative lg:row-start-1 lg:col-start-4 lg:row-span-2">
          <div className="flex items-center">
            <img
              src={require("../assets/images/image-kira.jpg")}
              alt="jean"
              className="border rounded-full w-12 h-12 mr-4 border-moderateViolet"
            />
            <div className="text-left text-veryDarkGrayishBlue font-barlow">
              <p>Kira Whittle</p>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-veryDarkGrayishBlue text-2xl text-left font-barlow z-10 relative mt-2">
            Such a life-changing experience. Highly recommended!
          </p>
          <p className="text-left text-veryDarkGrayishBlue opacity-70 font-barlow mt-4">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
