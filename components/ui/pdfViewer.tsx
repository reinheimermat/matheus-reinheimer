'use client'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Card } from './card'

export function PdfViewer() {
  return (
    <Card.Root className="mb-3 h-[calc(100vh-32px)] md:p-10">
      <iframe
        src="https://docs.google.com/gview?url=https://matheusreinheimer.vercel.app/resume.pdf&embedded=true"
        width="100%"
        height="100%"
        className="rounded-3xl"
      ></iframe>
    </Card.Root>
  )
}
