'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function FilipinoMoversService() {
  const breadcrumbItems = [
    { label: 'نقل عفش عمالة فلبينية', href: '/services/filipino-movers' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="نقل عفش عمالة فلبينية"
        description="خدمة نقل عفش احترافية مع عمالة فلبينية مدربة ومتخصصة"
        features={[
          'عمالة فلبينية مدربة ومحترفة',
          'خبرة في التعامل مع جميع أنواع الأثاث',
          'معدات حديثة وآمنة',
          'تغليف احترافي',
          'ضمان سلامة المنقولات',
          'أسعار تنافسية'
        ]}
      />
    </>
  )
} 