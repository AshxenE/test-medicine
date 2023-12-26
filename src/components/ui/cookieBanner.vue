<template>
  <div class="cookie-banner" v-if="isVisible">
    <div class="cookie-content">
      <div class="cookie-content__header">
        <h5>🍪 We use cookies</h5>
        <img
          @click="acceptCookies"
          src="@/assets/images/svg/close.svg"
          alt="close"
        />
      </div>
      <p>
        Cookies help us deliver the best experience on our website. By using our
        website, you agree to the use of cookies.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieBanner",
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    acceptCookies() {
      this.isVisible = false;
      this.$emit("accepted");
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie-banner {
  position: fixed;
  bottom: 56px;
  left: 115px;
  display: flex;
  align-items: center;
  z-index: 10;
  animation: slide-up 0.5s ease-out forwards;
  .cookie-content {
    display: flex;
    width: 370px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(153, 153, 153, 0.2);
    @media (max-width: 390px) {
      max-width: 326px;
      position: fixed;
      bottom: -25px;
      left: -86px;
    }
    p {
      color: var(--Text-300, #968fa9);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: var(--Text-500, #413663);
      font-family: "Ubuntu", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
    }
  }
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
