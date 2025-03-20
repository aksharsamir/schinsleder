import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onMounted, onBeforeUnmount, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { S as SubscribeSeparator } from "./SubscribeSeparator-C3jKN2LH.js";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
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
import "./BlockSimple-BHbXwFf2.js";
import "vue-cookies";
const _sfc_main = {
  __name: "OurShop",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const largeScreen = ref(false);
    const currentstore = computed(
      () => store.getters["stores/getStoreByCode"](route.params.code)
    );
    const openingTimes = computed(
      () => currentstore.value ? currentstore.value.openingHours : null
    );
    const setLargeScreen = () => {
      largeScreen.value = window.innerWidth > 991;
    };
    const updateBreadcrumbs = () => {
      var _a;
      if (currentstore.value) {
        const bcrumb = {
          current: (_a = currentstore.value) == null ? void 0 : _a.name,
          routes: [{ name: "Winkels", route_link: "/winkels" }]
        };
        store.commit("breadcrumbs/set", bcrumb);
      }
    };
    watch(currentstore, (newVal) => {
      if (newVal) {
        updateBreadcrumbs();
      }
    });
    useHead({
      title: () => {
        var _a;
        return (_a = currentstore.value) == null ? void 0 : _a.name;
      },
      meta: [
        { name: "title", content: () => {
          var _a;
          return (_a = currentstore.value) == null ? void 0 : _a.name;
        } },
        { name: "keywords", content: () => {
          var _a;
          return (_a = currentstore.value) == null ? void 0 : _a.name;
        } },
        { name: "description", content: () => {
          var _a;
          return (_a = currentstore.value) == null ? void 0 : _a.name;
        } }
      ]
    });
    onMounted(() => {
      updateBreadcrumbs();
      window.addEventListener("resize", setLargeScreen);
      window.addEventListener("load", setLargeScreen);
      setLargeScreen();
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", setLargeScreen);
      window.removeEventListener("load", setLargeScreen);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            if (currentstore.value != null) {
              _push2(`<section class="our-shop--banner pb-25 pb-lg-35"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BContainer, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f;
                  if (_push3) {
                    _push3(`<h1 class="font-weight-normal mb-30 mb-lg-35"${_scopeId2}>${ssrInterpolate((_a = currentstore.value) == null ? void 0 : _a.name)}</h1>`);
                    if (currentstore.value.banner_image != null) {
                      _push3(`<div class="banner-img"${_scopeId2}><img${ssrRenderAttr("src", (_c = (_b = currentstore.value) == null ? void 0 : _b.banner_image) == null ? void 0 : _c.url)} alt="Our Shop"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("h1", { class: "font-weight-normal mb-30 mb-lg-35" }, toDisplayString((_d = currentstore.value) == null ? void 0 : _d.name), 1),
                      currentstore.value.banner_image != null ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "banner-img"
                      }, [
                        createVNode("img", {
                          src: (_f = (_e = currentstore.value) == null ? void 0 : _e.banner_image) == null ? void 0 : _f.url,
                          alt: "Our Shop"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            if (currentstore.value != null) {
              _push2(`<section class="content pb-7"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BContainer, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div${_scopeId2}>${((_a = currentstore.value) == null ? void 0 : _a.description) ?? ""}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        innerHTML: (_b = currentstore.value) == null ? void 0 : _b.description
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(SubscribeSeparator, null, null, _parent2, _scopeId));
            if (currentstore.value != null) {
              _push2(`<section class="address-and-opening-time pb-35 py-lg-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BContainer, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BCol, { lg: "4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b, _c, _d, _e, _f, _g, _h;
                              if (_push5) {
                                _push5(`<span class="h4 d-block"${_scopeId4}>Openingstijden winkel</span><ul class="opening-time list-unstyled pl-0 m-0 pb-30"${_scopeId4}><!--[-->`);
                                ssrRenderList(openingTimes.value, (openingTimeDatum) => {
                                  _push5(`<li${_scopeId4}><!--[-->`);
                                  ssrRenderList(openingTimeDatum.hours, (item, index) => {
                                    _push5(`<div class="d-flex" style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId4}><span class="day d-block mr-25"${_scopeId4}>`);
                                    if (index == 0) {
                                      _push5(`<span${_scopeId4}>${ssrInterpolate(_ctx.$t(openingTimeDatum.label))}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</span>`);
                                    if (item.from != null) {
                                      _push5(`<span class="time"${_scopeId4}>${ssrInterpolate(item.from)} - ${ssrInterpolate(item.to)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (item.from == null) {
                                      _push5(`<span class="time d-block"${_scopeId4}>${ssrInterpolate(_ctx.$t("closed"))}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</div>`);
                                  });
                                  _push5(`<!--]--></li>`);
                                });
                                _push5(`<!--]--></ul><span class="h4 d-block"${_scopeId4}>Adres:</span>`);
                                if (currentstore.value != null) {
                                  _push5(`<address${_scopeId4}>${ssrInterpolate((_a = currentstore.value) == null ? void 0 : _a.name)} <br${_scopeId4}> ${ssrInterpolate((_b = currentstore.value) == null ? void 0 : _b.street)}, <br${_scopeId4}> ${ssrInterpolate((_c = currentstore.value) == null ? void 0 : _c.postcode)} ${ssrInterpolate((_d = currentstore.value) == null ? void 0 : _d.city)} <br${_scopeId4}> Telefoon ${ssrInterpolate(currentstore.value.phone)}</address>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("span", { class: "h4 d-block" }, "Openingstijden winkel"),
                                  createVNode("ul", { class: "opening-time list-unstyled pl-0 m-0 pb-30" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(openingTimes.value, (openingTimeDatum) => {
                                      return openBlock(), createBlock("li", {
                                        key: openingTimeDatum.label
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(openingTimeDatum.hours, (item, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "d-flex",
                                            style: { "width": "100%" },
                                            key: `${openingTimeDatum.label}-${index}`
                                          }, [
                                            createVNode("span", { class: "day d-block mr-25" }, [
                                              index == 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t(openingTimeDatum.label)), 1)) : createCommentVNode("", true)
                                            ]),
                                            item.from != null ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "time"
                                            }, toDisplayString(item.from) + " - " + toDisplayString(item.to), 1)) : createCommentVNode("", true),
                                            item.from == null ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "time d-block"
                                            }, toDisplayString(_ctx.$t("closed")), 1)) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("span", { class: "h4 d-block" }, "Adres:"),
                                  currentstore.value != null ? (openBlock(), createBlock("address", { key: 0 }, [
                                    createTextVNode(toDisplayString((_e = currentstore.value) == null ? void 0 : _e.name) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString((_f = currentstore.value) == null ? void 0 : _f.street) + ", ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString((_g = currentstore.value) == null ? void 0 : _g.postcode) + " " + toDisplayString((_h = currentstore.value) == null ? void 0 : _h.city) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" Telefoon " + toDisplayString(currentstore.value.phone), 1)
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BCol, {
                            lg: "8",
                            class: "pt-5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                if (currentstore.value.map_image != null) {
                                  _push5(`<div class="map-holder" style="${ssrRenderStyle({
                                    backgroundImage: `url(${(_a = currentstore.value) == null ? void 0 : _a.map_image.url})`
                                  })}"${_scopeId4}></div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  currentstore.value.map_image != null ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "map-holder",
                                    style: {
                                      backgroundImage: `url(${(_b = currentstore.value) == null ? void 0 : _b.map_image.url})`
                                    }
                                  }, null, 4)) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BCol, { lg: "4" }, {
                              default: withCtx(() => {
                                var _a, _b, _c, _d;
                                return [
                                  createVNode("span", { class: "h4 d-block" }, "Openingstijden winkel"),
                                  createVNode("ul", { class: "opening-time list-unstyled pl-0 m-0 pb-30" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(openingTimes.value, (openingTimeDatum) => {
                                      return openBlock(), createBlock("li", {
                                        key: openingTimeDatum.label
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(openingTimeDatum.hours, (item, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "d-flex",
                                            style: { "width": "100%" },
                                            key: `${openingTimeDatum.label}-${index}`
                                          }, [
                                            createVNode("span", { class: "day d-block mr-25" }, [
                                              index == 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t(openingTimeDatum.label)), 1)) : createCommentVNode("", true)
                                            ]),
                                            item.from != null ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "time"
                                            }, toDisplayString(item.from) + " - " + toDisplayString(item.to), 1)) : createCommentVNode("", true),
                                            item.from == null ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "time d-block"
                                            }, toDisplayString(_ctx.$t("closed")), 1)) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("span", { class: "h4 d-block" }, "Adres:"),
                                  currentstore.value != null ? (openBlock(), createBlock("address", { key: 0 }, [
                                    createTextVNode(toDisplayString((_a = currentstore.value) == null ? void 0 : _a.name) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString((_b = currentstore.value) == null ? void 0 : _b.street) + ", ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString((_c = currentstore.value) == null ? void 0 : _c.postcode) + " " + toDisplayString((_d = currentstore.value) == null ? void 0 : _d.city) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" Telefoon " + toDisplayString(currentstore.value.phone), 1)
                                  ])) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_BCol, {
                              lg: "8",
                              class: "pt-5"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  currentstore.value.map_image != null ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "map-holder",
                                    style: {
                                      backgroundImage: `url(${(_a = currentstore.value) == null ? void 0 : _a.map_image.url})`
                                    }
                                  }, null, 4)) : createCommentVNode("", true)
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
                          createVNode(_component_BCol, { lg: "4" }, {
                            default: withCtx(() => {
                              var _a, _b, _c, _d;
                              return [
                                createVNode("span", { class: "h4 d-block" }, "Openingstijden winkel"),
                                createVNode("ul", { class: "opening-time list-unstyled pl-0 m-0 pb-30" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(openingTimes.value, (openingTimeDatum) => {
                                    return openBlock(), createBlock("li", {
                                      key: openingTimeDatum.label
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(openingTimeDatum.hours, (item, index) => {
                                        return openBlock(), createBlock("div", {
                                          class: "d-flex",
                                          style: { "width": "100%" },
                                          key: `${openingTimeDatum.label}-${index}`
                                        }, [
                                          createVNode("span", { class: "day d-block mr-25" }, [
                                            index == 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t(openingTimeDatum.label)), 1)) : createCommentVNode("", true)
                                          ]),
                                          item.from != null ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "time"
                                          }, toDisplayString(item.from) + " - " + toDisplayString(item.to), 1)) : createCommentVNode("", true),
                                          item.from == null ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "time d-block"
                                          }, toDisplayString(_ctx.$t("closed")), 1)) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("span", { class: "h4 d-block" }, "Adres:"),
                                currentstore.value != null ? (openBlock(), createBlock("address", { key: 0 }, [
                                  createTextVNode(toDisplayString((_a = currentstore.value) == null ? void 0 : _a.name) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString((_b = currentstore.value) == null ? void 0 : _b.street) + ", ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString((_c = currentstore.value) == null ? void 0 : _c.postcode) + " " + toDisplayString((_d = currentstore.value) == null ? void 0 : _d.city) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" Telefoon " + toDisplayString(currentstore.value.phone), 1)
                                ])) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_BCol, {
                            lg: "8",
                            class: "pt-5"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                currentstore.value.map_image != null ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "map-holder",
                                  style: {
                                    backgroundImage: `url(${(_a = currentstore.value) == null ? void 0 : _a.map_image.url})`
                                  }
                                }, null, 4)) : createCommentVNode("", true)
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
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              currentstore.value != null ? (openBlock(), createBlock("section", {
                key: 0,
                class: "our-shop--banner pb-25 pb-lg-35"
              }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => {
                    var _a, _b, _c;
                    return [
                      createVNode("h1", { class: "font-weight-normal mb-30 mb-lg-35" }, toDisplayString((_a = currentstore.value) == null ? void 0 : _a.name), 1),
                      currentstore.value.banner_image != null ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "banner-img"
                      }, [
                        createVNode("img", {
                          src: (_c = (_b = currentstore.value) == null ? void 0 : _b.banner_image) == null ? void 0 : _c.url,
                          alt: "Our Shop"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              currentstore.value != null ? (openBlock(), createBlock("section", {
                key: 1,
                class: "content pb-7"
              }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", {
                        innerHTML: (_a = currentstore.value) == null ? void 0 : _a.description
                      }, null, 8, ["innerHTML"])
                    ];
                  }),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createVNode(SubscribeSeparator),
              currentstore.value != null ? (openBlock(), createBlock("section", {
                key: 2,
                class: "address-and-opening-time pb-35 py-lg-10"
              }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, { lg: "4" }, {
                          default: withCtx(() => {
                            var _a, _b, _c, _d;
                            return [
                              createVNode("span", { class: "h4 d-block" }, "Openingstijden winkel"),
                              createVNode("ul", { class: "opening-time list-unstyled pl-0 m-0 pb-30" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(openingTimes.value, (openingTimeDatum) => {
                                  return openBlock(), createBlock("li", {
                                    key: openingTimeDatum.label
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(openingTimeDatum.hours, (item, index) => {
                                      return openBlock(), createBlock("div", {
                                        class: "d-flex",
                                        style: { "width": "100%" },
                                        key: `${openingTimeDatum.label}-${index}`
                                      }, [
                                        createVNode("span", { class: "day d-block mr-25" }, [
                                          index == 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t(openingTimeDatum.label)), 1)) : createCommentVNode("", true)
                                        ]),
                                        item.from != null ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "time"
                                        }, toDisplayString(item.from) + " - " + toDisplayString(item.to), 1)) : createCommentVNode("", true),
                                        item.from == null ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "time d-block"
                                        }, toDisplayString(_ctx.$t("closed")), 1)) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ]);
                                }), 128))
                              ]),
                              createVNode("span", { class: "h4 d-block" }, "Adres:"),
                              currentstore.value != null ? (openBlock(), createBlock("address", { key: 0 }, [
                                createTextVNode(toDisplayString((_a = currentstore.value) == null ? void 0 : _a.name) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString((_b = currentstore.value) == null ? void 0 : _b.street) + ", ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString((_c = currentstore.value) == null ? void 0 : _c.postcode) + " " + toDisplayString((_d = currentstore.value) == null ? void 0 : _d.city) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" Telefoon " + toDisplayString(currentstore.value.phone), 1)
                              ])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_BCol, {
                          lg: "8",
                          class: "pt-5"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              currentstore.value.map_image != null ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "map-holder",
                                style: {
                                  backgroundImage: `url(${(_a = currentstore.value) == null ? void 0 : _a.map_image.url})`
                                }
                              }, null, 4)) : createCommentVNode("", true)
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
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/OurShop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=OurShop-DasKNyne.js.map
