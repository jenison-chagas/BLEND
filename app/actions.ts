"use server";

import { createClient } from "@supabase/supabase-js";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = { status: "idle", message: "" };

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  // A filled honeypot is treated as a bot submission without exposing the lead table.
  if (website) return { status: "success", message: "Mensagem enviada com sucesso." };

  if (
    name.length < 2 || name.length > 120 ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10 || message.length > 5000
  ) {
    return { status: "error", message: "Confira os campos e tente novamente." };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.error("Supabase contact form is missing its public project configuration.");
    return { status: "error", message: "O formulário está indisponível no momento." };
  }

  const supabase = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await supabase.from("contact_leads").insert({ name, email, message });
  if (error) {
    console.error("Supabase contact submission failed:", error.code);
    return { status: "error", message: "Não foi possível enviar agora. Tente novamente em instantes." };
  }

  return { status: "success", message: "Mensagem enviada. Em breve entraremos em contato." };
}

export { initialState as contactFormInitialState };
