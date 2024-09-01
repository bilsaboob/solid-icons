import { renderIcon } from "../index";
  export function CgMaze(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M11.37 9.593 8.779 7 1 14.778l2.593 2.593 7.778-7.778ZM15.222 7 23 14.778l-2.576 2.576-5.202-5.202-5.202 5.202-2.576-2.576L15.222 7Z"/>'
      }, props)
  };
  export default CgMaze;