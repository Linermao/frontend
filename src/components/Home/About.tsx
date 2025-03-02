"use client"

import { Button } from "@heroui/button";
import Image from "next/image";

import IntroductionCard from "../Card/IntroductionCard";

import avatar from "@/assets/avatar.jpg"
import Download from "@/assets/icons/download.svg"




export default function About() {
  return (
    <>
      <div id="about" className="flex flex-col justify-center items-center h-screen gap-24">
        <div className="flex md:flex-row flex-col items-center gap-10 w-[850px]">
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">About Me</p>
            <p className="text-2xl font-bold text-gray-300">Being the both speaker of words and doer of deeds.</p>
            <div className="flex gap-4">
              <Button color='primary' className="text-black">
                Download CV
              </Button>
              <Button >
                Scroll down
              </Button>
            </div>
          </div>
          <div>
            <Image src={avatar} alt="avatar" className="rounded-2xl w-72 h-72" />
          </div>
        </div>
        <div className="md:w-[940px] w-[450px]">
          <IntroductionCard />
        </div>

      </div>
    </>
  );
}
