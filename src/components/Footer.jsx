import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between">
      <div className="text-sm">©2023 Lamamia. All rights reserved.</div>
      <div className=" flex items-center gap-5">
        <Image src="/images/1.png" width={"20"} height={"20"} className="cursor-pointer opacity-[0.6]" alt="Lama Dev Facebook Account" />
        <Image src="/images/2.png" width={"20"} height={"20"}  className="cursor-pointer opacity-[0.6]" alt="Lama Dev" />
        <Image src="/images/3.png" width={"20"} height={"20"}  className="cursor-pointer opacity-[0.6]" alt="Lama Dev" />
        <Image src="/images/4.png" width={"20"} height={"20"}  className="cursor-pointer opacity-[0.6]" alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer