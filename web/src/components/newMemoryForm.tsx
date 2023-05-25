'use client'

import { Camera } from 'lucide-react'
import { MediaPicker } from './mediaPicker'

export function NewmemoryForm() {
  return (
    <form onSubmit={() => {}} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="flex h-4 w-4 items-center" />
          Anexar Mídia
        </label>

        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            value={'true'}
            className="h-4 w-4 rounded  border-gray-400 bg-gray-700 text-purple-500"
          />
          tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent  p-0   text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0 "
        placeholder="Fique livre para adicionar fotos, vídeos  e relatos sobre experiencias que você quer lembrar para sempre. "
      />
    </form>
  )
}
