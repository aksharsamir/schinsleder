import { computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const items = computed(() => {
      const items2 = [];
      const bcrumbs = store.getters["breadcrumbs/getBreadcrumbsRoutes"];
      items2.push({ text: "Home", to: "/" });
      bcrumbs.forEach((bcrumb) => {
        items2.push({ text: bcrumb.name, to: bcrumb.route_link });
      });
      const curr = store.getters["breadcrumbs/getBreadcrumbsCurrent"];
      items2.push({ text: curr, active: true });
      return items2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))}><div class="container"><ol class="breadcrumb pb-0 pt-0"><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<li class="${ssrRenderClass([{ active: index + 1 == items.value.length }, "breadcrumb-item"])}">`);
        if (!item.active) {
          _push(ssrRenderComponent(_component_router_link, {
            to: item.to
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span>${ssrInterpolate(item.text)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Breadcrumbs-BN1xAQs-.js.map
