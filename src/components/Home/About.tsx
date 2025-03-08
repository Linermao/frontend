"use client"

import Button from "@/components/ui/Button"
import Image from "next/image";

import IntroductionCard from "../Card/IntroductionCard";

import myself from "@/assets/myself.jpg"

export default function About() {
  return (
    <>
      <div id="about" className="flex flex-col justify-center items-center h-screen gap-24">
        <div className="flex md:flex-row flex-col items-center gap-10 w-[850px]">
          <div className="flex flex-col flex-grow gap-4">
            <p className="text-4xl font-bold">About Me</p>
            <p className="text-2xl">
              A CS students from <span className="font-bold">Hangzhou Dianzi University.</span>
              <br></br>
              Grading in 2026.6
            </p>
            <div className="flex gap-4">
              <Button variant="gray" shadow="md">
                Download CV
              </Button>
              {/* <Button variant="primary" shadow="md">
                Scroll down
              </Button> */}
            </div>
          </div>
          <div>
            <Image src={myself} alt="myself" className="rounded-2xl w-72 h-72" />
          </div>
        </div>
        <div className="md:w-[940px] w-[450px]">
          <IntroductionCard />
        </div>

      </div>
    </>
  );
}
