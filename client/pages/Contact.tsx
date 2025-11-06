import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { contactValidationSchema, leadValidationSchema } from "../helper/validation";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, BookOpen, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  location?: string;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("course") || "";
  const courseType = searchParams.get("type") || "";
  const isCourseRegistration = !!courseName;
  const isLiveClass = courseType === "live-class";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
  });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // Pre-fill message with course info
  useEffect(() => {
    if (isCourseRegistration && courseName) {
      const defaultMessage = isLiveClass 
        ? `I would like to join the live class: ${courseName}`
        : `I'm interested in registering for the course: ${courseName}`;
      
      setFormData(prev => {
        // Only update if message is empty or still has default text
        if (!prev.message || prev.message.includes("I'm interested") || prev.message.includes("I would like")) {
          return { ...prev, message: defaultMessage };
        }
        return prev;
      });
    }
  }, [courseName, isCourseRegistration, isLiveClass]);

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
      // Submit as lead if course registration, otherwise as contact
      if (isCourseRegistration) {
        const leadData = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location || undefined, // Optional
          message: formData.message,
        };

        const validatedLeadData = leadValidationSchema.parse(leadData);

        await axios.post("http://localhost:3001/api/leads", validatedLeadData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const validatedData = contactValidationSchema.parse(formData);

        await axios.post("http://localhost:3001/api/contacts/", validatedData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

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
            "Failed to submit form. Please try again.",
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@tradeneeti.com",
      href: "mailto:support@tradeneeti.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Mumbai, India",
      href: "#",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        {/* Header Section */}
      <motion.div
          className="mx-auto max-w-3xl text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
            {isCourseRegistration ? (
              <>
                <span className="text-foreground">Register for </span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  {isLiveClass ? "Live Class" : "Course"}
                </span>
              </>
            ) : (
              <>
                <span className="text-foreground">Contact </span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Us
                </span>
              </>
            )}
          </h1>
          {isCourseRegistration && courseName && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl mb-4 border",
                isLiveClass
                  ? "bg-red-500/10 border-red-500/30 text-red-400"
                  : "bg-primary/10 border-primary/30 text-primary"
              )}
            >
              {isLiveClass ? (
                <Radio className="w-5 h-5 animate-pulse" />
              ) : (
                <BookOpen className="w-5 h-5" />
              )}
              <span className="font-semibold">{courseName}</span>
            </motion.div>
          )}
          <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {isCourseRegistration
              ? "Fill in your details below and our team will contact you shortly with enrollment information."
              : "Tell us about your needs and we'll get back with a tailored proposal. Our expert team is ready to help you succeed in your trading journey."}
          </p>
      </motion.div>

        {/* Main Content Grid */}
      <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
          transition={{ duration: 0.8 }}
      >
          {/* Contact Information Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="relative rounded-2xl border border-border bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl p-8 md:p-10 shadow-xl hover:border-primary/30 transition-all duration-300">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Prefer a human touch? Request a call or leave a message and we'll respond within one business day.
          </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group/item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary/30 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                            {info.label}
                          </div>
                          <div className="text-sm md:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors duration-300">
                            {info.value}
            </div>
            </div>
                      </motion.a>
                    );
                  })}
            </div>
          </div>
        </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="relative rounded-2xl border border-border bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl p-8 md:p-10 shadow-xl hover:border-primary/30 transition-all duration-300">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

          {!submitted ? (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="space-y-6">
                {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl bg-destructive/10 border-2 border-destructive/50 p-4 backdrop-blur-sm"
                      >
                        <p className="text-destructive text-sm font-medium">{error}</p>
                      </motion.div>
                )}

                <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Full Name
                      </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`w-full rounded-xl border-2 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-border/80 ${
                      validationErrors.name
                            ? "border-destructive focus:ring-destructive/50"
                            : "border-border"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {validationErrors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-xs mt-2 flex items-center gap-1"
                        >
                      {validationErrors.name}
                        </motion.p>
                  )}
                </div>

                <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Work Email
                      </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full rounded-xl border-2 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-border/80 ${
                      validationErrors.email
                            ? "border-destructive focus:ring-destructive/50"
                            : "border-border"
                    }`}
                    placeholder="Enter your work email"
                  />
                  {validationErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-xs mt-2 flex items-center gap-1"
                        >
                      {validationErrors.email}
                        </motion.p>
                  )}
                </div>

                <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Phone Number
                      </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full rounded-xl border-2 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-border/80 ${
                      validationErrors.phone
                            ? "border-destructive focus:ring-destructive/50"
                            : "border-border"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {validationErrors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-xs mt-2 flex items-center gap-1"
                        >
                      {validationErrors.phone}
                        </motion.p>
                  )}
                </div>

                {isCourseRegistration && (
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Location <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.location || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData(prev => ({ ...prev, location: value }));
                      }}
                      className="w-full rounded-xl border-2 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-border/80 border-border"
                      placeholder="Enter your city/state"
                    />
                  </div>
                )}

                <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Message
                      </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                        className={`w-full rounded-xl border-2 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-border/80 resize-none ${
                      validationErrors.message
                            ? "border-destructive focus:ring-destructive/50"
                            : "border-border"
                    }`}
                        rows={5}
                    placeholder={isCourseRegistration ? "Any additional information or questions..." : "Tell us about your needs..."}
                  />
                  {validationErrors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-xs mt-2 flex items-center gap-1"
                        >
                      {validationErrors.message}
                        </motion.p>
                  )}
                </div>

                    <motion.div
                      className="pt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                    type="submit"
                    disabled={loading}
                        size="lg"
                        className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden group px-8 py-6 text-base"
                  >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        {isCourseRegistration ? "Submitting..." : "Sending..."}
                      </>
                    ) : (
                            <>
                              {isCourseRegistration ? (
                                <>
                                  <BookOpen className="w-5 h-5" />
                                  {isLiveClass ? "Join Live Class" : "Register Now"}
                                </>
                              ) : (
                                <>
                                  <Send className="w-5 h-5" />
                                  Send Message
                                </>
                              )}
                            </>
                    )}
                        </span>
                      </Button>
                    </motion.div>
              </div>
            </form>
          ) : (
                <motion.div
                  className="relative z-10 text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={cn(
                      "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full",
                      isCourseRegistration && isLiveClass
                        ? "bg-red-500/20 text-red-400"
                        : "bg-primary/20 text-primary"
                    )}
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  {/* Success Message */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {isCourseRegistration 
                      ? isLiveClass 
                        ? "Registration Submitted!" 
                        : "Registration Submitted!"
                      : "Message Sent!"}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-4">
                    {isCourseRegistration
                      ? isLiveClass
                        ? "Thank you for your interest! Our team will contact you shortly with live class details and timing information."
                        : "Thank you for your interest! Our team will contact you shortly with enrollment details and payment information."
                      : "We'll get back to you as soon as possible."}
                  </p>

                  {/* Course Info Badge */}
                  {isCourseRegistration && courseName && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-3 rounded-xl mt-4 border",
                        isLiveClass
                          ? "bg-red-500/10 border-red-500/30 text-red-400"
                          : "bg-primary/10 border-primary/30 text-primary"
                      )}
                    >
                      {isLiveClass ? (
                        <Radio className="w-5 h-5 animate-pulse" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                      <span className="font-semibold">{courseName}</span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
        </div>
    </div>
  );
}
