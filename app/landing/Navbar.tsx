import { buttonVariants } from "@/components/ui/button";
import AuthTransitionLink from "./auth-transition-link";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="z-50 fixed w-full h-fit flex items-center bg-transparent justify-around py-2">
      <div className="w-fit h-fit flex items-center justify-center bg-[#14213d]/85 border border-[#14213d]/25 text-white rounded-full text-xs backdrop-blur-xl shadow-xl">
        <Link
          href="/"
          className="group relative px-4 py-2 font-medium text-white"
        >
          <span className="absolute inset-0 rounded-full bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90  " />
          <span className="relative z-10">Products</span>
        </Link>
        <Link
          href="/"
          className="group relative px-4 py-2 font-medium text-white"
        >
          <span className="absolute inset-0 rounded-full bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90  " />
          <span className="relative z-10">Solutions</span>
        </Link>
        <Link
          href="/"
          className="group relative px-4 py-2 font-medium text-white"
        >
          <span className="absolute inset-0 rounded-full bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90  " />
          <span className="relative z-10">Pricing</span>
        </Link>
        <Link
          href="/"
          className="group relative px-4 py-2 font-medium text-white"
        >
          <span className="absolute inset-0 rounded-full bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90  " />
          <span className="relative z-10">Support</span>
        </Link>
      </div>
      <div className="w-fit h-fit flex items-center gap-2">
        <AuthTransitionLink
          href="/login"
          className={buttonVariants({
            variant: "outline",
            size: "default",
            className:
              "bg-white/75 text-[#14213d] backdrop-blur-md hover:bg-[#14213d]/85 hover:text-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
          })}
        >
          Log In
        </AuthTransitionLink>
        <AuthTransitionLink
          href="/signup"
          className={buttonVariants({ variant: "default", size: "default" })}
        >
          Sign Up
        </AuthTransitionLink>
      </div>
    </div>
  );
}
