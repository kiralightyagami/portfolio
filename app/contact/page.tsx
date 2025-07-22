import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { ContactForm } from "../components/contact-form";
import { Scales } from "../components/scales";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10" > 
        <Scales />
        <Heading as="h1" className="mt-16 md:mt-0">
          Contact
        </Heading>
        <Subheading>
          I'm always looking for new opportunities and collaborations. Reach out to me on my socials or send me an email.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
