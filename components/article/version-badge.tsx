import { cn } from "@/lib/cn";

export function VersionBadge({
  version,
  lastVerified,
}: {
  readonly version: string;
  readonly lastVerified: string;
}) {
  const daysSince = Math.floor(
    (Date.now() - new Date(lastVerified).getTime()) / (1000 * 60 * 60 * 24),
  );
  const stale = daysSince > 30;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        stale ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800",
      )}
    >
      {stale && <span aria-label="注意">⚠️</span>}
      OpenClaw {version} · 驗證於{" "}
      {new Date(lastVerified).toLocaleDateString("zh-HK")}
    </span>
  );
}
