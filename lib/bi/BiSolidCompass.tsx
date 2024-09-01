import { renderIcon } from "../index";
  export function BiSolidCompass(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3 13-8 2 2-8 8-2-2 8z"/><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10z"/>'
      }, props)
  };
  export default BiSolidCompass;