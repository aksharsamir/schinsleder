import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { computed, onMounted, unref, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, withDirectives, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$3 } from "./BlockSimple-BHbXwFf2.js";
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
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BLink";
import "./FooterCopyRight-CMwhH0WW.js";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "vue-cookies";
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const faq = computed(() => {
      return store.getters["faq/getFaq"];
    });
    onMounted(() => {
      const bcrumb = { current: "F.A.Q.", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    useHead({
      title: () => "F.A.Q.",
      meta: [
        { name: "title", content: () => "F.A.Q." },
        { name: "keywords", content: () => "F.A.Q." },
        { name: "description", content: () => "F.A.Q." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_collapse = BCollapse;
      const _directive_b_toggle = vBToggle;
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "faq" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="static pt-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_b_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_b_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_b_col, {
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
                            if (_push5) {
                              _push5(`<div${_scopeId4}><h1${_scopeId4}>F.A.Q.</h1><!--[-->`);
                              ssrRenderList(faq.value, (section, index) => {
                                _push5(`<div class="pt-7"${_scopeId4}><h2${_scopeId4}>${ssrInterpolate(section.title)}</h2><!--[-->`);
                                ssrRenderList(section.faq.items, (row, idx) => {
                                  _push5(`<div${_scopeId4}><div${ssrRenderAttrs(mergeProps({ class: "faq-header" }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, `sec` + index + `row` + idx)))}${_scopeId4}>${ssrInterpolate(row.question)}</div>`);
                                  _push5(ssrRenderComponent(_component_b_collapse, {
                                    class: "answer",
                                    id: `sec` + index + `row` + idx
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("h1", null, "F.A.Q."),
                                  (openBlock(true), createBlock(Fragment, null, renderList(faq.value, (section, index) => {
                                    return openBlock(), createBlock("div", {
                                      class: "pt-7",
                                      key: `sec` + index
                                    }, [
                                      createVNode("h2", null, toDisplayString(section.title), 1),
                                      (openBlock(true), createBlock(Fragment, null, renderList(section.faq.items, (row, idx) => {
                                        return openBlock(), createBlock("div", {
                                          key: `sec` + index + `row` + idx
                                        }, [
                                          withDirectives((openBlock(), createBlock("div", { class: "faq-header" }, [
                                            createTextVNode(toDisplayString(row.question), 1)
                                          ])), [
                                            [_directive_b_toggle, `sec` + index + `row` + idx]
                                          ]),
                                          createVNode(_component_b_collapse, {
                                            class: "answer",
                                            id: `sec` + index + `row` + idx,
                                            innerHTML: row.long_answer
                                          }, null, 8, ["id", "innerHTML"])
                                        ]);
                                      }), 128))
                                    ]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_b_col, {
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
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h1", null, "F.A.Q."),
                                (openBlock(true), createBlock(Fragment, null, renderList(faq.value, (section, index) => {
                                  return openBlock(), createBlock("div", {
                                    class: "pt-7",
                                    key: `sec` + index
                                  }, [
                                    createVNode("h2", null, toDisplayString(section.title), 1),
                                    (openBlock(true), createBlock(Fragment, null, renderList(section.faq.items, (row, idx) => {
                                      return openBlock(), createBlock("div", {
                                        key: `sec` + index + `row` + idx
                                      }, [
                                        withDirectives((openBlock(), createBlock("div", { class: "faq-header" }, [
                                          createTextVNode(toDisplayString(row.question), 1)
                                        ])), [
                                          [_directive_b_toggle, `sec` + index + `row` + idx]
                                        ]),
                                        createVNode(_component_b_collapse, {
                                          class: "answer",
                                          id: `sec` + index + `row` + idx,
                                          innerHTML: row.long_answer
                                        }, null, 8, ["id", "innerHTML"])
                                      ]);
                                    }), 128))
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
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
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h1", null, "F.A.Q."),
                              (openBlock(true), createBlock(Fragment, null, renderList(faq.value, (section, index) => {
                                return openBlock(), createBlock("div", {
                                  class: "pt-7",
                                  key: `sec` + index
                                }, [
                                  createVNode("h2", null, toDisplayString(section.title), 1),
                                  (openBlock(true), createBlock(Fragment, null, renderList(section.faq.items, (row, idx) => {
                                    return openBlock(), createBlock("div", {
                                      key: `sec` + index + `row` + idx
                                    }, [
                                      withDirectives((openBlock(), createBlock("div", { class: "faq-header" }, [
                                        createTextVNode(toDisplayString(row.question), 1)
                                      ])), [
                                        [_directive_b_toggle, `sec` + index + `row` + idx]
                                      ]),
                                      createVNode(_component_b_collapse, {
                                        class: "answer",
                                        id: `sec` + index + `row` + idx,
                                        innerHTML: row.long_answer
                                      }, null, 8, ["id", "innerHTML"])
                                    ]);
                                  }), 128))
                                ]);
                              }), 128))
                            ])
                          ]),
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
                createVNode(_component_b_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
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
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h1", null, "F.A.Q."),
                              (openBlock(true), createBlock(Fragment, null, renderList(faq.value, (section, index) => {
                                return openBlock(), createBlock("div", {
                                  class: "pt-7",
                                  key: `sec` + index
                                }, [
                                  createVNode("h2", null, toDisplayString(section.title), 1),
                                  (openBlock(true), createBlock(Fragment, null, renderList(section.faq.items, (row, idx) => {
                                    return openBlock(), createBlock("div", {
                                      key: `sec` + index + `row` + idx
                                    }, [
                                      withDirectives((openBlock(), createBlock("div", { class: "faq-header" }, [
                                        createTextVNode(toDisplayString(row.question), 1)
                                      ])), [
                                        [_directive_b_toggle, `sec` + index + `row` + idx]
                                      ]),
                                      createVNode(_component_b_collapse, {
                                        class: "answer",
                                        id: `sec` + index + `row` + idx,
                                        innerHTML: row.long_answer
                                      }, null, 8, ["id", "innerHTML"])
                                    ]);
                                  }), 128))
                                ]);
                              }), 128))
                            ])
                          ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Faq-DEgq69nr.js.map
