import { renderIcon } from "../index";
  export function FiMusic(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M9 18V5l12-2v13"/><path d="M6 15A3 3 0 1 0 6 21 3 3 0 1 0 6 15z"/><path d="M18 13A3 3 0 1 0 18 19 3 3 0 1 0 18 13z"/>'
      }, props)
  };
  export default FiMusic;