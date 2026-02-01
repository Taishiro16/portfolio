import { ReactNode } from "react";

type Tone = "default" | "muted";
type Size = "sm" | "md" | "lg";
type Weight = "normal" | "medium" | "semibold";

/**
 * 本文や説明文用のテキストを統一スタイルで描画するコンポーネント。
 */
type TextProps = {
  children: ReactNode;
  /** 文言のトーン。mutedは説明文など控えめな場面向け。 */
  tone?: Tone;
  /** フォントサイズと行間のプリセット。 */
  size?: Size;
  /** 太さのプリセット。 */
  weight?: Weight;
  /** 使用するタグ。デフォルトはp。 */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const toneClass: Record<Tone, string> = {
  default: "text-zinc-900 dark:text-zinc-50",
  muted: "text-zinc-600 dark:text-zinc-300",
};

const sizeClass: Record<Size, string> = {
  sm: "text-sm leading-6",
  md: "text-base leading-7",
  lg: "text-lg leading-8",
};

const weightClass: Record<Weight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

/**
 * pタグの代わりに使う本文/説明文テキスト。トーン・サイズ・太さをpropsで統一管理。
 */
export function Text({
  children,
  tone = "default",
  size = "md",
  weight = "normal",
  as: Tag = "p",
  className = "",
}: TextProps) {
  const classes = [
    toneClass[tone],
    sizeClass[size],
    weightClass[weight],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
