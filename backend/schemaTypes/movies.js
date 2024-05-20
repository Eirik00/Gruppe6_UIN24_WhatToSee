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
            type: "reference", 
            to: [{ type: "categories" }]
        }
    ]
}