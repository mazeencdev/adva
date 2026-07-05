import {
  Bot,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  GitBranch,
} from "lucide-react";

const features = [
  {
    title: "AI task routing",
    description:
      "Adva reads project context, team load, and priority so the next owner is clear before work stalls.",
    icon: Bot,
    color: "bg-[#d3edd9]",
  },
  {
    title: "Live roadmap planning",
    description:
      "Turn goals into milestones, timelines, and working plans without bouncing between planning tools.",
    icon: GitBranch,
    color: "bg-[#d9cffb]",
  },
  {
    title: "Deadline intelligence",
    description:
      "Spot slipping work early with schedule signals that make project risk easy to act on.",
    icon: CalendarClock,
    color: "bg-[#eaf0ff]",
  },
  {
    title: "Executive visibility",
    description:
      "Summarize progress, blockers, and ownership in a clean view teams and leaders can both trust.",
    icon: ChartNoAxesColumnIncreasing,
    color: "bg-[#f4ead7]",
  },
];

export default function About() {
  return (
    <section className="w-full bg-white px-4 py-16 text-black transition-colors duration-500 dark:bg-[#080d18] dark:text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 w-fit rounded-full border border-[#14213d]/10 bg-[#14213d]/5 px-4 py-2 text-xs font-medium text-[#14213d] transition-colors duration-500 dark:border-white/10 dark:bg-white/10 dark:text-white/72">
              Built for calm execution
            </p>
            <h2 className="max-w-[620px] text-3xl font-semibold leading-tight md:text-4xl">
              A project workspace that thinks a step ahead.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-black/60 transition-colors duration-500 md:text-base dark:text-white/62">
            Adva keeps planning, ownership, and progress in one place, then
            adds just enough intelligence to make project management feel less
            manual.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex min-h-[230px] flex-col justify-between rounded-[28px] border border-black/5 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14213d]/5 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:shadow-black/20"
              >
                <div
                  className={`grid size-12 place-items-center rounded-2xl ${feature.color} text-[#14213d] ring-1 ring-black/0 dark:ring-white/10`}
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black transition-colors duration-500 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/58 transition-colors duration-500 dark:text-white/58">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid overflow-hidden rounded-[28px] border border-[#14213d]/10 bg-[#14213d] text-white transition-colors duration-500 md:grid-cols-[1fr_1.2fr] dark:border-white/10 dark:bg-[#0b1324]">
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
            <div>
              <p className="text-sm text-white/55">How Adva moves work</p>
              <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight">
                Plan the work, assign the right people, keep momentum visible.
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-white/75">
              <span className="rounded-full bg-white/10 px-3 py-2">
                Goals
              </span>
              <span className="rounded-full bg-white/10 px-3 py-2">
                Owners
              </span>
              <span className="rounded-full bg-white/10 px-3 py-2">
                Status
              </span>
              <span className="rounded-full bg-white/10 px-3 py-2">
                Risk
              </span>
            </div>
          </div>

          <div className="grid gap-3 bg-white/5 p-4 md:p-6">
            {[
              ["01", "Capture project goals and turn them into milestones."],
              ["02", "Balance ownership against bandwidth and dependencies."],
              ["03", "Surface progress summaries before meetings begin."],
            ].map(([step, text]) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 text-[#14213d] transition-colors duration-500 dark:bg-white/10 dark:text-white"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eaf0ff] text-sm font-semibold text-[#14213d]">
                  {step}
                </span>
                <p className="text-sm font-medium leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
