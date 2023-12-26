<template>
  <div class="base-input">
    <div class="base-input__wrapper">
      <input
        class="base-input__field"
        :type="type"
        :value="value"
        @input="updateValue"
        :name="name"
        placeholder="000 000-00-00"
        :class="{ 'base-input__field--error': $v.value.$error }"
        @click="$emit('click')"
        v-mask="mask"
      />
      <span class="base-input__error" v-if="$v.value.$error">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mask } from "vue-the-mask";
export default {
  name: "BaseInput",
  directives: { mask },
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    mask: {
      type: [String, Array],
      default: "####-###-####",
    },
    name: String,
    errorMessage: String,
  },
  validations: {
    value: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(15),
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
      this.$v.value.$touch();
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__field {
    display: block;
    min-height: 44px;
    min-width: 370px;
    width: 100%;
    padding: 12px 80px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Neutral-400, #c8c8e3);
    background: var(--Gray-100, #fff);
    @media (max-width: 390px) {
      min-width: 326px;
      width: 100%;
    }
    &--error {
      border-color: #f00;
    }
  }
}
</style>
