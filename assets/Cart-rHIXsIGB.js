import { BButton } from "bootstrap-vue-next/components/BButton";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onMounted, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-DwhHUqbs.js";
import { M as MoreProductsCarousel } from "./MoreProductsCarousel-CQBsknMv.js";
import { C as CONFIG_JSON } from "../entry-server.js";
import { u as useCartInfo } from "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BCollapse";
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
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
import "@unhead/vue";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "mobile-device-detect";
const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const { cartCount, removeItem, cartItems, cartTotalPrice, cartTotalTaxPrices, cartTotalDiscounts, defaultShipping, quantityDown, quantityUp, cartSubTotalPrice } = useCartInfo();
    const router = useRouter();
    const store = useStore();
    const { t } = useI18n();
    const isServer = typeof window === "undefined";
    ref("");
    computed(() => store.getters["cart/getFreeShippingAmount"]);
    computed(() => {
      let items = t("items_in_cart", { numberOf: cartCount.value });
      items = '<i class="lnr lnr-cart me-7"></i>' + items.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      return items;
    });
    const getCartDeliveryTime = computed(() => store.getters["cart/getCartDeliveryTime"]);
    computed(() => store.getters["cart/getAppliedCouponCodes"]);
    const getCrossSellProducts = ref([]);
    const updateCartProduct = (product) => {
      removeItem(product.id);
      router.push(`/${product.product.url_key}`);
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
    };
    const updateCrossSellProducts = async () => {
      var _a;
      const skuList = (_a = cartItems.value) == null ? void 0 : _a.map((item) => item.product.sku);
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
        await store.dispatch("sale/loadCrossSellProducts", { skus: skuList });
      } else {
        await store.dispatch("sale/loadCrossSellForCart", { skus: skuList });
      }
      setTimeout(() => {
        getCrossSellProducts.value = store.getters["sale/getCrossSellProducts"];
      }, 2e3);
    };
    watch(
      () => cartItems.value,
      () => {
        updateCrossSellProducts();
      }
    );
    onMounted(() => {
      const bcrumb = { current: t("cart"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      updateCrossSellProducts();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BLink = BLink;
      const _component_BButton = BButton;
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "cart" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="cart pt-0 p-15"${_scopeId}><span class="cart-title mb-8 fw-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Checkout"))}</span><div class="d-md-flex d-none checkout-name col mt-10"${_scopeId}><span class="col-6"${_scopeId}>${ssrInterpolate(_ctx.$t("article"))}</span><span class="col-2 ps-10"${_scopeId}>${ssrInterpolate(_ctx.$t("number"))}</span><span class="col-2 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("unit_price"))}</span><span class="col-2 text-end pe-5"${_scopeId}>${ssrInterpolate(_ctx.$t("total_price"))}</span></div><!--[-->`);
            ssrRenderList(unref(cartItems), (cartItem) => {
              _push2(ssrRenderComponent(_component_BRow, {
                key: cartItem.id,
                class: "cart-item-row position-relative m-0 mt-5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "8",
                      class: "d-flex p-0 p-sm-5"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b, _c, _d;
                        if (_push4) {
                          _push4(`<div class="img" style="${ssrRenderStyle({
                            backgroundImage: `url(${cartItem.product.image.medium})`
                          })}"${_scopeId3}></div><div class="d-flex flex-column flex-md-row justify-content-between flex-grow-1"${_scopeId3}><div class="product"${_scopeId3}><span class="product--name lh-1 mb-0"${_scopeId3}>${ssrInterpolate(cartItem.product.name)}</span>`);
                          if (typeof cartItem.configurable_options != "undefined") {
                            _push4(`<div${_scopeId3}><!--[-->`);
                            ssrRenderList(cartItem.configurable_options, (option, index) => {
                              _push4(`<div class="d-flex align-items-center mb-7"${_scopeId3}><span class="size"${_scopeId3}>${ssrInterpolate(option.option_label)}: </span><span class="size-box"${_scopeId3}>${ssrInterpolate(option.value_label)}</span>`);
                              if (typeof cartItem.configured_variant.DeliveryTime !== void 0) {
                                _push4(`<span style="${ssrRenderStyle(
                                  "color: " + cartItem.configured_variant.DeliveryTime.color + " !important"
                                )}" class="deliverytime"${_scopeId3}>${ssrInterpolate(cartItem.configured_variant.DeliveryTime.long)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<span class="product--price text-blue d-md-none ms-20 config"${_scopeId3}>${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span></div>`);
                            });
                            _push4(`<!--]-->`);
                            _push4(ssrRenderComponent(_component_BLink, {
                              class: "change-price text-blue d-none d-md-inline-block",
                              onClick: ($event) => updateCartProduct(cartItem)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(_ctx.$t("click_to_change_options"))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(_ctx.$t("click_to_change_options")), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (typeof cartItem.configurable_options == "undefined") {
                            _push4(`<div${_scopeId3}>`);
                            if (typeof cartItem.product.DeliveryTime !== void 0) {
                              _push4(`<span style="${ssrRenderStyle("color: " + ((_a = cartItem.product.DeliveryTime) == null ? void 0 : _a.color) + " !important")}" class="deliverytime"${_scopeId3}>${ssrInterpolate((_b = cartItem.product.DeliveryTime) == null ? void 0 : _b.long)}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="d-flex justify-content-between"${_scopeId3}><div class="d-flex quantity-and-btn"${_scopeId3}><div class="quantity-input d-flex"${_scopeId3}><input type="text" min="1"${ssrRenderAttr("value", cartItem.quantity)} pattern="[0-9]+" name="quantity" disabled${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BButton, {
                            variant: "secondary",
                            class: "quan-btn p-8 pt-1 pb-1 text-white",
                            onClick: unref(quantityDown)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`-`);
                              } else {
                                return [
                                  createTextVNode("-")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BButton, {
                            variant: "secondary",
                            class: "quan-btn p-8 pt-1 pb-1 text-white",
                            onClick: unref(quantityUp)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` +`);
                              } else {
                                return [
                                  createTextVNode(" +")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div><span class="product--price text-end d-md-none mt-4"${_scopeId3}> ${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span></div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "img",
                              style: {
                                backgroundImage: `url(${cartItem.product.image.medium})`
                              }
                            }, null, 4),
                            createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between flex-grow-1" }, [
                              createVNode("div", { class: "product" }, [
                                createVNode("span", { class: "product--name lh-1 mb-0" }, toDisplayString(cartItem.product.name), 1),
                                typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "d-flex align-items-center mb-7"
                                    }, [
                                      createVNode("span", { class: "size" }, toDisplayString(option.option_label) + ": ", 1),
                                      createVNode("span", { class: "size-box" }, toDisplayString(option.value_label), 1),
                                      typeof cartItem.configured_variant.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        style: "color: " + cartItem.configured_variant.DeliveryTime.color + " !important",
                                        class: "deliverytime"
                                      }, toDisplayString(cartItem.configured_variant.DeliveryTime.long), 5)) : createCommentVNode("", true),
                                      createVNode("span", { class: "product--price text-blue d-md-none ms-20 config" }, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                    ]);
                                  }), 128)),
                                  createVNode(_component_BLink, {
                                    class: "change-price text-blue d-none d-md-inline-block",
                                    onClick: ($event) => updateCartProduct(cartItem)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("click_to_change_options")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : createCommentVNode("", true),
                                typeof cartItem.configurable_options == "undefined" ? (openBlock(), createBlock("div", { key: 1 }, [
                                  typeof cartItem.product.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    style: "color: " + ((_c = cartItem.product.DeliveryTime) == null ? void 0 : _c.color) + " !important",
                                    class: "deliverytime"
                                  }, toDisplayString((_d = cartItem.product.DeliveryTime) == null ? void 0 : _d.long), 5)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "d-flex justify-content-between" }, [
                                createVNode("div", { class: "d-flex quantity-and-btn" }, [
                                  createVNode("div", { class: "quantity-input d-flex" }, [
                                    createVNode("input", {
                                      type: "text",
                                      min: "1",
                                      value: cartItem.quantity,
                                      pattern: "[0-9]+",
                                      name: "quantity",
                                      ref_for: true,
                                      ref: "inputQuantity",
                                      disabled: ""
                                    }, null, 8, ["value"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: unref(quantityDown)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("-")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: withModifiers(unref(quantityUp), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" +")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("span", { class: "product--price text-end d-md-none mt-4" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "2",
                      class: "d-none d-md-block p-0 text-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="product--price"${_scopeId3}> ${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "2",
                      class: "d-none d-md-block p-0 pe-5 text-end"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="product--price"${_scopeId3}> ${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BCol, {
                        md: "8",
                        class: "d-flex p-0 p-sm-5"
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", {
                              class: "img",
                              style: {
                                backgroundImage: `url(${cartItem.product.image.medium})`
                              }
                            }, null, 4),
                            createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between flex-grow-1" }, [
                              createVNode("div", { class: "product" }, [
                                createVNode("span", { class: "product--name lh-1 mb-0" }, toDisplayString(cartItem.product.name), 1),
                                typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "d-flex align-items-center mb-7"
                                    }, [
                                      createVNode("span", { class: "size" }, toDisplayString(option.option_label) + ": ", 1),
                                      createVNode("span", { class: "size-box" }, toDisplayString(option.value_label), 1),
                                      typeof cartItem.configured_variant.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        style: "color: " + cartItem.configured_variant.DeliveryTime.color + " !important",
                                        class: "deliverytime"
                                      }, toDisplayString(cartItem.configured_variant.DeliveryTime.long), 5)) : createCommentVNode("", true),
                                      createVNode("span", { class: "product--price text-blue d-md-none ms-20 config" }, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                    ]);
                                  }), 128)),
                                  createVNode(_component_BLink, {
                                    class: "change-price text-blue d-none d-md-inline-block",
                                    onClick: ($event) => updateCartProduct(cartItem)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("click_to_change_options")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : createCommentVNode("", true),
                                typeof cartItem.configurable_options == "undefined" ? (openBlock(), createBlock("div", { key: 1 }, [
                                  typeof cartItem.product.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    style: "color: " + ((_a = cartItem.product.DeliveryTime) == null ? void 0 : _a.color) + " !important",
                                    class: "deliverytime"
                                  }, toDisplayString((_b = cartItem.product.DeliveryTime) == null ? void 0 : _b.long), 5)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "d-flex justify-content-between" }, [
                                createVNode("div", { class: "d-flex quantity-and-btn" }, [
                                  createVNode("div", { class: "quantity-input d-flex" }, [
                                    createVNode("input", {
                                      type: "text",
                                      min: "1",
                                      value: cartItem.quantity,
                                      pattern: "[0-9]+",
                                      name: "quantity",
                                      ref_for: true,
                                      ref: "inputQuantity",
                                      disabled: ""
                                    }, null, 8, ["value"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: unref(quantityDown)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("-")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: withModifiers(unref(quantityUp), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" +")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("span", { class: "product--price text-end d-md-none mt-4" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 2
                      }, 1024),
                      createVNode(_component_BCol, {
                        md: "2",
                        class: "d-none d-md-block p-0 text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BCol, {
                        md: "2",
                        class: "d-none d-md-block p-0 pe-5 text-end"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_BRow, { class: "discount-and-total" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BCol, {
                    md: "5",
                    lg: "4",
                    class: "coupon-discount"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="lnr lnr-trash trash-icon"${_scopeId3}></span><span class="trash-name"${_scopeId3}>${ssrInterpolate(_ctx.$t("delete_everything"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "lnr lnr-trash trash-icon" }),
                          createVNode("span", { class: "trash-name" }, toDisplayString(_ctx.$t("delete_everything")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCol, {
                    md: "6",
                    xl: "5",
                    "offset-md": "1",
                    "offset-lg": "2",
                    "offset-xl": "3",
                    class: "cost"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-content-end align-items-center gap-25"${_scopeId3}><span class="subtotal-heading d-block pb-0"${_scopeId3}>${ssrInterpolate(_ctx.$t("sub_total"))}</span><span class="subtotal-price"${_scopeId3}>${ssrInterpolate(formatCurrency(unref(cartSubTotalPrice)))}</span></div><ul class="prices"${_scopeId3}>`);
                        if (unref(defaultShipping) != null) {
                          _push4(`<li class="d-flex justify-content-end gap-25"${_scopeId3}><span class="name"${_scopeId3}>${ssrInterpolate(_ctx.$t("shipping_cost"))}</span>`);
                          if (typeof unref(defaultShipping).amount != "undefined") {
                            _push4(`<span class="subtotal-price ml-10"${_scopeId3}>${ssrInterpolate(formatCurrency(unref(defaultShipping).amount.value))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(cartTotalDiscounts), (discount, index) => {
                          _push4(`<li class="d-flex justify-content-end"${_scopeId3}><span class="name"${_scopeId3}>${ssrInterpolate(discount.label)}</span><span class="cost ml-10"${_scopeId3}>- ${ssrInterpolate(formatCurrency(discount.amount.value))}</span></li>`);
                        });
                        _push4(`<!--]--><!--[-->`);
                        ssrRenderList(unref(cartTotalTaxPrices), (price, index) => {
                          _push4(`<li class="d-flex justify-content-end gap-25"${_scopeId3}><span class="name"${_scopeId3}>${ssrInterpolate(price.label)}</span><span class="cost ml-10"${_scopeId3}>${ssrInterpolate(formatCurrency(price.amount.value))}</span></li>`);
                        });
                        _push4(`<!--]--></ul><hr class="w-75 hr-line-total"${_scopeId3}><div class="d-flex justify-content-end align-items-center gap-25 mb-5"${_scopeId3}><span class="subtotal-heading fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.$t("total"))}</span><span class="subtotal-price ml-10"${_scopeId3}>${ssrInterpolate(formatCurrency(unref(cartTotalPrice)))}</span></div>`);
                        if (getCartDeliveryTime.value) {
                          _push4(`<div class="time-delivery"${_scopeId3}>${ssrInterpolate(_ctx.$t("estimated_shipping_time"))}: <span style="${ssrRenderStyle("color: " + getCartDeliveryTime.value.color + " !important")}"${_scopeId3}>${ssrInterpolate(getCartDeliveryTime.value.long)}</span></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="d-flex justify-content-end align-items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BButton, {
                          onClick: ($event) => _ctx.$router.push("/checkout"),
                          class: "text-light py-4 order-button"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Complete_order"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25" }, [
                            createVNode("span", { class: "subtotal-heading d-block pb-0" }, toDisplayString(_ctx.$t("sub_total")), 1),
                            createVNode("span", { class: "subtotal-price" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
                          ]),
                          createVNode("ul", { class: "prices" }, [
                            unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                              key: 0,
                              class: "d-flex justify-content-end gap-25"
                            }, [
                              createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")), 1),
                              typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "subtotal-price ml-10"
                              }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                              return openBlock(), createBlock("li", {
                                class: "d-flex justify-content-end",
                                key: index
                              }, [
                                createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                                createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                              ]);
                            }), 128)),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                              return openBlock(), createBlock("li", {
                                class: "d-flex justify-content-end gap-25",
                                key: index
                              }, [
                                createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                                createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                              ]);
                            }), 128))
                          ]),
                          createVNode("hr", { class: "w-75 hr-line-total" }),
                          createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25 mb-5" }, [
                            createVNode("span", { class: "subtotal-heading fw-bold" }, toDisplayString(_ctx.$t("total")), 1),
                            createVNode("span", { class: "subtotal-price ml-10" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
                          ]),
                          getCartDeliveryTime.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "time-delivery"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("estimated_shipping_time")) + ": ", 1),
                            createVNode("span", {
                              style: "color: " + getCartDeliveryTime.value.color + " !important"
                            }, toDisplayString(getCartDeliveryTime.value.long), 5)
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "d-flex justify-content-end align-items-center" }, [
                            createVNode(_component_BButton, {
                              onClick: ($event) => _ctx.$router.push("/checkout"),
                              class: "text-light py-4 order-button"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BCol, {
                      md: "5",
                      lg: "4",
                      class: "coupon-discount"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "lnr lnr-trash trash-icon" }),
                        createVNode("span", { class: "trash-name" }, toDisplayString(_ctx.$t("delete_everything")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, {
                      md: "6",
                      xl: "5",
                      "offset-md": "1",
                      "offset-lg": "2",
                      "offset-xl": "3",
                      class: "cost"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25" }, [
                          createVNode("span", { class: "subtotal-heading d-block pb-0" }, toDisplayString(_ctx.$t("sub_total")), 1),
                          createVNode("span", { class: "subtotal-price" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
                        ]),
                        createVNode("ul", { class: "prices" }, [
                          unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                            key: 0,
                            class: "d-flex justify-content-end gap-25"
                          }, [
                            createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")), 1),
                            typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "subtotal-price ml-10"
                            }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                            return openBlock(), createBlock("li", {
                              class: "d-flex justify-content-end",
                              key: index
                            }, [
                              createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                              createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                            ]);
                          }), 128)),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                            return openBlock(), createBlock("li", {
                              class: "d-flex justify-content-end gap-25",
                              key: index
                            }, [
                              createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                              createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("hr", { class: "w-75 hr-line-total" }),
                        createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25 mb-5" }, [
                          createVNode("span", { class: "subtotal-heading fw-bold" }, toDisplayString(_ctx.$t("total")), 1),
                          createVNode("span", { class: "subtotal-price ml-10" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
                        ]),
                        getCartDeliveryTime.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "time-delivery"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("estimated_shipping_time")) + ": ", 1),
                          createVNode("span", {
                            style: "color: " + getCartDeliveryTime.value.color + " !important"
                          }, toDisplayString(getCartDeliveryTime.value.long), 5)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "d-flex justify-content-end align-items-center" }, [
                          createVNode(_component_BButton, {
                            onClick: ($event) => _ctx.$router.push("/checkout"),
                            class: "text-light py-4 order-button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            if (getCrossSellProducts.value && getCrossSellProducts.value.length > 0) {
              _push2(`<section class="more-products"${_scopeId}><div class=""${_scopeId}><span class="section-title d-block font-weight-normal text-center"${_scopeId}>Klanten bestelden ook</span>`);
              if (!isServer) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(MoreProductsCarousel), {
                  class: "pt-5",
                  products: getCrossSellProducts.value,
                  useBreakPoint: true
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              createVNode("section", { class: "cart pt-0 p-15" }, [
                createVNode("span", { class: "cart-title mb-8 fw-bold" }, toDisplayString(_ctx.$t("Checkout")), 1),
                createVNode("div", { class: "d-md-flex d-none checkout-name col mt-10" }, [
                  createVNode("span", { class: "col-6" }, toDisplayString(_ctx.$t("article")), 1),
                  createVNode("span", { class: "col-2 ps-10" }, toDisplayString(_ctx.$t("number")), 1),
                  createVNode("span", { class: "col-2 text-center" }, toDisplayString(_ctx.$t("unit_price")), 1),
                  createVNode("span", { class: "col-2 text-end pe-5" }, toDisplayString(_ctx.$t("total_price")), 1)
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                  return openBlock(), createBlock(_component_BRow, {
                    key: cartItem.id,
                    class: "cart-item-row position-relative m-0 mt-5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, {
                        md: "8",
                        class: "d-flex p-0 p-sm-5"
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", {
                              class: "img",
                              style: {
                                backgroundImage: `url(${cartItem.product.image.medium})`
                              }
                            }, null, 4),
                            createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between flex-grow-1" }, [
                              createVNode("div", { class: "product" }, [
                                createVNode("span", { class: "product--name lh-1 mb-0" }, toDisplayString(cartItem.product.name), 1),
                                typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "d-flex align-items-center mb-7"
                                    }, [
                                      createVNode("span", { class: "size" }, toDisplayString(option.option_label) + ": ", 1),
                                      createVNode("span", { class: "size-box" }, toDisplayString(option.value_label), 1),
                                      typeof cartItem.configured_variant.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        style: "color: " + cartItem.configured_variant.DeliveryTime.color + " !important",
                                        class: "deliverytime"
                                      }, toDisplayString(cartItem.configured_variant.DeliveryTime.long), 5)) : createCommentVNode("", true),
                                      createVNode("span", { class: "product--price text-blue d-md-none ms-20 config" }, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                    ]);
                                  }), 128)),
                                  createVNode(_component_BLink, {
                                    class: "change-price text-blue d-none d-md-inline-block",
                                    onClick: ($event) => updateCartProduct(cartItem)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("click_to_change_options")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : createCommentVNode("", true),
                                typeof cartItem.configurable_options == "undefined" ? (openBlock(), createBlock("div", { key: 1 }, [
                                  typeof cartItem.product.DeliveryTime !== void 0 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    style: "color: " + ((_a = cartItem.product.DeliveryTime) == null ? void 0 : _a.color) + " !important",
                                    class: "deliverytime"
                                  }, toDisplayString((_b = cartItem.product.DeliveryTime) == null ? void 0 : _b.long), 5)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "d-flex justify-content-between" }, [
                                createVNode("div", { class: "d-flex quantity-and-btn" }, [
                                  createVNode("div", { class: "quantity-input d-flex" }, [
                                    createVNode("input", {
                                      type: "text",
                                      min: "1",
                                      value: cartItem.quantity,
                                      pattern: "[0-9]+",
                                      name: "quantity",
                                      ref_for: true,
                                      ref: "inputQuantity",
                                      disabled: ""
                                    }, null, 8, ["value"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: unref(quantityDown)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("-")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_BButton, {
                                      variant: "secondary",
                                      class: "quan-btn p-8 pt-1 pb-1 text-white",
                                      onClick: withModifiers(unref(quantityUp), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" +")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("span", { class: "product--price text-end d-md-none mt-4" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 2
                      }, 1024),
                      createVNode(_component_BCol, {
                        md: "2",
                        class: "d-none d-md-block p-0 text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BCol, {
                        md: "2",
                        class: "d-none d-md-block p-0 pe-5 text-end"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode(_component_BRow, { class: "discount-and-total" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, {
                      md: "5",
                      lg: "4",
                      class: "coupon-discount"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "lnr lnr-trash trash-icon" }),
                        createVNode("span", { class: "trash-name" }, toDisplayString(_ctx.$t("delete_everything")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, {
                      md: "6",
                      xl: "5",
                      "offset-md": "1",
                      "offset-lg": "2",
                      "offset-xl": "3",
                      class: "cost"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25" }, [
                          createVNode("span", { class: "subtotal-heading d-block pb-0" }, toDisplayString(_ctx.$t("sub_total")), 1),
                          createVNode("span", { class: "subtotal-price" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
                        ]),
                        createVNode("ul", { class: "prices" }, [
                          unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                            key: 0,
                            class: "d-flex justify-content-end gap-25"
                          }, [
                            createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")), 1),
                            typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "subtotal-price ml-10"
                            }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                            return openBlock(), createBlock("li", {
                              class: "d-flex justify-content-end",
                              key: index
                            }, [
                              createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                              createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                            ]);
                          }), 128)),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                            return openBlock(), createBlock("li", {
                              class: "d-flex justify-content-end gap-25",
                              key: index
                            }, [
                              createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                              createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("hr", { class: "w-75 hr-line-total" }),
                        createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25 mb-5" }, [
                          createVNode("span", { class: "subtotal-heading fw-bold" }, toDisplayString(_ctx.$t("total")), 1),
                          createVNode("span", { class: "subtotal-price ml-10" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
                        ]),
                        getCartDeliveryTime.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "time-delivery"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("estimated_shipping_time")) + ": ", 1),
                          createVNode("span", {
                            style: "color: " + getCartDeliveryTime.value.color + " !important"
                          }, toDisplayString(getCartDeliveryTime.value.long), 5)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "d-flex justify-content-end align-items-center" }, [
                          createVNode(_component_BButton, {
                            onClick: ($event) => _ctx.$router.push("/checkout"),
                            class: "text-light py-4 order-button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              getCrossSellProducts.value && getCrossSellProducts.value.length > 0 ? (openBlock(), createBlock("section", {
                key: 0,
                class: "more-products"
              }, [
                createVNode("div", { class: "" }, [
                  createVNode("span", { class: "section-title d-block font-weight-normal text-center" }, "Klanten bestelden ook"),
                  !isServer ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(unref(MoreProductsCarousel), {
                      class: "pt-5",
                      products: getCrossSellProducts.value,
                      useBreakPoint: true
                    }, null, 8, ["products"])
                  ])) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Cart-rHIXsIGB.js.map
