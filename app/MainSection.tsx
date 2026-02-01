/**
 * ページ固有コンテンツの置き場。共通シェルはlayout側で管理。
 */
export function MainSection() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-zinc-600 dark:text-zinc-300">
        ここに各セクションやコンポーネントを配置してください。言語切り替えとタイトルはレイアウト側に共通で配置しています。
      </p>
    </div>
  );
}
