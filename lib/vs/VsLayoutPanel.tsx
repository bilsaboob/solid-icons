import { renderIcon } from "../index";
  export function VsLayoutPanel(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 9V2h12v8H2Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutPanel;