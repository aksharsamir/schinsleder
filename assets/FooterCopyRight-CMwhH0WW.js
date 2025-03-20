import { BImg } from "bootstrap-vue-next/components/BImg";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { ref, useTemplateRef, watch, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext, computed, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { c as createToast, C as CONFIG_JSON } from "../entry-server.js";
import { useRouter } from "vue-router";
import { isMobile, isTablet } from "mobile-device-detect";
const _sfc_main$3 = {
  __name: "HeaderIconsDropdown",
  __ssrInlineRender: true,
  props: {
    icon: Object,
    showType: String
  },
  setup(__props) {
    const isServer = typeof window === "undefined";
    const store = useStore();
    const visible = ref(false);
    const wishlistRef = useTemplateRef("wishlist");
    function closeDropdownMenu(e) {
      if (wishlistRef.value && wishlistRef.value.parentElement && !wishlistRef.value.parentElement.contains(e.target)) {
        visible.value = false;
        document.removeEventListener("click", closeDropdownMenu);
      }
    }
    watch(visible, () => {
      if (!isServer) {
        if (visible.value === true) {
          document.addEventListener("click", closeDropdownMenu);
          document.body.classList.add("noScroll1");
        } else {
          document.body.classList.remove("noScroll1");
        }
      }
    });
    function removeItem(id) {
      store.dispatch("user/removeProductWishlist", { id, store });
    }
    function closeOnClick() {
      visible.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _component_BLink = BLink;
      const _component_BButton = BButton;
      const _component_BImg = BImg;
      _push(`<div${ssrRenderAttrs(mergeProps({ ref: "wishlist" }, _attrs))} data-v-fafa1dfc>`);
      _push(ssrRenderComponent(_component_BCollapse, {
        id: "topIconsCollapse" + __props.showType + __props.icon.iconNumber,
        class: [{ collapsed: visible.value }, "top-icons--drop"],
        "aria-expanded": visible.value,
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon.dropHeading) {
              _push2(`<span class="drop-heading" data-v-fafa1dfc${_scopeId}>${ssrInterpolate(__props.icon.dropHeading)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="drop-items" data-v-fafa1dfc${_scopeId}><!--[-->`);
            ssrRenderList(__props.icon.dropItems, (dropItem, index) => {
              _push2(`<li data-v-fafa1dfc${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BLink, {
                to: `/${dropItem.product.url_key}`,
                class: "d-flex align-items-start",
                onClick: closeOnClick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="drop-item--img" data-v-fafa1dfc${_scopeId2}><img${ssrRenderAttr("src", dropItem.product.image.x_small)}${ssrRenderAttr("alt", dropItem.product.sku)} data-v-fafa1dfc${_scopeId2}></div><div class="drop-item--info" data-v-fafa1dfc${_scopeId2}><span class="product-name d-block" data-v-fafa1dfc${_scopeId2}>${ssrInterpolate(dropItem.product.name)}</span><span class="price d-block" data-v-fafa1dfc${_scopeId2}>€${ssrInterpolate(dropItem.product.price_range.minimum_price.final_price.value.toFixed(2))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "drop-item--img" }, [
                        createVNode("img", {
                          src: dropItem.product.image.x_small,
                          alt: dropItem.product.sku
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "drop-item--info" }, [
                        createVNode("span", { class: "product-name d-block" }, toDisplayString(dropItem.product.name), 1),
                        createVNode("span", { class: "price d-block" }, "€" + toDisplayString(dropItem.product.price_range.minimum_price.final_price.value.toFixed(2)), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<a href="#" class="lnr lnr-cross" data-v-fafa1dfc${_scopeId}></a></li>`);
            });
            _push2(`<!--]--></ul>`);
            if (__props.icon.cartFooter) {
              _push2(`<div class="d-flex drop-bottom justify-content-between align-items-center" data-v-fafa1dfc${_scopeId}><span class="total" data-v-fafa1dfc${_scopeId}>Total: € ${ssrInterpolate(__props.icon.cartFooter.totalPrice)}</span>`);
              _push2(ssrRenderComponent(_component_BButton, { variant: "success" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fas fa-check-circle" data-v-fafa1dfc${_scopeId2}></i><i class="lnr lnr-cart" data-v-fafa1dfc${_scopeId2}></i>${ssrInterpolate(__props.icon.cartFooter.btnText)}`);
                  } else {
                    return [
                      createVNode("i", { class: "fas fa-check-circle" }),
                      createVNode("i", { class: "lnr lnr-cart" }),
                      createTextVNode(toDisplayString(__props.icon.cartFooter.btnText), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon.language) {
              _push2(`<div class="language-block" data-v-fafa1dfc${_scopeId}><ul class="d-flex list-unstyled" data-v-fafa1dfc${_scopeId}><!--[-->`);
              ssrRenderList(__props.icon.language, (lang) => {
                _push2(`<li data-v-fafa1dfc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  href: lang.href
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BImg, {
                        src: lang.img,
                        alt: lang.lang,
                        width: "39",
                        height: "39",
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BImg, {
                          src: lang.img,
                          alt: lang.lang,
                          width: "39",
                          height: "39",
                          fluid: ""
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon.dropHeading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "drop-heading"
              }, toDisplayString(__props.icon.dropHeading), 1)) : createCommentVNode("", true),
              createVNode("ul", { class: "drop-items" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.icon.dropItems, (dropItem, index) => {
                  return openBlock(), createBlock("li", {
                    key: `wl-${index}`
                  }, [
                    createVNode(_component_BLink, {
                      to: `/${dropItem.product.url_key}`,
                      class: "d-flex align-items-start",
                      onClick: closeOnClick
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "drop-item--img" }, [
                          createVNode("img", {
                            src: dropItem.product.image.x_small,
                            alt: dropItem.product.sku
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "drop-item--info" }, [
                          createVNode("span", { class: "product-name d-block" }, toDisplayString(dropItem.product.name), 1),
                          createVNode("span", { class: "price d-block" }, "€" + toDisplayString(dropItem.product.price_range.minimum_price.final_price.value.toFixed(2)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("a", {
                      href: "#",
                      class: "lnr lnr-cross",
                      onClick: withModifiers(($event) => removeItem(dropItem.id), ["prevent"])
                    }, null, 8, ["onClick"])
                  ]);
                }), 128))
              ]),
              __props.icon.cartFooter ? (openBlock(), createBlock("div", {
                key: 1,
                class: "d-flex drop-bottom justify-content-between align-items-center"
              }, [
                createVNode("span", { class: "total" }, "Total: € " + toDisplayString(__props.icon.cartFooter.totalPrice), 1),
                createVNode(_component_BButton, { variant: "success" }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "fas fa-check-circle" }),
                    createVNode("i", { class: "lnr lnr-cart" }),
                    createTextVNode(toDisplayString(__props.icon.cartFooter.btnText), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              __props.icon.language ? (openBlock(), createBlock("div", {
                key: 2,
                class: "language-block"
              }, [
                createVNode("ul", { class: "d-flex list-unstyled" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.icon.language, (lang) => {
                    return openBlock(), createBlock("li", {
                      key: lang.alt
                    }, [
                      createVNode(_component_BLink, {
                        href: lang.href
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BImg, {
                            src: lang.img,
                            alt: lang.lang,
                            width: "39",
                            height: "39",
                            fluid: ""
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderIconsDropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeaderIconsDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fafa1dfc"]]);
function useCartInfo() {
  const store = useStore();
  let debounceTimer = null;
  const debounce = (fn, delay) => {
    return (...args) => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => fn(...args), delay);
    };
  };
  const wishlistCount = computed(() => store.getters["user/getWishlistQuantity"]);
  const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
  const cartCount = computed(() => {
    if (store.getters["cart/getCartIsLoaded"]) {
      return store.getters["cart/getItemsTotalQuantity"];
    }
    return 0;
  });
  const cartItems = computed(() => store.getters["cart/getCartItems"]);
  const wishlistItems = computed(() => store.getters["user/getWishlist"]);
  const cartTotalPrice = computed(() => {
    var _a;
    if (store.getters["cart/getCartIsLoaded"]) {
      const prices = store.getters["cart/getCartPrices"];
      return ((_a = prices == null ? void 0 : prices.grand_total) == null ? void 0 : _a.value) || 0;
    }
    return 0;
  });
  const defaultShipping = computed(() => store.getters["cart/getDefaultShipping"]);
  const getShippingMethod = computed(() => store.getters["cart/getShippingMethod"]);
  const cartSubTotalPrice = computed(() => {
    var _a;
    if (store.getters["cart/getCartIsLoaded"]) {
      const prices = store.getters["cart/getCartPrices"];
      return ((_a = prices == null ? void 0 : prices.subtotal_including_tax) == null ? void 0 : _a.value) || 0;
    }
    return 0;
  });
  const cartTotalTaxPrices = computed(() => {
    if (store.getters["cart/getCartIsLoaded"]) {
      const prices = store.getters["cart/getCartPrices"];
      return (prices == null ? void 0 : prices.applied_taxes) || [];
    }
    return [];
  });
  const cartTotalDiscounts = computed(() => {
    if (store.getters["cart/getCartIsLoaded"]) {
      const prices = store.getters["cart/getCartPrices"];
      return (prices == null ? void 0 : prices.discounts) || [];
    }
    return [];
  });
  const removeItem = debounce((id) => {
    var _a;
    const found = cartItems.value.find((item) => item.id === id);
    if (found && window.dataLayer) {
      handleRemoveFromCartTracking(found);
    }
    store.dispatch("cart/removeCartItem", { id, store });
    if ((_a = CONFIG_JSON.helloRetail) == null ? void 0 : _a.enabled) {
      setTimeout(HrClearCart, 1e3);
    }
  }, 500);
  const quantityDown = (id, quantity) => {
    var _a;
    if (quantity > 1) {
      quantity--;
      store.dispatch("cart/updateCartItem", { id, quantity, store });
      const found = cartItems.value.find((item) => item.id === id);
      if (found && window.dataLayer) {
        handleRemoveFromCartTracking(found, quantity);
      }
    } else {
      const msg = {
        type: "danger",
        title: "Minimale hoeveelheid",
        text: "Aantal mag niet kleiner zijn dan 1"
      };
      createToast(msg);
    }
    if ((_a = CONFIG_JSON.helloRetail) == null ? void 0 : _a.enabled) {
      setTimeout(HrClearCart, 1e3);
    }
  };
  const quantityUp = (id, quantity) => {
    quantity++;
    store.dispatch("cart/updateCartItem", { id, quantity, store });
    const found = cartItems.value.find((item) => item.id === id);
    if (found && window.dataLayer) {
      handleAddToCartTracking(found, quantity);
    }
  };
  const HrClearCart = () => {
    if (cartCount.value === 0) {
      self.ADDWISH_PARTNER_NS.api.cart.clearCart(() => {
      });
    }
  };
  const handleRemoveFromCartTracking = (item, quantity = item.quantity) => {
    window.dataLayer.push({
      event: "remove_from_cart",
      ecommerce: {
        currency: "EUR",
        value: item.prices.price.value * quantity,
        items: [
          {
            item_name: item.product.name,
            item_id: item.product.sku,
            price: item.prices.price.value,
            quantity
          }
        ]
      }
    });
  };
  const handleAddToCartTracking = (item, quantity) => {
    window.dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: "EUR",
        value: item.prices.price.value * quantity,
        items: [
          {
            item_name: item.product.name,
            item_id: item.product.sku,
            price: item.prices.price.value,
            quantity
          }
        ]
      }
    });
  };
  return {
    wishlistCount,
    isLoggedIn,
    cartCount,
    cartItems,
    wishlistItems,
    cartTotalPrice,
    cartSubTotalPrice,
    cartTotalTaxPrices,
    cartTotalDiscounts,
    defaultShipping,
    removeItem,
    quantityDown,
    quantityUp,
    getShippingMethod
  };
}
const _sfc_main$2 = {
  __name: "HeaderIconsDropdownMenu",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: Object,
      required: true
    },
    showType: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const store = useStore();
    const router = useRouter();
    const visible = ref(false);
    const accountRef = useTemplateRef("account");
    const isServer = typeof window === "undefined";
    const goLogout = () => {
      document.body.classList.remove("noScroll2");
      store.dispatch("user/logout", { store });
      router.push("/");
    };
    const goAccount = () => {
      visible.value = false;
      router.push("/account");
    };
    function closeDropdownMenu(e) {
      if (accountRef.value && accountRef.value.parentElement && !accountRef.value.parentElement.contains(e.target)) {
        visible.value = false;
        document.removeEventListener("click", closeDropdownMenu);
      }
    }
    watch(visible, () => {
      if (!isServer) {
        if (visible.value === true) {
          document.addEventListener("click", closeDropdownMenu);
          document.body.classList.add("noScroll2");
        } else {
          document.body.classList.remove("noScroll2");
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ ref: "account" }, _attrs))} data-v-1e428f0e>`);
      _push(ssrRenderComponent(_component_BCollapse, {
        id: "topIconsCollapse" + __props.showType + __props.icon.iconNumber,
        class: [{ collapsed: visible.value }, "top-icons--drop--menu"],
        "aria-expanded": visible.value,
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-1e428f0e${_scopeId}><ul class="list-unstyled top-icons--drop--menu-list" data-v-1e428f0e${_scopeId}><li data-v-1e428f0e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BLink, { onClick: goAccount }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("account"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("account")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-1e428f0e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BLink, { onClick: goLogout }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("logout"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("logout")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("ul", { class: "list-unstyled top-icons--drop--menu-list" }, [
                  createVNode("li", null, [
                    createVNode(_component_BLink, {
                      onClick: withModifiers(goAccount, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("account")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_component_BLink, {
                      onClick: withModifiers(goLogout, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("logout")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderIconsDropdownMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderIconsDropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e428f0e"]]);
const _sfc_main$1 = {
  __name: "HeaderSubmenu",
  __ssrInlineRender: true,
  props: ["menuArray", "collapseId", "modelValue", "id"],
  emits: ["setHeight", "resetHeight"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const readMore = ref({});
    const mobileCheck = computed(() => isMobile || isTablet);
    const store = useStore();
    const visible = computed({
      get() {
        return store.getters["menu/getMenuItemState"](props.id).state;
      },
      set(val) {
        store.commit("menu/updateMenuState", { id: props.id, state: val });
      }
    });
    const closeInternal = () => {
      visible.value = false;
      store.commit("menu/setNavBar", false);
    };
    const showMore = (id) => {
      readMore.value[id] = true;
      setMenuHeight();
    };
    const showLess = (id) => {
      readMore.value[id] = false;
      setMenuHeight();
    };
    const submenu = ref(null);
    const setMenuHeight = () => {
      nextTick(() => {
        const subMenu = submenu.value;
        if (subMenu) {
          const height = subMenu.clientHeight;
          emit("setHeight", height);
        }
      });
    };
    const resetMenuHeight = () => {
      emit("resetHeight");
    };
    const CapitalizeFirst = (input) => {
      const lower = input.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    watch(visible, (value) => {
      if (value) {
        setMenuHeight();
      } else {
        resetMenuHeight();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _component_BLink = BLink;
      _push(ssrRenderComponent(_component_BCollapse, mergeProps({
        id: __props.collapseId,
        class: "sub-menu",
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!mobileCheck.value) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(__props.menuArray, (menu) => {
                _push2(`<ul${_scopeId}><!--[-->`);
                ssrRenderList(menu, (menuItem, i) => {
                  _push2(`<!--[-->`);
                  if (menuItem.name && i < 24) {
                    _push2(`<li${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      onClick: closeInternal,
                      to: menuItem.linkTo
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(CapitalizeFirst(menuItem.name))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(CapitalizeFirst(menuItem.name)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    if (readMore.value["menu" + __props.menuArray.indexOf(menu)] && i >= 24) {
                      _push2(`<div${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_BLink, {
                        onClick: closeInternal,
                        to: menuItem.linkTo
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`${ssrInterpolate(CapitalizeFirst(menuItem.name))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(CapitalizeFirst(menuItem.name)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</li>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]-->`);
                if (menu.length > 24) {
                  _push2(`<div${_scopeId}>`);
                  if (!readMore.value["menu" + __props.menuArray.indexOf(menu)]) {
                    _push2(`<div${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      style: { "display": "block", "cursor": "pointer", "font-weight": "500" },
                      onClick: ($event) => showMore("menu" + __props.menuArray.indexOf(menu))
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("show_more"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("show_more")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (readMore.value["menu" + __props.menuArray.indexOf(menu)]) {
                    _push2(`<div${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      style: { "display": "block", "cursor": "pointer", "font-weight": "500" },
                      onClick: ($event) => showLess("menu" + __props.menuArray.indexOf(menu))
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("show_less"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("show_less")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</ul>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(__props.menuArray, (menu) => {
                _push2(`<ul id="\`menu\${menu.id}\`"${_scopeId}><!--[-->`);
                ssrRenderList(menu, (menuItem) => {
                  _push2(`<li${_scopeId}><div class="mobile-sub-wrap"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BLink, {
                    onClick: closeInternal,
                    to: menuItem.linkTo
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(menuItem.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(menuItem.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BLink, {
                    onClick: ($event) => _ctx.$root.$emit("bv::toggle::collapse", `subMenu${menuItem.id}`)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        if (menuItem.length) {
                          _push3(`<i class="fa fa-chevron-right"${_scopeId2}></i>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          menuItem.length ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: "fa fa-chevron-right"
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  if (menuItem.length) {
                    _push2(ssrRenderComponent(_component_BCollapse, {
                      id: `subMenu${menuItem.id}`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<ul class="submenu-child"${_scopeId2}><!--[-->`);
                          ssrRenderList(menuItem, (subItem) => {
                            _push3(`<li${_scopeId2}>`);
                            if (subItem.include_in_menu) {
                              _push3(ssrRenderComponent(_component_BLink, {
                                to: `/${subItem.url_path}`
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`${ssrInterpolate(subItem.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(subItem.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`</li>`);
                          });
                          _push3(`<!--]--></ul>`);
                        } else {
                          return [
                            createVNode("ul", { class: "submenu-child" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(menuItem, (subItem) => {
                                return openBlock(), createBlock("li", {
                                  key: subItem.id
                                }, [
                                  subItem.include_in_menu ? (openBlock(), createBlock(_component_BLink, {
                                    key: 0,
                                    to: `/${subItem.url_path}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subItem.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul>`);
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              !mobileCheck.value ? (openBlock(), createBlock("div", {
                key: 0,
                ref_key: "submenu",
                ref: submenu
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.menuArray, (menu) => {
                  return openBlock(), createBlock("ul", {
                    key: "menu" + __props.menuArray.indexOf(menu)
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(menu, (menuItem, i) => {
                      return openBlock(), createBlock(Fragment, {
                        key: menuItem.id
                      }, [
                        menuItem.name && i < 24 ? (openBlock(), createBlock("li", { key: 0 }, [
                          createVNode(_component_BLink, {
                            onClick: closeInternal,
                            to: menuItem.linkTo
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(CapitalizeFirst(menuItem.name)), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          readMore.value["menu" + __props.menuArray.indexOf(menu)] && i >= 24 ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_component_BLink, {
                              onClick: closeInternal,
                              to: menuItem.linkTo
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(CapitalizeFirst(menuItem.name)), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ], 64);
                    }), 128)),
                    menu.length > 24 ? (openBlock(), createBlock("div", { key: 0 }, [
                      !readMore.value["menu" + __props.menuArray.indexOf(menu)] ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_BLink, {
                          style: { "display": "block", "cursor": "pointer", "font-weight": "500" },
                          onClick: withModifiers(($event) => showMore("menu" + __props.menuArray.indexOf(menu)), ["stop"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("show_more")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : createCommentVNode("", true),
                      readMore.value["menu" + __props.menuArray.indexOf(menu)] ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(_component_BLink, {
                          style: { "display": "block", "cursor": "pointer", "font-weight": "500" },
                          onClick: withModifiers(($event) => showLess("menu" + __props.menuArray.indexOf(menu)), ["stop"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("show_less")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ], 512)) : (openBlock(), createBlock("div", { key: 1 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.menuArray, (menu) => {
                  return openBlock(), createBlock("ul", {
                    key: "menu" + __props.menuArray.indexOf(menu),
                    id: "`menu${menu.id}`"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(menu, (menuItem) => {
                      return openBlock(), createBlock("li", {
                        key: menuItem.id
                      }, [
                        createVNode("div", { class: "mobile-sub-wrap" }, [
                          createVNode(_component_BLink, {
                            onClick: closeInternal,
                            to: menuItem.linkTo
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(menuItem.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode(_component_BLink, {
                            onClick: withModifiers(($event) => _ctx.$root.$emit("bv::toggle::collapse", `subMenu${menuItem.id}`), ["stop"])
                          }, {
                            default: withCtx(() => [
                              menuItem.length ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "fa fa-chevron-right"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        menuItem.length ? (openBlock(), createBlock(_component_BCollapse, {
                          key: 0,
                          id: `subMenu${menuItem.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode("ul", { class: "submenu-child" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(menuItem, (subItem) => {
                                return openBlock(), createBlock("li", {
                                  key: subItem.id
                                }, [
                                  subItem.include_in_menu ? (openBlock(), createBlock(_component_BLink, {
                                    key: 0,
                                    to: `/${subItem.url_path}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subItem.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1032, ["id"])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderSubmenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FooterCopyRight",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const getCopyright = computed(() => {
      let copyright = store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_copyright");
      const date = /* @__PURE__ */ new Date();
      copyright = copyright == null ? void 0 : copyright.content.replace(
        /copyright/i,
        "Copyright &copy; " + date.getFullYear() + ' | powered by <a href="https://e-tailors.nl/" title="e-tailors" target="_blank">e-tailors</a>'
      ).replace(/<router-link((?!<\/router-link>).+?)to="(.*?)<\/router-link>/g, '<a$1href="$2</a>');
      return copyright;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-copyright" }, _attrs))}><div class="container"><div class="row align-items-center justify-content-center"><div class="text-center">${getCopyright.value ?? ""}</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/FooterCopyRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  HeaderIconsDropdownMenu as H,
  _sfc_main$1 as _,
  HeaderIconsDropdown as a,
  _sfc_main as b,
  useCartInfo as u
};
//# sourceMappingURL=FooterCopyRight-CMwhH0WW.js.map
