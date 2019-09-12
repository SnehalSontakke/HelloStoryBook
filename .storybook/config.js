import { configure } from '@storybook/angular';

function loadStories() {
  require('src/stories/index.stories.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);
