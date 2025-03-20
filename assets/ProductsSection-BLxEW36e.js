import { BRow } from "bootstrap-vue-next/components/BContainer";
import { mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ProductCard-Bq44aF8S.js";
const _sfc_main = {
  __name: "ProductsSection",
  __ssrInlineRender: true,
  props: {
    productsList: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      _push(ssrRenderComponent(_component_BRow, mergeProps({
        "no-gutters": "",
        class: "product-main"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.productsList, (product) => {
              _push2(`<div class="col-md-3 col-sm-6 product-wrapper col-12 px-md-3 py-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, { product }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.productsList, (product) => {
                return openBlock(), createBlock("div", {
                  class: "col-md-3 col-sm-6 product-wrapper col-12 px-md-3 py-5",
                  key: product.id
                }, [
                  createVNode(_sfc_main$1, { product }, null, 8, ["product"])
                ]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/ProductsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductsSection-BLxEW36e.js.map
