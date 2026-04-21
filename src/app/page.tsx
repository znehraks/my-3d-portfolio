import { HelpTooltip } from './_components/htmlComponents/canvasUis/HelpTooltip';
import { NoticeBanner } from './_components/htmlComponents/canvasUis/NoticeBanner';
import { ZoneEntranceBanner } from './_components/htmlComponents/canvasUis/ZoneEntranceBanner';
import { ModalRouter } from './_components/htmlComponents/canvasUis/modals/ModalRouter';
import { MainCanvas } from './_components/MainCanvas';

export default function Home() {
  return (
    <>
      <NoticeBanner />
      <ZoneEntranceBanner />
      <ModalRouter />
      <HelpTooltip />
      <MainCanvas />
    </>
  );
}
