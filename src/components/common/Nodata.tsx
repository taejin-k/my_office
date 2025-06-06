import { Flex } from 'antd';
import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
};

const Nodata = (props: Props) => {
  const { icon, label } = props;
  return (
    <Flex vertical gap={8} align='center'>
      {icon}
      <span className='text-md text-gray-400'>{label}</span>
    </Flex>
  );
};

export default Nodata;
