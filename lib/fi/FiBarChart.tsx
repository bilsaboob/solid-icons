import { renderIcon } from "../index";
  export function FiBarChart(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 20 12 10"/><path d="M18 20 18 4"/><path d="M6 20 6 16"/>'
      }, props)
  };
  export default FiBarChart;