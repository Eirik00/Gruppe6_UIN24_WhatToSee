export const movies = {
    title: "Filmer",
    name: "movies",
    type: "document",
    fields: [
        {
            title: "Filmnavn",
            name: "moviename",
            type: "string"
        },{
            title: "Utgivelsesår",
            name: "releaseyear",
            type: "number"
        },{
            title: "Kategori",
            name: "category",
            type: "array",
            of: [{ type: "reference", to: { type: "categories" } }],
            validation: Rule => Rule.unique().min(1).max(3).error("En film må ha mellom 1 til 3 kategorier")
        }
    ]
}