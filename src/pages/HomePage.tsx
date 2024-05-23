import Image from "next/image";

import { HeaderBar } from "../component/headerbar";
import { Background } from "../component/background";

export default function HomePage() {
  return(
    <section>
      <Background>
        <HeaderBar />
        <div className="flex justify-center">
          <h1 className="text-4xl text-white font-bold">Welcome to my portfolio</h1>
        </div>
      </Background>
    </section>
  )
}