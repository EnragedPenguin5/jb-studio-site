import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Underlined fields: no boxes, just a line that brightens when you're in it.
export const fieldClass =
  "h-12 w-full rounded-none border-b border-fg/25 bg-transparent px-0 text-base text-fg outline-none transition-[border-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] placeholder:text-subtle hover:border-fg/50 focus-visible:border-fg focus-visible:shadow-[0_1px_0_0_var(--color-fg)]";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm text-muted", className)}
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
        className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-muted"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </div>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="text-sm text-red">{children}</p>;
}
