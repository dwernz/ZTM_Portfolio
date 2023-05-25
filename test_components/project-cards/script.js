let projectArray = [
    {
        id: 1,
        imgSrc: './assets/test_app.jpg',
        name: `Daniel's MAUI Test App`,
        summary: 'I developed a comprehensive app using .NET MAUI to gain hands-on experience in app development. The app consists of various mini applications that showcase different skills and functionalities. Starting with a simple Counter app, I progressively built more advanced features like Sales, Tip, and Hours calculators, a Math Quiz, and a Dice app for gaming. Additionally, I created Shopping List and Price apps to streamline shopping experiences. Currently, the app is available exclusively for Android devices through the Google Play Store.',
        type: 'mobile app',
        liveCodeLink: 'https://play.google.com/store/apps/details?id=com.danielwernz.testapp',
        viewCodeLink: 'https://github.com/dwernz/MAUI_TestApp'
    },
    {
        id: 2,
        imgSrc: './assets/robofriends.png',
        name: 'Robofriends',
        summary: `The 'Robofriends' project serves as an introduction to React, showcasing the implementation of array functions to enable efficient filtering of robot profiles based on their names. With this application, users can easily navigate through a directory of profiles and perform quick searches by name. By leveraging the power of React and array functions, the project demonstrates the ability to create dynamic and responsive user interfaces for effective data manipulation`,
        type: 'website',
        liveCodeLink: 'https://dwernz.github.io/robofriends/',
        viewCodeLink: 'https://github.com/dwernz/robofriends'
    },
    {
        id: 3,
        imgSrc: './assets/background_generator.png',
        name: 'Background Generator',
        summary: `This webpage showcases the power of HTML, CSS, JavaScript, and DOM manipulation by providing a user-friendly interface to generate a linear gradient background with custom colors. By leveraging these technologies, users can easily select their desired colors and witness the dynamic transformation of the webpage's background in real time. Experience the beauty of interactive design and seamless color blending with this engaging project.`,
        type: 'website',
        liveCodeLink: 'https://dwernz.github.io/ZeroToMastery/DOM%20Manipulation//BackgroundGenerator/index.html',
        viewCodeLink: 'https://github.com/dwernz/ZeroToMastery/tree/master/DOM%20Manipulation/BackgroundGenerator'
    },
    {
        id: 4,
        imgSrc: './assets/test_app.jpg',
        name: `Daniel's MAUI Test App`,
        summary: 'I developed a comprehensive app using .NET MAUI to gain hands-on experience in app development. The app consists of various mini applications that showcase different skills and functionalities. Starting with a simple Counter app, I progressively built more advanced features like Sales, Tip, and Hours calculators, a Math Quiz, and a Dice app for gaming. Additionally, I created Shopping List and Price apps to streamline shopping experiences. Currently, the app is available exclusively for Android devices through the Google Play Store.',
        type: 'mobile app',
        liveCodeLink: 'https://play.google.com/store/apps/details?id=com.danielwernz.testapp',
        viewCodeLink: 'https://github.com/dwernz/MAUI_TestApp'
    },
    {
        id: 5,
        imgSrc: './assets/robofriends.png',
        name: 'Robofriends',
        summary: `The 'Robofriends' project serves as an introduction to React, showcasing the implementation of array functions to enable efficient filtering of robot profiles based on their names. With this application, users can easily navigate through a directory of profiles and perform quick searches by name. By leveraging the power of React and array functions, the project demonstrates the ability to create dynamic and responsive user interfaces for effective data manipulation`,
        type: 'website',
        liveCodeLink: 'https://dwernz.github.io/robofriends/',
        viewCodeLink: 'https://github.com/dwernz/robofriends'
    },
    {
        id: 6,
        imgSrc: './assets/test_app.jpg',
        name: `Daniel's MAUI Test App`,
        summary: 'I developed a comprehensive app using .NET MAUI to gain hands-on experience in app development. The app consists of various mini applications that showcase different skills and functionalities. Starting with a simple Counter app, I progressively built more advanced features like Sales, Tip, and Hours calculators, a Math Quiz, and a Dice app for gaming. Additionally, I created Shopping List and Price apps to streamline shopping experiences. Currently, the app is available exclusively for Android devices through the Google Play Store.',
        type: 'mobile app',
        liveCodeLink: 'https://play.google.com/store/apps/details?id=com.danielwernz.testapp',
        viewCodeLink: 'https://github.com/dwernz/MAUI_TestApp'
    },
    {
        id: 7,
        imgSrc: './assets/robofriends.png',
        name: 'Robofriends',
        summary: `The 'Robofriends' project serves as an introduction to React, showcasing the implementation of array functions to enable efficient filtering of robot profiles based on their names. With this application, users can easily navigate through a directory of profiles and perform quick searches by name. By leveraging the power of React and array functions, the project demonstrates the ability to create dynamic and responsive user interfaces for effective data manipulation`,
        type: 'website',
        liveCodeLink: 'https://dwernz.github.io/robofriends/',
        viewCodeLink: 'https://github.com/dwernz/robofriends'
    },
    {
        id: 8,
        imgSrc: './assets/test_app.jpg',
        name: `Daniel's MAUI Test App`,
        summary: 'I developed a comprehensive app using .NET MAUI to gain hands-on experience in app development. The app consists of various mini applications that showcase different skills and functionalities. Starting with a simple Counter app, I progressively built more advanced features like Sales, Tip, and Hours calculators, a Math Quiz, and a Dice app for gaming. Additionally, I created Shopping List and Price apps to streamline shopping experiences. Currently, the app is available exclusively for Android devices through the Google Play Store.',
        type: 'mobile app',
        liveCodeLink: 'https://play.google.com/store/apps/details?id=com.danielwernz.testapp',
        viewCodeLink: 'https://github.com/dwernz/MAUI_TestApp'
    },
    {
        id: 9,
        imgSrc: './assets/robofriends.png',
        name: 'Robofriends',
        summary: `The 'Robofriends' project serves as an introduction to React, showcasing the implementation of array functions to enable efficient filtering of robot profiles based on their names. With this application, users can easily navigate through a directory of profiles and perform quick searches by name. By leveraging the power of React and array functions, the project demonstrates the ability to create dynamic and responsive user interfaces for effective data manipulation`,
        type: 'website',
        liveCodeLink: 'https://dwernz.github.io/robofriends/',
        viewCodeLink: 'https://github.com/dwernz/robofriends'
    },
];

