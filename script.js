
const projectData = [
    { label: 'Project 1', path: 'works/task1/index.html' },
    { label: 'Project 2', path: 'works/task2/index.html' },
    { label: 'Project 3', path: 'works/task3/index.html' }
];

function initializeButtons() {
    const controls = document.getElementById('buttonContainer');

    projectData.forEach(project => {
        const projectBtn = document.createElement('button');
        projectBtn.className = 'projectButton';
        projectBtn.innerText = project.label;
        projectBtn.addEventListener('click', () => {
            displayContent(project.path);
        });
        controls.appendChild(projectBtn);
    });
}

function displayContent(path) {
    const frame = document.getElementById('displayFrame');
    frame.src = path;
}

window.onload = initializeButtons;
