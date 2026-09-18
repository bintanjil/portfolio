const items = [
  "ICPC DHAKA 2025 — 519TH OF 1,842",
  "CODEFORCES PUPIL · 1211",
  "LEETCODE TOP 17%",
  "AIUB DEAN'S AWARD",
  "3.77 CGPA",
  "ASP.NET CORE",
  "NESTJS",
  "POSTGRESQL",
];

export default function Ticker() {
  const row = [...items, ...items];

  return (
    <div className="ticker-bar hidden overflow-hidden border-t border-neutral-800 bg-neutral-950 py-2.5 sm:block">
      <div className="flex w-max animate-marquee items-center gap-8 font-mono text-xs text-neutral-400">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap tracking-wider">{item}</span>
            <span className="text-green-600">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
