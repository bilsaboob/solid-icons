import { renderIcon } from "../index";
  export function ImDelicious(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 0v16h16V0H0zm8 15V8H1V1h7v7h7v7H8z"/>'
      }, props)
  };
  export default ImDelicious;