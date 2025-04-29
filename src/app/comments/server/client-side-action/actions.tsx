"use server"

import { revalidatePath } from "next/cache"
import { createCommentSchema, CreateCommentValues } from "@/app/comments/schema"

import { User } from "@/lib/auth"
import { db } from "@/lib/db"
import { delay } from "@/lib/utils"

export async function createComment(input: CreateCommentValues, user: User) {
  await delay(700)
  const { text } = createCommentSchema.parse(input)

  await db.createComment({
    text,
    user,
  })

  revalidatePath("/comments/server/client-side-action")
}
