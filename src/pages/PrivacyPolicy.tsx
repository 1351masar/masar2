import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 max-w-4xl text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">سياسة الخصوصية لمنصة مسار العقار</h1>

      {/* Disclaimer Section */}
      <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 p-5 rounded-md mb-8 shadow-md" role="alert">
        <p className="font-bold text-lg mb-2">مقدمة وتنويه</p>
        <p className="text-sm leading-relaxed">
          نحن في منصة "مسار العقار" نأخذ خصوصيتك على محمل الجد. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لمنصتنا وخدماتنا ("الخدمة"). باستخدامك للخدمة، فإنك توافق على الممارسات الموضحة في هذه السياسة. يرجى ملاحظة أن هذه المنصة هي أداة مساعدة وتقدم معلومات عامة فقط ولا تعتبر استشارة متخصصة.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">1. المعلومات التي نجمعها</h2>
        <p className="mb-4 leading-relaxed">
          قد نجمع أنواعًا مختلفة من المعلومات لتوفير وتحسين خدمتنا لك:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 mr-4">
          <li>
            <strong>المعلومات التي تقدمها مباشرة:</strong>
            <ul className="list-circle list-inside mr-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>عند التسجيل (إذا كان متاحاً): الاسم، البريد الإلكتروني، معلومات الاتصال الأخرى.</li>
              <li>محتوى الاستفسارات والرسائل: النصوص التي تدخلها عند التفاعل مع البوت أو عند التواصل معنا.</li>
              <li>أي معلومات أخرى تشاركها طواعية.</li>
            </ul>
          </li>
          <li>
            <strong>المعلومات التي نجمعها تلقائياً (بيانات الاستخدام):</strong>
            <ul className="list-circle list-inside mr-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>معلومات الجهاز والمتصفح: نوع الجهاز، نظام التشغيل، عنوان IP، نوع المتصفح، معرفات الجهاز الفريدة.</li>
              <li>بيانات السجل: الصفحات التي تزورها، الوقت والتاريخ، مدة الجلسة، الأخطاء التي قد تحدث.</li>
              <li>ملفات تعريف الارتباط (Cookies) وتقنيات التتبع المماثلة: لتحسين تجربتك وفهم كيفية استخدام المنصة (يمكنك التحكم بها من خلال إعدادات المتصفح).</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">2. كيف نستخدم معلوماتك</h2>
        <p className="mb-4 leading-relaxed">
          نستخدم المعلومات التي نجمعها للأغراض التالية الأساسية:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 mr-4">
          <li><strong>لتقديم وتشغيل وصيانة خدمتنا:</strong> بما في ذلك الاستجابة لاستفساراتك عبر البوت، وتوفير الوظائف الأساسية للمنصة.</li>
          <li><strong>لتحسين وتخصيص الخدمة:</strong> تحليل بيانات الاستخدام لفهم كيفية تفاعل المستخدمين مع المنصة وتحديد مجالات التحسين، وتخصيص المحتوى.</li>
          <li><strong>للتواصل معك:</strong> إرسال إشعارات هامة تتعلق بالخدمة أو تغييرات في السياسات (إذا قدمت معلومات اتصال).</li>
          <li><strong>للأمان ومنع الاحتيال:</strong> مراقبة الاستخدام للكشف عن الأنشطة المشبوهة وحماية المنصة ومستخدميها.</li>
          <li><strong>للامتثال القانوني:</strong> الوفاء بالالتزامات القانونية والتنظيمية المعمول بها في المملكة العربية السعودية.</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400">
           لن نستخدم معلوماتك الشخصية لأغراض التسويق المباشر دون الحصول على موافقتك المسبقة حيثما يتطلب القانون ذلك.
         </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">3. مشاركة وكشف المعلومات</h2>
        <p className="mb-4 leading-relaxed">
          نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات المحدودة التالية:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 mr-4">
          <li><strong>مع مزودي الخدمة:</strong> قد نستعين بشركات خارجية لمساعدتنا في تشغيل المنصة (مثل مزودي الاستضافة، تحليل البيانات، خدمات الذكاء الاصطناعي). نطلب من هؤلاء المزودين الالتزام بحماية بياناتك واستخدامها فقط للأغراض المحددة.</li>
          <li><strong>للامتثال القانوني وحماية الحقوق:</strong> قد نكشف عن معلوماتك إذا طُلب منا ذلك بموجب أمر قضائي أو إجراء قانوني سارٍ في المملكة العربية السعودية، أو لحماية حقوقنا أو ممتلكاتنا أو سلامة المستخدمين أو الجمهور.</li>
          <li><strong>في حالة تغيير الملكية:</strong> في حالة الاندماج أو الاستحواذ أو بيع الأصول، قد يتم نقل معلوماتك كجزء من الصفقة، مع الالتزام بسياسات الخصوصية السارية أو إخطارك بأي تغييرات.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">4. أمن البيانات</h2>
        <p className="mb-4 leading-relaxed">
          نتخذ تدابير أمنية فنية وتنظيمية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف أو التعديل أو الإتلاف. تشمل هذه التدابير استخدام التشفير، وضوابط الوصول، والممارسات الأمنية الأخرى. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">5. الاحتفاظ بالبيانات</h2>
        <p className="mb-4 leading-relaxed">
          سنحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتحقيق الأغراض الموضحة في هذه السياسة، ما لم يتطلب القانون فترة احتفاظ أطول أو يسمح بها. سيتم حذف بيانات الاستخدام مجهولة المصدر أو تجميعها بشكل لا يحدد هويتك بعد فترة معقولة.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">6. حقوقك فيما يتعلق ببياناتك</h2>
        <p className="mb-4 leading-relaxed">
          وفقًا للأنظمة المعمول بها في المملكة العربية السعودية، قد تتمتع بحقوق معينة فيما يتعلق ببياناتك الشخصية، والتي قد تشمل:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 mr-4">
          <li><strong>الحق في الوصور:</strong> طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك.</li>
          <li><strong>الحق في التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة أو غير كاملة.</li>
          <li><strong>الحق في الحذف:</strong> طلب حذف معلوماتك الشخصية في ظروف معينة (مع مراعاة الالتزامات القانونية للاحتفاظ).</li>
          <li><strong>الحق في تقييد المعالجة:</strong> طلب تقييد كيفية استخدامنا لمعلوماتك في ظروف معينة.</li>
          <li><strong>الحق في الاعتراض:</strong> الاعتراض على معالجتنا لمعلوماتك الشخصية في ظروف معينة.</li>
        </ul>
         <p className="mb-4 leading-relaxed">
           لممارسة أي من هذه الحقوق، يرجى التواصل معنا باستخدام المعلومات الواردة في قسم "الاتصال بنا". قد نحتاج إلى التحقق من هويتك قبل الاستجابة لطلبك.
         </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">7. خصوصية الأطفال</h2>
        <p className="mb-4 leading-relaxed">
          خدمتنا ليست موجهة للأشخاص الذين تقل أعمارهم عن 18 عامًا ("الأطفال"). نحن لا نجمع معلومات تعريف شخصية عن قصد من الأطفال. إذا كنت والدًا أو وصيًا وعلمت أن طفلك قد زودنا بمعلومات شخصية، فيرجى الاتصال بنا. إذا علمنا أننا جمعنا معلومات شخصية من أطفال دون التحقق من موافقة الوالدين، فإننا نتخذ خطوات لإزالة تلك المعلومات من خوادمنا.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">8. التغييرات على سياسة الخصوصية</h2>
        <p className="mb-4 leading-relaxed">
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. سنقوم بنشر السياسة المحدثة على هذه الصفحة. ننصحك بمراجعة هذه السياسة بشكل دوري للاطلاع على أي تغييرات. يعتبر استمرار استخدامك للخدمة بعد نشر التغييرات موافقة منك على السياسة المحدثة.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">9. الاتصال بنا</h2>
        <p className="mb-4 leading-relaxed">
          إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى التواصل معنا عبر: [أدخل عنوان بريد إلكتروني أو نموذج اتصال خاص بالمنصة].
        </p>
      </section>

       <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
         <strong>ملاحظة قانونية:</strong> هذه السياسة هي نموذج عام وقد تحتاج إلى مراجعة وتعديل لتتوافق تماماً مع المتطلبات القانونية المحددة في المملكة العربية السعودية وطبيعة الخدمات التي تقدمها منصتك. يوصى بشدة بالتشاور مع مستشار قانوني متخصص.
       </p>

    </div>
  );
};

export default PrivacyPolicy; 