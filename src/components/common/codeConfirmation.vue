<template>
  <div class="code">
    <p>
      The code was sent. <a href="#" @click="changeNumber">Change the number</a>
    </p>
    <div class="code__inputs">
      <input
        :class="{ 'input-error': isCodeIncorrect }"
        type="tel"
        maxlength="1"
        v-model="code[0]"
        @input="moveFocus(0)"
      />
      <input
        :class="{ 'input-error': isCodeIncorrect }"
        type="tel"
        maxlength="1"
        v-model="code[1]"
        @input="moveFocus(1)"
      />
      <input
        :class="{ 'input-error': isCodeIncorrect }"
        type="tel"
        maxlength="1"
        v-model="code[2]"
        @input="moveFocus(2)"
      />
      <input
        :class="{ 'input-error': isCodeIncorrect }"
        type="tel"
        maxlength="1"
        v-model="code[3]"
        @input="moveFocus(3)"
      />
    </div>
    <div class="code__buttons">
      <base-button @click="submitCode" :isDisabled="timer > 0">
        {{ timer > 0 ? `New code in ${timer} seconds.` : "Send code" }}
      </base-button>
      <base-button @click="resendCode" color="white"
        >Code did not come</base-button
      >
    </div>
    <div v-if="isCodeIncorrect" class="code__invalid">
      <img src="@/assets/images/svg/alertDanger.svg" alt="invalid" />
      <span>Invalid code</span>
    </div>
    <code-modal :show-modal.sync="isModalVisible" @close="toggleModal" />
  </div>
</template>

<script>
import BaseButton from "@/components/ui/button.vue";
import CodeModal from "@/components/ui/codeModal.vue";

export default {
  name: "CodeConfirmation",
  components: { CodeModal, BaseButton },
  data() {
    return {
      code: ["", "", "", ""],
      timerDuration: 60,
      timer: null,
      isCodeIncorrect: false,
      isModalVisible: false,
    };
  },
  computed: {
    isCodeComplete() {
      return this.code.every((num) => num.length === 1);
    },
  },
  methods: {
    moveFocus(index) {
      const nextElement =
        this.$el.querySelectorAll('input[type="tel"]')[index + 1];
      if (nextElement && this.code[index].length === 1) {
        nextElement.focus();
      }
    },
    startTimer() {
      this.timer = this.timerDuration;
      const intervalId = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    },
    changeNumber() {
      this.$emit("changeNumber");
    },
    submitCode() {
      this.startTimer();
      if (this.isCodeComplete) {
        const fullCode = this.code.join("");
        if (fullCode === "1234") {
          this.isCodeIncorrect = false;
        } else {
          this.isCodeIncorrect = true;
        }
      }
    },
    resendCode() {
      this.toggleModal();
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.code {
  &__inputs {
    display: flex;
    gap: 16px;
    margin-bottom: 28px;
    margin-top: 16px;

    input {
      display: flex;
      gap: 16px;
      max-width: 81px;
      min-height: 44px;
      padding: 12px 16px;
      align-items: center;
      flex: 1 0 0;
      border-radius: 12px;
      border: 1px solid var(--Primary-600, #7646ff);
      background: var(--Gray-100, #fff);
      width: 100%;
      height: 100%;
    }
  }
  &__invalid {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--Danger-600, #da3f3d);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
  }
}
.input-error {
  color: var(--Danger-700, #c51311) !important;
  border: 1px solid var(--Danger-500, #ea6361) !important;
  background: var(--Danger-100, #ffebeb) !important;
}
</style>
