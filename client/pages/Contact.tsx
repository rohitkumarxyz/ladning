import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { contactValidationSchema } from "../helper/validation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setValidationErrors({});

    try {
      const validatedData = contactValidationSchema.parse(formData);

      await axios.post("http://localhost:3001/api/contacts/", validatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSubmitted(true);
    } catch (err: any) {
      if (err.name === "ZodError") {
        const errors: Record<string, string> = {};
        err.errors.forEach((error: any) => {
          const field = error.path[0];
          errors[field] = error.message;
        });
        setValidationErrors(errors);
      } else if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Failed to submit contact form. Please try again.",
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-tight py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-2">Contact us</h1>
          <p className="mt-4 text-foreground/70">
            Tell us about your needs and we’ll get back with a tailored
            proposal.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-10 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="heading-3">Get in touch</h3>
          <p className="mt-3 text-foreground/70">
            Prefer a human touch? Request a demo or leave a message and we'll
            respond within one business day.
          </p>

          <div className="mt-6 space-y-3 text-sm text-foreground/80">
            <div>
              <strong>Email:</strong> hello@example.com
            </div>
            <div>
              <strong>Address:</strong> Delhi, India
            </div>
            <div>
              <strong>Phone:</strong> +99 9999 444 455
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                {error && (
                  <div className="rounded-md bg-red-50 border border-red-200 p-3">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium">Full name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full rounded-md border px-3 py-2 mt-1 ${
                      validationErrors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Work email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full rounded-md border px-3 py-2 mt-1 ${
                      validationErrors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your work email"
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full rounded-md border px-3 py-2 mt-1 ${
                      validationErrors.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`w-full rounded-md border px-3 py-2 mt-1 ${
                      validationErrors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    rows={1}
                    placeholder="Tell us about your needs..."
                  />
                  {validationErrors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors.message}
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="font-semibold text-lg">
                Thanks — we’ll be in touch
              </h3>
              <p className="mt-2 text-foreground/70">
                Someone from our team will contact you within one business day.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
