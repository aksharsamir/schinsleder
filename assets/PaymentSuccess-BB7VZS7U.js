import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, onMounted, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./SidebarLinks-DR6xjFcp.js";
import { _ as _sfc_main$3 } from "./BlockSimple-BHbXwFf2.js";
import { y as getOrderInfoFromHash } from "./cart-DtI-j6cN.js";
import { C as CONFIG_JSON } from "../entry-server.js";
import { useGtm } from "@gtm-support/vue-gtm";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BLink";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "vue-cookies";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
const _sfc_main = {
  __name: "PaymentSuccess",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    useRouter();
    const route = useRoute();
    const { t } = useI18n();
    const gtm = useGtm();
    useHead({
      title: () => t("payment_success"),
      meta: [
        { name: "title", content: () => t("payment_success") },
        { name: "keywords", content: () => t("payment_success") },
        { name: "description", content: () => t("payment_success") }
      ]
    });
    const orderId = ref(null);
    const transactionId = computed(() => {
      return route.query.transactionid !== void 0 ? route.query.transactionid : null;
    });
    onMounted(async () => {
      var _a;
      const bcrumb = { current: "success", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      const hashId = localStorage.getItem("orderHash");
      if (hashId) {
        const order = await getOrderInfoFromHash(hashId, store);
        if (order) {
          orderId.value = order.number;
          if (gtm.enabled()) {
            const items = [];
            const prods = [];
            order.items.forEach((element) => {
              items.push({
                id: element.product_sku,
                name: element.product_name,
                price: element.product_sale_price,
                quantity: element.quantity_ordered
              });
              prods.push({
                item_id: element.product_sku,
                item_name: element.product_name,
                price: element.product_sale_price,
                quantity: element.quantity_ordered
              });
            });
            if (!gtm.uaDisabled) {
              window.dataLayer.push({
                event: "purchase",
                ecommerce: {
                  currencyCode: "EUR",
                  purchase: {
                    actionField: {
                      id: order.number,
                      affiliation: CONFIG_JSON.app_name,
                      revenue: order.total.subtotal.value,
                      tax: order.total.total_tax.value,
                      shipping: order.total.total_shipping.value
                    },
                    products: items
                  }
                }
              });
            }
            if (gtm.ga4Enabled) {
              window.dataLayer.push({
                event: "purchase",
                ecommerce: {
                  add: {
                    transaction_id: order.number,
                    affiliation: CONFIG_JSON.app_name,
                    value: order.total.subtotal.value,
                    tax: order.total.total_tax.value,
                    shipping: order.total.total_shipping.value,
                    items: prods
                  }
                }
              });
            }
            if ((_a = CONFIG_JSON.helloRetail) == null ? void 0 : _a.enabled) {
              const hritems = order.items.map((item) => item.product_sku);
              window.ADDWISH_PARTNER_NS.api.conversion.track_sale(
                {
                  total: order.total.subtotal.value,
                  orderNumber: order.number,
                  productNumbers: hritems
                },
                () => {
                }
              );
            }
          }
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "paymentInfo" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="static pt-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCol, { lg: "9" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1${_scopeId4}>${ssrInterpolate(_ctx.$t("payment_success"))}</h1>`);
                              if (transactionId.value != null) {
                                _push5(`<div${_scopeId4}>${ssrInterpolate(_ctx.$t("transaction"))}: ${ssrInterpolate("#" + transactionId.value)}</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(_sfc_main$3), { identifier: "checkout_succes" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h1", null, toDisplayString(_ctx.$t("payment_success")), 1),
                                transactionId.value != null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("transaction")) + ": " + toDisplayString("#" + transactionId.value), 1)) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$3), { identifier: "checkout_succes" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, {
                            lg: "3",
                            class: "d-none d-lg-block"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BCol, { lg: "9" }, {
                            default: withCtx(() => [
                              createVNode("h1", null, toDisplayString(_ctx.$t("payment_success")), 1),
                              transactionId.value != null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("transaction")) + ": " + toDisplayString("#" + transactionId.value), 1)) : createCommentVNode("", true),
                              createVNode(unref(_sfc_main$3), { identifier: "checkout_succes" })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BCol, { lg: "9" }, {
                          default: withCtx(() => [
                            createVNode("h1", null, toDisplayString(_ctx.$t("payment_success")), 1),
                            transactionId.value != null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("transaction")) + ": " + toDisplayString("#" + transactionId.value), 1)) : createCommentVNode("", true),
                            createVNode(unref(_sfc_main$3), { identifier: "checkout_succes" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "static pt-7" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          lg: "3",
                          class: "d-none d-lg-block"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BCol, { lg: "9" }, {
                          default: withCtx(() => [
                            createVNode("h1", null, toDisplayString(_ctx.$t("payment_success")), 1),
                            transactionId.value != null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("transaction")) + ": " + toDisplayString("#" + transactionId.value), 1)) : createCommentVNode("", true),
                            createVNode(unref(_sfc_main$3), { identifier: "checkout_succes" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/PaymentSuccess.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PaymentSuccess-BB7VZS7U.js.map
