import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, Mail, User } from "lucide-react";
import ThemeToggle from "../landing/theme-toggle";

const socialOptions = ["Google", "Apple", "Microsoft"];

function SocialMark({ name }: { name: string }) {
  if (name === "Microsoft") {
    return (
      <span className="grid size-4 grid-cols-2 gap-0.5">
        <span className="bg-[#f25022]" />
        <span className="bg-[#7fba00]" />
        <span className="bg-[#00a4ef]" />
        <span className="bg-[#ffb900]" />
      </span>
    );
  }

  return (
    <span className="grid size-5 place-items-center rounded-full border border-black/10 text-xs font-semibold text-[#14213d] transition-colors duration-500 dark:border-white/15 dark:text-white">
      {name[0]}
    </span>
  );
}

export default function SignupPage() {
  return (
    <ThemeToggle>
      <main className="min-h-screen bg-[#f7f9fc] px-4 py-6 text-black transition-colors duration-500 dark:bg-[#080d18] dark:text-white">
      <div className="mx-auto grid min-h-[calc(100vh-48px)] max-w-[1120px] overflow-hidden rounded-[28px] border border-[#14213d]/10 bg-white shadow-xl shadow-[#14213d]/5 transition-colors duration-500 lg:grid-cols-[1.08fr_0.92fr] dark:border-white/10 dark:bg-[#0d1424] dark:shadow-black/30">
        <section className="flex items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-[470px]">
            <div className="mb-8">
              <Link href="/" className="text-2xl font-semibold text-[#14213d] transition-colors duration-500 dark:text-white">
                Adva
              </Link>
            </div>

            <div>
              <p className="text-sm font-medium text-[#14213d]/65 transition-colors duration-500 dark:text-white/62">
                Start your workspace
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Create your account.
              </h1>
              <p className="mt-3 text-sm leading-6 text-black/58 transition-colors duration-500 dark:text-white/58">
                Set up a project hub for planning, assigning, and tracking work
                with less manual coordination.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {socialOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-sm font-medium transition hover:border-[#14213d]/25 hover:bg-[#f7f9fc] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                >
                  <SocialMark name={option} />
                  {option}
                </button>
              ))}
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-black/38 transition-colors duration-500 dark:text-white/35">
              <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
              or create with email
              <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                  First name
                  <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                    <User className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                    <input
                      type="text"
                      placeholder="Maya"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                    />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                  Last name
                  <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                    <User className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                    <input
                      type="text"
                      placeholder="Chen"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                    />
                  </span>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                Email
                <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                  <Mail className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                  />
                </span>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                  Password
                  <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                    <LockKeyhole className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                    <input
                      type="password"
                      placeholder="Create password"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                    />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                  Confirm password
                  <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                    <LockKeyhole className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                    />
                  </span>
                </label>
              </div>

              <p className="text-xs leading-5 text-black/45 transition-colors duration-500 dark:text-white/45">
                By creating an account, you agree to Adva&apos;s Terms and
                Privacy Policy.
              </p>

              <button
                type="button"
                className="mt-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14213d] text-sm font-semibold text-white transition hover:bg-[#14213d]/90"
              >
                Create account
                <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-black/55 transition-colors duration-500 dark:text-white/55">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#14213d] transition-colors duration-500 dark:text-white">
                Log in
              </Link>
            </p>
          </div>
        </section>

        <section className="hidden bg-[#14213d] p-8 text-white transition-colors duration-500 lg:flex lg:flex-col lg:justify-between dark:bg-[#050915]">
          <div className="flex justify-end">
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/72">
              Project management, minus the noise
            </span>
          </div>

          <div className="rounded-[28px] bg-white/8 p-5">
            <div className="rounded-2xl bg-white p-4 text-[#14213d] transition-colors duration-500 dark:bg-[#0d1424] dark:text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Launch plan</p>
                <span className="rounded-full bg-[#d3edd9] px-3 py-1 text-xs">
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
              {["Invite your team", "Assign roadmap owners", "Track blockers early"].map(
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
          </div>

          <div>
            <h2 className="max-w-sm text-4xl font-semibold leading-tight">
              Build your operating system for execution.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">
              Bring tasks, roadmaps, assignments, and status into one workspace
              your team can actually keep up with.
            </p>
          </div>
        </section>
      </div>
      </main>
    </ThemeToggle>
  );
}
