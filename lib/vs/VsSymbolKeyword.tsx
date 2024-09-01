import { renderIcon } from "../index";
  export function VsSymbolKeyword(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z"/>'
      }, props)
  };
  export default VsSymbolKeyword;