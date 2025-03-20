import { computed, onMounted, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$3 } from "./BlockSimple-BHbXwFf2.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$4 } from "./DynamicForms-BMAeaiy-.js";
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-router";
import "vue-i18n";
import "vuex-router-sync";
import "vue3-lazyload";
import "@gtm-support/vue-gtm";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
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
import "@element-plus/icons-vue";
import "vue-cookies";
import "bootstrap-vue-next/components/BFormTextarea";
import "bootstrap-vue-next/components/BFormSelect";
import "bootstrap-vue-next/components/BForm";
import "bootstrap-vue-next/components/BFormGroup";
import "bootstrap-vue-next/components/BModal";
import "./forms-BxHSFE8a.js";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: () => "Contact",
      meta: [
        { name: "title", content: () => "Contact" },
        { name: "keywords", content: () => "Contact" },
        { name: "description", content: () => "Contact" }
      ]
    });
    const store = useStore();
    const getCmsData = computed(() => {
      return store.getters[`cmsBlock/getCmsBlockByIdentifier`]("contact_page_block");
    });
    const contactForm = computed(() => {
      return store.getters[`cmsBlock/getCmsBlockByIdentifier`]("contact_page_block");
    });
    onMounted(() => {
      const bcrumb = { current: "Contact", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "contact" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="static pt-7"${_scopeId}><div class="container"${_scopeId}><div class="row"${_scopeId}><div class="d-none d-lg-block col-lg-3"${_scopeId}><div class="sidebar"${_scopeId}><span class="sidebar-heading"${_scopeId}>Links</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { identifier: "side-menu-cms" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="col-lg-4"${_scopeId}><h1${_scopeId}>${ssrInterpolate((_a = getCmsData.value) == null ? void 0 : _a.title)}</h1>`);
            if ((_b = getCmsData.value) == null ? void 0 : _b.content) {
              _push2(`<div class="cms-content"${_scopeId}>${((_c = getCmsData.value) == null ? void 0 : _c.content) ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-lg-4"${_scopeId}><section class="best-sellers"${_scopeId}><span class="best-seller--category"${_scopeId}>${ssrInterpolate(_ctx.$t("contact_form"))}</span><div class="row"${_scopeId}><div class="best-seller--card-holder"${_scopeId}>`);
            if (contactForm.value != null) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), { type: "contact" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></section></div></div></div></section>`);
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              createVNode("section", { class: "static pt-7" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "d-none d-lg-block col-lg-3" }, [
                      createVNode("div", { class: "sidebar" }, [
                        createVNode("span", { class: "sidebar-heading" }, "Links"),
                        createVNode(unref(_sfc_main$3), { identifier: "side-menu-cms" })
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-4" }, [
                      createVNode("h1", null, toDisplayString((_d = getCmsData.value) == null ? void 0 : _d.title), 1),
                      ((_e = getCmsData.value) == null ? void 0 : _e.content) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "cms-content",
                        innerHTML: (_f = getCmsData.value) == null ? void 0 : _f.content
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "col-lg-4" }, [
                      createVNode("section", { class: "best-sellers" }, [
                        createVNode("span", { class: "best-seller--category" }, toDisplayString(_ctx.$t("contact_form")), 1),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "best-seller--card-holder" }, [
                            contactForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(unref(_sfc_main$4), { type: "contact" })
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact-CFWgLEdO.js.map
