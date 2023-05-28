import { NewmemoryForm } from '@/components/newMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="ml-16 mt-16 flex flex-1 flex-col gap-4 p-16">
      <Link
        href={'/'}
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à Timeline
      </Link>
      <NewmemoryForm />
    </div>
  )
}
