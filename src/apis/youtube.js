import axios from "axios";

const KEY = "AIzaSyAHKoJOZ1r3DZxnxW_8r1NsdSapqUu4xbI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
