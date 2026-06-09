"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Share2,
  QrCode,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  PAYMENT,
  CONTACT,
  LOGO_SRC,
  HDFC_LOGO_SRC,
  QR_SRC,
  buildPaymentText,
} from "./payment-config";
import Card from "../components/Card";
import InfoRow from "../components/InfoRow";
import Toast from "../components/Toast";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };

  const copyAll = async () => {
    const text = buildPaymentText();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    showToast("Payment details copied successfully");
  };

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(buildPaymentText())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareQR = async () => {
    // Preferred: native share sheet with the QR image attached.
    // On mobile the user picks WhatsApp and the QR image is sent directly.
    try {
      if (navigator.canShare) {
        const res = await fetch(QR_SRC);
        const blob = await res.blob();
        const file = new File([blob], "agamana-upi-qr.jpeg", {
          type: blob.type || "image/jpeg",
        });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "Agamana Developers UPI QR",
            text: "Scan this QR to pay Agamana Developers via UPI.",
          });
          return;
        }
      }
      throw new Error("file-share-unsupported");
    } catch (err) {
      if (err && err.name === "AbortError") return; // user cancelled
      // Fallback (e.g. desktop): open WhatsApp with a link to this page,
      // where the QR can be scanned. WhatsApp URLs can't carry image files.
      const pageUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const text = `Scan this QR to pay Agamana Developers via UPI:\n${pageUrl}`;
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const upiApps = ["Google Pay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"];

  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <header className="mx-auto w-full max-w-[1200px] px-5 pt-8 md:px-8 md:pt-12">
        <Image
          src={LOGO_SRC}
          alt="Agamana Developers"
          width={705}
          height={186}
          priority
          className="h-auto w-[180px] object-contain object-left md:w-[220px]"
        />
      </header>

      {/* Title block */}
      <section className="mx-auto w-full max-w-[1200px] px-5 pb-2 pt-8 md:px-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1 className="font-heading text-3xl font-700 tracking-tight text-textPrimary md:text-[42px] md:leading-tight">
            Payment Information
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-textSecondary md:text-base">
            Securely make payments to Agamana Developers using the bank account
            details below or scan the UPI QR code.
          </p>
        </motion.div>
      </section>

      {/* Cards */}
      <div className="mx-auto w-full max-w-[1200px] px-5 py-6 md:px-8 md:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* LEFT — Bank Details */}
          <Card>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="font-heading text-xl font-600 text-textPrimary">
                Bank Account Details
              </h2>
              {/* HDFC Bank official logo */}
              <Image
                src={HDFC_LOGO_SRC}
                alt="HDFC Bank"
                width={1280}
                height={222}
                className="h-6 w-auto object-contain md:h-7"
              />
            </div>

            <dl className="flex flex-col gap-3">
              <InfoRow label="Account Name" value={PAYMENT.accountName} />
              <div className="flex items-center justify-between gap-3 rounded-xl border border-brand-border bg-brand-bg/40 px-4 py-3">
                <div className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-wide text-textSecondary">
                    Account Type
                  </dt>
                  <dd className="mt-0.5 font-heading text-base font-600 text-textPrimary md:text-[17px]">
                    {PAYMENT.accountType}
                  </dd>
                </div>
              </div>
              <InfoRow label="Account Number" value={PAYMENT.accountNumber} />
              <InfoRow label="IFSC Code" value={PAYMENT.ifsc} />
            </dl>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <button
                type="button"
                onClick={copyAll}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#02382e] active:scale-[0.99]"
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy Payment Details
              </button>
              <button
                type="button"
                onClick={shareWhatsApp}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-semibold text-brand-primary transition-all duration-200 hover:border-brand-secondary hover:bg-brand-bg active:scale-[0.99]"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share on WhatsApp
              </button>
            </div>
          </Card>

          {/* RIGHT — UPI QR */}
          <Card delay={0.08}>
            <div className="mb-1 flex items-center gap-2">
              <QrCode className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
              <h2 className="font-heading text-xl font-600 text-textPrimary">
                UPI Payment
              </h2>
            </div>
            <p className="text-sm text-textSecondary">
              Scan the QR code using any UPI app
            </p>

            <div className="my-6 flex flex-1 items-center justify-center">
              <div className="overflow-hidden rounded-2xl border border-brand-border shadow-card">
                <Image
                  src={QR_SRC}
                  alt="UPI QR code for Agamana Developers"
                  width={651}
                  height={645}
                  className="h-auto w-full max-w-[320px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {upiApps.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-brand-border bg-brand-bg/50 px-3 py-1 text-xs font-medium text-textSecondary"
                >
                  {app}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={shareQR}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#02382e] active:scale-[0.99]"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share QR on WhatsApp
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact */}
      <section className="mx-auto w-full max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h2 className="font-heading text-lg font-600 text-textPrimary">
          Need Assistance?
        </h2>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-medium text-textPrimary transition-colors hover:border-brand-secondary hover:text-brand-primary"
          >
            <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
            WhatsApp · {CONTACT.whatsappDisplay}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-medium text-textPrimary transition-colors hover:border-brand-secondary hover:text-brand-primary"
          >
            <Phone className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-medium text-textPrimary transition-colors hover:border-brand-secondary hover:text-brand-primary"
          >
            <Mail className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
            {CONTACT.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-5 py-5 text-xs text-textSecondary sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="text-left">
            © {new Date().getFullYear()} Agamana Developers. All Rights Reserved.
          </p>
          <p className="text-left sm:text-right">
            Designed &amp; Developed by{" "}
            <a
              href="https://navodita.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-primary underline-offset-2 transition-colors hover:text-brand-secondary hover:underline"
            >
              Navodita
            </a>
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
      <Toast message={toast.message} show={toast.show} />
    </main>
  );
}
