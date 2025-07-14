import { Container } from "./components/container";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen"> 
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Hello, there!
        </h1>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-lg">
          I am a software engineer with a passion for building web applications.
        </p>
      </Container>
    </div>
  );
}
