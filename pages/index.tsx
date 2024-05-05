import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>;

const inter = Inter({ subsets: ["latin"] });

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      {/* Header */}

      <Header socials={socials} />

      {/*<Header />*/}

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Project */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/mf6K45w.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 30,
  };
};
