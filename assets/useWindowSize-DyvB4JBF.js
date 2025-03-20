import { ref, onMounted, onUnmounted } from "vue";
import { i as isServer } from "../entry-server.js";
function useWindowSize() {
  const windowSize = ref({
    width: isServer ? 0 : window == null ? void 0 : window.innerWidth,
    height: isServer ? 0 : window == null ? void 0 : window.innerHeight
  });
  const updateWindowSize = () => {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
  onMounted(() => {
    window.addEventListener("resize", updateWindowSize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateWindowSize);
  });
  return windowSize;
}
export {
  useWindowSize as u
};
//# sourceMappingURL=useWindowSize-DyvB4JBF.js.map
