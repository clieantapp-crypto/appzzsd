import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "شروط الخدمة - infoallc",
  description: "شروط الخدمة لصفحة الروابط الحيوية الخاصة بـ infoallc",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-balance">شروط الخدمة</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: 24 نوفمبر 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. الموافقة على الشروط</h2>
            <p className="leading-relaxed mb-4">
              من خلال الوصول إلى صفحة الروابط الحيوية الخاصة بـ infoallc {"("}"الخدمة"{")"}, فإنك توافق على الالتزام
              بهذه الشروط. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يحق لك استخدام الخدمة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. ترخيص الاستخدام</h2>
            <p className="leading-relaxed mb-4">
              يُسمح لك بالوصول المؤقت إلى المواد الموجودة على هذا الموقع للاستخدام الشخصي وغير التجاري وللمشاهدة
              المؤقتة فقط. يُعد هذا ترخيصًا وليس نقلًا للملكية، وبموجب هذا الترخيص لا يجوز لك:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>تعديل أو نسخ المواد</li>
              <li>استخدام المواد لأي غرض تجاري أو عرض عام</li>
              <li>محاولة الهندسة العكسية لأي برنامج موجود على الموقع</li>
              <li>إزالة أي ملاحظات حقوق نشر أو ملكية من المواد</li>
              <li>نقل المواد إلى شخص آخر أو نسخها على خادم آخر</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. إخلاء المسؤولية</h2>
            <p className="leading-relaxed mb-4">
              يتم تقديم المواد على هذا الموقع على أساس {"'كما هي'"} دون أي ضمانات صريحة أو ضمنية. نحن نخلي مسؤوليتنا
              عن جميع الضمانات الأخرى بما في ذلك، دون حصر، الضمانات الضمنية الخاصة بالجودة والصلاحية لغرض معين أو عدم
              الانتهاك.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. الروابط</h2>
            <p className="leading-relaxed mb-4">
              لم نراجع جميع المواقع المرتبطة بهذا الموقع، ولسنا مسؤولين عن محتويات أي موقع يرتبط بنا. إدراج أي رابط لا
              يعني تأييدنا له. استخدامك لأي موقع مرتبط يكون على مسؤوليتك الخاصة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. حدود المسؤولية</h2>
            <p className="leading-relaxed mb-4">
              لن تتحمل infoallc أو مورديها بأي حال من الأحوال المسؤولية عن أي أضرار، بما في ذلك على سبيل المثال لا الحصر،
              فقدان البيانات أو الأرباح أو توقف الأعمال، الناتجة عن استخدام أو عدم القدرة على استخدام المواد على هذا
              الموقع.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. دقة المواد</h2>
            <p className="leading-relaxed mb-4">
              قد تحتوي المواد الموجودة على هذا الموقع على أخطاء تقنية أو طباعية أو تصويرية. لا نضمن أن المواد دقيقة أو
              كاملة أو حديثة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. التعديلات</h2>
            <p className="leading-relaxed mb-4">
              قد نقوم بمراجعة شروط الخدمة هذه في أي وقت دون إشعار. باستخدامك لهذا الموقع، فإنك توافق على الالتزام
              بالإصدار الحالي من هذه الشروط.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. القانون الحاكم</h2>
            <p className="leading-relaxed mb-4">
              تخضع هذه الشروط وتُفسر وفقًا للقوانين المطبقة، وتوافق على الخضوع للاختصاص القضائي الحصري للمحاكم في تلك
              المنطقة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. معلومات التواصل</h2>
            <p className="leading-relaxed mb-4">
              إذا كانت لديك أي أسئلة بخصوص شروط الخدمة هذه، يمكنك التواصل معنا عبر:
            </p>
            <p className="leading-relaxed mb-4">
              البريد الإلكتروني:{" "}
              <a href="mailto:legal@infoallc.com" className="text-primary hover:underline">
                legal@infoallc.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
