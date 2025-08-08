import { Container } from "./components/container";
import { Projects } from "./components/projects";
import { Heading } from "./components/heading";
import { Subheading } from "./components/subheading";
import { projects } from "./constants/project";
import { Testimonials } from "./components/testimonials";
import { Scales } from "./components/scales";
import { SectionHeading } from "./components/section-heading";
import { Skills } from "./components/skills";
import { GetInTouch } from "./components/get-in-touch";
import { ContainerTextFlip } from "./components/container-text-flip";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Heading as="h1" className="mt-16 md:mt-0">
            Asvin Shrivas 
          </Heading>
        <ContainerTextFlip words={["Full Stack Developer", "Web3 Enthusiast", "DevOps Evangelist", "Freelancer", "Blockchain Developer"]} />
        </div>
        <Subheading>
          I am a software engineer with a passion for building web applications.
        </Subheading>
        <Skills />
        <Projects projects={projects.slice(0, 3)} />
        <Testimonials />  
        <SectionHeading>Get in touch</SectionHeading>
        <div className="mt-2">
          <GetInTouch/>
        </div>
      </Container>
    </div>
  );
}
