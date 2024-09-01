import { renderIcon } from "../index";
  export function CgSketch(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M5.209 3h13.694l1.209 7.253-8.056 10.933L4 10.253 5.209 3Zm1.694 2-.791 4.747 5.944 8.067L18 9.747 17.209 5H6.903Z" clip-rule="evenodd"/><path fill="currentColor" d="M8.056 8h8v2h-8V8Z"/>'
      }, props)
  };
  export default CgSketch;