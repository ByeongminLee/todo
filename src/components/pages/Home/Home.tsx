'use client';

import { GetStarted } from '../../widget/GetStarted';
import { Container } from '../../atom/Container';
import { TextReveal } from '../../atom/TextReveal';
import { Features } from '../../feature/Features';
import { Hero } from '../../feature/Hero';
import Image from 'next/image';

export interface HomeProps {}

export const Home = ({}: HomeProps) => {
  return (
    <Container as="main" className="w-full p-4 mx-auto min-h-screen">
      <div className="z-10 mt-32">
        <div className="max-w-4xl mx-auto relative">
          <Hero />
        </div>

        <div className="absolute opacity-100 inset-0 z-[1] h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute inset-x-0 top-0 m-auto h-[410px] w-[410px] rounded-full bg-indigo-400 opacity-10 blur-[100px]"></div>
        </div>
      </div>

      <div className="z-20 mt-64 max-w-4xl mx-auto">
        <TextReveal text="Todo for the future Schedule">
          <div className="flex flex-col gap-4">
            <Image src={'/assets/imgs/home1.png'} width={400} height={500} alt="home" />
            <GetStarted
              variant="outline"
              className="rounded-full px-8 w-full cursor-pointer hover:scale-95"
            />
          </div>
        </TextReveal>
      </div>

      <div className="z-20 my-64 max-w-4xl mx-auto">
        <Features />
      </div>
    </Container>
  );
};
