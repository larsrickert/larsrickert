import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from, savedPosition) {
    const scrollContainer = document.querySelector(".onyx-page__main");
    if (!scrollContainer) {
      return savedPosition || { top: 0 };
    }

    if (to.hash) {
      const target = document.querySelector(to.hash);
      target?.scrollIntoView({ block: "start" });
    } else {
      const top = savedPosition?.top ?? 0;
      scrollContainer.scrollTo({ top });
    }

    // return false to tell Vue Router "We handled the scrolling manually, don't touch the window"
    return false;
  },
} satisfies RouterConfig;
