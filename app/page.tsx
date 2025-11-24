import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CreditCard, Receipt, Gift, Smartphone } from "lucide-react"

export default function HomePage() {
  const links = [
    {
      title: "الدفع السريع",
      url: "/quick-pay",
      icon: CreditCard,
      description: "ادفع بسرعة وبخطوات بسيطة",
    },
    {
      title: "دفع الفواتير",
      url: "/bills",
      icon: Receipt,
      description: "سدد جميع فواتيرك بسهولة",
    },
    {
      title: "العروض",
      url: "/offers",
      icon: Gift,
      description: "اكتشف أحدث العروض المتاحة",
    },
    {
      title: "باقات الرصيد",
      url: "/plans",
      icon: Smartphone,
      description: "اشترِ باقات الرصيد والإنترنت",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-foreground">5G</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-3 text-balance">الخدمات وآخر العروض</h1>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{link.description}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <footer className="text-center space-y-4">
          <div className="flex justify-center gap-6 flex-wrap text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors underline">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors underline">
              الشروط والأحكام
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors underline">
              الأمان
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ararbuc. جميع الحقوق محفوظة.
          </p>
        </footer>

      </div>
    </div>
  )
}
