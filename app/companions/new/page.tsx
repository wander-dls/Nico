
import CompanionForm from "@/components/CompanionForm"
import { newCompanionsPermission } from "@/lib/actions/companion.actions"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const NewCompanion = async () => {
  const { userId } = await auth()
  if(!userId) redirect("/sign-in")

    const canCreateCompanion = await newCompanionsPermission()

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center ">
      {canCreateCompanion ? (
          <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
        ) : (
          <article className="companion-limit items-center text-center">
              <Image src="/images/limit.svg" alt="limit" width={360} height={230} />
              <div className="cta-badge">
                Upgrade your plan
              </div>
              <h1>You reached your limit</h1>
              <p>You&apos;ve reached your companion limit. Upgrade to create more companions and premium features.</p>
              <Link href="/subscription" className="btn-primary w-full items-center justify-center" >Upgrade My Plan</Link> 
          
          </article>
          
        )}
    
    </main>
  )
}
export default NewCompanion