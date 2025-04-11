import '../src/index.css'; // Import your global styles

export const parameters = {
  // actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Components'],
    },
  },
};
