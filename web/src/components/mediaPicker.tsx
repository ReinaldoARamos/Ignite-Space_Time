'use client'
export function MediaPicker() {
  return (
    <input
      type="file"
      id="media"
      className="invisible h-0 w-0"
      onChange={(value) => console.log(value)}
    />
  )
}
