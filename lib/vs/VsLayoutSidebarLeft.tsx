import { renderIcon } from "../index";
  export function VsLayoutSidebarLeft(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm12 13H7V2h7v12Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutSidebarLeft;