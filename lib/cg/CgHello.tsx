import { renderIcon } from "../index";
  export function CgHello(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M17.5 12a5.485 5.485 0 0 1-1.725 4A5.481 5.481 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.485 5.485 0 0 1 6.5 12h11Z"/><path fill="currentColor" fill-rule="evenodd" d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1V7Zm2.75 5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgHello;