import Section from "@/component/ui/Section";
import MailOptions from "@/component/common/MailOptions";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-[15px] leading-7 text-ink/90">
        I&apos;m happy to hear about research collaborations, PhD positions and
        backend engineering roles. Email is the best way to reach me:
      </p>
      <p className="my-4 font-serif text-xl">
        <a href={`mailto:${personalInfo.email}`} className="link">
          {personalInfo.email}
        </a>
      </p>
      <MailOptions email={personalInfo.email} />
      <p className="mt-4 text-[15px] text-muted">
        Phone / WhatsApp:{" "}
        <a href={`tel:${personalInfo.phone}`} className="link">
          {personalInfo.phone}
        </a>
      </p>
    </Section>
  );
}
