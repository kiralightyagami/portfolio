import { Container } from "../components/container";
import { Projects as ProjectsComponent } from "../components/projects";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { projects } from "../constants/project";
import { Scales } from "../components/scales";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <Heading as="h1" className="mt-16 md:mt-0">
          Projects
        </Heading>
        <Subheading>
          I am a software engineer with a passion for building innovative web
          applications and tools. I specialize in creating performant,
          pixel-perfect experiences using modern technologies like React,
          TypeScript, and Solana blockchain.
        </Subheading>
        <ProjectsComponent projects={projects} />
      </Container>
    </div>
  );
}
