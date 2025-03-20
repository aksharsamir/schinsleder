import { BLink } from "bootstrap-vue-next/components/BLink";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./heart-DpQotoa5.js";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const _imports_1 = "/assets/productPageGalleryImg01-Df4MoCsT.jpg";
const galleryImage2 = "/assets/productPageGalleryImg02-B17kNawd.jpg";
const galleryImage3 = "data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQACP/uAA5BZG9iZQBkwAAAAAH/wAARCAA+AD4DABEAAREBAhEB/8QApgAAAgICAwEAAAAAAAAAAAAACQoABwgLAQQFBgEAAQUBAQEAAAAAAAAAAAAAAAIDBAUGAQcIEAAABgECBAMFBgUFAAAAAAABAgMEBQYHCBEACRIhEzFBFBUiUWEKMoGRofAWI3GxwRgZM0LREQACAQMCAwUHAQMNAAAAAAABAgMABBESIQUGMRMiQVFhB3GBkaGx8BQIMsEVFyQlM1Jic4KSstHh/9oADAMAAAERAhEAPwB/fy/zwUVwA7+ny9B/v9OCiuQHff6dv/fy4KKSh1K/a0LXjTVBkSg4X0tUbI2AsdXqXpCVrtN7slbvF9CrSasNPWGFVj4eUga1HSEiyce7UnLR6qduCSqxkzHMkSOFvDMSGi/TeA0sW9ctqAHu0n31olPKw4SkbRcQbjneLydrCsA3OlVh7FpGwManadMnICAAEsx8tzmHYk5mmm5tqOw/XLlUIxrcJrHVsqd3Zs0pauXqtsISRmotvIxrl3FT8WRpYGqrd6gcoLEV2OkioU6ZX9/EVQyIiadDhwVzsCCDv3TkdRjOxIwRv1Az569g328/IN/79u3HabqCcAAPr6fv04KKgn2APr6cFFf/0H9hANw+fp6fvbgood/Mx5kGJeWRp9TzdkuvzV8mbDZGtLxxjCryUPF2G72hyzdyS5AfzKxG8TXoWNYqLyL8EXQtSCmUqKqiqZDJYsCAqs2WA28PU+lTrKyW8WdmmhhEFu0uJCQZNLKvZxAA6pWL5CnA0q7Z7u6MGpXnbc0XmXWiyY6w9f2Ok7FnsDmRLj7D1geVuzvYAjhNgclrzELct3nHSpXxCuEYoIZgco/E3MHcXNDB1QjvNnHw600sDG0lvBgxQlNW+47QkLgeIyuCfAlfOhVueXznBJm7fS1wqbVq2buXz1RWelhKRBFM7l0ssZOC2NsQpjmMICIjuI7j5qkjeKMyOO4oJPw3puyJvruKwtgWnnlWNB/idgq+4ZO58t68nTDrK1jaLX6yulrUtlfEMc5khlJCtwEz74x5OvxKkkaTmcb2dpK02TdOkUEyqLqx/tJkylL1/CAApbeQgEjG2fUehpE2iOZ4ldZFV2AZc6WAJGpc4OG6jIBwdx5ORck/7QLlvU3nav6RdbqlKlb1ktkuOH8y02so0VrKXCOYPJZxj2615J0aGM+nohoZSJfR6LQh3qJ2qiJhXQMSHbJet2z3SqkYnZYwOpjUKA7ertqIAxhNOd81p+Z7Lljh8PCoeXbqS8vJeEQTX7nAjivZmkka1hGkErbQmCOVmJ1XAm09wLTfH4bd/l+vD1Zap5h6fiHb57+nz4KK/9F/j9/14KKRC+01ZWdZV1TP8WtmzKRqmmLAVfalM7kSIgyy1mmxNrjPe7mp1SoKy7THNdgT7nADFRcHIUepUpeLKyQBCzDr64/Pz4sythlUdc0vJoglmsXqGpTc4lKjZmFjrokDYoqHfRDl806t/m9jE9vXfy4kSRhXik6r2oH+4FfuRVhZAzWl/agnLWDuB5mBkn/4xvRZdUTpOpaf8sSyOxF/4Qdx6CmwAYqs2u2hgADDt8XS+N5cOX8Km3KY2ZkHzYZ+mareWLhoOMLdL1ggnkHoywSaT8HKkeopegSqOVEWjMoncuDpN2xUy9RjrODFRbkKAeorGAP68L7Nc5I3pgSaQNht9qJRAsj401UaEMn1ghobrvunSQjXXgi2csX1NyFU44FFjgmjs5XhVGh19uwmMcNx7iKbhB2fTYr+etMW0py2+4f77/8AdbWHfz+m3z9fw4oKtqgD5h23Dbgor//Sf3+X734KK1v/ADQzI5GynzI7HJ+I8cTmqfLNWSS6Cncv2+NE4fHlYYNROk4OZZMlWTTQKmXrKY2xBKIgIXsUQ/k8sc4I9Pf41XSSEXyL7qExXsd2zTjrfYYfu7Q8Xb8SZ8iMf2FkIHL7O8aybhm7TIKwAoZFds6KYhjB8SZwH145cMGte0XpqjI+DKavuArni6RHpJDcIfXXbypj45oovMAdKIaZbYiiIE9un6pHLeonRVmEHAl38wATNS7+ogHEy/j7sWM47UfQN/HFUPLbDN47dRw98f6pIVJ92lmoKeF4f35kZsCqZVGtXi7Tb3hVAMKfg1iBczLIqoF+IEzyIolHv5cIUZJHkD9Bmo850RZzuxA+ZxRL9ScQOOsf6eZJwuZw+wrkamxMi/MAeN1QJWZ3Z1fDAAIcH9WDqDYB6vrwpk1WiHxKj6io8TFb2VfDJ+h/9raJR0g2lY9jJszgqzkWTV+0UDf+Y2eIEcIKAAgA7HSUAeMxWhruAPcQ7b7BwUV//9N/Uw7CH4/4/QOCikI8tMYaD5hWcY+dbtV4SN5mcm/ko98zbvWbiNsGaqdaFk3TdyU6R0Vm02O4bfEAgPGphXVwjoCNB+1U9wdN6p9R96HpzlYtjVOeZns0cVJNB5nHBFiXBJIUihJTGK8WvXxhKO3Wqo9dnOc//c5hHis3PDST5fY1reW1zzFaAeMuPmCDX2nMBKdfTpNFIBt0bfUXBwEm26Skx7v6hHYPuquk/wAR4uuIagI/84fUNWX5aQML3zHDXPykhoZmjVtFr5ktBJYhPd69BeNnIqdOxW8hNQUU7KBR7nMq2UMUCh3N5cRiFDsG6FfvUO81GNdPXWPpvRFeZ3FCytWt2nNkTsUKXqWvT6HjziqcWsca+vjMwKKgifwlo2cIsn6AkcoF+EA3ch73D0PkookGniJI8c/UVsTtKFuTv+lrTXekjCdO5YCw/aSmEwHNvPY9r0mYDnDbrOU7kQEfUQ4yzjDkepq9XdQfSr+4TSq//9R/U3YS9t/z3+v6cFFIXcx1ovQuZnqYjG6RSKPdVGnu6MyuCiVE611p2CZFJYSF6fEQNJCcxthAx+kQ8+NVZH+pmY9AG/jVbcITdR48SPvQqOefkZrlvnAanpavwkvFL1S/VPFhW0M6IebmbZjimwlJQlo8yDRyJXchJxSaiKZCKLgHhlAQV+7y8tLa2hghsZ1uA1tE7tpIVZJFDvFjOW7Ins2bYF1ONsEy+E3b9ubi/imiRJpABG4WQqpZUkVyrBdeA+MHCHHU7YQ5true6AjM07L7nN7BdJePKrF3R8rLVN7IgCMg1SGWK8VjnrxBFMVCoh1O2qqQlVTSUTOUtOg452wN1+ke265Uy6x5EBgVJ+I8cGt5xP8AmkThMrcrvzPFx4xhVS5ThzWz5ZdayPBJHMqaQSuI3ywUMoBJHl6WphzD5kYt2pSG/iyvT0IkZQWqYAoZieXSMZZykp7Os0dxW3lvsfsID3CeSVfu+I/PlXmlymuA52wfzajH81pdKWy5fLWRI6ZdR2jXTdqOBUxAK3eTcri6IptuWaD91RY1xxW+O4Hz9oMYR+93cs5P6NJbn95Cfl1FJlQvJDP4MAD/ABp3blJTxrLyxtB8scxjHU0v4lZnEw7m6omrMYgwb+exRY7B8gDjPzf2re+rZNlA9KIh+XDdKr//1X9TdhL23/Pf6/pwUUhZznJ/3BzT9RiyiJll4RhpLyE0ZCcExetYKnV1wKzbq7CdN5VjJiP9d/uhtqeGgScKki8Tmok/dlRz0pcPmA222xGvrV5IXlvKwN7V1P5htjhtJpOoaWTJO5BnJ6uS7YVSpOUGbyGeNXLJwn8Cjc6aqRhL0jwzHIghUjfuj7U8y+eMVR1k1G3C+R7aGvGUr/cIVqJZSHibld7DY42IkgbFjlRaMZqTetWcgKIGS8dMoGOluHUJR24X2sTddiR+CmezwQR4GrU0wVy8ZXz3jOrYRoNvy9kF1aGww1JokSvLSsr4qaqahnB/CBjCRBCrdTx8+URZNEOpRZQpCiPCZTEF7RiNI3pp1dkMeBk7Ux1zptK2QtOOD+Wkvl1xGucnraY8yaesgmgXYyFfjJaDlm2S6vVmsp4KCcsNab3yQjyPRKQH3sh1ykKBhDivtJg104Xo6mlSRdjbKWI0oRv4Dfb88cU1ByRpEkrymdBTwiaiQDp+rLYxFU1EjeIwdybBYwEVKQwpqKthMQwB0nIIGKIlEBGBNtK3nmpaHKA0U3hql1//1n9TDsID224KKXP5qXJ4yTrf1ZVDNGHblizHwP8AEMFSsnr3N/d0peyO6jZLO6rjxGOrcFJMHzZpC2NRqcDumZzlIUo7gUpgxvMlhzrf3sKcu8U/Q8KEZ7VBkM7BgQQVXVjTlSA6+45yPtv9lz2rfso+zTlfis/t95Em5u5rkvM2EqpC8cEbQqul+3uo4wVlDSDNtNnVknuhSbK46WNN2Tzwj7LGnvBWS5yFhI+DZy95xRSLi+ZR8e3TQSjo+Qs0JKSLeMR2/lI+L0lDbtv342iSSIMKxB9Ca+J5SjysyA6CxIzjOM7ZxgZ9wAqvP9vPQOCwOP8ARNpM8cCm/nBp3xL4oAI7mAFP4SA3xCPCu2m/vt8zTeBV3Y3wnhnDbd20xDiPGOK2sgVMsg3xxQqrSEXwJf8AED0laio0rvw9u3idW3CWd2/eJPvNGAKw85kHLexRzLcWUjGWU7vkChJ47vQZBq83QVoEVffRoSSrq7eajbBDyrSTjlYuWWApSC3VIoIGBTbcpqPj3BY+O2JsnmngOch4m0sD7/LHhXrHsf8AazxH2Pc0HmWw4fw3iYeLs3gvYu1iZdQYbZABBAOSGHp0Iyv09YXgdOWC8SYEq8xOWCt4foFZx5BTNlUYqTsjFVaLbxTFxJDGMo6OK4Fu3KHSigkmQoAUpQAOJvDrJeG2ENgjvIsMaoGc5dtIxljtknxrIc7c03HPHN/EucLu3tbS54ney3LQ2yGOCJpXLlIkJYqik4AyauLibWXr/9k=";
const galleryImage4 = "data:image/jpeg;base64,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";
const wishListAdapter = {
  dropdownItems(wishListItems) {
    return wishListItems.map((el, i) => ({
      dropItemId: i + 1,
      dropItemImg: el.imgSrc,
      dropItemName: el.name,
      dropItemPrice: el.price,
      id: el.id
    }));
  },
  productItem(wishItem) {
    return {
      ...wishItem,
      galleryImages: [
        wishItem.imgSrc,
        _imports_1,
        galleryImage2,
        galleryImage3,
        galleryImage4
      ],
      parameters: {
        normalPrice: wishItem.price,
        currentPrice: "€97,99",
        discount: wishItem.sale,
        discountComment: wishItem.saleComment,
        availableColors: [
          { name: "Wit", selected: false },
          { name: "Rood", selected: true },
          { name: "Zwart", selected: false }
        ],
        selectorOptions: [
          { option: "S", price: "€97,99" },
          { option: "M", price: "€97,99" },
          { option: "L", price: "€97,99" },
          { option: "XL", price: "€97,99" }
        ],
        sizesOptions: wishItem.availableSizes ? wishItem.availableSizes.map((size) => ({
          name: size,
          selected: false
        })) : [
          { "name": "XS", "selected": false },
          { "name": "S", "selected": false },
          { "name": "M", "selected": false },
          { "name": "L", "selected": false },
          { "name": "XL", "selected": false },
          { "name": "3XL", "selected": false }
        ],
        multiParams: wishItem.multiParams
      }
    };
  }
};
const _sfc_main = {
  __name: "CreateAccountThanks",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const isInWishList = ref(true);
    const product = computed(() => {
      const selectedProduct = store.getters.getProduct(route.params.id);
      return wishListAdapter.productItem(selectedProduct || store.getters.getAllProducts[0]);
    });
    const { setProductStatus } = store.dispatch;
    function UpdateIsInWishList() {
      setProductStatus({ productId: product.value.id });
      isInWishList.value = !isInWishList.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "create-account-thanks" }, _attrs))}><h2>Bedankt voor uw bestelling!</h2><p>Uw bestelling komt uw kant op. Hieronder vind u een overzicht van uw bestelling.</p>`);
      _push(ssrRenderComponent(_component_BRow, { class: "content" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, {
              md: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="selected-image-holder"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BLink, {
                    href: "#",
                    onClick: UpdateIsInWishList
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<i class="lnr lnr-heart"${_scopeId3}></i>`);
                        if (isInWishList.value) {
                          _push4(`<div class="heart-icon"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="heart"${_scopeId3}></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("i", { class: "lnr lnr-heart" }),
                          isInWishList.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "heart-icon"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "heart"
                            })
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="selected-image"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="heart"${_scopeId2}></div></div><div class="text"${_scopeId2}><h4${_scopeId2}>Rogelli fietsjack winter Trani 3.0 Zwart/Rood</h4><dl class="d-list"${_scopeId2}><dt${_scopeId2}>Prijs per stuk:</dt><dd${_scopeId2}>€97,99</dd><dt${_scopeId2}>Aantal:</dt><dd${_scopeId2}>1</dd><dt${_scopeId2}>Kleur:</dt><dd${_scopeId2}>Rood</dd><dt${_scopeId2}>Maat:</dt><dd${_scopeId2}>L</dd></dl></div>`);
                } else {
                  return [
                    createVNode("div", { class: "selected-image-holder" }, [
                      createVNode(_component_BLink, {
                        href: "#",
                        onClick: withModifiers(UpdateIsInWishList, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "lnr lnr-heart" }),
                          isInWishList.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "heart-icon"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "heart"
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "selected-image" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "heart"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Rogelli fietsjack winter Trani 3.0 Zwart/Rood"),
                      createVNode("dl", { class: "d-list" }, [
                        createVNode("dt", null, "Prijs per stuk:"),
                        createVNode("dd", null, "€97,99"),
                        createVNode("dt", null, "Aantal:"),
                        createVNode("dd", null, "1"),
                        createVNode("dt", null, "Kleur:"),
                        createVNode("dd", null, "Rood"),
                        createVNode("dt", null, "Maat:"),
                        createVNode("dd", null, "L")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4${_scopeId2}>Bestelgegevens</h4><dl class="d-list list-custom"${_scopeId2}><dt${_scopeId2}>Bestelstatus:</dt><dd${_scopeId2}>Klaar voor verzending</dd><dt${_scopeId2}>Bestelnummer:</dt><dd${_scopeId2}>1121438509</dd><dt${_scopeId2}>Besteldatum:</dt><dd${_scopeId2}>23-08-20 10:12</dd></dl>`);
                  _push3(ssrRenderComponent(_component_BRow, { cols: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, { sm: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="label-address"${_scopeId4}>Factuuradres:</span><address${_scopeId4}><span${_scopeId4}>Jan Janssen</span><span${_scopeId4}>Grotestraat 10 </span><span${_scopeId4}>1234 AB, AMSTERDAM</span><span${_scopeId4}>NL</span></address>`);
                            } else {
                              return [
                                createVNode("span", { class: "label-address" }, "Factuuradres:"),
                                createVNode("address", null, [
                                  createVNode("span", null, "Jan Janssen"),
                                  createVNode("span", null, "Grotestraat 10 "),
                                  createVNode("span", null, "1234 AB, AMSTERDAM"),
                                  createVNode("span", null, "NL")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCol, { sm: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="label-address"${_scopeId4}>Leveradres:</span><address${_scopeId4}><span${_scopeId4}>Jan Janssen</span><span${_scopeId4}>Grotestraat 10 </span><span${_scopeId4}>1234 AB, AMSTERDAM</span><span${_scopeId4}>NL</span></address>`);
                            } else {
                              return [
                                createVNode("span", { class: "label-address" }, "Leveradres:"),
                                createVNode("address", null, [
                                  createVNode("span", null, "Jan Janssen"),
                                  createVNode("span", null, "Grotestraat 10 "),
                                  createVNode("span", null, "1234 AB, AMSTERDAM"),
                                  createVNode("span", null, "NL")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, { sm: "4" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label-address" }, "Factuuradres:"),
                              createVNode("address", null, [
                                createVNode("span", null, "Jan Janssen"),
                                createVNode("span", null, "Grotestraat 10 "),
                                createVNode("span", null, "1234 AB, AMSTERDAM"),
                                createVNode("span", null, "NL")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BCol, { sm: "4" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label-address" }, "Leveradres:"),
                              createVNode("address", null, [
                                createVNode("span", null, "Jan Janssen"),
                                createVNode("span", null, "Grotestraat 10 "),
                                createVNode("span", null, "1234 AB, AMSTERDAM"),
                                createVNode("span", null, "NL")
                              ])
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
                    createVNode("h4", null, "Bestelgegevens"),
                    createVNode("dl", { class: "d-list list-custom" }, [
                      createVNode("dt", null, "Bestelstatus:"),
                      createVNode("dd", null, "Klaar voor verzending"),
                      createVNode("dt", null, "Bestelnummer:"),
                      createVNode("dd", null, "1121438509"),
                      createVNode("dt", null, "Besteldatum:"),
                      createVNode("dd", null, "23-08-20 10:12")
                    ]),
                    createVNode(_component_BRow, { cols: "2" }, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, { sm: "4" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "label-address" }, "Factuuradres:"),
                            createVNode("address", null, [
                              createVNode("span", null, "Jan Janssen"),
                              createVNode("span", null, "Grotestraat 10 "),
                              createVNode("span", null, "1234 AB, AMSTERDAM"),
                              createVNode("span", null, "NL")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BCol, { sm: "4" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "label-address" }, "Leveradres:"),
                            createVNode("address", null, [
                              createVNode("span", null, "Jan Janssen"),
                              createVNode("span", null, "Grotestraat 10 "),
                              createVNode("span", null, "1234 AB, AMSTERDAM"),
                              createVNode("span", null, "NL")
                            ])
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
          } else {
            return [
              createVNode(_component_BCol, {
                md: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "selected-image-holder" }, [
                    createVNode(_component_BLink, {
                      href: "#",
                      onClick: withModifiers(UpdateIsInWishList, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "lnr lnr-heart" }),
                        isInWishList.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "heart-icon"
                        }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "heart"
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "selected-image" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "heart"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Rogelli fietsjack winter Trani 3.0 Zwart/Rood"),
                    createVNode("dl", { class: "d-list" }, [
                      createVNode("dt", null, "Prijs per stuk:"),
                      createVNode("dd", null, "€97,99"),
                      createVNode("dt", null, "Aantal:"),
                      createVNode("dd", null, "1"),
                      createVNode("dt", null, "Kleur:"),
                      createVNode("dd", null, "Rood"),
                      createVNode("dt", null, "Maat:"),
                      createVNode("dd", null, "L")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_BCol, { md: "6" }, {
                default: withCtx(() => [
                  createVNode("h4", null, "Bestelgegevens"),
                  createVNode("dl", { class: "d-list list-custom" }, [
                    createVNode("dt", null, "Bestelstatus:"),
                    createVNode("dd", null, "Klaar voor verzending"),
                    createVNode("dt", null, "Bestelnummer:"),
                    createVNode("dd", null, "1121438509"),
                    createVNode("dt", null, "Besteldatum:"),
                    createVNode("dd", null, "23-08-20 10:12")
                  ]),
                  createVNode(_component_BRow, { cols: "2" }, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, { sm: "4" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label-address" }, "Factuuradres:"),
                          createVNode("address", null, [
                            createVNode("span", null, "Jan Janssen"),
                            createVNode("span", null, "Grotestraat 10 "),
                            createVNode("span", null, "1234 AB, AMSTERDAM"),
                            createVNode("span", null, "NL")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { sm: "4" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label-address" }, "Leveradres:"),
                          createVNode("address", null, [
                            createVNode("span", null, "Jan Janssen"),
                            createVNode("span", null, "Grotestraat 10 "),
                            createVNode("span", null, "1234 AB, AMSTERDAM"),
                            createVNode("span", null, "NL")
                          ])
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/authentication/sign-up/CreateAccountThanks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CreateAccountThanks-CSYg3W-H.js.map
