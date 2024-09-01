import { renderIcon } from "../index";
  export function VsLayoutActivitybarLeft(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm12 13H4V2h10v12Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutActivitybarLeft;