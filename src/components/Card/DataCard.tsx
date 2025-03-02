import Card from "./Card"

import { s_aside } from "@/styles/Blog"


export default function DataCard(){
  return (
    <>
      <Card className="flex gap-5 justify-center items-center p-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>文章</div>
          <div className={s_aside.number}>52</div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>分类</div>
          <div className={s_aside.number}>52</div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>标签</div>
          <div className={s_aside.number}>52</div>
        </div>
      </Card>
    </>
  )
}