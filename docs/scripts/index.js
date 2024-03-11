(() => {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('google-frame');
  const success = document.getElementById('success');
  let ready = false;
  
  frame.addEventListener('load', () => {
    if (!ready) {
      ready = true;
      return;
    }
    modal.style.display = 'none';
    success.style.display = 'block';
    setTimeout(() => {
      success.style.display = 'none';
    }, 5000)
  });
  window.addEventListener('modal-open-click', e => {
    const label = e.for.getAttribute('data-label');
    const type = e.for.getAttribute('data-type');
    modal.querySelector('h2').innerText = label;
    modal.querySelector('form button').innerText = label;
    document.getElementById('type').value = type;
    modal.style.display = 'flex';
  });
  window.addEventListener('modal-close-click', e => {
    modal.style.display = 'none';
  });
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