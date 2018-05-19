let nouns = [];
let descriptors = [];

const nounJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('/db/nouns.json')
      .done ((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject('error', err);
      });
  });
};

const descriptorsJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('/db/descriptors.json')
      .done ((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject('error', err);
      });
  });
};

const printAll = () => {
  // resolve promises
  return Promise.all ([nounJSON(), descriptorsJSON(),])
    .then((results) => {
      // return(results)
      nouns = results[0];
      descriptors = results[1];
    })
    .catch((err) => {
      console.error('oh crap and erorr: '. err);
    });
};

const initializer = () => {
  printAll();
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};
module.exports = {
  initializer,
  getDescriptors,
  getNouns,
};
