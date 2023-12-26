<template>
  <div class="authPage">
    <verification-form class="authPage__verification" />
    <img src="../assets/images/png/medicine.png" alt="img" />
  </div>
</template>

<script>
import VerificationForm from "@/components/common/verificationForm.vue";
export default {
  name: "authPage",
  components: { VerificationForm },
};
</script>

<style lang="scss" scoped>
.authPage {
  display: flex;
  &__verification {
    min-width: 635px;
    width: 100%;
    @media (max-width: 390px) {
      min-width: 0;
      width: 100%;
    }
  }
  img {
    max-width: 805px;
    width: 100%;
    height: 100%;
    @media (max-width: 710px) {
      display: none;
    }
  }
}
</style>
