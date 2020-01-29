const Grammarly = require('@stewartmcgown/grammarly-api').Grammarly;
const util = require('util')

const text = `When we have shuffled off this mortal coil,
Must give us pause - their's the respect
That makes calamity of so long life.`;

async function analyse(text) {
  const free = new Grammarly();
  await free.analyse(text).then(result => console.log(util.inspect(result, {showHidden: false, depth: null})));
};

analyse(text);