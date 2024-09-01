import { renderIcon } from "../index";
  export function VsCloseAll(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m8.621 8.086-.707-.707L6.5 8.793 5.086 7.379l-.707.707L5.793 9.5l-1.414 1.414.707.707L6.5 10.207l1.414 1.414.707-.707L7.207 9.5l1.414-1.414z" clip-rule="evenodd"/><path fill-rule="evenodd" d="m5 3 1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsCloseAll;