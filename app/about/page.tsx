import { Collage } from "../components/collage";
import { Container } from "../components/container";
import { Timeline } from "../components/timeline";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am a software engineer with a passion for building innovative web
          applications and tools. I specialize in creating performant,
          pixel-perfect experiences using modern technologies like React,
          TypeScript, and Solana blockchain. My recent projects include Pixel
          Pilot - a platform for mathematical animations, AeroFlux - a suite of
          Solana tools, and Solana-mpc-tss - a TypeScript library for blockchain
          cryptography. I'm constantly learning and exploring new technologies
          to build better solutions.
        </p>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love to travel and explore new places. I have been to many countries
          and I love to experience different cultures and cuisines.
        </p>
        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here is a timeline of my life achievements.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
