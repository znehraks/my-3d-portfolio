import { NoticeBanner } from './_components/htmlComponents/canvasUis/NoticeBanner';
import { WoodenSignModal } from './_components/htmlComponents/canvasUis/WoodenSignModal';
import { MainCanvas } from './_components/MainCanvas';

export default function Home() {
  return (
    <>
      <NoticeBanner />
      <WoodenSignModal />
      <MainCanvas />
    </>
  );
}
