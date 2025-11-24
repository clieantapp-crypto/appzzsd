import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Security - ararbuc",
  description: "Security policies and guidelines for ararbuc bio links page",
}

export default function SecurityPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-balance">Security</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Security</h2>
            <p className="leading-relaxed mb-6">
              At ararbuc, we take the security of your information seriously. This page outlines our security practices
              and guidelines to ensure your data remains protected.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
              <Card className="p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We implement industry-standard encryption and security protocols to protect your data.
                </p>
              </Card>

              <Card className="p-6">
                <Lock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Connections</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All data transmitted through our website is encrypted using SSL/TLS protocols.
                </p>
              </Card>

              <Card className="p-6">
                <Eye className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We minimize data collection and only gather what{"'"}s necessary for service operation.
                </p>
              </Card>

              <Card className="p-6">
                <AlertTriangle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Incident Response</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We have procedures in place to quickly respond to any security incidents.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Data Encryption</h2>
            <p className="leading-relaxed mb-4">
              All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS
              protocols. This ensures that your information cannot be intercepted or read by unauthorized third parties
              during transmission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Access Controls</h2>
            <p className="leading-relaxed mb-4">
              We implement strict access controls to ensure that only authorized personnel have access to sensitive
              data. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Multi-factor authentication for administrative access</li>
              <li>Role-based access control {"(RBAC)"}</li>
              <li>Regular access audits and reviews</li>
              <li>Principle of least privilege enforcement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Infrastructure Security</h2>
            <p className="leading-relaxed mb-4">
              Our infrastructure is hosted on secure, enterprise-grade servers with the following protections:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Firewall protection and intrusion detection systems</li>
              <li>Regular security patches and updates</li>
              <li>Automated backups and disaster recovery procedures</li>
              <li>DDoS protection and traffic monitoring</li>
              <li>Physical security at data center locations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-4">
              We carefully vet all third-party services used on our website, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google Analytics - for website analytics</li>
              <li>Google AdSense - for advertising services</li>
              <li>Vercel Analytics - for performance monitoring</li>
            </ul>
            <p className="leading-relaxed mb-4">
              All third-party services are required to maintain their own security standards and comply with applicable
              data protection regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie Security</h2>
            <p className="leading-relaxed mb-4">
              Cookies used on our website are configured with appropriate security settings:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>HttpOnly flags to prevent client-side script access</li>
              <li>Secure flags to ensure transmission over HTTPS only</li>
              <li>SameSite attributes to prevent CSRF attacks</li>
              <li>Regular expiration to minimize exposure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Monitoring and Logging</h2>
            <p className="leading-relaxed mb-4">
              We maintain comprehensive logging and monitoring systems to detect and respond to security threats:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Real-time security monitoring and alerting</li>
              <li>Regular log analysis and review</li>
              <li>Anomaly detection systems</li>
              <li>Security event correlation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Incident Response</h2>
            <p className="leading-relaxed mb-4">
              In the event of a security incident, we have established procedures to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Quickly identify and contain the incident</li>
              <li>Assess the impact and scope of the breach</li>
              <li>Notify affected users in accordance with legal requirements</li>
              <li>Implement corrective measures to prevent recurrence</li>
              <li>Conduct post-incident reviews and improvements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. User Responsibilities</h2>
            <p className="leading-relaxed mb-4">
              While we implement robust security measures, we also encourage users to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Keep their devices and browsers up to date</li>
              <li>Use strong, unique passwords</li>
              <li>Be cautious of phishing attempts</li>
              <li>Report any suspicious activity</li>
              <li>Review privacy settings in their browsers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Compliance</h2>
            <p className="leading-relaxed mb-4">
              We maintain compliance with relevant data protection regulations including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>General Data Protection Regulation {"(GDPR)"}</li>
              <li>California Consumer Privacy Act {"(CCPA)"}</li>
              <li>{"Children's Online Privacy Protection Act (COPPA)"}</li>
              <li>Google Ads Policies and Requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Security Updates</h2>
            <p className="leading-relaxed mb-4">
              We continuously review and update our security practices to address emerging threats and maintain the
              highest standards of protection. This page will be updated to reflect any significant changes to our
              security measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Reporting Security Issues</h2>
            <p className="leading-relaxed mb-4">
              If you discover a security vulnerability or have concerns about our security practices, please contact us
              immediately at:
            </p>
            <p className="leading-relaxed mb-4">
              Email:{" "}
              <a href="mailto:security@ararbuc.com" className="text-primary hover:underline">
                security@ararbuc.com
              </a>
            </p>
            <p className="leading-relaxed mb-4">
              We take all security reports seriously and will respond promptly to investigate and address any issues.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
