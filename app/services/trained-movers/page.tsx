'use client'

import ServiceLayout from '@/components/layout/ServiceLayout'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function TrainedMoversService() {
  const breadcrumbItems = [
    { label: 'عمالة مدربة لنقل العفش', href: '/services/trained-movers' },
    { label: 'الخدمات', href: '/services' },
    { label: 'الرئيسية', href: '/' }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceLayout
        title="عمالة مدربة لنقل العفش"
        description="فريق متخصص ومدرب على أعلى مستوى لنقل الأثاث"
        features={[
          'فريق عمل مدرب ومحترف',
          'خبرة في فك وتركيب جميع أنواع الأثاث',
          'معدات حديثة ومتطورة',
          'تغليف احترافي',
          'ضمان سلامة المنقولات',
          'خدمة متكاملة'
        ]}
      />
    </>
  )
} 