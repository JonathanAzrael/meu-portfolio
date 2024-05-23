import Image from "next/image"
import Link from "next/link"


import Logo from "../assets/logocolor.png"

export function HeaderBar() {
  return (
    <section className="z-[999] w-full flex items-center justify-center pb-20">
        <div className=" border items-center justify-between border-orange-600 mt-6 px-8 rounded-full w-[1200px] h-[80px] flex ">
          <a href="/">
            <Image
              src={Logo}
              className="w-auto h-[30px]"
              alt="logo"
            />
          </a>
          <div className="opacity-100 flex justify-between items-center gap-8">
            <Link href="/" className="font-medium text-orange-jf hover:text-orange-600">Home</Link>
            <Link href="/about" className="font-medium text-orange-jf hover:text-orange-600">About-me</Link>
            <Link href="/Projects" className="font-medium text-orange-jf hover:text-orange-600">Projects</Link>
            <Link href="/Contact" className="font-medium text-orange-jf hover:text-orange-600">Contact</Link>
          </div>
        </div>
    </section>
  )
}