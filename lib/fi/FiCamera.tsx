import { renderIcon } from "../index";
  export function FiCamera(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><path d="M12 9A4 4 0 1 0 12 17 4 4 0 1 0 12 9z"/>'
      }, props)
  };
  export default FiCamera;