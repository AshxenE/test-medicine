<template>
  <section class="contact">
    <div class="contact__information">
      <div class="contact__information-email">
        <img src="@/assets/images/svg/mail.svg" alt="mail" />
        <a target="_blank" href="mailto"> help@decmed.space </a>
      </div>
      <div class="contact__information-chat">
        <img src="@/assets/images/svg/tg.svg" alt="tg" />
        <a href="#"> Chatbot </a>
      </div>
    </div>
    <div v-if="showInfo" class="contact__info">
      <p>ООО "МЕДТЕХ"</p>
      <span>Personal data protection</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactInformation",
  props: {
    showInfo: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  color: var(--Text-300, #968fa9);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__information {
    display: flex;
    align-items: center;
    gap: 24px;
    text-decoration: none;
    &-email {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      a {
        text-decoration: none;
        color: var(--Text-300, #968fa9);
      }
    }
    &-chat {
      display: flex;
      align-items: center;
      gap: 12px;
      a {
        text-decoration: none;
        color: var(--Text-300, #968fa9);
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}
</style>
