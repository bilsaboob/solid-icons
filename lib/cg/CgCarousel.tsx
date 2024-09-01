import { renderIcon } from "../index";
  export function CgCarousel(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm16 2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" clip-rule="evenodd"/><path fill="currentColor" d="M7 20a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM5 15a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"/>'
      }, props)
  };
  export default CgCarousel;