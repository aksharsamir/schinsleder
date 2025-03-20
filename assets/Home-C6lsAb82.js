import { computed, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, onMounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./AppLayout-CdCGV8yT.js";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import { useStore } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BLink";
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
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
const _sfc_main$3 = {
  __name: "ProductCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const getbundlesSlideData = computed(() => {
      return store.getters["home/getBundleProducts"];
    });
    const breakcarousel = {
      // 300px and up
      300: {
        itemsToShow: 2,
        snapAlign: "start",
        itemsToScroll: 1
      },
      // 500px and up
      500: {
        itemsToShow: 3,
        snapAlign: "center"
      }
    };
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-carousel" }, _attrs))}><div><h2 class="text-uppercase fw-bold title ms-7">${ssrInterpolate(_ctx.$t("now_in_action"))}</h2></div>`);
      _push(ssrRenderComponent(unref(Carousel), {
        autoplay: 0,
        itemsToScroll: 1,
        breakpoints: breakcarousel
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Navigation), null, {
              prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_font_awesome_icon, {
                    icon: ["fas", "chevron-left"],
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chevron-left"],
                      size: "sm"
                    })
                  ];
                }
              }),
              next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_font_awesome_icon, {
                    icon: ["fas", "chevron-right"],
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chevron-right"],
                      size: "sm"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(unref(Navigation), null, {
                  prev: withCtx(() => [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chevron-left"],
                      size: "sm"
                    })
                  ]),
                  next: withCtx(() => [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chevron-right"],
                      size: "sm"
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(getbundlesSlideData.value, (product, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card border-0 mt-10" style="${ssrRenderStyle({ "width": "95%" })}"${_scopeId2}><div class="border product-img-wrapper mb-0 p-lg-40 p-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: `/` + product.url_key
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", product.image.medium)} class="product-img card-img-top"${ssrRenderAttr("alt", product.name)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: product.image.medium,
                              class: "product-img card-img-top",
                              alt: product.name
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="card-body"${_scopeId2}><p class="product-sku text-start mb-0"${_scopeId2}> ART. NR. : ${ssrInterpolate(product.sku)}</p>`);
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: `/` + product.url_key,
                      class: "no-underline"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="product-name text-start"${_scopeId3}>${ssrInterpolate(product.name)}</h2>`);
                        } else {
                          return [
                            createVNode("h2", { class: "product-name text-start" }, toDisplayString(product.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "card border-0 mt-10",
                        style: { "width": "95%" }
                      }, [
                        createVNode("div", { class: "border product-img-wrapper mb-0 p-lg-40 p-0" }, [
                          createVNode(_component_router_link, {
                            to: `/` + product.url_key
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: product.image.medium,
                                class: "product-img card-img-top",
                                alt: product.name
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        createVNode("div", { class: "card-body" }, [
                          createVNode("p", { class: "product-sku text-start mb-0" }, " ART. NR. : " + toDisplayString(product.sku), 1),
                          createVNode(_component_router_link, {
                            to: `/` + product.url_key,
                            class: "no-underline"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "product-name text-start" }, toDisplayString(product.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(getbundlesSlideData.value, (product, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "card border-0 mt-10",
                      style: { "width": "95%" }
                    }, [
                      createVNode("div", { class: "border product-img-wrapper mb-0 p-lg-40 p-0" }, [
                        createVNode(_component_router_link, {
                          to: `/` + product.url_key
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: product.image.medium,
                              class: "product-img card-img-top",
                              alt: product.name
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("p", { class: "product-sku text-start mb-0" }, " ART. NR. : " + toDisplayString(product.sku), 1),
                        createVNode(_component_router_link, {
                          to: `/` + product.url_key,
                          class: "no-underline"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", { class: "product-name text-start" }, toDisplayString(product.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/home/ProductCarousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid points-of-sale" }, _attrs))}><div class="row"><div class="col-lg-5 col-sm-0"><h2 class="text-uppercase text-light fw-bold title">${ssrInterpolate(_ctx.$t("points_of_sale"))}</h2><p class="text-light description">${ssrInterpolate(_ctx.$t("points_of_sale_description"))}</p><input type="text" class="rounded border-0 p-3 input-search" placeholder="Rötscherweg 2, 6373 XP Landgraaf"><div class="row location-wrapper"><div class="col-6 col-md-12 text-light mt-20 d-flex">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "location-dot"],
    class: "icon"
  }, null, _parent));
  _push(`<a href="" class="location">Heys Schoenmode <br>De dam 29 <br>9351 AL Leek</a></div><div class="col-6 col-md-12 text-light mt-20 d-flex">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "location-dot"],
    class: "icon"
  }, null, _parent));
  _push(`<a href="" class="location">ShoeFashion <br>Grotelaan 10<br>8371 WO Hoensbroek</a></div></div></div><div class="col-lg-7 col-sm-0 mt-lg-0 mt-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="100%" height="400" frameborder="0" style="${ssrRenderStyle({ "border": "0", "border-radius": "5px" })}" allowfullscreen></iframe></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/home/PointsOfSale.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PointsOfSale = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "/assets/schermafbeelding-Diu5tzJU.png";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid newsletter d-flex" }, _attrs))}><div class="col-lg-4 col-sm-0 image-wrapper text-center d-none d-lg-block"><img${ssrRenderAttr("src", _imports_0)} alt="newsletter image"></div><div class="col-lg-8 details-wrapper"><p class="title fw-bold mb-2">MELD U NU AAN VOOR ONZE NIEUWSBRIEF!</p><p class="description">U kunt op elk moment van gedachten veranderen door op de uitschrijflink te klikken in de footer van elke e-mail die u van ons ontvangt, of door contact met ons op te nemen via info@schinsleder.nl. Wij zullen uw gegevens met respect behandelen. Bezoek onze website voor meer informatie over onze privacypraktijken. Door hieronder te klikken, gaat u ermee akkoord dat wij uw gegevens mogen verwerken in overeenstemming met deze voorwaarden.</p><div class="gap-5 input-button-wrapper"><input type="email" class="email-input" placeholder="Email Address"><button class="btn btn-secondary to-register">${ssrInterpolate(_ctx.$t("to_register"))}</button></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/home/Newsletter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Newsletter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isClient.value) {
        _push(ssrRenderComponent(_sfc_main$4, mergeProps({ wrapperClass: "home" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(PointsOfSale, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Newsletter, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$3),
                createVNode(PointsOfSale),
                createVNode(Newsletter)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Home-C6lsAb82.js.map
