import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { trackEvent } from "@/components/analytics";
import { inquirySchema, submitInquiry } from "@/lib/inquiries";
import { REFERRAL_SOURCES, SHOOT_TYPES, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  FieldError,
  Input,
  Label,
  NativeSelect,
  Textarea,
} from "@/components/ui/field";

type FormState = {
  name: string;
  email: string;
  phone: string;
  shootType: string;
  date: string;
  location: string;
  referralSource: string;
  message: string;
  honey: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  shootType: "portraits",
  date: "",
  location: "",
  referralSource: "instagram",
  message: "",
  honey: "",
};

type ContactFormProps = {
  initialType?: string;
};

export function ContactForm({ initialType }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(() => ({
    ...empty,
    shootType: SHOOT_TYPES.some((item) => item.value === initialType)
      ? (initialType as string)
      : "portraits",
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  const set =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [key]: event.target.value }));
    };

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = inquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof FormState]) {
          next[key as keyof FormState] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      await submitInquiry({ data: parsed.data });
      trackEvent("generate_lead", {
        shoot_type: parsed.data.shootType,
        referral_source: parsed.data.referralSource,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t border-fg/15 pt-10">
        <h2 className="font-display text-5xl md:text-6xl">Request received.</h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          We’ll reply by email. If you need to add anything, write{" "}
          <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
        <Button asChild className="mt-8">
          <Link to="/work">See the work</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-7" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.honey}
            onChange={set("honey")}
          />
        </label>
      </div>

      <Field id="name" label="Name" error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={set("name")}
        />
      </Field>

      <div className="grid gap-7 md:grid-cols-2">
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={set("email")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </Field>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <Field id="shootType" label="Shoot type" error={errors.shootType}>
          <NativeSelect
            id="shootType"
            name="shootType"
            value={values.shootType}
            onChange={set("shootType")}
          >
            {SHOOT_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field id="date" label="Date" error={errors.date}>
          <Input
            id="date"
            name="date"
            type="date"
            min={minDate || undefined}
            value={values.date}
            onChange={set("date")}
          />
        </Field>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <Field id="location" label="Location" error={errors.location}>
          <Input
            id="location"
            name="location"
            placeholder={SITE.city}
            value={values.location}
            onChange={set("location")}
          />
        </Field>
        <Field id="referralSource" label="How did you hear about us?" error={errors.referralSource}>
          <NativeSelect
            id="referralSource"
            name="referralSource"
            value={values.referralSource}
            onChange={set("referralSource")}
          >
            {REFERRAL_SOURCES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </NativeSelect>
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={set("message")}
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-muted">
          Couldn’t send the form. Email us directly at{" "}
          <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-2 self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send request"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      <FieldError>{error}</FieldError>
    </div>
  );
}
