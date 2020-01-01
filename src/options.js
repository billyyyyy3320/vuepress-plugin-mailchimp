const pluginOptions = MAILCHIMP_OPTIONS || {};
const { endpoint, submitText, content, title, popupConfig = {} } = JSON.parse(
  pluginOptions
);

const {
  enabled: popupEnabled = true,
  component: popupComponent = 'Popup',
  timeout: popupTimeout = 3000,
} = popupConfig;

export {
  endpoint,
  submitText,
  content,
  title,
  popupEnabled,
  popupComponent,
  popupTimeout,
};
