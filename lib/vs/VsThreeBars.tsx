import { renderIcon } from "../index";
  export function VsThreeBars(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsThreeBars;