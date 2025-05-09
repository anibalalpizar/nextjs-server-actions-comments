"use server"

import { revalidatePath } from "next/cache"
import { createCommentSchema, CreateCommentValues } from "@/app/comments/schema"

import { getCurrentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { delay } from "@/lib/utils"

export async function createComment(
  input: CreateCommentValues
): Promise<{ error: string } | undefined> {
  try {
    await delay(700)
    const { text } = createCommentSchema.parse(input)

    const currentUser = await getCurrentUser()
    if (!currentUser) {
      throw new Error("You must be logged in to post a comment")
    }

    if (text.includes("Java")) {
      return { error: "Java is not allowed" }
    }

    await db.createComment({
      text,
      user: currentUser,
    })

    revalidatePath("/comments/server/client-side-action")
  } catch (error) {
    console.error("Error creating comment:", error)
    return { error: "Failed to create comment" }
  }
}
