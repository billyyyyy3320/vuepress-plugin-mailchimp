const { endpoint, content, title, popupConfig = {} } = JSON.parse(
  MAILCHIMP_OPTIONS
);

const {
  enabled: popupEnabled = true,
  component: popupComponent = "Popup",
  timeout: popupTimeout = 3000
} = popupConfig;

export { endpoint, content, title, popupEnabled, popupComponent, popupTimeout };
