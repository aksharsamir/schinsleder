import { BLink } from "bootstrap-vue-next/components/BLink";
import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, onMounted, onBeforeUnmount, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, computed, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$2 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$3 } from "./Breadcrumbs-BN1xAQs-.js";
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
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "./BlockSimple-BHbXwFf2.js";
import "vue-cookies";
const _sfc_main$1 = {
  __name: "BrandsSidebarLinks",
  __ssrInlineRender: true,
  props: {
    sidebarData: Array
  },
  setup(__props) {
    const brandsExpanded = ref(false);
    const toggleBrands = () => {
      brandsExpanded.value = !brandsExpanded.value;
    };
    const resize = () => {
      if (window.innerWidth > 991) {
        brandsExpanded.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-holder" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "brands-opener d-lg-none",
        onClick: toggleBrands
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Merken<span class="plus"${_scopeId}>+</span>`);
          } else {
            return [
              createTextVNode("Merken"),
              createVNode("span", { class: "plus" }, "+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: brandsExpanded.value }, "brands-overlay"])}"></div><div class="${ssrRenderClass([{ show: brandsExpanded.value }, "sidebar"])}"><div class="d-lg-none brands-top"><span class="brands-collapse-heading">${ssrInterpolate(_ctx.$t("our_brands"))}</span><i class="lnr lnr-cross"></i></div><span class="sidebar-heading"></span><ul class="sidebar-links"><!--[-->`);
      ssrRenderList(__props.sidebarData, (sidebarLink, index) => {
        _push(`<li>`);
        if (sidebarLink.category != null) {
          _push(ssrRenderComponent(_component_BLink, {
            to: `/` + sidebarLink.category.url_path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sidebarLink.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sidebarLink.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/BrandsSidebarLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Brands",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    onMounted(() => {
      const bcrumb = { current: t("brands"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    const brands = computed(() => store.getters["product/getBrandSlider"]);
    const getCmsData = computed(
      () => store.getters["cmsBlock/getCmsBlockByIdentifier"]("merken")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BLink = BLink;
      _push(ssrRenderComponent(unref(_sfc_main$2), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            _push2(`<section class="brands-section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, {
                          lg: "3",
                          class: "pb-30 pb-lg-25"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1), { sidebarData: brands.value }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1), { sidebarData: brands.value }, null, 8, ["sidebarData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCol, { lg: "9" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`<span class="d-none d-lg-block page-title"${_scopeId4}>${ssrInterpolate(_ctx.$t("brands"))}</span>`);
                              _push5(ssrRenderComponent(_component_BRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(brands.value, (brandData, index) => {
                                      _push6(ssrRenderComponent(_component_BCol, {
                                        cols: "6",
                                        md: "4",
                                        key: `bp` + index
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (brandData.category != null) {
                                              _push7(ssrRenderComponent(_component_BLink, {
                                                to: `/` + brandData.category.url_path,
                                                class: "brand-card"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="brand-logo"${_scopeId7}>`);
                                                    if (brandData.logo) {
                                                      _push8(`<img${ssrRenderAttr("src", brandData.logo)}${ssrRenderAttr("alt", brandData.title)}${_scopeId7}>`);
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(`</div><span class="brand-name"${_scopeId7}>${ssrInterpolate(brandData.title)}</span>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "brand-logo" }, [
                                                        brandData.logo ? (openBlock(), createBlock("img", {
                                                          key: 0,
                                                          src: brandData.logo,
                                                          alt: brandData.title
                                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                                      ]),
                                                      createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (brandData.category == null) {
                                              _push7(`<div class="brand-card"${_scopeId6}><div class="brand-logo"${_scopeId6}>`);
                                              if (brandData.logo) {
                                                _push7(`<img${ssrRenderAttr("src", brandData.logo)}${ssrRenderAttr("alt", brandData.title)}${_scopeId6}>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                              _push7(`</div><span class="brand-name"${_scopeId6}>${ssrInterpolate(brandData.title)}</span></div>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                                key: 0,
                                                to: `/` + brandData.category.url_path,
                                                class: "brand-card"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "brand-logo" }, [
                                                    brandData.logo ? (openBlock(), createBlock("img", {
                                                      key: 0,
                                                      src: brandData.logo,
                                                      alt: brandData.title
                                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                                  ]),
                                                  createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])) : createCommentVNode("", true),
                                              brandData.category == null ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "brand-card"
                                              }, [
                                                createVNode("div", { class: "brand-logo" }, [
                                                  brandData.logo ? (openBlock(), createBlock("img", {
                                                    key: 0,
                                                    src: brandData.logo,
                                                    alt: brandData.title
                                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                                ]),
                                                createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                              ])) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(brands.value, (brandData, index) => {
                                        return openBlock(), createBlock(_component_BCol, {
                                          cols: "6",
                                          md: "4",
                                          key: `bp` + index
                                        }, {
                                          default: withCtx(() => [
                                            brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                              key: 0,
                                              to: `/` + brandData.category.url_path,
                                              class: "brand-card"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "brand-logo" }, [
                                                  brandData.logo ? (openBlock(), createBlock("img", {
                                                    key: 0,
                                                    src: brandData.logo,
                                                    alt: brandData.title
                                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                                ]),
                                                createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])) : createCommentVNode("", true),
                                            brandData.category == null ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "brand-card"
                                            }, [
                                              createVNode("div", { class: "brand-logo" }, [
                                                brandData.logo ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: brandData.logo,
                                                  alt: brandData.title
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                            ])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="bottom-txt d-lg-block"${_scopeId4}>${((_a = getCmsData.value) == null ? void 0 : _a.content) ?? ""}</div>`);
                            } else {
                              return [
                                createVNode("span", { class: "d-none d-lg-block page-title" }, toDisplayString(_ctx.$t("brands")), 1),
                                createVNode(_component_BRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(brands.value, (brandData, index) => {
                                      return openBlock(), createBlock(_component_BCol, {
                                        cols: "6",
                                        md: "4",
                                        key: `bp` + index
                                      }, {
                                        default: withCtx(() => [
                                          brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                            key: 0,
                                            to: `/` + brandData.category.url_path,
                                            class: "brand-card"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "brand-logo" }, [
                                                brandData.logo ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: brandData.logo,
                                                  alt: brandData.title
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])) : createCommentVNode("", true),
                                          brandData.category == null ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "brand-card"
                                          }, [
                                            createVNode("div", { class: "brand-logo" }, [
                                              brandData.logo ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: brandData.logo,
                                                alt: brandData.title
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", {
                                  class: "bottom-txt d-lg-block",
                                  innerHTML: (_b = getCmsData.value) == null ? void 0 : _b.content
                                }, null, 8, ["innerHTML"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, {
                            lg: "3",
                            class: "pb-30 pb-lg-25"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1), { sidebarData: brands.value }, null, 8, ["sidebarData"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BCol, { lg: "9" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", { class: "d-none d-lg-block page-title" }, toDisplayString(_ctx.$t("brands")), 1),
                                createVNode(_component_BRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(brands.value, (brandData, index) => {
                                      return openBlock(), createBlock(_component_BCol, {
                                        cols: "6",
                                        md: "4",
                                        key: `bp` + index
                                      }, {
                                        default: withCtx(() => [
                                          brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                            key: 0,
                                            to: `/` + brandData.category.url_path,
                                            class: "brand-card"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "brand-logo" }, [
                                                brandData.logo ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: brandData.logo,
                                                  alt: brandData.title
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])) : createCommentVNode("", true),
                                          brandData.category == null ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "brand-card"
                                          }, [
                                            createVNode("div", { class: "brand-logo" }, [
                                              brandData.logo ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: brandData.logo,
                                                alt: brandData.title
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", {
                                  class: "bottom-txt d-lg-block",
                                  innerHTML: (_a = getCmsData.value) == null ? void 0 : _a.content
                                }, null, 8, ["innerHTML"])
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
                          class: "pb-30 pb-lg-25"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1), { sidebarData: brands.value }, null, 8, ["sidebarData"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BCol, { lg: "9" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", { class: "d-none d-lg-block page-title" }, toDisplayString(_ctx.$t("brands")), 1),
                              createVNode(_component_BRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(brands.value, (brandData, index) => {
                                    return openBlock(), createBlock(_component_BCol, {
                                      cols: "6",
                                      md: "4",
                                      key: `bp` + index
                                    }, {
                                      default: withCtx(() => [
                                        brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                          key: 0,
                                          to: `/` + brandData.category.url_path,
                                          class: "brand-card"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "brand-logo" }, [
                                              brandData.logo ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: brandData.logo,
                                                alt: brandData.title
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])) : createCommentVNode("", true),
                                        brandData.category == null ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "brand-card"
                                        }, [
                                          createVNode("div", { class: "brand-logo" }, [
                                            brandData.logo ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: brandData.logo,
                                              alt: brandData.title
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode("div", {
                                class: "bottom-txt d-lg-block",
                                innerHTML: (_a = getCmsData.value) == null ? void 0 : _a.content
                              }, null, 8, ["innerHTML"])
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
              createVNode(unref(_sfc_main$3)),
              createVNode("section", { class: "brands-section" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          lg: "3",
                          class: "pb-30 pb-lg-25"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1), { sidebarData: brands.value }, null, 8, ["sidebarData"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BCol, { lg: "9" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", { class: "d-none d-lg-block page-title" }, toDisplayString(_ctx.$t("brands")), 1),
                              createVNode(_component_BRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(brands.value, (brandData, index) => {
                                    return openBlock(), createBlock(_component_BCol, {
                                      cols: "6",
                                      md: "4",
                                      key: `bp` + index
                                    }, {
                                      default: withCtx(() => [
                                        brandData.category != null ? (openBlock(), createBlock(_component_BLink, {
                                          key: 0,
                                          to: `/` + brandData.category.url_path,
                                          class: "brand-card"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "brand-logo" }, [
                                              brandData.logo ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: brandData.logo,
                                                alt: brandData.title
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])) : createCommentVNode("", true),
                                        brandData.category == null ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "brand-card"
                                        }, [
                                          createVNode("div", { class: "brand-logo" }, [
                                            brandData.logo ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: brandData.logo,
                                              alt: brandData.title
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("span", { class: "brand-name" }, toDisplayString(brandData.title), 1)
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode("div", {
                                class: "bottom-txt d-lg-block",
                                innerHTML: (_a = getCmsData.value) == null ? void 0 : _a.content
                              }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Brands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Brands-D5HKRsfD.js.map
