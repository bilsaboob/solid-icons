import { renderIcon } from "../index";
  export function SiMonster(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M0 0v24h5.42V12.39l6.58 5.8 6.58-5.8V24H24V0L12 11.23 0 0Z"/>'
      }, props)
  };
  export default SiMonster;