import { popupEnabled } from "./options";

export default ({ Vue }) => {
  Vue.component("SimpleNewsletter", () =>
    import("./components/SimpleNewsletter.vue")
  );
  if (popupEnabled) {
    Vue.component("Popup", () => import("./components/Popup.vue"));
  }
};
