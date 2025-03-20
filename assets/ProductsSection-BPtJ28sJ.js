import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { P as ProductCard } from "./ProductCard-zGPQ-XdA.js";
const _sfc_main = {
  __name: "ProductsSection",
  __ssrInlineRender: true,
  props: {
    productsList: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.productsList, (product) => {
        _push(`<div class="col-6 mb-md-30 col-md-4">`);
        _push(ssrRenderComponent(ProductCard, { product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductsSection-BPtJ28sJ.js.map
