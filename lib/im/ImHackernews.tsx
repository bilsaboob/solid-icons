import { renderIcon } from "../index";
  export function ImHackernews(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 0v16h16V0H0zm8.5 9.125V12.5h-1V9.125L4.766 4H5.9L8 7.938 10.1 4h1.134L8.5 9.125z"/>'
      }, props)
  };
  export default ImHackernews;