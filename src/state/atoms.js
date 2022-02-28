import { atom } from "recoil";

export const PattyIndex = atom({
    key: "pattyIndex",
    default: 0,
});

export const NavState = atom({
    key: "NavState",
    default: "premium",
});

export const AboutBurger = atom({
    key: "aboutBurger",
    default: {
        name: "",
        price: {
            burgerOnly: 0,
            largeSet: 0,
            smallSet: 0,
        },
    },
});

export const dropdownState = atom({
    key: "dropdownState",
    default: false,
});
