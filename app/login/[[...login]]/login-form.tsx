"use client";

import { useSignIn } from "@clerk/nextjs";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const socialOptions = [
  { name: "Google", strategy: "oauth_google" },
  { name: "Apple", strategy: "oauth_apple" },
  { name: "Microsoft", strategy: "oauth_microsoft" },
] as const;

function getErrorMessage(error: unknown) {
  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }

  return "Something went wrong. Please try again.";
}

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

export default function LoginForm() {
  const router = useRouter();
  const { signIn, fetchStatus } = useSignIn();
  const [error, setError] = useState("");
  const [socialLoading, setSocialLoading] = useState<string | null>(null);

  const isLoading = fetchStatus === "fetching";

  async function finishSignIn() {
    if (signIn.status !== "complete") {
      setError("This sign-in needs another step. Please check your Clerk settings.");
      return;
    }

    const { error: finalizeError } = await signIn.finalize({
      navigate: ({ session, decorateUrl }) => {
        if (session?.currentTask) {
          setError("Your session needs one more security step before continuing.");
          return;
        }

        const url = decorateUrl("/dashboard");
        if (url.startsWith("http")) {
          window.location.href = url;
        } else {
          router.push(url);
        }
      },
    });

    if (finalizeError) {
      setError(getErrorMessage(finalizeError));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const emailAddress = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const { error: signInError } = await signIn.password({
      emailAddress,
      password,
    });

    if (signInError) {
      setError(getErrorMessage(signInError));
      return;
    }

    await finishSignIn();
  }

  async function signInWith(strategy: (typeof socialOptions)[number]["strategy"]) {
    setError("");
    setSocialLoading(strategy);

    const { error: ssoError } = await signIn.sso({
      strategy,
      redirectUrl: "/dashboard",
      redirectCallbackUrl: "/login",
    });

    if (ssoError) {
      setError(getErrorMessage(ssoError));
      setSocialLoading(null);
    }
  }

  return (
    <div>
      <div className="mt-8 grid gap-3">
        {socialOptions.map((option) => (
          <button
            key={option.name}
            type="button"
            disabled={isLoading || socialLoading !== null}
            onClick={() => signInWith(option.strategy)}
            className="flex h-11 items-center justify-center gap-3 rounded-xl border border-black/10 bg-white text-sm font-medium transition hover:border-[#14213d]/25 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <SocialMark name={option.name} />
            {socialLoading === option.strategy
              ? "Opening..."
              : `Log in with ${option.name}`}
          </button>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-xs text-black/38 transition-colors duration-500 dark:text-white/35">
        <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
        or use email
        <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
          Email
          <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
            <Mail className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
            />
          </span>
        </label>

        <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
          Password
          <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
            <LockKeyhole className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
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
          <a
            href="#"
            className="font-medium text-[#14213d] transition-colors duration-500 dark:text-white"
          >
            Forgot password?
          </a>
        </div>

        {error ? (
          <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-200">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14213d] text-sm font-semibold text-white transition hover:bg-[#14213d]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Logging in..." : "Log in"}
          <ArrowRight className="size-4" />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-black/55 transition-colors duration-500 dark:text-white/55">
        New to Adva?{" "}
        <Link
          href="/signup"
          className="font-semibold text-[#14213d] transition-colors duration-500 dark:text-white"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
