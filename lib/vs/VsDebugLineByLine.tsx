import { renderIcon } from "../index";
  export function VsDebugLineByLine(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M6 10V9h9v1H6zm4-4h5v1h-5V6zm5-3v1H6V3h9zm-9 9v1h9v-1H6z"/><path fill-rule="evenodd" d="m1 2.795.783-.419 5.371 3.581v.838l-5.371 3.581L1 9.957V2.795zm1.007.94v5.281l3.96-2.64-3.96-2.64z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsDebugLineByLine;