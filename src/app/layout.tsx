import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import QueryProvider from '@/queries/QueryProvider';
import { theme } from '@/styles/theme/config';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, Flex } from 'antd';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css';
import Navigation from '@/components/layout/Navigation';

export const metadata: Metadata = {
  title: 'My Office',
  description: 'My Office',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <QueryProvider>
              <Header />
              <Flex className='h-[calc(100vh_-_64px)]'>
                <Navigation />
                <Main>{children}</Main>
              </Flex>
            </QueryProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
