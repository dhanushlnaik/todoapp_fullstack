import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { buttonVariants } from "./LandingBut";


const LandingText: React.FC = () => {
  return (
    <div>
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center text-center ">
        <div className="right">
          <div className=" up flex h-[70vh] w-[50vw] justify-center">
            <div className="left flex h-full w-[30vw] flex-col items-center justify-center text-left">
              <h1 className="text-6xl font-bold text-white dark:text-white">
                Your one stop for managing
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "todo.",
                    1000,
                    "time.",
                    1000,
                    "budget",
                    1000,
                    "work",
                    1000
                    // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-md mb-3 mt-8 text-white dark:text-white">
              Stay organized and on top of your tasks and finances with our all-in-one to-do and budget planner. Whether you're managing personal projects or household expenses, we've got you covered.
              </p>
              <div className="but z-20 flex h-[100px]  w-[400px] items-center justify-start">
                <Link
                  href="/home"
                  className={buttonVariants({
                    variant: "bodblue",
                    size: "lg",
                  })}
                  style={{ marginRight: "20px" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="absolute bottom-0"
            src="city_shadow.svg"
            alt="city"
            layout="fill"
            objectFit="cover"
          />

          <Image
            className="absolute bottom-0"
            src="phonedelivery_guy.svg"
            alt="city"
            layout="fill"
          />
          <div className=" down relative z-10 h-[30vh] w-[100vw] bg-[#0089a3] "></div>
        </div>
      </div>
    </div>
  );
};

export default LandingText;