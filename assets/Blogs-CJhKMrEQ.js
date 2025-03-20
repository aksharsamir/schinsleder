import { BButton } from "bootstrap-vue-next/components/BButton";
import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { onMounted, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
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
import "@unhead/vue";
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
import "./BlockSimple-BHbXwFf2.js";
import "vue-cookies";
const _sfc_main = {
  __name: "Blogs",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    onMounted(() => {
      const bcrumb = {
        current: "Blog",
        routes: []
      };
      store.commit("breadcrumbs/set", bcrumb);
    });
    const currentPageNr = computed({
      get: () => store.getters["blog/getCurrentPageNr"],
      set: (val) => store.dispatch("blog/goToPage", { pageNr: val })
    });
    const totalBlogs = computed(() => store.getters["blog/getTotalBlogs"]);
    const blogsPerPage = computed(() => store.getters["blog/getBlogsPerPage"]);
    const currentPage = computed(() => store.getters["blog/getCurrentPage"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BPagination = BPagination;
      const _component_BCol = BCol;
      const _component_BButton = BButton;
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="static pt-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1${_scopeId2}>Blog</h1>`);
                  _push3(ssrRenderComponent(_component_BRow, { style: { "width": "100%", "justify-content": "end" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BPagination, {
                          style: { "margin-left": "auto", "margin-right": "0", "justify-content": "flex-end !important" },
                          modelValue: currentPageNr.value,
                          "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                          "total-rows": totalBlogs.value,
                          "per-page": blogsPerPage.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BPagination, {
                            style: { "margin-left": "auto", "margin-right": "0", "justify-content": "flex-end !important" },
                            modelValue: currentPageNr.value,
                            "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                            "total-rows": totalBlogs.value,
                            "per-page": blogsPerPage.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(currentPage.value, (item, index) => {
                          _push4(ssrRenderComponent(_component_BCol, {
                            key: index,
                            lg: "4",
                            class: "pb-30 pb-lg-25"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div style="${ssrRenderStyle({ "width": "100%", "height": "200px" })}"${_scopeId4}><img style="${ssrRenderStyle({ "width": "100%", "max-height": "200px" })}"${ssrRenderAttr("src", item.featured_image)}${_scopeId4}></div><h3 style="${ssrRenderStyle({ "padding-top": "10px", "padding-bottom": "10px" })}"${_scopeId4}>${ssrInterpolate(item.title)}</h3><div${_scopeId4}>${item.short_filtered_content ?? ""}</div>`);
                                _push5(ssrRenderComponent(_component_BButton, {
                                  onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                  type: "button",
                                  variant: "info",
                                  class: "text-white form-submit-btn"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(_ctx.$t("read_more"))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.$t("read_more")), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { style: { "width": "100%", "height": "200px" } }, [
                                    createVNode("img", {
                                      style: { "width": "100%", "max-height": "200px" },
                                      src: item.featured_image
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("h3", { style: { "padding-top": "10px", "padding-bottom": "10px" } }, toDisplayString(item.title), 1),
                                  createVNode("div", {
                                    innerHTML: item.short_filtered_content
                                  }, null, 8, ["innerHTML"]),
                                  createVNode(_component_BButton, {
                                    onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                    type: "button",
                                    variant: "info",
                                    class: "text-white form-submit-btn"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("read_more")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                            return openBlock(), createBlock(_component_BCol, {
                              key: index,
                              lg: "4",
                              class: "pb-30 pb-lg-25"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { style: { "width": "100%", "height": "200px" } }, [
                                  createVNode("img", {
                                    style: { "width": "100%", "max-height": "200px" },
                                    src: item.featured_image
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("h3", { style: { "padding-top": "10px", "padding-bottom": "10px" } }, toDisplayString(item.title), 1),
                                createVNode("div", {
                                  innerHTML: item.short_filtered_content
                                }, null, 8, ["innerHTML"]),
                                createVNode(_component_BButton, {
                                  onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                  type: "button",
                                  variant: "info",
                                  class: "text-white form-submit-btn"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("read_more")), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", null, "Blog"),
                    createVNode(_component_BRow, { style: { "width": "100%", "justify-content": "end" } }, {
                      default: withCtx(() => [
                        createVNode(_component_BPagination, {
                          style: { "margin-left": "auto", "margin-right": "0", "justify-content": "flex-end !important" },
                          modelValue: currentPageNr.value,
                          "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                          "total-rows": totalBlogs.value,
                          "per-page": blogsPerPage.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                          return openBlock(), createBlock(_component_BCol, {
                            key: index,
                            lg: "4",
                            class: "pb-30 pb-lg-25"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "width": "100%", "height": "200px" } }, [
                                createVNode("img", {
                                  style: { "width": "100%", "max-height": "200px" },
                                  src: item.featured_image
                                }, null, 8, ["src"])
                              ]),
                              createVNode("h3", { style: { "padding-top": "10px", "padding-bottom": "10px" } }, toDisplayString(item.title), 1),
                              createVNode("div", {
                                innerHTML: item.short_filtered_content
                              }, null, 8, ["innerHTML"]),
                              createVNode(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                type: "button",
                                variant: "info",
                                class: "text-white form-submit-btn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("read_more")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
                    createVNode("h1", null, "Blog"),
                    createVNode(_component_BRow, { style: { "width": "100%", "justify-content": "end" } }, {
                      default: withCtx(() => [
                        createVNode(_component_BPagination, {
                          style: { "margin-left": "auto", "margin-right": "0", "justify-content": "flex-end !important" },
                          modelValue: currentPageNr.value,
                          "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                          "total-rows": totalBlogs.value,
                          "per-page": blogsPerPage.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                          return openBlock(), createBlock(_component_BCol, {
                            key: index,
                            lg: "4",
                            class: "pb-30 pb-lg-25"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "width": "100%", "height": "200px" } }, [
                                createVNode("img", {
                                  style: { "width": "100%", "max-height": "200px" },
                                  src: item.featured_image
                                }, null, 8, ["src"])
                              ]),
                              createVNode("h3", { style: { "padding-top": "10px", "padding-bottom": "10px" } }, toDisplayString(item.title), 1),
                              createVNode("div", {
                                innerHTML: item.short_filtered_content
                              }, null, 8, ["innerHTML"]),
                              createVNode(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                type: "button",
                                variant: "info",
                                class: "text-white form-submit-btn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("read_more")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/blog/Blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Blogs-CJhKMrEQ.js.map
