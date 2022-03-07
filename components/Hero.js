import React from 'react'
import Image from "next/image";


function Hero() {
  return (
    <div className="text-center bg-white pb-2 pt-0">
<div className="w-60 mx-auto">
    <Image src={"/undraw_horror_movie_3988.png"} width={100} height={100} layout="responsive"/>
</div>

<h1 className="text-2xl text-gray-700 uppercase font-bold">MovieLab</h1>
<p className="text-gray-500">Largest collection of movies</p>


    </div>
  )
}


export default Hero