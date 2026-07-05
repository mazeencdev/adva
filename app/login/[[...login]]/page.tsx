import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../../landing/theme-toggle";
import LoginForm from "./login-form";

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

            <div className="grid gap-3 rounded-3xl bg-white/10 p-4">
              {[
                "Priority work is surfaced first",
                "Team capacity stays visible",
                "Updates are ready before meetings",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <CheckCircle2 className="size-4 text-[#d3edd9]" />
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="flex items-center justify-center p-6 sm:p-8">
            <div className="w-full max-w-[430px]">
              <div className="mb-8 lg:hidden">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-[#14213d] transition-colors duration-500 dark:text-white"
                >
                  Adva
                </Link>
              </div>

              <div className="mb-8">
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

              <LoginForm />
            </div>
          </section>
        </div>
      </main>
    </ThemeToggle>
  );
}
