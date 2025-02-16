import Breadcrumbs from './Breadcrumbs'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      {children}
    </div>
  )
} 