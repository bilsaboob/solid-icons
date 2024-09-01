import { renderIcon } from "../index";
  export function CgLink(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="m14.828 12 1.415 1.414 2.828-2.828a4 4 0 0 0-5.657-5.657l-2.828 2.828L12 9.172l2.828-2.829a2 2 0 1 1 2.829 2.829L14.828 12ZM12 14.829l1.414 1.414-2.828 2.828a4 4 0 0 1-5.657-5.657l2.828-2.828L9.172 12l-2.829 2.829a2 2 0 1 0 2.829 2.828L12 14.828Z"/><path fill="currentColor" d="M14.829 10.586a1 1 0 0 0-1.415-1.415l-4.242 4.243a1 1 0 1 0 1.414 1.414l4.242-4.242Z"/>'
      }, props)
  };
  export default CgLink;