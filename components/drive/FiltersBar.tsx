"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function FiltersBar() {
  return (
    <div className="mb-2 flex h-10 items-center gap-3 text-sm">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-8 rounded-full px-3">Theo loại</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Loại</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Thư mục</DropdownMenuItem>
          <DropdownMenuItem>File tài liệu</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-8 rounded-full px-3">Theo thời gian</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuLabel>Thời gian cập nhật</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Hôm nay</DropdownMenuItem>
          <DropdownMenuItem>7 ngày gần đây</DropdownMenuItem>
          <DropdownMenuItem>Năm nay</DropdownMenuItem>
          <DropdownMenuItem>Năm ngoái</DropdownMenuItem>
          <DropdownMenuItem>Khoảng thời gian cụ thể…</DropdownMenuItem>
          <DropdownMenuSeparator />
          <div className="flex items-center justify-between gap-2 p-2">
            <Button variant="ghost" size="sm">Xóa bộ lọc</Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Hủy</Button>
              <Button size="sm">Áp dụng</Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


