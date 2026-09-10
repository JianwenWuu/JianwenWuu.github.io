'use client';

import Image from 'next/image';
import {
  ArrowDownRight,
  Contact,
  GitBranch,
  GraduationCap,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { assetPath } from '@/lib/asset-path';

const socialLinks = [
  {
    label: 'Email',
    href: siteConfig.email ? `mailto:${siteConfig.email}` : '',
    icon: Mail,
  },
  { label: 'GitHub', href: siteConfig.github, icon: GitBranch },
  { label: 'Google Scholar', href: siteConfig.scholar, icon: GraduationCap },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Contact },
];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="site-container flex min-h-screen items-center pb-14 pt-28"
    >
      <motion.div
        className="grid w-full items-end gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="lg:order-2">
          <motion.h1
            id="hero-heading"
            variants={item}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-[15ch] text-[clamp(2.6rem,5.2vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.055em]"
          >
            {siteConfig.headline.lead}{' '}
            <span className="text-[#76b900]">
              {siteConfig.headline.accent}
            </span>{' '}
            {siteConfig.headline.tail}
          </motion.h1>

          <motion.div
            variants={item}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-2"
          >
            <p className="text-lg leading-relaxed text-white">
              {siteConfig.title}
              <br />
              <span className="text-[#a3a3a3]">{siteConfig.institution}</span>
            </p>
            <p className="max-w-md leading-relaxed text-[#a3a3a3]">
              {siteConfig.bio}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={
                    link.label === 'Email'
                      ? `Email ${siteConfig.email}`
                      : `Open ${link.label}`
                  }
                  className="group flex min-h-24 flex-col items-center justify-between border border-white/15 px-2 py-3 text-center transition-colors hover:border-[#76b900] hover:bg-[#76b900] hover:text-black"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#a3a3a3] transition-colors group-hover:text-black">
                    {link.label}
                  </span>
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </a>
              ) : (
                <span
                  key={link.label}
                  className="flex min-h-24 cursor-not-allowed flex-col items-center justify-between border border-white/10 px-2 py-3 text-center text-[#494949]"
                  aria-label={`${link.label} link not added yet`}
                  aria-disabled="true"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.08em]">
                    {link.label}
                  </span>
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="w-full max-w-[20rem] justify-self-center lg:order-1 lg:max-w-[22rem] lg:justify-self-start"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-white/15 bg-[#0d0d0d]">
            {siteConfig.profileImage ? (
              <Image
                src={assetPath(siteConfig.profileImage)}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 20rem"
                className="object-cover object-center"
              />
            ) : (
              <div
                className="absolute inset-0"
                role="img"
                aria-label="Profile photo placeholder"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d1d1d_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
                <div className="absolute inset-x-[12%] top-[12%] h-px bg-[#76b900]" />
                <div className="absolute bottom-[12%] left-[12%] right-[12%] border-t border-white/20 pt-5">
                  <p className="eyebrow text-[#76b900]">Portrait / 01</p>
                  <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-[#737373]">
                    Add your photo at public/images/profile.jpg, then update
                    profileImage in data/site.ts.
                  </p>
                </div>
              </div>
            )}

            <div className="absolute right-0 top-0 grid size-14 place-items-center bg-[#76b900] text-black">
              <ArrowDownRight size={22} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-5 whitespace-nowrap text-[clamp(2.75rem,4.8vw,4.5rem)] font-medium leading-none tracking-[-0.055em]">
            {siteConfig.name}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
