import ContactCard from "@/components/Card/ContactCard"

export default function Contact(){
  return (
    <>
      <div className="h-screen flex items-center justify-center gap-16">
        <div className="flex flex-col text-4xl font-bold">
          Let us work <br /> 
          together today!
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
    </>
  )
}