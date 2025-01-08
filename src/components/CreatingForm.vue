<script setup>
import { reactive, ref, watch } from "vue";
import FormWrapper from "./ui/FormWrapper.vue";
import MainButton from "./ui/MainButton.vue";
import BaseInput from "./ui/BaseInput.vue";
import CloseElement from "./ui/CloseElement.vue";
import { RouterLink } from "vue-router";

const formValues = reactive({
  title: "test title",
  beginningDate: new Date().toISOString().split("T")[0],
  frequency: 1,
  purpose: "test purpose",
  conditions: "test conditions",
});

const onSubmit = () => {
  console.log("submit");
  console.log("sss", formValues);
  new form();
};
</script>

<template>
  <FormWrapper>
    <form @submit.prevent="onSubmit" class="creating-form">
      <h2 class="form-title">Эксперимент N 1</h2>
      <div class="base-wrapper">
        <label class="form-label" for="title">Название</label>
        <BaseInput
          v-model="formValues.title"
          id="title"
          type="text"
          name="title"
          class="grow"
          required
        />
      </div>

      <div class="wrapper">
        <div class="base-wrapper">
          <label class="form-label" for="title">Дата начала</label>
          <BaseInput
            v-model="formValues.beginningDate"
            id="beginning"
            type="date"
            name="beginning"
            required
          />
        </div>

        <div class="base-wrapper">
          <label class="form-label" for="frequency"
            >Частота выполнения (в неделю)</label
          >
          <BaseInput
            v-model="formValues.frequency"
            min="1"
            max="7"
            id="frequency"
            type="number"
            name="frequency"
            required
          />
        </div>
      </div>

      <div class="base-wrapper base-wrapper--column">
        <label class="form-label" for="purpose">Цель</label>
        <BaseInput
          isTextArea
          v-model="formValues.purpose"
          id="purpose"
          class="grow textarea-field"
          type="text"
          name="purpose"
          rows="3"
          maxlength="250"
          required
        />
      </div>

      <div class="base-wrapper base-wrapper--column">
        <label class="form-label" for="conditions">Условия</label>
        <BaseInput
          isTextArea
          v-model="formValues.conditions"
          id="conditions"
          class="grow textarea-field"
          type="text"
          name="conditions"
          rows="3"
          maxlength="250"
          required
        />
      </div>
      <RouterLink to="/">
        <CloseElement is-link class="close-form-btn" />
      </RouterLink>
      <MainButton type="submit" class="createBtn">Создать</MainButton>
    </form>
  </FormWrapper>
</template>

<style scoped>
.form-title {
  text-align: center;
}

.creating-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.createBtn {
  align-self: center;
}

.base-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.base-wrapper--column {
  flex-direction: column;
}

.wrapper {
  display: flex;
  gap: 20px;
}

.grow {
  flex-grow: 1;
}

.textarea-field {
  align-self: stretch;
  resize: none;
  outline: none;
  border-radius: 20px;
}

.form-label {
  font-size: 16px;
  white-space: nowrap;
}

.close-form-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
