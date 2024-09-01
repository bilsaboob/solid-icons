import { renderIcon } from "../index";
  export function TiAnchor(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M18 13.5a1 1 0 0 0-1 1 5.007 5.007 0 0 1-4 4.898V12h4a1 1 0 1 0 0-2h-4V8.816A2.99 2.99 0 0 0 15 6a3 3 0 1 0-6 0 2.99 2.99 0 0 0 2 2.816V10H7a1 1 0 1 0 0 2h4v7.398A5.008 5.008 0 0 1 7 14.5a1 1 0 1 0-2 0c0 3.859 3.141 7 7 7s7-3.141 7-7a1 1 0 0 0-1-1zM12 5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"/>'
      }, props)
  };
  export default TiAnchor;