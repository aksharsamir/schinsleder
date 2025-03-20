import { computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
const _sfc_main = {
  __name: "SidebarLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const sidebarData = computed(() => store.getters["menu/getMenuItems"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><span class="sidebar-heading">Categorieen</span><ul class="sidebar-links"><!--[-->`);
      ssrRenderList(sidebarData.value, (sidebarLink) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: sidebarLink.linkTo
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(sidebarLink.itemName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(sidebarLink.itemName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SidebarLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SidebarLinks-DR6xjFcp.js.map
