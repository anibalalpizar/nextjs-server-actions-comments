import { delay } from "./utils"

export interface User {
  name: string
  avatar: string
}

const fakeUser: User = {
  name: "Florian Walther",
  avatar: "FW",
}

export async function getCurrentUser(): Promise<User | null> {
  await delay(500)
  return fakeUser
}

export function useUser() {
  return { user: fakeUser }
}
