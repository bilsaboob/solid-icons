import { renderIcon } from "../index";
  export function CgPill(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M12.657 2.757a6 6 0 1 1 8.485 8.486l-9.9 9.9a6 6 0 1 1-8.485-8.486l9.9-9.9Zm7.07 7.071-4.242 4.243-5.657-5.657 4.243-4.242a4 4 0 1 1 5.657 5.656Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPill;