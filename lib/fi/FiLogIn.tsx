import { renderIcon } from "../index";
  export function FiLogIn(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17 15 12 10 7"/><path d="M15 12 3 12"/>'
      }, props)
  };
  export default FiLogIn;