import { renderIcon } from "../index";
  export function VsLayoutMenubar(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m1 2 1-1h12l1 1v12l-1 1H2l-1-1V2Zm1 0v12h12V2H2Zm1 1h2v1H3V3Zm3 0h2v1H6V3Zm5 0H9v1h2V3Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLayoutMenubar;