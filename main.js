const { URL, URLSearchParams } = require("url");

const date = "202408";       
const time_period = "m";    

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/bank_incomeexp";

const url = new URL(base);

url.search = new URLSearchParams({
  date: date,
  period: time_period,
  json: ""
});

console.log(url.toString());
