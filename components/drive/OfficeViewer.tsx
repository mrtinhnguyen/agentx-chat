"use client"
import { useState } from 'react'

interface OfficeViewerProps {
  fileUrl: string
  fileName: string
}

export function OfficeViewer({ fileUrl, fileName }: OfficeViewerProps) {
  const [error, setError] = useState(false)

  // Use Google Docs Viewer for Office documents
  // This works for public URLs or we can use Office Online
  const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`

  return (
    <div className="w-full h-full flex flex-col bg-background">
      {error ? (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
          <p className="mb-4">Không thể xem trước tài liệu này.</p>
          <p className="text-sm">
            Yêu cầu URL công khai để xem trước tài liệu. 
            Hãy tải về tệp để xem nó.
          </p>
        </div>
      ) : (
        <iframe
          src={viewerUrl}
          className="w-full h-full border-0"
          title={`Xem trước ${fileName}`}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

export default OfficeViewer

