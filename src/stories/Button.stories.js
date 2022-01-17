import Button from './Button.vue';

// Story metadata
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// Utility functions
const createButtonStory = (args) => {
  const story = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { AppButton: Button },
    // More on args: https://storybook.js.org/docs/vue/writing-stories/args
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<app-button v-bind="args" />',
  });

  story.args = args;

  return story;
};

// Stories
export const Primary = createButtonStory({
  primary: true,
  label: 'Button',
});

export const Secondary = createButtonStory({
  label: 'Button',
});

export const Small = createButtonStory({
  size: 'small',
  label: 'Button',
});

export const Large = createButtonStory({
  size: 'large',
  label: 'Button',
});
