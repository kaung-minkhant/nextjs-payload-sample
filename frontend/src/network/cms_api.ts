import axios from "axios";

const cms_api = axios.create({
  baseURL: process.env.CMS_BASE
})

export default cms_api;