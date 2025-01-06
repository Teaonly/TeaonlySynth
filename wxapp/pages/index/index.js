// index.js
const app = getApp();
function beginAudio() {
  const ctx = app.globalData.actx;
  const osc = ctx.createOscillator();
  console.log(osc);
  osc.type = "sine";
  /*
  osc.frequency = 440;
  */
  osc.connect(ctx.destination);
  osc.start(ctx.currrentTime);
}
Page({
  data: {
  },

  onbegin: beginAudio,
})
