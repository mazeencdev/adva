"use client";

import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  CircleDot,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  ListChecks,
  MessageSquareText,
  Plus,
  Search,
  Settings,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

const navSections = [
  {
    title: "Workspace",
    defaultOpen: true,
    items: [
      { label: "Overview", icon: LayoutDashboard, active: true },
      { label: "My tasks", icon: ListChecks, count: "12" },
      { label: "Inbox", icon: Bell, count: "4" },
      { label: "Messages", icon: MessageSquareText },
    ],
  },
  {
    title: "Projects",
    defaultOpen: true,
    items: [
      { label: "Q3 roadmap", icon: FolderKanban, accent: "bg-[#d9cffb]" },
      { label: "Website launch", icon: FolderKanban, accent: "bg-[#d3edd9]" },
      { label: "Customer onboarding", icon: FolderKanban, accent: "bg-[#f4ead7]" },
    ],
  },
  {
    title: "Views",
    defaultOpen: true,
    items: [
      { label: "Timeline", icon: Clock3 },
      { label: "Calendar", icon: CalendarDays },
      { label: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "Team",
    defaultOpen: false,
    items: [
      { label: "Members", icon: UsersRound },
      { label: "Smart assigner", icon: Sparkles },
      { label: "Settings", icon: Settings },
    ],
  },
];

type SectionState = Record<string, boolean>;

export default function DashboardSidebar() {
  const [openSections, setOpenSections] = useState<SectionState>(() =>
    Object.fromEntries(
      navSections.map((section) => [section.title, section.defaultOpen]),
    ),
  );

  function toggleSection(title: string) {
    setOpenSections((current) => ({
      ...current,
      [title]: !current[title],
    }));
  }

  return (
    <aside className="flex h-screen w-[288px] shrink-0 flex-col border-r border-[#14213d]/10 bg-white text-[#14213d] transition-colors duration-300 dark:border-white/10 dark:bg-[#080d18] dark:text-white">
      <div className="border-b border-[#14213d]/10 p-4 dark:border-white/10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#14213d] text-sm font-semibold text-white dark:bg-white dark:text-[#14213d]">
              A
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Adva workspace</p>
              <p className="truncate text-xs text-[#14213d]/45 dark:text-white/45">
                Product team
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Create new item"
            className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#14213d]/6 text-[#14213d] transition hover:bg-[#14213d]/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <Plus className="size-4" />
          </button>
        </div>

        <label className="mt-4 flex h-10 items-center gap-2 rounded-2xl border border-[#14213d]/10 bg-[#f7f9fc] px-3 text-sm text-[#14213d]/55 transition focus-within:border-[#14213d]/25 focus-within:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/55 dark:focus-within:border-white/20 dark:focus-within:bg-white/10">
          <Search className="size-4" />
          <input
            type="search"
            placeholder="Search workspace"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#14213d]/35 dark:placeholder:text-white/35"
          />
        </label>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
        {navSections.map((section) => {
          const isOpen = openSections[section.title];

          return (
            <section key={section.title} className="rounded-2xl">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#14213d]/45 transition hover:bg-[#14213d]/5 dark:text-white/42 dark:hover:bg-white/5"
              >
                {section.title}
                <ChevronDown
                  className={`size-4 transition duration-200 ${
                    isOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 pb-2">
                    {section.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.label}
                          type="button"
                          className={`group flex h-10 w-full items-center gap-3 rounded-2xl px-3 text-sm transition ${
                            item.active
                              ? "bg-[#14213d] font-medium text-white shadow-sm shadow-[#14213d]/10"
                              : "text-[#14213d]/68 hover:bg-[#14213d]/6 hover:text-[#14213d] dark:text-white/68 dark:hover:bg-white/8 dark:hover:text-white"
                          }`}
                        >
                          <span
                            className={`grid size-7 shrink-0 place-items-center rounded-xl ${
                              item.active
                                ? "bg-white/14 text-white"
                                : item.accent
                                  ? `${item.accent} text-[#14213d]`
                                  : "bg-[#14213d]/6 text-[#14213d]/62 group-hover:bg-white dark:bg-white/8 dark:text-white/62 dark:group-hover:bg-white/12"
                            }`}
                          >
                            <Icon className="size-4" strokeWidth={1.8} />
                          </span>
                          <span className="min-w-0 flex-1 truncate text-left">
                            {item.label}
                          </span>
                          {item.count ? (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[11px] ${
                                item.active
                                  ? "bg-white/14 text-white"
                                  : "bg-[#14213d]/6 text-[#14213d]/48 dark:bg-white/8 dark:text-white/48"
                              }`}
                            >
                              {item.count}
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </nav>

      <div className="border-t border-[#14213d]/10 p-4 dark:border-white/10">
        <div className="rounded-3xl bg-[#14213d] p-4 text-white dark:bg-white/10">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CircleDot className="size-4 text-[#d3edd9]" />
            Sprint health
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[72%] rounded-full bg-[#d3edd9]" />
          </div>
          <p className="mt-3 text-xs leading-5 text-white/62">
            72% of committed work is on track for this cycle.
          </p>
        </div>

        <button
          type="button"
          className="mt-3 flex w-full items-center gap-3 rounded-2xl px-2 py-2 text-left transition hover:bg-[#14213d]/5 dark:hover:bg-white/5"
        >
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d9cffb] text-xs font-semibold text-[#14213d]">
            SC
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Sophie Chen</p>
            <p className="truncate text-xs text-[#14213d]/45 dark:text-white/45">
              Project manager
            </p>
          </div>
          <Settings className="size-4 text-[#14213d]/35 dark:text-white/35" />
        </button>
      </div>
    </aside>
  );
}
