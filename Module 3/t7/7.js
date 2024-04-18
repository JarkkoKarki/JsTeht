document.addEventListener('DOMContentLoaded', function() {
  const trigger = document.getElementById('trigger');
  const target = document.getElementById('target');
  const Src = target.src
  const hoverSrc = 'img/picB.jpg'

  trigger.addEventListener('mouseenter', function() {
      target.src = hoverSrc;
  });

  trigger.addEventListener('mouseleave', function() {
        target.src = Src;
  });
});