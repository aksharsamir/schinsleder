import { computed, mergeProps, useSSRContext, watch, onServerPrefetch, onMounted, onUpdated, nextTick, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useStore } from "vuex";
import { C as CONFIG_JSON, c as createToast } from "../entry-server.js";
import { useHead } from "@unhead/vue";
import { useGtm } from "@gtm-support/vue-gtm";
import VueCookies from "vue-cookies";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fat } from "@fortawesome/pro-thin-svg-icons";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-i18n";
import "axios";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
const _sfc_main$1 = {
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isLoading = computed(() => store.getters.isLoading);
    return (_ctx, _push, _parent, _attrs) => {
      if (isLoading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-overlay" }, _attrs))} data-v-75cb1ff0><div class="loader" data-v-75cb1ff0></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/Loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75cb1ff0"]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(far);
    library.add(fat);
    const store = useStore();
    const gtm = useGtm();
    store.dispatch("setLoading", true);
    const contentList = [
      "contact",
      "footer_contact",
      "footer_menu_catalogus",
      "footer_menu_catalogus_2",
      "footer_copyright"
    ];
    const sliders = [
      "home",
      "home_gallery",
      "payment_providers",
      "delivery_partners",
      "discount_header",
      "discount_header_mobile"
    ];
    if (typeof window !== "undefined") {
      const websiteCookie = VueCookies.get("websiteCookie");
      if (websiteCookie === "true") {
        gtm.enable(true);
        gtm.debug(true);
      }
    }
    const generalMsg = computed(() => store.state.messages.generalMsg);
    useHead({
      titleTemplate: `%s | ${CONFIG_JSON.app_name}`,
      htmlAttrs: { lang: store.getters["i18n/locale"] },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    });
    watch(
      () => store.state.messages.msgItems.length,
      async () => {
        const msgs = await store.dispatch("messages/giveLastMessages");
        msgs.forEach((msg) => {
          createToast(msg);
        });
      }
    );
    const router = useRouter();
    async function fetchData() {
      store.dispatch("forms/loadForms");
      await Promise.allSettled([
        // store.dispatch("messages/loadGeneralMsg"),
        store.dispatch("cmsPage/loadDefault", { id: "home" }),
        store.dispatch("sliders/multiple", { key: "identifier", value: sliders }),
        // store.dispatch("stores/load"),
        store.dispatch("blog/load"),
        // store.dispatch("product/loadBrandSlider"),
        store.dispatch("menu/loadMenu"),
        store.dispatch("sidebar/loadSidebarCategory"),
        store.dispatch("user/loadCountries"),
        // store.dispatch("product/productReviewRatingsMetadata"),
        store.dispatch("home/loadBundles", { store }),
        store.dispatch("cmsBlock/multiple", { key: "identifier", value: contentList })
        // store.dispatch("cart/loadPickupLocations"),
      ]);
    }
    onServerPrefetch(fetchData);
    onMounted(() => {
      window.redirect = redirect;
      {
        const app = document.getElementById("app");
        if (!app.classList.contains("fkv")) {
          app.classList.add("sl");
        }
      }
      store.dispatch("user/loadUser", { store });
      if (!store.getters["cart/getCartIsLoaded"]) {
        store.dispatch("cart/loadCart", { store });
      }
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
        let helloRetail = document.createElement("script");
        helloRetail.async = true;
        if (CONFIG_JSON.helloRetail.code) {
          loadHelloRetail();
        }
      }
      store.dispatch("setLoading", false);
    });
    onUpdated(() => {
      {
        const app = document.getElementById("app");
        if (!app.classList.contains("sl")) {
          app.classList.add("sl");
        }
      }
      nextTick(() => {
        if (self.ADDWISH_PARTNER_NS) {
          self.ADDWISH_PARTNER_NS.api.reload();
        } else {
          loadHelloRetail();
        }
      });
    });
    function redirect(e) {
      e == null ? void 0 : e.preventDefault();
      router.push(e == null ? void 0 : e.currentTarget.getAttribute("href"));
    }
    function loadHelloRetail() {
      let helloRetail = document.createElement("script");
      helloRetail.async = true;
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.code) {
        helloRetail.src = "https://d1pna5l3xsntoj.cloudfront.net/scripts/company/awAddGift.js#" + CONFIG_JSON.helloRetail.code;
        document.head.appendChild(helloRetail);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Loader, null, null, _parent));
      if (generalMsg.value.text != "") {
        _push(`<div class="top-banner" style="${ssrRenderStyle(`background-color:` + generalMsg.value.background_color + `; color:` + generalMsg.value.text_color + `;`)}"><span class="texttop">${generalMsg.value.text ?? ""}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`<div class="c-toaster-top-full position-absolute"><div class="c-toaster-slot" id="c-toaster-slot"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=App-C0Yuxh93.js.map
