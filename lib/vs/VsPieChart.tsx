import { renderIcon } from "../index";
  export function VsPieChart(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M10 6h3.9A5.006 5.006 0 0 0 10 2.1V6Zm0-4.917A6.005 6.005 0 0 1 15 7H9V1c.34 0 .675.028 1 .083ZM7 8l1 1h4.9A5.002 5.002 0 0 1 3 8a5.002 5.002 0 0 1 4-4.9V8Zm1 6a6.002 6.002 0 0 0 6-6H8V2a6.002 6.002 0 0 0 0 12Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsPieChart;