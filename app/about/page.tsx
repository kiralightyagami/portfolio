import { Collage } from "../components/collage";
import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { Timeline } from "../components/timeline";
import { Scales } from "../components/scales";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <Heading as="h1">
          About Me
        </Heading>
        <Subheading>
          I am a software engineer with a passion for building innovative web
          applications and tools. I specialize in creating performant,
          pixel-perfect experiences using modern technologies like React,
          TypeScript, and Solana blockchain. My recent projects include Pixel
          Pilot - a platform for mathematical animations, AeroFlux - a suite of
          Solana tools, and Solana-mpc-tss - a TypeScript library for blockchain
          cryptography. I'm constantly learning and exploring new technologies
          to build better solutions.
        </Subheading>
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
