"use client";

import { useSignUp } from "@clerk/nextjs";
import { ArrowRight, LockKeyhole, Mail, User } from "lucide-react";
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

export default function SignupForm() {
  const router = useRouter();
  const { signUp, fetchStatus } = useSignUp();
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);

  const isLoading = fetchStatus === "fetching";

  async function finishSignUp() {
    if (signUp.status !== "complete") {
      return;
    }

    const { error: finalizeError } = await signUp.finalize({
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
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const emailAddress = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { error: signUpError } = await signUp.password({
      firstName,
      lastName,
      emailAddress,
      password,
    });

    if (signUpError) {
      setError(getErrorMessage(signUpError));
      return;
    }

    if (signUp.status === "complete") {
      await finishSignUp();
      return;
    }

    const { error: verificationError } =
      await signUp.verifications.sendEmailCode();

    if (verificationError) {
      setError(getErrorMessage(verificationError));
      return;
    }

    setIsVerifying(true);
  }

  async function handleVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const code = String(formData.get("code") || "");

    const { error: verifyError } = await signUp.verifications.verifyEmailCode({
      code,
    });

    if (verifyError) {
      setError(getErrorMessage(verifyError));
      return;
    }

    await finishSignUp();
  }

  async function signUpWith(strategy: (typeof socialOptions)[number]["strategy"]) {
    setError("");
    setSocialLoading(strategy);

    const { error: ssoError } = await signUp.sso({
      strategy,
      redirectUrl: "/dashboard",
      redirectCallbackUrl: "/signup",
    });

    if (ssoError) {
      setError(getErrorMessage(ssoError));
      setSocialLoading(null);
    }
  }

  if (isVerifying) {
    return (
      <div>
        <div className="rounded-2xl border border-[#14213d]/10 bg-[#f7f9fc] p-4 text-sm leading-6 text-[#14213d]/62 dark:border-white/10 dark:bg-white/5 dark:text-white/62">
          We sent a verification code to your email. Enter it below to finish
          creating your workspace.
        </div>

        <form className="mt-5 grid gap-4" onSubmit={handleVerify}>
          <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
            Verification code
            <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
              <Mail className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
              <input
                name="code"
                type="text"
                inputMode="numeric"
                placeholder="Enter code"
                required
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
              />
            </span>
          </label>

          {error ? (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14213d] text-sm font-semibold text-white transition hover:bg-[#14213d]/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Verifying..." : "Verify account"}
            <ArrowRight className="size-4" />
          </button>

          <button
            type="button"
            onClick={() => signUp.verifications.sendEmailCode()}
            className="text-sm font-medium text-[#14213d] dark:text-white"
          >
            Send a new code
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {socialOptions.map((option) => (
          <button
            key={option.name}
            type="button"
            disabled={isLoading || socialLoading !== null}
            onClick={() => signUpWith(option.strategy)}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-sm font-medium transition hover:border-[#14213d]/25 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <SocialMark name={option.name} />
            {socialLoading === option.strategy ? "Opening..." : option.name}
          </button>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-xs text-black/38 transition-colors duration-500 dark:text-white/35">
        <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
        or create with email
        <span className="h-px flex-1 bg-black/10 transition-colors duration-500 dark:bg-white/10" />
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
            First name
            <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
              <User className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
              <input
                name="firstName"
                type="text"
                placeholder="Maya"
                autoComplete="given-name"
                required
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
            Last name
            <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
              <User className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
              <input
                name="lastName"
                type="text"
                placeholder="Chen"
                autoComplete="family-name"
                required
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
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
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
                name="password"
                type="password"
                placeholder="Create password"
                autoComplete="new-password"
                required
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-medium text-black/72 transition-colors duration-500 dark:text-white/72">
            Confirm password
            <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-black transition focus-within:border-[#14213d]/35 focus-within:ring-4 focus-within:ring-[#14213d]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus-within:border-white/25 dark:focus-within:ring-white/5">
              <LockKeyhole className="size-4 text-black/38 transition-colors duration-500 dark:text-white/38" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/32 dark:placeholder:text-white/32"
              />
            </span>
          </label>
        </div>

        <p className="text-xs leading-5 text-black/45 transition-colors duration-500 dark:text-white/45">
          By creating an account, you agree to Adva&apos;s Terms and Privacy
          Policy.
        </p>

        {error ? (
          <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-200">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14213d] text-sm font-semibold text-white transition hover:bg-[#14213d]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Creating account..." : "Create account"}
          <ArrowRight className="size-4" />
        </button>
      </form>

      <div id="clerk-captcha" className="mt-4" />

      <p className="mt-6 text-center text-sm text-black/55 transition-colors duration-500 dark:text-white/55">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#14213d] transition-colors duration-500 dark:text-white"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
