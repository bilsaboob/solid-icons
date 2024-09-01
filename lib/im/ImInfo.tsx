import { renderIcon } from "../index";
  export function ImInfo(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M7 4.75c0-.412.338-.75.75-.75h.5c.412 0 .75.338.75.75v.5c0 .412-.338.75-.75.75h-.5A.753.753 0 0 1 7 5.25v-.5zM10 12H6v-1h1V8H6V7h3v4h1z"/><path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>'
      }, props)
  };
  export default ImInfo;