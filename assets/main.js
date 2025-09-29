
(function(){
  var el = document.getElementById('cookie-consent');
  var btn = document.getElementById('cc-accept');
  if(!el || !btn) return;
  if(localStorage.getItem('fcc_cookie_ok')) return;
  el.classList.remove('hidden');
  btn.addEventListener('click', function(){
    localStorage.setItem('fcc_cookie_ok','1');
    el.classList.add('hidden');
  });
})();
