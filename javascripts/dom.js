const outPutDiv = $('#insultContainer');

const writeInsult = (word1, word2, noun) => {
  let strang = '';
  strang += `<h3>${word1} ${word2} ${noun}</h3>`;
  printToDom(strang);
};

const printToDom = (insult) => {
  outPutDiv.html(insult);
};

module.exports = {
  writeInsult,
};
