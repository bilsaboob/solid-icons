import { renderIcon } from "../index";
  export function SiElementor(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7h2Zm8 0h-6v-2h6Zm0-4h-6v-2h6Zm0-4h-6V7h6Z"/>'
      }, props)
  };
  export default SiElementor;