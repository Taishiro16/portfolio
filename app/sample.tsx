import { Heading } from "./_common/_components/Heading";

/**
 * レイアウトとセクション部品のデモページ（ルーティングでは未使用）。
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 pb-28 pt-16 sm:px-10">
        <section className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            welcome
          </p>
          <Heading level={1} className="leading-tight sm:text-5xl">
            ポートフォリオ
          </Heading>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            作品と記事をまとめて公開するためのポートフォリオサイト。下部のタブから各セクションへ移動できます。
          </p>
        </section>

        <section id="portfolio" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <Heading level={2}>ポートフォリオ</Heading>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">
            プロジェクトカードをここに並べます。（後で実績データを流し込み）
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Project name</p>
              <Heading level={3} className="text-lg">
                サンプルプロジェクトA
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                課題・アプローチ・成果の概要をここに。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Project name</p>
              <Heading level={3} className="text-lg">
                サンプルプロジェクトB
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                課題・アプローチ・成果の概要をここに。
              </p>
            </div>
          </div>
        </section>

        <section id="blog" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <Heading level={2}>ブログ</Heading>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">
            最新の記事をリスト表示します。RSSや外部ブログへのリンクも検討。
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <Heading level={3} className="text-lg">
                サンプル記事タイトル
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                記事の概要テキスト。続きを読むリンクを後で追加。
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <Heading level={2}>スキル</Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <Heading level={3} className="text-lg">
                フロントエンド
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Next.js / React / TypeScript / Tailwind CSS など
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <Heading level={3} className="text-lg">
                その他
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                デザインツール、設計、運用・デプロイ周りの経験など
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <Heading level={2}>お問い合わせ</Heading>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">
            相談したい内容を簡単に書いてください。メールリンクやフォームを後で実装します。
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="mailto:example@example.com"
          >
            メールで連絡する
          </a>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-around px-4">
          <a
            className="flex flex-col items-center text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            href="#portfolio"
          >
            <span>ポートフォリオ</span>
          </a>
          <a
            className="flex flex-col items-center text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            href="#blog"
          >
            <span>ブログ</span>
          </a>
          <a
            className="flex flex-col items-center text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            href="#skills"
          >
            <span>スキル</span>
          </a>
          <a
            className="flex flex-col items-center text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            href="#contact"
          >
            <span>お問い合わせ</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
