import { renderIcon } from "../index";
  export function ImBlog(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M6 0v1.5a8.46 8.46 0 0 1 6.01 2.489 8.472 8.472 0 0 1 2.489 6.01h1.5c0-5.523-4.477-10-10-10z"/><path fill="currentColor" d="M6 3v1.5c1.469 0 2.85.572 3.889 1.611S11.5 8.531 11.5 10H13a7 7 0 0 0-7-7zM7.5 6l-1 1L3 8l-3 6.5.396.396 3.638-3.638a1 1 0 1 1 .707.707l-3.638 3.638.396.396 6.5-3 1-3.5 1-1-2.5-2.5z"/>'
      }, props)
  };
  export default ImBlog;