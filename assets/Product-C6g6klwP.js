import { ref, onBeforeUpdate, computed, onMounted, resolveComponent, mergeProps, withCtx, createBlock, openBlock, useSSRContext, createCommentVNode, createVNode, toDisplayString, createTextVNode, unref, createSlots, Fragment, renderList, watch } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { useGtm } from "@gtm-support/vue-gtm";
import { useI18n } from "vue-i18n";
import VueCookies from "vue-cookies";
import { _ as _sfc_main$a } from "./Breadcrumbs-DwhHUqbs.js";
import { _ as _sfc_main$c } from "./ProductAddtoCart-D_Yf37pC.js";
import { _ as _sfc_main$9 } from "./AppLayout-CdCGV8yT.js";
import { b as _sfc_main$7, c as _sfc_main$8, e as _sfc_main$b, g as _sfc_main$d } from "./DescriptionTab-CZduIBHb.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { isMobile, isTablet } from "mobile-device-detect";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import "vue-easy-lightbox";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { BModal } from "bootstrap-vue-next/components/BModal";
import { useRouter } from "vue-router";
import { useModal } from "bootstrap-vue-next";
import { M as MoreProductsCarousel$1 } from "./MoreProductsCarousel-CQBsknMv.js";
import { P as ProductCard } from "./ProductCard-zGPQ-XdA.js";
import { _ as _sfc_main$e } from "./DynamicForms-BMAeaiy-.js";
import { C as CONFIG_JSON, i as isServer } from "../entry-server.js";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "./products-Dsi6ZmTY.js";
import "axios";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "bootstrap-vue-next/components/BNav";
import "bootstrap-vue-next/components/BAlert";
import "bootstrap-vue-next/directives/BModal";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "@vueuse/core";
import "@popperjs/core";
import "vue-socials";
import "bootstrap-vue-next/components/BTabs";
import "./heart-DpQotoa5.js";
import "./default-placeholder-image-BaAVikZT.js";
import "bootstrap-vue-next/components/BFormTextarea";
import "bootstrap-vue-next/components/BFormSelect";
import "bootstrap-vue-next/components/BForm";
import "bootstrap-vue-next/components/BFormGroup";
import "./forms-BxHSFE8a.js";
import "node:path";
import "@unhead/ssr";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
const _sfc_main$6 = {
  __name: "ProductGallery",
  __ssrInlineRender: true,
  props: ["images", "isInWishList"],
  emits: ["changeIsInWishList"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isClient = ref(false);
    const selectedImage = ref(props.images[0].large);
    ref(false);
    ref(0);
    ref(0);
    onBeforeUpdate(() => {
      var _a;
      if (![...props.images].some(({ large }) => large == selectedImage.value))
        selectedImage.value = (_a = props.images[0]) == null ? void 0 : _a.large;
    });
    computed({
      get() {
        const data = [];
        props.images.forEach((element) => {
          data.push(element.x_large);
        });
        return data;
      },
      set() {
      }
    });
    computed(() => isMobile && !isTablet);
    const toggleIsInWishList = () => {
      emit("changeIsInWishList");
    };
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_link = BLink;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-gallery" }, _attrs))} data-v-9ac7d3c0><div class="selected-image-holder d-none d-md-block" data-v-9ac7d3c0>`);
      _push(ssrRenderComponent(_component_b_link, {
        href: "#",
        onClick: toggleIsInWishList
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.isInWishList) {
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "heart text-secondary",
                icon: ["fas", "heart"]
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "heart",
                icon: ["far", "heart"]
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              __props.isInWishList ? (openBlock(), createBlock(_component_font_awesome_icon, {
                key: 0,
                class: "heart text-secondary",
                icon: ["fas", "heart"]
              })) : (openBlock(), createBlock(_component_font_awesome_icon, {
                key: 1,
                class: "heart",
                icon: ["far", "heart"]
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="selected-image" style="${ssrRenderStyle({ backgroundImage: `url(${selectedImage.value})` })}" data-v-9ac7d3c0></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/product/ProductGallery.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProductGallery = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9ac7d3c0"]]);
const _sfc_main$5 = {
  __name: "ProductCardModal",
  __ssrInlineRender: true,
  props: {
    product: Object,
    priceRange: Object,
    quantity: Number,
    products: Array
  },
  setup(__props) {
    const { hide } = useModal("ProductCardModal");
    const isClient = ref(false);
    const router = useRouter();
    const clickOk = () => {
      router.push("/checkout");
    };
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BModal = BModal;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BButton = BButton;
      if (isClient.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_BModal, {
          id: "ProductCardModal",
          "hide-header": true,
          "hide-footer": true,
          key: __props.quantity
        }, {
          default: withCtx(({ visible }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BRow, { "no-gutters": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "4",
                      cols: "12"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.product.image.large) {
                            _push4(`<img${ssrRenderAttr("src", __props.product.image.large)}${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.product.image.large ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: __props.product.image.large
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "8",
                      cols: "12",
                      class: "position-relative"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="product-name-wrapper"${_scopeId3}><p class="my-4 product-name"${_scopeId3}>${ssrInterpolate(__props.product.name)}</p></div><p class="my-price"${_scopeId3}> €${ssrInterpolate(__props.priceRange.maximum_price.final_price.value.toFixed(2).replace(".", ","))}</p><span class="continue-shopping"${_scopeId3}> &lt; ${ssrInterpolate(_ctx.$t("continue_shopping"))}</span>`);
                          _push4(ssrRenderComponent(_component_BRow, {
                            "no-gutters": "",
                            class: "btn-text-wrapper w-100"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BCol, { md: "7" }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="added-product mb-10 mb-md-0"${_scopeId5}>${ssrInterpolate(_ctx.$t("added_product"))}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "added-product mb-10 mb-md-0" }, toDisplayString(_ctx.$t("added_product")), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BCol, {
                                  md: "5",
                                  class: "text-end"
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_BButton, {
                                        type: "button",
                                        variant: "secondary",
                                        onClick: clickOk,
                                        class: "ml-20 complete-order"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.$t("complete_order"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_BButton, {
                                          type: "button",
                                          variant: "secondary",
                                          onClick: clickOk,
                                          class: "ml-20 complete-order"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BCol, { md: "7" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "added-product mb-10 mb-md-0" }, toDisplayString(_ctx.$t("added_product")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BCol, {
                                    md: "5",
                                    class: "text-end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BButton, {
                                        type: "button",
                                        variant: "secondary",
                                        onClick: clickOk,
                                        class: "ml-20 complete-order"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", { class: "product-name-wrapper" }, [
                              createVNode("p", { class: "my-4 product-name" }, toDisplayString(__props.product.name), 1)
                            ]),
                            createVNode("p", { class: "my-price" }, " €" + toDisplayString(__props.priceRange.maximum_price.final_price.value.toFixed(2).replace(".", ",")), 1),
                            createVNode("span", {
                              class: "continue-shopping",
                              onClick: unref(hide)
                            }, " < " + toDisplayString(_ctx.$t("continue_shopping")), 9, ["onClick"]),
                            createVNode(_component_BRow, {
                              "no-gutters": "",
                              class: "btn-text-wrapper w-100"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BCol, { md: "7" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "added-product mb-10 mb-md-0" }, toDisplayString(_ctx.$t("added_product")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BCol, {
                                  md: "5",
                                  class: "text-end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BButton, {
                                      type: "button",
                                      variant: "secondary",
                                      onClick: clickOk,
                                      class: "ml-20 complete-order"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BCol, {
                        md: "4",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          __props.product.image.large ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: __props.product.image.large
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, {
                        md: "8",
                        cols: "12",
                        class: "position-relative"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "product-name-wrapper" }, [
                            createVNode("p", { class: "my-4 product-name" }, toDisplayString(__props.product.name), 1)
                          ]),
                          createVNode("p", { class: "my-price" }, " €" + toDisplayString(__props.priceRange.maximum_price.final_price.value.toFixed(2).replace(".", ",")), 1),
                          createVNode("span", {
                            class: "continue-shopping",
                            onClick: unref(hide)
                          }, " < " + toDisplayString(_ctx.$t("continue_shopping")), 9, ["onClick"]),
                          createVNode(_component_BRow, {
                            "no-gutters": "",
                            class: "btn-text-wrapper w-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCol, { md: "7" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "added-product mb-10 mb-md-0" }, toDisplayString(_ctx.$t("added_product")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BCol, {
                                md: "5",
                                class: "text-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BButton, {
                                    type: "button",
                                    variant: "secondary",
                                    onClick: clickOk,
                                    class: "ml-20 complete-order"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BRow, { "no-gutters": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, {
                      md: "4",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        __props.product.image.large ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: __props.product.image.large
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, {
                      md: "8",
                      cols: "12",
                      class: "position-relative"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "product-name-wrapper" }, [
                          createVNode("p", { class: "my-4 product-name" }, toDisplayString(__props.product.name), 1)
                        ]),
                        createVNode("p", { class: "my-price" }, " €" + toDisplayString(__props.priceRange.maximum_price.final_price.value.toFixed(2).replace(".", ",")), 1),
                        createVNode("span", {
                          class: "continue-shopping",
                          onClick: unref(hide)
                        }, " < " + toDisplayString(_ctx.$t("continue_shopping")), 9, ["onClick"]),
                        createVNode(_component_BRow, {
                          "no-gutters": "",
                          class: "btn-text-wrapper w-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCol, { md: "7" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "added-product mb-10 mb-md-0" }, toDisplayString(_ctx.$t("added_product")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BCol, {
                              md: "5",
                              class: "text-end"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BButton, {
                                  type: "button",
                                  variant: "secondary",
                                  onClick: clickOk,
                                  class: "ml-20 complete-order"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("complete_order")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/product/ProductCardModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProductPricing",
  __ssrInlineRender: true,
  props: {
    product: Object,
    priceRange: Object,
    productConfig: Object,
    productBundle: Array
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    const formatCurrency = (amount) => {
      const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
      });
      return formatter.format(amount).replace(" ", "");
    };
    const finalPrice = computed(() => {
      if (props.product.__typename == "ConfigurableProduct") {
        if (store.getters["product/getCurrentChildSku"] != null) {
          const found = props.productConfig.variants.find((v) => {
            if (v.product.sku == store.getters["product/getCurrentChildSku"]) {
              return true;
            }
          });
          if (found != null) {
            return found.product.price_range.minimum_price.final_price.value.toFixed(2);
          }
        }
        if (props.product.price_range.minimum_price.final_price.value != props.product.price_range.maximum.final_price.value) {
          return props.product.price_range.minimum_price.final_price.value.toFixed(2) + " - " + props.product.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ",");
        }
        return props.product.price_range.minimum_price.final_price.value.toFixed(2);
      }
      if (props.product.price_range.minimum_price.final_price.value != props.product.price_range.maximum_price.final_price.value) {
        return props.product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ",") + " - " + props.product.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ",");
      }
      return props.product.price_range.minimum_price.final_price.value.toFixed(2);
    });
    const getProductPriceRange = computed(() => {
      if (props.product.__typename == "SimpleProduct") {
        return {
          text: '<span class="currentPrice">' + formatCurrency(finalPrice.value) + "</span>",
          discountType: 1
        };
      } else if (props.product.__typename == "BundleProduct") {
        if (props.productBundle) {
          let lowestPrice = props.product.price_range.minimum_price.final_price.value;
          let highestPrice = props.product.price_range.maximum_price.final_price.value;
          if (lowestPrice == highestPrice) {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + "</span>",
              discountType: 1
            };
          } else {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + " - " + formatCurrency(highestPrice) + "</span>",
              discountType: 2
            };
          }
        } else {
          return 1;
        }
      } else {
        if (props.productConfig) {
          let lowestPrice = props.product.price_range.maximum_price.regular_price.value;
          let highestPrice = props.product.price_range.minimum_price.final_price.value;
          props.productConfig.variants.forEach((v) => {
            if (v.product.price_range.minimum_price.final_price.value < lowestPrice) {
              lowestPrice = v.product.price_range.minimum_price.final_price.value;
            }
            if (v.product.price_range.maximum_price.final_price.value > highestPrice) {
              highestPrice = v.product.price_range.maximum_price.final_price.value;
            }
          });
          if (lowestPrice == highestPrice) {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + "</span>",
              discountType: 1
            };
          } else {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + " - " + formatCurrency(highestPrice) + "</span>",
              discountType: 2
            };
          }
        } else {
          return 1;
        }
      }
    });
    const getMaxDiscount = computed(() => {
      if (props.priceRange.minimum_price && props.priceRange.maximum_price) {
        return Math.max(
          props.priceRange.minimum_price.discount.percent_off,
          props.priceRange.maximum_price.discount.percent_off
        ).toFixed(0);
      } else if (props.priceRange.minimum_price) {
        return props.priceRange.minimum_price.discount.percent_off.toFixed(0);
      } else {
        return props.priceRange.maximum_price.discount.percent_off.toFixed(0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_b_link = BLink;
      if (isLoggedIn.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-between pt-10" }, _attrs))}>`);
        if (__props.priceRange.minimum_price.final_price.value != __props.priceRange.maximum_price.final_price.value) {
          _push(`<div class="top-wrap tw1">`);
          if (((_c = (_b = (_a = __props.product) == null ? void 0 : _a.manufacturer_price) == null ? void 0 : _b.price) == null ? void 0 : _c.value) > 0) {
            _push(`<span class="normal-price d-block">${ssrInterpolate(_ctx.$t("advice_price"))}: <span>${ssrInterpolate(formatCurrency((_f = (_e = (_d = __props.product) == null ? void 0 : _d.manufacturer_price) == null ? void 0 : _e.price) == null ? void 0 : _f.value))}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          if (((_h = (_g = __props.product) == null ? void 0 : _g.manufacturer_price) == null ? void 0 : _h.price.value) == null && __props.priceRange.maximum_price.regular_price.value > __props.priceRange.minimum_price.final_price.value) {
            _push(`<div class="d-flex align-items-end price-selection"><span class="normal-price">${ssrInterpolate(_ctx.$t("advice_price"))}: <span>${ssrInterpolate(formatCurrency(__props.priceRange.maximum_price.regular_price.value))}</span></span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="d-flex align-items-end price-selection"><span>${getProductPriceRange.value.text ?? ""}</span>`);
          if (getProductPriceRange.value.discountType == 1) {
            _push(`<span class="discount-comment">${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(__props.priceRange.minimum_price.discount.percent_off.toFixed(0))}%</span>`);
          } else {
            _push(`<!---->`);
          }
          if (getProductPriceRange.value.discountType == 2) {
            _push(`<span class="discount-comment2">${ssrInterpolate(_ctx.$t("to_discount"))} ${ssrInterpolate(getMaxDiscount.value)}% </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.priceRange.minimum_price.final_price.value == __props.priceRange.maximum_price.final_price.value) {
          _push(`<div class="top-wrap tw2">`);
          if (((_j = (_i = __props.product) == null ? void 0 : _i.manufacturer_price) == null ? void 0 : _j.price.value) > 0) {
            _push(`<span class="normal-price d-block">${ssrInterpolate(_ctx.$t("advice_price"))}: <span>${ssrInterpolate(formatCurrency((_l = (_k = __props.product) == null ? void 0 : _k.manufacturer_price) == null ? void 0 : _l.price.value))}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          if (__props.priceRange.minimum_price.regular_price.value > __props.priceRange.minimum_price.final_price.value) {
            _push(`<div class="d-flex align-items-end price-selection mb-10"><span class="normal-price">${ssrInterpolate(_ctx.$t("advice_price"))}: <span>${ssrInterpolate(formatCurrency(__props.priceRange.minimum_price.regular_price.value))}</span></span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="d-flex align-items-end price-selection">${getProductPriceRange.value.text ?? ""}</div>`);
          if (__props.priceRange.minimum_price.discount.percent_off > 0) {
            _push(`<div class="d-flex align-items-end price-selection"><span class="discount-comment">${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(__props.priceRange.minimum_price.discount.percent_off.toFixed(0))}%</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.product.brand && __props.product.brand.logo) {
          _push(`<div class="product-logo">`);
          _push(ssrRenderComponent(_component_b_link, {
            href: `/` + __props.product.brand.urlKey
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", __props.product.brand.logo)}${ssrRenderAttr("alt", __props.product.brand.title)}${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: __props.product.brand.logo,
                    alt: __props.product.brand.title
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "login-see-price" }, _attrs))}>${ssrInterpolate(_ctx.$t("login_see_price"))}</span>`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/product/ProductPricing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProductStoreAvailability",
  __ssrInlineRender: true,
  props: {
    product: Object,
    productConfig: Object
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const availability = computed(() => {
      if (props.product.__typename == "SimpleProduct") {
        return props.product.store_availability;
      }
      if (props.productConfig && props.product.__typename == "ConfigurableProduct") {
        if (store.getters["product/getCurrentChildSku"] != null) {
          const found = props.productConfig.variants.find((v) => {
            if (v.product.sku == store.getters["product/getCurrentChildSku"]) {
              return true;
            }
          });
          if (found != null) {
            return found.product.store_availability;
          }
        }
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "store_availability" }, _attrs))}>`);
      if (((_a = availability.value) == null ? void 0 : _a.length) > 0) {
        _push(`<div class="selection-category d-flex justify-content-between">`);
        if (((_b = availability.value) == null ? void 0 : _b.length) == 1) {
          _push(`<span class="select-size">${ssrInterpolate(_ctx.$t("store_availability"))}:</span>`);
        } else {
          _push(`<span class="select-size">${ssrInterpolate(_ctx.$t("store_availability_multipe"))}:</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_c = availability.value) == null ? void 0 : _c.length) > 0) {
        _push(`<div class="d-flex flex-column flex-md-row justify-content-between more-info"><div class="available-stores mb-20 mb-md-0 d-none d-sm-block"><!--[-->`);
        ssrRenderList(availability.value, (astore, index) => {
          _push(`<div><span class="d-block fw-bolder">${ssrInterpolate(astore.store.name)}:</span></div>`);
        });
        _push(`<!--]--></div><div class="stock d-none d-sm-block"><!--[-->`);
        ssrRenderList(availability.value, (astore, index) => {
          _push(`<div>`);
          if (astore.has_stock == true) {
            _push(`<span class="d-block text-info">${ssrInterpolate(_ctx.$t("in_stock"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (astore.has_stock != true) {
            _push(`<span class="d-block text-warning">${ssrInterpolate(_ctx.$t("not_in_stock"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="available_stores_mobile d-block d-sm-none"><!--[-->`);
      ssrRenderList(availability.value, (astore, index) => {
        _push(`<div><span class="d-inline-block">${ssrInterpolate(astore.store.name.replace("Wieleroutfits ", ""))}</span>`);
        if (astore.has_stock == true) {
          _push(`<span class="d-inline-block text-info">${ssrInterpolate(_ctx.$t("in_stock"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (astore.has_stock != true) {
          _push(`<span class="d-inline-block text-warning">${ssrInterpolate(_ctx.$t("not_in_stock"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/product/ProductStoreAvailability.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProductParameters",
  __ssrInlineRender: true,
  props: {
    parameters: { type: Object },
    isInWishList: { type: Boolean }
  },
  setup(__props) {
    const quantity = ref(1);
    const store = useStore();
    const product = computed(() => store.getters["product/getCurrentProduct"]);
    const productConfig = computed(() => store.getters["product/getCurrentConfig"]);
    const options = computed(() => store.getters["product/getCurrentProductOptions"]);
    const crossSell = computed(() => store.getters["product/getCrossSellProducts"]);
    const upSell = computed(() => store.getters["product/getUpSellProducts"]);
    const priceRange = computed(() => {
      if (product.value && productConfig.value && product.value.__typename == "ConfigurableProduct") {
        if (store.getters["product/getCurrentChildSku"] != null) {
          const found = productConfig.value.variants.find((v) => {
            if (v.product.sku == store.getters["product/getCurrentChildSku"]) {
              return true;
            }
          });
          if (found != null) {
            return found.product.price_range;
          }
        } else if (productConfig.value.variants.length == 1) {
          return productConfig.value.variants[0].product.price_range;
        }
        return product.value.price_range;
      }
      return product.value.price_range;
    });
    const getShortDescription = computed(
      () => product.value.short_description.html.replace(/<p>(.*)<\/p>/gis, "$1").replace(/&gt;/gs, ">").replace(/&lt;/gs, "<")
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-parameters" }, _attrs))}><div class="short-desc">${getShortDescription.value ?? ""}</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        product: product.value,
        priceRange: priceRange.value,
        quantity: quantity.value,
        products: upSell.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        product: product.value,
        priceRange: priceRange.value,
        productConfig: productConfig.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        parameters: __props.parameters,
        product: product.value,
        options: options.value,
        productConfig: productConfig.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        product: product.value,
        productConfig: productConfig.value,
        options: options.value
      }, null, _parent));
      if (crossSell.value.length > 0) {
        _push(`<div class="product-gallery-block"><h2>${ssrInterpolate(_ctx.$t("cross_sell_products"))}</h2>`);
        _push(ssrRenderComponent(unref(MoreProductsCarousel$1), { products: crossSell.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (upSell.value.length > 0) {
        _push(`<div class="product-gallery-block"><h2>${ssrInterpolate(_ctx.$t("related_products"))}</h2>`);
        _push(ssrRenderComponent(unref(MoreProductsCarousel$1), { products: upSell.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/ProductParameters.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MoreProductsCarousel",
  __ssrInlineRender: true,
  props: {
    products: { type: Array },
    useBreakPoint: { type: Boolean, default: false }
  },
  setup(__props) {
    const breakpoints = {
      // 768px and up
      768: {
        itemsToShow: 3
      },
      // 992px and up
      992: {
        itemsToShow: 4
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-df1e6e22>`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "more-products--carousel",
        autoplay: 0,
        itemsToShow: 2,
        itemsToScroll: 1,
        breakpoints: __props.useBreakPoint ? breakpoints : {},
        snapAlign: "start"
      }, createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.products, (product) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: product.sku,
                class: "more-products--slide position-relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ProductCard), { product }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ProductCard), { product }, null, 8, ["product"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: product.sku,
                  class: "more-products--slide position-relative"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ProductCard), { product }, null, 8, ["product"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 2
      }, [
        __props.products.length > 1 ? {
          name: "addons",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Navigation), null, {
                prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="lnr lnr-chevron-left" data-v-df1e6e22${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "lnr lnr-chevron-left" })
                    ];
                  }
                }),
                next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="lnr lnr-chevron-right" data-v-df1e6e22${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "lnr lnr-chevron-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Navigation), null, {
                  prev: withCtx(() => [
                    createVNode("i", { class: "lnr lnr-chevron-left" })
                  ]),
                  next: withCtx(() => [
                    createVNode("i", { class: "lnr lnr-chevron-right" })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/MoreProductsCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MoreProductsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-df1e6e22"]]);
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    const gtm = useGtm();
    const { t } = useI18n();
    const store = useStore();
    const isClient = ref(false);
    const showDismissibleAlert = ref(false);
    const product = computed(() => store.getters["product/getCurrentProduct"]);
    const related = computed(() => store.getters["product/getRelated"]);
    const productConfig = computed(() => store.getters["product/getCurrentConfig"]);
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    const productForm = computed(() => store.getters["forms/getProductForm"]);
    const mobileCheck = computed(() => {
      if (isMobile || isTablet) {
        return true;
      }
      return false;
    });
    const finalPrice = computed(() => {
      if (product.value.__typename == "ConfigurableProduct") {
        if (store.getters["product/getCurrentChildSku"] != null) {
          const found = productConfig.value.variants.find((v) => {
            if (v.product.sku == store.getters["product/getCurrentChildSku"]) {
              return true;
            }
          });
          if (found != null) {
            return found.product.price_range.minimum_price.final_price.value.toFixed(2);
          }
        }
        if (product.value.price_range.minimum_price.final_price.value != product.value.price_range.maximum_price.final_price.value) {
          return product.value.price_range.minimum_price.final_price.value.toFixed(2) + " - " + product.value.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ",");
        }
        return product.value.price_range.minimum_price.final_price.value.toFixed(2);
      }
      if (product.value.price_range.minimum_price.final_price.value != product.value.price_range.maximum_price.final_price.value) {
        return product.value.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ",") + " - " + product.value.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ",");
      }
      return product.value.price_range.minimum_price.final_price.value.toFixed(2);
    });
    const regularPrice = computed(() => {
      if (product.value.__typename == "ConfigurableProduct") {
        if (store.getters["product/getCurrentChildSku"] != null) {
          const found = productConfig.value.variants.find((v) => {
            if (v.product.sku == store.getters["product/getCurrentChildSku"]) {
              return true;
            }
          });
          if (found != null) {
            return found.product.price_range.minimum_price.regular_price.value.toFixed(2);
          }
        }
        if (product.value.price_range.minimum_price.regular_price.value != product.value.price_range.maximum_price.regular_price.value) {
          return product.value.price_range.minimum_price.regular_price.value.toFixed(2) + " - " + product.value.price_range.maximum_price.regular_price.value.toFixed(2).replace(".", ",");
        }
        return product.value.price_range.minimum_price.regular_price.value.toFixed(2);
      }
      if (product.value.price_range.minimum_price.regular_price.value != product.value.price_range.maximum_price.regular_price.value) {
        return product.value.price_range.minimum_price.regular_price.value.toFixed(2).replace(".", ",") + " - " + product.value.price_range.maximum_price.regular_price.value.toFixed(2).replace(".", ",");
      }
      return product.value.price_range.minimum_price.regular_price.value.toFixed(2);
    });
    const metaInformation = computed(() => ({
      title: product.value ? product.value.meta_title ? product.value.meta_title : product.value.name ?? "" : "",
      keywords: product.value && product.value.meta_keyword ? product.value.meta_keyword ?? "" : "",
      description: product.value ? product.value.meta_description ? product.value.meta_description ?? "" : product.value.short_description ?? "" ? product.value.short_description.html ?? "" : "" : "",
      image: product.value ? product.value.image.url : "",
      price: product.value ? product.value.price_range.minimum_price.final_price.value ?? "" : "",
      priceCurrency: "EUR",
      pageTitle: product.value ? product.value.name ?? "" : ""
    }));
    useHead({
      meta: [
        {
          name: "title",
          content: () => metaInformation.value["title"]
        },
        {
          name: "keywords",
          content: () => metaInformation.value["keywords"]
        },
        {
          name: "description",
          content: () => metaInformation.value["description"]
        },
        { property: "og:type", content: "product" },
        {
          property: "og:title",
          content: () => metaInformation.value["title"]
        },
        {
          property: "og:image",
          content: () => metaInformation.value["image"]
        },
        {
          property: "og:description",
          content: () => metaInformation.value["description"]
        },
        {
          property: "product:price:amount",
          content: () => metaInformation.value["price"]
        },
        {
          property: "product:price:currency",
          content: () => metaInformation.value["priceCurrency"]
        }
      ],
      title: () => metaInformation.value["pageTitle"]
    });
    const updateGTM = () => {
      if (!isServer) {
        if (gtm.enabled() && product.value.name) {
          window == null ? void 0 : window.dataLayer.push({
            event: "eec.detail",
            ecommerce: {
              detail: {
                currency: "EUR",
                value: finalPrice.value,
                products: [
                  {
                    name: product.value.name,
                    id: product.value.sku,
                    price: regularPrice.value,
                    discount: (regularPrice.value - finalPrice.value).toFixed(2)
                  }
                ]
              }
            }
          });
        }
      }
    };
    watch(product, updateGTM, { immediate: true });
    const updateIsInWishList = () => {
      if (store.getters["user/getIsLoggedIn"] == true) {
        if (store.getters["user/isProductInWishlist"](product.value.sku) == true) {
          store.dispatch("user/setProductWishlistStatus", {
            sku: product.value.sku,
            parentSku: null,
            store
          });
        } else {
          if (product.value.__typename == "SimpleProduct") {
            store.dispatch("user/setProductWishlistStatus", {
              sku: product.value.sku,
              parentSku: null,
              store
            });
          } else {
            const retval = store.getters["product/getCurrentChildSku"];
            if (retval == null) {
              const msg = {
                type: "danger",
                title: t("wishlist error"),
                text: t("wishlist_select_options")
              };
              store.dispatch("messages/sendMessage", { message: msg });
            } else {
              store.dispatch("user/setProductWishlistStatus", {
                sku: store.getters["product/getCurrentChildSku"],
                parentSku: product.value.sku,
                store
              });
            }
          }
        }
      } else {
        const msg = {
          type: "danger",
          title: t("wishlist error"),
          text: t("wishlist_logged_in")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    };
    const updateBreadcrumbs = () => {
      if (product.value) {
        const current = product.value.name;
        let breadcrumb = { current, routes: [] };
        if (store.state.route.from.path != "/") ;
        store.commit("breadcrumbs/set", breadcrumb);
      }
    };
    onMounted(async () => {
      updateBreadcrumbs();
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
        const hello_retail_id = VueCookies.get("hello_retail_id");
        await store.dispatch("product/loadCrossSellProducts", {
          sku: product.value.sku,
          hello_retail_id
        });
        await store.dispatch("product/loadUpSellProducts", {
          sku: product.value.sku,
          hello_retail_id
        });
      } else {
        await store.dispatch("product/loadCrossSell", {
          sku: product.value.sku
        });
        await store.dispatch("product/loadUpSell", {
          sku: product.value.sku
        });
      }
      if (!isServer) {
        if (gtm.enabled()) {
          window.dataLayer.push({
            event: "eec.detail",
            ecommerce: {
              detail: {
                currency: "EUR",
                value: finalPrice.value,
                products: [
                  {
                    name: product.value.name,
                    id: product.value.sku,
                    price: regularPrice.value,
                    discount: (regularPrice.value - finalPrice.value).toFixed(2)
                  }
                ]
              }
            }
          });
        }
      }
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isClient.value) {
        _push(ssrRenderComponent(unref(_sfc_main$9), _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent2, _scopeId));
              if (product.value) {
                _push2(`<section class="product product-section ps-md-20 p-15 pt-0"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$b), {
                  modelValue: showDismissibleAlert.value,
                  "onUpdate:modelValue": ($event) => showDismissibleAlert.value = $event,
                  product: product.value
                }, null, _parent2, _scopeId));
                if (mobileCheck.value && !unref(isServer)) {
                  _push2(`<h1 class="product--name d-block"${_scopeId}>${ssrInterpolate(product.value.name)}</h1>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="row pb-md-20"${_scopeId}><div class="col-12 col-md-5"${_scopeId}>`);
                if (product.value.media_gallery.length > 0) {
                  _push2(ssrRenderComponent(unref(ProductGallery), {
                    onChangeIsInWishList: updateIsInWishList,
                    images: product.value.media_gallery,
                    isInWishList: _ctx.$store.getters["user/isProductInWishlist"](product.value.sku)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.media_gallery.length == 0) {
                  _push2(ssrRenderComponent(unref(ProductGallery), {
                    onChangeIsInWishList: updateIsInWishList,
                    images: [product.value.image],
                    isInWishList: _ctx.$store.getters["user/isProductInWishlist"](product.value.sku)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (isLoggedIn.value) {
                  _push2(ssrRenderComponent(unref(_sfc_main$c), {
                    product: product.value,
                    addedQuantity: (qty) => _ctx.quantity = qty
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="col-12 col-md-7"${_scopeId}>`);
                if (!mobileCheck.value && !unref(isServer)) {
                  _push2(`<h1 class="product--name d-block"${_scopeId}>${ssrInterpolate(product.value.name)}</h1>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="product--sku d-block"${_scopeId}><strong${_scopeId}> ART. NR. </strong> : ${ssrInterpolate(product.value.sku)}</span>`);
                if (product.value.__typename != "BundleProduct") {
                  _push2(ssrRenderComponent(unref(_sfc_main$2), { isInWishList: false }, null, _parent2, _scopeId));
                } else if (product.value.__typename == "BundleProduct") {
                  _push2(ssrRenderComponent(unref(_sfc_main$d), { isInWishList: false }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
                if (((_a = related.value) == null ? void 0 : _a.length) > 0) {
                  _push2(`<div class="product-gallery-block"${_scopeId}><h2${_scopeId}>${ssrInterpolate(_ctx.$t("up_sell_products"))}</h2>`);
                  _push2(ssrRenderComponent(unref(MoreProductsCarousel), { products: related.value }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (productForm.value != null) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$e), {
                    product_sku: product.value.sku,
                    type: "product"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</section>`);
              } else {
                _push2(`<section${_scopeId}><div class="container"${_scopeId}><h4 class="no-product"${_scopeId}>${ssrInterpolate(_ctx.$t("no_product_found"))}</h4></div></section>`);
              }
            } else {
              return [
                createVNode(unref(_sfc_main$a)),
                product.value ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "product product-section ps-md-20 p-15 pt-0"
                }, [
                  createVNode(unref(_sfc_main$b), {
                    modelValue: showDismissibleAlert.value,
                    "onUpdate:modelValue": ($event) => showDismissibleAlert.value = $event,
                    product: product.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "product"]),
                  mobileCheck.value && !unref(isServer) ? (openBlock(), createBlock("h1", {
                    key: 0,
                    class: "product--name d-block"
                  }, toDisplayString(product.value.name), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "row pb-md-20" }, [
                    createVNode("div", { class: "col-12 col-md-5" }, [
                      product.value.media_gallery.length > 0 ? (openBlock(), createBlock(unref(ProductGallery), {
                        key: 0,
                        onChangeIsInWishList: updateIsInWishList,
                        images: product.value.media_gallery,
                        isInWishList: _ctx.$store.getters["user/isProductInWishlist"](product.value.sku)
                      }, null, 8, ["images", "isInWishList"])) : createCommentVNode("", true),
                      product.value.media_gallery.length == 0 ? (openBlock(), createBlock(unref(ProductGallery), {
                        key: 1,
                        onChangeIsInWishList: updateIsInWishList,
                        images: [product.value.image],
                        isInWishList: _ctx.$store.getters["user/isProductInWishlist"](product.value.sku)
                      }, null, 8, ["images", "isInWishList"])) : createCommentVNode("", true),
                      isLoggedIn.value ? (openBlock(), createBlock(unref(_sfc_main$c), {
                        key: 2,
                        product: product.value,
                        addedQuantity: (qty) => _ctx.quantity = qty
                      }, null, 8, ["product", "addedQuantity"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "col-12 col-md-7" }, [
                      !mobileCheck.value && !unref(isServer) ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "product--name d-block"
                      }, toDisplayString(product.value.name), 1)) : createCommentVNode("", true),
                      createVNode("span", { class: "product--sku d-block" }, [
                        createVNode("strong", null, " ART. NR. "),
                        createTextVNode(" : " + toDisplayString(product.value.sku), 1)
                      ]),
                      product.value.__typename != "BundleProduct" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: 1,
                        isInWishList: false
                      })) : product.value.__typename == "BundleProduct" ? (openBlock(), createBlock(unref(_sfc_main$d), {
                        key: 2,
                        isInWishList: false
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  ((_b = related.value) == null ? void 0 : _b.length) > 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "product-gallery-block"
                  }, [
                    createVNode("h2", null, toDisplayString(_ctx.$t("up_sell_products")), 1),
                    createVNode(unref(MoreProductsCarousel), { products: related.value }, null, 8, ["products"])
                  ])) : createCommentVNode("", true),
                  productForm.value != null ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(unref(_sfc_main$e), {
                      product_sku: product.value.sku,
                      type: "product"
                    }, null, 8, ["product_sku"])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("section", { key: 1 }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("h4", { class: "no-product" }, toDisplayString(_ctx.$t("no_product_found")), 1)
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Product-C6g6klwP.js.map
