import  sanityClient  from "@sanity/client";


export default sanityClient({
    projectId: "zq00lcnz",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true,
})