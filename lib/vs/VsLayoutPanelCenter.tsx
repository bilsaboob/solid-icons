import { renderIcon } from "../index";
  export function VsLayoutPanelCenter(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 13V2h2v12H2Zm3-4V2h6v8H5Zm7-8h2v12h-2V2Z"/>'
      }, props)
  };
  export default VsLayoutPanelCenter;