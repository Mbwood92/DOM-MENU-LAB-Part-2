var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList = 'flex-ctr';
const topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl);

topMenuEl.style.height = ('100%')
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList= 'flex-around';
menuLinks.forEach(function(link) {
let linkEl = document.createElement('a') 
linkEl.setAttribute('href',link.href)
linkEl.textContent = link.text
topMenuEl.appendChild(linkEl)
})
const subMenuEl = document.getElementById('sub-menu')
console.log(subMenuEl);

subMenuEl.style.height = ('100%')
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList = 'flex-around';
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0';


var topMenuLinks = document.querySelectorAll("a");
var showingSubMenu = false;

topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  var link = evt.target;
  if (link.tagName !== 'A') return;
if (!link.classList.contains('sub-link')) {
    topMenuLinks.forEach(function(menuLink) {
      menuLink.classList.remove('active');
    });
    link.classList.add('active');
    activeMenuItem = link;
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
    const linkData = menuLinks.find(function(linkObject) {
      return linkObject.text === link.textContent;
    });
if (linkData && linkData.subLinks) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
    }
  }
});
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    let linkEl = document.createElement('a');
    linkEl.classList.add('sub-link');
    linkEl.textContent = link.text;
    linkEl.href = link.href;
    subMenuEl.appendChild(linkEl);
  });
}
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  var link = evt.target;
  if (link.tagName !== 'A') return;
});
showingSubMenu = false;
subMenuEl.style.top = '0';
topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});


