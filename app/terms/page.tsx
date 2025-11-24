import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - ararbuc",
  description: "Terms of service for ararbuc bio links page",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-balance">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed mb-4">
              By accessing or using ararbuc{"'"}s bio links page {"("}"the Service"{")"}, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on this website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software on this website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on another server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed mb-4">
              The materials on this website are provided on an {"'as is'"} basis. We make no warranties, expressed or
              implied, and hereby disclaim all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Links</h2>
            <p className="leading-relaxed mb-4">
              We have not reviewed all of the sites linked from this website and are not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by us. Use of any linked
              website is at the user{"'"}s own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitations of Liability</h2>
            <p className="leading-relaxed mb-4">
              In no event shall ararbuc or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Accuracy of Materials</h2>
            <p className="leading-relaxed mb-4">
              The materials appearing on this website could include technical, typographical, or photographic errors. We
              do not warrant that any of the materials are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p className="leading-relaxed mb-4">
              We may revise these Terms of Service at any time without notice. By using this website, you agree to be
              bound by the current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with applicable laws, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="leading-relaxed mb-4">
              Email:{" "}
              <a href="mailto:legal@ararbuc.com" className="text-primary hover:underline">
                legal@ararbuc.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
