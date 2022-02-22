import { atom } from "recoil";

export const PattyIndex = atom({
    key: "pattyIndex",
    default: 0,
});

export const NavState = atom({
    key: "NavState",
    default: "premium",
});
