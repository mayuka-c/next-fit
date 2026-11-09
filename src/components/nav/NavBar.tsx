import { buttonVariants } from "@heroui/styles";
import Link from "next/link";
import { Gi3dHammer } from "react-icons/gi";
import NavLink from "./NavLink";
import { getCurrentUser } from "@/lib/auth";
import UserMenu from "./UserMenu";
import { Suspense } from "react";

const navLinks = [
  { href: "/members", label: "Matches" },
  { href: "/lists", label: "Lists" },
  { href: "/messages", label: "Messages" },
];

export default function NavBar() {
  return (
    <header className="p-3 w-full fixed top-0 z-50 bg-linear-to-r from-accent/95 to-black">
      <div className="flex justify-between items-center px-10 mx-auto gap-6">
        <Link href="/" className="flex items-center gap-2">
          {" "}
          <Gi3dHammer size={40} className="text-gray-300" />
          <div className="font-bold text-3xl flex">
            <span className="text-gray-900">Next</span>
            <span className="text-gray-200">Fit</span>
          </div>
        </Link>
        <nav className="flex gap-3 my-2 uppercase text-lg text-white">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          <Suspense fallback={<GuestActions />}>
            <AuthNavActions />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

async function AuthNavActions() {
  const user = await getCurrentUser();
  return user ? <UserMenu user={user} /> : <GuestActions />;
}

function GuestActions() {
  return (
    <>
      <Link href="/login" className={buttonVariants({ variant: "primary" })}>
        Login
      </Link>
      <Link
        href="/register"
        className={buttonVariants({ variant: "secondary" })}
      >
        Register
      </Link>
    </>
  );
}
