"use server"

import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { delay } from "@/lib/utils"
import { createCommentSchema } from "@/app/comments/schema"

type FormState = { text: string; error: string } | undefined

export async function createComment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    await delay(700)

    const values = Object.fromEntries(formData.entries())
    const { text } = createCommentSchema.parse(values)

    if (text.includes("Java")) {
      return { text, error: "No profanity allowed" }
    }

    const currentUser = await getCurrentUser()

    if (!currentUser) {
      throw new Error("Unauthorized")
    }

    await db.createComment({
      text,
      user: currentUser,
    })

    revalidatePath("/comments/server/use-action-state")
  } catch (error) {
    console.error(error)
    return { text: "", error: "Failed to create comment" }
  }
}
