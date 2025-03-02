import { d_skills } from "@/data/work"
import Image from "next/image";

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {d_skills.map((skill, index) => (
        <div
          key={index}
          className="flex bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full"
        >
          {/* 文字部分 */}
          <div className="p-4 flex flex-col flex-grow gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {skill.introduce}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Work(){

  return (
    <>
      <div id="work" className="h-screen flex flex-col justify-center items-center gap-8">
        <div className="flex items-start w-[850px]">
          <div className="flex flex-col gap-2">
            <p className="text-white text-2xl font-bold">
              Essential Tools I use
            </p>
            <p className="text-gray-400 text-base">
              Discover the powerful tools and technologies I use to create exceptional<br />
              high-performing websites & applications.
            </p>
          </div>
        </div>
        <div className="w-[850px]">
          <SkillsGrid />
        </div>
      </div>
    </>
  )
}