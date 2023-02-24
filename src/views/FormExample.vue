<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import { ref, inject } from 'vue';
const locale = ref('en');
const config = inject(Symbol.for('FormKitConfig'));
const myForm = ref(null);
const submitted = ref(false);
const formData = ref({});
const validationMessages = ref([]);
const submitHandler = async () => {
  console.log('submitHandler');
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  validationMessages.value = [];
  submitted.value = true;
}
const doValidationSummary = () => { // when do I run this?
  console.log('doValidationSummary');
  validationMessages.value = [];
  myForm.value.node.children.map(node =>
    Object.keys(node.context.messages).map(key =>
      validationMessages.value.push({
        field: node.context.messages[key].meta.i18nArgs[0].name,
        message: node.context.messages[key].value
      })));
}
const changeLocale = () => { // why isn't the German showing?
  console.log("config", config);
  locale.value = locale.value === 'en' ? 'de' : 'en';
  config.locale = locale.value;
}

const receipt = myForm ?? myForm.value.node.on('input.deep', ({ payload }) => {
  console.log('received input: ', payload)
});

</script>

<template>
  <PageLayout>
    <a @click.prevent="changeLocale" href="#">
      <span v-if="locale === 'en'">🇩🇪 config.locale = 'de'</span>
      <span v-if="locale === 'de'">🇺🇸 config.locale = 'en'</span>
    </a>
    <p>Submitted: {{ submitted }}</p>
    <div v-if="validationMessages.length" className="border p-2">
      <p>Följande fält innehåller fel:</p>
      <ul>
        <li v-for="validationMessage in validationMessages" :key="validationMessage.field">
          {{ validationMessage.field }}: {{ validationMessage.message }}
        </li>
      </ul>
    </div>
    <FormKit ref="myForm" type="form" id="myForm" v-model="formData" :form-class="submitted ? 'hide' : 'show'"
      @submit="submitHandler" :actions="false">
      <FormKit type="text" id="given-name" name="given-name" autocomplete="given-name" label="Förnamn"
        validation="required" />
      <FormKit type="text" name="family-name" autocomplete="family-name" label="Efternamn" validation="required" />
      <FormKit type="text" name="email" autocomplete="email" label="E-postadress" validation="required|email" />
      <FormKit type="text" name="street-address" autocomplete="street-address" label="Gatuadress"
        validation="required" />
      <FormKit type="text" name="postal-code" autocomplete="postal-code" label="Postnummer"
        validation="required|+number" help="Ange endast siffror"/>
      <div className="double">
        <FormKit type="password" name="password" label="Lösenord" validation="required|length:8|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Inkludera minst ett specialtecken',
          }" help="Minst 8 tecken, inkl. minst ett specialtecken" autocomplete="new-password" />
        <FormKit type="password" name="password_confirm" label="Bekräfta lösenord" validation="required|confirm"
          help="Måste matcha lösenordet ovan" autocomplete="new-password" />
      </div>
      <FormKit type="submit" @click="doValidationSummary">
        Click me!
      </FormKit>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
    <pre>{{ formData }}</pre>
  </PageLayout>
</template>