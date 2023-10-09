const sdk = require("api")("@reservoirprotocol/v3.0#axfpg1ilnet08rx");

sdk.auth("demo-api-key");
sdk.getSearchCollectionsV2({
    community: "artblocks",
    offset: "0",
    accept: "*/*",
})
    .then(({ data }) => {
        console.log(data);
    })
    .catch((err) => console.error(err));
