import { KeyRound, UserCog, Blocks } from "lucide-react"

export interface SettingsNavItem {
  id: string
  label: string
  href: string
  icon: any
}

export const SETTINGS_NAV_ITEMS: SettingsNavItem[] = [
  { id: 'profile', label: 'Hồ sơ', href: '/settings/profile', icon: UserCog },
  { id: 'keys', label: 'API keys', href: '/settings/keys', icon: KeyRound },
  { id: 'integrations', label: 'Tích hợp', href: '/settings/integrations', icon: Blocks },
]

export const SETTINGS_MESSAGES = {
  TITLE: 'Cài đặt',
  DESCRIPTION: 'Quản lý hồ sơ và truy cập API',
  KEYS_TITLE: 'API keys',
  KEYS_DESCRIPTION: 'Tạo và quản lý API keys để truy cập API.',
  INTEGRATIONS_TITLE: 'Tích hợp',
  INTEGRATIONS_DESCRIPTION: 'Kết nối các dịch vụ thứ ba như Google Drive.',
  CREATE_KEY: 'Tạo API key',
  KEY_NAME_LABEL: 'Tên key',
  DELETE: 'Xóa',
  CONFIRM_DELETE: 'Bạn có chắc chắn muốn xóa key này?',
  LOADING_KEYS: 'Đang tải keys...',
  NO_KEYS: 'Không có API keys. Tạo một để bắt đầu.',
} as const

export const TOAST = {
  KEY_CREATED: 'API key đã được tạo. Sao chép nó ngay bây giờ; nó sẽ không được hiển thị lại.',
  KEY_DELETED: 'API key đã được xóa.',
  ERROR_GENERIC: 'Đã xảy ra lỗi.',
}


