import { renderIcon } from "../index";
  export function FiShoppingCart(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M9 20A1 1 0 1 0 9 22 1 1 0 1 0 9 20z"/><path d="M20 20A1 1 0 1 0 20 22 1 1 0 1 0 20 20z"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
      }, props)
  };
  export default FiShoppingCart;