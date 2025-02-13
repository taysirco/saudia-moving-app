'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { cities, keywords } from '@/lib/utils/data'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import { HexColorPicker } from 'react-colorful'

// Dynamic imports
const PlanSelector = dynamic(() => import('./PlanSelector'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const DynamicIconSelector = dynamic(
  () => import('./IconSelector').then(mod => {
    const Component = mod.default
    return function DynamicIconSelectorWrapper(props: any) {
      return <Component {...props} />
    }
  }),
  { 
    loading: () => <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />,
    ssr: false
  }
)

const DynamicImageUpload = dynamic(
  () => import('./ImageUpload').then(mod => {
    const Component = mod.default
    return function DynamicImageUploadWrapper(props: any) {
      return <Component {...props} />
    }
  }),
  { 
    loading: () => <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />,
    ssr: false
  }
)

interface Plan {
  _id: string
  name: string
  nameAr: string
  price: number
  duration: number
  features: string[]
  maxCities: number
  isFeatured: boolean
  maxImages: number
  totalPrice: number
}

interface AdFormData {
  companyName: string
  description: string
  phoneNumber: string
  whatsappNumber: string
  cities: string[]
  services: string[]
  backgroundColor: string
  startDate: string
  endDate: string
  featured: boolean
  priority: number
  active: boolean
  planId: string
  icons: Array<{ name: string, color: string }>
}

interface AdFormCompleteProps {
  onSubmit: (data: any) => Promise<void>
  isSubmitting?: boolean
  initialData?: any
}

export default function AdFormComplete({ onSubmit, isSubmitting, initialData }: AdFormCompleteProps) {
  const [mounted, setMounted] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [plans, setPlans] = useState<Plan[]>([])
  const [icons, setIcons] = useState<Array<{ name: string, color: string }>>(initialData?.icons || [])

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<AdFormData>({
    defaultValues: {
      companyName: initialData?.companyName || '',
      description: initialData?.description || '',
      phoneNumber: initialData?.phoneNumber || '',
      whatsappNumber: initialData?.whatsappNumber || '',
      cities: initialData?.cities || [],
      services: initialData?.services || [],
      backgroundColor: initialData?.backgroundColor || '#ffffff',
      startDate: initialData?.startDate ? new Date(initialData.startDate).toISOString().split('T')[0] : '',
      endDate: initialData?.endDate ? new Date(initialData.endDate).toISOString().split('T')[0] : '',
      featured: initialData?.featured || false,
      priority: initialData?.priority || 1,
      active: initialData?.active ?? true,
      planId: initialData?.planId || '',
      icons: initialData?.icons || []
    }
  })

  useEffect(() => {
    setMounted(true)
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/plans')
      if (!response.ok) throw new Error('Failed to fetch plans')
      const data = await response.json()
      setPlans(data)
    } catch (error) {
      console.error('Error fetching plans:', error)
      toast.error('فشل في تحميل الباقات')
    }
  }

  const handleFormSubmit = async (data: AdFormData) => {
    if (!imageUrl) {
      toast.error('يرجى رفع صورة للإعلان')
      return
    }

    if (!data.planId) {
      toast.error('يرجى اختيار باقة')
      return
    }

    const selectedPlan = plans.find(plan => plan._id === data.planId)
    if (!selectedPlan) {
      toast.error('الباقة المختارة غير صالحة')
      return
    }

    if (data.cities.length > selectedPlan.maxCities && selectedPlan.maxCities !== -1) {
      toast.error(`هذه الباقة تسمح باختيار ${selectedPlan.maxCities} مدن كحد أقصى`)
      return
    }

    const formData = {
      ...data,
      imageUrl,
      planDetails: {
        name: selectedPlan.name,
        nameAr: selectedPlan.nameAr,
        price: selectedPlan.price,
        duration: selectedPlan.duration,
        features: selectedPlan.features,
        maxCities: selectedPlan.maxCities,
        isFeatured: selectedPlan.isFeatured,
        maxImages: selectedPlan.maxImages
      }
    }

    await onSubmit(formData)
  }

  if (!mounted) {
    return <div className="animate-pulse space-y-4">
      <div className="h-48 bg-gray-200 rounded-lg" />
      <div className="h-32 bg-gray-200 rounded-lg" />
      <div className="h-24 bg-gray-200 rounded-lg" />
    </div>
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* اختيار الباقة */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">اختيار الباقة</h3>
        <Controller
          name="planId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PlanSelector
              selectedPlanId={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {/* صورة الإعلان */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          صورة الإعلان
        </label>
        <DynamicImageUpload
          onUpload={setImageUrl}
          defaultImage={imageUrl}
        />
      </div>

      {/* اسم الشركة */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">معلومات الشركة</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم الشركة
            </label>
            <input
              type="text"
              {...register('companyName', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              وصف الشركة
            </label>
            <textarea
              {...register('description', { required: true })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* رقم الهاتف */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">معلومات الاتصال</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <input
              type="tel"
              {...register('phoneNumber', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم الواتساب
            </label>
            <input
              type="tel"
              {...register('whatsappNumber')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* المدن */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">المدن</h3>
        <Controller
          name="cities"
          control={control}
          rules={{ required: 'اختر مدينة واحدة على الأقل' }}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className="w-full p-2 border rounded-lg"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          )}
        />
        {errors.cities && (
          <p className="mt-1 text-sm text-red-600">{errors.cities.message}</p>
        )}
      </div>

      {/* الخدمات */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">الخدمات</h3>
        <Controller
          name="services"
          control={control}
          rules={{ required: 'اختر خدمة واحدة على الأقل' }}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className="w-full p-2 border rounded-lg"
            >
              {keywords.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          )}
        />
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
        )}
      </div>

      {/* تاريخ البداية */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">تاريخ بداية الإعلان</h3>
        <input
          type="date"
          {...register('startDate', { required: 'تاريخ البداية مطلوب' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
        )}
      </div>

      {/* تاريخ النهاية */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">تاريخ نهاية الإعلان</h3>
        <input
          type="date"
          {...register('endDate', { required: 'تاريخ النهاية مطلوب' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
        {errors.endDate && (
          <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
        )}
      </div>

      {/* إعلان مميز */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">إعلان مميز</h3>
        <label className="flex items-center space-x-2 rtl:space-x-reverse">
          <input
            type="checkbox"
            {...register('featured')}
            className="rounded text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">إعلان مميز</span>
        </label>
      </div>

      {/* الأولوية */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">الأولوية</h3>
        <input
          type="number"
          {...register('priority', { min: 1, max: 10 })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          min="1"
          max="10"
        />
      </div>

      {/* لون الخلفية */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">لون الخلفية</h3>
        <div className="relative">
          <input
            type="text"
            {...register('backgroundColor')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            onClick={() => setShowColorPicker(true)}
          />
          {showColorPicker && (
            <div className="absolute z-10 mt-2">
              <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
              <Controller
                name="backgroundColor"
                control={control}
                render={({ field }) => (
                  <HexColorPicker color={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          )}
        </div>
      </div>

      {/* أيقونات الإعلان */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">أيقونات الإعلان</h3>
        <DynamicIconSelector
          icons={icons}
          onAddIcon={(icon) => {
            const newIcons = [...icons, icon]
            setIcons(newIcons)
            setValue('icons', newIcons)
          }}
          onRemoveIcon={(index) => {
            const newIcons = icons.filter((_, i) => i !== index)
            setIcons(newIcons)
            setValue('icons', newIcons)
          }}
        />
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'جاري الحفظ...' : (initialData ? 'تحديث الإعلان' : 'إضافة الإعلان')}
      </button>
    </form>
  )
} 