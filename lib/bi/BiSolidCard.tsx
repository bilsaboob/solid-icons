import { renderIcon } from "../index";
  export function BiSolidCard(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M18 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12zM4 19h16v2H4z"/>'
      }, props)
  };
  export default BiSolidCard;