export const DOCUMENT_MESSAGES = {
  LOADING: 'Đang tải tài liệu...',
  ERROR: 'Đã xảy ra lỗi khi tải tài liệu',
  UNAUTHORIZED: 'Bạn không có quyền truy cập tài liệu này',
  NOT_FOUND: 'Tài liệu không tồn tại',
  CREATED: 'Tài liệu đã được tạo thành công',
  UPDATED: 'Tài liệu đã được cập nhật thành công',
  DELETED: 'Tài liệu đã được xóa thành công',
  SHARED: 'Tài liệu đã được chia sẻ thành công',
  PERMISSION_UPDATED: 'Quyền đã được cập nhật thành công',
  PERMISSION_REMOVED: 'Quyền đã được xóa thành công',
  COMMENT_ADDED: 'Đã thêm bình luận',
  COMMENT_DELETED: 'Đã xóa xóa bình luận',
  VERSION_CREATED: 'Phiên bản đã được lưu thành công',
} as const

export const DOCUMENT_TAGS = {
  LIST: 'documents:list',
  DETAIL: (id: string) => `documents:${id}`,
  PERMISSIONS: (id: string) => `documents:${id}:permissions`,
  COMMENTS: (id: string) => `documents:${id}:comments`,
  VERSIONS: (id: string) => `documents:${id}:versions`,
} as const

export const USER_COLORS = [
  '#6c5ce7', // purple
  '#0984e3', // blue
  '#00b894', // green
  '#fdcb6e', // yellow
  '#e17055', // orange
  '#fd79a8', // pink
  '#a29bfe', // light purple
  '#74b9ff', // light blue
  '#55efc4', // mint
  '#ffeaa7', // light yellow
] as const

export const DEFAULT_DOCUMENT_TITLE = 'Untitled Document'

