export const users = {
    title: "Burkere",
    name: "users",
    type: "document",
    fields: [
        {
            title: "Brukernavn",
            name: "username",
            type: "string"
        },{
            title: "Ønskeliste",
            name: "wishlist",
            type: "array",
            of: [{ type: "reference", to: { type: "movies" } }]
        },{
            title: "Favorittliste",
            name: "favmovie",
            type: "array",
            of: [{ type: "reference", to: { type: "movies" } }]
        },{
            title: "Favorittsjanger",
            name: "favcategory",
            type: "array",
            of: [{type: "reference", to: { type: "categories" }}]
        }
    ]
}