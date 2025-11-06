import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Mail, Globe, Shield, Lock, Eye, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
          <span className="text-foreground">Privacy Policy</span>
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
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Policy Document</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              This Privacy Policy (the "Policy") outlines how www.tradeneeti.in (the "Platform") collects, uses, maintains, and discloses information from its users. The Platform includes the www.tradeneeti.in website (the "Website"), any content, public forums, and services offered through the Website, and any mobile applications (the "Application").
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4"
            >
              This Policy details our practices regarding user information, your privacy rights, and the choices you have regarding your information. This Policy applies to all users of the Platform, collectively referred to as "Learners," "You," or "Your".
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20"
            >
              <p className="text-sm text-foreground leading-relaxed">
                <strong>By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy and Terms of Use.</strong> If You do not agree with any provisions of this Policy and/or the Terms of Use, You should not access or use the Platform or engage in communications with us and are required to leave the Platform immediately.
              </p>
            </motion.div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Personal Information Definition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Personal Information
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">"Personal Information"</strong> shall mean the information which identifies a Learner i.e., first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at the time of registration or any time thereafter on the Platform.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">"Sensitive Personal Information"</strong> shall include (i) passwords and financial data (except the truncated last four digits of credit/debit card), (ii) health data, (iii) official identifier (such as biometric data, aadhar number, social security number, driver's license, passport, etc.,), (iv) information about sexual life, sexual identifier, race, ethnicity, political or religious belief or affiliation, (v) account details and passwords, or (vi) other data/information categorized as 'sensitive personal data' or 'special categories of data' under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, General Data Protection Regulation (GDPR) and / or the California Consumer Privacy Act (CCPA) ("Data Protection Laws") and in context of this Policy or other equivalent / similar legislations.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Usage of the term <strong className="text-foreground">'Personal Information'</strong> shall include <strong className="text-foreground">'Sensitive Personal Information'</strong> as may be applicable to the context of its usage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We may collect both personal and non-personal identifiable information from You in a variety of ways, including, but not limited to, when You visit our Platform, register on the Platform, and in connection with other activities, services, features or resources we make available on our Platform. However, please note that:
                  </p>
                  <ul className="space-y-2 text-base text-muted-foreground ml-6 list-disc mb-4">
                    <li>We do not ask You for Personal Information unless we truly need it; like when You are registering for any Content on the Platform.</li>
                    <li>We do not share Your Personal Information with anyone except to comply with the applicable laws, develop our products and services, or protect our rights.</li>
                    <li>We do not store Personal Information on our servers unless required for the on-going operation of our Platform.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                    Personal Identifiable Information
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We may collect personal-identifiable information such as Your name and emails address to enable Your access to the Platform and services/products offered therein. We will collect personal-identifiable information from You only if such information is voluntarily submitted by You to us. You can always refuse to provide such personal identification information; however, it may prevent You from accessing services or products provided on the Platform or from engaging in certain activities on the Platform.
                  </p>

                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                    Non-Personal Identifiable Information
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    When You interact with our Platform, we may collect non-personal-identifiable information such as the browser name, language preference, referring site, and the date and time of each user request, operating system and the Internet service providers utilized and other similar information.
                  </p>

                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                    Cookies
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To enhance User experience, our Platform may use 'cookies'. A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns for record-keeping purposes. You may choose to set Your web browser to refuse cookies, or to notify You when cookies are being sent; however, please note that in doing so, some parts of the Platform may not function properly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How We Use and Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How We Use and Share The Information Collected
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We may collect and use Your Personal Information for the following purposes:
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    To provide access to our Platform and/or the services/products offered therein
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We use the Your information as collected by us to allow You to access the Platform and the services/products offered therein, including without limitation to provide customer service, fulfil purchases through the Platform, verify User information and to resolve any glitches with our Platform. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    To improve our Platform and maintain safety
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We use Your information to improve and customize the Platform and services/products offered by us. Further, we also use Your information to prevent, detect, investigate, and take measures against criminal activity, fraud, misuse of or damage to our Platform or network, and other threats and violations to a third party's or our rights and property, or the safety of our Users, or others. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    To communicate with You or market our services/products
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We may use the email address submitted by You to communicate with You about Your orders on our Platform, our offers, new products, services or even receive Your feedback on the Platform or any services/products offered therein. It may also be used to respond to Your inquiries, questions, and/or other requests. If at any time You would like to unsubscribe from receiving future emails, please write to us at the contact information provided below. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
                  </p>
                </div>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mt-6">
                We do not use Personal Information for making any automated decisions affecting or creating profiles other than what is described in this Policy. We do not sell, trade, or otherwise exploit Your personal-identifiable information to others. Limited to the purposes stated hereinabove, we may share generic aggregated demographic information not linked to any personal-identifiable information regarding visitors and Users with our business partners and trusted affiliates.
              </p>
            </motion.div>

            {/* Your Choices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Choices
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Limit the information You provide
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    You always have an option to choose the information You provide to us, including the option to update or delete Your information. However, please note that lack of certain information may not allow You access to the Platform or any of its features, in part or in full. For example: information required for Your registration on the Platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Limit the communications You receive from us
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Further, You will also have the option to choose what kind of communication You would like to receive from us. However, there may be certain communications that are required for legal or security purposes, including changes to various legal agreements, that you may not be able to limit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Reject Cookies and other similar technologies
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    You may reject or remove cookies from Your web browser; You will always have the option to change the default settings on Your web browser if the same is set to 'accept cookies'. However, please note that some of the services/products offered on the Platform may not function or be available to You, when the cookies are rejected, removed or disabled.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                In general, all Learners have the rights specified herein this section. However, depending on where you are situated, you may have certain specific rights in respect of your Personal Information accorded by the laws of the country you are situated in. To understand Your rights, please refer to the Country Specific Additional Rights below.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                If you are a Learner, you may exercise any of these rights by using the options provided to you within the Platform upon your login. If however, you are facing any issues or require any clarifications, you can always write to us at the address noted in the 'Grievances' section below, and we will address your concerns to the extent required by the applicable law.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to Confirmation and Access</h3>
                  <p className="text-sm text-muted-foreground">You have the right to get confirmation and access to your Personal Information that is with us along with other supporting information.</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to Correction</h3>
                  <p className="text-sm text-muted-foreground">You have the right to ask us to rectify your Personal Information that is with us that you think is inaccurate. You also have the right to ask us to update your Personal Information that you think is incomplete or out-of-date.</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to be Forgotten</h3>
                  <p className="text-sm text-muted-foreground">You have the right to restrict or prevent the continuing disclosure of your Personal Information under certain circumstances.</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to Erasure</h3>
                  <p className="text-sm text-muted-foreground">If you wish to withdraw/remove your Personal Information from our Platform, you have the right to request erasure of your Personal Information from our Platform. However, please note that such erasure will remove all your Personal Information from our Platform (except as specifically stated in this Policy) and may result in deletion of your account on the Platform permanently, and the same will not be retrievable.</p>
                </div>
              </div>
            </motion.div>

            {/* Protection of Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Protection of Your Information
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We take all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of Personal Information or such other data on the Platform. Our disclosure of any such information is limited to:
                  </p>
                  <ul className="space-y-2 text-base text-muted-foreground ml-6 list-disc mb-4">
                    <li>our employees, contractors and affiliated organizations (if any) that (i) need to know that information in order to process it on our behalf or to provide services available on our Platform, and (ii) that have agreed not to disclose it to others.</li>
                    <li>a response to a court order, or other governmental request. Without imitation to the foregoing, we reserve the right to disclose such information where we believe in good faith that such disclosure is necessary to comply with applicable laws, regulations, court orders, government and law enforcement agencies' requests; protect and defend a third party's or our rights and property, or the safety of our users, our employees, or others; or prevent, detect, investigate and take measures against criminal activity, fraud and misuse or unauthorized use of our Platform and/or to enforce our Terms of Use or other agreements or policies.</li>
                  </ul>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To the extent permitted by law, we will attempt to give You prior notice before disclosing Your information in response to such a request.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Third Party Websites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Third Party Websites
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                You may find links to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. The content or links that appear on these sites are not controlled by us in any manner and we are not responsible for the practices employed by such websites. Further, these websites/links thereto, including their content, may be constantly changing and the may have their own terms of use and privacy policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that terms and policies published on such websites.
              </p>
            </motion.div>

            {/* Cross-Border Data Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cross-Border Data Transfer
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Your information including any Personal Information is stored, processed, and transferred in and to the Amazon Web Service (AWS) servers and databases located in India. We may also store, process, and transfer information in and to servers in other countries depending on the location of our affiliates and service providers.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Please note that these countries may have differing (and potentially less stringent) privacy laws and that Personal Information can become subject to the laws and disclosure requirements of such countries, including disclosure to governmental bodies, regulatory agencies, and private persons, as a result of applicable governmental or regulatory inquiry, court order or other similar process. If you use our Platform from outside India, including in the USA, EU, EEA, and UK, your information may be transferred to, stored, and processed in India. By accessing our Platform or otherwise giving us information, you consent to the transfer of information to India and other countries outside your country of residence.
              </p>
            </motion.div>

            {/* Duration for Storage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Duration For Which Your Information Is Stored
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We will retain Your information for as long as it is required for us to retain for the purposes stated hereinabove, including for the purpose of complying with legal obligation or business compliances.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Further, please note that we may not be able to delete all communications or photos, files, or other documents publicly made available by you on the Platform (for example: comments, feedback, etc.), however, we shall anonymize your Personal Information in such a way that you can no longer be identified as an individual in association with such information made available by you on the Platform. We will never disclose aggregated or de-identified information in a manner that could identify you as an individual.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Note:</strong> If you wish to exercise any of your rights (as specified in 'Your Rights' section above) to access, modify and delete any or all information stored about you, then you may do so by using the options provided within the Platform. You can always write to us at the email address specified in the 'Grievances' section below.
              </p>
            </motion.div>

            {/* Modification to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Modification To Privacy Policy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We may modify, revise or change our Policy from time to time; when we do, we will revise the 'updated date' at the beginning of this page. We encourage You to check our Platform frequently to see the recent changes. Unless stated otherwise, our current Policy applies to all information that we have about You.
              </p>
            </motion.div>

            {/* Country Specific Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Country Specific Additional Rights
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have additional rights under local data protection laws. This includes specific rights for residents of India, the United Kingdom (UK), European Union (EU) countries, European Economic Area (EEA), and California, USA. For detailed information about your specific rights based on your location, please contact us at the email address provided in the 'Grievances' section below.
              </p>
              <div className="space-y-3 mt-4">
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-1">Terms Applicable If You Are An Indian Resident</h3>
                  <p className="text-sm text-muted-foreground">If you are located in India, you may have rights under the Personal Data Protection Bill (PDPB) when it becomes a legislation, including rights to confirmation and access, correction, data portability, right to be forgotten, and erasure.</p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-1">Terms Applicable If You Are A Resident Of UK, EU Or EEA</h3>
                  <p className="text-sm text-muted-foreground">If you are located in the United Kingdom (UK) or European Union (EU) or European Economic Area (EEA), you have rights under the UK and EU General Data Protection Regulation (GDPR), including rights to access, rectification, erasure, object to processing, restrict processing, data portability, and make complaints to supervisory authorities.</p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-1">Terms Applicable If You Are A California State Resident</h3>
                  <p className="text-sm text-muted-foreground">If you are a California state resident, you have rights under the California Consumer Privacy Act (CCPA), including rights to access, know what information is collected, opt in or out of marketing, receive equal services without discrimination, and request deletion of Personal Information.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact/Grievances */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Grievances
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Policy, wish to exercise your rights, concerns about privacy or grievances, please write to us with a thorough description via email to:
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
            <Link to="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


