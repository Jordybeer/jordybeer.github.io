import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"
import React from "react"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus} style={{ textAlign: "center" }}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
  <a
      href={`/api/auth/signin`}
      className={styles.buttonPrimary}
      onClick={(e) => {
        e.preventDefault()
        signIn()
      }}
    >
      Sign in
    </a>
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/api/auth/examples/protected">About</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
