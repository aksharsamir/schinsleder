import { ref, computed, onMounted, resolveComponent, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$1 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-DwhHUqbs.js";
import { y as getOrderInfoFromHash } from "./cart-DtI-j6cN.js";
import { C as CONFIG_JSON } from "../entry-server.js";
import { useGtm } from "@gtm-support/vue-gtm";
import "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BNav";
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
import "@vue/shared";
import "lodash-unified";
const _sfc_main = {
  __name: "PaymentSuccess",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    useRouter();
    const route = useRoute();
    const { t } = useI18n();
    const gtm = useGtm();
    const isClient = ref(false);
    useHead({
      title: () => t("payment_success"),
      meta: [
        { name: "title", content: () => t("payment_success") },
        { name: "keywords", content: () => t("payment_success") },
        { name: "description", content: () => t("payment_success") }
      ]
    });
    const orderId = ref(null);
    let order = ref(null);
    const transactionId = computed(() => {
      return route.query.transactionid !== void 0 ? route.query.transactionid : null;
    });
    onMounted(async () => {
      var _a;
      const bcrumb = { current: "success", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      const hashId = localStorage.getItem("orderHash");
      if (hashId) {
        order.value = await getOrderInfoFromHash(hashId, store);
        if (order.value) {
          orderId.value = order.number;
          if (gtm.enabled()) {
            const items = [];
            const prods = [];
            order.value.items.forEach((element) => {
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
                      id: order.value.number,
                      affiliation: CONFIG_JSON.app_name,
                      revenue: order.value.total.subtotal.value,
                      tax: order.value.total.total_tax.value,
                      shipping: order.value.total.total_shipping.value
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
                    transaction_id: order.value.number,
                    affiliation: CONFIG_JSON.app_name,
                    value: order.value.total.subtotal.value,
                    tax: order.value.total.total_tax.value,
                    shipping: order.value.total.total_shipping.value,
                    items: prods
                  }
                }
              });
            }
            if ((_a = CONFIG_JSON.helloRetail) == null ? void 0 : _a.enabled) {
              const hritems = order.value.items.map((item) => item.product_sku);
              window.ADDWISH_PARTNER_NS.api.conversion.track_sale(
                {
                  total: order.value.total.subtotal.value,
                  orderNumber: order.value.number,
                  productNumbers: hritems
                },
                () => {
                }
              );
            }
          }
        }
      }
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (isClient.value) {
        _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "paymentInfo" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
              _push2(`<section class="static cart pt-0 p-15"${_scopeId}><h1${_scopeId}>${ssrInterpolate(_ctx.$t("payment_success"))}</h1>`);
              if (transactionId.value != null) {
                _push2(`<span class="success-text"${_scopeId}>${ssrInterpolate(_ctx.$t("transaction", {
                  transactionId: transactionId.value
                }))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-15 btn-wrapper"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: { name: "home" },
                class: "me-15 py-3 btn btn-md btn-outline-secondary rounded-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("continue_shopping"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_router_link, {
                to: { name: "account" },
                class: "py-3 btn btn-md btn-outline-secondary rounded-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("my_account"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("my_account")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode(unref(_sfc_main$2)),
                createVNode("section", { class: "static cart pt-0 p-15" }, [
                  createVNode("h1", null, toDisplayString(_ctx.$t("payment_success")), 1),
                  transactionId.value != null ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "success-text"
                  }, toDisplayString(_ctx.$t("transaction", {
                    transactionId: transactionId.value
                  })), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "mt-15 btn-wrapper" }, [
                    createVNode(_component_router_link, {
                      to: { name: "home" },
                      class: "me-15 py-3 btn btn-md btn-outline-secondary rounded-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_router_link, {
                      to: { name: "account" },
                      class: "py-3 btn btn-md btn-outline-secondary rounded-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("my_account")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/PaymentSuccess.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PaymentSuccess-CvXHBDpt.js.map
