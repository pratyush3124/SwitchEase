"use client"

import Image from "next/image"

export default function Test() {
  return (
    <div className="grid grid-cols-2 full">
      <div className="mt-24 flex items-center justify-center text-7xl">
        Welcome to, <br /> SwitchEase
      </div>
      <div className="mt-24 flex items-center justify-center">
        <Image
          src="/cover.svg"
          alt="Image"
          className="dark:invert"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="mt-24 flex items-center justify-center">
        <a href="/home/articles" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Get Started
        </a>
      </div>
    </div >
  )
}