import MyButton from '../../components/form-components/MyButton.vue';
import { PlusIcon } from '@heroicons/vue/solid';


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form-Components/MyButton',
  component: MyButton,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton, PlusIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MyButton v-bind="args"><PlusIcon/></MyButton>',
});

export const Default = Template.bind({});
Default.args = {
    id: "buttonDefault",
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: "buttonDisabled",
    disabled: true
};

export const Block = Template.bind({});
Block.args = {
    id: "buttonBlock",
    block: true
};