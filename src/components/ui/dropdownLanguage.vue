<template>
  <div class="language-dropdown">
    <span class="language-dropdown__button" @click="toggleDropdown">
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
      {{ selectedLanguage }}
    </span>
    <div class="language-dropdown__content" v-if="isOpen">
      <div class="language-dropdown__header">
        <span>🏳️ Select a language</span>
        <img
          class="language-dropdown__close"
          @click="toggleDropdown"
          src="@/assets/images/svg/close.svg"
          alt="close"
        />
      </div>
      <ul class="language-dropdown__list">
        <li
          v-for="language in languages"
          :key="language"
          @click="selectLanguage(language)"
          class="language-dropdown__item"
        >
          {{ language }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownLanguage",
  data() {
    return {
      isOpen: false,
      languages: ["English", "German", "Spanish"],
      selectedLanguage: "English",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      const button = this.$el.querySelector(".language-dropdown__button");
      if (button) {
        if (this.isOpen) {
          button.classList.add("language-dropdown__button--open");
        } else {
          button.classList.remove("language-dropdown__button--open");
        }
      }
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.toggleDropdown();
      this.$i18n.locale = language;
    },
  },
};
</script>

<style lang="scss" scoped>
.language-dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__button {
    color: var(--Text-400, #78708f);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    &--open {
      color: var(--Primary-500, #8365fe);
      svg path {
        fill: var(--Primary-500, #8365fe);
      }
    }
    &:hover,
    &:active,
    &:focus {
      color: var(--Primary-500, #8365fe);
      svg path {
        fill: var(--Primary-500, #8365fe);
      }
    }
  }
  &__content {
    position: absolute;
    top: 135%;
    right: 0;
    z-index: 10;
    display: flex;
    width: 270px;
    padding: 16px 16px 16px 20px;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(153, 153, 153, 0.2);
    @media (max-width: 590px) {
      width: 326px;
      top: 145%;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 20px;
    width: 100%;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
  }

  &__list {
    list-style: none;
    color: var(--Text-400, #78708f);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
