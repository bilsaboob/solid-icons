import { renderIcon } from "../index";
  export function CgFlag(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M4 21h2V11h6v2h8V5h-7V3H4v18Zm8-16H6v4h7v2h5V7h-6V5Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgFlag;