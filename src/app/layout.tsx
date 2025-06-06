import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import QueryProvider from '@/queries/QueryProvider';
import { theme } from '@/styles/theme/config';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css';

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
      <body className={`antialiased`}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <QueryProvider>
              <Header />
              <Main>{children}</Main>
            </QueryProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
