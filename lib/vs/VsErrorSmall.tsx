import { renderIcon } from "../index";
  export function VsErrorSmall(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M9.177 10.105 8 8.928l-1.177 1.177-.928-.928L7.072 8 5.895 6.823l.928-.928L8 7.072l1.177-1.177.928.928L8.928 8l1.177 1.177-.928.928Z"/><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>'
      }, props)
  };
  export default VsErrorSmall;