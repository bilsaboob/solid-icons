import { renderIcon } from "../index";
  export function ImTwitch(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M1.5 0 0 2.5V14h4v2h2l2-2h2.5L15 9.5V0H1.5zM13 8.5 10.5 11H8l-2 2v-2H3V2h10v6.5z"/><path fill="currentColor" d="M9.5 4H11v4H9.5V4zM6.5 4H8v4H6.5V4z"/>'
      }, props)
  };
  export default ImTwitch;