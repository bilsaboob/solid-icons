import { renderIcon } from "../index";
  export function VsLayout(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M3 2 2 3v10l1 1h4l1-1V3L7 2H3Zm0 11V3h4v10H3ZM10 3l1-1h3l1 1v3l-1 1h-3l-1-1V3Zm1 0v3h3V3h-3ZM10 10l1-1h3l1 1v3l-1 1h-3l-1-1v-3Zm1 0v3h3v-3h-3Z"/>'
      }, props)
  };
  export default VsLayout;