import { renderIcon } from "../index";
  export function VsExport(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m13.086 7-2.39-2.398.702-.704L15 7.5l-3.602 3.602-.703-.704 2.383-2.382V8H3V7h10.086zM1 4h1v7H1V4z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsExport;