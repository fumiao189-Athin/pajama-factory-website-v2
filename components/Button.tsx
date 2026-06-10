import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "bg-cocoa text-white hover:bg-ink focus-visible:outline-cocoa",
    secondary:
      "border border-cocoa/20 bg-white text-cocoa hover:border-cocoa/50 hover:bg-linen",
    light:
      "bg-white text-cocoa hover:bg-linen focus-visible:outline-white"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
