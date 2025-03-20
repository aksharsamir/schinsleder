import { onMounted, computed, watch, onServerPrefetch, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { useStore } from "vuex";
import { useGtm } from "@gtm-support/vue-gtm";
import VueCookies from "vue-cookies";
import { useHead } from "@unhead/vue";
import { C as CONFIG_JSON, c as createToast } from "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-router";
import "vue-i18n";
import "axios";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const gtm = useGtm();
    const contentList = [
      // "side-menu-cms",
      // "footer_menu_information",
      // "footer_menu_service",
      // "footer_menu_quick_links",
      // "footer_contact",
      // "order_today_tomorrow_at_home",
      // "free_shipping",
      // "our_advantages",
      // "home_pictures",
      // "header_seperator_title",
      // "contact_page_block",
      // "merken",
      // "footer_copyright",
      // "bundle_tips_alternative",
      // "homepage-text",
      // "checkout_succes",
    ];
    const sliders = [
      // "home",
      // "home_gallery",
      // "payment_providers",
      // "delivery_partners",
      // "discount_header",
      // "discount_header_mobile",
    ];
    useHead({
      titleTemplate: `%s | ${CONFIG_JSON.app_name}`,
      htmlAttrs: { lang: store.getters["i18n/locale"] },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    });
    if (typeof window !== "undefined") {
      const websiteCookie = VueCookies.get("websiteCookie");
      if (websiteCookie === "true") {
        gtm.enable(true);
        gtm.debug(true);
      }
    }
    onMounted(async () => {
      store.dispatch("cart/loadCart");
      store.dispatch("user/loadUser");
    });
    computed(() => store.state.cmsPage.default);
    const generalMsg = computed(() => store.state.messages.generalMsg);
    watch(
      () => store.state.messages.msgItems.length,
      async () => {
        const msgs = await store.dispatch("messages/giveLastMessages");
        msgs.forEach((msg) => createToast(msg));
      }
    );
    async function fetchData() {
      await Promise.allSettled([
        store.dispatch("messages/loadGeneralMsg"),
        store.dispatch("cmsPage/loadDefault", { id: "home" }),
        store.dispatch("sliders/multiple", { key: "identifier", value: sliders }),
        store.dispatch("stores/load"),
        store.dispatch("product/loadBrandSlider"),
        store.dispatch("menu/loadMenu"),
        store.dispatch("user/loadCountries"),
        store.dispatch("product/productReviewRatingsMetadata"),
        store.dispatch("home/loadBundles", { store }),
        store.dispatch("cmsBlock/multiple", {
          key: "identifier",
          value: contentList
        }),
        store.dispatch("cart/loadPickupLocations")
      ]);
    }
    onServerPrefetch(fetchData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
      if (generalMsg.value.text != "") {
        _push(`<div class="top-banner" style="${ssrRenderStyle(
          `background-color:` + generalMsg.value.background_color + `; color:` + generalMsg.value.text_color + `;`
        )}"><span class="texttop">${generalMsg.value.text ?? ""}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=App-92UvyEH7.js.map
