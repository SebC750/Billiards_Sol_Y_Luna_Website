export type Picture = {
    altTitle: string;
    pictureLink: string;
    height: number;
    width: number;
    loading?: "eager" | "lazy" | undefined;
}

export const gallery: Picture[] = [
    {
        altTitle: "billiards image inside 1",
        pictureLink: "images/billiards-inside-1.webp",
        width: 600,
        height: 300
    },
    {
        altTitle: "billiards image inside 2",
        pictureLink: "images/gallery_card_image.webp",
        width: 600,
        height: 300
    },
    {
        altTitle: "billiards image inside 3",
        pictureLink: "images/billiards_image_3.webp",
        width: 600,
        height: 300
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "images/billiards_image_4.webp",
        width: 600,
        height: 300
    },
    {
        altTitle: "billiards image inside 5",
        pictureLink: "images/billiards_image_5.webp",
        width: 600,
        height: 300,
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "images/billiards_image_6.webp",
        width: 600,
        height: 300,
        loading: "lazy"
        
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "images/billiards_image_7.webp",
        width: 600,
        height: 300,
        loading: "lazy"
    },
    {
        altTitle: "skeleton prop drinking",
        pictureLink: "images/skeleton_drinking.webp",
        width: 600,
        height: 300,
        loading: "lazy"
    },
]

