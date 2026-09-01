import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "h-11 w-full rounded-sm bg-surface px-3.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] placeholder:text-subtle focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring/40";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-xs font-medium tracking-wide text-muted", className)}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        fieldClass,
        "h-auto min-h-28 resize-y py-3 leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export function NativeSelect({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(fieldClass, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </div>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="text-xs text-muted">{children}</p>;
}
