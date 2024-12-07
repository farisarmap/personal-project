import DisplayCard from "@/components/card/display-card";
import { navbar } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Home() {
  return (
    <main className=" bg-primary min-h-screen">
      <nav className=" flex w-full flex-row justify-between px-6 h-[98px] border-b-2 border-black">
        <div className=" w-[10%] flex items-center px-20 py-14">
          <h1 className=" text-6xl font-tts text-[#303030] rotate-12 uppercase">f</h1>
        </div>
        <div className="w-[70%] flex justify-between items-center pl-32">
          <ul className=" w-[60%] flex flex-row justify-between px-4">
            {navbar.map((item, idx) => (
              <Link href={item.link} key={`nav-${idx}`}>
                <li className=" text-[20px] text-[#303030] font-light">{item.name}</li>
              </Link>
            ))}
          </ul>
          <div className="w-1/5 flex justify-center h-[50px] ">
            <button className=" bg-secondary text-black font-bold text-[20px] px-6 rounded-full border border-black">Get in Touch</button>
          </div>
        </div>
      </nav>
      <section className=" font-tts flex justify-center h-[300px] border-b-2 border-black">
        <h1 className=" text-[250px] text-[#303030]">FARIS SARMA</h1>
      </section>
      <section className="px-5 border-b-2 border-black flex">
        <div className=" w-[65%] p-10 border-r-2 border-black">
          {/* Heading */}
          <h1 className="text-4xl text-[#303030] font-extrabold tracking-wide leading-normal uppercase ">
            Take a look at my experience in software engineering along with the {" "}
            <span className="text-tersier">projects, articles, and products</span>{" "}
            I've worked on
          </h1>
          <br />
          <br />
          {/* Subheading */}
          <p className="text-4xl text-[#303030] font-extrabold tracking-wide leading-normal uppercase">
            <span className=" text-tersier">Welcome to my portfolio</span>
            —where I showcase my skills, share insights through articles, and present the products I've developed.
          </p>
          <br />
          <br />
          <div className="flex items-center">
            <Link href={"http://linkedin.com/in/faris-sarma"} rel="noopener noreferrer" target="_blank">
              <LiaLinkedin size={50} color="#303030" />
            </Link>
            <Link href={"http://github.com/farisarmap"} rel="noopener noreferrer" target="_blank">
              <BsGithub size={35} color="#303030" />
            </Link>
          </div>
        </div>
        <div className="w-[35%] flex justify-center items-center">
          <div className="w-[400px] h-[380px] bg-secondary border border-black rounded-lg flex justify-center items-center">
            <Image src={"/icon/avatar/avatar.png"} height={350} width={350} alt="avatar" />
          </div>
        </div>

      </section>
      <section className=" py-20 bg-[#faf4ef] border-b-2 border-black">
        <h1 className=" text-[128px] text-[#303030] font-extrabold mb-10 px-16">Project Collections</h1>
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-4 gap-6">
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#faf4ef] border-b-2 border-black">
        <h1 className=" text-[128px] text-[#303030] font-extrabold mb-10 px-16">Latest Articles</h1>
        <div className="flex justify-center gap-6 items-center mb-20">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
      </section>
      <br />
      <br />
    </main>
  );
}
