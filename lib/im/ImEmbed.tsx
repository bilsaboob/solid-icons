import { renderIcon } from "../index";
  export function ImEmbed(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m9 11.5 1.5 1.5 5-5-5-5L9 4.5 12.5 8zM7 4.5 5.5 3l-5 5 5 5L7 11.5 3.5 8z"/>'
      }, props)
  };
  export default ImEmbed;