import { TIMEOT_SEC } from "../config.js";
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  
export const getJson=async function(url){
    try {
        const fetchPro=fetch(url);
        const res = await Promise.race([fetchPro,timeout(TIMEOT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.status} (${res.status})`);
      return data;
    } catch (error) {
      throw error;
    }

}