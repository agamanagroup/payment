"use client";

import Image from "next/image";
import { useState } from "react";

// Shows the bank's logo image; if it fails to load (e.g. file not added yet),
// falls back to a clean text wordmark so the layout never breaks.
export default function BankLogo({ src, bankName }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="rounded-md bg-brand-primary px-2.5 py-1 font-heading text-xs font-700 tracking-wide text-white">
        {bankName}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={bankName}
      width={1280}
      height={222}
      onError={() => setFailed(true)}
      className="h-6 w-auto object-contain md:h-7"
    />
  );
}
