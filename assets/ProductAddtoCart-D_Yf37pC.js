import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { C as CONFIG_JSON } from "../entry-server.js";
import { useGtm } from "@gtm-support/vue-gtm";
import { useModal, BButton } from "bootstrap-vue-next";
const _sfc_main = {
  __name: "ProductAddtoCart",
  __ssrInlineRender: true,
  props: {
    product: Object,
    productConfig: Object,
    addedQuantity: Function
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const { t } = useI18n();
    const gtm = useGtm();
    const { show } = useModal("ProductCardModal");
    const quantity = ref(1);
    const cartPrices = ref(null);
    const cartItems = ref(null);
    const isAddToCartBtnDisabled = ref(false);
    const product = computed(() => store.getters["product/getCurrentProduct"]);
    watch(
      () => product.value,
      (newProduct) => {
        if (newProduct) {
          quantity.value = 1;
        }
      }
    );
    const btnDisable = computed(() => {
      var _a;
      if (((_a = props.product) == null ? void 0 : _a.__typename) == "ConfigurableProduct") {
        const retval = store.getters["product/getCurrentChildSku"];
        if (retval != null) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
    const buttonClass = computed(() => {
      if (btnDisable.value == true) {
        return "cursor: not-allowed;";
      } else {
        return "";
      }
    });
    const quantityUp = () => {
      quantity.value++;
      props.addedQuantity(quantity.value);
    };
    const quantityDown = () => {
      if (quantity.value > 1) quantity.value--;
      props.addedQuantity(quantity.value);
    };
    const HrTrackCart = async () => {
      var _a, _b;
      cartPrices.value = await store.getters["cart/getCartPrices"];
      cartItems.value = await store.getters["cart/getCartItems"];
      const hritems = [];
      cartItems.value.forEach((element) => {
        hritems.push(element.product.sku);
      });
      self.ADDWISH_PARTNER_NS.api.cart.setCart(
        {
          total: (_b = (_a = cartPrices.value) == null ? void 0 : _a.grand_total) == null ? void 0 : _b.value,
          productNumbers: hritems
        },
        function() {
        }
      );
    };
    const addToCart = async () => {
      try {
        isAddToCartBtnDisabled.value = true;
        switch (props.product.__typename) {
          case "SimpleProduct": {
            const item = '{data: {sku: "' + props.product.sku + '", quantity:' + quantity.value + "}}  ";
            let retval = await store.dispatch("cart/addToCart", {
              type: props.product.__typename,
              item,
              store
            });
            if (retval == false) {
              const msg = {
                type: "danger",
                title: t("shopping_basket"),
                text: t("not_add_product")
              };
              store.dispatch("messages/sendMessage", { message: msg });
            } else {
              if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
                HrTrackCart();
              }
              if (gtm.enabled()) {
                window == null ? void 0 : window.dataLayer.push({
                  event: "eec.add",
                  ecommerce: {
                    add: {
                      products: [
                        {
                          name: props.product.name,
                          id: props.product.sku,
                          quantity: quantity.value
                        }
                      ]
                    }
                  }
                });
              }
              show();
            }
            break;
          }
          case "ConfigurableProduct": {
            const item = '{ parent_sku: "' + props.product.sku + '" data: {sku: "' + store.getters["product/getCurrentChildSku"] + '", quantity:' + quantity.value + "}}  ";
            let retval = await store.dispatch("cart/addToCart", {
              type: props.product.__typename,
              item,
              store
            });
            if (retval == false) {
              const msg = {
                type: "danger",
                title: t("add_to_cart"),
                text: t("not_add_product")
              };
              store.dispatch("messages/sendMessage", { message: msg });
            } else {
              if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
                HrTrackCart();
              }
              if (gtm.enabled()) {
                window == null ? void 0 : window.dataLayer.push({
                  event: "eec.add",
                  ecommerce: {
                    add: {
                      products: [
                        {
                          name: props.product.name,
                          id: props.product.sku,
                          quantity: quantity.value
                        }
                      ]
                    }
                  }
                });
              }
              show();
            }
            break;
          }
          default:
            break;
        }
      } catch (error) {
        console.log(error);
      } finally {
        isAddToCartBtnDisabled.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex quantity-and-btn" }, _attrs))}><div class="quantity-input d-flex"><input type="text" min="1"${ssrRenderAttr("value", quantity.value)} pattern="[0-9]+" name="quantity" disabled>`);
      _push(ssrRenderComponent(unref(BButton), {
        variant: "secondary",
        class: "step-down-btn text-white",
        onClick: quantityDown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(BButton), {
        variant: "secondary",
        class: "step-up-btn text-white",
        onClick: quantityUp
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(BButton), {
        variant: "secondary",
        onClick: addToCart,
        disabled: btnDisable.value || isAddToCartBtnDisabled.value,
        style: buttonClass.value,
        class: "text-white product-parameter-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("add_to_cart"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("add_to_cart")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/product/ProductAddtoCart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductAddtoCart-D_Yf37pC.js.map
