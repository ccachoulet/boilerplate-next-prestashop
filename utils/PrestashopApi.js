import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_PRESTASHOP_API_URI;
const webserviceKey = process.env.NEXT_PUBLIC_PRESTASHOP_WEBSERVICE;

const PrestashopApi = axios.create({
  baseURL,
  params: {
    ws_key: webserviceKey,
    output_format: "JSON",
  },
  headers: {
    'Authorization': 'Basic ' + btoa(webserviceKey + ':'),
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  },
});

export default PrestashopApi;
