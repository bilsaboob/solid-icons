import { renderIcon } from "../index";
  export function TiBusinessCard(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M20 20H4c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zM4 6c-.551 0-1 .449-1 1v10c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V7c0-.551-.449-1-1-1H4zm6 9H6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zm0-4H6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"/><path d="M16 8.5A2 2 0 1 0 16 12.5 2 2 0 1 0 16 8.5z"/><path d="M16 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z"/>'
      }, props)
  };
  export default TiBusinessCard;