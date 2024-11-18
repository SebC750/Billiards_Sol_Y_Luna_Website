export type Picture = {
    altTitle: string;
    pictureLink: string;
    loading?: "eager" | "lazy" | undefined;
}

export const gallery: Picture[] = [
    {
        altTitle: "billiards image inside 1",
        pictureLink: "assets/billiards-inside-1.webp",
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 2",
        pictureLink: "assets/gallery_card_image.webp",
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 3",
        pictureLink: "assets/billiards_image_3.webp",
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "assets/billiards_image_4.webp",
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 5",
        pictureLink: "assets/billiards_image_5.webp",
        loading: "lazy"
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "assets/billiards_image_6.webp",
        loading: "lazy"
        
    },
    {
        altTitle: "billiards image inside 4",
        pictureLink: "assets/billiards_image_7.webp",
        loading: "lazy"
    },
    {
        altTitle: "skeleton prop drinking",
        pictureLink: "assets/skeleton_drinking.webp",
        loading: "lazy"
    },
]

