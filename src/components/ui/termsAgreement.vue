<template>
  <div class="terms-agreement">
    <p>
      {{ $t("message.terms") }}
      <a class="terms-agreement__link" href="qq">{{ $t("message.link") }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "termsAgreement",
};
</script>

<style lang="scss" scoped>
.terms-agreement {
  color: var(--Text-400, #78708f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &__link {
    color: var(--Text-400, #78708f);
  }
}
</style>
