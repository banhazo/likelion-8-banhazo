const tabs = document.querySelectorAll('.tech-stack .tab-bar .tab');

console.log(tabs);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) =>
      item.querySelector('button').classList.remove('is--active')
    );
    tab.querySelector('button').classList.add('is--active');
  });
});
