import { renderIcon } from "../index";
  export function CgNametag(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M4 14v6h6v-2H6v-4H4Z"/><path fill="currentColor" fill-rule="evenodd" d="M9 9v6h6V9H9Zm4 2h-2v2h2v-2Z" clip-rule="evenodd"/><path fill="currentColor" d="M4 10V4h6v2H6v4H4ZM20 10V4h-6v2h4v4h2ZM20 14v6h-6v-2h4v-4h2Z"/>'
      }, props)
  };
  export default CgNametag;