(function(){
  var BP = 768;
  var root = document.documentElement;
  var burger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.mob-drawer');
  var overlay = document.querySelector('.mob-overlay');
  var closeBtn = document.querySelector('.drawer-close');
  function openMenu(){
    if(!drawer) return;
    drawer.removeAttribute('hidden');
    overlay.classList.add('visible');
    burger.setAttribute('aria-expanded','true');
    root.style.overflow = 'hidden';
  }
  function closeMenu(){
    if(!drawer) return;
    drawer.setAttribute('hidden','');
    overlay.classList.remove('visible');
    burger.setAttribute('aria-expanded','false');
    root.style.overflow = '';
  }
  if(burger){
    burger.addEventListener('click', function(){
      if(drawer.hasAttribute('hidden')) openMenu(); else closeMenu();
    });
    if(overlay) overlay.addEventListener('click', closeMenu);
    if(closeBtn) closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', function(){ if(window.innerWidth > BP) closeMenu(); });
    drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-answer');
    if(!q || !a) return;
    q.addEventListener('click', function(){
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
