# VuePress-plugin-Mailchimp

Simplifies subscribing new email addresses to a Mailchimp email list.

## Install

First of all, you have to sign up for [Mailchimp](https://mailchimp.com/).

```bash
yarn add vuepress-plugin-mailchimp -D
# OR npm install vuepress-plugin-mailchimp -D
```

## Usage

Take a look at [Using a Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html).

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    "vuepress-plugin-mailchimp",
    {
      // You need to provide this plugin with your Mailchimp endpoint in order for it
      // to know where to save the email address. See more detail in Config section.
      endpoint: ""
    }
  ]
};
```

### `<SimpleNewsletter/>`

This plugin provides a out-of-box component. Since it has been registered automatically, you can simply put it at your `.md` file.

- Source code:[SimpleNewsletter.vue](https://github.com/newsbielt703/vuepress-plugin-mailchimp/blob/master/src/SimpleNewsletter.vue)
- Usage:

```md
// .md file

...
your content
...

<SimpleNewsletter/>
```

or

```vue
// .vue file

<template>
  <SimplePagination />
</template>

<script>
import { SimpleNewsletter } from "vuepress-plugin-mailchimp/src/SimpleNewsletter";
export default {
  components: {
    SimpleNewsletter
  }
};
</script>
```

- [output](#demo)

## Config

### endpoint

- Type: `string`
- Required: true

How to get your endpoint:

![mailchimp-flow-1](./.vuepress/assets/mailchimp-flow-1.png)
![mailchimp-flow-2](./.vuepress/assets/mailchimp-flow-2.png)
![mailchimp-flow-3](./.vuepress/assets/mailchimp-flow-3.png)

### title

- Type: `string`
- Required: false
- Default: `'NewSletter'`

To be rendered as newsletter's title in `<SimpleNewsletter/>`

### content

- Type: `string`
- Required: false
- Default: `'Subscribe to get my lastest content. No spam.'`

To be rendered as newsletter's content in `<SimpleNewsletter/>`

### popupConfig

- Type: `object`
- Required: false
- Default: See below

#### enabled

- Type: `boolean`
- Default: true

Showing the popup after subscribing. You can stop showing the popup by setting to `false`.

#### popupComponent

- Type: `string`
- Default: `Popup`

A custom component to replace the default popup component.

**Also see**:

- [UI Customization](#ui-customization)

#### timeout

- Type: `number`
- Default: 3000

## UI Customization

The default popup component provides a default slot which gives you the ability to fully control the appearance of the popup.

First, you need to create a global component (e.g. MyPopup) at .vuepress/components. There're some slot props `enabled`, `message`, `isError` to simplifies your customization:

```vue
<template>
  <Popup v-slot="{ enabled, message, isError }">
    <div v-if="enabled" class="my-submit-popup" :class="{ error: isError }">
      <h1>UI Customization</h1>
      {{ message }}
    </div>
  </Popup>
</template>

<script>
import Popup from "vuepress-plugin-mailchimp/src/components/Popup";
export default {
  components: { Popup }
};
</script>

<style lang="stylus">
.submit-popup
  position fixed
  right 1em
  top 5em
  padding 1em
  border-radius 3px
  background green
  text-align center
  z-index 2
  button
    margin-top 0.5em
    padding 0.25em 2em
  &.error
    border-color red
</style>
```

## Demo

<SimpleNewsletter/>
