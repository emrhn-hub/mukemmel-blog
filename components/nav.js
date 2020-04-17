import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

function Nav() {
  return <nav>
    <Link href="">
      <a>sea</a>
    </Link>

    <style jsx>{`
      
    `}</style>
  </nav>
}

export default Nav
