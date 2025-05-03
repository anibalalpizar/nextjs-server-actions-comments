import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"

import { db } from "@/lib/db"
import { delay } from "@/lib/utils"
import { Comment } from "../../comment"
import CommentForm from "./comment-form"

export default function Page() {
  return (
    <main className="mx-auto max-w-xl space-y-4 p-4">
      <Link
        href="/"
        className="text-primary flex items-center gap-2 text-sm hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h2 className="text-xl font-bold">Comments</h2>
      <CommentForm />
      <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        <CommentsList />
      </Suspense>
    </main>
  )
}

async function CommentsList() {
  await delay(2000)

  const comments = await db.findComments({
    take: 10,
    sort: "desc",
  })

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
