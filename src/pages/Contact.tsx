import Image from "next/image";

import Bg from "../assets/bgteste.png"
import { HeaderBar } from "../component/headerbar";
import { Background } from "../component/background";

export default function Contact() {
  return(
    <section className="flex justify-center items-center">
      <Background>
        <HeaderBar />
        <div className="flex justify-center">
          <h3 className="text-4xl text-white">Contact-me</h3>
        </div>
      </Background>
    </section>
  )
}