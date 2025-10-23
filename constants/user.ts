export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
} as const

export const USER_GROUPS = {
  DEFAULT: 'default',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise'
} as const

export const PLACEHOLDERS = {
  NAME: 'Nhập họ và tên',
  EMAIL: 'Nhập địa chỉ email',
  PASSWORD: 'Nhập mật khẩu mới',
  SEARCH_USERS: 'Tìm kiếm người dùng...'
} as const

export const API_ENDPOINTS = {
  USER_UPDATE: '/api/v1/users/update',
  USER_DELETE: '/api/v1/users/delete'
} as const

export const MESSAGES = {
  USERS_TITLE: 'Người dùng',
  USERS_DESCRIPTION: 'Quản lý tài khoản người dùng, vai trò và quyền hạn',
  LOADING_USERS: 'Đang tải người dùng...',
  NO_USERS: 'Không tìm thấy người dùng',
  NAME_LABEL: 'Tên',
  EMAIL_LABEL: 'Email',
  ROLE_LABEL: 'Vai trò',
  USER_GROUP_LABEL: 'Nhóm người dùng',
  PASSWORD_LABEL: 'Mật khẩu mới',
  LAST_ACTIVE_LABEL: 'Hoạt động cuối',
  CREATED_AT_LABEL: 'Ngày tạo',
  OAUTH_ID_LABEL: 'OAuth ID',
  ACTIONS_LABEL: 'Hành động',
  SAVE: 'Lưu',
  SAVING: 'Đang lưu...',
  DELETE: 'Xóa',
  EDIT: 'Chỉnh sửa',
  CHATS: 'Xem cuộc trò chuyện',
  DELETE_CONFIRM_TITLE: 'Xóa người dùng',
  DELETE_CONFIRM_MESSAGE: 'Bạn có chắc chắn muốn xóa người dùng này? Hành động này không thể hoàn tác.',
  CANCEL: 'Hủy',
  CONFIRM: 'Xác nhận'
} as const

export const TOAST_MESSAGES = {
  USERS_LOADED: 'Tải danh sách người dùng thành công',
  USER_UPDATED: 'Cập nhật người dùng thành công',
  USER_DELETED: 'Xóa người dùng thành công',
  USER_UPDATE_FAILED: 'Không thể cập nhật người dùng',
  USER_DELETE_FAILED: 'Không thể xóa người dùng',
  USER_LOAD_FAILED: 'Không thể tải danh sách người dùng'
} as const

export const getEmailInitials = (email: string) => {
  const [username] = email.split('@')
  return username
    .split('.')
    .map(part => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2)
}
