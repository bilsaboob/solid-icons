import { renderIcon } from "../index";
  export function VsSymbolConstant(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M4 6h8v1H4V6zm8 3H4v1h8V9z" clip-rule="evenodd"/><path fill-rule="evenodd" d="m1 4 1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsSymbolConstant;