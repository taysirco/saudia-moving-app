'use client'

import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { 
  HomeIcon, PhoneIcon, MapPinIcon, TruckIcon, 
  WrenchIcon, UserGroupIcon, StarIcon, ClockIcon,
  ShieldCheckIcon, CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const availableIcons = {
  HomeIcon,
  PhoneIcon,
  MapPinIcon,
  TruckIcon,
  WrenchIcon,
  UserGroupIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
}

interface Icon {
  name: string
  color: string
}

interface IconSelectorProps {
  icons: Icon[]
  onAddIcon: (icon: Icon) => void
  onRemoveIcon: (index: number) => void
}

export default function IconSelector({ icons, onAddIcon, onRemoveIcon }: IconSelectorProps) {
  const [selectedIcon, setSelectedIcon] = useState('')
  const [iconColor, setIconColor] = useState('#000000')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleAddIcon = () => {
    if (selectedIcon) {
      onAddIcon({
        name: selectedIcon,
        color: iconColor
      })
      setSelectedIcon('')
    }
  }

  const renderIcon = (iconName: string) => {
    const IconComponent = availableIcons[iconName as keyof typeof availableIcons]
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 border rounded-lg"
            style={{ color: icon.color }}
          >
            {renderIcon(icon.name)}
            <button
              type="button"
              onClick={() => onRemoveIcon(index)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <select
          value={selectedIcon}
          onChange={(e) => setSelectedIcon(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        >
          <option value="">اختر أيقونة</option>
          {Object.keys(availableIcons).map(iconName => (
            <option key={iconName} value={iconName}>
              {iconName.replace('Icon', '')}
            </option>
          ))}
        </select>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 border rounded-lg w-20 h-10"
            style={{ backgroundColor: iconColor }}
          />
          {showColorPicker && (
            <div className="absolute z-10 mt-2">
              <div
                className="fixed inset-0"
                onClick={() => setShowColorPicker(false)}
              />
              <div className="relative">
                <HexColorPicker
                  color={iconColor}
                  onChange={setIconColor}
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddIcon}
          disabled={!selectedIcon}
          className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          إضافة
        </button>
      </div>
    </div>
  )
} 