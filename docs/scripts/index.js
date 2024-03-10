(() => {
  window.addEventListener('tab-click', e => {
    e.for.parentNode.querySelectorAll('a').forEach((tab) => {
      tab.classList.remove('active');
    })
    e.for.classList.add('active');
    const selector = e.for.getAttribute('href');
    document.querySelectorAll(selector).forEach(selected => {
      Array.from(selected.parentNode.children).forEach((child) => {
        child.classList.remove('active');
      });
      selected.classList.add('active');
    });
  });
  window.doon(document.body);
})()