import { renderIcon } from "../index";
  export function FiSave(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21 17 13 7 13 7 21"/><path d="M7 3 7 8 15 8"/>'
      }, props)
  };
  export default FiSave;