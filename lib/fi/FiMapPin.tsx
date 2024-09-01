import { renderIcon } from "../index";
  export function FiMapPin(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><path d="M12 7A3 3 0 1 0 12 13 3 3 0 1 0 12 7z"/>'
      }, props)
  };
  export default FiMapPin;