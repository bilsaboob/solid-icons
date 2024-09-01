import { renderIcon } from "../index";
  export function CgStyle(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M13 21v-8h8v8h-8Zm2-6h4v4h-4v-4ZM3 11V3h8v8H3Zm2-6h4v4H5V5Z" clip-rule="evenodd"/><path fill="currentColor" d="M18 6v6h-2V8h-4V6h6ZM12 18H6v-6h2v4h4v2Z"/>'
      }, props)
  };
  export default CgStyle;