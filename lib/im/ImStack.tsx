import { renderIcon } from "../index";
  export function ImStack(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M16 5 8 1 0 5l8 4 8-4zM8 2.328 13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z"/>'
      }, props)
  };
  export default ImStack;