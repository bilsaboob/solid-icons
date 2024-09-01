import { renderIcon } from "../index";
  export function ImPieChart(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M7 9V2a7 7 0 1 0 6.262 3.869L7 9zm7.262-5.131A6.999 6.999 0 0 0 8 0v7l6.262-3.131z"/>'
      }, props)
  };
  export default ImPieChart;