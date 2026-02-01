type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * レベル(h1〜h6)に応じたスタイルを適用するセマンティック見出し。
 */
type HeadingProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const styles: Record<HeadingLevel, string> = {
  1: "text-3xl font-bold",
  2: "text-2xl font-semibold",
  3: "text-xl font-semibold",
  4: "text-lg font-semibold",
  5: "text-base font-semibold",
  6: "text-sm font-semibold",
};

/**
 * 事前定義のタイポグラフィでh1〜h6を描画し、必要ならクラスを追加可能。
 */
export function Heading({ level = 1, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as const;
  const base = styles[level] ?? styles[1];
  return <Tag className={`${base} ${className}`.trim()}>{children}</Tag>;
}
