import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - ararbuc",
  description: "Privacy policy for ararbuc bio links page",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
              Welcome to ararbuc {"("}"we," "our," or "us"{")"}. We respect your privacy and are committed to protecting
              your personal data. This privacy policy explains how we collect, use, and safeguard your information when
              you visit our bio links page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Automatically Collected Information</h3>
            <p className="leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Cookies and Tracking Technologies</h3>
            <p className="leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain
              information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To analyze usage and improve our website</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
              <li>For advertising purposes as outlined in our Google Ads compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Google Ads and Third-Party Advertising</h2>
            <p className="leading-relaxed mb-4">
              We use Google AdSense and other advertising services on our website. These services use cookies and web
              beacons to serve ads based on your prior visits to our website or other websites.
            </p>
            <p className="leading-relaxed mb-4">
              {
                "Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting"
              }{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {"Ads Settings"}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who assist us in operating our website</li>
              <li>Analytics partners like Google Analytics</li>
              <li>Advertising partners as described above</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children{"'"}s Privacy</h2>
            <p className="leading-relaxed mb-4">
              Our service is not directed to children under 13. We do not knowingly collect personally identifiable
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal data, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="leading-relaxed mb-4">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where data protection laws may differ.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data. However, no
              method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="leading-relaxed mb-4">
              Email:{" "}
              <a href="mailto:privacy@ararbuc.com" className="text-primary hover:underline">
                privacy@ararbuc.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
