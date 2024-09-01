import { renderIcon } from "../index";
  export function ImPriceTag(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M15.25 0h-6c-.412 0-.989.239-1.28.53L.531 7.969a.752.752 0 0 0 0 1.061l6.439 6.439a.752.752 0 0 0 1.061 0L15.47 8.03c.292-.292.53-.868.53-1.28v-6a.753.753 0 0 0-.75-.75zM11.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6z"/>'
      }, props)
  };
  export default ImPriceTag;