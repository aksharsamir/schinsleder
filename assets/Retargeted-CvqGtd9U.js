import { ref, computed, onMounted, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useStore } from "vuex";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import { P as ProductCard } from "./ProductCard-zGPQ-XdA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Retargeted",
  __ssrInlineRender: true,
  props: {
    page: {
      type: String,
      required: false,
      default: "home"
    }
  },
  setup(__props) {
    const store = useStore();
    const isClient = ref(false);
    const breakpoints = {
      // 768px and up
      768: {
        itemsToShow: 3
      }
    };
    let maxCount = 0;
    const retargetedProducts = computed(() => {
      return store.getters["home/getRetargetedProducts"];
    });
    const getOptionHeight = computed(() => {
      retargetedProducts.value.forEach((p) => {
        if (p.configurable_options) {
          p.configurable_options.find((co) => {
            if (co.values) {
              if (co.values.length > maxCount) {
                maxCount = co.values.length;
              }
            }
          });
        }
      });
      let returnValue = Math.floor(maxCount / 4, 0) + 1;
      return returnValue;
    });
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (retargetedProducts.value && retargetedProducts.value.length > 0) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "retargeted" }, _attrs))} data-v-41674652><div class="container" data-v-41674652><div class="row" data-v-41674652><div class="col-12" data-v-41674652><span class="section-heading font-weight-normal text-center d-block" data-v-41674652>Recent bekeken</span></div></div>`);
        if (isClient.value) {
          _push(ssrRenderComponent(unref(Carousel), {
            autoplay: 3e3,
            wrapAround: true,
            pauseAutoplayOnHover: true,
            itemsToShow: 1,
            breakpoints,
            snapAlign: "start"
          }, {
            addons: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Navigation), null, {
                  prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-left" data-v-41674652${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "lnr lnr-chevron-left" })
                      ];
                    }
                  }),
                  next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-chevron-right" data-v-41674652${_scopeId2}></i>`);
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
                ssrRenderList(retargetedProducts.value, (product) => {
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
                  (openBlock(true), createBlock(Fragment, null, renderList(retargetedProducts.value, (product) => {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/home/Retargeted.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Retargeted = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41674652"]]);
export {
  Retargeted as R
};
//# sourceMappingURL=Retargeted-CvqGtd9U.js.map
