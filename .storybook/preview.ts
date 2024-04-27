import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/index.css'

const preview: Preview = {
  decorators:[
    withThemeByClassName<ReactRenderer>({
      themes:{
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
  ],
  parameters:{  
    layout: "centered"
  }
};

export default preview;
