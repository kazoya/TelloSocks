import type { KnowledgeAnswer } from "@/types";

export const sampleQuestions = [
  "من تيلو للجوارب؟",
  "ما مجال مصنع المشرق للجوارب؟",
  "كيف يعمل محرّك تجار ألبسة؟",
  "ماذا نعرف من الموقع فقط؟",
];

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "من تيلو للجوارب؟",
    answer: "تيلو للجوارب — مصنع المشرق للجوارب. المجال المعلن: جوارب عائلية. المصدر: https://tellosocks.com/",
    citations: [{ title: "tellosocks.com", note: "صفحة عامة / من نحن كما فُحصت" }],
  },
  {
    id: "k2",
    question: "ما مجال مصنع المشرق للجوارب؟",
    answer: "جوارب عائلية — طلب تاجر تجزئة حسب المقاس واللون — السعر باعتمادك",
    citations: [{ title: "tellosocks.com", note: "مجال معلن كما فُحص" }],
  },
  {
    id: "k3",
    question: "كيف يعمل محرّك تجار ألبسة؟",
    answer: "الاقتراح يظهر في اللوح. التنفيذ (سعر، عرض، زيارة) لا يتم إلا باعتماد مدير المبيعات. طلب تاجر تجزئة حسب المقاس واللون — السعر باعتمادك",
    citations: [{ title: "هذا التصور", note: "صفحة المحرّك — بيانات تجريبية" }],
  },
  {
    id: "k4",
    question: "ماذا نعرف من الموقع فقط؟",
    answer: "الموقع متجر تجزئة. مسار الجملة للمحلات غير ظاهر. أرقام اللوح تجريبية.",
    citations: [{ title: "tellosocks.com", note: "ما هو منشور فقط" }],
  },
];

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer: "لا إجابة من مصدر معتمد داخل هذا التصور. نعتذر بدل الاختراع. اسأل المبيعات أو راجع الموقع.",
  citations: [{ title: "قاعدة الصدق", note: "المصدر أو الاعتذار" }],
};
