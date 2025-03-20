import { unref, createSlots, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import { P as ProductCard } from "./ProductCard-zGPQ-XdA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7107795c>`);
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
                    _push3(`<i class="lnr lnr-chevron-left" data-v-7107795c${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "lnr lnr-chevron-left" })
                    ];
                  }
                }),
                next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="lnr lnr-chevron-right" data-v-7107795c${_scopeId2}></i>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/MoreProductsCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MoreProductsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7107795c"]]);
export {
  MoreProductsCarousel as M
};
//# sourceMappingURL=MoreProductsCarousel-CQBsknMv.js.map
