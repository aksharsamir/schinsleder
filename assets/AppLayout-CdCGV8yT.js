import { ref, watch, onMounted, onBeforeUnmount, resolveComponent, mergeProps, withCtx, createVNode, nextTick, useSSRContext, useTemplateRef, computed, resolveDynamicComponent, unref, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BImg } from "bootstrap-vue-next/components/BImg";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { A as getProductsBySearchPreview } from "./products-Dsi6ZmTY.js";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BBadge } from "bootstrap-vue-next/components/BBadge";
import { u as useCartInfo, H as HeaderIconsDropdownMenu, a as HeaderIconsDropdown, _ as _sfc_main$a, b as _sfc_main$b } from "./FooterCopyRight-CMwhH0WW.js";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { BNav } from "bootstrap-vue-next/components/BNav";
import VueCookies from "vue-cookies";
import { useGtm } from "@gtm-support/vue-gtm";
const _imports_0$4 = "/assets/logo-CzD4Z-6Y.png";
const _imports_0$3 = "/assets/mobile-logo-C1eXthJl.svg";
const _sfc_main$9 = {
  __name: "HeaderSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const router = useRouter();
    const search = ref("");
    const searchTimer = ref(null);
    const closeSignal = ref(null);
    const output = ref(null);
    const searchSuggestions = ref([]);
    const recommendedProducts = ref([]);
    const isSearchGroupShown = ref(false);
    const isSearchResultsShown = ref(false);
    const searchInput = ref(null);
    const showSearchInput = ref(false);
    const resize = () => {
      document.body.classList.add("resize-active");
      if (window.innerWidth > 575) {
        isSearchGroupShown.value = false;
      }
      clearTimeout(searchTimer.value);
      resizeTimer();
    };
    const resizeTimer = () => {
      setTimeout(() => {
        document.body.classList.remove("resize-active");
      }, 400);
    };
    const toggleSearch = async () => {
      var _a;
      isSearchGroupShown.value = !isSearchGroupShown.value;
      await nextTick();
      if (isSearchGroupShown.value && searchInput.value) {
        (_a = searchInput.value) == null ? void 0 : _a.focus();
      }
    };
    const close = () => {
      isSearchGroupShown.value = false;
      showSearchInput.value = false;
    };
    const showSearchResults = () => {
      isSearchResultsShown.value = true;
    };
    const hideSearchResults = () => {
      isSearchResultsShown.value = false;
    };
    const getSearchPreview = async () => {
      const controller = new AbortController();
      const { signal } = controller;
      closeSignal.value = controller;
      output.value = await getProductsBySearchPreview(search.value, signal);
      closeSignal.value = null;
      recommendedProducts.value = output.value.items;
      searchSuggestions.value = output.value.search_suggestions;
      showSearchResults();
    };
    const goSearch = () => {
      toggleSearch();
      showSearchInput.value = true;
      hideSearchResults();
      if (search.value.trim().length > 0 && search.value.trim().length < 35 && !search.value.includes("/")) {
        clearTimeout(searchTimer.value);
        if (closeSignal.value !== null) closeSignal.value.abort();
        router.push({
          path: "/search",
          query: { q: search.value.trim() }
        });
      } else if (search.value.trim().length > 35 && !search.value.includes("/")) {
        const msg = {
          type: "danger",
          title: t("search_error"),
          text: t("searchname_too_long")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      } else if (search.value.includes("/")) {
        const msg = {
          type: "danger",
          title: t("search_error"),
          text: t("search_validation")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    };
    const hideSearchResultsTimer = () => {
      return setTimeout(() => {
        search.value = "";
        hideSearchResults();
      }, 300);
    };
    watch(search, () => {
      if (search.value.length > 2) {
        if (searchTimer.value !== null) {
          clearTimeout(searchTimer.value);
        }
        searchTimer.value = setTimeout(() => {
          if (closeSignal.value !== null) {
            closeSignal.value.abort();
          }
          getSearchPreview();
        }, 2e3);
      } else {
        clearTimeout(searchTimer.value);
        if (closeSignal.value !== null) {
          closeSignal.value.abort();
        }
        hideSearchResults();
      }
    });
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BButton = BButton;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_BFormInput = BFormInput;
      const _component_b_img = BImg;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-form" }, _attrs))} data-v-a5cd6029>`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: ($event) => goSearch(),
        class: "search-btn",
        style: !showSearchInput.value ? null : { display: "none" },
        variant: "light",
        squared: "",
        "aria-label": "Search"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "magnifying-glass"],
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fas", "magnifying-glass"],
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: isSearchGroupShown.value }, "search-group"])}" data-v-a5cd6029>`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: ($event) => close(),
        class: "close-btn",
        style: showSearchInput.value ? null : { display: "none" },
        variant: "light",
        squared: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "xmark"],
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fas", "xmark"],
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BFormInput, {
        ref_key: "searchInput",
        ref: searchInput,
        modelValue: search.value,
        "onUpdate:modelValue": ($event) => search.value = $event,
        style: showSearchInput.value ? null : { display: "none" },
        type: "text",
        required: "",
        onBlur: ($event) => hideSearchResultsTimer(),
        placeholder: _ctx.$t("search_placeholder"),
        onKeyup: ($event) => goSearch(),
        class: "search-input"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ show: isSearchResultsShown.value }, "search-results"])}" data-v-a5cd6029><span class="search--title" data-v-a5cd6029>${ssrInterpolate(_ctx.$t("suggestions"))}:</span><ul class="search-suggestions" data-v-a5cd6029><!--[-->`);
      ssrRenderList(searchSuggestions.value, (suggestion) => {
        _push(`<li class="d-block" data-v-a5cd6029><a data-v-a5cd6029>${ssrInterpolate(suggestion.word)}</a></li>`);
      });
      _push(`<!--]--></ul><span class="search--title" data-v-a5cd6029>${ssrInterpolate(_ctx.$t("recommended_products"))}:</span><ul class="recommended-products" data-v-a5cd6029><!--[-->`);
      ssrRenderList(recommendedProducts.value, (recommendedProduct) => {
        _push(`<li class="d-inline-block" data-v-a5cd6029><a class="d-flex align-items-center" data-v-a5cd6029><div class="product-img" data-v-a5cd6029>`);
        _push(ssrRenderComponent(_component_b_img, {
          src: recommendedProduct.image.small,
          alt: recommendedProduct.name,
          width: "41",
          height: "51",
          fluid: ""
        }, null, _parent));
        _push(`</div><span class="product-name" data-v-a5cd6029>${ssrInterpolate(recommendedProduct.name)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/HeaderSearch.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeaderSearch = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a5cd6029"]]);
const _imports_0$2 = "data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20676%20676'%20width='45'%20height='45'%3e%3ctitle%3eNetherlands-41%3c/title%3e%3cdefs%3e%3cclipPath%20clipPathUnits='userSpaceOnUse'%20id='cp1'%3e%3cpath%20d='m344%20669c-183.04%200-331-147.96-331-331%200-183.04%20147.96-331%20331-331%20183.04%200%20331%20147.96%20331%20331%200%20183.04-147.96%20331-331%20331z'/%3e%3c/clipPath%3e%3c/defs%3e%3cstyle%3e%20.s0%20{%20fill:%20%2321468b%20}%20.s1%20{%20fill:%20%23ffffff%20}%20.s2%20{%20fill:%20%23ae1c28%20}%20%3c/style%3e%3cg%20id='Clip-Path'%20clip-path='url(%23cp1)'%3e%3cg%3e%3cpath%20id='_3'%20fill-rule='evenodd'%20class='s0'%20d='m-7.3-17h699.4v713.7h-699.4z'/%3e%3cpath%20id='_2'%20fill-rule='evenodd'%20class='s1'%20d='m-7.3-17h699.4v475.8h-699.4z'/%3e%3cpath%20id='_1'%20fill-rule='evenodd'%20class='s2'%20d='m-7.3-17h699.4v237.9h-699.4z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$8 = {
  __name: "HeaderIconsDropdownCart",
  __ssrInlineRender: true,
  props: {
    icon: Object,
    showType: String
  },
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const props = __props;
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
    };
    const { removeItem, cartCount, cartSubTotalPrice, defaultShipping, cartTotalPrice } = useCartInfo();
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const isServer = typeof window === "undefined";
    const visible = ref(false);
    const dropDownStyle = ref("max-height: calc(100vh - 0px) !important");
    const cartRef = useTemplateRef("cart");
    __expose({
      cartRef
    });
    const btnDisable = computed(() => {
      return cartCount.value <= 0;
    });
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    function closeDropdownMenu(e) {
      const cartDropdown = cartRef.value && cartRef.value.parentElement;
      if (cartDropdown && !cartDropdown.contains(e.target)) {
        visible.value = false;
        document.removeEventListener("click", closeDropdownMenu);
      }
    }
    watch(visible, () => {
      if (!isServer) {
        if (visible.value === true) {
          document.addEventListener("click", closeDropdownMenu);
          document.body.classList.add("noScroll");
        } else {
          document.body.classList.remove("noScroll");
        }
      }
    });
    function recalculateHeight() {
      var _a;
      if (!isServer) {
        const cartDropdown = cartRef.value;
        var height = cartDropdown ? (_a = cartDropdown == null ? void 0 : cartDropdown.getBoundingClientRect()) == null ? void 0 : _a.top : 0;
        dropDownStyle.value = "#topIconsCollapseM3 { max-height: calc(100vh - " + height + "px) !important}";
      }
    }
    const itemCount = computed(() => cartCount.value);
    const decodeHtmlEntities = (str) => {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = str;
      return textarea.value;
    };
    const decodeHtmlEntitiesSafe = (str) => {
      if (typeof window !== "undefined") {
        return decodeHtmlEntities(str);
      } else {
        return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      }
    };
    const formattedDropHeading = computed(() => {
      if (props.icon && props.icon.dropHeading) {
        decodeHtmlEntitiesSafe(props.icon.dropHeading);
        const text = t("shopping_basket");
        const text2 = t("article");
        return `<span class="shopping-cart-name">${text}</span>  <br /> 
      <span class="shppingcart-article">${itemCount.value} ${text2} </span>`;
      }
      return "";
    });
    const onClickCheckout = () => {
      visible.value = false;
      router.push({ name: "checkout" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _component_BButton = BButton;
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fb73cc1f>`);
      _push(ssrRenderComponent(_component_BCollapse, {
        ref: "cart",
        id: "topIconsCollapse" + __props.showType + __props.icon.iconNumber,
        class: [{ collapsed: visible.value }, "top-icons--drop cart"],
        "aria-expanded": visible.value,
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event,
        onShown: recalculateHeight,
        "is-nav": true,
        style: [isLoggedIn.value ? "right : -57px" : "right : -59px"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(`style`), null, null), _parent2, _scopeId);
            if (__props.icon.dropHeading) {
              _push2(`<span class="drop-heading" data-v-fb73cc1f${_scopeId}>${formattedDropHeading.value ?? ""}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="drop-items" data-v-fb73cc1f${_scopeId}><!--[-->`);
            ssrRenderList(__props.icon.dropItems, (dropItem) => {
              _push2(`<li data-v-fb73cc1f${_scopeId}><div class="d-flex align-items-start" data-v-fb73cc1f${_scopeId}><div class="drop-item--img" data-v-fb73cc1f${_scopeId}><img${ssrRenderAttr("src", dropItem.product.image.x_small)}${ssrRenderAttr("alt", dropItem.product.name)} style="${ssrRenderStyle({ "width": "100%", "height": "auto" })}" data-v-fb73cc1f${_scopeId}></div><div class="drop-item--info" data-v-fb73cc1f${_scopeId}><span class="product-name d-block" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(dropItem.product.name)}</span>`);
              if (typeof dropItem.configurable_options != "undefined") {
                _push2(`<div data-v-fb73cc1f${_scopeId}><!--[-->`);
                ssrRenderList(dropItem.configurable_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-fb73cc1f${_scopeId}><span class="product-options-title" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(option.option_label)}: </span><span class="product-options-value" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(option.value_label)}</span></span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (typeof dropItem.bundle_options != "undefined") {
                _push2(`<div data-v-fb73cc1f${_scopeId}><div data-v-fb73cc1f${_scopeId}><!--[-->`);
                ssrRenderList(dropItem.bundle_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-fb73cc1f${_scopeId}><span data-v-fb73cc1f${_scopeId}>${ssrInterpolate(option.label)}: </span>`);
                  if (typeof option.values[0].configurable_options != "undefined") {
                    _push2(`<span data-v-fb73cc1f${_scopeId}><!--[-->`);
                    ssrRenderList(option.values[0].configurable_options, (opt, idx) => {
                      _push2(`<span data-v-fb73cc1f${_scopeId}><span class="product-options-title" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(opt.option_label)}: </span><span class="product-options-value" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(opt.value_label)}</span></span>`);
                    });
                    _push2(`<!--]--></span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</span>`);
                });
                _push2(`<!--]--></div><!--[-->`);
                ssrRenderList(dropItem.configurable_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-fb73cc1f${_scopeId}><span class="product-options-title" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(option.option_label)}: </span><span class="product-options-value" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(option.value_label)}</span></span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="quantity-price-box" data-v-fb73cc1f${_scopeId}><div class="price-box price mt-2" data-v-fb73cc1f${_scopeId}> €  ${ssrInterpolate(dropItem.prices.row_total_including_tax.value.toFixed(2).replace(".", ","))}</div><div class="quantity-box" data-v-fb73cc1f${_scopeId}><div class="d-flex mt-2" data-v-fb73cc1f${_scopeId}><span class="quantity-name mt-2" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(_ctx.$t("quantity"))}:</span><input type="text" min="1"${ssrRenderAttr("value", dropItem.quantity)} name="quantity" disabled class="text-center rounded-3 item-box" data-v-fb73cc1f${_scopeId}></div></div></div></div><a href="#" class="lnr lnr-trash trash-cart-icon mt-2 text-decoration-none" data-v-fb73cc1f${_scopeId}></a></div></li>`);
            });
            _push2(`<!--]--></ul><div class="d-flex justify-content-end align-items-center gap-25 mt-5" data-v-fb73cc1f${_scopeId}><span class="subtotal-heading d-block pb-0" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(_ctx.$t("sub_total"))}</span><span class="subtotal-price" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(formatCurrency(unref(cartSubTotalPrice)))}</span></div><ul data-v-fb73cc1f${_scopeId}>`);
            if (unref(defaultShipping) != null) {
              _push2(`<li class="d-flex justify-content-end align-items-center gap-30 subheading-hrline" data-v-fb73cc1f${_scopeId}><span class="subtotal-heading mb-5" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(_ctx.$t("shipping_cost"))}</span>`);
              if (typeof unref(defaultShipping).amount != "undefined") {
                _push2(`<span class="subtotal-price ml-10 mb-5" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(formatCurrency(unref(defaultShipping).amount.value))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul><div class="d-flex justify-content-end align-items-center gap-25 mt-15" data-v-fb73cc1f${_scopeId}><span class="subtotal-heading" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(_ctx.$t("total"))}</span><span class="subtotal-price ml-10" data-v-fb73cc1f${_scopeId}>${ssrInterpolate(formatCurrency(unref(cartTotalPrice)))}</span></div>`);
            if (__props.icon.cartFooter) {
              _push2(`<div class="d-flex dropdown-btn align-items-center mt-5" data-v-fb73cc1f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BButton, {
                onClick: onClickCheckout,
                disabled: btnDisable.value || unref(route).path === "/checkout",
                class: "text-light py-4 dropdown-checkout-button rounded-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Complete_order"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
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
              _push2(`<div class="language-block" data-v-fb73cc1f${_scopeId}><ul class="d-flex list-unstyled" data-v-fb73cc1f${_scopeId}><!--[-->`);
              ssrRenderList(__props.icon.language, (lang) => {
                _push2(`<li data-v-fb73cc1f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  href: lang.href
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", lang.img)}${ssrRenderAttr("alt", lang.alt)} data-v-fb73cc1f${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: lang.img,
                          alt: lang.alt
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
              (openBlock(), createBlock(resolveDynamicComponent(`style`), { innerHTML: dropDownStyle.value }, null, 8, ["innerHTML"])),
              __props.icon.dropHeading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "drop-heading",
                innerHTML: formattedDropHeading.value
              }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
              createVNode("ul", { class: "drop-items" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.icon.dropItems, (dropItem) => {
                  return openBlock(), createBlock("li", {
                    key: dropItem.dropItemId
                  }, [
                    createVNode("div", { class: "d-flex align-items-start" }, [
                      createVNode("div", { class: "drop-item--img" }, [
                        createVNode("img", {
                          src: dropItem.product.image.x_small,
                          alt: dropItem.product.name,
                          style: { "width": "100%", "height": "auto" }
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "drop-item--info" }, [
                        createVNode("span", { class: "product-name d-block" }, toDisplayString(dropItem.product.name), 1),
                        typeof dropItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(dropItem.configurable_options, (option, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "product-options d-block"
                            }, [
                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        typeof dropItem.bundle_options != "undefined" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(dropItem.bundle_options, (option, index) => {
                              return openBlock(), createBlock("span", {
                                key: index,
                                class: "product-options d-block"
                              }, [
                                createVNode("span", null, toDisplayString(option.label) + ": ", 1),
                                typeof option.values[0].configurable_options != "undefined" ? (openBlock(), createBlock("span", { key: 0 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(option.values[0].configurable_options, (opt, idx) => {
                                    return openBlock(), createBlock("span", { key: idx }, [
                                      createVNode("span", { class: "product-options-title" }, toDisplayString(opt.option_label) + ": ", 1),
                                      createVNode("span", { class: "product-options-value" }, toDisplayString(opt.value_label), 1)
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(dropItem.configurable_options, (option, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "product-options d-block"
                            }, [
                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "quantity-price-box" }, [
                          createVNode("div", { class: "price-box price mt-2" }, " €  " + toDisplayString(dropItem.prices.row_total_including_tax.value.toFixed(2).replace(".", ",")), 1),
                          createVNode("div", { class: "quantity-box" }, [
                            createVNode("div", { class: "d-flex mt-2" }, [
                              createVNode("span", { class: "quantity-name mt-2" }, toDisplayString(_ctx.$t("quantity")) + ":", 1),
                              createVNode("input", {
                                type: "text",
                                min: "1",
                                value: dropItem.quantity,
                                name: "quantity",
                                ref_for: true,
                                ref: "inputQuantity",
                                disabled: "",
                                class: "text-center rounded-3 item-box"
                              }, null, 8, ["value"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("a", {
                        href: "#",
                        class: "lnr lnr-trash trash-cart-icon mt-2 text-decoration-none",
                        onClick: withModifiers(($event) => unref(removeItem)(dropItem.id), ["prevent"])
                      }, null, 8, ["onClick"])
                    ])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25 mt-5" }, [
                createVNode("span", { class: "subtotal-heading d-block pb-0" }, toDisplayString(_ctx.$t("sub_total")), 1),
                createVNode("span", { class: "subtotal-price" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
              ]),
              createVNode("ul", null, [
                unref(defaultShipping) != null ? (openBlock(), createBlock("li", {
                  key: 0,
                  class: "d-flex justify-content-end align-items-center gap-30 subheading-hrline"
                }, [
                  createVNode("span", { class: "subtotal-heading mb-5" }, toDisplayString(_ctx.$t("shipping_cost")), 1),
                  typeof unref(defaultShipping).amount != "undefined" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "subtotal-price ml-10 mb-5"
                  }, toDisplayString(formatCurrency(unref(defaultShipping).amount.value)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "d-flex justify-content-end align-items-center gap-25 mt-15" }, [
                createVNode("span", { class: "subtotal-heading" }, toDisplayString(_ctx.$t("total")), 1),
                createVNode("span", { class: "subtotal-price ml-10" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
              ]),
              __props.icon.cartFooter ? (openBlock(), createBlock("div", {
                key: 1,
                class: "d-flex dropdown-btn align-items-center mt-5"
              }, [
                createVNode(_component_BButton, {
                  onClick: withModifiers(onClickCheckout, ["stop"]),
                  disabled: btnDisable.value || unref(route).path === "/checkout",
                  class: "text-light py-4 dropdown-checkout-button rounded-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Complete_order")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
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
                          createVNode("img", {
                            src: lang.img,
                            alt: lang.alt
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/HeaderIconsDropdownCart.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeaderIconsDropdownCart = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-fb73cc1f"]]);
const _sfc_main$7 = {
  __name: "HeaderTopIcons",
  __ssrInlineRender: true,
  props: {
    showType: String
  },
  setup(__props) {
    var { cartCount, wishlistCount, cartItems, wishlistItems, cartSubTotalPrice, isLoggedIn } = useCartInfo();
    const { t } = useI18n();
    const store = useStore();
    const user = isLoggedIn ? computed(() => store.getters["user/getCurrentUser"]) : null;
    const icons = computed(() => [
      // {
      //   iconNumber: 1,
      //   isLinearIcon: true,
      //   hasBadge: false,
      //   iconName: "lnr-map-marker",
      //   text: "Onze winkel",
      //   hasDropdown: false,
      //   link: "/winkels",
      //   isEnabled: true,
      // },
      // {
      //   iconNumber: 2,
      //   isLinearIcon: false,
      //   hasBadge: false,
      //   iconName: infoIcon,
      //   text: "Klantenservice",
      //   hasDropdown: false,
      //   link: "/contact",
      //   isEnabled: true,
      // },
      {
        iconNumber: 1,
        isLinearIcon: true,
        hasBadge: false,
        iconName: ["far", "circle-user"],
        text: user != null ? `${user.value.firstname} ${user.value.lastname}` : "",
        textClass: "account",
        menuId: "account",
        hasDropdown: true,
        isEnabled: isLoggedIn.value
      },
      {
        iconNumber: 2,
        isLinearIcon: true,
        hasBadge: false,
        iconName: ["far", "circle-user"],
        text: t("login"),
        textClass: "login",
        hasDropdown: false,
        link: "/login",
        isEnabled: !isLoggedIn.value
      },
      {
        iconNumber: 3,
        isLinearIcon: true,
        hasBadge: false,
        // badgeValue: wishlistCount.value,
        badgeColor: "danger",
        textClass: "wishlist",
        iconName: ["fas", "heart"],
        // text: "Wensenlijst",
        hasDropdown: true,
        menuId: "wishList",
        isEnabled: isLoggedIn.value,
        dropHeading: t("items_in_wishlist", {
          numberOf: wishlistCount.value
        }),
        dropItems: wishlistItems.value
      },
      {
        iconNumber: 4,
        isLinearIcon: true,
        hasBadge: true,
        badgeValue: cartCount.value,
        badgeColor: "danger",
        textClass: "cart",
        iconName: ["fas", "cart-shopping"],
        isEnabled: true,
        hasDropdown: true,
        dropHeading: t("items_in_cart", { numberOf: cartCount.value }),
        dropItems: cartItems.value,
        menuId: "cart",
        cartFooter: {
          totalPrice: cartSubTotalPrice.value,
          btnText: t("goto_checkout"),
          btnVariant: "success"
        }
      }
    ]);
    function renderPopovers(icon) {
      let component = null;
      if (icon.hasDropdown && icon.isEnabled == true) {
        switch (icon.menuId) {
          case "cart":
            component = HeaderIconsDropdownCart;
            break;
          case "wishList":
            component = HeaderIconsDropdown;
            break;
          case "account":
            component = HeaderIconsDropdownMenu;
            break;
        }
      }
      return component;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_BBadge = BBadge;
      const _directive_b_toggle = vBToggle;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "top-icons" }, _attrs))} data-v-331606ca><!--[-->`);
      ssrRenderList(icons.value, (icon) => {
        _push(`<!--[-->`);
        if (icon.isEnabled) {
          _push(`<li data-v-331606ca>`);
          _push(ssrRenderComponent(_component_BLink, mergeProps({
            to: icon.link
          }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, `topIconsCollapse${__props.showType}${icon.iconNumber}`)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  icon: icon.iconName,
                  size: "xl",
                  class: "text-white"
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass(icon.textClass)}" data-v-331606ca${_scopeId}>${ssrInterpolate(icon.text)}</span>`);
                if (icon.hasBadge) {
                  _push2(ssrRenderComponent(_component_BBadge, {
                    variant: icon.badgeColor,
                    key: icon.badgeValue
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(icon.badgeValue)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(icon.badgeValue), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode(_component_font_awesome_icon, {
                    icon: icon.iconName,
                    size: "xl",
                    class: "text-white"
                  }, null, 8, ["icon"]),
                  createVNode("span", {
                    class: icon.textClass
                  }, toDisplayString(icon.text), 3),
                  icon.hasBadge ? (openBlock(), createBlock(_component_BBadge, {
                    variant: icon.badgeColor,
                    key: icon.badgeValue
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(icon.badgeValue), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderPopovers(icon)), {
            icon,
            showType: __props.showType
          }, null), _parent);
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><li data-v-331606ca><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="country-icon" data-v-331606ca></li></ul>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/HeaderTopIcons.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HeaderTopIcons = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-331606ca"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24.4'%20height='18.4'%20viewBox='0%200%2024.4%2018.4'%3e%3cg%20id='Group_501'%20data-name='Group%20501'%20transform='translate(1.2%201.2)'%3e%3cline%20id='Line_36'%20data-name='Line%2036'%20x1='16'%20fill='none'%20stroke='%23fafbfb'%20stroke-linecap='round'%20stroke-width='2.4'/%3e%3cline%20id='Line_37'%20data-name='Line%2037'%20x1='22'%20transform='translate(0%208)'%20fill='none'%20stroke='%23fafbfb'%20stroke-linecap='round'%20stroke-width='2.4'/%3e%3cline%20id='Line_189'%20data-name='Line%20189'%20x1='22'%20transform='translate(0%208)'%20fill='none'%20stroke='%23fafbfb'%20stroke-linecap='round'%20stroke-width='2.4'/%3e%3cline%20id='Line_38'%20data-name='Line%2038'%20x1='11'%20transform='translate(0%2016)'%20fill='none'%20stroke='%23fafbfb'%20stroke-linecap='round'%20stroke-width='2.4'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$6 = {
  __name: "NavbarContent",
  __ssrInlineRender: true,
  emits: "clicked",
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const store = useStore();
    const router = useRouter();
    const menuHeight = ref({
      default: 315,
      current: 315
    });
    const navItems = computed(() => store.getters["menu/getMenuItems"]);
    const closeInternal = () => {
      store.commit("menu/setNavBar", false);
    };
    const onClick = (id, route) => {
      store.commit("menu/updateMenuState", { id, state: false });
      store.commit("menu/setNavBar", false);
      router.push(route).catch(() => {
      });
    };
    const toggleNav = (event) => {
      emit("clicked", event);
    };
    const setHeight = (height) => {
      if (height > menuHeight.value.default) {
        menuHeight.value.current = height;
      } else {
        resetHeight();
      }
    };
    const resetHeight = () => {
      menuHeight.value.current = menuHeight.value.default;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><span class="mobile-menu-header d-lg-none">${ssrInterpolate(_ctx.$t("navbar_choose_category"))}</span>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "nav-opener inner-close",
        onClick: toggleNav
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "xmark"],
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fas", "xmark"],
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="nav-menu"><li class="nav-item"><span class="nav-link has-no-submenu">`);
      _push(ssrRenderComponent(_component_BLink, {
        to: "/",
        onClick: closeInternal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></li><!--[-->`);
      ssrRenderList(navItems.value, (navItem) => {
        _push(`<li class="nav-item"><div class="${ssrRenderClass([{ "has-no-submenu": !(navItem == null ? void 0 : navItem.hasDropMenu) }, "nav-link"])}">`);
        _push(ssrRenderComponent(_component_BLink, {
          to: navItem.linkTo,
          onClick: ($event) => onClick(navItem.id, navItem.linkTo)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(navItem.itemName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(navItem.itemName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (navItem.hasDropMenu) {
          _push(ssrRenderComponent(unref(_sfc_main$a), {
            menuArray: navItem.dropMenu,
            collapseId: "submenu" + navItem.id,
            id: navItem.id,
            onSetHeight: setHeight,
            onResetHeight: resetHeight
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/NavbarContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const navExpanded = computed({
      get() {
        return store.getters["menu/getNavbar"];
      },
      set() {
      }
    });
    watch(navExpanded, async (newValue, oldValue) => {
      if (newValue) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    });
    const toggleNav = () => {
      store.dispatch("menu/toggleNavbar");
    };
    const resize = () => {
      document.body.classList.add("resize-active");
      if (window.innerWidth > 991) {
        navExpanded.value = false;
      }
      clearTimeout(resizeTimer);
      resizeTimer();
    };
    const resizeTimer = () => {
      setTimeout(() => {
        document.body.classList.remove("resize-active");
      }, 400);
    };
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ id: "nav" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "nav-opener",
        onClick: toggleNav
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} class="bars" width="22" alt="bars"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                class: "bars",
                width: "22",
                alt: "bars"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: navExpanded.value }, "nav-collapse"])}">`);
      _push(ssrRenderComponent(_sfc_main$6, { onClicked: toggleNav }, null, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    let mobile = ref(false);
    const resizeWindow = () => {
      const windowWidth = window.innerWidth;
      mobile.value = windowWidth > 992 ? false : true;
    };
    onMounted(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_link = BLink;
      if (isClient.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({
          id: "header",
          class: ""
        }, _attrs))}><div class="header-background align-items-center justify-content-center d-none d-lg-flex flex-column py-20"><img class="me-0 logo"${ssrRenderAttr("src", _imports_0$4)} width="320" height="57" alt="Logo"><div class="text-center"><h1 class="header-title text-white h2">KEEPS YOU WALKING</h1><div class="header-sub-title"><span class="d-block text-white"> GROOTHANDEL IN LEDER &amp; SCHOENFOURNITUREN </span><span class="d-block text-white"> SINDS 1918 </span></div></div></div>`);
        if (unref(mobile)) {
          _push(`<div class="d-lg-none mobile-menu"><div class="col-12 logo-wrapper">`);
          _push(ssrRenderComponent(_component_b_link, { to: "/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0$3)} class="logo" width="150" alt="Logo"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0$3,
                    class: "logo",
                    width: "150",
                    alt: "Logo"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="nav-icon-serch"><div class="nav-menu col-2">`);
          _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
          _push(`</div><div class="icon-wrapper col-10">`);
          _push(ssrRenderComponent(unref(HeaderSearch), null, null, _parent));
          _push(ssrRenderComponent(unref(HeaderTopIcons), { showType: "M" }, null, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<div class="navbar d-none d-lg-block px-15 py-0"><div class="d-flex position-relative text-capitalize">`);
          _push(ssrRenderComponent(unref(_sfc_main$5), { class: "col-6" }, null, _parent));
          _push(`<div class="col-6 d-flex align-items-center justify-content-end search-and-icons">`);
          _push(ssrRenderComponent(unref(HeaderSearch), null, null, _parent));
          _push(ssrRenderComponent(unref(HeaderTopIcons), { showType: "M" }, null, _parent));
          _push(`</div></div></div>`);
        }
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/common/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    const store = useStore();
    computed(() => [
      store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_customer_service_block"),
      store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_vita_natura")
    ]);
    computed(() => store.getters.gtm.enabled());
    computed(
      () => store.getters["sliders/getSliderByIdentifier"]("delivery_partners")
    );
    const contactData = computed(
      () => store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_contact")
    );
    const catalogusMenuData = computed(
      () => store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_menu_catalogus")
    );
    const catalogusSecondMenuData = computed(
      () => store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_menu_catalogus_2")
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      if (isClient.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "footer",
          id: "footer"
        }, _attrs))}><div class="mobile d-xs-block d-lg-none"><div class="d-flex d-sm-flex d-lg-flex flex-column justify-content-around logo-content-wrapper pb-10"><div class="row"><div class="col-6 pe-0"><h3 class="text-uppercase font-weight-bold">${ssrInterpolate(_ctx.$t("contact"))}</h3><div class="contact-list">${((_a = contactData.value) == null ? void 0 : _a.content) ?? ""}</div></div><div class="col-6"><h3 class="text-uppercase font-weight-bold">CATALOGUS </h3><div class="catalog-list">${catalogusMenuData.value.content ?? ""}</div></div></div><div class="row"><div class="col-6 text-center"><img class="logo" width="120"${ssrRenderAttr("src", _imports_0$3)}><div class="icon-wrapper"><span>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook"] }, null, _parent));
        _push(`</span><span>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
        _push(`</span></div></div><div class="col-6"><div class="catalog-list">${catalogusSecondMenuData.value.content ?? ""}</div></div></div></div>`);
        _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
        _push(`</div><div class="desktop d-none d-lg-block"><div class="d-flex d-sm-block d-lg-flex justify-content-around"><div class="col-md-3 border-right d-flex flex-column justify-content-center align-items-center"><img class="logo"${ssrRenderAttr("src", _imports_0$3)}><div class="icon-wrapper"><span>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
        _push(`</span><span>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook"] }, null, _parent));
        _push(`</span></div></div><div class="wrapper"><div class="col row catalogus-contact-wrapper"><div class="col-md-4"><h3 class="text-uppercase font-weight-bold">${ssrInterpolate(_ctx.$t("contact"))}</h3><div class="contact-list">${contactData.value.content ?? ""}</div></div><div class="col-md-4"><h3 class="text-uppercase font-weight-bold">CATALOGUS</h3><div class="catalog-list">${catalogusMenuData.value.content ?? ""}</div></div><div class="col-md-4"><h3 class="text-uppercase font-weight-bold opacity-0">CATALOGUS </h3><div class="catalog-list">${catalogusSecondMenuData.value.content ?? ""}</div></div></div>`);
        _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/common/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "/assets/logoDark-B6Loi3F-.png";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    const store = useStore();
    const menuItems = computed(() => store.getters["sidebar/getSidebarCategoryItems"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_b_nav = BNav;
      if (isClient.value) {
        _push(`<aside${ssrRenderAttrs(_attrs)}><div class="sidebar-header">`);
        _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sidebar logo"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "sidebar logo"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_b_nav, {
          vertical: "",
          class: "sidebar-nav"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(menuItems.value, (item, index) => {
                _push2(`<div class="nav-item-wrapper"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_router_link, {
                  to: `/${item.url_path}`,
                  class: "nav-item"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)} `);
                      if (parseInt(item.children_count) > 0) {
                        _push3(`<i class="fas fa-chevron-right float-right"${_scopeId2}></i>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name) + " ", 1),
                        parseInt(item.children_count) > 0 ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "fas fa-chevron-right float-right"
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (item.children) {
                  _push2(`<div class="${ssrRenderClass([{ "show": item.show }, "submenu"])}"${_scopeId}><!--[-->`);
                  ssrRenderList(item.children, (child, childIndex) => {
                    _push2(`<div class="nav-item-wrapper"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_router_link, {
                      to: `/${child.url_path}`,
                      class: "nav-item"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(child.name)} `);
                          if (parseInt(child.children_count) > 0) {
                            _push3(`<i class="fas fa-chevron-right float-right"${_scopeId2}></i>`);
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(toDisplayString(child.name) + " ", 1),
                            parseInt(child.children_count) > 0 ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "fas fa-chevron-right float-right"
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    if (parseInt(child.children_count) > 0) {
                      _push2(`<div class="${ssrRenderClass([{ "show": child.show }, "submenu"])}"${_scopeId}><!--[-->`);
                      ssrRenderList(child.children, (subChild, subChildIndex) => {
                        _push2(ssrRenderComponent(_component_router_link, {
                          key: subChildIndex,
                          to: `/${subChild.url_path}`,
                          class: "nav-item"
                        }, {
                          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`${ssrInterpolate(subChild.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(subChild.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent2, _scopeId));
                      });
                      _push2(`<!--]--></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(menuItems.value, (item, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "nav-item-wrapper",
                    onMouseenter: ($event) => item.show = true,
                    onMouseleave: ($event) => item.show = false
                  }, [
                    createVNode(_component_router_link, {
                      to: `/${item.url_path}`,
                      class: "nav-item"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name) + " ", 1),
                        parseInt(item.children_count) > 0 ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "fas fa-chevron-right float-right"
                        })) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    item.children ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["submenu", { "show": item.show }]
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, childIndex) => {
                        return openBlock(), createBlock("div", {
                          key: childIndex,
                          class: "nav-item-wrapper",
                          onMouseenter: ($event) => child.show = true,
                          onMouseleave: ($event) => child.show = false
                        }, [
                          createVNode(_component_router_link, {
                            to: `/${child.url_path}`,
                            class: "nav-item"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(child.name) + " ", 1),
                              parseInt(child.children_count) > 0 ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "fas fa-chevron-right float-right"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          parseInt(child.children_count) > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["submenu", { "show": child.show }]
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(child.children, (subChild, subChildIndex) => {
                              return openBlock(), createBlock(_component_router_link, {
                                key: subChildIndex,
                                to: `/${subChild.url_path}`,
                                class: "nav-item"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(subChild.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ], 2)) : createCommentVNode("", true)
                        ], 40, ["onMouseenter", "onMouseleave"]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true)
                  ], 40, ["onMouseenter", "onMouseleave"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/common/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CookieBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    const cookies = VueCookies;
    const gtm = useGtm();
    const allCookies = ref(true);
    const isCookieAgreed = ref(false);
    const setGoogleConsent = (consent) => {
      if (typeof window.gtag !== "function") {
        window.gtag = function() {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(arguments);
        };
      }
      window.gtag("consent", "default", formatConsent(consent));
    };
    const updateGoogleConsent = (consent) => {
      window.gtag("consent", "update", formatConsent(consent));
    };
    const formatConsent = (consent) => {
      return {
        ad_storage: consent,
        analytics_storage: consent,
        functionality_storage: consent,
        personalization_storage: consent,
        security_storage: "granted",
        ad_user_data: consent,
        ad_personalization: consent,
        wait_for_update: 2e3
      };
    };
    const onClick = () => {
      isCookieAgreed.value = true;
      cookies.config("180d");
      cookies.set("websiteCookie", true);
      if (allCookies.value) {
        updateGoogleConsent("granted");
      } else {
        updateGoogleConsent("denied");
      }
    };
    onMounted(() => {
      isCookieAgreed.value = cookies.isKey("websiteCookie");
      isClient.value = true;
      setGoogleConsent("denied");
      gtm.enable(true);
      if (allCookies.value && isCookieAgreed.value) {
        updateGoogleConsent("granted");
      } else {
        updateGoogleConsent("denied");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      if (!isCookieAgreed.value && isClient.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-bar-wrap" }, _attrs))}><div class="container"><div class="cookie-wrap"><div class="img"><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("srcset", _imports_0 + " 253w, " + _imports_0 + " 175w, " + _imports_0 + " 75w")} width="150" alt="Logo"></div><div class="text align-content-center"><h4 class="title">${ssrInterpolate(_ctx.$t("cookiebar_title"))}</h4><p>${ssrInterpolate(_ctx.$t("cookiebar_text"))}</p><div class="sub-wrap d-block d-sm-flex justify-content-between align-items-center"><div class="checkbox-block mb-10 mb-sm-0"><label><input type="checkbox" checked="checked" name="check01" disabled><span class="fake-check">${ssrInterpolate(_ctx.$t("cookiebar_necessary"))}</span></label><label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(allCookies.value) ? ssrLooseContain(allCookies.value, null) : allCookies.value) ? " checked" : ""} name="check02"><span class="fake-check">${ssrInterpolate(_ctx.$t("cookiebar_other"))}</span></label></div><div class="btn-wrap">`);
        _push(ssrRenderComponent(_component_BLink, {
          class: "btn btn-secondary text-white cookiebar-accept-btn",
          onClick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("cookiebar_accept"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("cookiebar_accept")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/CookieBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    wrapperClass: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    const deviceClass = ref("desktop");
    const showTopbar = ref();
    const resizeWindow = () => {
      const windowWidth = window.innerWidth;
      deviceClass.value = windowWidth >= 1025 ? "desktop d-flex container" : "mobile container-fluid  px-0";
    };
    onMounted(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      const mainElement = document.querySelector("main");
      if (mainElement.classList.contains("home")) {
        showTopbar.value = "show-topbar";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "wrapper",
        class: deviceClass.value
      }, _attrs))}>`);
      if (isClient.value) {
        _push(`<div class="col-xl-2 d-none d-xl-block sidebar">`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-12 col-xl-10">`);
      _push(ssrRenderComponent(_sfc_main$4, { class: showTopbar.value }, null, _parent));
      _push(`<main id="main" class="${ssrRenderClass(__props.wrapperClass)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AppLayout-CdCGV8yT.js.map
