var args = process.argv;
var magicNum = parseInt(args[2]);

for (var i = 1; i <= 100; i++) {
  if (i % (magicNum * (magicNum + 1) * (magicNum + 2)) === 0) {
    console.log(i + ': Boom!');
    break;
  }

  if (i % magicNum === 0 && i % (magicNum + 1) === 0) {
    console.log(i + ': Bingo!');
    continue;
  }

  if (i % magicNum === 0) {
    console.log(i + ': Bing!');
    continue;
  }

  if (i % (magicNum + 1) === 0) {
    console.log(i + ': Go!');
    continue;
  }
}

