import { BLink } from "bootstrap-vue-next/components/BLink";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { resolveDirective, mergeProps, unref, withCtx, createVNode, withDirectives, createCommentVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { a as _sfc_main$1 } from "./AdvertisingBanner-BW7fLnPX.js";
const _sfc_main = {
  __name: "CategoryOverview",
  __ssrInlineRender: true,
  props: {
    category: Object,
    categories: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_link = BLink;
      const _directive_lazy = resolveDirective("lazy");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      if (__props.category.children_count > 0) {
        _push(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.categories, (category, i) => {
                _push2(ssrRenderComponent(_component_b_col, {
                  key: `${category} ${i}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_b_link, {
                        class: "category-link",
                        to: `/` + category.url_path
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="category-box"${_scopeId3}><div class="img"${_scopeId3}>`);
                            if (category.image != null) {
                              _push4(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                                alt: `${category.name} Image`,
                                width: "100%",
                                height: "100%"
                              }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: category.image })))}${_scopeId3}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><div class="text"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(category.name)}</p></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "category-box" }, [
                                createVNode("div", { class: "img" }, [
                                  category.image != null ? withDirectives((openBlock(), createBlock("img", {
                                    key: 0,
                                    alt: `${category.name} Image`,
                                    width: "100%",
                                    height: "100%"
                                  }, null, 8, ["alt"])), [
                                    [_directive_lazy, { src: category.image }]
                                  ]) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "text" }, [
                                  createVNode("p", null, toDisplayString(category.name), 1)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_b_link, {
                          class: "category-link",
                          to: `/` + category.url_path
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "category-box" }, [
                              createVNode("div", { class: "img" }, [
                                category.image != null ? withDirectives((openBlock(), createBlock("img", {
                                  key: 0,
                                  alt: `${category.name} Image`,
                                  width: "100%",
                                  height: "100%"
                                }, null, 8, ["alt"])), [
                                  [_directive_lazy, { src: category.image }]
                                ]) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "text" }, [
                                createVNode("p", null, toDisplayString(category.name), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, i) => {
                  return openBlock(), createBlock(_component_b_col, {
                    key: `${category} ${i}`
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_link, {
                        class: "category-link",
                        to: `/` + category.url_path
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "category-box" }, [
                            createVNode("div", { class: "img" }, [
                              category.image != null ? withDirectives((openBlock(), createBlock("img", {
                                key: 0,
                                alt: `${category.name} Image`,
                                width: "100%",
                                height: "100%"
                              }, null, 8, ["alt"])), [
                                [_directive_lazy, { src: category.image }]
                              ]) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "text" }, [
                              createVNode("p", null, toDisplayString(category.name), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
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
      if (__props.category.children_count == 0 && __props.category.brand == null) {
        _push(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ "width": "100%", "text-align": "center" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("no_products_found"))}</div>`);
            } else {
              return [
                createVNode("div", { style: { "width": "100%", "text-align": "center" } }, toDisplayString(_ctx.$t("no_products_found")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/CategoryOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CategoryOverview-BAz7TrE4.js.map
