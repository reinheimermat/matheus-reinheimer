'use client'

import { Worker, Viewer } from '@react-pdf-viewer/core'

interface PdfviewerProps {
  pdfUrl: string
}

export function Pdfviewer({ pdfUrl }: PdfviewerProps) {
  return (
    <div style={{ height: '750px' }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  )
}
