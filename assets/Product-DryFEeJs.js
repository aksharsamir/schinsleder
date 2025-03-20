import { ref, onBeforeUpdate, computed, onMounted, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, unref, createSlots, withModifiers, Fragment, renderList, useSSRContext, watch, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { useGtm } from "@gtm-support/vue-gtm";
import { useI18n } from "vue-i18n";
import VueCookies from "vue-cookies";
import { _ as _sfc_main$c } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$a, e as _sfc_main$d, f as _sfc_main$e, g as _sfc_main$f } from "./DescriptionTab-CZduIBHb.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { _ as _imports_0 } from "./heart-DpQotoa5.js";
import { isMobile, isTablet } from "mobile-device-detect";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import Lightbox from "vue-easy-lightbox";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { useModal } from "bootstrap-vue-next";
import { M as MoreProductsCarousel } from "./MoreProductsCarousel-CQBsknMv.js";
import { _ as _sfc_main$b } from "./BlockSimple-BHbXwFf2.js";
import { _ as _sfc_main$g } from "./DynamicForms-BMAeaiy-.js";
import { C as CONFIG_JSON, i as isServer } from "../entry-server.js";
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "vue-router";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "bootstrap-vue-next/components/BAlert";
import "bootstrap-vue-next/components/BModal";
import "bootstrap-vue-next/directives/BModal";
import "@vueuse/core";
import "@popperjs/core";
import "vue-socials";
import "bootstrap-vue-next/components/BTabs";
import "./ProductCard-zGPQ-XdA.js";
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
const _sfc_main$5 = {
  __name: "ProductGallery",
  __ssrInlineRender: true,
  props: ["images", "isInWishList"],
  emits: ["changeIsInWishList"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isClient = ref(false);
    const breakpoints = {
      // 768px and up
      768: {
        itemsToShow: 3
      }
    };
    const selectedImage = ref(props.images[0].large);
    const visible = ref(false);
    const index = ref(0);
    const slideNumber = ref(0);
    onBeforeUpdate(() => {
      var _a;
      if (![...props.images].some(({ large }) => large == selectedImage.value))
        selectedImage.value = (_a = props.images[0]) == null ? void 0 : _a.large;
    });
    const imgs = computed({
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
    const is_mobile = computed(() => isMobile && !isTablet);
    const show = () => {
      visible.value = true;
    };
    const handleHide = () => {
      visible.value = false;
    };
    const toggleIsInWishList = () => {
      emit("changeIsInWishList");
    };
    const showMultiple = () => {
      imgs.value = props.images;
      index.value = slideNumber.value;
      show();
    };
    const changeSelectedImage = (e) => {
      const sn = e.target.parentElement.id.replace(/^\D+/g, "");
      slideNumber.value = Number(sn);
      selectedImage.value = props.images[sn].large;
    };
    const clickSlideGallery = (e) => {
      changeSelectedImage(e);
      if (window.innerWidth < 768) {
        showMultiple();
      }
    };
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_link = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-gallery" }, _attrs))} data-v-4e4e6358><div class="selected-image-holder d-none d-md-block" data-v-4e4e6358>`);
      _push(ssrRenderComponent(_component_b_link, {
        href: "#",
        onClick: toggleIsInWishList
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lnr lnr-heart" data-v-4e4e6358${_scopeId}></i>`);
            if (__props.isInWishList) {
              _push2(`<div class="heart-icon" data-v-4e4e6358${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="heart" data-v-4e4e6358${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("i", { class: "lnr lnr-heart" }),
              __props.isInWishList ? (openBlock(), createBlock("div", {
                key: 0,
                class: "heart-icon"
              }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "heart"
                })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="selected-image" style="${ssrRenderStyle({ backgroundImage: `url(${selectedImage.value})` })}" data-v-4e4e6358></div></div>`);
      if (isClient.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Lightbox), {
          visible: visible.value,
          imgs: imgs.value,
          index: index.value,
          onHide: handleHide
        }, null, _parent));
        _push(ssrRenderComponent(unref(Carousel), {
          class: "carousel",
          autoplay: 0,
          itemsToShow: 1,
          breakpoints
        }, createSlots({
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.images, (image, i) => {
                _push2(ssrRenderComponent(unref(Slide), {
                  key: `${i}`,
                  id: `slide ${i}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_b_link, {
                        href: "#",
                        onClick: toggleIsInWishList,
                        class: "mobile-add-to-wishlist"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<i class="lnr lnr-heart" data-v-4e4e6358${_scopeId3}></i>`);
                            if (__props.isInWishList) {
                              _push4(`<div class="heart-icon" data-v-4e4e6358${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="heart" data-v-4e4e6358${_scopeId3}></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              createVNode("i", { class: "lnr lnr-heart" }),
                              __props.isInWishList ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "heart-icon"
                              }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "heart"
                                })
                              ])) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_b_link, {
                        href: "#",
                        class: "slide-img-holder",
                        onClick: clickSlideGallery
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="slide-img" style="${ssrRenderStyle({
                              backgroundImage: `url(${is_mobile.value ? image.large : image.small})`
                            })}" data-v-4e4e6358${_scopeId3}></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "slide-img",
                                style: {
                                  backgroundImage: `url(${is_mobile.value ? image.large : image.small})`
                                }
                              }, null, 4)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_b_link, {
                          href: "#",
                          onClick: toggleIsInWishList,
                          class: "mobile-add-to-wishlist"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "lnr lnr-heart" }),
                            __props.isInWishList ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "heart-icon"
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "heart"
                              })
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_link, {
                          href: "#",
                          class: "slide-img-holder",
                          onClick: withModifiers(clickSlideGallery, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "slide-img",
                              style: {
                                backgroundImage: `url(${is_mobile.value ? image.large : image.small})`
                              }
                            }, null, 4)
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
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.images, (image, i) => {
                  return openBlock(), createBlock(unref(Slide), {
                    key: `${i}`,
                    id: `slide ${i}`
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_link, {
                        href: "#",
                        onClick: toggleIsInWishList,
                        class: "mobile-add-to-wishlist"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "lnr lnr-heart" }),
                          __props.isInWishList ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "heart-icon"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "heart"
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_link, {
                        href: "#",
                        class: "slide-img-holder",
                        onClick: withModifiers(clickSlideGallery, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "slide-img",
                            style: {
                              backgroundImage: `url(${is_mobile.value ? image.large : image.small})`
                            }
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["id"]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, [
          is_mobile.value && __props.images.length > 1 || !is_mobile.value && __props.images.length > 2 ? {
            name: "addons",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Navigation), null, {
                  prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-left" data-v-4e4e6358${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "lnr lnr-chevron-left" })
                      ];
                    }
                  }),
                  next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-right" data-v-4e4e6358${_scopeId2}></i>`);
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
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductGallery.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProductGallery = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4e4e6358"]]);
const _sfc_main$4 = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "store_availability" }, _attrs))}>`);
      if (availability.value.length > 0) {
        _push(`<div class="selection-category d-flex justify-content-between">`);
        if (availability.value.length == 1) {
          _push(`<span class="select-size">${ssrInterpolate(_ctx.$t("store_availability"))}:</span>`);
        } else {
          _push(`<span class="select-size">${ssrInterpolate(_ctx.$t("store_availability_multipe"))}:</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (availability.value.length > 0) {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/product/ProductStoreAvailability.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProductAddtoCart",
  __ssrInlineRender: true,
  props: {
    product: Object,
    productConfig: Object,
    addedQuantity: Function
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const { t } = useI18n();
    useGtm();
    const { show } = useModal("ProductCardModal");
    const quantity = ref(1);
    ref(null);
    ref(null);
    const isAddToCartBtnDisabled = ref(false);
    const product = computed(() => store.getters["product/getCurrentProduct"]);
    watch(
      () => product.value,
      (newProduct) => {
        if (newProduct) {
          quantity.value = 1;
        }
      }
    );
    const btnDisable = computed(() => {
      if (props.product.__typename == "ConfigurableProduct") {
        const retval = store.getters["product/getCurrentChildSku"];
        if (retval != null) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
    const buttonClass = computed(() => {
      if (btnDisable.value == true) {
        return "cursor: not-allowed;";
      } else {
        return "";
      }
    });
    const quantityUp = () => {
      quantity.value++;
      props.addedQuantity(quantity.value);
    };
    const quantityDown = () => {
      if (quantity.value > 1) quantity.value--;
      props.addedQuantity(quantity.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex quantity-and-btn" }, _attrs))}><div class="quantity-input d-flex">`);
      _push(ssrRenderComponent(_component_BLink, {
        href: "#",
        class: "step-down-btn",
        onClick: quantityDown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input type="number" min="1"${ssrRenderAttr("value", quantity.value)} name="quantity" disabled>`);
      _push(ssrRenderComponent(_component_BLink, {
        href: "#",
        class: "step-up-btn",
        onClick: quantityUp
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button${ssrIncludeBooleanAttr(btnDisable.value || isAddToCartBtnDisabled.value) ? " disabled" : ""} style="${ssrRenderStyle(buttonClass.value)}" class="btn btn-info product-parameter-submit-btn"><i class="lnr lnr-cart"></i>${ssrInterpolate(_ctx.$t("add_to_cart"))}</button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/product/ProductAddtoCart.vue");
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
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        product: product.value,
        priceRange: priceRange.value,
        quantity: quantity.value,
        products: upSell.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        product: product.value,
        priceRange: priceRange.value,
        productConfig: productConfig.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        parameters: __props.parameters,
        product: product.value,
        options: options.value,
        productConfig: productConfig.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        product: product.value,
        productConfig: productConfig.value,
        options: options.value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        product: product.value,
        addedQuantity: (qty) => quantity.value = qty
      }, null, _parent));
      if (crossSell.value.length > 0) {
        _push(`<div class="product-gallery-block"><h2>${ssrInterpolate(_ctx.$t("cross_sell_products"))}</h2>`);
        _push(ssrRenderComponent(unref(MoreProductsCarousel), { products: crossSell.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (upSell.value.length > 0) {
        _push(`<div class="product-gallery-block"><h2>${ssrInterpolate(_ctx.$t("related_products"))}</h2>`);
        _push(ssrRenderComponent(unref(MoreProductsCarousel), { products: upSell.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), { product: product.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductParameters.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BundelTips",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const product = computed(() => store.getters["home/getRandomBundles"](1)[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_link = BLink;
      if (typeof product.value != "undefined") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bundleTips" }, _attrs))}><span class="title d-block text-center">Bundel tips</span><div class="img-holder position-relative"><div class="img" style="${ssrRenderStyle({ backgroundImage: `url(${product.value.thumbnail.large})` })}"></div><div class="discount-label text-center"><span class="d-block">${ssrInterpolate(_ctx.$t("from"))} €${ssrInterpolate(product.value.price_range.maximum_price.regular_price.value.toFixed(2).replace(".", ","))} ${ssrInterpolate(_ctx.$t("to"))} €${ssrInterpolate(product.value.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ","))}</span><mark class="d-block">${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(product.value.price_range.minimum_price.discount.percent_off.toFixed(0))}%</mark></div></div><ul class="bundel-items d-none d-md-flex"><!--[-->`);
        ssrRenderList(product.value.items, (bundelItem) => {
          _push(`<li>${ssrInterpolate(bundelItem.title)}</li>`);
        });
        _push(`<!--]--></ul><div class="text-center d-none d-md-block">`);
        _push(ssrRenderComponent(_component_b_link, {
          to: `/` + product.value.url_key,
          class: "bundles-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Bekijk nu! `);
            } else {
              return [
                createTextVNode(" Bekijk nu! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_sfc_main$b, {
          identifier: "bundle_tips_alternative",
          class: "bundle_tips_alternative"
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/BundelTips.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    const gtm = useGtm();
    const { t } = useI18n();
    const store = useStore();
    const showDismissibleAlert = ref(false);
    const product = computed(() => store.getters["product/getCurrentProduct"]);
    const related = computed(() => store.getters["product/getRelated"]);
    const productConfig = computed(() => store.getters["product/getCurrentConfig"]);
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
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$c), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (product.value) {
              _push2(`<section class="product product-section"${_scopeId}><div class="container"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$d), {
                modelValue: showDismissibleAlert.value,
                "onUpdate:modelValue": ($event) => showDismissibleAlert.value = $event,
                product: product.value
              }, null, _parent2, _scopeId));
              if (mobileCheck.value && !unref(isServer)) {
                _push2(`<h1 class="product--name d-block"${_scopeId}>${ssrInterpolate(product.value.name)}</h1>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="row pb-md-20"${_scopeId}><div class="col-12 col-md-6"${_scopeId}>`);
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
              _push2(ssrRenderComponent(unref(_sfc_main$e), { class: "d-none d-md-block" }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-12 col-md-6"${_scopeId}>`);
              if (!mobileCheck.value && !unref(isServer)) {
                _push2(`<h1 class="product--name d-block"${_scopeId}>${ssrInterpolate(product.value.name)}</h1>`);
              } else {
                _push2(`<!---->`);
              }
              if (product.value.__typename != "BundleProduct") {
                _push2(ssrRenderComponent(unref(_sfc_main$2), { isInWishList: false }, null, _parent2, _scopeId));
              } else if (product.value.__typename == "BundleProduct") {
                _push2(ssrRenderComponent(unref(_sfc_main$f), { isInWishList: false }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "d-none d-md-block" }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row pb-md-70 d-md-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$e), { class: "col-12 col-md-6" }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (related.value.length > 0) {
                _push2(`<div class="product-gallery-block"${_scopeId}><h2${_scopeId}>${ssrInterpolate(_ctx.$t("up_sell_products"))}</h2>`);
                _push2(ssrRenderComponent(unref(MoreProductsCarousel), { products: related.value }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (productForm.value != null) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$g), {
                  product_sku: product.value.sku,
                  type: "product"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></section>`);
            } else {
              _push2(`<section${_scopeId}><div class="container"${_scopeId}><h4 class="no-product"${_scopeId}>${ssrInterpolate(_ctx.$t("no_product_found"))}</h4></div></section>`);
            }
          } else {
            return [
              product.value ? (openBlock(), createBlock("section", {
                key: 0,
                class: "product product-section"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode(unref(_sfc_main$d), {
                    modelValue: showDismissibleAlert.value,
                    "onUpdate:modelValue": ($event) => showDismissibleAlert.value = $event,
                    product: product.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "product"]),
                  mobileCheck.value && !unref(isServer) ? (openBlock(), createBlock("h1", {
                    key: 0,
                    class: "product--name d-block"
                  }, toDisplayString(product.value.name), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "row pb-md-20" }, [
                    createVNode("div", { class: "col-12 col-md-6" }, [
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
                      createVNode(unref(_sfc_main$e), { class: "d-none d-md-block" })
                    ]),
                    createVNode("div", { class: "col-12 col-md-6" }, [
                      !mobileCheck.value && !unref(isServer) ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "product--name d-block"
                      }, toDisplayString(product.value.name), 1)) : createCommentVNode("", true),
                      product.value.__typename != "BundleProduct" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: 1,
                        isInWishList: false
                      })) : product.value.__typename == "BundleProduct" ? (openBlock(), createBlock(unref(_sfc_main$f), {
                        key: 2,
                        isInWishList: false
                      })) : createCommentVNode("", true),
                      createVNode(unref(_sfc_main$1), { class: "d-none d-md-block" })
                    ])
                  ]),
                  createVNode("div", { class: "row pb-md-70 d-md-none" }, [
                    createVNode(unref(_sfc_main$e), { class: "col-12 col-md-6" })
                  ]),
                  related.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "product-gallery-block"
                  }, [
                    createVNode("h2", null, toDisplayString(_ctx.$t("up_sell_products")), 1),
                    createVNode(unref(MoreProductsCarousel), { products: related.value }, null, 8, ["products"])
                  ])) : createCommentVNode("", true),
                  productForm.value != null ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(unref(_sfc_main$g), {
                      product_sku: product.value.sku,
                      type: "product"
                    }, null, 8, ["product_sku"])
                  ])) : createCommentVNode("", true)
                ])
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Product-DryFEeJs.js.map
