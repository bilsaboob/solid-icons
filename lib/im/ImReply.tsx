import { renderIcon } from "../index";
  export function ImReply(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M7 12.119V16l-6-6 6-6v3.966c6.98.164 6.681-4.747 4.904-7.966C16.29 4.741 15.359 12.337 7 12.119z"/>'
      }, props)
  };
  export default ImReply;