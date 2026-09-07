(function () {
  var loader = document.getElementById('loader');
  if (!loader) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = sessionStorage.getItem('emj-loaded');

  if (seen || reduceMotion) {
    loader.classList.add('skip');
    return;
  }

  var fill = document.getElementById('loaderFill');
  requestAnimationFrame(function () {
    if (fill) fill.style.width = '100%';
  });

  function finish() {
    loader.classList.add('hide');
    sessionStorage.setItem('emj-loaded', '1');
  }

  var minTime = new Promise(function (res) { setTimeout(res, 700); });
  var loaded = new Promise(function (res) {
    if (document.readyState === 'complete') res();
    else window.addEventListener('load', res, { once: true });
  });

  Promise.all([minTime, loaded]).then(finish);
})();
