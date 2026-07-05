import DashboardSidebar from "@/components/dashboard/sidebar";
import DashboardLogoutButton from "@/components/dashboard/logout-button";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  Clock3,
  ListChecks,
  MessageSquareText,
  Plus,
  Sparkles,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    label: "Active projects",
    value: "8",
    detail: "+2 this month",
    tone: "bg-[#d9cffb]",
  },
  {
    label: "Tasks completed",
    value: "148",
    detail: "86% completion",
    tone: "bg-[#d3edd9]",
  },
  {
    label: "At-risk items",
    value: "6",
    detail: "Needs review",
    tone: "bg-[#f4ead7]",
  },
  {
    label: "Team capacity",
    value: "72%",
    detail: "Healthy load",
    tone: "bg-[#eaf0ff]",
  },
];

const priorities = [
  {
    title: "Finalize Q3 roadmap dependencies",
    project: "Q3 roadmap",
    owner: "Sophie",
    due: "Today",
    status: "High",
  },
  {
    title: "Review onboarding task handoff",
    project: "Customer onboarding",
    owner: "Rex",
    due: "Tomorrow",
    status: "Medium",
  },
  {
    title: "Approve website launch milestones",
    project: "Website launch",
    owner: "Pearl",
    due: "Jul 9",
    status: "Low",
  },
];

const timeline = [
  ["09:00", "Daily planning", "Product sync"],
  ["11:30", "Roadmap review", "Leadership"],
  ["14:00", "Customer onboarding QA", "Operations"],
  ["16:00", "Launch blockers check", "Marketing"],
];

const teamLoad = [
  ["Sophie", "Product", 82, "bg-[#d9cffb]"],
  ["Rex", "Automation", 64, "bg-[#d3edd9]"],
  ["Pearl", "Planning", 76, "bg-[#f4ead7]"],
  ["Maya", "Design", 58, "bg-[#eaf0ff]"],
];

export default function DashboardPage() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#f7f9fc] text-[#14213d]">
      <DashboardSidebar />

      <section className="h-full min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-6">
          <header className="flex flex-col gap-4 rounded-[28px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-[#14213d]/55">
                <CircleDot className="size-4 text-[#4d91f5]" />
                Dashboard Home
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Good morning, Sophie.
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#14213d]/58">
                Here is what needs attention across your projects, owners, and
                delivery timelines today.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <DashboardLogoutButton />
              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-xl border border-[#14213d]/10 bg-white px-4 text-sm font-medium transition hover:bg-[#14213d]/5"
              >
                <CalendarDays className="size-4" />
                This week
              </button>
              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-xl bg-[#14213d] px-4 text-sm font-medium text-white transition hover:bg-[#14213d]/90"
              >
                <Plus className="size-4" />
                New project
              </button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[24px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5"
              >
                <div
                  className={`mb-6 grid size-11 place-items-center rounded-2xl ${stat.tone}`}
                >
                  <ArrowUpRight className="size-5" />
                </div>
                <p className="text-sm text-[#14213d]/55">{stat.label}</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <span className="rounded-full bg-[#14213d]/5 px-3 py-1 text-xs font-medium text-[#14213d]/58">
                    {stat.detail}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
            <section className="rounded-[28px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Priority work</h2>
                  <p className="mt-1 text-sm text-[#14213d]/52">
                    The most important items for today.
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-xl bg-[#14213d]/5 px-3 py-2 text-sm font-medium text-[#14213d]/70 transition hover:bg-[#14213d]/10"
                >
                  View all
                </button>
              </div>

              <div className="mt-5 grid gap-3">
                {priorities.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-4 rounded-2xl border border-[#14213d]/8 bg-[#f7f9fc] p-4 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-xl bg-white text-[#14213d]">
                        <ListChecks className="size-4" />
                      </span>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#14213d]/50">
                          {item.project} · Owner: {item.owner}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:justify-end">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#14213d]/60">
                        {item.due}
                      </span>
                      <span className="rounded-full bg-[#14213d] px-3 py-1 text-xs font-medium text-white">
                        {item.status}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#14213d]/10 bg-[#14213d] p-5 text-white shadow-sm shadow-[#14213d]/10">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-white/10">
                  <Sparkles className="size-5 text-[#d3edd9]" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Smart summary</h2>
                  <p className="text-sm text-white/55">Generated 8 minutes ago</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/72">
                Q3 roadmap is moving well, but three dependency decisions need
                owner confirmation before the launch timeline can be locked.
                Rex has capacity to absorb two automation tasks this week.
              </p>

              <div className="mt-5 grid gap-3">
                {["Confirm analytics owner", "Move onboarding QA to Thursday", "Escalate brand review blocker"].map(
                  (item) => (
                    <p
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/78"
                    >
                      <CheckCircle2 className="size-4 text-[#d3edd9]" />
                      {item}
                    </p>
                  ),
                )}
              </div>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[28px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Today&apos;s timeline</h2>
                  <p className="mt-1 text-sm text-[#14213d]/52">
                    Meetings and project checkpoints.
                  </p>
                </div>
                <Clock3 className="size-5 text-[#14213d]/35" />
              </div>

              <div className="mt-5 grid gap-3">
                {timeline.map(([time, title, group]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl bg-[#f7f9fc] px-4 py-3"
                  >
                    <span className="w-14 text-sm font-semibold">{time}</span>
                    <span className="h-9 w-px bg-[#14213d]/10" />
                    <div>
                      <p className="text-sm font-medium">{title}</p>
                      <p className="mt-0.5 text-xs text-[#14213d]/48">{group}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Team capacity</h2>
                  <p className="mt-1 text-sm text-[#14213d]/52">
                    Load across project owners.
                  </p>
                </div>
                <UsersRound className="size-5 text-[#14213d]/35" />
              </div>

              <div className="mt-5 grid gap-4">
                {teamLoad.map(([name, role, load, color]) => (
                  <div key={name} className="grid gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid size-9 place-items-center rounded-full ${color} text-xs font-semibold`}
                        >
                          {String(name).slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-xs text-[#14213d]/45">{role}</p>
                        </div>
                      </div>
                      <span className="font-semibold">{load}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#14213d]/8">
                      <div
                        className="h-full rounded-full bg-[#14213d]"
                        style={{ width: `${load}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="grid gap-4 rounded-[28px] border border-[#14213d]/10 bg-white p-5 shadow-sm shadow-[#14213d]/5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-[#eaf0ff]">
                  <MessageSquareText className="size-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Latest update</h2>
                  <p className="text-sm text-[#14213d]/50">From project chat</p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 text-[#14213d]/62">
              “Customer onboarding is ready for QA. Waiting on one automation
              rule review before the task group can be marked complete.”
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
