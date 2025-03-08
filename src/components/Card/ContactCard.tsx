import Card from "@/components/Card/Card"
import CommitForm from "@/components/CommitForm"

export default function ContactCard(){
  return (
    <>
      <Card>
        <div className="flex flex-col p-16 gap-8">
          <p className="text-3xl font-bold">Contact Me:</p>
          <CommitForm />  
        </div>
      </Card>
    </>
  )
}