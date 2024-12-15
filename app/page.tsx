import DisplayCard from "@/components/card/display-card";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export const metadata = {
  title: 'Faris Sarma - Software Engineer Portfolio',
  description: 'Explore my portfolio showcasing projects, articles, and products I have developed as a software engineer.',
  openGraph: {
    title: 'Faris Sarma - Software Engineer Portfolio',
    description: 'Explore my portfolio showcasing projects, articles, and products I have developed as a software engineer.',
    images: [
      {
        url: '/icon/avatar/avatar.png',
        width: 800,
        height: 600,
        alt: 'Faris Sarma Avatar',
      },
    ],
  },
};


export default function Home() {
  return (
    <div className="">
      <section className=" font-tts flex justify-center h-[250px] border-b-2 border-black">
        <h1 className=" text-[230px] text-defColorText text-center">FARIS SARMA</h1>
      </section>
      <section className="px-5 border-b-2 border-black flex">
        <div className=" w-[65%] p-10 border-r-2 border-black">
          {/* Heading */}
          <h1 className="text-4xl text-defColorText font-extrabold tracking-wide leading-normal uppercase ">
            Take a look at my experience in software engineering along with the {" "}
            <span className="text-tersier">projects, articles, and products</span>{" "}
            I`ve worked on
          </h1>
          <br />
          <br />
          {/* Subheading */}
          <p className="text-4xl text-defColorText font-extrabold tracking-wide leading-normal uppercase">
            <span className=" text-tersier">Welcome to my portfolio</span>
            —where I showcase my skills, share insights through articles, and present the products I`ve developed.
          </p>
          <br />
          <br />
          <div className="flex items-center gap-4">
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
      <section className=" py-20 border-b-2 border-black">
        <h1 className=" text-[128px] text-defColorText font-extrabold px-16">Project Collections</h1>
        <div className="flex justify-end pr-36 mb-10">
          <Link href={"/projects"}>
            <button className="relative text-defColorText font-extrabold text-[30px] uppercase group hover:scale-105 transition-transform duration-300">
              See More
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                <span className="block w-[100px] h-[4px] bg-tersier transition-all duration-300 group-hover:w-[150px]"></span>
                <span className="block w-4 h-4 border-t-4 border-r-4 border-tersier rotate-45"></span>
              </div>
            </button>
          </Link>
        </div>
        <div className="flex justify-center gap-6 items-center mb-20">
          {/* <div className="grid grid-cols-4 gap-6"> */}
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          {/* </div> */}
        </div>
      </section>
      <section className="py-20 border-b-2 border-black">
        <h1 className=" text-[128px] text-defColorText font-extrabold px-16">Latest Articles</h1>
        <div className="flex justify-end pr-36 mb-10">
          <Link href={"/articles"}>
            <button className="relative text-defColorText font-extrabold text-[30px] uppercase group hover:scale-105 transition-transform duration-300">
              See More
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                <span className="block w-[100px] h-[4px] bg-tersier transition-all duration-300 group-hover:w-[150px]"></span>
                <span className="block w-4 h-4 border-t-4 border-r-4 border-tersier rotate-45"></span>
              </div>
            </button>
          </Link>
        </div>
        <div className="flex justify-center gap-6 items-center mb-20">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>

      </section>
      <br />
      <br />
    </div>
  );
}
