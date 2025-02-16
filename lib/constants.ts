export const SITE_URL: string = 'https://saudiamoving.com'

export type City = 
  | 'riyadh'
  | 'jeddah'
  | 'dammam'
  | 'mecca'
  | 'medina'
  | 'tabuk'
  | 'abha'
  | 'khamis-mushait'
  | 'taif'
  | 'yanbu'
  | 'jubail'
  | 'khobar'

export const CITIES: City[] = [
  'riyadh',
  'jeddah', 
  'dammam',
  'mecca',
  'medina',
  'tabuk',
  'abha',
  'khamis-mushait',
  'taif',
  'yanbu',
  'jubail',
  'khobar',
]

export type Service = 
  | 'furniture-moving'
  | 'office-moving'
  | 'villa-moving'
  | 'apartment-moving'
  | 'storage'
  | 'packing'

export const SERVICES: Service[] = [
  'furniture-moving',
  'office-moving',
  'villa-moving',
  'apartment-moving',
  'storage',
  'packing',
]

export type StaticPage = 
  | ''
  | 'about'
  | 'contact'
  | 'services'
  | 'cities'
  | 'blog'
  | 'terms'
  | 'privacy'

export const STATIC_PAGES: StaticPage[] = [
  '',
  'about',
  'contact',
  'services',
  'cities',
  'blog',
  'terms',
  'privacy',
] 