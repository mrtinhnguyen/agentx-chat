"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SaveStatusButton } from "@/components/ui/save-button"
import { useRouter } from "next/navigation"

interface UploadFolderDialogProps {
  open: boolean
  onOpenChange: (next: boolean) => void
  parent?: string
}

export function UploadFolderDialog({ open, onOpenChange, parent = "" }: UploadFolderDialogProps) {
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    await fetch('/api/files/upload', { method: 'POST', body: formData })
    onOpenChange(false)
    router.refresh()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tải lên thư mục</DialogTitle>
          <DialogDescription>Chọn thư mục để tải lên.</DialogDescription>
        </DialogHeader>
        <form action={onSubmit} className="space-y-3">
          <input type="hidden" name="parent" value={parent} />
          <div className="space-y-2">
            <Label htmlFor="folder-input">Chọn thư mục</Label>
            <Input id="folder-input" name="files" type="file" multiple {...({ webkitdirectory: '' } as any)} {...({ directory: '' } as any)} />
          </div>
          <div className="flex justify-end">
            <SaveStatusButton label="Tải lên" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


