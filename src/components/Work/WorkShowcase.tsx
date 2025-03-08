"use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

import { d_projects } from "@/data/work";

const WorkShowcase = () => {


  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        {/* 图片自动播放 + 淡入淡出 */}
        <div className="relative w-[60%] h-[60%] overflow-hidden rounded-xl shadow-lg object-cover">
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={d_projects[index].cover}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={d_projects[index].cover}
                alt="Work Showcase"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </AnimatePresence> */}
        </div>

        {/* 底部文字描述 */}
        <div className="flex w-[60%] p-2 justify-between">
          <div className="text-4xl font-bold">
            My work (now is empty)
          </div>
          <div className="bg-black/70 text-white px-4 py-2 rounded-md text-center">
            {d_projects[0].introduction}
          </div>

        </div>
        
      </div>
    </>
  );
};

export default WorkShowcase;
