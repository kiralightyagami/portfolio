import { Container } from "./components/container";
import { Projects } from "./components/projects";
import { Heading } from "./components/heading";
import { Subheading } from "./components/subheading";
import { projects } from "./constants/project";
import { Testimonials } from "./components/testimonials";
export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10" > 
        <Heading as="h1">
          Asvin Shrivas
        </Heading>
        <Subheading>
          I am a software engineer with a passion for building web applications.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <Testimonials />  
      </Container>
    </div>
  );
}
