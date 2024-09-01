import { renderIcon } from "../index";
  export function VsLayoutCentered(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M2 1 1 2v12l1 1h12l1-1V2l-1-1H2Zm0 13V2h4v12H2Zm8 0V2h4v12h-4Z"/>'
      }, props)
  };
  export default VsLayoutCentered;