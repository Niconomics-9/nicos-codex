// Nico's Codex: AI — stagger card animations on load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.resource-card, .leader-card, .section-card').forEach(function (el, i) {
    if (!el.style.animationDelay) {
      el.style.animationDelay = (i * 80) + 'ms';
    }
  });
});
