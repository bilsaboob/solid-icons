import { renderIcon } from "../index";
  export function FiExternalLink(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3 21 3 21 9"/><path d="M10 14 21 3"/>'
      }, props)
  };
  export default FiExternalLink;