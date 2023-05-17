const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')


// Project Pages
const previousProject = document.getElementById('previousProject');
const projectPage1 = document.getElementById('projectPage1');
const projectPage2 = document.getElementById('projectPage2');
const projectPage3 = document.getElementById('projectPage3');
const projectPage4 = document.getElementById('projectPage4');
const projectPage5 = document.getElementById('projectPage5');
const nextProject = document.getElementById('nextProject');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

let page = 1;

// Default Script
smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  smMenuLink1.style.transitionDelay = '.5s'
  smMenuLink1.style.transform = 'translateY(0)'
  smMenuLink1.style.opacity = '1'

  smMenuLink2.style.transitionDelay = '.8s'
  smMenuLink2.style.transform = 'translateY(0)'
  smMenuLink2.style.opacity = '1'

  smMenuLink3.style.transitionDelay = '1.1s'
  smMenuLink3.style.transform = 'translateY(0)'
  smMenuLink3.style.opacity = '1'

  smMenuLink4.style.transitionDelay = '1.4s'
  smMenuLink4.style.transform = 'translateY(0)'
  smMenuLink4.style.opacity = '1'
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    smMenuLink4.style.transitionDelay = '0s'
    smMenuLink4.style.transform = 'translateY(50px)'
    smMenuLink4.style.opacity = '0'

    smMenuLink3.style.transitionDelay = '.3s'
    smMenuLink3.style.transform = 'translateY(50px)'
    smMenuLink3.style.opacity = '0'

    smMenuLink2.style.transitionDelay = '.6s'
    smMenuLink2.style.transform = 'translateY(50px)'
    smMenuLink2.style.opacity = '0'

    smMenuLink1.style.transitionDelay = '.9s'
    smMenuLink1.style.transform = 'translateY(50px)'
    smMenuLink1.style.opacity = '0'

    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  smMenuLink4.style.transitionDelay = '0s'
  smMenuLink4.style.transform = 'translateY(50px)'
  smMenuLink4.style.opacity = '0'

  smMenuLink3.style.transitionDelay = '.3s'
  smMenuLink3.style.transform = 'translateY(50px)'
  smMenuLink3.style.opacity = '0'

  smMenuLink2.style.transitionDelay = '.6s'
  smMenuLink2.style.transform = 'translateY(50px)'
  smMenuLink2.style.opacity = '0'

  smMenuLink1.style.transitionDelay = '.9s'
  smMenuLink1.style.transform = 'translateY(50px)'
  smMenuLink1.style.opacity = '0'

  smMenu.style.transitionDelay = '1.2s'
  smMenu.classList.remove('main-header__sm-menu--active')
})





// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const root = document.documentElement;



const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

// themeColorSelector.addEventListener('click', () => {
//   eventFire(themeColorSelectorInput, 'input')
// })

// const setDynamicColor = (color) => {

//   const { r, g, b } = hexToRgb(`${color}`)
  
//   root.style.setProperty('--themeColor', `${r},${g},${b}`);
//   //localStorage.setItem('color', color)
// }

// themeColorSelectorInput.addEventListener('input', (e) => {
//   setDynamicColor(e.target.value)
// })

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector('.main-header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// Page functions

previousProject.addEventListener('click', () => {
    page--;

    if (page <= 0) {
        page = 1;
    }

    updatePage();
});

projectPage1.addEventListener('click', () => {
    page = 1;

    updatePage();
});

projectPage2.addEventListener('click', () => {
    page = 2;

    updatePage();
});

projectPage3.addEventListener('click', () => {
    page = 3;

    updatePage();
});

projectPage4.addEventListener('click', () => {
  page = 4;

  updatePage();
});

projectPage5.addEventListener('click', () => {
  page = 5;

  updatePage();
})

nextProject.addEventListener('click', () => {
    page++;

    if (page >= 5) {
        page = 5;
    }

    updatePage();
});

function updatePage() {
    if (page === 1) {
        previousProject.hidden = true;
        nextProject.hidden = false;
    }
    else if (page === 5) {
        nextProject.hidden = true;
        previousProject.hidden = false;
    }
    else {
        nextProject.hidden = false;
        previousProject.hidden = false;
    }
    
    projectPage1.classList.remove('active');
    projectPage2.classList.remove('active');
    projectPage3.classList.remove('active');
    projectPage4.classList.remove('active');
    projectPage5.classList.remove('active');

    page1.hidden = true;
    page2.hidden = true;
    page3.hidden = true;
    page4.hidden = true;
    page5.hidden = true;

    if (page === 1) {
      projectPage1.classList.add('active');
      page1.hidden = false;
    }
    else if (page === 2) {
      projectPage2.classList.add('active');
      page2.hidden = false;
    }
    else if (page === 3) {
      projectPage3.classList.add('active');
      page3.hidden = false;
    }
    else if (page === 4) {
      projectPage4.classList.add('active');
      page4.hidden = false;
    }
    else if (page === 4) {
      projectPage4.classList.add('active');
      page4.hidden = false;
    }
    else if (page === 5) {
      projectPage5.classList.add('active');
      page5.hidden = false;
    }
}