import CopyButton from "./CopyButton";

export default function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-brand-border bg-brand-bg/40 px-4 py-3">
      <div className="min-w-0">
        <dt className="text-xs font-medium uppercase tracking-wide text-textSecondary">
          {label}
        </dt>
        <dd className="mt-0.5 truncate font-heading text-base font-600 text-textPrimary md:text-[17px]">
          {value}
        </dd>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}
