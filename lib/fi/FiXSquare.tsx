import { renderIcon } from "../index";
  export function FiXSquare(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 9 15 15"/><path d="M15 9 9 15"/>'
      }, props)
  };
  export default FiXSquare;