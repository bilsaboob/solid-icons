import { renderIcon } from "../index";
  export function CgLayoutGrid(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M11 7H7v4h4V7ZM11 13H7v4h4v-4ZM13 13h4v4h-4v-4ZM17 7h-4v4h4V7Z"/>'
      }, props)
  };
  export default CgLayoutGrid;