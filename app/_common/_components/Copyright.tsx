import { Text } from "./Text";

type CopyrightProps = {
  /** 表示する著作権者名。未指定なら "Portfolio"。 */
  owner?: string;
  /** 表示する年。未指定なら当年を自動採用。 */
  year?: number;
  className?: string;
};

/**
 * コピーライト表記をまとめて表示するフッター用コンポーネント。
 */
export function Copyright({
  owner = "Portfolio",
  year = new Date().getFullYear(),
  className = "",
}: CopyrightProps) {
  return (
    <div className={`mt-12 border-t border-zinc-200 pt-6 dark:border-zinc-800 ${className}`}>
      <Text tone="muted" size="sm">
        © {year} {owner}. All rights reserved.
      </Text>
    </div>
  );
}
