import { computed, onMounted, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import VueCookies from "vue-cookies";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$3 } from "./SidebarLinks-DR6xjFcp.js";
import { R as Retargeted } from "./Retargeted-CvqGtd9U.js";
import { C as CONFIG_JSON } from "../entry-server.js";
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "vue-router";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BLink";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "./BlockSimple-BHbXwFf2.js";
import "@gtm-support/vue-gtm";
import "vue3-carousel/dist/carousel.es.js";
import "./ProductCard-zGPQ-XdA.js";
import "./heart-DpQotoa5.js";
import "./default-placeholder-image-BaAVikZT.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
const _imports_0 = "/assets/not-found-DW5Yjtag.png";
const _sfc_main = {
  __name: "PageNotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useStore();
    const hrEnabled = computed(
      () => CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled
    );
    useHead({
      title: () => t("404_line_1"),
      meta: [
        { name: "title", content: () => t("404_line_1") },
        { name: "keywords", content: () => t("404_line_1") },
        { name: "description", content: () => t("404_line_1") },
        {
          name: "robots",
          content: () => "nofollow,noindex,noarchive,nositelinkssearchbox,nosnippet,noimageindex"
        }
      ]
    });
    onMounted(async () => {
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
        const hello_retail_id = VueCookies.get("hello_retail_id");
        await store.dispatch("home/loadRetargetedProducts", {
          hello_retail_id,
          page: "notfound"
        });
      }
      const bcrumb = { current: "404", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "pageNotFound" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="page-not-found pt-8 pb-20"${_scopeId}><div class="container"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            _push2(`</div><div class="col-lg-9 not-found-img pb-30 pb-lg-0"${_scopeId}><span class="h1 d-block text-center mb-30 mb-lg-45 px-30 px-md-0"${_scopeId}>${ssrInterpolate(_ctx.$t("404_line_1"))}</span><div class="img mb-30 mb-lg-60"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Not Found" width="100%" height="100%"${_scopeId}></div><span class="h3 d-block text-center fw-normal"${_scopeId}>${ssrInterpolate(_ctx.$t("404_line_2"))}</span><span class="h3 d-block text-center fw-normal"${_scopeId}>${ssrInterpolate(_ctx.$t("404_line_3"))}</span>`);
            if (hrEnabled.value) {
              _push2(ssrRenderComponent(Retargeted, { page: "notfound" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              createVNode("section", { class: "page-not-found pt-8 pb-20" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-lg-3" }, [
                      createVNode(unref(_sfc_main$3))
                    ]),
                    createVNode("div", { class: "col-lg-9 not-found-img pb-30 pb-lg-0" }, [
                      createVNode("span", { class: "h1 d-block text-center mb-30 mb-lg-45 px-30 px-md-0" }, toDisplayString(_ctx.$t("404_line_1")), 1),
                      createVNode("div", { class: "img mb-30 mb-lg-60" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "Not Found",
                          width: "100%",
                          height: "100%"
                        })
                      ]),
                      createVNode("span", { class: "h3 d-block text-center fw-normal" }, toDisplayString(_ctx.$t("404_line_2")), 1),
                      createVNode("span", { class: "h3 d-block text-center fw-normal" }, toDisplayString(_ctx.$t("404_line_3")), 1),
                      hrEnabled.value ? (openBlock(), createBlock(Retargeted, {
                        key: 0,
                        page: "notfound"
                      })) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/PageNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PageNotFound-DN9NvWPv.js.map
