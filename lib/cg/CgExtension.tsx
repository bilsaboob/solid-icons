import { renderIcon } from "../index";
  export function CgExtension(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M13 3h8v8h-8V3Zm2 2h4v4h-4V5Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M17 21v-8h-6V7H3v14h14ZM9 9H5v4h4V9ZM5 19v-4h4v4H5Zm6 0v-4h4v4h-4Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgExtension;