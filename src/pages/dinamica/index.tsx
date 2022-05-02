import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/dinamica/abc">
            <a>Go to pages/dinamica/[pid].tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/dinamica/abc?foo=bar">
            <a>Also goes to pages/dinamica/[pid].tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/dinamica/abc/a-comment">
            <a>Go to pages/dinamica/[pid]/[comment].tsx</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home