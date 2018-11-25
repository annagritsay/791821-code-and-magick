'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 60;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP * 6);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + 5 * GAP + (TEXT_WIDTH + barWidth) * i, CLOUD_Y + CLOUD_HEIGHT - 2 * GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = 100 - (i * 20);
      var color = 'hsl(240, ' + saturation + '%,' + ' 50%)';
      ctx.fillStyle = color;
    }
    ctx.fillRect(CLOUD_X + 5 * GAP + (TEXT_WIDTH + barWidth) * i, CLOUD_Y + CLOUD_HEIGHT - 2 * GAP - FONT_GAP, barWidth, (-BAR_HEIGHT * Math.round(times[i])) / maxTime);
  }
};
