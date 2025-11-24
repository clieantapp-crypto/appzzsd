import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "سياسة الخصوصية - infoallc",
  description: "سياسة الخصوصية لصفحة الروابط الحيوية الخاصة بـ infoallc",
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-balance">سياسة الخصوصية</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: 24 نوفمبر 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. المقدمة</h2>
            <p className="leading-relaxed mb-4">
              مرحبًا بك في infoallc {"("}يُشار إليه بـ "نحن" أو "لنا"{")"}. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند زيارتك لصفحة الروابط الحيوية الخاصة بنا.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. المعلومات التي نجمعها</h2>

            <h3 className="text-xl font-semibold mb-3">2.1 المعلومات التي يتم جمعها تلقائيًا</h3>
            <p className="leading-relaxed mb-4">
              عند زيارتك لموقعنا، نقوم تلقائيًا بجمع بعض المعلومات حول جهازك، بما في ذلك:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>عنوان IP</li>
              <li>نوع المتصفح وإصداره</li>
              <li>نظام التشغيل</li>
              <li>الروابط المحيلة</li>
              <li>الصفحات التي تمت زيارتها والوقت المستغرق فيها</li>
              <li>معرفات الجهاز</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 ملفات تعريف الارتباط وتقنيات التتبع</h3>
            <p className="leading-relaxed mb-4">
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا وتخزين بعض المعلومات. ملفات تعريف الارتباط هي ملفات تحتوي على قدر صغير من البيانات قد تتضمن معرفًا فريدًا مجهولاً.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. كيفية استخدامنا لمعلوماتك</h2>
            <p className="leading-relaxed mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>تقديم خدماتنا وصيانتها</li>
              <li>تحليل الاستخدام وتحسين موقعنا</li>
              <li>اكتشاف المشكلات التقنية ومنعها ومعالجتها</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>أغراض إعلانية وفق امتثالنا لإعلانات Google</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. إعلانات Google والإعلانات الخارجية</h2>
            <p className="leading-relaxed mb-4">
              نستخدم Google AdSense وبعض خدمات الإعلانات الأخرى على موقعنا. تستخدم هذه الخدمات ملفات تعريف الارتباط وإشارات الويب لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى.
            </p>
            <p className="leading-relaxed mb-4">
              {
                "استخدام Google لملفات تعريف الارتباط الإعلانية يمكّنها هي وشركاءها من عرض الإعلانات بناءً على زيارتك لموقعنا و/أو مواقع أخرى. يمكنك إلغاء تفعيل الإعلانات المخصصة من خلال زيارة"
              }{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                إعدادات الإعلانات
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. مشاركة البيانات والإفصاح عنها</h2>
            <p className="leading-relaxed mb-4">لا نقوم ببيع معلوماتك الشخصية. قد نشارك معلوماتك مع:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>مقدمي الخدمات الذين يساعدوننا في تشغيل الموقع</li>
              <li>شركاء التحليلات مثل Google Analytics</li>
              <li>شركاء الإعلانات كما هو مذكور أعلاه</li>
              <li>الجهات القانونية عند طلب ذلك</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. حقوقك</h2>
            <p className="leading-relaxed mb-4">اعتمادًا على موقعك، قد يكون لك الحقوق التالية:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>الوصول إلى بياناتك الشخصية</li>
              <li>تصحيح البيانات غير الدقيقة</li>
              <li>حذف بياناتك</li>
              <li>الاعتراض على المعالجة</li>
              <li>نقل البيانات</li>
              <li>سحب الموافقة</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. خصوصية الأطفال</h2>
            <p className="leading-relaxed mb-4">
              خدماتنا غير موجهة للأطفال تحت سن 13 عامًا. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا كنت ولي أمر وتعتقد أن طفلك قد زودنا ببيانات شخصية، يرجى التواصل معنا.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. نقل البيانات دوليًا</h2>
            <p className="leading-relaxed mb-4">
              قد يتم نقل معلوماتك وتخزينها على خوادم خارج دولتك أو منطقتك حيث قد تختلف قوانين حماية البيانات.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. أمن البيانات</h2>
            <p className="leading-relaxed mb-4">
              نتخذ إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. التغييرات على سياسة الخصوصية</h2>
            <p className="leading-relaxed mb-4">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على هذه الصفحة وتحديث تاريخ "آخر تحديث".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. تواصل معنا</h2>
            <p className="leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:
            </p>
            <p className="leading-relaxed mb-4">
              البريد الإلكتروني:{" "}
              <a href="mailto:privacy@infoallc.com" className="text-primary hover:underline">
                privacy@infoallc.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
