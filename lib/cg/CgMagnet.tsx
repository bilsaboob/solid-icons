import { renderIcon } from "../index";
  export function CgMagnet(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-opacity=".5" d="M8 2.5H4v3h4v-3ZM20 2.5h-4v3h4v-3Z"/><path fill="currentColor" d="M8 7.5H4v6a8 8 0 1 0 16 0v-6h-4v6a4 4 0 0 1-8 0v-6Z"/>'
      }, props)
  };
  export default CgMagnet;