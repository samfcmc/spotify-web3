const fs = require("fs");
const axios = require("axios");

const songs = [
  'JTiger',
  'jTwinkle',
];
const durations = [
  '00:15',
  '00:05',
];
const ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "Snoop Jay",
      year: "1950",
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
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
