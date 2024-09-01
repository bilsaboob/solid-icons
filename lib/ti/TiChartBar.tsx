import { renderIcon } from "../index";
  export function TiChartBar(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M14 4a2 2 0 0 0-4 0v12h4V4zm5 4a2 2 0 0 0-4 0v8h4V8zM9 11a2 2 0 0 0-4 0v5h4v-5zm10 8H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"/>'
      }, props)
  };
  export default TiChartBar;