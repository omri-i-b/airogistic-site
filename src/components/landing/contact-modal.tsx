"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  X,
} from "@phosphor-icons/react/dist/ssr";

type State = "idle" | "submitting" | "success";

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in your env.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const fieldClass =
  "w-full border border-white/15 bg-white/[0.03] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/40 focus:bg-white/[0.06]";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Sync open state with URL hash (#contact)
  useEffect(() => {
    const check = () => setOpen(window.location.hash === "#contact");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Lock body scroll while open + esc to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = useCallback(() => {
    if (typeof window === "undefined") return;
    const { pathname, search } = window.location;
    history.replaceState(null, "", pathname + search);
    setOpen(false);
    // reset to idle a beat after close so reopen is fresh
    setTimeout(() => {
      setState("idle");
      setError(null);
    }, 250);
  }, []);

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!values.name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      return setError("Please enter a valid email address.");
    if (!values.message.trim())
      return setError("Tell us a bit about what you're building.");

    setState("submitting");

    if (!WEB3FORMS_KEY) {
      console.warn(
        "[Airogistic] NEXT_PUBLIC_WEB3FORMS_KEY not set, submission logged only:",
        values,
      );
      setTimeout(() => setState("success"), 600);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Airogistic, ${values.name} (${values.company || "no company"})`,
          from_name: "airogistic.com",
          ...values,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Submission failed");
      }
      setState("success");
    } catch (err) {
      setState("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email us directly.",
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-6"
      onClick={close}
    >
      <div
        className="relative w-full max-w-xl border border-white/15 bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" weight="bold" />
        </button>

        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            <span className="text-[#C5E86C]">—</span> Talk to the team
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight uppercase">
            Book a demo
          </h3>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          {state === "success" ? (
            <div className="flex flex-col items-start py-4">
              <CheckCircle
                className="h-10 w-10 text-[#C5E86C]"
                weight="fill"
              />
              <h4 className="mt-4 font-display text-2xl font-bold tracking-tight uppercase">
                Thanks, we&rsquo;ll be in touch.
              </h4>
              <p className="mt-2 max-w-sm text-sm text-white/60">
                A member of our team will reach out at{" "}
                <span className="text-white">{values.email}</span> within
                one business day.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-6 font-mono text-[11px] tracking-[0.25em] text-[#C5E86C] uppercase transition-opacity hover:opacity-80"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="modal-name">
                  <input
                    id="modal-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    className={fieldClass}
                    placeholder="Jane Cooper"
                  />
                </Field>
                <Field label="Email" htmlFor="modal-email">
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    className={fieldClass}
                    placeholder="jane@company.com"
                  />
                </Field>
              </div>
              <Field label="Company" htmlFor="modal-company">
                <input
                  id="modal-company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={update("company")}
                  className={fieldClass}
                  placeholder="Acme Corp."
                />
              </Field>
              <Field label="Fleet & use case" htmlFor="modal-message">
                <textarea
                  id="modal-message"
                  rows={4}
                  value={values.message}
                  onChange={update("message")}
                  className={fieldClass + " resize-none"}
                  placeholder="What are you flying, how many vehicles, and what's painful about testing today?"
                />
              </Field>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex w-full items-center justify-center gap-1.5 bg-[#C5E86C] px-4 py-3 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {state === "submitting" ? "Sending…" : "Request early access"}
                {state !== "submitting" && (
                  <ArrowRight className="h-3 w-3" weight="bold" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
