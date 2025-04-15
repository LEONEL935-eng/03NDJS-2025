import axios from 'axios';
import * as cheerio from 'cheerio';

const URL = 'https://www.css.cnrs.fr/scrape/nobel_all.html';

const { data: html } = await axios.get(URL);
const $ = cheerio.load(html);

const nobels = [];

$('table tbody tr').each((i, row) => {
  const cols = $(row).find('td');

  const record = {
    année: $(cols[0]).text().trim(),
    discipline: $(cols[1]).text().trim(),
    nom: $(cols[2]).text().trim(),
    pays: $(cols[3]).text().trim(),
  };

  nobels.push(record);
});

console.log(nobels);
