import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '../styles/globals.css';
import { ConfigProvider } from 'antd';
import { theme } from '@/styles/theme/config';
import QueryProvider from '@/queries/QueryProvider';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

export const metadata: Metadata = {
  title: 'My Office',
  description: 'My Office',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
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
