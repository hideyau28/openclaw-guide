import { cn } from "@/lib/cn";
import { AlertTriangle, Info, Flame, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "danger" | "warning" | "info" | "tip";

const config: Record<Variant, { bg: string; border: string; icon: ReactNode }> =
  {
    danger: {
      bg: "bg-red-50",
      border: "border-red-300",
      icon: <Flame className="h-5 w-5 text-red-600" />,
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      icon: <Info className="h-5 w-5 text-blue-600" />,
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-300",
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
    },
  };

export function Callout({
  variant = "info",
  children,
}: {
  readonly variant?: Variant;
  readonly children: ReactNode;
}) {
  const c = config[variant];
  return (
    <div
      className={cn(
        "my-4 flex gap-3 rounded-xl border-l-4 p-4 shadow-sm",
        c.bg,
        c.border,
      )}
    >
      <div className="mt-0.5 shrink-0">{c.icon}</div>
      <div className="prose-sm">{children}</div>
    </div>
  );
}
