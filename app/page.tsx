import { MainSection } from "./MainSection";

/**
 * Homeページのエントリーポイント。コンテンツはMainSection（SSR）に委譲。
 */
export default function Home() {
  return <MainSection />;
}
