"use client";

import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "./actions";
import { Input } from "@/components/ui/input";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand-cyan py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "Se verifică..." : "Intră în cont"}
    </button>
  );
}

export default function LoginPage() {
  const [state, action] = useFormState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image
            src="/logo/logo_dani.png"
            alt="DANI"
            width={1254}
            height={1254}
            className="h-14 w-auto brightness-0 invert"
          />
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              DANI Cadastru
            </div>
            <h1 className="mt-1 text-xl font-bold text-white">
              Panou de Administrare
            </h1>
          </div>
        </div>

        <form action={action} className="rounded-2xl border border-white/10 bg-navy-900 p-6">
          <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-white/50">
            Parolă administrator
          </label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••••"
            required
            autoFocus
            className="border-white/10 bg-navy-950/60 text-white placeholder:text-white/30 focus:border-brand-cyan"
          />

          {state?.error && (
            <p className="mt-3 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
              {state.error}
            </p>
          )}

          <div className="mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
