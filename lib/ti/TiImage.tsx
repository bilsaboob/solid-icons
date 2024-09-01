import { renderIcon } from "../index";
  export function TiImage(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M8.5 6A2.5 2.5 0 1 0 8.5 11 2.5 2.5 0 1 0 8.5 6z"/><path d="M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4H19s-1-6-3-6zm4-7H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 14H4V5h16v12z"/>'
      }, props)
  };
  export default TiImage;