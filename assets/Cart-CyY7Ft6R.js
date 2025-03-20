import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { ref, computed, watch, onMounted, resolveComponent, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
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
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "./BlockSimple-BHbXwFf2.js";
import "@gtm-support/vue-gtm";
import "vue-cookies";
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
import "mobile-device-detect";
const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      cartCount,
      removeItem,
      cartItems,
      cartTotalPrice,
      cartTotalTaxPrices,
      cartTotalDiscounts,
      defaultShipping,
      quantityDown,
      quantityUp
    } = useCartInfo();
    const router = useRouter();
    const store = useStore();
    const { t } = useI18n();
    const isServer = typeof window === "undefined";
    const couponCode = ref("");
    const freeShippingAmount = computed(() => store.getters["cart/getFreeShippingAmount"]);
    const getItemsInCart = computed(() => {
      let items = t("items_in_cart", { numberOf: cartCount.value });
      items = '<i class="lnr lnr-cart me-7"></i>' + items.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      return items;
    });
    const getCartDeliveryTime = computed(() => store.getters["cart/getCartDeliveryTime"]);
    const appliedCouponCodes = computed(() => store.getters["cart/getAppliedCouponCodes"]);
    const getCrossSellProducts = ref([]);
    const addCoupon = async () => {
      if (couponCode.value !== "") {
        const retval = await store.dispatch("cart/addCouponCode", {
          code: couponCode.value,
          store
        });
        if (retval === true) {
          const msg = {
            type: "success",
            title: t("coupon_code"),
            text: t("coupon_code_ok", { code: couponCode.value })
          };
          store.dispatch("messages/sendMessage", { message: msg });
          couponCode.value = "";
        }
      }
    };
    const updateCartProduct = (product) => {
      removeItem(product.id);
      router.push(`/${product.product.url_key}`);
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
    };
    const removeCouponCode = async () => {
      await store.dispatch("cart/removeCouponCode", { store });
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
      updateCrossSellProducts();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BLink = BLink;
      const _component_BButton = BButton;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "cart" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(`<section class="cart pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="page-title font-weight-normal d-none d-md-block mb-8"${_scopeId2}>${ssrInterpolate(_ctx.$t("shopping_basket"))}</span><div class="d-flex justify-content-between align-items-center cart-info-and-btn"${_scopeId2}><div class="items-info font-weight-normal d-block text-blue"${_scopeId2}>${getItemsInCart.value ?? ""}</div><div class="options ml-20 d-none d-md-block"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BLink, { href: "/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("continue_shopping"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BButton, {
                    onClick: ($event) => _ctx.$router.push("/checkout"),
                    variant: "info",
                    class: "text-light py-6 pr-20 pl-15"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<i class="lnr lnr-cart me-15"${_scopeId3}></i><i class="fa fa-check-circle bg-info me-5 mt-2"${_scopeId3}></i> &gt;${ssrInterpolate(_ctx.$t("continue_buying"))}`);
                      } else {
                        return [
                          createVNode("i", { class: "lnr lnr-cart me-15" }),
                          createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                          createTextVNode(" >" + toDisplayString(_ctx.$t("continue_buying")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><!--[-->`);
                  ssrRenderList(unref(cartItems), (cartItem) => {
                    _push3(ssrRenderComponent(_component_BRow, {
                      key: cartItem.id,
                      class: "cart-item-row position-relative"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BLink, {
                            href: "#",
                            class: "d-md-none mobile-cart-item-remove"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="lnr lnr-cross"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "lnr lnr-cross" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BCol, {
                            md: "8",
                            class: "d-flex"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="img" style="${ssrRenderStyle({
                                  backgroundImage: `url(${cartItem.product.image.medium})`
                                })}"${_scopeId4}></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center flex-grow-1"${_scopeId4}><div class="product text-blue pb-2 pb-md-10"${_scopeId4}><span class="product--name"${_scopeId4}>${ssrInterpolate(cartItem.product.name)}</span>`);
                                if (typeof cartItem.configurable_options != "undefined") {
                                  _push5(`<div${_scopeId4}><!--[-->`);
                                  ssrRenderList(cartItem.configurable_options, (option, index) => {
                                    _push5(`<div class="d-flex align-items-center mb-7"${_scopeId4}><span class="size"${_scopeId4}>${ssrInterpolate(option.option_label)}: </span><span class="size-box"${_scopeId4}>${ssrInterpolate(option.value_label)}</span>`);
                                    if (typeof cartItem.configured_variant.DeliveryTime !== void 0) {
                                      _push5(`<span style="${ssrRenderStyle(
                                        "color: " + cartItem.configured_variant.DeliveryTime.color + " !important"
                                      )}" class="deliverytime"${_scopeId4}>${ssrInterpolate(cartItem.configured_variant.DeliveryTime.long)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`<span class="product--price text-blue d-md-none ms-20 config"${_scopeId4}>${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span></div>`);
                                  });
                                  _push5(`<!--]-->`);
                                  _push5(ssrRenderComponent(_component_BLink, {
                                    class: "change-price text-blue d-none d-md-inline-block",
                                    onClick: ($event) => updateCartProduct(cartItem)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(_ctx.$t("click_to_change_options"))}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(_ctx.$t("click_to_change_options")), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (typeof cartItem.configurable_options == "undefined") {
                                  _push5(`<div${_scopeId4}>`);
                                  if (typeof cartItem.product.DeliveryTime !== void 0) {
                                    _push5(`<span style="${ssrRenderStyle("color: " + cartItem.product.DeliveryTime.color + " !important")}" class="deliverytime"${_scopeId4}>${ssrInterpolate(cartItem.product.DeliveryTime.long)}</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div><div class="quantity-input d-flex ml-md-20"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_router_link, {
                                  href: "#",
                                  class: "step-down-btn",
                                  onClick: ($event) => unref(quantityDown)(cartItem.id, cartItem.quantity)
                                }, null, _parent5, _scopeId4));
                                _push5(`<input type="number" min="1"${ssrRenderAttr("value", cartItem.quantity)} name="quantity" disabled${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_router_link, {
                                  href: "#",
                                  class: "step-up-btn",
                                  onClick: ($event) => unref(quantityUp)(cartItem.id, cartItem.quantity)
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "img",
                                    style: {
                                      backgroundImage: `url(${cartItem.product.image.medium})`
                                    }
                                  }, null, 4),
                                  createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between align-items-md-center flex-grow-1" }, [
                                    createVNode("div", { class: "product text-blue pb-2 pb-md-10" }, [
                                      createVNode("span", { class: "product--name" }, toDisplayString(cartItem.product.name), 1),
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
                                          style: "color: " + cartItem.product.DeliveryTime.color + " !important",
                                          class: "deliverytime"
                                        }, toDisplayString(cartItem.product.DeliveryTime.long), 5)) : createCommentVNode("", true)
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "quantity-input d-flex ml-md-20" }, [
                                      createVNode(_component_router_link, {
                                        href: "#",
                                        class: "step-down-btn",
                                        onClick: ($event) => unref(quantityDown)(cartItem.id, cartItem.quantity)
                                      }, null, 8, ["onClick"]),
                                      createVNode("input", {
                                        type: "number",
                                        min: "1",
                                        value: cartItem.quantity,
                                        name: "quantity",
                                        ref_for: true,
                                        ref: "inputQuantity",
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_router_link, {
                                        href: "#",
                                        class: "step-up-btn",
                                        onClick: ($event) => unref(quantityUp)(cartItem.id, cartItem.quantity)
                                      }, null, 8, ["onClick"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BCol, {
                            md: "4",
                            class: "d-none d-md-flex align-items-center justify-content-center position-relative pr-55"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="product--price"${_scopeId4}> ${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</span>`);
                                _push5(ssrRenderComponent(_component_router_link, {
                                  href: "#",
                                  onClick: ($event) => unref(removeItem)(cartItem.id),
                                  class: "lnr lnr-cross"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1),
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    onClick: ($event) => unref(removeItem)(cartItem.id),
                                    class: "lnr lnr-cross"
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BLink, {
                              href: "#",
                              class: "d-md-none mobile-cart-item-remove"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "lnr lnr-cross" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BCol, {
                              md: "8",
                              class: "d-flex"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "img",
                                  style: {
                                    backgroundImage: `url(${cartItem.product.image.medium})`
                                  }
                                }, null, 4),
                                createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between align-items-md-center flex-grow-1" }, [
                                  createVNode("div", { class: "product text-blue pb-2 pb-md-10" }, [
                                    createVNode("span", { class: "product--name" }, toDisplayString(cartItem.product.name), 1),
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
                                        style: "color: " + cartItem.product.DeliveryTime.color + " !important",
                                        class: "deliverytime"
                                      }, toDisplayString(cartItem.product.DeliveryTime.long), 5)) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "quantity-input d-flex ml-md-20" }, [
                                    createVNode(_component_router_link, {
                                      href: "#",
                                      class: "step-down-btn",
                                      onClick: ($event) => unref(quantityDown)(cartItem.id, cartItem.quantity)
                                    }, null, 8, ["onClick"]),
                                    createVNode("input", {
                                      type: "number",
                                      min: "1",
                                      value: cartItem.quantity,
                                      name: "quantity",
                                      ref_for: true,
                                      ref: "inputQuantity",
                                      disabled: ""
                                    }, null, 8, ["value"]),
                                    createVNode(_component_router_link, {
                                      href: "#",
                                      class: "step-up-btn",
                                      onClick: ($event) => unref(quantityUp)(cartItem.id, cartItem.quantity)
                                    }, null, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BCol, {
                              md: "4",
                              class: "d-none d-md-flex align-items-center justify-content-center position-relative pr-55"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1),
                                createVNode(_component_router_link, {
                                  href: "#",
                                  onClick: ($event) => unref(removeItem)(cartItem.id),
                                  class: "lnr lnr-cross"
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_BRow, { class: "discount-and-total" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, {
                          md: "5",
                          lg: "4",
                          class: "coupon-discount"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="d-block"${_scopeId4}>${ssrInterpolate(_ctx.$t("coupon_discount"))}</span><form action="#" class="d-flex"${_scopeId4}><input type="text" class="flex-grow-1" name="discount-code"${ssrRenderAttr("placeholder", _ctx.$t("fill_out_discount_code"))}${ssrRenderAttr("value", couponCode.value)}${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BButton, {
                                onClick: addCoupon,
                                variant: "info"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("apply"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</form>`);
                              if (appliedCouponCodes.value && appliedCouponCodes.value[0] && appliedCouponCodes.value[0].code) {
                                _push5(`<div class="pt-10"${_scopeId4}>${ssrInterpolate(_ctx.$t("applied_coupon_code"))}: ${ssrInterpolate(appliedCouponCodes.value[0].code)} `);
                                _push5(ssrRenderComponent(_component_router_link, {
                                  href: "#",
                                  onClick: ($event) => removeCouponCode(),
                                  class: "lnr lnr-cross"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="free_shipping"${_scopeId4}>${ssrInterpolate(_ctx.$t("free_shipping_msg", {
                                remain: formatCurrency(freeShippingAmount.value)
                              }))}</div>`);
                            } else {
                              return [
                                createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("coupon_discount")), 1),
                                createVNode("form", {
                                  action: "#",
                                  class: "d-flex"
                                }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "flex-grow-1",
                                    name: "discount-code",
                                    placeholder: _ctx.$t("fill_out_discount_code"),
                                    "onUpdate:modelValue": ($event) => couponCode.value = $event
                                  }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                                    [vModelText, couponCode.value]
                                  ]),
                                  createVNode(_component_BButton, {
                                    onClick: addCoupon,
                                    variant: "info"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                appliedCouponCodes.value && appliedCouponCodes.value[0] && appliedCouponCodes.value[0].code ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "pt-10"
                                }, [
                                  createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    onClick: ($event) => removeCouponCode(),
                                    class: "lnr lnr-cross"
                                  }, null, 8, ["onClick"])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "free_shipping" }, toDisplayString(_ctx.$t("free_shipping_msg", {
                                  remain: formatCurrency(freeShippingAmount.value)
                                })), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCol, {
                          md: "6",
                          xl: "5",
                          "offset-md": "1",
                          "offset-lg": "2",
                          "offset-xl": "3",
                          class: "cost"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="cost-heading font-weight-normal d-block"${_scopeId4}>${ssrInterpolate(_ctx.$t("totals"))}</span><ul class="prices"${_scopeId4}>`);
                              if (unref(defaultShipping) != null) {
                                _push5(`<li class="d-flex justify-content-between"${_scopeId4}><span class="name"${_scopeId4}>${ssrInterpolate(_ctx.$t("shipping_cost"))} ${ssrInterpolate(unref(defaultShipping).carrier_title)}</span>`);
                                if (typeof unref(defaultShipping).amount != "undefined") {
                                  _push5(`<span class="cost ml-10"${_scopeId4}>${ssrInterpolate(formatCurrency(unref(defaultShipping).amount.value))}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</li>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(cartTotalDiscounts), (discount, index) => {
                                _push5(`<li class="d-flex justify-content-between"${_scopeId4}><span class="name"${_scopeId4}>${ssrInterpolate(discount.label)}</span><span class="cost ml-10"${_scopeId4}>- ${ssrInterpolate(formatCurrency(discount.amount.value))}</span></li>`);
                              });
                              _push5(`<!--]--><!--[-->`);
                              ssrRenderList(unref(cartTotalTaxPrices), (price, index) => {
                                _push5(`<li class="d-flex justify-content-between"${_scopeId4}><span class="name"${_scopeId4}>${ssrInterpolate(price.label)}</span><span class="cost ml-10"${_scopeId4}>${ssrInterpolate(formatCurrency(price.amount.value))}</span></li>`);
                              });
                              _push5(`<!--]--></ul><div class="d-flex justify-content-between align-items-center mb-25"${_scopeId4}><span class="total"${_scopeId4}>${ssrInterpolate(_ctx.$t("total"))}</span><span class="total-price ml-10 text-light-blue"${_scopeId4}>${ssrInterpolate(formatCurrency(unref(cartTotalPrice)))}</span></div>`);
                              if (getCartDeliveryTime.value) {
                                _push5(`<div class="time-delivery"${_scopeId4}>${ssrInterpolate(_ctx.$t("estimated_shipping_time"))}: <span style="${ssrRenderStyle("color: " + getCartDeliveryTime.value.color + " !important")}"${_scopeId4}>${ssrInterpolate(getCartDeliveryTime.value.long)}</span></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="d-flex justify-content-between align-items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BLink, {
                                to: "/",
                                class: "mr-15 d-md-none link-underline"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("continue_shopping"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push("/checkout"),
                                variant: "info",
                                class: "text-light py-6 pr-20 pl-15"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`&gt;<i class="lnr lnr-cart me-15"${_scopeId5}></i><i class="fa fa-check-circle bg-info me-5 mt-2"${_scopeId5}></i> ${ssrInterpolate(_ctx.$t("continue_buying"))}`);
                                  } else {
                                    return [
                                      createTextVNode(">"),
                                      createVNode("i", { class: "lnr lnr-cart me-15" }),
                                      createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                                      createTextVNode(" " + toDisplayString(_ctx.$t("continue_buying")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("span", { class: "cost-heading font-weight-normal d-block" }, toDisplayString(_ctx.$t("totals")), 1),
                                createVNode("ul", { class: "prices" }, [
                                  unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                                    key: 0,
                                    class: "d-flex justify-content-between"
                                  }, [
                                    createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")) + " " + toDisplayString(unref(defaultShipping).carrier_title), 1),
                                    typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cost ml-10"
                                    }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                                    return openBlock(), createBlock("li", {
                                      class: "d-flex justify-content-between",
                                      key: index
                                    }, [
                                      createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                                      createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                                    ]);
                                  }), 128)),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                                    return openBlock(), createBlock("li", {
                                      class: "d-flex justify-content-between",
                                      key: index
                                    }, [
                                      createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                                      createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "d-flex justify-content-between align-items-center mb-25" }, [
                                  createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                                  createVNode("span", { class: "total-price ml-10 text-light-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                                createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                  createVNode(_component_BLink, {
                                    to: "/",
                                    class: "mr-15 d-md-none link-underline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BButton, {
                                    onClick: ($event) => _ctx.$router.push("/checkout"),
                                    variant: "info",
                                    class: "text-light py-6 pr-20 pl-15"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(">"),
                                      createVNode("i", { class: "lnr lnr-cart me-15" }),
                                      createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                                      createTextVNode(" " + toDisplayString(_ctx.$t("continue_buying")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, {
                            md: "5",
                            lg: "4",
                            class: "coupon-discount"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("coupon_discount")), 1),
                              createVNode("form", {
                                action: "#",
                                class: "d-flex"
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "text",
                                  class: "flex-grow-1",
                                  name: "discount-code",
                                  placeholder: _ctx.$t("fill_out_discount_code"),
                                  "onUpdate:modelValue": ($event) => couponCode.value = $event
                                }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                                  [vModelText, couponCode.value]
                                ]),
                                createVNode(_component_BButton, {
                                  onClick: addCoupon,
                                  variant: "info"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              appliedCouponCodes.value && appliedCouponCodes.value[0] && appliedCouponCodes.value[0].code ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "pt-10"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                createVNode(_component_router_link, {
                                  href: "#",
                                  onClick: ($event) => removeCouponCode(),
                                  class: "lnr lnr-cross"
                                }, null, 8, ["onClick"])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "free_shipping" }, toDisplayString(_ctx.$t("free_shipping_msg", {
                                remain: formatCurrency(freeShippingAmount.value)
                              })), 1)
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
                              createVNode("span", { class: "cost-heading font-weight-normal d-block" }, toDisplayString(_ctx.$t("totals")), 1),
                              createVNode("ul", { class: "prices" }, [
                                unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                                  key: 0,
                                  class: "d-flex justify-content-between"
                                }, [
                                  createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")) + " " + toDisplayString(unref(defaultShipping).carrier_title), 1),
                                  typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "cost ml-10"
                                  }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                                  return openBlock(), createBlock("li", {
                                    class: "d-flex justify-content-between",
                                    key: index
                                  }, [
                                    createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                                    createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                                  ]);
                                }), 128)),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                                  return openBlock(), createBlock("li", {
                                    class: "d-flex justify-content-between",
                                    key: index
                                  }, [
                                    createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                                    createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                                  ]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "d-flex justify-content-between align-items-center mb-25" }, [
                                createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                                createVNode("span", { class: "total-price ml-10 text-light-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                createVNode(_component_BLink, {
                                  to: "/",
                                  class: "mr-15 d-md-none link-underline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BButton, {
                                  onClick: ($event) => _ctx.$router.push("/checkout"),
                                  variant: "info",
                                  class: "text-light py-6 pr-20 pl-15"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(">"),
                                    createVNode("i", { class: "lnr lnr-cart me-15" }),
                                    createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                                    createTextVNode(" " + toDisplayString(_ctx.$t("continue_buying")), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "page-title font-weight-normal d-none d-md-block mb-8" }, toDisplayString(_ctx.$t("shopping_basket")), 1),
                    createVNode("div", { class: "d-flex justify-content-between align-items-center cart-info-and-btn" }, [
                      createVNode("div", {
                        class: "items-info font-weight-normal d-block text-blue",
                        innerHTML: getItemsInCart.value
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "options ml-20 d-none d-md-block" }, [
                        createVNode(_component_BLink, { href: "/" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BButton, {
                          onClick: ($event) => _ctx.$router.push("/checkout"),
                          variant: "info",
                          class: "text-light py-6 pr-20 pl-15"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "lnr lnr-cart me-15" }),
                            createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                            createTextVNode(" >" + toDisplayString(_ctx.$t("continue_buying")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                      return openBlock(), createBlock(_component_BRow, {
                        key: cartItem.id,
                        class: "cart-item-row position-relative"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BLink, {
                            href: "#",
                            class: "d-md-none mobile-cart-item-remove"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "lnr lnr-cross" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BCol, {
                            md: "8",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "img",
                                style: {
                                  backgroundImage: `url(${cartItem.product.image.medium})`
                                }
                              }, null, 4),
                              createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between align-items-md-center flex-grow-1" }, [
                                createVNode("div", { class: "product text-blue pb-2 pb-md-10" }, [
                                  createVNode("span", { class: "product--name" }, toDisplayString(cartItem.product.name), 1),
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
                                      style: "color: " + cartItem.product.DeliveryTime.color + " !important",
                                      class: "deliverytime"
                                    }, toDisplayString(cartItem.product.DeliveryTime.long), 5)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "quantity-input d-flex ml-md-20" }, [
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    class: "step-down-btn",
                                    onClick: ($event) => unref(quantityDown)(cartItem.id, cartItem.quantity)
                                  }, null, 8, ["onClick"]),
                                  createVNode("input", {
                                    type: "number",
                                    min: "1",
                                    value: cartItem.quantity,
                                    name: "quantity",
                                    ref_for: true,
                                    ref: "inputQuantity",
                                    disabled: ""
                                  }, null, 8, ["value"]),
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    class: "step-up-btn",
                                    onClick: ($event) => unref(quantityUp)(cartItem.id, cartItem.quantity)
                                  }, null, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BCol, {
                            md: "4",
                            class: "d-none d-md-flex align-items-center justify-content-center position-relative pr-55"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1),
                              createVNode(_component_router_link, {
                                href: "#",
                                onClick: ($event) => unref(removeItem)(cartItem.id),
                                class: "lnr lnr-cross"
                              }, null, 8, ["onClick"])
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
                            createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("coupon_discount")), 1),
                            createVNode("form", {
                              action: "#",
                              class: "d-flex"
                            }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "flex-grow-1",
                                name: "discount-code",
                                placeholder: _ctx.$t("fill_out_discount_code"),
                                "onUpdate:modelValue": ($event) => couponCode.value = $event
                              }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                                [vModelText, couponCode.value]
                              ]),
                              createVNode(_component_BButton, {
                                onClick: addCoupon,
                                variant: "info"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            appliedCouponCodes.value && appliedCouponCodes.value[0] && appliedCouponCodes.value[0].code ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pt-10"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                              createVNode(_component_router_link, {
                                href: "#",
                                onClick: ($event) => removeCouponCode(),
                                class: "lnr lnr-cross"
                              }, null, 8, ["onClick"])
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "free_shipping" }, toDisplayString(_ctx.$t("free_shipping_msg", {
                              remain: formatCurrency(freeShippingAmount.value)
                            })), 1)
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
                            createVNode("span", { class: "cost-heading font-weight-normal d-block" }, toDisplayString(_ctx.$t("totals")), 1),
                            createVNode("ul", { class: "prices" }, [
                              unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                                key: 0,
                                class: "d-flex justify-content-between"
                              }, [
                                createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")) + " " + toDisplayString(unref(defaultShipping).carrier_title), 1),
                                typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "cost ml-10"
                                }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                                return openBlock(), createBlock("li", {
                                  class: "d-flex justify-content-between",
                                  key: index
                                }, [
                                  createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                                  createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                                return openBlock(), createBlock("li", {
                                  class: "d-flex justify-content-between",
                                  key: index
                                }, [
                                  createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                                  createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "d-flex justify-content-between align-items-center mb-25" }, [
                              createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                              createVNode("span", { class: "total-price ml-10 text-light-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                            createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                              createVNode(_component_BLink, {
                                to: "/",
                                class: "mr-15 d-md-none link-underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push("/checkout"),
                                variant: "info",
                                class: "text-light py-6 pr-20 pl-15"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(">"),
                                  createVNode("i", { class: "lnr lnr-cart me-15" }),
                                  createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                                  createTextVNode(" " + toDisplayString(_ctx.$t("continue_buying")), 1)
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            if (getCrossSellProducts.value && getCrossSellProducts.value.length > 0) {
              _push2(`<section class="more-products"${_scopeId}><div class="container"${_scopeId}><span class="section-title d-block font-weight-normal text-center"${_scopeId}>Klanten bestelden ook</span>`);
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
              createVNode("section", { class: "cart pt-8" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode("span", { class: "page-title font-weight-normal d-none d-md-block mb-8" }, toDisplayString(_ctx.$t("shopping_basket")), 1),
                    createVNode("div", { class: "d-flex justify-content-between align-items-center cart-info-and-btn" }, [
                      createVNode("div", {
                        class: "items-info font-weight-normal d-block text-blue",
                        innerHTML: getItemsInCart.value
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "options ml-20 d-none d-md-block" }, [
                        createVNode(_component_BLink, { href: "/" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BButton, {
                          onClick: ($event) => _ctx.$router.push("/checkout"),
                          variant: "info",
                          class: "text-light py-6 pr-20 pl-15"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "lnr lnr-cart me-15" }),
                            createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                            createTextVNode(" >" + toDisplayString(_ctx.$t("continue_buying")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                      return openBlock(), createBlock(_component_BRow, {
                        key: cartItem.id,
                        class: "cart-item-row position-relative"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BLink, {
                            href: "#",
                            class: "d-md-none mobile-cart-item-remove"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "lnr lnr-cross" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BCol, {
                            md: "8",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "img",
                                style: {
                                  backgroundImage: `url(${cartItem.product.image.medium})`
                                }
                              }, null, 4),
                              createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between align-items-md-center flex-grow-1" }, [
                                createVNode("div", { class: "product text-blue pb-2 pb-md-10" }, [
                                  createVNode("span", { class: "product--name" }, toDisplayString(cartItem.product.name), 1),
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
                                      style: "color: " + cartItem.product.DeliveryTime.color + " !important",
                                      class: "deliverytime"
                                    }, toDisplayString(cartItem.product.DeliveryTime.long), 5)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "quantity-input d-flex ml-md-20" }, [
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    class: "step-down-btn",
                                    onClick: ($event) => unref(quantityDown)(cartItem.id, cartItem.quantity)
                                  }, null, 8, ["onClick"]),
                                  createVNode("input", {
                                    type: "number",
                                    min: "1",
                                    value: cartItem.quantity,
                                    name: "quantity",
                                    ref_for: true,
                                    ref: "inputQuantity",
                                    disabled: ""
                                  }, null, 8, ["value"]),
                                  createVNode(_component_router_link, {
                                    href: "#",
                                    class: "step-up-btn",
                                    onClick: ($event) => unref(quantityUp)(cartItem.id, cartItem.quantity)
                                  }, null, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BCol, {
                            md: "4",
                            class: "d-none d-md-flex align-items-center justify-content-center position-relative pr-55"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "product--price" }, " " + toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1),
                              createVNode(_component_router_link, {
                                href: "#",
                                onClick: ($event) => unref(removeItem)(cartItem.id),
                                class: "lnr lnr-cross"
                              }, null, 8, ["onClick"])
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
                            createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("coupon_discount")), 1),
                            createVNode("form", {
                              action: "#",
                              class: "d-flex"
                            }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "flex-grow-1",
                                name: "discount-code",
                                placeholder: _ctx.$t("fill_out_discount_code"),
                                "onUpdate:modelValue": ($event) => couponCode.value = $event
                              }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                                [vModelText, couponCode.value]
                              ]),
                              createVNode(_component_BButton, {
                                onClick: addCoupon,
                                variant: "info"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            appliedCouponCodes.value && appliedCouponCodes.value[0] && appliedCouponCodes.value[0].code ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pt-10"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                              createVNode(_component_router_link, {
                                href: "#",
                                onClick: ($event) => removeCouponCode(),
                                class: "lnr lnr-cross"
                              }, null, 8, ["onClick"])
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "free_shipping" }, toDisplayString(_ctx.$t("free_shipping_msg", {
                              remain: formatCurrency(freeShippingAmount.value)
                            })), 1)
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
                            createVNode("span", { class: "cost-heading font-weight-normal d-block" }, toDisplayString(_ctx.$t("totals")), 1),
                            createVNode("ul", { class: "prices" }, [
                              unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                                key: 0,
                                class: "d-flex justify-content-between"
                              }, [
                                createVNode("span", { class: "name" }, toDisplayString(_ctx.$t("shipping_cost")) + " " + toDisplayString(unref(defaultShipping).carrier_title), 1),
                                typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "cost ml-10"
                                }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (discount, index) => {
                                return openBlock(), createBlock("li", {
                                  class: "d-flex justify-content-between",
                                  key: index
                                }, [
                                  createVNode("span", { class: "name" }, toDisplayString(discount.label), 1),
                                  createVNode("span", { class: "cost ml-10" }, "- " + toDisplayString(formatCurrency(discount.amount.value)), 1)
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                                return openBlock(), createBlock("li", {
                                  class: "d-flex justify-content-between",
                                  key: index
                                }, [
                                  createVNode("span", { class: "name" }, toDisplayString(price.label), 1),
                                  createVNode("span", { class: "cost ml-10" }, toDisplayString(formatCurrency(price.amount.value)), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "d-flex justify-content-between align-items-center mb-25" }, [
                              createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                              createVNode("span", { class: "total-price ml-10 text-light-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                            createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                              createVNode(_component_BLink, {
                                to: "/",
                                class: "mr-15 d-md-none link-underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push("/checkout"),
                                variant: "info",
                                class: "text-light py-6 pr-20 pl-15"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(">"),
                                  createVNode("i", { class: "lnr lnr-cart me-15" }),
                                  createVNode("i", { class: "fa fa-check-circle bg-info me-5 mt-2" }),
                                  createTextVNode(" " + toDisplayString(_ctx.$t("continue_buying")), 1)
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
                  _: 1
                })
              ]),
              getCrossSellProducts.value && getCrossSellProducts.value.length > 0 ? (openBlock(), createBlock("section", {
                key: 0,
                class: "more-products"
              }, [
                createVNode("div", { class: "container" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Cart-CyY7Ft6R.js.map
