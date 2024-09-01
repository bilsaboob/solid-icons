import { renderIcon } from "../index";
  export function CgToday(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<rect width="10" height="10" x="7" y="9" fill="currentColor" opacity=".5" rx="1"/><path fill="currentColor" fill-rule="evenodd" d="M18 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6Z" clip-rule="evenodd"/><path fill="currentColor" d="M7 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"/>'
      }, props)
  };
  export default CgToday;