let firstProject = 0;
let lastProject = 3;

const cardContainer = document.getElementById('card-container');

function createDOMNodes() {
    projectArray.slice(firstProject, (lastProject + 1)).forEach((project) => {
        const item = document.createElement('div');
        item.classList.add('projects__list-item');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('project__list-item-details');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('projects__list-item-img-cont');

        const img = document.createElement('img');
        img.classList.add('projects__list-item-img');
        img.src = project.imgSrc;

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('heading-tertiary', 'projects__list-item-heading-tertiary');
        projectTitle.textContent = project.name;

        const projectText = document.createElement('p');
        projectText.classList.add('text-primary', 'projects__list-item-text-primary');
        const textSpan = document.createElement('span');
        projectText.appendChild(textSpan);
        textSpan.textContent = project.summary;

        const liveCodeLinkBtn = document.createElement('button');
        liveCodeLinkBtn.classList.add('btn', 'btn-theme', 'projects__btn-theme');
        const liveCodeLinkAnchor = document.createElement('a');
        liveCodeLinkAnchor.textContent = (project.type === 'website') ? 'Live Link' : 'Get on Google Play Store';
        liveCodeLinkAnchor.href = project.liveCodeLink;
        liveCodeLinkBtn.appendChild(liveCodeLinkAnchor);

        const viewCodeLinkBtn = document.createElement('button');
        viewCodeLinkBtn.classList.add('btn', 'btn-inv', 'projects__btn-inv');
        const viewCodeLinkAnchor = document.createElement('a');
        viewCodeLinkAnchor.textContent = 'Code Link';
        viewCodeLinkAnchor.href = project.viewCodeLink;
        viewCodeLinkBtn.appendChild(viewCodeLinkAnchor);

        if (project.id % 2 === 0) {
            item.classList.add('projects__list-item--inv')
        }
        
        // Append
        imgContainer.appendChild(img);
        itemDetails.append(imgContainer, projectTitle);
        itemDetails.appendChild(projectText);
        itemDetails.appendChild(liveCodeLinkBtn);
        itemDetails.appendChild(viewCodeLinkBtn);
        item.appendChild(itemDetails);
        cardContainer.appendChild(item);
    });
}

const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const totalPages = Math.ceil(projectArray.length / 4);

const paginationContainer = document.getElementById('pagination-container');

for (let page = 1; page <= totalPages; page++) {
  const pageButton = document.createElement('button');
  pageButton.textContent = page;
  pageButton.addEventListener('click', () => {
    const pageNumber = pageButton.textContent;
    console.log('clicked', pageButton.textContent, firstProject, lastProject);
  })
  
  paginationContainer.appendChild(pageButton);
}

createDOMNodes();

nextBtn.addEventListener('click', () => {
    previousBtn.hidden = false;

    firstProject += 4;
    lastProject += 4;

    cardContainer.textContent = '';
    createDOMNodes();

    if (lastProject > projectArray.length || firstProject > projectArray.length) {
        nextBtn.hidden = true;
    }
});

previousBtn.addEventListener('click', () => {
    nextBtn.hidden = false;

    firstProject -= 4;
    lastProject -= 4;
    cardContainer.textContent = '';
    createDOMNodes();

    if (lastProject <= 1 || firstProject <= 1) {
        previousBtn.hidden = true;
    }
})