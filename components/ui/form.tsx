import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const inputBase =
  'w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-400';

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={inputBase} {...props} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${inputBase} min-h-32`} {...props} />;
}
