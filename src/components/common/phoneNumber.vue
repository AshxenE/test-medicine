<template>
  <div class="phone-number">
    <span class="phone-number__label">{{ $t("message.number") }}</span>
    <div class="phone-number__form">
      <dropdown-selector
        @update:mask="updateMask"
        @update:code="$emit('updateCode', $event)"
        class="phone-number__dropdown"
      />
      <base-input
        :mask="currentMask"
        class="phone-number__input"
        :value="internalValue"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
import DropdownSelector from "@/components/ui/dropdownSelect.vue";
import BaseInput from "@/components/ui/input.vue";

export default {
  name: "phoneNumber",
  components: { BaseInput, DropdownSelector },
  props: {
    value: String,
  },
  data() {
    return {
      currentMask: "####-###-####",
      internalValue: "",
    };
  },
  watch: {
    value(newVal) {
      this.internalValue = newVal;
    },
    internalValue(newVal) {
      this.$emit("input", newVal);
    },
  },
  methods: {
    updateMask(mask) {
      this.currentMask = mask;
      this.internalValue = "";
    },
    handleInput(value) {
      this.internalValue = value;
      this.$emit("input", value);
    },
  },

  mounted() {
    this.internalValue = this.value;
  },
};
</script>
<style lang="scss" scoped>
.phone-number {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__form {
    display: flex;
    position: relative;
  }
  &__label {
    color: var(--Text-400, #78708f);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  &__input {
    position: relative;
  }
  &__dropdown {
    position: absolute;
    top: 11px;
    left: 16px;
    z-index: 1;
  }
}
</style>
