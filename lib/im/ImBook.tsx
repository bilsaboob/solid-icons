import { renderIcon } from "../index";
  export function ImBook(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M14 2v13H3.5a1.5 1.5 0 1 1 0-3H13V0H3C1.9 0 1 .9 1 2v12c0 1.1.9 2 2 2h12V2h-1z"/><path fill="currentColor" d="M3.501 13H3.5a.5.5 0 0 0 0 1H12.999v-1H3.501z"/>'
      }, props)
  };
  export default ImBook;