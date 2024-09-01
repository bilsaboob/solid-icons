import { renderIcon } from "../index";
  export function FiCoffee(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1 6 4"/><path d="M10 1 10 4"/><path d="M14 1 14 4"/>'
      }, props)
  };
  export default FiCoffee;