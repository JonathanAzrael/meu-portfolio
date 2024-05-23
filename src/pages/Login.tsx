import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logocolor.png"
import { Background } from "../component/background";

export default function Login() {
  return (
    <section>
      <Background>
          <div className="flex items-center justify-center h-screen z-[1]">
            <div className="bg-black shadow-2xl w-[350px] h-[400px] rounded-2xl flex justify-center animate-fadeIn absolute z-[999]">
              <div className="flex flex-col justify-between py-8">
                <Image 
                alt="Logo"
                src={Logo}
                className="w-full h-14"
                />
                <h1  className="text-xl text-white font-bold flex">Acesse meu Portfólio</h1>
                <Link href="/HomePage" className="bg-orange-600 hover:bg-orange-jf flex w-full h-[40px] items-center justify-center rounded-md">
                  <span className="text-white font-semibold">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
      </Background>
    </section>
  )
}