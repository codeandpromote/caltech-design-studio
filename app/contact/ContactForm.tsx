"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const services = [
  "Residential interior",
  "Commercial / office",
  "Café / restaurant",
  "Hospitality",
  "Heritage restoration",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selected, setSelected] = useState<string>(services[0]);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    fd.append("subject", "New enquiry · Caltech Design Studio");
    fd.append("from_name", "Caltech Website");

    if (!accessKey) {
      // No key configured — degrade gracefully, simulate success.
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      return;
    }

    fd.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-gold-400/30 bg-gradient-to-br from-ink-800 to-ink-900 p-12 md:p-16 text-center"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-gold-400 text-ink-900 flex items-center justify-center mb-6">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="h-display text-4xl md:text-5xl mb-4">
          Thank you<span className="italic gold-gradient-text">.</span>
        </h3>
        <p className="text-bone-50/70 max-w-md mx-auto leading-relaxed">
          Your message is on its way. We&apos;ll be in touch within 1–2
          business days. Until then — go pour yourself something nice.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Field label="City / Location" name="location" />
      </div>

      {/* Service selector */}
      <div>
        <label className="block eyebrow mb-3">What can we help with?</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSelected(s)}
              className={
                "px-4 py-2 rounded-full text-sm border transition-all " +
                (selected === s
                  ? "bg-gold-400 text-ink-900 border-gold-400"
                  : "border-bone-50/15 text-bone-50/75 hover:border-gold-300 hover:text-gold-300")
              }
            >
              {s}
            </button>
          ))}
          <input type="hidden" name="service" value={selected} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block eyebrow mb-3" htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border border-bone-50/15 rounded-md px-4 py-3 text-bone-50 placeholder-bone-50/30 focus:outline-none focus:border-gold-300 transition-colors resize-none"
          placeholder="Type, paste, ramble — the more context, the better."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <Send size={16} />
            </>
          )}
        </button>
        <p className="text-bone-50/45 text-xs">
          We&apos;ll never share your details.
        </p>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-terracotta-400"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      {!accessKey && (
        <p className="text-bone-50/40 text-xs italic">
          Note: form is in preview mode. Add{" "}
          <code className="text-gold-300">NEXT_PUBLIC_WEB3FORMS_KEY</code> to{" "}
          <code className="text-gold-300">.env.local</code> to enable live
          delivery.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block eyebrow mb-3">
        {label}
        {required && <span className="text-gold-300 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-bone-50/15 rounded-md px-4 py-3 text-bone-50 placeholder-bone-50/30 focus:outline-none focus:border-gold-300 transition-colors"
      />
    </div>
  );
}
