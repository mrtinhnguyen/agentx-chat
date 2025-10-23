"use client"

import { Zap } from "lucide-react"
interface PromptSuggestion {
  title: string
  description: string
  prompt_message: string
}

const SUGGESTIONS: PromptSuggestion[] = [
  {
    title: "Giúp tôi học",
    description: "Tóm tắt các khái niệm chính từ ghi chú",
    prompt_message:
      "Tôi cần giúp đỡ trong việc học một chủ đề. Hỏi tôi về chủ đề tôi đang học, sau đó tạo một hướng dẫn học tập ngắn gọn với: khái niệm chính, tóm tắt ngắn, ví dụ thực tế, và 5 câu hỏi thực hành với đáp án. Bao gồm lịch trình lặp lại.",
  },
  {
    title: "Viết email",
    description: "Email lịch sự, ngắn gọn, chuyên nghiệp",
    prompt_message:
      "Viết một email ngắn gọn, chuyên nghiệp. Hỏi tôi về người nhận, mục tiêu, tone, và các điểm chính. Cung cấp tiêu đề và ba biến thể, sau đó email cuối cùng.",
  },
  {
    title: "Tư duy sáng tạo",
    description: "Tạo ra các ý tưởng sáng tạo khác nhau",
    prompt_message:
      "Giúp tôi tư duy sáng tạo. Hỏi tôi về mục tiêu, đối tượng và ràng buộc. Trả về 10 ý tưởng khác nhau với ưu/nhược điểm và một gợi ý bước tiếp theo.",
  },
  {
    title: "Debug mã của tôi",
    description: "Chẩn đoán và đề xuất các giải pháp",
    prompt_message:
      "Tôi có một lỗi. Hỏi tôi về lỗi, hành vi mong đợi, đoạn mã, và môi trường. Cung cấp nguyên nhân có khả năng, một phiên bản tối thiểu, và các giải pháp bước theo.",
  },
  {
    title: "Cải thiện viết của tôi",
    description: "Chỉnh sửa cho rõ ràng và tone",
    prompt_message:
      "Tôi muốn giúp đỡ cải thiện một đoạn văn. Hỏi tôi về văn bản và tone mong muốn. Trả về một phiên bản đã chỉnh sửa, phản hồi đầu điểm, và hai phiên bản thể hiện khác nhau.",
  },
  {
    title: "Lập kế hoạch cho chuyến đi",
    description: "Lịch trình với ngân sách và mẹo",
    prompt_message:
      "Giúp tôi lập kế hoạch cho chuyến đi. Hỏi tôi về điểm đến, ngày, ngân sách, và sở thích. Đề xuất một lịch trình 3 ngày với các hoạt động, mẹo vận chuyển, và ước tính chi phí.",
  },
]

interface PromptSuggestionsProps {
  onSelect: (prompt: string) => void
  disabled?: boolean
}

export function PromptSuggestions({ onSelect, disabled = false }: PromptSuggestionsProps) {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
        <Zap className="h-4 w-4" />
        <span>Gợi ý</span>
      </div>
      <div className="max-h-46 overflow-y-auto scrollbar-hide">
        {SUGGESTIONS.map((s, idx) => (
          <button
            key={`${s.title}-${idx}`}
            type="button"
            className="w-full text-left rounded-md px-3 py-2 hover:bg-muted/40 transition-colors"
            onClick={() => onSelect(s.prompt_message)}
            disabled={disabled}
          >
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-muted-foreground">{s.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default PromptSuggestions


