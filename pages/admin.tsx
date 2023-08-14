import Layout from "../components/layout"
import Link from "next/link"
import React from "react"

export default function Page() {
  return (
    <>
    <Layout>
      <h1>This page is protected by Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <Link href="https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware">
          the docs
          </Link>        .
      </p>
    </Layout>
 </> )
}
