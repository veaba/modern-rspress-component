import path from 'path';
import { moduleTools, defineConfig } from '@modern-js/module-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { modulePluginDoc } from '@modern-js/plugin-rspress';
import { testingPlugin } from '@modern-js/plugin-testing';

export default defineConfig({
  plugins: [
    moduleTools(),
    tailwindcssPlugin(),
    modulePluginDoc({
      doc: {
        markdown: {
          showLineNumbers: true,
        },
        // globalUIComponents: [path.join(__dirname, './src/components/Icon.jsx')],

        globalUIComponents: [
          path.join(__dirname, 'src/components', 'Icon.jsx'),
        ],
      },
    }),
    testingPlugin(),
  ],
  /** 预设组件库  */
  buildPreset: 'npm-component',
});
