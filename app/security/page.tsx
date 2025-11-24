import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "الأمان - infoallc",
  description: "سياسات وإرشادات الأمان لصفحة الروابط الحيوية الخاصة بـ infoallc",
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة إلى الرئيسية
          </Button>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-balance">الأمان</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: 24 نوفمبر 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">التزامنا بالأمان</h2>
            <p className="leading-relaxed mb-6">
              في infoallc، نولي أهمية كبيرة لأمان معلوماتك. توضح هذه الصفحة ممارسات وإرشادات الأمان لدينا لضمان بقاء بياناتك محمية.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
              <Card className="p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">حماية البيانات</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نطبق بروتوكولات التشفير ومعايير الأمان المتعارف عليها في الصناعة لحماية بياناتك.
                </p>
              </Card>

              <Card className="p-6">
                <Lock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">اتصالات آمنة</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  جميع البيانات المرسلة عبر موقعنا مشفرة باستخدام بروتوكولات SSL/TLS.
                </p>
              </Card>

              <Card className="p-6">
                <Eye className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">الخصوصية أولاً</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نقلل قدر الإمكان من جمع البيانات ولا نجمع إلا ما هو ضروري لتشغيل الخدمة.
                </p>
              </Card>

              <Card className="p-6">
                <AlertTriangle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">الاستجابة للحوادث</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  لدينا إجراءات جاهزة للاستجابة السريعة لأي حادث أمني.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. تشفير البيانات</h2>
            <p className="leading-relaxed mb-4">
              يتم تشفير جميع البيانات المرسلة بين جهازك وخوادمنا باستخدام بروتوكولات SSL/TLS المعتمدة في الصناعة،
              مما يضمن عدم اعتراضها أو قراءتها من قبل جهات غير مخولة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. ضوابط الوصول</h2>
            <p className="leading-relaxed mb-4">نطبق ضوابط وصول صارمة لضمان أن الأفراد المصرح لهم فقط يمكنهم الوصول إلى البيانات الحساسة، بما في ذلك:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>المصادقة متعددة العوامل للوصول الإداري</li>
              <li>التحكم بالوصول المبني على الدور {"(RBAC)"}</li>
              <li>مراجعات وتدقيقات وصول منتظمة</li>
              <li>تطبيق مبدأ أقل صلاحية ممكنة</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. أمان البنية التحتية</h2>
            <p className="leading-relaxed mb-4">تستضيف بنيتنا التحتية خوادم آمنة من الدرجة المؤسسية مع الحماية التالية:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>جدران حماية وأنظمة كشف التسلل</li>
              <li>تحديثات وتصحيحات أمان منتظمة</li>
              <li>نسخ احتياطية تلقائية وإجراءات التعافي من الكوارث</li>
              <li>حماية DDoS ومراقبة حركة المرور</li>
              <li>أمان مادي في مواقع مراكز البيانات</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. الخدمات الخارجية</h2>
            <p className="leading-relaxed mb-4">نقوم بتقييم جميع الخدمات الخارجية المستخدمة على موقعنا بعناية، بما في ذلك:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google Analytics — لتحليلات الموقع</li>
              <li>Google AdSense — لخدمات الإعلانات</li>
              <li>Vercel Analytics — لمراقبة الأداء</li>
            </ul>
            <p className="leading-relaxed mb-4">
              يجب على جميع الخدمات الخارجية الحفاظ على معايير الأمان الخاصة بها والامتثال للوائح حماية البيانات المعمول بها.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. أمان ملفات تعريف الارتباط</h2>
            <p className="leading-relaxed mb-4">يتم ضبط ملفات تعريف الارتباط على موقعنا باستخدام إعدادات أمان مناسبة، مثل:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>علم HttpOnly لمنع الوصول عبر السكربتات</li>
              <li>علم Secure لضمان النقل عبر HTTPS فقط</li>
              <li>خاصية SameSite لمنع هجمات CSRF</li>
              <li>تواريخ انتهاء صلاحية منتظمة لتقليل التعرض للمخاطر</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. المراقبة والتسجيل</h2>
            <p className="leading-relaxed mb-4">نحافظ على أنظمة شاملة للتسجيل والمراقبة لاكتشاف التهديدات الأمنية والرد عليها:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>مراقبة أمنية وتنبيهات في الوقت الفعلي</li>
              <li>تحليل ومراجعة السجلات بشكل منتظم</li>
              <li>أنظمة كشف الشذوذ</li>
              <li>ربط أحداث الأمان</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. الاستجابة للحوادث</h2>
            <p className="leading-relaxed mb-4">في حال وقوع حادث أمني، لدينا إجراءات لإ:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>تحديد الحادث واحتوائه بسرعة</li>
              <li>تقييم الأثر ونطاق الاختراق</li>
              <li>إخطار المستخدمين المتأثرين حسب المتطلبات القانونية</li>
              <li>تنفيذ تدابير تصحيحية لمنع تكرار المشكلة</li>
              <li>إجراء مراجعات وتحسينات بعد الحادث</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. مسؤوليات المستخدم</h2>
            <p className="leading-relaxed mb-4">على الرغم من أننا نتخذ تدابير أمان قوية، نشجع المستخدمين أيضًا على:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>تحديث أجهزتهم ومتصفحاتهم باستمرار</li>
              <li>استخدام كلمات مرور قوية وفريدة</li>
              <li>الانتباه لمحاولات التصيّد الاحتيالي</li>
              <li>الإبلاغ عن أي نشاط مشبوه</li>
              <li>مراجعة إعدادات الخصوصية في المتصفح</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. الامتثال</h2>
            <p className="leading-relaxed mb-4">نلتزم باللوائح الخاصة بحماية البيانات بما في ذلك:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>اللائحة العامة لحماية البيانات {"(GDPR)"}</li>
              <li>قانون خصوصية المستهلك في كاليفورنيا {"(CCPA)"}</li>
              <li>قانون حماية خصوصية الأطفال على الإنترنت {"(COPPA)"}</li>
              <li>سياسات ومتطلبات إعلانات Google</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. تحديثات الأمان</h2>
            <p className="leading-relaxed mb-4">
              نقوم بمراجعة وتحديث ممارسات الأمان باستمرار لمواكبة التهديدات الجديدة والحفاظ على أعلى معايير الحماية.
              سيتم تحديث هذه الصفحة لتعكس أي تغييرات مهمة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. الإبلاغ عن مشكلات الأمان</h2>
            <p className="leading-relaxed mb-4">
              إذا اكتشفت ثغرة أمنية أو كانت لديك مخاوف بشأن ممارسات الأمان لدينا، يرجى التواصل معنا فورًا عبر:
            </p>
            <p className="leading-relaxed mb-4">
              البريد الإلكتروني:{" "}
              <a href="mailto:security@infoallc.com" className="text-primary hover:underline">
                security@infoallc.com
              </a>
            </p>
            <p className="leading-relaxed mb-4">
              نحن نتعامل بجدية مع جميع تقارير الأمان وسنقوم بالرد بسرعة للتحقيق في أي مشكلات ومعالجتها.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
