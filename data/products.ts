import type { CatalogProduct } from "@/types";

export const products: CatalogProduct[] = [
  {
    id: "p1",
    nameAr: "جوارب عائلية",
    nameEn: "Family socks",
    family: "mego",
    notes: "حسب الموقع",
    reuse: "حسب الاستخدام التشغيلي",
    sourceUrl: "https://tellosocks.com/",
    contentStatus: "published",
  },
  {
    id: "p2",
    nameAr: "توصيل محلي",
    nameEn: "Local delivery",
    family: "mego",
    notes: "عروض معلنة فوق 20 د.أ",
    reuse: "حسب الاستخدام التشغيلي",
    sourceUrl: "https://tellosocks.com/",
    contentStatus: "published",
  }
];
