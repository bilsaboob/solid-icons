import { renderIcon } from "../index";
  export function FiShoppingBag(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6 21 6"/><path d="M16 10a4 4 0 0 1-8 0"/>'
      }, props)
  };
  export default FiShoppingBag;