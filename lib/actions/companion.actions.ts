"use server"

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase"

export const createCompanion = async (formaData: CreateCompanion) => {
    const { userId: author } = await auth()
    const supabaase = createSupabaseClient()

    const { data, error } = await supabaase
        .from("companions")
        .insert({
            ...formaData,
            author,
        })
        .select()
        
    if (error) throw new Error(error?.message || "Failed to create companion")

    return data[0]
    
}