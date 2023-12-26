<template>
  <div class="dropdown">
    <input
      type="tel"
      class="dropdown__input"
      @click="toggleDropdown"
      v-model="phoneNumber"
      placeholder="000 000-00-00"
      readonly
    />
    <div @click="toggleDropdown" class="dropdown__arrow">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icons/chevron-down">
          <path
            id="Vector"
            d="M12.6167 6.00016C12.6167 6.20016 12.55 6.3335 12.4167 6.46683L8.41671 10.4668C8.28337 10.5335 8.15004 10.6668 7.95004 10.6668C7.75004 10.6668 7.61671 10.6002 7.48337 10.4668L3.48337 6.46683C3.28337 6.20016 3.28337 5.80016 3.48337 5.5335C3.68337 5.26683 4.15004 5.26683 4.35004 5.5335L7.88337 9.06683L11.4167 5.5335C11.6167 5.46683 11.8167 5.3335 11.95 5.3335C12.0834 5.3335 12.2834 5.40016 12.4167 5.5335C12.55 5.66683 12.6167 5.86683 12.6167 6.00016Z"
            fill="#78708F"
          />
        </g>
      </svg>
    </div>
    <div v-if="showDropdown" class="dropdown__content">
      <div class="dropdown__header">
        ☎️ Select a region
        <img
          class="dropdown__close"
          src="@/assets/images/svg/close.svg"
          alt="close"
          @click="toggleDropdown"
        />
      </div>
      <ul class="dropdown__list">
        <li
          v-for="(option, key) in options"
          :key="key"
          @click="selectOption(option)"
        >
          {{ option.country }} ({{ option.code }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownSelector",
  data() {
    return {
      internalValue: this.value,
      showDropdown: false,
      selectedOption: null,
      phoneNumber: "+971 ",
      options: [
        { country: "UAE", code: "+971", mask: "####-###-####" },
        { country: "Russia", code: "+7", mask: "(###) ###-##-##" },
        { country: "Uzbekistan", code: "+998", mask: "(##) ###-####" },
        { country: "UAE", code: "+971", mask: "####-###-####" },
        { country: "Russia", code: "+7", mask: "(###) ###-##-##" },
      ],
      selectedCode: "+971",
      rawNumber: "",
    };
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    phoneMask() {
      return this.selectedOption ? this.selectedOption.mask : "+###-#-###-####";
    },
    displayNumber: {
      get() {
        return this.selectedCode + " " + this.rawNumber;
      },
      set(value) {
        const parts = value.split(" ");
        if (parts.length > 1) {
          this.rawNumber = parts.slice(1).join(" ");
        }
      },
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    updateValue(val) {
      this.internalValue = val;
      this.$v.value.$touch();
      this.$emit("input", val);
    },
    selectOption(option) {
      this.$emit("update:mask", option.mask);
      this.$emit("update:code", option.code);
      this.phoneNumber = option.code + " ";
      this.internalValue = option.code + " ";
      this.selectedOption = option;
      this.toggleDropdown();
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: flex;
  &__input {
    width: 100%;
    position: relative;
    color: var(--Text-500, #413663);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
    background: var(--Gray-100, #fff);
    border: none;
    min-width: 40px;
    max-width: 40px;
    outline: none;
  }
  &__label {
    color: var(--Text-400, #78708f);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  &__arrow {
    position: absolute;
    left: 39px;
    top: 58%;
    transform: translateY(-50%);
  }
  &__content {
    position: absolute;
    display: flex;
    width: 370px;
    left: -15px;
    top: 42px;
    padding: 16px 16px 16px 20px;
    align-items: flex-start;
    background: #fff;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.2);
    @media (max-width: 390px) {
      width: 326px;
    }
  }
  .dropdown__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: var(--Text-500, #413663);
    /* Headers/H5 */
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
  }
  .dropdown__list {
    color: var(--Text-400, #78708f);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .dropdown__list li {
    list-style: none;
  }
}
</style>
