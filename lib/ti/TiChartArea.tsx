import { renderIcon } from "../index";
  export function TiChartArea(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M20 6a2 2 0 0 0-3.562-1.25l-2.789 3.486L11.2 6.4a2 2 0 0 0-2.762.351l-4 5A1.998 1.998 0 0 0 4 13v3h16V6zm0 13H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"/>'
      }, props)
  };
  export default TiChartArea;