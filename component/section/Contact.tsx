import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import MailOptions from "@/component/common/MailOptions";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <Section id="contact" number="07" eyebrow="Contact" title="Get in Touch">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-neutral-500">
              Open to research collaborations, MSc and PhD positions and backend engineering roles.
              Email is the best way to reach me.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-4 inline-block break-all text-3xl font-semibold tracking-tight text-neutral-950 link-u sm:text-4xl"
            >
              {personalInfo.email}
            </a>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
              Phone / WhatsApp ·{" "}
              <a href={`tel:${personalInfo.phone}`} className="text-neutral-950 hover:underline">
                {personalInfo.phone}
              </a>
            </p>
          </div>
          <MailOptions email={personalInfo.email} />
        </div>
      </Reveal>
    </Section>
  );
}
