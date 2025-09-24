// Kategoriyalar massivini alohida faylga chiqarib qo'yamiz
export const getCategories = (t: (key: string) => string): string[] => [
    t("zavtrak"),
    t("firstCourse"),
    t("secondCourse"),
    t("shashlik"),
    t("pizza"),
    t("burger"),
    t("chicken"),
    t("doner"),
    t("beverages"),
    t("lemonade"),
    t("tea"),
    t("coffee"),
];
