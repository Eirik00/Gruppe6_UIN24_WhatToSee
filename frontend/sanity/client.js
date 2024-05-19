import { createClient } from `@sanity/client`

export const client = createClient({
    projectId: "g7fr8nfb",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})