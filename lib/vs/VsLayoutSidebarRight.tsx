import { renderIcon } from "../index";
  export function VsLayoutSidebarRight(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 13V2h7v12H2Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutSidebarRight;