<script setup lang="ts">
import { ref } from 'vue';
import PageLayout from "../components/PageLayout.vue";
import MyForm from "../components/form-components/MyForm.vue";
import MyInput from "../components/form-components/MyInput.vue";
const formData = ref({
  email: "hej"
});
</script>

<template>
  <PageLayout>
    Hellluuuuuuu
    <MyForm v-model="formData">
          <FormKit type="text" id="given-name" name="given-name" autocomplete="given-name" label="Förnamn"
        validation="required" />
      <MyInput id="name" type="text"></MyInput>
      <p>Hej hopp</p>
      <MyInput variant="email" type="text"></MyInput>
    </MyForm>
    <pre>
      {{ formData }}
    </pre>
  </PageLayout>
</template>
