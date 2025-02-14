'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function MotorcycleMovingService() {
  const breadcrumbItems = [
    { label: 'دباب نقل عفش', href: '/services/motorcycle-moving' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="دباب نقل عفش"
        description="خدمة نقل سريعة للقطع الصغيرة والمتوسطة"
        features={[
          'خدمة سريعة للقطع الصغيرة',
          'مناسب للمناطق الضيقة',
          'توصيل فوري',
          'أسعار اقتصادية',
          'سائقين محترفين',
          'تغطية جميع الأحياء'
        ]}
      />
    </>
  )
} 