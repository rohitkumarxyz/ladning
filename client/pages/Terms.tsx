import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Mail, Globe, Shield, Lock, AlertTriangle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
          <span className="text-foreground">Terms of Use</span>
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
              <span className="text-sm font-semibold text-primary">Legal Document</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight"
            >
              Terms of Use
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              These Terms of Use govern your access to and use of the Website and the content on the Website. By accessing and using the Website, you agree to these Terms of Use. If you do not agree to any of these Terms of Use, you may not access or use the site.
            </motion.p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1: Confidential Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Confidential Information
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Confidential or professional or business Information on this website or any material, knowledge, information and data (verbal, electronic, written or any other form) concerning to this Firm or its businesses not generally known to the public consisting of, but not limited to, inventions, discoveries, plans, concepts, designs, blueprints, drawings, models, devices, equipment, apparatus, products, prototypes, formulae, algorithms, techniques, research projects, computer programs, software, firmware, hardware, business development and marketing plans, merchandising systems, financial and pricing data, information concerning investors, customers, suppliers, consultants and employees, and any other concepts, ideas or information involving or related to the business which, if misused or disclosed, could adversely affect the firms business thus may attract strict legal action against the violator and be booked under law.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Access and Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Access and Registration
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    As the original purchaser of content sold on Tradeneeti Academy, you are entitled to access and use the content which is identified in the course and which is on the Tradeneeti Academy website, at <a href="https://www.tradeneeti.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">www.tradeneeti.in</a> ("Website"). In order to access and use this content, you must register with Tradeneeti Academy and create a password to use in accessing the content on the Website.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Password Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Password Security
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Your password is unique and exclusive to you, and you may not transfer your password to any other person or allow any other person to Tradeneeti Academy use your password to access or use content on the Website. You agree to notify immediately if any other person makes unauthorized use of your password.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Tradeneeti Academy reserves the right to suspend or revoke your password in the event of any misuse of your password or any use of your password in violation of these Terms and Conditions. In the event of any such suspension or revocation, you will not be entitled to any refund or payment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Modifications to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Modifications to Terms
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tradeneeti Academy reserves the right to modify these Terms of Use at any time and in its sole discretion. Your use of the site following any modification will constitute your assent to and acceptance of the modifications.
              </p>
            </motion.div>

            {/* Section 5: License Grant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                License Grant
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Upon registration, Tradeneeti Academy grants you a non-exclusive, non-transferable, non-assignable, personal license to access and use the Tradeneeti Academy content identified in the content you purchased via an online/offline reader.
              </p>
            </motion.div>

            {/* Section 6: Website Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Website Availability
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Tradeneeti Academy will not be liable for any delay or interruption in your access to the site or any content located on the site, or for any transmission errors, equipment or software incompatibilities, force majeure or other failure of performance. Tradeneeti Academy will use reasonable efforts to correct any failure of performance, but Tradeneeti Academy will not be required to make any changes to any equipment or software used by Tradeneeti Academy or its contractors or agents to ensure compatibility with any equipment or software used by you.
              </p>
            </motion.div>

            {/* Section 7: Restrictions on Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Restrictions on Use
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                You may not use the site or the content on the site for any commercial purpose, including but not limited to the use of any of the content to market or sell goods or services to any person. You agree not to launch any automated system, including without limitation, "robots," "spiders," or "offline readers," to access the site.
              </p>
            </motion.div>

            {/* Section 8: Content Changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Content Changes
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tradeneeti Academy reserves the right to change, suspend access to, or remove any or all of the content on the Website at any time, for any reason, in its sole discretion. Tradeneeti Academy also reserves the right to discontinue the Website at any time, either temporarily or permanently. In the event of the removal of any content from the Website or the termination of the Website, you will not be entitled to any refund or payment.
              </p>
            </motion.div>

            {/* Section 9: Disclaimers and Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="rounded-xl bg-card border-2 border-red-500/30 p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Disclaimers and Limitations of Liability
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    YOU AGREE THAT YOUR USE OF THE SITE SHALL BE AT YOUR SOLE RISK, AND Tradeneeti Academy WILL NOT BE HELD LIABLE IN ANY WAY FOR YOUR USE OF THE SITE OR FOR ANY INFORMATION CONTAINED ON THE SITE. ALL CONTENT CONTAINED IN OR REFERRED TO ON THE SITE IS PROVIDED "AS IS," WITHOUT ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, Tradeneeti Academy DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Tradeneeti Academy MAKES NO WARRANTIES THAT THE SITE WILL BE ERROR-FREE, OR THAT ANY ERRORS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER FROM WHICH THE SITE IS OPERATED WILL BE FREE OF VIRUSES OR OTHER POTENTIALLY HARMFUL CODES.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL Tradeneeti Academy BE HELD LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES AND EXPENSES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, PERSONAL INJURY OR PROPERTY DAMAGE, LOST PROFITS, AND DAMAGES ARISING FROM COMPUTER VIRUSES, BUSINESS INTERRUPTION, LOST DATA, UNAUTHORIZED ACCESS TO OR USE OF SITE SERVERS OR ANY PERSONAL INFORMATION STORED THEREIN, OR ANY INTERRUPTION OR CESSATION OF OPERATION OF THE SITE) ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SITE OR ANY INFORMATION CONTAINED ON THE SITE, WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 10: Indemnification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Indemnification
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                You agree to indemnify, hold harmless and defend Tradeneeti Academy from and against any and all claims, damages, losses, liabilities, judgments, awards, settlements, costs and expenses (including attorney's fees and court costs) arising out of or resulting from your use of this Website or the violation by you of any of these Terms of Use.
              </p>
            </motion.div>

            {/* Section 11: Statute of Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Statute of Limitations
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THIS SITE OR YOUR USE OF THIS SITE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, AND WILL THEREAFTER BE PERMANENTLY BARRED.
              </p>
            </motion.div>

            {/* Section 12: Entire Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Entire Agreement
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                These Terms of Use constitute the entire agreement between you and Tradeneeti Academy concerning your use of the Website and the contents of the Website. If any provision is deemed invalid by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. No waiver of any the Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition, and any failure by Tradeneeti Academy to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Questions About Terms?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms of Use, please contact us:
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
              transition={{ delay: 1.8 }}
              className="rounded-xl bg-card border-2 border-primary/30 p-6 md:p-8"
            >
              <p className="text-base text-foreground leading-relaxed">
                <strong>By accessing and using the Website, you acknowledge and agree to these Terms of Use. If you do not agree to any of these Terms of Use, you may not access or use the site.</strong>
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
            <Link to="/refund-policy">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Refund Policy
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


