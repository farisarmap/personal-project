import DisplayCard from "@/components/card/display-card";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

//! resolve mobile response (!IMPORTANT)

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
      <section className="font-tts lg:flex lg:justify-center lg:h-[250px] h-fit border-b-2 border-black">
        <h1 className="lg:text-[230px] text-[105px] text-defColorText lg:text-center">
          FARIS SARMA
        </h1>
      </section>

      {/* Main content */}
      <section className="px-5 lg:border-b-2 mb-10 lg:border-black flex flex-col lg:flex-row">
        <div className="w-full lg:w-[65%] pt-5 lg:p-10 lg:border-b-0 lg:border-r-2 border-black">
          {/* Heading */}
          <h1 className=" text-2xl lg:text-4xl text-defColorText font-extrabold tracking-wide leading-normal uppercase ">
            Take a look at my experience in software engineering along with the {" "}
            <span className="text-tersier">projects, articles, and products</span>{" "}
            I`ve worked on
          </h1>
          <br />
          <br />
          {/* Subheading */}
          <p className="text-2xl lg:text-4xl text-defColorText font-extrabold tracking-wide leading-normal uppercase">
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

        <div className="hidden lg:w-[35%] lg:flex lg:justify-center lg:items-center lg:mt-0">
          <div className="hidden lg:w-[350px] lg:h-[350px] lg:bg-secondary lg:border lg:border-black lg:rounded-lg lg:flex lg:justify-center lg:items-center">
            <Image src={"/icon/avatar/avatar.png"} height={350} width={350} alt="avatar" />
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-20 border-t-2 border-b-2 border-black">
        <h1 className="text-[64px] lg:text-[128px] text-defColorText font-extrabold lg:px-5 mb-5 lg:mb-20">Project Collections</h1>
        <div className="grid grid-cols-1 lg:flex lg:justify-center gap-6 items-center mb-20">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>

        <div className="flex justify-center items-center mb-10">
          <Link href={"/projects"}>
            <button className="dark:bg-slate-200 w-full bg-black duration-200">
              <div
                className="bg-slate-200 dark:bg-black dark:border-slate-200 active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"
              >
                <h4 className="dark:text-slate-200 duration-200">
                  <div className="flex justify-start items-center">See More</div>
                </h4>
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 border-b-2 border-black">
        <h1 className="text-[64px] lg:text-[128px] text-defColorText font-extrabold px-5 mb-5 lg:mb-20">Latest Articles</h1>
        <div className="grid grid-cols-1 lg:flex lg:justify-center gap-6 items-center mb-20">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
        <div className="flex justify-center items-center mb-10">
          <Link href={"/articles"}>
            <button className="dark:bg-slate-200 w-full bg-black duration-200">
              <div
                className="bg-slate-200 dark:bg-black dark:border-slate-200 active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"
              >
                <h4 className="dark:text-slate-200 duration-200">
                  <div className="flex justify-start items-center">See More</div>
                </h4>
              </div>
            </button>
          </Link>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}
