import { renderIcon } from "../index";
  export function VsSymbolRuler(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M4 1 3 2v12l1 1h8l1-1V2l-1-1H4zm0 2V2h8v12H4v-1h2v-1H4v-2h4V9H4V7h2V6H4V4h4V3H4z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsSymbolRuler;