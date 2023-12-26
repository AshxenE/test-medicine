<template>
  <section class="verification-form">
    <div class="verification-form__language">
      <dropdown-language />
    </div>
    <div class="verification-form__content">
      <div class="verification-form__main">
        <div class="verification-form__center">
          <div class="verification-form__header">
            <h4 class="verification-form__subtitle">docmed.space</h4>
            <div class="verification-form__mobile">
              <h4 class="verification-form__mobile-subtitle">docmed.space</h4>
              <dropdown-language />
            </div>
            <h1 class="verification-form__main-title">
              {{ $t("message.name") }}
            </h1>
            <h2 class="verification-form__title">
              {{ $t("message.evidence") }}
            </h2>
            <h3 class="verification-form__title">{{ $t("message.club") }}</h3>
          </div>
          <div>
            <div v-if="step === 1">
              <phone-number
                @updateCode="handleCodeUpdate"
                v-model="phoneNumber"
              />
              <div class="verification-form__body">
                <base-button
                  @click="onSendCode"
                  class="verification-form__button"
                  :is-disabled="!isCompleteNumber"
                >
                  {{ $t("message.sendCode") }}
                </base-button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="step === 2">
          <code-confirmation @changeNumber="goToFirstStep" />
        </div>
        <div v-if="step === 1" class="verification-form__terms">
          <terms-agreement />
        </div>
      </div>
      <div class="verification-form__contact">
        <contact-information />
      </div>
    </div>
    <cookie-banner />
  </section>
</template>

<script>
import BaseButton from "@/components/ui/button.vue";
import TermsAgreement from "@/components/ui/termsAgreement.vue";
import DropdownLanguage from "@/components/ui/dropdownLanguage.vue";
import ContactInformation from "@/components/common/contactInformation.vue";
import PhoneNumber from "@/components/common/phoneNumber.vue";
import CodeConfirmation from "@/components/common/codeConfirmation.vue";
import CookieBanner from "@/components/ui/cookieBanner.vue";

export default {
  name: "VerificationForm",
  components: {
    CookieBanner,
    CodeConfirmation,
    PhoneNumber,
    ContactInformation,
    DropdownLanguage,
    TermsAgreement,
    BaseButton,
  },
  data() {
    return {
      step: 1,
      phoneNumber: "",
      selectedCountry: "UAE",
      options: [
        { country: "UAE", code: "+971", mask: "####-###-####" },
        { country: "Russia", code: "+7", mask: "(###) ###-##-##" },
        { country: "Uzbekistan", code: "+998", mask: "(##) ###-####" },
      ],
      phoneFormats: {
        UAE: 13,
        Russia: 15,
        Uzbekistan: 13,
      },
    };
  },
  computed: {
    isCompleteNumber() {
      const requiredLength = this.phoneFormats[this.selectedCountry];
      return this.phoneNumber.length === requiredLength;
    },
  },
  methods: {
    onSendCode() {
      if (this.isCompleteNumber) {
        this.step = 2;
      }
    },
    goToFirstStep() {
      this.step = 1;
    },
    handleCodeUpdate(code) {
      const foundOption = this.options.find((option) => option.code === code);
      if (foundOption) {
        this.selectedCountry = foundOption.country;
      } else {
        this.selectedCountry = null;
      }
      this.phoneNumber = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.verification-form {
  position: relative;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__language {
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px 30px;
    @media (max-width: 390px) {
      display: none;
    }
  }
  &__main {
    max-width: 370px;
    margin: 0 auto;
    padding: 56px 0;
    @media (max-width: 390px) {
      max-width: 326px;
      margin: 0 auto;
      padding: 47px 0 32px 0;
    }
  }

  &__contact {
    max-width: 370px;
    margin: 0 auto;
    padding-bottom: 56px;
    width: 100%;
    @media (max-width: 390px) {
      max-width: 326px;
      margin: 0 auto;
      padding: 47px 0 32px 0;
    }
  }

  &__header {
    margin-bottom: 32px;
  }

  &__mobile {
    display: none;
    @media (max-width: 390px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    }
    &-subtitle {
      color: #000;
      font-family: "Ubuntu", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
    }
  }
  &__main-title {
    color: #7646ff;
    font-family: "Ubuntu", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
  }
  &__title {
    color: #000;
    font-family: "Ubuntu", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
  }
  &__subtitle {
    color: #000;
    font-family: "Ubuntu", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 32px;
    @media (max-width: 390px) {
      display: none;
    }
  }
  &__body {
    margin-top: 28px;
    margin-bottom: 28px;
  }
  &__input {
    display: flex;
    align-items: center;
  }

  &__dropdown {
    margin-bottom: 1rem;
  }

  &__button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #6200ea;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #5f00e0;
    }
  }

  &__terms {
    font-size: 0.875rem;
  }
}
</style>
