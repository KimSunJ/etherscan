import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const numberAll = async (txData) => {
  return (await request.post("latest/tx", txData)).data;
};

export const blockFind = async (blockNumb) => {
  return (await request.post("latest/find", { number: blockNumb })).data;
};

export const blockAll = async (allData) => {
  return (await request.post("detail/all", allData)).data;
};

export const searchAll = async (inputTxt) => {
  return (await request.post("detail/search", { text: inputTxt })).data;
};

export const txAll = async (blockNumb) => {
  return (await request.post("detail/txHashAll", { txHashData: blockNumb }))
    .data;
};

export const txFrTo = async (minerAddress) => {
  return (await request.post("detail/part", { address: minerAddress })).data;
};

export const accountAll = async (accountList) => {
  return (await request.post("account/list", accountList)).data;
};

export const balanceAll = async (getList) => {
  return (await request.post("account/get", getList)).data;
};
