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


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      
      <Container className="min-h-screen px-4 sm:px-6 md:pt-20 md:pb-10 md:px-12">
        <Scales className="hidden md:block" />
        <Heading as="h1" className="mt-16 md:mt-0">
          Asvin Shrivas
        </Heading>
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
