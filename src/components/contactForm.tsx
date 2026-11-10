"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  IconAlertCircle,
  IconLoader2,
  IconSend,
} from "@tabler/icons-react";

const REDIRECT_DELAY = 2200;

const inputClassName =
  "w-full rounded-xl border border-black/15 bg-[#FAF8F5] px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:opacity-60";

const labelClassName = "mb-2 block text-base font-semibold text-neutral-900";

const ContactForm: React.FC = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const timeout = window.setTimeout(() => {
      router.push("/");
    }, REDIRECT_DELAY);

    return () => window.clearTimeout(timeout);
  }, [submitted, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setError(null);

    const trimmedContact = contact.trim();
    if (!trimmedContact) {
      setError("Please add an email address or phone number so we can reply.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          contact: trimmedContact,
          message: message.trim(),
        }),
      });

      let data: { message?: string } = {};
      try {
        data = await response.json();
      } catch {
        // Response body was empty or not JSON — fall back to a generic message.
      }

      if (!response.ok) {
        setError(data.message || "We couldn't send your message. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-black/5 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(23,23,23,0.45)] sm:p-8 lg:mx-0">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex min-h-[440px] flex-col items-center justify-center px-2 text-center"
          >
            <motion.div
              className="relative flex h-24 w-24 items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[#CFDBC2]/60"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.2,
                  delay: shouldReduceMotion ? 0 : 0.45,
                  repeat: shouldReduceMotion ? 0 : 2,
                  ease: "easeOut",
                }}
              />
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#CFDBC2]">
                <svg
                  viewBox="0 0 52 52"
                  className="h-11 w-11"
                  fill="none"
                  stroke="#171717"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M15 27.5 23 35.5 38 19"
                    initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : 0.25,
                      ease: "easeOut",
                    }}
                  />
                </svg>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-6 text-3xl font-bold"
            >
              Message sent!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="mt-2 max-w-xs text-neutral-600"
            >
              Thanks for reaching out — we&apos;ll get back to you shortly.
            </motion.p>

            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-black/10"
            >
              <motion.div
                className="h-full rounded-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.8,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mt-3 text-sm text-neutral-500"
            >
              Taking you home…
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold">Send a message</h2>
              <p className="mt-1 text-neutral-600">
                Fill in the details below and we&apos;ll be in touch.
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
              >
                <IconAlertCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="fullName" className={labelClassName}>
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={inputClassName}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="contact" className={labelClassName}>
                Contact number or email{" "}
                <span className="text-red-500" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                autoComplete="email"
                placeholder="you@example.com or +91 98765 43210"
                className={inputClassName}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                aria-required="true"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClassName}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us a little about your project…"
                className={`${inputClassName} resize-y`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="text-center text-base font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-black hover:underline"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <>
                    <IconLoader2
                      size={18}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <IconSend size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
