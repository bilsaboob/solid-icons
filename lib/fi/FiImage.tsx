import { renderIcon } from "../index";
  export function FiImage(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M8.5 7A1.5 1.5 0 1 0 8.5 10 1.5 1.5 0 1 0 8.5 7z"/><path d="M21 15 16 10 5 21"/>'
      }, props)
  };
  export default FiImage;