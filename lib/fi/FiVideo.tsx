import { renderIcon } from "../index";
  export function FiVideo(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M23 7 16 12 23 17 23 7z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'
      }, props)
  };
  export default FiVideo;