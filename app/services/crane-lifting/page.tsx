'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function CraneLiftingService() {
  const breadcrumbItems = [
    { label: 'ونش رفع عفش', href: '/services/crane-lifting' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="ونش رفع عفش"
        description="خدمة رفع الأثاث للأدوار العليا باستخدام أحدث المعدات"
        features={[
          'أوناش حديثة وآمنة',
          'مشغلين مدربين ومحترفين',
          'مناسب للأدوار العالية',
          'رفع جميع أنواع الأثاث',
          'معدات أمان متطورة',
          'خدمة سريعة وفعالة'
        ]}
      />
    </>
  )
} 