import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { ContactForm } from "../components/contact-form";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10" > 
        <Heading as="h1">
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
