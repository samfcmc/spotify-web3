const fs = require("fs");
const axios = require("axios");

const media = [
  'JTiger.mp3',
  'JTwinkle.mp3',
  'NonFungible.png',
];
const ipfsArray = [];
const promises = [];

for (let i = 0; i < media.length; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
        if (err) rej();
        ipfsArray.push({
          path: `media/${i}`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );
}
Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        "X-API-KEY":
          "WigQuuETDNp7NwsQvpqMklIDhUVxCoCSnNQF0H098GCMG2eMU6RfsMoYlIPBm6wD",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
