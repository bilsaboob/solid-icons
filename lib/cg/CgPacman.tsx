import { renderIcon } from "../index";
  export function CgPacman(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M14.064 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path fill="currentColor" fill-rule="evenodd" d="M13 3c2.152 0 4.128.756 5.677 2.016l1.447 1.447-1.295 1.295h-.001L14.585 12l3.639 3.638-.002.002 1.905 1.904-1.413 1.413-.002-.002A9 9 0 1 1 13 3Zm-1.243 9 5.532 5.532a7 7 0 1 1 0-11.065L11.757 12Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPacman;