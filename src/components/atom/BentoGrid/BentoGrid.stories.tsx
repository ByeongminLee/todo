import type { Meta, StoryObj } from '@storybook/react';
import { BentoGrid } from './BentoGrid';
import { BentoCard } from './BentoCard';
import {
  BarChart3,
  CalendarIcon,
  FormInputIcon,
  GlobeIcon,
  Languages,
} from 'lucide-react';

const meta = {
  title: 'DesignSystem/Atom/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BentoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const sample = [
  {
    Icon: BarChart3,
    name: '차트',
    description: 'Todo 리스트 Chart로 보여줍니다.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: FormInputIcon,
    name: '카테고리',
    description: '다양한 카테고리로 분류합니다.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: Languages,
    name: '다국어 지원',
    description: '여러 언어를 지원합니다.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: CalendarIcon,
    name: '일정',
    description: '남은 일정을 확인할 수 있습니다.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: GlobeIcon,
    name: '소셜 로그인',
    description: '소셜 로그인으로 간편하게 시작하세요.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
];

export const Example: Story = {
  args: {
    children: null,
  },
  render: () => {
    return (
      <BentoGrid className="lg:grid-rows-3">
        {sample.map(feature => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  },
};
