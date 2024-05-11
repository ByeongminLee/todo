import { Container } from '@/atom';

export interface HomeProps {}

export const Home = ({}: HomeProps) => {
  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <div className="border h-[500px]" />
      <div className="border h-[500px]" />
      <div className="border h-[500px]" />
    </Container>
  );
};
