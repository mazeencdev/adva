import type { ReactNode } from "react";

type AvatarProps = {
  name: string;
  className?: string;
  variant?: "photo" | "planner" | "assigner" | "member";
};

function Avatar({ name, className = "", variant = "member" }: AvatarProps) {
  const styles = {
    photo:
      "bg-[linear-gradient(145deg,#f8d4b7_0%,#f7efe8_38%,#d8e4e8_39%,#d8e4e8_100%)]",
    planner:
      "bg-[radial-gradient(circle_at_52%_24%,#f8a1a3_0_9%,transparent_10%),linear-gradient(145deg,#e8f5ff_0%,#78a8ea_44%,#f5a51f_45%,#f5a51f_100%)]",
    assigner:
      "bg-[radial-gradient(circle_at_60%_25%,#ffb023_0_10%,transparent_11%),linear-gradient(150deg,#f2f3f5_0%,#c9ccd2_26%,#12d5cf_27%,#12d5cf_78%,#ffd20e_79%)]",
    member:
      "bg-[linear-gradient(145deg,#f4d3b2_0%,#f6b7a5_34%,#6fd5cf_35%,#3375d6_100%)]",
  };

  return (
    <div
      aria-label={name}
      className={`relative shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm ${styles[variant]} ${className}`}
    >
      <div className="absolute left-1/2 top-[23%] h-[23%] w-[23%] -translate-x-1/2 rounded-full bg-[#f3b596]" />
      <div className="absolute left-[31%] top-[19%] h-[17%] w-[38%] rounded-t-full bg-white/75" />
      <div className="absolute bottom-0 left-1/2 h-[45%] w-[66%] -translate-x-1/2 rounded-t-full bg-white/30" />
    </div>
  );
}

function TaskPill({
  avatar,
  children,
  muted = false,
}: {
  avatar: ReactNode;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex w-fit max-w-full items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[11px] font-medium shadow-sm backdrop-blur transition-colors duration-500 dark:bg-[#182235]/90 ${
        muted ? "text-black/45 dark:text-white/40" : "text-black/70 dark:text-white/70"
      }`}
    >
      {avatar}
      <span className="truncate">{children}</span>
    </div>
  );
}

function TimelineBars() {
  return (
    <div className="absolute inset-x-8 bottom-8 top-24 overflow-hidden rounded-lg border border-[#e8eaf3] bg-white/65 transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
      <div className="grid h-full grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border-r border-[#e1e5f3]/80 transition-colors duration-500 dark:border-white/10"
          />
        ))}
      </div>
      <div className="absolute left-7 top-10 h-2 w-[42%] rounded-full bg-[#4d91f5]" />
      <div className="absolute left-[39%] top-24 h-2 w-[52%] rounded-full bg-[#4d91f5]" />
      <div className="absolute bottom-16 left-[24%] h-2 w-[22%] rounded-full bg-[#4d91f5]" />
      <div className="absolute left-5 top-20 h-1 w-16 rounded-full bg-[#dbe2f4]" />
      <div className="absolute left-5 top-36 h-1 w-20 rounded-full bg-[#dbe2f4]" />
      <div className="absolute bottom-10 left-5 h-1 w-24 rounded-full bg-[#dbe2f4]" />
    </div>
  );
}

function Pointer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-0 w-0 border-l-[10px] border-r-[10px] border-t-[28px] border-l-transparent border-r-transparent drop-shadow-md ${className}`}
    />
  );
}

