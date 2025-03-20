import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { computed, onMounted, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$3 } from "./BlockSimple-BHbXwFf2.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
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
const _sfc_main = {
  __name: "StaticPage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const cmsPageContent = computed(() => store.state.cmsPage.current);
    useHead({
      title: () => {
        var _a;
        return (_a = cmsPageContent.value) == null ? void 0 : _a.title;
      },
      meta: [
        { name: "title", content: () => {
          var _a;
          return (_a = cmsPageContent.value) == null ? void 0 : _a.meta_title;
        } },
        { name: "keywords", content: () => {
          var _a;
          return (_a = cmsPageContent.value) == null ? void 0 : _a.meta_keywords;
        } },
        {
          name: "description",
          content: () => {
            var _a;
            return (_a = cmsPageContent.value) == null ? void 0 : _a.meta_description;
          }
        }
      ]
    });
    onMounted(() => {
      var _a;
      const bcrumb = { current: (_a = cmsPageContent.value) == null ? void 0 : _a.title, routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_b_col = BCol;
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="static pt-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="sidebar"${_scopeId4}><span class="sidebar-heading"${_scopeId4}>Links</span>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$3), { identifier: "side-menu-cms" }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "sidebar" }, [
                                  createVNode("span", { class: "sidebar-heading" }, "Links"),
                                  createVNode(unref(_sfc_main$3), { identifier: "side-menu-cms" })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_col, { lg: "9" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d, _e, _f;
                            if (_push5) {
                              _push5(`<h1${_scopeId4}>${ssrInterpolate((_a = cmsPageContent.value) == null ? void 0 : _a.title)}</h1>`);
                              if ((_b = cmsPageContent.value) == null ? void 0 : _b.content) {
                                _push5(`<div class="cms-content"${_scopeId4}>${((_c = cmsPageContent.value) == null ? void 0 : _c.content) ?? ""}</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode("h1", null, toDisplayString((_d = cmsPageContent.value) == null ? void 0 : _d.title), 1),
                                ((_e = cmsPageContent.value) == null ? void 0 : _e.content) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "cms-content",
                                  innerHTML: (_f = cmsPageContent.value) == null ? void 0 : _f.content
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, {
                            lg: "3",
                            class: "d-none d-lg-block"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "sidebar" }, [
                                createVNode("span", { class: "sidebar-heading" }, "Links"),
                                createVNode(unref(_sfc_main$3), { identifier: "side-menu-cms" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, { lg: "9" }, {
                            default: withCtx(() => {
                              var _a, _b, _c;
                              return [
                                createVNode("h1", null, toDisplayString((_a = cmsPageContent.value) == null ? void 0 : _a.title), 1),
                                ((_b = cmsPageContent.value) == null ? void 0 : _b.content) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "cms-content",
                                  innerHTML: (_c = cmsPageContent.value) == null ? void 0 : _c.content
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "sidebar" }, [
                              createVNode("span", { class: "sidebar-heading" }, "Links"),
                              createVNode(unref(_sfc_main$3), { identifier: "side-menu-cms" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, { lg: "9" }, {
                          default: withCtx(() => {
                            var _a, _b, _c;
                            return [
                              createVNode("h1", null, toDisplayString((_a = cmsPageContent.value) == null ? void 0 : _a.title), 1),
                              ((_b = cmsPageContent.value) == null ? void 0 : _b.content) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "cms-content",
                                innerHTML: (_c = cmsPageContent.value) == null ? void 0 : _c.content
                              }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              createVNode("section", { class: "static pt-7" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "sidebar" }, [
                              createVNode("span", { class: "sidebar-heading" }, "Links"),
                              createVNode(unref(_sfc_main$3), { identifier: "side-menu-cms" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, { lg: "9" }, {
                          default: withCtx(() => {
                            var _a, _b, _c;
                            return [
                              createVNode("h1", null, toDisplayString((_a = cmsPageContent.value) == null ? void 0 : _a.title), 1),
                              ((_b = cmsPageContent.value) == null ? void 0 : _b.content) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "cms-content",
                                innerHTML: (_c = cmsPageContent.value) == null ? void 0 : _c.content
                              }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/StaticPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=StaticPage-DDlzli0T.js.map
