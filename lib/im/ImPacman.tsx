import { renderIcon } from "../index";
  export function ImPacman(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M15.074 2.794a8 8 0 1 0 0 10.412L10 8l5.074-5.206zM11 1.884a1.116 1.116 0 1 1 0 2.232 1.116 1.116 0 0 1 0-2.232z"/>'
      }, props)
  };
  export default ImPacman;