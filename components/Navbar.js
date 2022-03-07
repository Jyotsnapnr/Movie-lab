import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
  <nav className="bg-gray-700 items-start text-lg px-2 ">
  <div className="font-bold text-neutral-100 p-4 max-w-7xl tracking-widest container flex flex-wrap justify-between items-center mx-auto">
  <div className="font-neue">
  <Link href="/" passHref>
<a className="text-base md:text-2xl ">Movie<span className="text-yellow-600">Lab</span></a></Link>
</div>
<div className="flex flex-row-reverse mt-2">

<Link href="/contact" passHref>
<button className="bg-yellow-700 text-white py-3 px-6 rounded text-sm font-moch">Contact Us</button>
</Link>
  </div>
  </div>
  </nav>
  )
}

export default Navbar