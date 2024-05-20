'use client';
import { BorderBeam } from '@/atom';
import { GetStarted } from '@/widget';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        할 일이 많으신가요? Todo와 함께라면 모든 것이 간편해집니다. 할 일을 정리하고,
        목표를 쉽게 이루어보세요. 사용자 친화적인 디자인으로 누구나 쉽게 사용할 수 있어요.
        당신의 하루를 더 알차게 만들어보세요! 당신의 든든한 파트너가 되어드릴게요.
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
        <Image src="/assets/imgs/logo.png" width={300} height={200} alt="img" />
        <BorderBeam />
      </motion.div>
    </div>
  );
};
