"use client"

import type { Session } from "next-auth"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useDrive } from "@/hooks/useDrive"
 

interface AdminDriveProps {
  session: Session | null
  initialConfig?: {
    enabled: boolean
    workspace: { enabled: boolean; provider: 'local' | 'aws' | 'azure' }
    user: { enabled: boolean }
  }
  initialProvider?: "local" | "gdrive"
}

export function AdminDrive({ session, initialConfig, initialProvider }: AdminDriveProps) {
  const fallbackConfig = { enabled: false, workspace: { enabled: false, provider: 'local' as const }, user: { enabled: false } }
  const cfg = initialConfig ?? fallbackConfig
  const { enabled, workspace, user, isSaving, setEnabled, setWorkspaceEnabled, setWorkspaceProvider, setUserEnabled } = useDrive(cfg)
  return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Lưu trữ Drive</h2>
          <p className="text-muted-foreground">Kích hoạt Drive và cấu hình không gian làm việc hoặc lưu trữ người dùng.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cài đặt Lưu trữ Drive</CardTitle>
            <CardDescription>Kích hoạt Lưu trữ Drive và chọn các tùy chọn lưu trữ.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                  <Label htmlFor="drive-enabled">Kích hoạt Lưu trữ Drive</Label>
                <p className="text-sm text-muted-foreground">Kích hoạt tính năng lưu trữ tệp.</p>
              </div>
              <Switch id="drive-enabled" checked={enabled} onCheckedChange={setEnabled} />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="workspace-enabled">Kích hoạt lưu trữ cấp độ không gian làm việc</Label>
                <p className="text-sm text-muted-foreground">Sử dụng một nhà cung cấp cho tất cả người dùng.</p>
              </div>
              <Switch id="workspace-enabled" checked={workspace.enabled} onCheckedChange={setWorkspaceEnabled} />
            </div>

            {workspace.enabled && (
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <Label htmlFor="workspace-provider">Cung cấp việc lưu trữ</Label>
                  <p className="text-sm text-muted-foreground">Chọn nơi lưu trữ tệp.</p>
                </div>
                <Select value={workspace.provider} onValueChange={(v) => setWorkspaceProvider(v as 'local' | 'aws' | 'azure')}>
                  <SelectTrigger id="workspace-provider" className="min-w-56">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local (Filesystem)</SelectItem>
                    <SelectItem value="aws">AWS (S3)</SelectItem>
                    <SelectItem value="azure">Azure (Blob)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="user-enabled">Kích hoạt lưu trữ cấp độ người dùng</Label>
                <p className="text-sm text-muted-foreground">Tích hợp với Google Drive hoặc Microsoft OneDrive.</p>
              </div>
              <Switch id="user-enabled" checked={user.enabled} onCheckedChange={setUserEnabled} />
            </div>
            <p className="text-xs text-muted-foreground">Cài đặt được lưu tự động.</p>
          </CardContent>
        </Card>
      </div>
    
  )
}


