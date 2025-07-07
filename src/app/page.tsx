import Icon from "./icon.jpg";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="
    bg-[url(/bg.jpg)]
    "><div className="backdrop-blur-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[4px] row-start-2 items-center sm:items-start subpixel-antialiased font-minecraft">
      <div className="flex-col gap-6 py-6 inline-flex items-center">
          <div className="flex gap-2 bg-[rgba(163,163,163,0.4)] backdrop-blur-lg border-none p-2 rounded-xl">
            <Image src={Icon} alt="icon" height="48"></Image>
            <span className="pt-2.5 text-2xl text-fuchsia-200">Circle Network</span>
          </div>
          <div className="bg-[rgba(163,163,163,0.4)] backdrop-blur-lg border-none p-4 rounded-xl text-center space-y-1 max-w-sm">
            <p>A Taiwanese server with multi gamemodes</p>
            <p>Under development :D</p>
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Circle Network - 2025 By ItsGlobally</p>
      </footer>
    </div></div>
  );
}
