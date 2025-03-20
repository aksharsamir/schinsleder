import { BLink } from "bootstrap-vue-next/components/BLink";
import { computed, mergeProps, useSSRContext, ref, onMounted, nextTick, resolveComponent, withCtx, createBlock, openBlock, unref, createVNode, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./default-placeholder-image-BaAVikZT.js";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { C as CONFIG_JSON } from "../entry-server.js";
import { _ as _sfc_main$2 } from "./ProductAddtoCart-D_Yf37pC.js";
const _sfc_main$1 = {
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    stars: {
      type: Number
    },
    noOfRatings: {
      type: Number
    }
  },
  setup(__props) {
    const props = __props;
    const rateStars = computed(() => new Array(5).fill(false).map((_, i) => i < props.stars / 10 / 2));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ratings d-none d-md-flex align-items-center" }, _attrs))}><ul class="ratings-star"><!--[-->`);
      ssrRenderList(rateStars.value, (isFill, idx) => {
        _push(`<li class="${ssrRenderClass(isFill ? "text-yellow" : "text-gray")}"><i class="lnr lnr-star"></i></li>`);
      });
      _push(`<!--]--></ul><span class="no-of-ratings">(${ssrInterpolate(__props.noOfRatings)})</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/Rating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      require: true
    },
    optionHeight: {
      type: Number,
      require: true
    }
  },
  setup(__props) {
    const props = __props;
    function formatCurrency(amount) {
      const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
      });
      return formatter.format(amount);
    }
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const { t } = useI18n();
    const mediumImage = ref(props.product.image.medium);
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    const getBottomMargin = computed(() => {
      if ((props.product.sale == 1 || props.product.new == 1) && (props.product.price_range.minimum_price.discount.percent_off > 0 || props.product.price_range.maximum_price.discount.percent_off > 0)) {
        return "m20";
      } else {
        return "";
      }
    });
    const productConfig = computed(() => {
      return { variants: props.product.variants };
    });
    const getProductPriceRange = computed(() => {
      if (props.product.__typename == "SimpleProduct") {
        return {
          text: '<span class="currentPrice">' + formatCurrency(props.product.price_range.maximum_price.final_price.value) + "</span>",
          discountType: 1
        };
      } else if (props.product.__typename == "BundleProduct") {
        let lowestPrice = props.product.price_range.minimum_price.final_price.value;
        let highestPrice = props.product.price_range.maximum_price.final_price.value;
        if (lowestPrice == highestPrice) {
          if (lowestPrice === props.product.price_range.maximum_price.regular_price.value) {
            return {
              text: '<span class="currentPrice">' + formatCurrency(props.product.price_range.maximum_price.final_price.value) + "</span>",
              discountType: 1
            };
          } else {
            return {
              text: '<span class="strike">' + formatCurrency(props.product.price_range.maximum_price.regular_price.value) + '</span> <span class="currentPrice">' + formatCurrency(lowestPrice) + "</span>",
              discountType: 1
            };
          }
        } else {
          return {
            text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + " - " + formatCurrency(highestPrice) + "</span>",
            discountType: 2
          };
        }
      } else {
        if (productConfig.value) {
          let lowestPrice = props.product.price_range.maximum_price.regular_price.value;
          let highestPrice = props.product.price_range.minimum_price.final_price.value;
          if (productConfig.value.variants) {
            productConfig.value.variants.forEach((v) => {
              if (v.product.price_range.minimum_price.final_price.value < lowestPrice) {
                lowestPrice = v.product.price_range.minimum_price.final_price.value;
              }
              if (v.product.price_range.maximum_price.final_price.value > highestPrice) {
                highestPrice = v.product.price_range.maximum_price.final_price.value;
              }
            });
          }
          if (lowestPrice == highestPrice && lowestPrice !== props.product.price_range.maximum_price.regular_price.value) {
            return {
              text: '<span class="strike">' + formatCurrency(props.product.price_range.maximum_price.regular_price.value) + '</span> <span class="currentPrice">' + formatCurrency(lowestPrice) + "</span>",
              discountType: 1
            };
          } else if (lowestPrice !== highestPrice) {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + " / " + formatCurrency(highestPrice) + "</span>",
              discountType: 2
            };
          } else {
            return {
              text: '<span class="currentPrice">' + formatCurrency(lowestPrice) + "</span>",
              discountType: 1
            };
          }
        } else {
          return 1;
        }
      }
    });
    function toggleWishItem() {
      if (store.getters["user/getIsLoggedIn"] == true) {
        if (store.getters["user/isProductInWishlist"](props.product.sku) == true) {
          store.dispatch("user/setProductWishlistStatus", {
            sku: props.product.sku,
            parentSku: null,
            store
          });
        } else {
          if (props.product.__typename == "SimpleProduct") {
            store.dispatch("user/setProductWishlistStatus", {
              sku: props.product.sku,
              parentSku: null,
              store
            });
          } else {
            const msg = {
              type: "danger",
              title: t("wishlist error"),
              text: t("wishlist_select_options")
            };
            store.dispatch("messages/sendMessage", { message: msg });
            router.push("/" + props.product.url_key);
          }
        }
      } else {
        const msg = {
          type: "danger",
          title: t("wishlist error"),
          text: t("wishlist_logged_in")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    }
    function setDefaultPlaceholder() {
      mediumImage.value = null;
    }
    function trackClick() {
      if (typeof window !== "undefined") {
        if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
          const aw_source = JSON.parse(localStorage.getItem("aw_source")) ?? [];
          const found = aw_source.find(({ sku }) => sku == props.product.sku);
          const hrq = window.hrq || [];
          hrq.push(["trackClick", found == null ? void 0 : found.aw_source]);
        }
      }
      return true;
    }
    onMounted(() => {
      nextTick(() => {
        var _a, _b;
        const maxHeight = Math.max(
          ...((_a = Array.from(document.querySelectorAll(`.available-sizes-list`))) == null ? void 0 : _a.map(
            (ele) => Number(ele.offsetHeight)
          )) || []
        );
        (_b = document.querySelectorAll(`.available-sizes-list`)) == null ? void 0 : _b.forEach((ele) => {
          ele.style.minHeight = maxHeight + "px";
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card--holder" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "add-to-wishlist",
        onClick: toggleWishItem
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$store.getters["user/isProductInWishlist"](__props.product.sku)) {
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "heart d-none d-sm-block text-secondary",
                icon: ["fas", "heart"]
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "heart d-none d-sm-block",
                icon: ["fat", "heart"]
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              _ctx.$store.getters["user/isProductInWishlist"](__props.product.sku) ? (openBlock(), createBlock(_component_font_awesome_icon, {
                key: 0,
                class: "heart d-none d-sm-block text-secondary",
                icon: ["fas", "heart"]
              })) : (openBlock(), createBlock(_component_font_awesome_icon, {
                key: 1,
                class: "heart d-none d-sm-block",
                icon: ["fat", "heart"]
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: `/${__props.product.url_key}`,
        class: "product-card",
        onClick: trackClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (__props.product.image && mediumImage.value) {
              _push2(`<img class="${ssrRenderClass([unref(route).name === "home" ? "width-unset" : "", "product-card--img-top"])}"${ssrRenderAttr("src", mediumImage.value)}${ssrRenderAttr("alt", __props.product.name)} width="240" height="220"${_scopeId}>`);
            } else {
              _push2(`<img class="product-card--img-top" width="240" height="220"${ssrRenderAttr("alt", __props.product.name ? __props.product.name : "Product Card Image")}${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
            }
            _push2(`<div class="actionbuttons"${_scopeId}>`);
            if (__props.product.sale) {
              _push2(`<span class="sale-txt"${_scopeId}>Sale</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.product.new) {
              _push2(`<span class="new-txt"${_scopeId}>Nieuw</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="product-name lh-1"${_scopeId}>${ssrInterpolate(__props.product.name)}</div><div class="product-info"${_scopeId}><div class="product-info-item"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "circle-info"],
              class: "font-aws-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="product-info-text"${_scopeId}>${ssrInterpolate(_ctx.$t("Product_information"))}</span></div><div class="product-info-sec"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "circle-info"],
              class: "font-aws-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="product-info-text"${_scopeId}>${ssrInterpolate(_ctx.$t("Product_Specification"))}</span></div></div><div class="bottombox"${_scopeId}>`);
            if (__props.product.review_count > 0) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                stars: __props.product.rating_summary,
                noOfRatings: __props.product.review_count
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (isLoggedIn.value) {
              _push2(`<span class="d-block product-card-price"${_scopeId}>${getProductPriceRange.value.text ?? ""}</span>`);
            } else {
              _push2(`<span class="login-see-price"${_scopeId}>${ssrInterpolate(_ctx.$t("login_see_price"))}</span>`);
            }
            if (__props.product.price_range.minimum_price.discount.percent_off > 0) {
              _push2(`<span class="d-block product-card--sale-comment"${_scopeId}>${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(__props.product.price_range.minimum_price.discount.percent_off.toFixed(0))}% </span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.product.price_range.minimum_price.discount.percent_off == 0) {
              _push2(`<span class="d-block product-card--sale-comment" style="${ssrRenderStyle({ "visibility": "hidden" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(__props.product.price_range.minimum_price.discount.percent_off.toFixed(0))}% </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(getBottomMargin.value)}"${_scopeId}></div></div>`);
            if (isLoggedIn.value) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                product: __props.product,
                addedQuantity: (qty) => _ctx.quantity = qty
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, [
                __props.product.image && mediumImage.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: ["product-card--img-top", unref(route).name === "home" ? "width-unset" : ""],
                  src: mediumImage.value,
                  alt: __props.product.name,
                  width: "240",
                  height: "220",
                  onError: setDefaultPlaceholder
                }, null, 42, ["src", "alt"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  class: "product-card--img-top",
                  width: "240",
                  height: "220",
                  alt: __props.product.name ? __props.product.name : "Product Card Image",
                  src: _imports_0
                }, null, 8, ["alt"])),
                createVNode("div", { class: "actionbuttons" }, [
                  __props.product.sale ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "sale-txt"
                  }, "Sale")) : createCommentVNode("", true),
                  __props.product.new ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "new-txt"
                  }, "Nieuw")) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "product-name lh-1" }, toDisplayString(__props.product.name), 1),
              createVNode("div", { class: "product-info" }, [
                createVNode("div", { class: "product-info-item" }, [
                  createVNode(_component_font_awesome_icon, {
                    icon: ["fas", "circle-info"],
                    class: "font-aws-icon"
                  }),
                  createVNode("span", { class: "product-info-text" }, toDisplayString(_ctx.$t("Product_information")), 1)
                ]),
                createVNode("div", { class: "product-info-sec" }, [
                  createVNode(_component_font_awesome_icon, {
                    icon: ["fas", "circle-info"],
                    class: "font-aws-icon"
                  }),
                  createVNode("span", { class: "product-info-text" }, toDisplayString(_ctx.$t("Product_Specification")), 1)
                ])
              ]),
              createVNode("div", { class: "bottombox" }, [
                __props.product.review_count > 0 ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  stars: __props.product.rating_summary,
                  noOfRatings: __props.product.review_count
                }, null, 8, ["stars", "noOfRatings"])) : createCommentVNode("", true),
                isLoggedIn.value ? (openBlock(), createBlock("span", {
                  key: 1,
                  innerHTML: getProductPriceRange.value.text,
                  class: "d-block product-card-price"
                }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", {
                  key: 2,
                  class: "login-see-price"
                }, toDisplayString(_ctx.$t("login_see_price")), 1)),
                __props.product.price_range.minimum_price.discount.percent_off > 0 ? (openBlock(), createBlock("span", {
                  key: 3,
                  class: "d-block product-card--sale-comment"
                }, toDisplayString(_ctx.$t("discount")) + " " + toDisplayString(__props.product.price_range.minimum_price.discount.percent_off.toFixed(0)) + "% ", 1)) : createCommentVNode("", true),
                __props.product.price_range.minimum_price.discount.percent_off == 0 ? (openBlock(), createBlock("span", {
                  key: 4,
                  class: "d-block product-card--sale-comment",
                  style: { "visibility": "hidden" }
                }, toDisplayString(_ctx.$t("discount")) + " " + toDisplayString(__props.product.price_range.minimum_price.discount.percent_off.toFixed(0)) + "% ", 1)) : createCommentVNode("", true),
                createVNode("div", { class: getBottomMargin.value }, null, 2)
              ]),
              isLoggedIn.value ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                product: __props.product,
                addedQuantity: (qty) => _ctx.quantity = qty
              }, null, 8, ["product", "addedQuantity"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductCard-Bq44aF8S.js.map
