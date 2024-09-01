import { renderIcon } from "../index";
  export function VsGitCommit(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M7.5 0h1v4.03a4 4 0 0 1 0 7.94V16h-1v-4.03a4 4 0 0 1 0-7.94V0ZM8 10.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"/>'
      }, props)
  };
  export default VsGitCommit;