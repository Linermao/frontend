import Card from "./Card"

import { d_runTime } from "@/data/site"

export default function SiteCard(){
  return(
    <>
      <Card className="flex gap-5 justify-center items-center p-10">
        <p>本小卖部已经开张 {d_runTime} 天</p>
      </Card>
    </>
  )
}