function HeroCollage() {
  return (
    <div className="mt-8 w-full max-w-[1240px] px-4">
      <div className="grid auto-rows-[minmax(150px,1fr)] grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[250px_170px] lg:gap-5">
        <section className="relative min-h-[230px] overflow-hidden rounded-[28px] bg-[#d7dcdd] p-6 text-black transition-colors duration-500 md:min-h-0 dark:bg-[#26313a] dark:text-white">
          <h2 className="relative z-10 max-w-[220px] text-2xl font-semibold leading-tight">
            Sophie,
            <br />
            Project Manager
          </h2>
          <div className="absolute bottom-0 right-[7%] h-[86%] w-[43%] rounded-t-full bg-[linear-gradient(145deg,#f6d3b4_0%,#f4d1b9_25%,#dceaf0_26%,#dceaf0_100%)] shadow-inner">
            <div className="absolute left-1/2 top-[8%] h-[24%] w-[45%] -translate-x-1/2 rounded-full bg-[#f3c1a1]" />
            <div className="absolute left-[23%] top-[5%] h-[18%] w-[58%] rounded-t-full bg-[#eceae4]" />
            <div className="absolute bottom-0 left-1/2 h-[62%] w-[118%] -translate-x-1/2 rounded-t-[42%] bg-[#dceaf0]" />
          </div>
        </section>

        <section className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#d9cffb] p-6 transition-colors duration-500 md:row-span-1 md:min-h-0 dark:bg-[#2a2347]">
          <div className="absolute inset-x-8 top-8 h-[270px] rounded-xl bg-white shadow-xl shadow-[#bba9f4]/25 transition-colors duration-500 md:h-[72%] dark:bg-[#111827] dark:shadow-black/30">
            <div className="absolute left-0 top-0 flex h-full w-9 flex-col items-center gap-4 border-r border-slate-100 pt-4 transition-colors duration-500 dark:border-white/10">
              <span className="h-2 w-4 rounded-full bg-[linear-gradient(90deg,#ff4b85,#ffd642,#20d486)]" />
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-slate-300/80"
                />
              ))}
            </div>
            <div className="absolute left-14 top-5">
              <h3 className="text-lg font-semibold text-black/75 transition-colors duration-500 dark:text-white/80">
                Q3 Roadmap
              </h3>
              <div className="mt-4 flex gap-2 text-[9px] text-black/50 transition-colors duration-500 dark:text-white/45">
                <span>Main table</span>
                <span>Gantt</span>
                <span>Kanban</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="rounded bg-[#0877f2] px-3 py-1.5 text-[10px] font-medium text-white">
                  + Add item
                </span>
                <span className="rounded border border-slate-200 px-3 py-1.5 text-[10px] text-black/55 transition-colors duration-500 dark:border-white/10 dark:text-white/55">
                  + Add widget
                </span>
              </div>
            </div>
            <TimelineBars />
          </div>
          <Pointer className="absolute right-[50%] top-[32%] rotate-[-22deg] border-t-[#ff57c7]" />
          <Pointer className="absolute right-20 top-10 rotate-[-36deg] border-t-[#44444d]" />
          <Pointer className="absolute bottom-16 right-24 rotate-[42deg] border-t-[#2f83ed]" />

          <div className="absolute right-10 top-16 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg transition-colors duration-500 dark:bg-[#182235]/95">
            <Avatar name="Sophie" variant="photo" className="size-12" />
            <div>
              <p className="text-sm font-semibold text-black/70 transition-colors duration-500 dark:text-white/75">
                Sophie, Product Manager
              </p>
              <p className="text-xs text-black/45 transition-colors duration-500 dark:text-white/45">Added new milestone</p>
            </div>
          </div>
          <div className="absolute left-8 top-[47%] flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg transition-colors duration-500 dark:bg-[#182235]/95">
            <Avatar name="Pearl" variant="planner" className="size-12" />
            <div>
              <p className="text-sm font-semibold text-black/70 transition-colors duration-500 dark:text-white/75">
                Pearl, Project Planner
              </p>
              <p className="text-xs text-black/45 transition-colors duration-500 dark:text-white/45">
                Created Q3 roadmap timeline
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-[27%] flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg transition-colors duration-500 dark:bg-[#182235]/95">
            <Avatar name="Rex" variant="assigner" className="size-12" />
            <div>
              <p className="text-sm font-semibold text-black/70 transition-colors duration-500 dark:text-white/75">
                Rex, Smart Assigner
              </p>
              <p className="text-xs text-black/45 transition-colors duration-500 dark:text-white/45">
                Assigning tasks to team members
              </p>
            </div>
          </div>
        </section>

        <section className="relative min-h-[230px] overflow-hidden rounded-[28px] bg-[#d3edd9] p-6 text-black transition-colors duration-500 md:min-h-0 dark:bg-[#18362a] dark:text-white">
          <h2 className="text-2xl font-semibold">Smart Assigner</h2>
          <div className="mt-5 flex gap-2 text-sm font-medium">
            <span className="rounded-md bg-white/55 px-3 py-2 transition-colors duration-500 dark:bg-white/10">
              Automations
            </span>
            <span className="rounded-md bg-white/55 px-3 py-2 transition-colors duration-500 dark:bg-white/10">
              Workflows
            </span>
          </div>
          <div className="mt-7 flex flex-col gap-3">
            <TaskPill avatar={<Avatar name="Mike" className="size-6" />}>
              Assigning Mike Stevens...
            </TaskPill>
            <TaskPill
              avatar={<Avatar name="Rebecca" className="size-6" />}
              muted
            >
              Checking Rebeccas workload...
            </TaskPill>
            <TaskPill
              avatar={<Avatar name="Jessica" className="size-6" />}
              muted
            >
              In conversation with Jessica...
            </TaskPill>
          </div>
          <div className="absolute bottom-0 right-7 h-[88%] w-[30%] min-w-[110px] rounded-t-full bg-[linear-gradient(180deg,#f4f4f4_0_18%,#13d1ca_19%_76%,#0ca8b2_77%)]">
            <div className="absolute left-1/2 top-[6%] h-[18%] w-[42%] -translate-x-1/2 rounded-full bg-[#d39477]" />
            <div className="absolute left-[24%] top-[4%] h-[14%] w-[58%] rounded-t-full bg-white/80" />
            <div className="absolute left-[25%] top-[22%] h-[56%] w-[50%] rounded-t-full bg-[#ffd319]" />
            <div className="absolute left-[-20%] top-[44%] h-[14%] w-[140%] rounded-full bg-[#3ddbd7]" />
          </div>
        </section>

        <section className="relative min-h-[250px] overflow-hidden rounded-[28px] bg-[#f4ead7] p-6 text-black transition-colors duration-500 md:min-h-0 dark:bg-[#3a3020] dark:text-white">
          <h2 className="text-2xl font-semibold">Project Planner</h2>
          <div className="mt-5 flex gap-2 text-sm font-medium">
            <span className="rounded-md bg-white/60 px-3 py-2 transition-colors duration-500 dark:bg-white/10">
              Planning
            </span>
            <span className="rounded-md bg-white/60 px-3 py-2 transition-colors duration-500 dark:bg-white/10">
              PMO
            </span>
          </div>
          <div className="absolute bottom-0 left-6 h-[38%] w-[48%] rounded-t-xl bg-white/85 shadow-sm transition-colors duration-500 dark:bg-[#182235]/90">
            <div className="flex h-12 items-center gap-3 border-b border-slate-100 px-3 transition-colors duration-500 dark:border-white/10">
              <Avatar name="Pearl" variant="planner" className="size-9" />
              <p className="text-xs font-semibold text-black/70 transition-colors duration-500 dark:text-white/70">
                Generating Roadmap..
              </p>
            </div>
            <div className="relative h-full">
              <div className="absolute left-5 top-5 h-1 w-12 rounded bg-[#dfe5f2]" />
              <div className="absolute left-5 top-10 h-1 w-12 rounded bg-[#dfe5f2]" />
              <div className="absolute left-5 top-16 h-1 w-12 rounded bg-[#dfe5f2]" />
              <div className="absolute left-[45%] top-9 h-2 w-16 rounded bg-[#4d91f5]" />
              <div className="absolute left-[70%] top-16 h-2 w-16 rounded bg-[#4d91f5]" />
            </div>
          </div>
          <div className="absolute bottom-[-12%] right-5 h-[82%] w-[45%] rounded-t-full bg-[linear-gradient(145deg,#edf6ff_0_21%,#7cacdf_22%_42%,#f5a51f_43%)] shadow-inner">
            <div className="absolute left-1/2 top-[4%] h-[28%] w-[58%] -translate-x-1/2 rounded-full bg-[#f0f3f7]" />
            <div className="absolute left-[41%] top-[15%] h-[14%] w-[18%] rounded-full bg-[#f39b83]" />
            <div className="absolute left-[22%] top-[16%] h-[10%] w-[18%] rounded-full bg-[#ff8b50]" />
            <div className="absolute left-[60%] top-[16%] h-[10%] w-[18%] rounded-full bg-[#ff8b50]" />
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] bg-[#fdeffa] p-6 text-black transition-colors duration-500 dark:bg-[#3b2034] dark:text-white">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-5">
              <Avatar name="Sophie" variant="photo" className="size-14" />
              <Avatar name="Pearl" variant="planner" className="size-14" />
              <Avatar name="Rex" variant="assigner" className="size-14" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black/75 transition-colors duration-500 dark:text-white/78">
                Agent group chat
              </h2>
              <p className="text-sm text-black/55 transition-colors duration-500 dark:text-white/55">Sophie, Rex, Pearl</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-white/70 px-4 py-4 text-base font-medium text-black/75 transition-colors duration-500 dark:bg-white/10 dark:text-white/75">
            <p>
              Hi team! lets plan Q3 roadmap and assign team members to all
              action items
            </p>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-black text-xl text-white">
              ↑
            </span>
          </div>
        </section>

        <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[28px] bg-[#eaf0ff] p-6 text-black transition-colors duration-500 md:min-h-0 dark:bg-[#1b2540] dark:text-white">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white px-7 py-4 text-center text-xl font-medium shadow-sm transition-colors duration-500 dark:bg-white/10">
              Q3 plan is ready, 56 tasks assigned
            </div>
            <div className="-mt-2 flex -space-x-4">
              <Avatar name="Ava" className="size-12" />
              <Avatar name="Rex" variant="assigner" className="size-12" />
              <Avatar name="Sam" className="size-12" />
              <Avatar name="Pearl" variant="planner" className="size-12" />
              <Avatar name="Mia" className="size-12" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Carousel() {
  return (
    <>
      <HeroCollage />
    </>
  );
}
