import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export function Logo({ href = ROUTES.home }: { href?: string }) {
  return (
    <Link href={href} className="logo">
      Find<span>Job</span>
    </Link>
  );
}
