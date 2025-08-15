import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
// import { ContactForm } from "../components/contact-form";
import { Scales } from "../components/scales";
import { GetInTouch } from "../components/get-in-touch";
import Link from "next/link";
import { IconBrandX } from "@tabler/icons-react";
import { SectionHeading } from "../components/section-heading";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <Heading as="h1" className="mt-16 md:mt-0">
          Contact
        </Heading>
        <Subheading>
          I'm always looking for new opportunities and collaborations. Reach out
          to me on my socials or send me an email.
        </Subheading>
        <SectionHeading className="mt-12">Get in touch</SectionHeading>
        <div className="mt-4">
        <GetInTouch />

        <div className="flex items-center gap-2 p-4 sm:p-12">
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            or drop me a message on my socials.
          </p>
          <Link href="https://x.com/ShrivasAsvin">
            <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
          </Link>
        </div>
        </div>
        {/* <SectionHeading className="mt-12">Get in touch</SectionHeading>
        <ContactForm />  */}
      </Container>
    </div>
  );
}
