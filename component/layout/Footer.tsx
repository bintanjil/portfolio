import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-5 pb-10 pt-20 sm:px-8">
      <div className="flex flex-col gap-1 border-t pt-5 text-xs text-faint sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p>{personalInfo.location}</p>
      </div>
    </footer>
  );
}
