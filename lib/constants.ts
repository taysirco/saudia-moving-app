export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'https://www.saudimoving.com'

export const cities = [
  // المنطقة الوسطى
  {
    slug: 'riyadh',
    name: 'الرياض',
    districts: ['north-riyadh', 'south-riyadh', 'east-riyadh', 'west-riyadh'],
    services: [
      'moving-furniture',
      'furniture-moving-company',
      // ... باقي الخدمات
    ]
  },
  // ... باقي المدن
]

export const mainServices = [
  {
    path: '/filipino-movers',
    name: 'نقل عفش عمالة فلبينية',
    subServices: [
      'professional-filipino-movers',
      'experienced-filipino-workers',
      'trained-filipino-team'
    ]
  },
  // ... باقي الخدمات
]

export const services = [
  {
    id: 'filipino-movers',
    title: 'نقل عفش عمالة فلبينية',
    path: '/services/filipino-movers'
  },
  {
    id: 'pickup-moving',
    title: 'دينا نقل عفش',
    path: '/services/pickup-moving'
  },
  {
    id: 'motorcycle-moving',
    title: 'دباب نقل عفش',
    path: '/services/motorcycle-moving'
  },
  {
    id: 'trained-movers',
    title: 'عمالة مدربة لنقل العفش',
    path: '/services/trained-movers'
  },
  {
    id: 'crane-lifting',
    title: 'ونش رفع عفش',
    path: '/services/crane-lifting'
  },
  {
    id: 'furniture-storage',
    title: 'شركة تخزين عفش',
    path: '/services/furniture-storage'
  }
] 