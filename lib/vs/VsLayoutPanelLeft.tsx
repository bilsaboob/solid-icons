import { renderIcon } from "../index";
  export function VsLayoutPanelLeft(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="m1 2 1-1h12l1 1v12l-1 1H2l-1-1V2Zm1 0v8h8V2H2Zm9 0v12h3V2h-3Z"/>'
      }, props)
  };
  export default VsLayoutPanelLeft;