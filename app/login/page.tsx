import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, Mail } from "lucide-react";
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

export default function LoginPage() {
  return (
    <ThemeToggle>
      <main className="min-h-screen bg-[#f7f9fc] px-4 py-6 text-black transition-colors duration-500 dark:bg-[#080d18] dark:text-white">
      <div className="mx-auto grid min-h-[calc(100vh-48px)] max-w-[1120px] overflow-hidden rounded-[28px] border border-[#14213d]/10 bg-white shadow-xl shadow-[#14213d]/5 transition-colors duration-500 lg:grid-cols-[0.92fr_1.08fr] dark:border-white/10 dark:bg-[#0d1424] dark:shadow-black/30">
        <section className="hidden bg-[#14213d] p-8 text-white transition-colors duration-500 lg:flex lg:flex-col lg:justify-between dark:bg-[#050915]">
          <Link href="/" className="text-2xl font-semibold">
            Adva
          </Link>

          <div>
            <p className="mb-4 w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/72">
              Welcome back
            </p>
            <h1 className="max-w-md text-4xl font-semibold leading-tight">
              Step back into a calmer way to run projects.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/62">
              Review roadmaps, unblock work, and keep owners aligned without
              rebuilding your workflow every morning.
            </p>
          </div>

          <div className="grid gap-3 rounded-3xl bg-white/8 p-4">
            {["Priority work is surfaced first", "Team capacity stays visible", "Updates are ready before meetings"].map(
              (item) => (
                <p key={item} className="flex items-center gap-3 text-sm text-white/75">
                  <CheckCircle2 className="size-4 text-[#d3edd9]" />
                  {item}
                </p>
              ),
            )}
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-[430px]">
            <div className="mb-8 lg:hidden">
              <Link href="/" className="text-2xl font-semibold text-[#14213d] transition-colors duration-500 dark:text-white">
                Adva
              </Link>
            </div>

            <div>
              <p className="text-sm font-medium text-[#14213d]/65 transition-colors duration-500 dark:text-white/62">
                Log in to Adva
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Welcome back.
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/58 transition-colors duration-500 dark:text-white/58">
                Continue planning, assigning, and tracking work from your team
                workspace.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {socialOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="flex h-11 items-center justify-center gap-3 rounded-xl border border-black/10 bg-white text-sm font-medium transition hover:border-[#14213d]/25 hover:bg-[#f7f9fc] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                >
                  <SocialMark name={option} />
                  Log in with {option}
                </button>
              ))}
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-black/38 transition-colors duration-500 dark:text-white/35">
              <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
              or use email
              <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
            </div>

            <form className="grid gap-4">
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

              <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
                Password
                <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
                  <LockKeyhole className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
                  />
                </span>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black/58 transition-colors duration-500 dark:text-white/58">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-black/15 accent-[#14213d]"
                  />
                  Remember me
                </label>
                <a href="#" className="font-medium text-[#14213d] transition-colors duration-500 dark:text-white">
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14213d] text-sm font-semibold text-white transition hover:bg-[#14213d]/90"
              >
                Log in
                <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-black/55 transition-colors duration-500 dark:text-white/55">
              New to Adva?{" "}
              <Link href="/signup" className="font-semibold text-[#14213d] transition-colors duration-500 dark:text-white">
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
      </main>
    </ThemeToggle>
  );
}
