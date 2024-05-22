'use client';
import { BorderBeam } from '@/atom';
import { GetStarted } from '@/widget';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export interface HeroProps {}

const titleMotion = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const descriptionMotion = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
};

const buttonMotion = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.0 } },
};

const imageMotion = {
  initial: { scale: 0, y: 50 },
  animate: {
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      duration: 0.5,
      delay: 1.4,
    },
  },
};

export const Hero = ({}: HeroProps) => {
  const t = useTranslations('home.hero');
  return (
    <div className="w-full flex flex-col justify-center">
      <motion.h1
        initial="initial"
        animate="animate"
        variants={titleMotion}
        className="typography-h1 text-center"
      >
        <span className="text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-clip bg-clip-text">
          Todo{' '}
        </span>
        for the future Schedule
      </motion.h1>

      <motion.h4
        initial="initial"
        animate="animate"
        variants={descriptionMotion}
        className="text-center typography-h4 font-normal text-secondary-foreground mt-16"
      >
        {t('description')}
      </motion.h4>
      <motion.div
        initial="initial"
        animate="animate"
        variants={buttonMotion}
        className="flex justify-center mt-16 z-10"
      >
        <GetStarted
          variant="outline"
          className="rounded-full px-8 sm:w-fit w-full cursor-pointer hover:scale-95"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={imageMotion}
        className="flex justify-center mt-12 relative rounded-xl mb-64"
      >
        <Image src="/assets/imgs/hero.png" width={500} height={500} alt="img" />
        <BorderBeam />
      </motion.div>
    </div>
  );
};
