'use client'

interface PlanSelectorProps {
  selectedPlanId: string
  onChange: (planId: string) => void
}

export default function PlanSelector({ selectedPlanId, onChange }: PlanSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Plan cards will go here */}
      {/* This is just a placeholder structure */}
      <div className="border rounded-lg p-4">
        <h4 className="font-medium">الباقة الأساسية</h4>
        {/* Add plan details and selection logic */}
      </div>
    </div>
  )
} 