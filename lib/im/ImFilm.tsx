import { renderIcon } from "../index";
  export function ImFilm(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 2v12h16V2H0zm3 11H1v-2h2v2zm0-4H1V7h2v2zm0-4H1V3h2v2zm9 8H4V3h8v10zm3 0h-2v-2h2v2zm0-4h-2V7h2v2zm0-4h-2V3h2v2zM6 5v6l4-3z"/>'
      }, props)
  };
  export default ImFilm;