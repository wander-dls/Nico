"use client"

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const SearchInput = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const query = searchParams.get("topic") || ""

    const [ searchQuery, setSearchQuery ] = useState("")

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const delayDebounceFn = setTimeout(() => {
            if(searchQuery) {
                const newUrl = formUrlQuery({ params: searchParams.toString(), key: "topic", value: searchQuery })
                router.push(newUrl, {scroll: false})
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["topic"]
                })
                router.push(newUrl, {scroll: false})
            }
        }, 500)
        
    }, [searchQuery, router, searchParams, pathname])

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
        <Image src="/icons/search.svg" alt="Search Icon" width={15} height={15} />
        <input placeholder="Search Companioons..." className="outline-none " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

    </div>
  )
}
export default SearchInput