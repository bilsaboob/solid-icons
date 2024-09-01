import { renderIcon } from "../index";
  export function BiRegularCross(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M11 2h2v7h-2zm0 13h2v7h-2zm4-4h7v2h-7zM2 11h7v2H2z"/>'
      }, props)
  };
  export default BiRegularCross;