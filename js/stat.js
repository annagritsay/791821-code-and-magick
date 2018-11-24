var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 60;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

ctx.font = '30px Tahoma';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура вы победили!', CLOUD_X + 8 * GAP, GAP);
ctx.fillText('Список результатов:', CLOUD_X + 6 * GAP, GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + 5 * GAP + (5 * GAP + barWidth) * i, CLOUD_Y + 8 * GAP);
    ctx.fillRect(CLOUD_X + 5 * GAP + (5 * GAP + barWidth) * i, CLOUD_Y + 10 * GAP + FONT_GAP,  barWidth, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
