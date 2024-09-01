import { renderIcon } from "../index";
  export function ImRtl(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M4 0a4 4 0 0 0 0 8v8h2V2h2v14h2V2h2V0H4zm12 3-4 4 4 4z"/>'
      }, props)
  };
  export default ImRtl;