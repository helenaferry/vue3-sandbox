import QuantityForm from '../components/webshop-example/QuantityForm.vue';
import MockCart from './MockCart.vue';


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/QuantityForm',
  component: QuantityForm,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QuantityForm, MockCart },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MockCart :quantity="args.quantity"><QuantityForm :product="args" /></MockCart>',
});

export const Zero = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Zero.args = {
    id: "product0",
    quantity: 0
};

export const One = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
One.args = {
    id: "product1",
    quantity: 1
};

export const FourHundred = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
FourHundred.args = {
    id: "product400",
    quantity: 400
};
