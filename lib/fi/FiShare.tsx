import { renderIcon } from "../index";
  export function FiShare(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M16 6 12 2 8 6"/><path d="M12 2 12 15"/>'
      }, props)
  };
  export default FiShare;