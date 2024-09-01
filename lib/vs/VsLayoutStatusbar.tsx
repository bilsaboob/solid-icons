import { renderIcon } from "../index";
  export function VsLayoutStatusbar(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 12V2h12v11H2Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutStatusbar;