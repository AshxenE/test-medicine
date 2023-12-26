<template>
  <button
    :class="['btnClass', color, { disabled: isDisabled }]"
    :disabled="isDisabled"
    @click="click"
  >
    <slot>Send code</slot>
  </button>
</template>

<script>
export default {
  name: "baseButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "basic",
    },
  },
  methods: {
    click(event) {
      if (!this.isDisabled) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btnClass {
  display: flex;
  height: 44px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  max-height: 66px;
  max-width: 370px;
  width: 100%;
  @media (max-width: 390px) {
    max-width: 326px;
    width: 100%;
  }
  &.basic {
    border-radius: 12px;
    background: var(--Primary-600, #7646ff);
    color: var(--Neutral-White, var(--Gray-100, #fff));
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    white-space: nowrap;
    cursor: pointer;
    border: none;
  }
  &.white {
    border-radius: 12px;
    background: var(--Neutral-100, #f9f9fb);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    white-space: nowrap;
    cursor: pointer;
    border: none;
    color: var(--Text-500, #413663);
  }
  &.disabled {
    background: var(--Primary-200, #f1ecff);
    color: var(--Primary-300, #d8d1ff);
    cursor: not-allowed;
    &:hover {
      background-color: #f1ecff;
    }
  }
}
</style>
