import React from 'react'

function Footer() {
    const date = new Date();
  return (
    <div className="text-center h-32 flex items-center justify-center">
    <p className="text-xl text-gray-800 text-white">&copy; Copyright {date.getFullYear()} <span className="font-bold"></span>MovieLab</p>
    
   </div>
  )
}

export default Footer