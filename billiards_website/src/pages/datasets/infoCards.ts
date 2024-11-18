export type InfoCard = {
    cardTitle: string;
    cardDescription: string;
}

export interface MenuCard extends InfoCard {
    itemPrice: number | [number, number];
}

export interface HomeCard extends InfoCard {
    imageFile?: string;
    cardLink: string;
    cardLinkText: string;
}

export const homeCardsList: HomeCard[] = [
    {
        imageFile: "assets/beer_card_image.jpg",
        cardTitle: "Bebidas",
        cardDescription: "Visítanos para disfrutar de una buena selección de bebidas y comidas en un ambiente de billar y taberna.",
        cardLink: "/Menu",
        cardLinkText: "Ver precios"
    },
    {
        imageFile: "assets/billiards-bg-2.jpg",
        cardTitle: "Juegos de billar",
        cardDescription: "Vengan a jugar billar con sus amigos para aprender sobre el juego y disfrutar de buenas experiencias.",
        cardLink: "/Menu",
        cardLinkText: "Ver precios"
    },
    {
        imageFile: "assets/gallery_card_image.jpg",
        cardTitle: "Gallery",
        cardDescription: "Sumérgete en nuestro acogedor bar y sala de billar, donde te esperan buena compañía, un ambiente amigable y juegos emocionantes. ¡Descubre el ambiente vibrante y echa un vistazo a las noches llenas de diversión en nuestro establecimiento!",
        cardLink: "/Gallery",
        cardLinkText: "Ver galleria"
    }
]

export const menuCardsList: MenuCard[] = [
    {
        cardTitle: "Cerveza individual",
        cardDescription: "Una botella singular de los siguentes marcas: Heineken, Corona, Modelo",
        itemPrice: 6,
    },
    {
        cardTitle: "Cubeta",
        cardDescription: "Una cubeta que viene con 6 cervezas con la combinacion de cualquier cerveza que prefieres",
        itemPrice: 33,
    }, {
        cardTitle: "Vaso en vino",
        cardDescription: "Un vaso de vino fino con opciones de vino rojo y blanco.",
        itemPrice: 8,
    }, {
        cardTitle: "Botella de vino",
        cardDescription: "Una botella de vino fino para compartir con amistades.",
        itemPrice: [30, 40],
    },
    {
        cardTitle: "Jarra Sangria",
        cardDescription: "Una jarra de sangria fresca.",
        itemPrice: 28,
    }, {
        cardTitle: "Jarra Refajo",
        cardDescription: "Una jarra de refajo",
        itemPrice: 28,
    }, {
        cardTitle: "Michelada",
        cardDescription: "Una ",
        itemPrice: 14,
    },
    {
        cardTitle: "Doble michelada",
        cardDescription: "",
        itemPrice: 18,
    },
    {
        cardTitle: "Gomichela",
        cardDescription: "",
        itemPrice: 16,
    },
    {
        cardTitle: "Heiniken Zero",
        cardDescription: "Una cubeta que viene con 6 cervezas con la combinacion de cualquier cerveza prefieres",
        itemPrice: 5,
    },
    {
        cardTitle: "Red Bull",
        cardDescription: "Una cubeta que viene con 6 cervezas con la combinacion de cualquier cerveza prefieres",
        itemPrice: 7,
    },
    {
        cardTitle: "Agua en botella",
        cardDescription: "Una cubeta que viene con 6 cervezas con la combinacion de cualquier cerveza prefieres",
        itemPrice: 5,
    },
    {
        cardTitle: "Gaseosa",
        cardDescription: "Una cubeta que viene con 6 cervezas con la combinacion de cualquier cerveza prefieres",
        itemPrice: 5,
    }
]
