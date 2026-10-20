"use client";

import { useActionState } from "react";
import { contactFormInitialState, submitContact } from "../actions";

const fieldClassName =
  "mt-2 w-full border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#F2AD16]";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, contactFormInitialState);

  return (
    <form action={action} className="mx-auto mt-10 max-w-2xl space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs text-white/70">
          Nome
          <input className={fieldClassName} name="name" autoComplete="name" minLength={2} maxLength={120} required />
        </label>
        <label className="block text-xs text-white/70">
          E-mail
          <input className={fieldClassName} name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>

      <label className="block text-xs text-white/70">
        Como podemos ajudar?
        <textarea className={`${fieldClassName} min-h-32 resize-y`} name="message" minLength={10} maxLength={5000} required />
      </label>

      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label>
          Não preencha este campo
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className={`min-h-5 text-xs ${state.status === "error" ? "text-red-300" : "text-white/60"}`}>
          {state.message || "Usaremos seus dados para responder a esta mensagem."}
        </p>
        <button className="gold-button inline-flex min-h-11 items-center justify-center gap-3 border border-[#F2AD16] bg-[#F2AD16] px-5 text-[10px] uppercase tracking-[0.1em] transition-colors duration-200 hover:border-[#FFD46B] hover:bg-[#FFD46B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2AD16] disabled:cursor-wait disabled:opacity-60 sm:min-h-12 sm:px-6" type="submit" disabled={pending}>
          <span className="gold-button__label">{pending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}</span>
        </button>
      </div>
    </form>
  );
}
