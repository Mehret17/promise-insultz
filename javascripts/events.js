const dom = require('./dom');
const data = require('./data');

const buttonEvent = () => {
  $('#insultButton').click(() => {
    dom.writeInsult(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = buttonEvent;
