import { renderIcon } from "../index";
  export function TiHeart(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M12 10.375a4.375 4.375 0 0 0-8.75 0c0 1.127.159 2.784 1.75 4.375L12 20s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375a4.375 4.375 0 0 0-8.75 0"/>'
      }, props)
  };
  export default TiHeart;