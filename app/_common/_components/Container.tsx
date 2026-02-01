import { ReactNode } from "react";

type MaxWidth = "narrow" | "default" | "wide";
type Padding = "none" | "sm" | "md" | "lg";

/**
 * 横幅と左右パディングを一元管理するレイアウトラッパー。
 */
type ContainerProps = {
  children: ReactNode;
  /** コンテンツ領域の最大幅プリセット。 */
  maxWidth?: MaxWidth;
  /** ブレークポイント対応の左右パディング設定。 */
  padding?: Padding;
  className?: string;
};

const maxWidthClass: Record<MaxWidth, string> = {
  narrow: "max-w-2xl",
  default: "max-w-4xl",
  wide: "max-w-6xl",
};

const paddingClass: Record<Padding, string> = {
  none: "px-0",
  sm: "px-4 sm:px-6",
  md: "px-6 sm:px-8",
  lg: "px-6 sm:px-10",
};

/**
 * コンテンツを中央寄せし、統一した最大幅とレスポンシブパディングを適用。
 */
export function Container({
  children,
  maxWidth = "default",
  padding = "lg",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto ${maxWidthClass[maxWidth]} ${paddingClass[padding]} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
