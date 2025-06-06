'use client';

import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

const Navigation = () => {
  return (
    <div className='scroll-hidden overflow-auto border-e-1 border-gray-100'>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        items={items}
        className='!border-e-0'
      />
    </div>
  );
};

export default Navigation;
