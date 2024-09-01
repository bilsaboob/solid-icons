import { renderIcon } from "../index";
  export function CgSize(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M12 6V4h8v16h-8v-2H8v-2H4V8h4V6h4Zm2 0h4v12h-4V6Zm-2 2h-2v8h2V8Zm-4 2v4H6v-4h2Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgSize;