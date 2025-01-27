document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.projects-container');

  // Fetch and display projects
  fetch('/get-projects')
    .then(response => response.json())
    .then(data => {
      if (data.projects) {
        data.projects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');
          projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div style="background-color: ${project.color}; height: 50px; width: 50px; border-radius: 50%;"></div>
          `;
          projectsContainer.appendChild(projectCard);
        });
      }
    })
    .catch(error => console.error('Error fetching projects:', error));
});
