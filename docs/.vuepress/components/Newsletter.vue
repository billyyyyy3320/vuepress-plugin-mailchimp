<template>
  <SimpleNewsletter v-slot="{ slotProps }">
    <div class="my-title">{{ slotProps.title }}</div>
    <div class="my-content">{{ slotProps.content }}</div>
    <input
      class="my-input"
      type="email"
      name="email"
      aria-label="Email"
      placeholder="Email"
      v-model="slotProps.mail"
      required
      autocapitalize="off"
      autocorrect="off"
      data-cy="email"
    />
    <button type="submit" class="my-button" data-cy="submit">
      123
    </button>
  </SimpleNewsletter>
</template>

<script>
import SimpleNewsletter from '../../../src/components/SimpleNewsletter';
export default {
  components: { SimpleNewsletter },
};
</script>

<style>
/* your style */
</style>