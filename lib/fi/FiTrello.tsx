import { renderIcon } from "../index";
  export function FiTrello(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7H10V16H7z"/><path d="M14 7H17V12H14z"/>'
      }, props)
  };
  export default FiTrello;