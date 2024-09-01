import { renderIcon } from "../index";
  export function CgAttachment(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z"/>'
      }, props)
  };
  export default CgAttachment;