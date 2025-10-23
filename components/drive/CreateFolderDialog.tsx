"use client"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SaveStatusButton } from "@/components/ui/save-button"
import { createFolderSubmitAction } from "@/actions/files"
import { useRouter } from "next/navigation"

interface CreateFolderDialogProps {
  open: boolean
  onOpenChange: (next: boolean) => void
  parent?: string
}

export function CreateFolderDialog({ open, onOpenChange, parent = "" }: CreateFolderDialogProps) {
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    await createFolderSubmitAction(formData)
    onOpenChange(false)
    router.refresh()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thư mục mới</DialogTitle>
          <DialogDescription>Tạo một thư mục mới tại vị trí hiện tại.</DialogDescription>
        </DialogHeader>
        <form action={onSubmit} className="space-y-3">
          <input type="hidden" name="parent" value={parent} />
          <div className="space-y-2">
            <Label htmlFor="folder-name">Tên thư mục</Label>
            <Input id="folder-name" name="name" placeholder="ví dụ: tài liệu" required />
          </div>
          <div className="flex justify-end">
            <SaveStatusButton label="Tạo" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


