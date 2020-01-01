<template>
  <form class="newsletter" @submit.prevent="onSubmit">
    <slot :slotProps="slotProps">
      <div class="newsletter__title">{{ slotProps.title }}</div>
      <div class="newsletter__content">{{ slotProps.content }}</div>
      <input
        v-model="slotProps.mail"
        class="newsletter__input"
        type="email"
        name="email"
        aria-label="Email"
        placeholder="Email"
        required
        autocapitalize="off"
        autocorrect="off"
        data-cy="email"
      />
      <button type="submit" class="newsletter__button" data-cy="submit">
        {{ slotProps.submitText }}
      </button>
    </slot>
  </form>
</template>

<script>
import addToMailchimp from '../mailchimpSubscribe';
import event from '../event';
import { submitText, content, title, popupEnabled } from '../options';

export default {
  data() {
    return {
      slotProps: {
        mail: '',
        title: title || 'Newsletter',
        content: content || 'Subscribe to get my lastest content. No spam.',
        submitText: submitText || 'Subscribe',
      },
    };
  },
  methods: {
    onSubmit() {
      addToMailchimp(this.slotProps.mail)
        .catch(err => {
          this.slotProps.mail = '';
          if (popupEnabled) event.$emit('submited', { result: 'error' });
        })
        .then(res => {
          this.slotProps.mail = '';
          if (popupEnabled) event.$emit('submited', res);
        });
    },
  },
};
</script>

<style lang="stylus">
.newsletter
  text-align center
  width 100%
  max-width 420px
  margin 1.5rem auto
  padding 1.8rem 2.3rem
  border-radius 3px
  background #f8f8f8
  font-size 1rem
  box-sizing border-box
  color $textColor

  &__title
    font-size 1.7rem

  &__content
    margin-top 1.5rem
    margin-bottom 1.5rem
    line-height 1.7rem

  &__input
    font-size inherit
    border 1px solid $borderColor
    width 100%
    padding 0.6rem 1.2rem
    box-sizing border-box
    border-radius 3px
    margin-bottom 0.8rem
    outline none

  &__button
    font-size inherit
    border none
    cursor pointer
    background $accentColor
    color #fff
    padding 0.6rem 1.8rem
    box-sizing border-box
    border-radius 3px
    width 100%
    outline none
</style>
