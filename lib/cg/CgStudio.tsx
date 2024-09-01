import { renderIcon } from "../index";
  export function CgStudio(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M17 13h-4v4h4v-4Z"/><path fill="currentColor" fill-rule="evenodd" d="M3 3h18v18H3V3Zm2 2h14v14H5V5Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgStudio;