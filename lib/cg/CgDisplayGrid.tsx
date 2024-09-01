import { renderIcon } from "../index";
  export function CgDisplayGrid(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M7 7v4h4V7H7ZM13 7h4v4h-4V7ZM13 13v4h4v-4h-4ZM7 13h4v4H7v-4Z"/><path fill="currentColor" fill-rule="evenodd" d="M3 3h18v18H3V3Zm2 2v14h14V5H5Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgDisplayGrid;