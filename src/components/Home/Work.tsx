import Card from "@/components/Card/Card";
import Button from "../ui/Button";

import { d_skills, d_projects } from "@/data/work"

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {d_skills.map((skill, index) => (
        <div
          key={index}
          className="flex border border-gray-600 rounded-lg shadow-lg overflow-hidden justify-center items-center p-2 gap-2"
        >
          {/* 图片部分 */}
          <div className="w-16 h-16 bg-gray-600 rounded-lg">
            <img src={skill.cover} alt={skill.title} className="p-2"/>
          </div>

          {/* 文字部分 */}
          <div className="flex flex-grow flex-col gap-1">
            <h3 className="text-lg font-semibold">
              {skill.title}
            </h3>
            <p className="">
              {skill.introduce}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

function Projects(){
  return(
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        { d_projects.map((project, index)=>(
            <Card key={index}>
              <div className="flex flex-col justify-center items-center">
                <div className="p-4 w-72 h-72">
                  <img src={project.cover} alt={project.title} className="rounded-xl object-cover"/>
                </div>
                <div className="flex flex-col w-full px-4 pb-4 gap-2">
                  <p className="text-xl">{project.title}</p>
                  <div className="flex gap-3">
                    {project.tags.map((tag, index)=>(
                      <Button key={index} variant="gray" size="sm">
                        <p>{tag}</p>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
        ))}
      </div>

    </>
  )
}

export default function Work(){

  return (
    <>
      <div id="work" className="h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex w-[75%]">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">
              Essential Tools I use
            </p>
            <p className="text-base">
              Discover the powerful tools and technologies I use to create exceptional<br />
              high-performing websites & applications.
            </p>
          </div>
        </div>
        <div className="w-[1050px]">
          <SkillsGrid />
        </div>
        <div className="flex w-[75%] mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">
              My Highlight Projects
            </p>
            <p className="text-base">
              Discover the powerful tools and technologies I use to create exceptional<br />
              high-performing websites & applications.
            </p>
          </div>
        </div>
        <div className="max-w-[1050px]">
          <Projects />
        </div>
      </div>
    </>
  )
}