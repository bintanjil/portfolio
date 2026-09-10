import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { Card, CardContent } from "@/component/ui/card";
import { personalInfo } from "@/data/personal";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "@/component/common/SocialLinks";
import ContactForm from "@/component/form/ContactForm";
import CopyEmailButton from "@/component/common/CopyEmailButton";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Feel free to reach out for opportunities, collaborations, or just to say hi."
          centered
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="grid gap-4">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <CardContent className="flex items-center gap-4 pt-6">
                      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">
                          {label}
                        </p>
                        <p className="text-sm text-stone-600">{value}</p>
                      </div>
                    </CardContent>
                  );

                  return href ? (
                    <a key={label} href={href}>
                      <Card className="transition-shadow hover:shadow-md">
                        {content}
                      </Card>
                    </a>
                  ) : (
                    <Card key={label}>{content}</Card>
                  );
                })}
              </div>

              <div className="space-y-4">
                <CopyEmailButton email={personalInfo.email} />
                <div>
                  <p className="mb-3 text-sm text-stone-600">
                    Connect with me on social media
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
