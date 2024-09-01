import { renderIcon } from "../index";
  export function BiRegularChart(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z"/><path d="m13.553 11.658-4-2-2.448 4.895 1.79.894 1.552-3.105 4 2 2.448-4.895-1.79-.894z"/>'
      }, props)
  };
  export default BiRegularChart;