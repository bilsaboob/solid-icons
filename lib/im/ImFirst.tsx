import { renderIcon } from "../index";
  export function ImFirst(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M2 14V2h2v5.5l5-5v5l5-5v11l-5-5v5l-5-5V14z"/>'
      }, props)
  };
  export default ImFirst;