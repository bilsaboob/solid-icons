import { renderIcon } from "../index";
  export function SiVuetify(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M7.094 0 12 11.596 16.906 0H7.094zM1.5 3.5 12 24 22.5 3.5H17L12 15 7 3.5z"/>'
      }, props)
  };
  export default SiVuetify;