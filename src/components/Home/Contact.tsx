import CommitForm from "../CommitForm"

export default function Contact(){
  return (
    <>
      <div className="h-screen flex items-center justify-center gap-16">
        <div className="flex flex-col text-4xl font-bold">
          Let us work <br /> 
          together today!
        </div>
        <div className="flex flex-col bg-[#121212] p-16 rounded-xl gap-8">
          <p className="text-3xl font-bold">Contact Me:</p>
          <CommitForm />  
        </div>
      </div>
    </>
  )
}