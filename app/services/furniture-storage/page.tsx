'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function FurnitureStorageService() {
  const breadcrumbItems = [
    { label: 'شركة تخزين عفش', href: '/services/furniture-storage' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="شركة تخزين عفش"
        description="تخزين آمن للأثاث في مستودعات مؤمنة ومكيفة"
        features={[
          'مستودعات آمنة ومكيفة',
          'نظام مراقبة 24 ساعة',
          'تغليف وحماية احترافية',
          'مكافحة الحشرات والقوارض',
          'تأمين شامل على المقتنيات',
          'أسعار تنافسية للتخزين طويل المدى'
        ]}
      />
    </>
  )
} 