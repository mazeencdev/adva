import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../../landing/theme-toggle";
import SignupForm from "./signup-form";

export default function SignupPage() {
  return (
    <ThemeToggle>
      <main className="min-h-screen bg-[#f7f9fc] px-4 py-6 text-black transition-colors duration-500 dark:bg-[#080d18] dark:text-white">
        <div className="mx-auto grid min-h-[calc(100vh-48px)] max-w-[1120px] overflow-hidden rounded-[28px] border border-[#14213d]/10 bg-white shadow-xl shadow-[#14213d]/5 transition-colors duration-500 lg:grid-cols-[1.08fr_0.92fr] dark:border-white/10 dark:bg-[#0d1424] dark:shadow-black/30">
          <section className="flex items-center justify-center p-6 sm:p-8">
            <div className="w-full max-w-[470px]">
              <div className="mb-8">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-[#14213d] transition-colors duration-500 dark:text-white"
                >
                  Adva
                </Link>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-[#14213d]/65 transition-colors duration-500 dark:text-white/62">
                  Start your workspace
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                  Create your account.
                </h1>
                <p className="mt-3 text-sm leading-6 text-black/58 transition-colors duration-500 dark:text-white/58">
                  Set up a project hub for planning, assigning, and tracking
                  work with less manual coordination.
                </p>
              </div>

              <SignupForm />
            </div>
          </section>

          <section className="hidden bg-[#14213d] p-8 text-white transition-colors duration-500 lg:flex lg:flex-col lg:justify-between dark:bg-[#050915]">
            <div className="flex justify-end">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/72">
                Project management, minus the noise
              </span>
            </div>

            <div className="rounded-[28px] bg-white/10 p-5">
              <div className="rounded-2xl bg-white p-4 text-[#14213d] transition-colors duration-500 dark:bg-[#0d1424] dark:text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Launch plan</p>
                  <span className="rounded-full bg-[#d3edd9] px-3 py-1 text-xs text-[#14213d]">
                    On track
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  <span className="h-2 w-3/4 rounded-full bg-[#4d91f5]" />
                  <span className="h-2 w-1/2 rounded-full bg-[#d9cffb]" />
                  <span className="h-2 w-5/6 rounded-full bg-[#f4ead7]" />
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  "Invite your team",
                  "Assign roadmap owners",
                  "Track blockers early",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/78"
                  >
                    <CheckCircle2 className="size-4 text-[#d3edd9]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="max-w-sm text-4xl font-semibold leading-tight">
                Build your operating system for execution.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">
                Bring tasks, roadmaps, assignments, and status into one
                workspace your team can actually keep up with.
              </p>
            </div>
          </section>
        </div>
      </main>
    </ThemeToggle>
  );
}
