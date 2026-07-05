"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type AuthTransitionLinkProps = {
  href: "/login" | "/signup";
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export default function AuthTransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: AuthTransitionLinkProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    router.prefetch(href);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [href, router]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    setIsLoading(true);

    timeoutRef.current = setTimeout(() => {
      router.push(href);
    }, 650);
  }

  return (
    <>
      <Link
        href={href}
        className={className}
        onClick={handleClick}
        aria-busy={isLoading}
        {...props}
      >
        {children}
      </Link>

      <div
        aria-hidden={!isLoading}
        className={`fixed inset-0 z-[120] grid place-items-center bg-white/92 text-[#14213d] backdrop-blur-xl transition duration-500 dark:bg-[#080d18]/92 dark:text-white ${
          isLoading
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-5 transition duration-500 ${
            isLoading ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
          }`}
        >
          <div className="relative grid size-20 place-items-center rounded-[26px] bg-[#14213d] text-white shadow-2xl shadow-[#14213d]/20 dark:bg-white dark:text-[#14213d]">
            <span className="text-2xl font-semibold">A</span>
            <span className="absolute -right-1 -top-1 size-5 rounded-full bg-[#d3edd9]" />
            <span className="absolute -bottom-1 -left-1 size-4 rounded-full bg-[#d9cffb]" />
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold">
              {href === "/login" ? "Opening your workspace" : "Preparing your workspace"}
            </p>
            <div className="mt-3 flex justify-center gap-1.5">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className="size-2 animate-pulse rounded-full bg-[#14213d] dark:bg-white"
                  style={{ animationDelay: `${index * 120}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
