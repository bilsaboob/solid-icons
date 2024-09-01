import { renderIcon } from "../index";
  export function FiDivideSquare(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M8 12 16 12"/><path d="M12 16 12 16"/><path d="M12 8 12 8"/>'
      }, props)
  };
  export default FiDivideSquare;