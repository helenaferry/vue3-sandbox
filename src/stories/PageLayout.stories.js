import PageLayout from '../components/PageLayout.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/PageLayout',
  component: PageLayout,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PageLayout },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PageLayout>{{ args.slotContent }}</PageLayout>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    slotContent: "Primary slot content"
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Secondary.args = {
    slotContent: "Secondary slot content"
};