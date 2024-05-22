'use client';

import {
  BarChart3,
  CalendarIcon,
  FormInputIcon,
  GlobeIcon,
  Languages,
} from 'lucide-react';
import { OrbitingCircles } from '../../atom/OrbitingCircles';
import { BentoGrid, BentoCard } from '../../atom/BentoGrid';
import { BarChart } from '../../atom/BarChart';
import { Badge } from '../../atom/Badge';
import { Scheduler } from '../../widget/Scheduler';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export interface FeaturesProps {}

const motionVariant = {
  initial: { scale: 0, y: 50 },
  animate: {
    scale: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.0,
      delay: 0.2,
    },
  },
};

export const Features = ({}: FeaturesProps) => {
  const t = useTranslations('home.features');
  const data = [
    {
      Icon: BarChart3,
      name: t('data1.name'),
      description: t('data1.description'),
      background: (
        <BarChart
          className="sm:max-h-[450px] max-h-[200px] py-2 sm:py-8 sm:max-w-[95%] max-w-full opacity-60"
          width={'100%'}
          height={450}
          data={[
            {
              name: 'Jan',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Feb',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Mar',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Apr',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'May',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Jun',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Jul',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Aug',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Sep',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Oct',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Nov',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
            {
              name: 'Dec',
              value: Math.floor(Math.random() * 5000) + 1000,
            },
          ]}
        />
      ),
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      Icon: FormInputIcon,
      name: t('data2.name'),
      description: t('data2.description'),
      background: (
        <div className="absolute sm:-right-50 sm:-top-15 opacity-60 w-full flex justify-end">
          <Scheduler />
        </div>
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      Icon: Languages,
      name: t('data3.name'),
      description: t('data3.description'),
      background: (
        <div className="flex items-center justify-center w-full h-8 pr-10">
          <p className="w-full text-right typography-muted text-3xl lg:text-sm lg:h-8 h-20 mt-20 lg:mt-2">
            한국어 | English
          </p>
        </div>
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      Icon: CalendarIcon,
      name: t('data4.name'),
      description: t('data4.description'),
      background: (
        <div className="sm:absolute -right-20 -top-20 opacity-60 p-4 w-full h-full">
          <div className="flex gap-2 flex-wrap items-center">
            <Badge style={{ background: '#d8dd2f' }}>Daily</Badge>
            <Badge style={{ background: '#FFA500' }}>Todo</Badge>
            <Badge style={{ background: '#006aff' }}>Shopping</Badge>
            <Badge style={{ background: '#d80936' }}>None</Badge>
            <Badge style={{ background: '#00ff99' }}>Develop</Badge>
            <Badge style={{ background: '#00e1ff' }}>Study</Badge>
            <Badge style={{ background: '#FF6347' }}>Work</Badge>
            <Badge style={{ background: '#ae00ff' }}>Private</Badge>
            <Badge style={{ background: '#0026ff' }}>Important</Badge>
            <Badge style={{ background: '#b7b939' }}>Marketing</Badge>
            <Badge style={{ background: '#FF69B4' }}>Meet Up</Badge>
            <Badge style={{ background: '#14ff27' }}>Write</Badge>
            <Badge style={{ background: '#ff004c' }}>Project</Badge>
            <Badge style={{ background: '#00d0ff' }}>Coding</Badge>
            <Badge style={{ background: '#ffd932' }}>Game</Badge>
            <Badge style={{ background: '#04ff00' }}>Routine</Badge>
            <Badge style={{ background: '#ff3700' }}>Search</Badge>
            <Badge style={{ background: '#00ff6a' }}>React</Badge>
            <Badge style={{ background: '#323ccc' }}>Next</Badge>
            <Badge style={{ background: '#ccff00' }}>Vue</Badge>
            <Badge style={{ background: '#bf00ff' }}>Svelte</Badge>
            <Badge style={{ background: '#00fff2' }}>Nest</Badge>
            <Badge style={{ background: '#ff5454' }}>TypeScript</Badge>
          </div>
        </div>
      ),
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      Icon: GlobeIcon,
      name: t('data5.name'),
      description: t('data5.description'),
      background: (
        <div className="relative flex w-full h-[200px] sm:h-[250px] items-center justify-center overflow-hidden rounded-lg">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent">
            Social Login
          </span>

          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={60}
          >
            <div className="bg-[#FEE500] flex items-center rounded-full w-24 p-3">
              <svg
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
              >
                <path
                  fill="#000000"
                  d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
                ></path>
              </svg>
            </div>
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={100}
            duration={20}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
          </OrbitingCircles>
        </div>
      ),
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={hasAnimated ? 'animate' : 'initial'}
      variants={motionVariant}
      className="relative z-10"
    >
      <BentoGrid className="lg:grid-rows-3 z-10">
        {data.map(feature => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </motion.div>
  );
};
