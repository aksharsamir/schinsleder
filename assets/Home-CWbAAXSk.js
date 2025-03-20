import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext, onMounted, unref, resolveComponent, resolveDirective, withDirectives, watchEffect } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrGetDirectiveProps } from "vue/server-renderer";
import { useStore } from "vuex";
import { C as CONFIG_JSON } from "../entry-server.js";
import { useHead } from "@unhead/vue";
import "vue-cookies";
import { _ as _sfc_main$6 } from "./BaseLayout-CHxrOdsN.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next/components/BCarousel";
import { isBrowser, isMobile, isTablet } from "mobile-device-detect";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { S as SubscribeSeparator } from "./SubscribeSeparator-C3jKN2LH.js";
import { P as ProductCard } from "./ProductCard-zGPQ-XdA.js";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import { R as Retargeted } from "./Retargeted-CvqGtd9U.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-router";
import "vue-i18n";
import "axios";
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
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "./BlockSimple-BHbXwFf2.js";
import "./heart-DpQotoa5.js";
import "./default-placeholder-image-BaAVikZT.js";
const _sfc_main$5 = {
  __name: "HeroBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const slide = ref(0);
    const store = useStore();
    const mobileCheck = computed(() => {
      if (isBrowser) {
        return "browser";
      } else if (isMobile && isTablet) {
        return "tablet";
      } else {
        return "mobile";
      }
    });
    const slider = computed(() => {
      let slider2 = store.getters["sliders/getSliderByIdentifier"]("home");
      if ((slider2 == null ? void 0 : slider2.slides) != null) {
        slider2.slides.forEach((element) => {
          if (mobileCheck.value === "browser") {
            element.optImage = element.media.url;
          } else if (mobileCheck.value === "tablet") {
            element.optImage = element.media.larger;
          } else {
            element.optImage = element.media.medium;
          }
        });
      }
      return slider2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCarousel = BCarousel;
      const _component_BCarouselSlide = BCarouselSlide;
      const _component_BLink = BLink;
      _push(ssrRenderComponent(_component_BCarousel, mergeProps({
        id: "carousel-hero-banner",
        modelValue: slide.value,
        "onUpdate:modelValue": ($event) => slide.value = $event,
        ride: "carousel",
        interval: 5e3,
        indicators: "",
        style: { "text-shadow": "1px 1px 2px #333" },
        class: "hero-banner-carousel container",
        background: "fff"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = slider.value) == null ? void 0 : _a.slides, (bSlide, index) => {
              _push2(ssrRenderComponent(_component_BCarouselSlide, {
                key: index,
                "img-src": bSlide.optImage,
                id: "carousel-hero-banner" + index
              }, {
                img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BLink, {
                      to: bSlide.link,
                      class: "ml-md-0 w-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img class="d-block img-fluid w-100"${ssrRenderAttr("src", bSlide.optImage)}${ssrRenderAttr("alt", bSlide.title)} width="767" height="286" data-v-172172ea${_scopeId3}><div class="carousel-caption" data-v-172172ea${_scopeId3}><div class="container" data-v-172172ea${_scopeId3}>`);
                          if (bSlide.description) {
                            _push4(`<div class="carousel-caption" data-v-172172ea${_scopeId3}>${bSlide.description ?? ""}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (bSlide.buttonText) {
                            _push4(ssrRenderComponent(_component_BLink, {
                              to: bSlide.link,
                              class: "btn btn-trans-white ml-md-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(bSlide.buttonText)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(bSlide.buttonText), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "d-block img-fluid w-100",
                              src: bSlide.optImage,
                              alt: bSlide.title,
                              width: "767",
                              height: "286"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "carousel-caption" }, [
                              createVNode("div", { class: "container" }, [
                                bSlide.description ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "carousel-caption",
                                  innerHTML: bSlide.description
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                                bSlide.buttonText ? (openBlock(), createBlock(_component_BLink, {
                                  key: 1,
                                  to: bSlide.link,
                                  class: "btn btn-trans-white ml-md-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(bSlide.buttonText), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])) : createCommentVNode("", true)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BLink, {
                        to: bSlide.link,
                        class: "ml-md-0 w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "d-block img-fluid w-100",
                            src: bSlide.optImage,
                            alt: bSlide.title,
                            width: "767",
                            height: "286"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "carousel-caption" }, [
                            createVNode("div", { class: "container" }, [
                              bSlide.description ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "carousel-caption",
                                innerHTML: bSlide.description
                              }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                              bSlide.buttonText ? (openBlock(), createBlock(_component_BLink, {
                                key: 1,
                                to: bSlide.link,
                                class: "btn btn-trans-white ml-md-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(bSlide.buttonText), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = slider.value) == null ? void 0 : _b.slides, (bSlide, index) => {
                return openBlock(), createBlock(_component_BCarouselSlide, {
                  key: index,
                  "img-src": bSlide.optImage,
                  id: "carousel-hero-banner" + index
                }, {
                  img: withCtx(() => [
                    createVNode(_component_BLink, {
                      to: bSlide.link,
                      class: "ml-md-0 w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          class: "d-block img-fluid w-100",
                          src: bSlide.optImage,
                          alt: bSlide.title,
                          width: "767",
                          height: "286"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "carousel-caption" }, [
                          createVNode("div", { class: "container" }, [
                            bSlide.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "carousel-caption",
                              innerHTML: bSlide.description
                            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                            bSlide.buttonText ? (openBlock(), createBlock(_component_BLink, {
                              key: 1,
                              to: bSlide.link,
                              class: "btn btn-trans-white ml-md-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(bSlide.buttonText), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1032, ["img-src", "id"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeroBanner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-172172ea"]]);
const _sfc_main$4 = {
  __name: "ImageGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const images = computed(() => store.getters["sliders/getSliderByIdentifier"]("home_gallery"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "image-gallery" }, _attrs))}><div class="container">`);
      if (typeof images.value === "object") {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(images.value.slides, (image) => {
          _push(`<div class="col-12 col-md-6 img-grid">`);
          _push(ssrRenderComponent(_component_BLink, {
            to: image.link,
            "aria-label": image.description ? image.description : image.title
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="img-holder" style="${ssrRenderStyle({ backgroundImage: `url(${image.media.url})` })}"${_scopeId}></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "img-holder",
                    style: { backgroundImage: `url(${image.media.url})` }
                  }, null, 4)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ImageGallery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "MostPurchased",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isClient = ref(false);
    const breakpoints = {
      769: {
        itemsToShow: 3
      }
    };
    const mostPurchasedProducts = computed(() => store.getters["home/getMostPurchasedProducts"]);
    const getOptionHeight = computed(() => {
      let maxCount = 0;
      mostPurchasedProducts.value.forEach((p) => {
        if (p.configurable_options) {
          p.configurable_options.forEach((co) => {
            if (co.values && co.values.length > maxCount) {
              maxCount = co.values.length;
            }
          });
        }
      });
      return Math.floor(maxCount / 4) + 1;
    });
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (mostPurchasedProducts.value && mostPurchasedProducts.value.length > 0) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "most-purchased" }, _attrs))} data-v-e310bb5d><div class="container" data-v-e310bb5d><div class="row" data-v-e310bb5d><div class="col-12" data-v-e310bb5d><span class="section-heading font-weight-normal text-center d-block" data-v-e310bb5d>Meest verkocht</span></div></div>`);
        if (isClient.value) {
          _push(ssrRenderComponent(unref(Carousel), {
            autoplay: 3e3,
            wrapAround: true,
            breakpoints,
            pauseAutoplayOnHover: true,
            itemsToShow: 1,
            snapAlign: "start"
          }, {
            addons: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Navigation), null, {
                  prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-left" data-v-e310bb5d${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "lnr lnr-chevron-left" })
                      ];
                    }
                  }),
                  next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-right" data-v-e310bb5d${_scopeId2}></i>`);
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
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(mostPurchasedProducts.value, (product) => {
                  _push2(ssrRenderComponent(unref(Slide), {
                    class: "filtered-products text-start",
                    key: product.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(ProductCard), {
                          product,
                          optionHeight: getOptionHeight.value
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(ProductCard), {
                            product,
                            optionHeight: getOptionHeight.value
                          }, null, 8, ["product", "optionHeight"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(mostPurchasedProducts.value, (product) => {
                    return openBlock(), createBlock(unref(Slide), {
                      class: "filtered-products text-start",
                      key: product.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ProductCard), {
                          product,
                          optionHeight: getOptionHeight.value
                        }, null, 8, ["product", "optionHeight"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/home/MostPurchased.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MostPurchased = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e310bb5d"]]);
const _sfc_main$2 = {
  __name: "OurStores",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const storeImages = computed(() => store.getters["stores/getStores"]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "our-stores" }, _attrs))}><div class="container"><span class="section-heading font-weight-normal text-center d-block"> Onze winkel </span>`);
      if (storeImages.value.length > 1) {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(storeImages.value, (storeImage, index) => {
          _push(`<div class="col-12 col-md-6">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/winkel/` + storeImage.url_key,
            "aria-label": `Go to ${storeImage.name}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (storeImage.base_image != null) {
                  _push2(`<div style="${ssrRenderStyle({ backgroundImage: `url(${storeImage.base_image.url})` })}" class="img-holder"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  storeImage.base_image != null ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { backgroundImage: `url(${storeImage.base_image.url})` },
                    class: "img-holder"
                  }, null, 4)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList((_a = storeImages.value[0]) == null ? void 0 : _a.images, (images, imgindex) => {
          _push(`<div class="col-12 col-md-6">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/winkel/` + storeImages.value[0].url_key,
            "aria-label": `Go to ${storeImages.value[0].name}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (images.url != null) {
                  _push2(`<div style="${ssrRenderStyle({ backgroundImage: `url(${images.url})` })}" class="img-holder"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  images.url != null ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { backgroundImage: `url(${images.url})` },
                    class: "img-holder"
                  }, null, 4)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/OurStores.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "OurBrands",
  __ssrInlineRender: true,
  setup(__props) {
    const noOfSlidePerPage = ref(6);
    const breakpoints = {
      0: {
        itemsToShow: 2
      },
      768: {
        itemsToShow: 3
      },
      992: {
        itemsToShow: 6
      }
    };
    const store = useStore();
    const isClient = ref(false);
    const slider = computed(() => store.getters["product/getBrandSlider"]);
    const sliceOfBrandSlider = ref(slider.value.slice(0, 10));
    function loadMoreBrands(data) {
      if (data.slidingToIndex >= data.slidesCount - noOfSlidePerPage.value && data.slidingToIndex - data.slidesCount < noOfSlidePerPage.value && data.slidesCount < slider.value.length) {
        let currentCount = sliceOfBrandSlider.value.length;
        const moreBrands = slider.value.slice(currentCount, currentCount + 10);
        sliceOfBrandSlider.value = [...sliceOfBrandSlider.value, ...moreBrands];
      }
    }
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_lazy = resolveDirective("lazy");
      let _temp0, _temp1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "our-brands" }, _attrs))} data-v-0b2627da><div class="container" data-v-0b2627da><span class="d-block section-heading text-center font-weight-normal" data-v-0b2627da>${ssrInterpolate(_ctx.$t("our_brands"))}</span><div data-v-0b2627da>`);
      if (isClient.value) {
        _push(ssrRenderComponent(unref(Carousel), {
          onSlideStart: loadMoreBrands,
          autoplay: 3e3,
          wrapAround: true,
          breakpoints,
          pauseAutoplayOnHover: true,
          itemsToScroll: 1,
          snapAlign: "start",
          ref: (el) => noOfSlidePerPage.value = el && el.data.config.itemsToShow
        }, {
          addons: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Navigation), null, {
                prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="lnr lnr-chevron-left" data-v-0b2627da${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "lnr lnr-chevron-left" })
                    ];
                  }
                }),
                next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="lnr lnr-chevron-right" data-v-0b2627da${_scopeId2}></i>`);
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
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(sliceOfBrandSlider.value, (brand, index) => {
                _push2(ssrRenderComponent(unref(Slide), {
                  class: "col-6 col-md-4 col-lg-2 d-flex justify-content-center align-items-center img-holder position-relative",
                  key: index,
                  "aria-hidden": brand.category == null ? "true" : "false",
                  height: "133px"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (brand.category != null) {
                        _push3(ssrRenderComponent(_component_router_link, {
                          to: `/${brand.category.url_path}`,
                          tabindex: brand.category == null ? "-1" : "0"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                                alt: brand.title,
                                loading: "lazy"
                              }, ssrGetDirectiveProps(_ctx, _directive_lazy, brand.logo)))} data-v-0b2627da${_scopeId3}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
                            } else {
                              return [
                                withDirectives(createVNode("img", {
                                  alt: brand.title,
                                  loading: "lazy"
                                }, null, 8, ["alt"]), [
                                  [_directive_lazy, brand.logo]
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (brand.category == null) {
                        _push3(`<img${ssrRenderAttrs(_temp1 = mergeProps({
                          style: { "filter": "grayscale(100%)" },
                          alt: brand.title,
                          loading: "lazy"
                        }, ssrGetDirectiveProps(_ctx, _directive_lazy, brand.logo)))} data-v-0b2627da${_scopeId2}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        brand.category != null ? (openBlock(), createBlock(_component_router_link, {
                          key: 0,
                          to: `/${brand.category.url_path}`,
                          tabindex: brand.category == null ? "-1" : "0"
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode("img", {
                              alt: brand.title,
                              loading: "lazy"
                            }, null, 8, ["alt"]), [
                              [_directive_lazy, brand.logo]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "tabindex"])) : createCommentVNode("", true),
                        brand.category == null ? withDirectives((openBlock(), createBlock("img", {
                          key: 1,
                          style: { "filter": "grayscale(100%)" },
                          alt: brand.title,
                          loading: "lazy"
                        }, null, 8, ["alt"])), [
                          [_directive_lazy, brand.logo]
                        ]) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(sliceOfBrandSlider.value, (brand, index) => {
                  return openBlock(), createBlock(unref(Slide), {
                    class: "col-6 col-md-4 col-lg-2 d-flex justify-content-center align-items-center img-holder position-relative",
                    key: index,
                    "aria-hidden": brand.category == null ? "true" : "false",
                    height: "133px"
                  }, {
                    default: withCtx(() => [
                      brand.category != null ? (openBlock(), createBlock(_component_router_link, {
                        key: 0,
                        to: `/${brand.category.url_path}`,
                        tabindex: brand.category == null ? "-1" : "0"
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("img", {
                            alt: brand.title,
                            loading: "lazy"
                          }, null, 8, ["alt"]), [
                            [_directive_lazy, brand.logo]
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "tabindex"])) : createCommentVNode("", true),
                      brand.category == null ? withDirectives((openBlock(), createBlock("img", {
                        key: 1,
                        style: { "filter": "grayscale(100%)" },
                        alt: brand.title,
                        loading: "lazy"
                      }, null, 8, ["alt"])), [
                        [_directive_lazy, brand.logo]
                      ]) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["aria-hidden"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/OurBrands.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OurBrands = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0b2627da"]]);
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isClient = ref(false);
    const hrEnabled = ref(CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled);
    const discountHeaderDesktopImages = computed(
      () => store.getters["sliders/getSliderByIdentifier"]("discount_header")
    );
    const heroBannerImages = computed(() => store.getters["sliders/getSliderByIdentifier"]("home"));
    const homeGalleryImages = computed(
      () => store.getters["sliders/getSliderByIdentifier"]("home_gallery")
    );
    const discountHeaderMobileImages = computed(
      () => store.getters["sliders/getSliderByIdentifier"]("discount_header_mobile")
    );
    const cmsDefaultPageContent = computed(() => store.state.cmsPage.default);
    useHead({
      title: () => "Home",
      meta: [
        {
          name: "title",
          content: () => cmsDefaultPageContent.value ? cmsDefaultPageContent.value.meta_title : ""
        },
        {
          name: "keywords",
          content: () => cmsDefaultPageContent.value ? cmsDefaultPageContent.value.meta_keywords : ""
        },
        {
          name: "description",
          content: () => cmsDefaultPageContent.value ? cmsDefaultPageContent.value.meta_description : ""
        }
      ]
    });
    watchEffect(() => {
      var _a;
      if ((_a = discountHeaderDesktopImages.value) == null ? void 0 : _a.slides.length) {
        const discountHeaderDesktopPreloadLinks = discountHeaderDesktopImages.value.slides.map(
          (image) => {
            var _a2, _b;
            return {
              rel: "preload",
              as: "image",
              href: (_a2 = image == null ? void 0 : image.media) == null ? void 0 : _a2.url,
              type: ((_b = image == null ? void 0 : image.media) == null ? void 0 : _b.url.endsWith(".png")) ? "image/png" : "image/jpeg"
            };
          }
        );
        useHead({
          link: discountHeaderDesktopPreloadLinks
        });
      }
    });
    watchEffect(() => {
      var _a;
      if ((_a = heroBannerImages.value) == null ? void 0 : _a.slides.length) {
        const heroBannerPreloadLinks = heroBannerImages.value.slides.map((image) => {
          var _a2, _b;
          return {
            rel: "preload",
            as: "image",
            href: (_a2 = image == null ? void 0 : image.media) == null ? void 0 : _a2.url,
            type: ((_b = image == null ? void 0 : image.media) == null ? void 0 : _b.url.endsWith(".png")) ? "image/png" : "image/jpeg"
          };
        });
        useHead({
          link: heroBannerPreloadLinks
        });
      }
    });
    watchEffect(() => {
      var _a;
      if ((_a = discountHeaderMobileImages.value) == null ? void 0 : _a.slides.length) {
        const discountHeaderMobilePreloadLinks = discountHeaderMobileImages.value.slides.map(
          (image) => {
            var _a2, _b;
            return {
              rel: "preload",
              as: "image",
              href: (_a2 = image == null ? void 0 : image.media) == null ? void 0 : _a2.url,
              type: ((_b = image == null ? void 0 : image.media) == null ? void 0 : _b.url.endsWith(".png")) ? "image/png" : "image/jpeg"
            };
          }
        );
        useHead({
          link: discountHeaderMobilePreloadLinks
        });
      }
    });
    watchEffect(() => {
      var _a;
      if ((_a = homeGalleryImages.value) == null ? void 0 : _a.slides.length) {
        const homeGalleryPreloadLinks = homeGalleryImages.value.slides.map((image) => {
          var _a2, _b;
          return {
            rel: "preload",
            as: "image",
            href: (_a2 = image == null ? void 0 : image.media) == null ? void 0 : _a2.url,
            type: ((_b = image == null ? void 0 : image.media) == null ? void 0 : _b.url.endsWith(".png")) ? "image/png" : "image/jpeg"
          };
        });
        useHead({
          link: homeGalleryPreloadLinks
        });
      }
    });
    onMounted(async () => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isClient.value) {
        _push(ssrRenderComponent(_sfc_main$6, mergeProps({ wrapperClass: "home" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(HeroBanner, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SubscribeSeparator, null, null, _parent2, _scopeId));
              if (hrEnabled.value) {
                _push2(ssrRenderComponent(MostPurchased, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (hrEnabled.value) {
                _push2(ssrRenderComponent(Retargeted, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(OurBrands, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(HeroBanner),
                createVNode(_sfc_main$4),
                createVNode(SubscribeSeparator),
                hrEnabled.value ? (openBlock(), createBlock(MostPurchased, { key: 0 })) : createCommentVNode("", true),
                hrEnabled.value ? (openBlock(), createBlock(Retargeted, { key: 1 })) : createCommentVNode("", true),
                createVNode(_sfc_main$2),
                createVNode(OurBrands)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Home-CWbAAXSk.js.map
