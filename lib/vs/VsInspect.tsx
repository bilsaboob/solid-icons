import { renderIcon } from "../index";
  export function VsInspect(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m1 3 1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsInspect;