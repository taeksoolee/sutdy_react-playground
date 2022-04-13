import { atom } from "recoil";

export default {
  itemAtom: atom({
    key: 'todo/item',
    default: null,
  })
}