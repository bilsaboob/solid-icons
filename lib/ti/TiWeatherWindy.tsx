import { renderIcon } from "../index";
  export function TiWeatherWindy(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M19 5a1 1 0 1 0 0 2 1 1 0 0 1 0 2H8a1 1 0 1 0 0 2h6a1 1 0 0 1 0 2H7.6c-1.654 0-3 1.346-3 3s1.346 3 3 3a1 1 0 1 0 0-2 1 1 0 0 1 0-2H14c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1H19c1.654 0 3-1.346 3-3s-1.346-3-3-3z"/>'
      }, props)
  };
  export default TiWeatherWindy;