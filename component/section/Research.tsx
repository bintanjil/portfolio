import Section from "@/component/ui/Section";
import { currentResearch, researchInterests } from "@/data/research";

export default function Research() {
  return (
    <Section id="research" title="Research">
      {currentResearch && (
        <div className="border-l-2 border-accent pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Current work · {currentResearch.status}
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink">
            {currentResearch.link ? (
              <a href={currentResearch.link} target="_blank" rel="noopener noreferrer" className="link">
                {currentResearch.title}
              </a>
            ) : (
              currentResearch.title
            )}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {[currentResearch.area, currentResearch.affiliation, `since ${currentResearch.started}`]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {currentResearch.supervisor && (
            <p className="mt-0.5 text-sm text-muted">
              With <span className="text-ink">{currentResearch.supervisor}</span>
            </p>
          )}

          <p className="mt-4 text-[15px] leading-7 text-ink/85">{currentResearch.summary}</p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-ink/85 marker:text-faint">
            {currentResearch.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>

          <p className="mt-3 text-sm text-muted">
            <span className="font-medium text-ink">Methods:</span>{" "}
            {currentResearch.methods.join(", ")}
          </p>
        </div>
      )}

      <h3 className="mt-10 font-serif text-lg font-semibold text-ink">Interests</h3>
      <ul className="mt-3 grid list-disc gap-x-8 gap-y-1 pl-5 text-[15px] leading-7 text-ink/85 marker:text-accent sm:grid-cols-2">
        {researchInterests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </Section>
  );
}
