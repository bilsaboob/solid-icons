import { renderIcon } from "../index";
  export function CgBlock(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M8.465 14.121a1 1 0 1 0 1.414 1.415l5.657-5.657a1 1 0 1 0-1.415-1.415l-5.656 5.657Z"/><path fill="currentColor" fill-rule="evenodd" d="M6.343 17.657A8 8 0 1 0 17.657 6.343 8 8 0 0 0 6.343 17.657Zm9.9-1.414a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgBlock;