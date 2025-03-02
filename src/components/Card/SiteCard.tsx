import Card from "./Card"

import { d_runTime } from "@/data/site"

export default function SiteCard(){
  return(
    <>
      <Card className="flex gap-5 justify-center items-center p-10">
        <p>{d_runTime}</p>
      </Card>
    </>
  )
}
