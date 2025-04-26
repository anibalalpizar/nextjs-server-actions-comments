import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl space-y-8 px-4 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Client-Side Server Action Calls</CardTitle>
            <CardDescription>
              Learn why you need to wrap client-side server action calls in
              React transitions.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full" variant="default">
              <Link href="/comments/server/client-side-action">View Demo</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>useActionState Hook</CardTitle>
            <CardDescription>
              Learn how to use server actions with React 19&apos;s
              useActionState hook.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full" variant="default">
              <Link href="/comments/server/use-action-state">View Demo</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Server Actions with React Query & Infinite Loading
            </CardTitle>
            <CardDescription>
              Learn how to use server actions with React Query and why you
              should never use server actions to fetch data.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full" variant="default">
              <Link href="/comments/infinite-loading">View Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
