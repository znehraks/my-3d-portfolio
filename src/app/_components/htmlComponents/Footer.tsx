import Link from 'next/link';

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex h-[50px] w-full select-none items-center justify-between gap-4 px-6 text-xs text-[#555555]">
      <div className="w-3/5 max-[501px]:w-4/5 max-[501px]:text-[10px]">
        <a href="https://www.freepik.com/free-photo/sand-texture-brown-sand-background-from-fine-sand-sand-background_1285000.htm#query=sand%20texture&position=4&from_view=keyword&track=ais">
          Image by tirachard
        </a>
        on Freepik / Play Structure by Emmett “TawpShelf” Baber [CC-BY] via Poly Pizza / Jungle gym by Poly by Google
        [CC-BY] via Poly Pizza / Swing set by Poly by Google [CC-BY] via Poly Pizza
      </div>
      <Link
        href="/resume"
        className="shrink-0 rounded-full border border-[#888] px-3 py-1 text-[#333] hover:bg-black/5 max-[501px]:text-[10px]"
      >
        📄 텍스트 이력서
      </Link>
    </div>
  );
}
