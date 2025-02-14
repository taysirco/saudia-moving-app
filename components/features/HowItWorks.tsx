'use client'

import { motion } from 'framer-motion'

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white mx-auto mb-4">
          1
        </div>
        <h3 className="font-bold text-xl mb-2">اختر الخدمة</h3>
        <p className="text-gray-600">حدد نوع الخدمة التي تحتاجها</p>
      </div>

      <div className="text-center">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white mx-auto mb-4">
          2
        </div>
        <h3 className="font-bold text-xl mb-2">اختر المدينة</h3>
        <p className="text-gray-600">حدد موقعك من قائمة المدن المتوفرة في المملكة</p>
      </div>

      <div className="text-center">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white mx-auto mb-4">
          3
        </div>
        <h3 className="font-bold text-xl mb-2">احصل على عرض سعر</h3>
        <p className="text-gray-600">سنتواصل معك فوراً بعرض سعر مناسب لمتطلباتك</p>
      </div>

      <div className="text-center">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white mx-auto mb-4">
          4
        </div>
        <h3 className="font-bold text-xl mb-2">استمتع بالخدمة</h3>
        <p className="text-gray-600">نقوم بتنفيذ الخدمة بكل دقة وضمان سلامة ممتلكاتك</p>
      </div>
    </div>
  );
};

export default HowItWorks; 