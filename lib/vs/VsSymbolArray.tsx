import { renderIcon } from "../index";
  export function VsSymbolArray(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m1.5 2-.5.5v11l.5.5H4v-1H2V3h2V2H1.5zm13 12 .5-.5v-11l-.5-.5H12v1h2v10h-2v1h2.5z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsSymbolArray;