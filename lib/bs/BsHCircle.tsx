import { renderIcon } from "../index";
  export function BsHCircle(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"/>'
      }, props)
  };
  export default BsHCircle;