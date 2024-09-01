import { renderIcon } from "../index";
  export function CgMouse(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z"/><path fill="currentColor" fill-rule="evenodd" d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0V8Zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgMouse;