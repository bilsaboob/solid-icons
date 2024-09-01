import { renderIcon } from "../index";
  export function FiLoader(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2 12 6"/><path d="M12 18 12 22"/><path d="M4.93 4.93 7.76 7.76"/><path d="M16.24 16.24 19.07 19.07"/><path d="M2 12 6 12"/><path d="M18 12 22 12"/><path d="M4.93 19.07 7.76 16.24"/><path d="M16.24 7.76 19.07 4.93"/>'
      }, props)
  };
  export default FiLoader;