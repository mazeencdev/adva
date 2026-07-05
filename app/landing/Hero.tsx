import Carousel from "@/components/reg/carousel";
import { buttonVariants } from "@/components/ui/button";
import AuthTransitionLink from "./auth-transition-link";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export default function Hero() {
  const trustItems = ["No Credit Card", "No Setup Required", "Cancel Anytime"];

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-white pb-12 transition-colors duration-500 dark:bg-[#080d18]">
      <div className="h-13 w-full bg-transparent" />
      <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-transparent">
        <div className="flex h-fit w-full flex-col items-center justify-center bg-transparent text-black transition-colors duration-500 dark:text-white">
          <div className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-transparent pt-10 text-black transition-colors duration-500 dark:text-white">
            <h1 className="w-full max-w-[750px] px-4 text-center text-4xl font-semibold leading-tight md:text-5xl">
              Enterprise project management made effortless.
            </h1>
            <p className="max-w-2xl px-4 text-center text-black/65 transition-colors duration-500 dark:text-white/65">
              From brainstorming to launch, Adva gives your team everything
              needed to plan, track progress, and achieve goals together.
            </p>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-transparent text-black transition-colors duration-500 dark:text-white">
          <div className="flex h-fit w-fit items-center justify-center gap-4">
            <AuthTransitionLink
              href="/signup"
              className={buttonVariants({ size: "xl" })}
            >
              Get Started
            </AuthTransitionLink>
            <AuthTransitionLink
              href="/login"
              className={buttonVariants({
                variant: "outline",
                size: "xl",
                className:
                  "dark:border-white/20 dark:text-white dark:hover:bg-white/10",
              })}
            >
              Log In
            </AuthTransitionLink>
          </div>
          <div className="flex h-fit w-fit flex-wrap items-center justify-center gap-5 px-4 text-xs text-black/60 transition-colors duration-500 dark:text-white/55">
            {trustItems.map((item) => (
              <p key={item} className="flex items-center gap-1">
                <span>
                  <CheckIcon />
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
