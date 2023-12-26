<template>
  <div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
    <div class="modal">
      <div class="modal__header">
        <h2>What should I do if the code doesn't arrive?</h2>
        <img
          @click="toggleModal"
          src="@/assets/images/svg/close.svg"
          alt="close"
        />
      </div>
      <ol>
        <li>
          1. You may have entered the wrong number or made a mistake in the
          number. Check everything again.
        </li>
        <li>
          2. The problem may be on the part of your mobile operator. Contact
          customer support.
        </li>
      </ol>
      <contact-information :show-info="false" />
    </div>
  </div>
</template>

<script>
import ContactInformation from "@/components/common/contactInformation.vue";

export default {
  name: "CodeModal",
  components: { ContactInformation },
  data() {
    return {};
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleModal() {
      this.$emit("update:showModal", !this.showModal);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-radius: 12px;
  background: #fff;
  display: flex;
  width: 770px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  @media (max-width: 390px) {
    width: 100%;
    height: 100%;
    max-width: 390px;
    padding: 47px 32px;
    border-radius: 0;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 390px) {
      align-items: flex-start;
    }
    img {
      cursor: pointer;
    }
  }
}
h2 {
  color: var(--Text-500, #413663);
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
ol {
  display: flex;
  flex-direction: column;
  gap: 20px;
  counter-reset: list-counter;
  padding-left: 0;
  list-style: none;
}
li {
  color: var(--Text-400, #78708f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  counter-reset: list-counter;
  padding-left: 0;
  list-style: none;
}
</style>
