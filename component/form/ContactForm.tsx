"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Card, CardContent } from "@/component/ui/card";
import Button from "@/component/ui/button";
import { AlertCircle, CheckCircle2, Loader2, Mail, Upload } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      if (data.file && data.file[0]) {
        formData.append("file", data.file[0]);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      reset();
      setFileName(null);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      toast.error("Failed to send message", { description: message });
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const inputClass =
    "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={inputClass}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={inputClass}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              className={inputClass}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              {...register("message")}
              className={`${inputClass} resize-none`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="file"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Attachment (Optional)
              <span className="ml-2 text-xs text-stone-500">
                PDF, PNG, JPEG - Max 5MB
              </span>
            </label>
            <input
              id="file"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              {...register("file")}
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 px-4 py-3 text-sm text-stone-600 transition-colors hover:border-indigo-500 hover:text-indigo-600"
            >
              <Upload className="h-5 w-5" />
              <span>{fileName || "Click to upload file"}</span>
            </label>
            {errors.file && (
              <p className="mt-1 text-sm text-red-500">
                {errors.file.message as string}
              </p>
            )}
          </div>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-2 rounded-lg p-4 text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p>{submitStatus.message}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 py-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
