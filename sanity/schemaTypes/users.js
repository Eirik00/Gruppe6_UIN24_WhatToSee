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
        }
    ]
}