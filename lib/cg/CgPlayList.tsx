import { renderIcon } from "../index";
  export function CgPlayList(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M16 5H4v2h12V5ZM16 9H4v2h12V9ZM4 13h8v2H4v-2ZM20 16l-6-3v6l6-3Z"/>'
      }, props)
  };
  export default CgPlayList;