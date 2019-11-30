const { path, logger, chalk } = require("@vuepress/shared-utils");

module.exports = options => {
  if (!options.endpoint) {
    logger.warn(
      `[vuepress-plugin-mailchimp] Failed: ${chalk.cyan(
        "endpoint is required"
      )}`
    );
    return;
  }

  return {
    name: "mailchimp",

    enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],

    define: {
      MAILCHIMP_OPTIONS: JSON.stringify(options)
    }
  };
};
