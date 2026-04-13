import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';

const coursesTbody = document.getElementById('courses') as HTMLElement;
const btnFilter = document.getElementById('button-filterByName') as HTMLElement;
const searchBox = document.getElementById('search-box') as HTMLInputElement;
const detailPanel = document.getElementById('detail-panel') as HTMLElement;

btnFilter.onclick = () => applyFilter();

renderTable(dataCourses);

function renderTable(courses: Course[]): void {
  coursesTbody.innerHTML = '';
  courses.forEach((course) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${course.name}</td>
                    <td>${course.label}</td>
                    <td>${course.year}</td>`;
    tr.onclick = () => showDetail(course);
    coursesTbody.appendChild(tr);
  });
}

function applyFilter(): void {
  const text = searchBox.value ?? '';
  const filtered = text === ''
    ? dataCourses
    : dataCourses.filter(c => c.name.toLowerCase().includes(text.toLowerCase()));
  renderTable(filtered);
}

function showDetail(course: Course): void {
  detailPanel.innerHTML = `
    <div class="card">
      <div class="card-header">
        <strong>Detalle del álbum</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title">${course.name}</h5>
        <p class="card-text"><strong>Sello:</strong> ${course.label}</p>
        <p class="card-text"><strong>Año:</strong> ${course.year}</p>
        <p class="card-text">${course.description}</p>
      </div>
    </div>
  `;
}