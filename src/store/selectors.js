import { selector } from "recoil";
import atoms from "./atoms";


export default {
  itemNameSelector: selector({
    key: 'todo/itemname',
    get: (param) => {
      const item = param.get(atoms.itemAtom);
      return item?.name;
    }
  })
}