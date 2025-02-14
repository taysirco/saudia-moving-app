'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function PickupMovingService() {
  const breadcrumbItems = [
    { label: 'دينا نقل عفش', href: '/services/pickup-moving' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="دينا نقل عفش"
        description="خدمة نقل سريعة وآمنة باستخدام سيارات دينا مجهزة"
        features={[
          'سيارات دينا حديثة ومجهزة',
          'سائقين محترفين ومدربين',
          'خدمة سريعة وفعالة',
          'تغطية جميع المناطق',
          'أسعار مناسبة',
          'خدمة 24 ساعة'
        ]}
      />
    </>
  )
} 