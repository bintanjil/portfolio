import Section from "@/component/ui/Section";
import { awards, contests, platforms } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements" title="Honors &amp; Competitive Programming">
      <ul className="space-y-2.5 text-[15px] leading-relaxed text-ink/90">
        {awards.map((award) => (
          <li key={award.title}>
            <span className="font-medium text-ink">{award.title}</span>, {award.organization}{" "}
            <span className="text-faint">({award.period})</span>
          </li>
        ))}
        {contests.map((contest) => (
          <li key={contest.name}>
            <span className="font-medium text-ink">{contest.name}</span>: {contest.result},{" "}
            {contest.team}.{" "}
            <a href={contest.link} target="_blank" rel="noopener noreferrer" className="link text-sm">
              [standings]
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[15px] leading-7 text-ink/90">
        <span className="font-medium text-ink">Online judges: </span>
        {platforms.map((platform, i) => (
          <span key={platform.name}>
            <a href={platform.link} target="_blank" rel="noopener noreferrer" className="link">
              {platform.name}
            </a>
            {platform.handle && <span className="text-muted"> ({platform.detail})</span>}
            {i < platforms.length - 1 && ", "}
          </span>
        ))}
        .
      </p>
    </Section>
  );
}
