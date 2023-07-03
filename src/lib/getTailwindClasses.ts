type sizes = {
  width: number
  height: number
}

export default function getTailwindClasses(items: Array<sizes>): string {
  const classes = items.map((item: sizes) => {
    const { width, height } = item
    return [
      `w-[${width}px]`,
      `min-w-[${width}px]`,
      `max-w-[${width}px]`,
      `h-[${height}px]`,
      `min-h-[${height}px]`,
      `max-h-[${height}px]`,
    ].join(' ')
  })
  return ['// Programatically Generated Tailwind Classes', ...classes].join('\n// ')
}
