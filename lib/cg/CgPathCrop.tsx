import { renderIcon } from "../index";
  export function CgPathCrop(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path stroke-width="2" d="M6 6H14V14H6z" opacity=".5"/><path fill="currentColor" fill-rule="evenodd" d="M9 9h10v10H9V9Zm6 2h2v6h-6v-2h4v-4Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPathCrop;