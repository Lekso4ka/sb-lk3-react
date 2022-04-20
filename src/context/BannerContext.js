import { createContext } from "react";

export const BannerCtx = createContext();
export const BannerValue = {
    b1: {
        bg: "#FF8F27",
        name: "Подарок за первый заказ!",
        text: "Легкое говяжье - пластины"
    },
    b2: {
        bg: "#D8A217",
        name: "Наборы для дрессировки",
        text: "от 840 ₽"
    },
    b3: {
        bg: "#24B5BE",
        name: "Микс масел",
        text: "пищевая здоровая натуральная добавка"
    },
    b4: {
        bg: "#9CCD55",
        name: "Рога северного оленя",
        text: "от 10 до 30 кг."
    },
    b5: {
        bg: "#DB6825",
        name: "Слипы из шеи индейки",
        text: "100 % натуральное"
    }
}