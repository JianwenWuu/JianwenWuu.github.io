'use client';

import Image from 'next/image';
import { Expand, X } from 'lucide-react';
import { album, type AlbumItem } from '@/data/album';
import { assetPath } from '@/lib/asset-path';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

function AlbumVisual({ item, expanded = false }: { item: AlbumItem; expanded?: boolean }) {
  if (item.src) {
    return (
      <Image
        src={assetPath(item.src)}
        alt={item.alt}
        fill
        sizes={expanded ? '90vw' : '(min-width: 768px) 50vw, 100vw'}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 bg-[#111]"
      role="img"
      aria-label={item.alt}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#2a2a2a_0%,transparent_36%)]" />
      <div className="absolute inset-x-[9%] top-[10%] h-px bg-white/20" />
      <div className="absolute bottom-[10%] left-[9%] size-3 bg-[#76b900]" />
      <p className="eyebrow absolute bottom-[9%] left-[15%] text-[#737373]">
        Add photo / {item.id.slice(-2)}
      </p>
    </div>
  );
}

export function Album() {
  return (
    <section id="album" aria-labelledby="album-title" className="section-pad">
      <div className="site-container">
        <Reveal>
          <div id="album-title">
            <SectionHeader
              index="04 / 05"
              title="Album"
              description="Notes from research, travel, campus, and everyday life."
            />
          </div>
          <div className="grid auto-rows-[14rem] gap-4 sm:auto-rows-[18rem] md:grid-cols-2 md:auto-rows-[16rem] lg:grid-cols-12">
            {album.map((item, index) => {
              const layout = [
                'md:row-span-2 lg:col-span-7',
                'lg:col-span-5',
                'lg:col-span-5',
                'md:col-span-2 lg:col-span-12',
              ][index];

              return (
                <Dialog key={item.id}>
                  <DialogTrigger
                    className={`group relative overflow-hidden border border-white/15 text-left ${layout}`}
                    aria-label={`Open ${item.caption || item.alt}`}
                  >
                    <AlbumVisual item={item} />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                      <div>
                        <p className="eyebrow text-[#76b900]">{item.category}</p>
                        <p className="mt-2 text-lg">{item.caption}</p>
                      </div>
                      <Expand size={18} aria-hidden="true" />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    showCloseButton={false}
                    className="h-[min(86vh,54rem)] w-[min(92vw,72rem)] max-w-none border-white/15 bg-black p-0"
                  >
                    <DialogTitle className="sr-only">
                      {item.caption || item.alt}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {item.category || 'Album'} image viewer
                    </DialogDescription>
                    <div className="relative h-full w-full overflow-hidden">
                      <AlbumVisual item={item} expanded />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 pt-28">
                        <p className="eyebrow text-[#76b900]">{item.category}</p>
                        <p className="mt-3 text-2xl">{item.caption}</p>
                      </div>
                      <DialogClose className="absolute right-4 top-4 grid size-11 place-items-center bg-black/70 text-white backdrop-blur transition-colors hover:bg-[#76b900] hover:text-black" aria-label="Close image viewer">
                        <X size={20} />
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
