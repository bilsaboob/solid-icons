import { renderIcon } from "../index";
  export function RiEditorLink(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="m18.364 15.535-1.414-1.414 1.414-1.414a5 5 0 0 0-7.07-7.071L9.878 7.05 8.465 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9l-1.415 1.413Zm-2.828 2.829-1.414 1.414a7 7 0 1 1-9.9-9.9l1.414-1.414 1.415 1.414-1.415 1.415a5 5 0 0 0 7.071 7.07l1.415-1.413 1.414 1.414Zm-.707-10.607 1.414 1.414-7.071 7.072-1.414-1.415 7.07-7.07Z"/>'
      }, props)
  };
  export default RiEditorLink;