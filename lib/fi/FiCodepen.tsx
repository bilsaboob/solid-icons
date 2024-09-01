import { renderIcon } from "../index";
  export function FiCodepen(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2z"/><path d="M12 22 12 15.5"/><path d="M22 8.5 12 15.5 2 8.5"/><path d="M2 15.5 12 8.5 22 15.5"/><path d="M12 2 12 8.5"/>'
      }, props)
  };
  export default FiCodepen;