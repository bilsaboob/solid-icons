import { renderIcon } from "../index";
  export function ImCtrl(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M11.5 7a.5.5 0 0 1-.377-.171l-3.124-3.57-3.124 3.57a.5.5 0 1 1-.753-.659l3.5-4a.502.502 0 0 1 .752 0l3.5 4a.5.5 0 0 1-.376.83z"/>'
      }, props)
  };
  export default ImCtrl;