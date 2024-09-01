import { renderIcon } from "../index";
  export function CgFormatStrike(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M13 7h4V5H7v2h4v3h2V7ZM11 19v-5h2v5h-2ZM5 13h14v-2H5v2Z"/>'
      }, props)
  };
  export default CgFormatStrike;