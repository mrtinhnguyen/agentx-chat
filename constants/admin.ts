import { LucideIcon, Users, Link as LinkIcon, Box, Mic, Globe, Image as ImageIcon, Terminal, HardDrive, Video } from "lucide-react"
import { ReactSVGElement } from "react";
import { CgScreen } from "react-icons/cg";
import { IconTree, IconType } from "react-icons/lib";

export interface AdminNavItem {
    id: string
    label: string
    icon: LucideIcon | IconType
    href: string
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
    {
        id: "users",
        label: "Người dùng",
        icon: Users,
        href: "/admin/users"
    },
    {
        id: "drive",
        label: "Lưu trữ Drive",
        icon: HardDrive,
        href: "/admin/drive"
    },
    {
        id: "connections",
        label: "Kết nối",
        icon: LinkIcon,
        href: "/admin/connections"
    },
    {
        id: "models",
        label: "Mô hình",
        icon: Box,
        href: "/admin/models"
    },
    {
        id: "audio",
        label: "Âm thanh",
        icon: Mic,
        href: "/admin/audio"
    },
    {
        id: "image",
        label: "Hình ảnh",
        icon: ImageIcon,
        href: "/admin/image"
    },
    {
        id: "video",
        label: "Video",
        icon: Video,
        href: "/admin/video"
    },
    {
      id: "websearch",
      label: "Tìm kiếm Web",
      icon: Globe,
      href: "/admin/websearch"
    },
    {
        id: "code-interpreter",
        label: "Code Interpreter",
        icon: Terminal,
        href: "/admin/code-interpreter"
    },
    {
        id: "ui",
        label: "UI",
        icon: CgScreen,
        href: "/admin/ui"
  },
] as const

export type AdminTab = typeof ADMIN_NAV_ITEMS[number]['id']
