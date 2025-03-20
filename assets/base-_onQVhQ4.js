import { warn, defineComponent, computed, createElementBlock, openBlock, mergeProps, unref, renderSlot } from "vue";
import { d as isNumber, f as isStringNumber, j as debugWarn, u as useNamespace, k as isUndefined } from "../entry-server.js";
import { isObject, hasOwn, isString, NOOP } from "@vue/shared";
import { CircleClose, CircleCheck, Loading } from "@element-plus/icons-vue";
import { fromPairs } from "lodash-unified";
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const SCOPE = "utils/dom/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__ = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose
};
export {
  CHANGE_EVENT as C,
  ElIcon as E,
  UPDATE_MODEL_EVENT as U,
  ValidateComponentsMap as V,
  _export_sfc as _,
  withNoopInstall as a,
  buildProps as b,
  buildProp as c,
  definePropType as d,
  addUnit as e,
  iconPropType as i,
  withInstall as w
};
//# sourceMappingURL=base-_onQVhQ4.js.map
