import type { NewConnection, NewOllamaConnection } from '@/lib/modules/connections/connections.types'

export const DEFAULT_OPENAI_CONNECTION: NewConnection = {
  id: "1",
  baseUrl: "",
  apiKey: ""
}

export const DEFAULT_OLLAMA_CONNECTION: NewOllamaConnection = {
  id: "1",
  baseUrl: ""
}

export const PLACEHOLDERS = {
  OPENAI_BASE_URL: "https://api.openai.com/v1",
  OLLAMA_BASE_URL: "http://localhost:11434",
  API_KEY: "Api Key"
} as const

export const API_ENDPOINTS = {
  CONNECTIONS_TEST: '/api/connections/test',
  MODELS_SYNC: '/api/v1/models/sync'
} as const

export const MESSAGES = {
  LOADING_CONNECTIONS: 'Đang tải kết nối...',
  SAVE_OPENAI_CONNECTIONS: 'Lưu',
  CLEAR_ALL: 'Xóa tất cả',
  TEST_CONNECTION: 'Kiểm tra kết nối',
  SAVE: 'Lưu',
  SAVING: 'Đang lưu...',
  DELETE: 'Xóa',
  EDIT: 'Sửa',
  CONNECTIONS_TITLE: 'Kết nối',
  CONNECTIONS_DESCRIPTION: 'Quản lý kết nối OpenAI & Ollama và điểm cuối',
  OPENAI_CONNECTIONS_TITLE: 'Kết nối OpenAI API',
  OLLAMA_CONNECTION_TITLE: 'Kết nối Ollama',
  BASE_URL_LABEL: 'URL cơ sở',
  API_KEY_LABEL: 'API key',
  ACTIONS_LABEL: 'Hành động'
} as const

export const TOAST_MESSAGES = {
  CONNECTIONS_LOADED: 'Kết nối đã được tải thành công',
  CONNECTION_SAVED: 'Kết nối đã được lưu',
  CONNECTION_UPDATED: 'Kết nối đã được cập nhật',
  CONNECTION_DELETED: 'Kết nối đã được xóa thành công',
  CONNECTION_TEST_SUCCESSFUL: 'Kết nối đã được kiểm tra thành công',
  CONNECTION_TEST_SUCCESSFUL_SYNC: 'Đã kết nối',
  CONNECTION_TEST_FAILED: 'Đã xảy ra lỗi khi kiểm tra kết nối',
  SAVE_FAILED: 'Đã xảy ra lỗi khi lưu kết nối',
  UPDATE_FAILED: 'Đã xảy ra lỗi khi cập nhật kết nối',
  DELETE_FAILED: 'Đã xảy ra lỗi khi xóa kết nối',
  FILL_COMPLETE_CONNECTION: 'Vui lòng nhập ít nhất một kết nối đầy đủ',
  ENTER_BASE_URL: 'Vui lòng nhập URL cơ sở trước',
  CONNECTION_TEST_PASSED_SAVE_FAILED: 'Kết nối đã được kiểm tra thành công nhưng đã xảy ra lỗi khi lưu'
} as const
