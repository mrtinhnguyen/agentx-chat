"use client"

import * as React from "react"
import {
  Bot,
  Hash,
  MessageSquarePlus,
  NotebookPen,
  Search,
  Users,
  FolderClosed
} from "lucide-react"
import { RiHardDrive3Line } from "react-icons/ri";

import { NavMain } from "@/components/sidebar/nav-main"
import { NavModels } from "@/components/sidebar/nav-models"
import { NavUser } from "@/components/sidebar/nav-user"
import { NavChats } from "@/components/sidebar/nav-chats"
import { NavChannels } from "@/components/sidebar/nav-channels"
import { SidebarLogo } from "@/components/sidebar/sidebar-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Session } from "next-auth"
import type { Model } from '@/types/model.types'
import type { ChatData } from "@/lib/modules/chat"

// Navigation data
const data = {
  mainButtons: [
    {
      title: "Hội thoại mới",
      url: "/",
      icon: MessageSquarePlus,
      type: "button" as const,
    },
    {
      title: "Lưu trữ dữ liệu",
      url: "/drive",
      icon: RiHardDrive3Line,
      type: "button" as const,
    }
  ],
  sections: []
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: Session | null
  initialChats?: ChatData[]
  pinnedModels?: Model[]
  timeZone?: string
}

export function AppSidebar({ session, initialChats = [], pinnedModels = [], timeZone = 'UTC', ...props }: AppSidebarProps) {
  const { state } = useSidebar()
  const user = {
    name: session?.user?.name || "Người dùng",
    email: session?.user?.email || "",
    avatar: session?.user?.image || undefined,
    // Role comes from session.user.role via JWT; may be undefined for guests
    role: (session as any)?.user?.role as string | undefined,
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] gap-0">
        <NavMain items={data.mainButtons} />
        <NavModels pinnedModels={pinnedModels} currentUserId={session?.user?.id || null} />
        {state === "expanded" && <NavChannels items={data.sections} />}
        {state === "expanded" && <NavChats chats={initialChats} timeZone={timeZone} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user}/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
