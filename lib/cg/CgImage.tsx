import { renderIcon } from "../index";
  export function CgImage(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3Zm18 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.314l6.878-6.879a3 3 0 0 1 4.243 0L22 15.686V6a1 1 0 0 0-1-1Zm0 14H10.142l5.465-5.464a1 1 0 0 1 1.414 0l4.886 4.886A1 1 0 0 1 21 19Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgImage;