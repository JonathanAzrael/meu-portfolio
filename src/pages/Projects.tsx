import Image from "next/image";
import { GridContainer } from "../component/gridcontainer";
import { HeaderBar } from "../component/headerbar";
import { Background } from "../component/background";

export default function Projects(){
  return(
    <section>
      <GridContainer>
        <Background>
          <HeaderBar />
          <div className="flex">
            <a href="https://github.com/JonathanAzrael/itau_web">
              {/* <Image
                src=[]
                alt="itau"
                className="w-full h-screen"
              /> */}
            </a>
          </div>
        </Background>
      </GridContainer>
    </section>
  )
}