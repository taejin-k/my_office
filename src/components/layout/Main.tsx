import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default Main;
