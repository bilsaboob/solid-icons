import { renderIcon } from "../index";
  export function VsIssues(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M7.5 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z"/><path d="M7.5 6.5A1 1 0 1 0 7.5 8.5 1 1 0 1 0 7.5 6.5z"/>'
      }, props)
  };
  export default VsIssues;