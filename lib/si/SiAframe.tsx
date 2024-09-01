import { renderIcon } from "../index";
  export function SiAframe(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13-5-14.96-5.03 14.98h10.03Z"/>'
      }, props)
  };
  export default SiAframe;