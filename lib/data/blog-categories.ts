export const BLOG_CATEGORIES = [
  "Cadastru",
  "Intabulare",
  "Topografie",
  "Ghiduri",
  "Legislație",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const CATEGORY_CHIP_CLASSES: Record<string, string> = {
  "Cadastru":    "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/25",
  "Intabulare":  "bg-brand-violet/15 text-brand-violet border-brand-violet/25",
  "Topografie":  "bg-brand-pink/15 text-brand-pink border-brand-pink/25",
  "Ghiduri":     "bg-blue-500/15 text-blue-500 border-blue-500/25",
  "Legislație":  "bg-amber-500/15 text-amber-600 border-amber-500/25",
};
