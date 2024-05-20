import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "g7fr8nfb",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})


export const writeClient = createClient({
    projectId: "g7fr8nfb",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "sktclo0BnsviqPmfQIfEc1Y0HNbn6aSrFw0TldYtIltsJNCRjpDJ1rKgUB1e31hZWEhIwNnqBIElXbFunV1TJ5IqQxNFeYOSiirTWgkiddD9pCd2hqg1D8puXYg6zcYieirphZ76rWuzVJd9koRmz0iEJ9p3e49LbsKSp7LvrgujhDkvSTPs"
})