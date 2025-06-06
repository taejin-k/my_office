import type { ThemeConfig } from 'antd';
import { MENU_COMMON_THEME } from './menu/common';

export const theme: ThemeConfig = {
  components: {
    Menu: {
      ...MENU_COMMON_THEME,
    },
  },
};
