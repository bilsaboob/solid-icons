import { renderIcon } from "../index";
  export function VsLayoutPanelOff(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 9V2h12v8H2Zm0 1h12v3H2v-3Z"/>'
      }, props)
  };
  export default VsLayoutPanelOff;