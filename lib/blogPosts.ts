export type BlogPost = {
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  imageUrl: string
}

// تحديث جميع مسارات الصور لتستخدم صورة افتراضية مؤقتة
const defaultImage = '/images/blog/placeholder.webp'

export const blogPosts: Record<string, BlogPost> = {
  'tips-for-moving-furniture': {
    title: 'نصائح هامة لنقل العفش بأمان',
    excerpt: 'دليل شامل لنقل الأثاث بطريقة آمنة وسليمة',
    date: '2024-03-20',
    author: 'فريق نقل عفش',
    category: 'نصائح ونقل',
    imageUrl: defaultImage,
    content: `
      <h2>مقدمة</h2>
      <p>
        يعد نقل العفش من المهام التي تتطلب تخطيطاً دقيقاً وعناية فائقة. 
        يتضمن هذا الاختيار المناسب لشركة النقل، وتحديد المواد اللازمة للتغليف، 
        بالإضافة إلى وضع جدول زمني واضح للانتقال. تخطيط عملية النقل يساعدك على 
        تقليل المتاعب والتكاليف، وضمان وصول أثاثك بسلام ودون أضرار.
      </p>
      
      <h2>تقييم حجم العفش وتخطيط المسار</h2>
      <p>
        قبل البدء في نقل أثاثك، قم بقياس كل قطعة أثاث وتدوين ملاحظات حول 
        وزنها وأبعادها، خاصة للأشياء الكبيرة أو الضخمة. هذا يساعدك في تحديد 
        نوع المركبة المطلوبة وعدد العمال اللازمين. كما يُنصح بالتعرف على 
        المسار بين منزلك الحالي والجديد، ومعرفة أي صعوبات مثل الطرق الضيقة 
        أو الازدحام المروري.
      </p>
      
      <h2>الأسئلة الأكثر شيوعاً</h2>
      <ul>
        <li><strong>هل هناك وقت محدد أفضل لنقل العفش؟</strong> 
          يفضل الانتقال في أيام منتصف الأسبوع والابتعاد عن فترات الذروة 
          لتجنب الازدحام وزيادة التكاليف.
        </li>
        <li><strong>كيف أحافظ على سلامة الأثاث القيم؟</strong>
          بتغليفه جيداً بمواد عالية الجودة والتأكد من تثبيته بإحكام 
          أثناء عملية النقل.
        </li>
      </ul>
      
      <h2>نصائح إضافية</h2>
      <p>
        احرص على التواصل المستمر مع شركة النقل لتجنب أي تأخير مفاجئ، 
        وتأمين الأثاث إن أمكن، لضمان تغطية أي أضرار محتملة قد تحدث في الطريق.
      </p>
    `
  },
  'packing-guide': {
    title: 'دليل تغليف الأثاث المنزلي',
    excerpt: 'تعرف على أفضل طرق تغليف الأثاث لحمايته أثناء النقل',
    date: '2024-03-18',
    author: 'خبير التغليف',
    category: 'تغليف',
    imageUrl: defaultImage,
    content: `
      <h2>أهمية التغليف الصحيح</h2>
      <p>
        يعتبر التغليف السليم للأثاث من أهم عوامل نجاح عملية النقل، 
        إذ يضمن حماية القطع من الصدمات والخدوش خلال الرحلة. 
        يوفر التغليف الجيد أيضاً طبقات عازلة تمنع الرطوبة أو الحرارة الزائدة 
        من التأثير على جودة الأثاث.
      </p>
      
      <h2>الأدوات والمواد اللازمة</h2>
      <p>
        يُنصح دوماً بتجهيز مجموعة من المواد الأساسية مثل الورق المقوى، 
        النايلون الفقاعي، والأشرطة اللاصقة القوية بمختلف الأحجام. 
        قد تحتاج أيضاً إلى أغلفة من البولي إثيلين لحماية الأسطح الحساسة 
        من الرطوبة والجراثيم.
      </p>
      
      <h2>خطوات زمنية للتغليف</h2>
      <ol>
        <li>قبل أسبوعين من النقل: جهز الصناديق والأدوات وحدد الأولويات للتغليف.</li>
        <li>قبل أسبوع: ابدأ بتغليف الأشياء الأقل استخداماً.</li>
        <li>قبل يومين: غلف القطع الكبيرة وتأكد من تثبيتها بإحكام.</li>
      </ol>
      
      <h2>نصائح ختامية</h2>
      <p>
        يجب وضع علامات على الصناديق لتمييز محتوياتها وتحديد ما إذا كانت 
        قابلة للكسر. لا تنس كتابة التعليمات الخاصة مثل "أعلى" و"هش" 
        على الصناديق لضمان تعامل فريق النقل معها بحذر.
      </p>
    `
  },
  'choosing-moving-company': {
    title: 'كيف تختار شركة نقل عفش موثوقة',
    excerpt: 'معايير اختيار شركة النقل المناسبة',
    date: '2024-03-15',
    author: 'خبير نقل العفش',
    category: 'شركات النقل',
    imageUrl: defaultImage,
    content: `
      <h2>أهمية اختيار شركة موثوقة</h2>
      <p>
        اختيار شركة نقل موثوقة يضمن سهولة العملية من بدايتها إلى نهايتها، 
        كما يخفف من الضغط النفسي والبدني المصاحب لمراحل النقل. 
        يتعين عليك التأكد من تراخيص الشركة وخبرتها في المجال قبل الاتفاق معها.
      </p>
      
      <h2>الجودة مقابل التكلفة</h2>
      <p>
        تقدير التكاليف بدقة يساعدك في الموازنة بين جودة الخدمة والميزانية 
        التي رصدتها. قد تكون الأسعار المنخفضة مغرية، لكنها غالباً ما تأتي 
        على حساب جودة الخدمة المقدمة.
      </p>
      
      <h2>مراجعات العملاء السابقين</h2>
      <p>
        اطلع على تجارب العملاء السابقين من خلال مواقع المراجعات 
        أو شبكات التواصل الاجتماعي. تساعدك هذه المراجعات في تكوين 
        صورة واضحة عن التزام الشركة بالمواعيد وحسن التعامل مع الأثاث.
      </p>
      
      <h2>خدمة العملاء والمرونة</h2>
      <p>
        تأكد من مدى استعداد الشركة لتعديل خططها وفقاً لاحتياجاتك الخاصة، 
        وكيفية تعامل فريقها مع المشاكل الطارئة أثناء النقل. 
        إن توافر خدمة عملاء جيدة يعني أنك ستحصل على دعم فوري عند الحاجة.
      </p>
    `
  },
  'moving-cost-calculator': {
    title: 'حساب تكلفة نقل العفش',
    excerpt: 'دليلك لفهم أسعار نقل العفش وكيفية حسابها',
    date: '2024-03-12',
    author: 'خبير التكاليف',
    category: 'التكاليف',
    imageUrl: defaultImage,
    content: `
      <h2>العوامل المؤثرة في تكلفة نقل العفش</h2>
      <p>تعتمد تكلفة نقل العفش على عوامل عدة منها حجم الأثاث، المسافة، والطابق الذي يقع عليه المكان. كما تؤثر الخدمات الإضافية مثل التغليف والتخزين في تسعير النقل.</p>
      
      <h2>كيفية حساب التكاليف بدقة</h2>
      <p>استناداً إلى تقديرات دقيقة للأبعاد والمسافات، يمكن استخدام حاسبات التكاليف لتحليل الإنفاق المتوقع وتحديد الميزانية المناسبة.</p>
      
      <h2>نصائح لخفض التكاليف</h2>
      <p>ابحث عن عروض من عدة شركات، وتجنب الخدمات الإضافية غير الضرورية لضبط الميزانية دون التأثير على جودة الخدمة.</p>
    `
  },
  'storage-solutions': {
    title: 'حلول تخزين الأثاث',
    excerpt: 'دليل شامل لتخزين الأثاث بشكل آمن وسليم',
    date: '2024-03-10',
    author: 'خبير التخزين',
    category: 'التخزين',
    imageUrl: defaultImage,
    content: `
      <h2>أهمية التخزين السليم للأثاث</h2>
      <p>يُعتبر التخزين الصحيح وسيلة فعالة للحفاظ على جودة الأثاث لفترات طويلة، خاصةً عند عملية النقل أو الانتقال لمكان جديد.</p>
      
      <h2>خطوات تنظيم التخزين</h2>
      <p>يشمل ذلك تقييم الظروف البيئية للمستودع، استخدام تقنيات الحماية الحديثة، وضمان الالتزام بمتطلبات الصيانة الدورية.</p>
      
      <h2>دليل التخزين طويل المدى</h2>
      <p>ينصح بالاستعانة بخبراء التخزين لتطبيق معايير وطرق مبتكرة تضمن الحفاظ على الأثاث بشكل أفضل وتوفير الحماية القصوى له من العوامل البيئية.</p>
    `
  },
  'moving-checklist': {
    title: 'قائمة التحقق قبل النقل',
    excerpt: 'قائمة شاملة للتحضير للانتقال',
    date: '2024-03-08',
    author: 'خبير التنظيم',
    category: 'التخطيط',
    imageUrl: defaultImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <div class="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg mb-8 animate-fade-in">
          <h2 class="text-2xl font-bold text-primary-800 mb-4">مقدمة</h2>
          <p class="text-gray-700 leading-relaxed">
            يعد الانتقال إلى منزل جديد من أكثر التجارب التي تتطلب عناية فائقة وتنسيقاً دقيقاً بين العديد من الخطوات.
            يحتاج الفرد في هذه المرحلة إلى التأكد من حصر جميع ممتلكاته، وتنسيق مواعيد النقل، والتواصل مع الجهات المختلفة من
            مزودي الخدمات والهيئات المعنية. إن وضع <strong>قائمة تحقق واضحة</strong> يُسهم بشكل كبير في جعل عملية الانتقال
            أكثر سهولة ويسراً، ويحد من الأخطاء التي قد تقع بسبب الاستعجال أو النسيان.
            <br/><br/>
            في هذا الدليل، جمعنا لك خلاصة خبرتنا في مجال نقل العفش والتنظيم المنزلي؛ لتقديم حزمة من الإرشادات والنصائح العملية
            التي تضمن لك تجربة نقل مريحة وأقل تكلفة. للمزيد من المعلومات حول خدماتنا المتكاملة، يمكنك زيارة
            <a href="/services" class="text-primary-600 hover:text-primary-700 transition-colors">صفحة خدماتنا</a>.
          </p>
        </div>

        <div class="timeline-container my-8">
          <div class="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-4">
              <span class="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
              <h2 class="text-xl font-bold text-gray-800">قبل شهر من النقل</h2>
            </div>
            <ul class="space-y-4 list-none">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">تحديد موعد النقل:</strong>
                  <p class="text-gray-600">
                    اختر التاريخ المناسب مع مراعاة الظروف المناخية وحركة المرور.
                    <br/>
                    <span class="text-sm text-yellow-700 bg-yellow-50 px-2 py-1 inline-block mt-2 rounded">
                      ملاحظة هامة: احرص على حجز موعد النقل مبكراً، خاصة في مواسم الذروة
                    </span>
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">تحديد الميزانية:</strong>
                  <p class="text-gray-600">
                    احسب التكاليف المتوقعة وضع ميزانية واضحة تشمل أي خدمات إضافية مثل التنظيف أو التخزين.
                    احرص على التواصل مع شركة نقل مرموقة وإجراء مقارنات بين عدة عروض سعر.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">فرز الأغراض:</strong>
                  <p class="text-gray-600">
                    ابدأ بفرز الأغراض غير الضرورية التي يمكن التبرع بها أو بيعها. 
                    هذا الإجراء يخفف من وزن النقل ويُتيح لك فرصة البدء في ترتيب منزلك الجديد دون متاعب زائدة.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="timeline-container my-8">
          <div class="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow animate-fade-in-up">
            <div class="flex items-center mb-4">
              <span class="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
              <h2 class="text-xl font-bold text-gray-800">قبل أسبوعين من النقل</h2>
            </div>
            <ul class="space-y-4 list-none">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">شراء مواد التغليف:</strong>
                  <p class="text-gray-600">
                    جهّز صناديق كرتونية بأحجام مختلفة، ونايلون فقاعي، وشريط لاصق قوي.
                    تأكد أيضاً من توفير أغلفة خاصة للأثاث القيم والإلكترونيات الحساسة.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">إخطار الجهات المعنية:</strong>
                  <p class="text-gray-600">
                    أبلغ الجهات المختصة والجمعيات الخدمية مثل مزوّدي الإنترنت، شركات الكهرباء والماء، 
                    بالإضافة إلى أي مؤسسات رسمية تحتاج تحديثاً لعنوانك الجديد.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <strong class="text-gray-800">التجهيز التدريجي للتغليف:</strong>
                  <p class="text-gray-600">
                    باشر تغليف المقتنيات التي لا تستخدمها يومياً مثل الملابس الموسمية والأدوات الكهربائية القليلة الاستخدام.
                    قم بتوثيق محتوى كل صندوق واستخدام ورق ملاحظات لاصق لكتابة الغرض المحفوظ لجعل عملية التفريغ أسهل لاحقاً.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 animate-fade-in-up">
          <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">✓ قائمة التحقق السريعة</h3>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </span>
                شراء مواد تغليف ذات جودة
              </li>
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </span>
                إعداد وثائق التأمين والضمان
              </li>
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </span>
                تنظيم الملفات الرسمية في مكان آمن
              </li>
            </ul>
          </div>
          
          <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">⚠️ تجنب هذه الأخطاء</h3>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </span>
                الانتظار حتى اللحظة الأخيرة للتغليف
              </li>
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </span>
                عدم إعلام مزوّدي الخدمات (الإنترنت، الكهرباء) مبكراً
              </li>
              <li class="flex items-center text-gray-700">
                <span class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </span>
                التهاون في تأمين الأثاث والأجهزة الثمينة
              </li>
            </ul>
          </div>
        </div>

        <div class="my-8 animate-fade-in-up">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">الأسئلة الشائعة</h2>
          <div class="space-y-4">
            <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">متى يجب أن أبدأ التحضير للنقل؟</h3>
              <p class="text-gray-600 leading-relaxed">
                يُنصح بالبدء قبل شهر على الأقل من موعد النقل المحدد للتخطيط الجيد وتجنب الضغط.
                حيث تمنحك هذه الفترة الوقت الكافي لإتمام جميع الإجراءات الضرورية.
              </p>
            </div>
            <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">كيف أنظم الأفكار عند التغليف؟</h3>
              <p class="text-gray-600 leading-relaxed">
                اكتب قائمة بكل غرفة وأغراضها، وقم بوضع علامة على كل صندوق توضح محتوياته والغرفة المخصصة له في المنزل الجديد.
                يمكنك أيضاً استخدام ألوان مختلفة لكل غرفة لجعل التفريغ أكثر سهولة.
              </p>
            </div>
            <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">ما أهمية تصوير الأثاث؟</h3>
              <p class="text-gray-600 leading-relaxed">
                التصوير يعد دليلاً على حالة الأثاث قبل النقل، مما يسهل إثبات أي ضرر ينجم خلال عملية النقل في حال أردت المطالبة بتعويض.
                اجعل الصور بتاريخ واضح للمزيد من المصداقية.
              </p>
            </div>
            <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">كيف أتعامل مع الأغراض القابلة للكسر؟</h3>
              <p class="text-gray-600 leading-relaxed">
                يُنصح بتغليفها بمواد واقية كالنايلون الفقاعي أو البطانيات المبطنة. 
                افصل الأغراض الزجاجية والخزفية عن بقية الحمولات، مع وضع علامات تحذيرية كـ "قابل للكسر" و "هش" على العبوات.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg mt-8">
          <h2 class="text-2xl font-bold text-primary-800 mb-4">خاتمة</h2>
          <p class="text-gray-700 leading-relaxed">
            التنظيم الجيد هو مفتاح النجاح في عملية النقل. احرص على اتباع هذه القائمة 
            وتكييفها حسب احتياجاتك الخاصة، فمن خلال التخطيط المسبق واستخدام الأدوات الصحيحة،
            تستطيع تفادي الكثير من المشكلات التي قد تنجم عن الارتجال والعشوائية.
            تذكر أن الوقت الإضافي الذي تقضيه في وضع خطة متكاملة لإدارة النقل سيعود عليك
            بالراحة ويجنبك التوتر. لمزيد من المعلومات حول خدماتنا وأسعارنا، يمكنك
            <a href="/services" class="text-primary-600 hover:text-primary-700 transition-colors">الاطلاع على قائمة خدماتنا</a>
            أو <a href="/" class="text-primary-600 hover:text-primary-700 transition-colors">زيارة صفحتنا الرئيسية</a>.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            للاطلاع على هذا المقال بالكامل وتنسيقاته، يمكنك زيارة الرابط التالي:
            <a href="https://www.saudimoving.com/blog/moving-checklist" class="text-primary-600 hover:text-primary-700 transition-colors">قائمة التحقق قبل النقل</a>.
            نأمل أن تكون هذه المعلومات مفيدة لك في رحلتك نحو منزل جديد يبدأ بنظام
            ويستمر بالراحة والطمأنينة.
          </p>
        </div>
      </div>

      <style>
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        
        .timeline-container > div {
          animation: fade-in-up 0.5s ease-out;
          animation-fill-mode: both;
        }
        
        .timeline-container > div:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .timeline-container > div:nth-child(3) {
          animation-delay: 0.4s;
        }
      </style>
    `
  },
  'furniture-protection': {
    title: 'حماية الأثاث أثناء النقل',
    excerpt: 'طرق حماية الأثاث من الضرر أثناء النقل',
    date: '2024-03-05',
    author: 'خبير الحماية',
    category: 'الحماية والتغليف',
    imageUrl: defaultImage,
    content: `
      <h2>أهمية حماية الأثاث أثناء النقل</h2>
      <p>تعتبر حماية الأثاث خطوة لا غنى عنها لضمان وصوله دون أضرار للمكان الجديد، ويقوم ذلك باستخدام أحدث تقنيات التغليف والتأمين.</p>
      
      <h2>استراتيجيات الحماية الفعالة</h2>
      <p>تشمل الاستراتيجيات استخدام البطانيات والفقاعات الهوائية والتأكد من تثبيت الأثاث بشكل جيد في وسائل النقل.</p>
      
      <h2>توصيات عملية للحماية المثلى</h2>
      <p>اعتمد على شركات متخصصة وتحقق من معايير الحماية المتبعة، لضمان رضى العملاء وتقليل المخاطر التشغيلية.</p>
    `
  },
  'moving-heavy-furniture': {
    title: 'نقل الأثاث الثقيل',
    excerpt: 'نصائح لنقل القطع الثقيلة بأمان',
    date: '2024-03-03',
    author: 'خبير النقل الثقيل',
    category: 'نقل متخصص',
    imageUrl: defaultImage,
    content: `
      <h2>تحضيرات نقل الأثاث الثقيل</h2>
      <p>يُعتبر نقل الأثاث الثقيل من العمليات الحساسة التي تتطلب تجهيزات متخصصة وفريق عمل مدرب على التعامل مع الأحمال الكبيرة.</p>
      
      <h2>التجهيزات الضرورية والأدوات</h2>
      <p>تتضمن الأدوات الأساسية عربات النقل المجهزة، أحزمة الرفع، والمنصات المتحركة لتأمين نقل القطع الثقيلة دون تعريضها للخطر.</p>
      
      <h2>الإرشادات الأمنية والنصائح الاحترافية</h2>
      <p>احرص على اتباع تعليمات السلامة الصارمة، واستخدم التقنيات الحديثة في الرفع والنقل لضمان سلامة الأثاث والعاملين.</p>
    `
  },
  'seasonal-moving-tips': {
    title: 'نقل العفش في مختلف الفصول',
    excerpt: 'نصائح للنقل في كل موسم من السنة',
    date: '2024-03-01',
    author: 'خبير النقل الموسمي',
    category: 'نصائح موسمية',
    imageUrl: defaultImage,
    content: `
      <h2>النقل في مختلف الفصول</h2>
      <p>التغيرات المناخية تؤثر بشكل كبير على عملية النقل، حيث تتطلب كل فصل تدابير مختلفة لضمان حماية الأثاث.</p>
      
      <h2>تدابير خاصة للنقل في الصيف والشتاء</h2>
      <p>في الصيف، يُنصح بتحديد أوقات النقل في الساعات الباكرة لتفادي الحرارة الزائدة، أما في الشتاء فيجب استخدام تقنيات حماية إضافية ضد الرطوبة والبرد.</p>
      
      <h2>نصائح لتحسين كفاءة النقل الموسمي</h2>
      <p>استعن بالمختصين في النقل الموسمي واعتمد على استراتيجيات مدروسة للتعامل مع تحديات كل فصل بما يحقق أفضل النتائج.</p>
    `
  },
  'moving-insurance': {
    title: 'تأمين نقل العفش',
    excerpt: 'دليلك الشامل لتأمين عملية نقل العفش',
    date: '2024-02-28',
    author: 'خبير التأمين',
    category: 'التأمين والضمان',
    imageUrl: defaultImage,
    content: `
      <h2>أهمية تأمين نقل العفش</h2>
      <p>يسهم تأمين نقل العفش في حماية العملاء مالياً من الأضرار الناتجة عن الحوادث أثناء عملية النقل، ما يضمن عدم تحمل التكاليف الزائدة.</p>
      
      <h2>أنواع التأمين وأفضل الممارسات</h2>
      <p>يتوفر التأمين بنوعيه الأساسي والشامل لكل عملية نقل، مع ضرورة قراءة الشروط والتفاصيل لضمان شمول التغطية لجميع المخاطر المحتملة.</p>
      
      <h2>نصائح لتوثيق الأضرار</h2>
      <p>ينصح بتوثيق حالة الأثاث قبل وبعد النقل بصورة تفصيلية والاحتفاظ بجميع المستندات والإيصالات اللازمة لتسهيل عمليات المطالبة.</p>
    `
  }
} 