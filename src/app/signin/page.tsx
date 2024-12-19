import { Metadata } from "next"
import { SignInPageClient } from "./page-client"

export const metadata: Metadata = {
    title: "Welcome to Code Ant AI",
    description: "Sign in to Code Ant AI",
}
const SignInPage = () => {
  return (
    <SignInPageClient />
  )
}

export default SignInPage