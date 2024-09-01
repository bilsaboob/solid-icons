import { renderIcon } from "../index";
  export function ImSpinner(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2zm4.243 1.757a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001zM13 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-1.757 4.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7 14a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm-4.243-1.757a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm-.5-8.486a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0zM.875 8a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0z"/>'
      }, props)
  };
  export default ImSpinner;