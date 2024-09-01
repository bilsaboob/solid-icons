import { renderIcon } from "../index";
  export function FiTerminal(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M4 17 10 11 4 5"/><path d="M12 19 20 19"/>'
      }, props)
  };
  export default FiTerminal;