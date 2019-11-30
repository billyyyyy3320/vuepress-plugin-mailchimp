<template>
  <form @submit.prevent="onSubmit" class="newsletter">
    <div class="newsletter__title">{{ title }}</div>
    <div class="newsletter__content">{{ content }}</div>
    <input
      class="newsletter__input"
      type="email"
      name="email"
      aria-label="Email"
      placeholder="type your email"
      v-model="mail"
      required
      autocapitalize="off"
      autocorrect="off"
    />
    <input type="submit" class="newsletter__button" />
  </form>
</template>

<script>
import addToMailchimp from "./mailchimpSubscribe";
const { content, title } = JSON.parse(MAILCHIMP_OPTIONS);

export default {
  data() {
    return {
      mail: "",
      title: title || "NewSletter",
      content: content || "Subscribe to get my lastest content. No spam."
    };
  },
  methods: {
    onSubmit() {
      addToMailchimp(this.mail).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="stylus"></style>
