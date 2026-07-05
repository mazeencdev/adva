import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: ["Roadmaps", "Tasks", "Automations", "Dashboards"],
  },
  {
    title: "Teams",
    links: ["Product", "Operations", "Marketing", "Leadership"],
  },
  {
    title: "Resources",
    links: ["Templates", "Guides", "Changelog", "Help Center"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Security", "Contact"],
  },
];

const badges = ["SOC 2 ready", "GDPR aligned", "99.9% uptime"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#14213d] text-white transition-colors duration-500 dark:bg-[#050915]">
      <div className="mx-auto max-w-[1180px] px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr_0.7fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold">Adva</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
              AI-assisted project management for clear plans, owners, and
              progress without scattered updates.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/72"
                >
                  <CheckCircle2 className="size-3" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-white/56">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="transition hover:text-white" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <button className="group flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#14213d] transition hover:bg-[#eaf0ff]">
              Start planning
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </button>
            <p className="flex items-center gap-2 text-sm text-white/62">
              <Mail className="size-4" />
              hello@adva.so
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Adva. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="transition hover:text-white" href="#">
              Terms of Service
            </a>
            <a className="transition hover:text-white" href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
