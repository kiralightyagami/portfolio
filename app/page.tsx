import { Container } from "./components/container";
import { Projects } from "./components/projects";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10" > 
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Asvin Shrivas</h1>
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
          I am a software engineer with a passion for building web applications.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
