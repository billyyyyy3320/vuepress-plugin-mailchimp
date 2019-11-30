const { description } = require("../../package");

module.exports = {
  title: "vuepress-plugin-disqus-comment",

  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  themeConfig: {
    repo: "newsbielt703/vuepress-plugin-mailchimp",
    sidebar: "auto",
    smoothScroll: true
  },
  plugins: [
    [
      require("../../src/index"),
      {
        endpoint:
          "https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138",
        content: "Hi there, I am Billy.",
        callback: '() => {alert("Awesome!");}'
      }
    ]
  ]
};
