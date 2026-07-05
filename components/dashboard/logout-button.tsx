"use client";

import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useState } from "react";

export default function DashboardLogoutButton() {
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    setIsSigningOut(true);
    await signOut({ redirectUrl: "/" });
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className="flex h-10 items-center gap-2 rounded-xl border border-[#14213d]/10 bg-white px-4 text-sm font-medium text-[#14213d] transition hover:bg-[#14213d]/5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <LogOut className="size-4" />
      {isSigningOut ? "Logging out..." : "Log out"}
    </button>
  );
}
