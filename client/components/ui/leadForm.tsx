import { useState } from "react";
import axios from "axios";
import { LeadFormData, LeadAPIResponse } from "@shared/api";
import { leadValidationSchema } from "@/helper/validation";

interface LeadFormProps {
  courseName?: string;
}

const LeadForm = ({ courseName }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const rawLeadData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      location: (formData.get("location") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
    };

    try {
      // Validate the form data using the schema
      const validatedData = leadValidationSchema.parse(rawLeadData);

      const response = await axios.post<LeadAPIResponse>(
        "http://localhost:3001/api/leads",
        validatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // If we get a 200/201 response, consider it successful
      if (response.status >= 200 && response.status < 300) {
        setSubmitted(true);
      } else if (response.data && response.data.success) {
        setSubmitted(true);
      } else {
        setError(response.data?.message || "Failed to send lead");
      }
    } catch (err) {
      if (err && typeof err === "object" && "issues" in err) {
        // Zod validation error
        const zodError = err as { issues: Array<{ message: string }> };
        const firstError = zodError.issues[0];
        setError(
          firstError?.message || "Please check your input and try again",
        );
      } else if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to send lead");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="md:col-span-1">
      <div className="rounded-2xl border bg-white p-6">
        <h3 className="text-lg font-semibold">Request more info</h3>
        <p className="mt-2  mb-6 text-sm text-foreground/70">
          Leave your details and we will get back with a tailored proposal.
        </p>

        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {!submitted ? (
          <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
            <label className="text-sm">Name</label>
            <input
              name="name"
              placeholder="Enter your full name"
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Phone</label>
            <input
              name="phone"
              placeholder="Enter your phone number"
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Email</label>
            <input
              name="email"
              placeholder="Enter your email"
              type="email"
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Location</label>
            <input
              name="location"
              placeholder="Enter your location"
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Message</label>
            <textarea
              placeholder="Leave your message here"
              name="message"
              rows={2}
              className="rounded-md border px-3 py-2"
            />

            <div className="mt-3 flex items-center gap-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8 bg-white border border-gray-200 rounded-lg ">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-black mb-2">Thank You!</h4>
            <p className="text-sm text-gray-700 leading-relaxed px-4">
              Thank you for sharing your details with us! Our team will review
              your information and get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default LeadForm;
