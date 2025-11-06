import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Mail, Globe, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <motion.div
        className="container-tight py-4 border-b border-border"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Refund and Cancellation Policy</span>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="container-tight py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Policy Document</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight"
            >
              Refund and Cancellation Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              At Tradeneeti Academy, we strive to deliver the highest quality of learning and ensure that every student benefits from our courses, mentorship, and resources. However, before enrolling, we request all learners to carefully read and understand our Refund and Cancellation Policy outlined below.
            </motion.p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1: No Refund Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    1. No Refund Policy
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    All payments made towards any course, mentorship program, or subscription offered by Tradeneeti Academy are <strong className="text-foreground">non-refundable and non-transferable</strong>. Once the payment is successfully processed, no full or partial refund will be issued under any circumstances, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-base text-muted-foreground ml-6 list-disc">
                    <li>Change of mind after purchase</li>
                    <li>Lack of time to complete the course</li>
                    <li>Technical issues on the user's end</li>
                    <li>Inability to understand the course material due to individual learning pace</li>
                  </ul>
                  <p className="text-base text-muted-foreground leading-relaxed mt-4">
                    We provide our best efforts to ensure successful learning, but individual outcomes may vary depending on factors such as time commitment, consistency, and ability to grasp concepts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Course Access and Validity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                2. Course Access and Validity
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Once enrolled, learners will receive access to the course materials as per the plan or duration purchased. Access remains active for the validity period specified at the time of purchase. After the expiration of access, renewal (if available) must be purchased separately.
              </p>
            </motion.div>

            {/* Section 3: Cancellation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                3. Cancellation Policy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Since our courses are digital and made accessible immediately upon successful payment, <strong className="text-foreground">cancellations are not allowed</strong> once access is granted. Please ensure that you have reviewed all course details, inclusions, and prerequisites before enrolling.
              </p>
            </motion.div>

            {/* Section 4: Technical Issues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                4. Technical Issues
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                In case of any technical difficulties in accessing the course materials, please reach out to our support team at{" "}
                <a
                  href="mailto:support@tradeneeti.in"
                  className="text-primary hover:underline font-semibold"
                >
                  support@tradeneeti.in
                </a>
                . Our team will make every effort to resolve your issue promptly and ensure uninterrupted learning.
              </p>
            </motion.div>

            {/* Section 5: Academy's Final Decision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                5. Academy's Final Decision
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                All decisions regarding refunds, cancellations, or access issues will be made solely at the discretion of Tradeneeti Academy. The decision of the Academy shall be considered <strong className="text-foreground">final and binding</strong> in all cases.
              </p>
            </motion.div>

            {/* Section 6: Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                For any queries, concerns, or assistance related to your course or payment, you can reach us at:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:support@tradeneeti.in"
                  className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">support@tradeneeti.in</span>
                </a>
                <a
                  href="https://www.tradeneeti.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">www.tradeneeti.in</span>
                </a>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="rounded-xl bg-card border-2 border-primary/30 p-6 md:p-8"
            >
              <p className="text-base text-foreground leading-relaxed">
                <strong>By enrolling in any course or program offered by Tradeneeti Academy, you acknowledge and agree to the terms stated in this Refund and Cancellation Policy.</strong>
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Courses
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


