import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => {
  const { children } = props;

  return (
    <main className='scroll-hidden flex flex-1 flex-wrap overflow-auto px-8 py-6'>
      <div className='w-full'>{children}</div>
    </main>
  );
};

export default Main;
