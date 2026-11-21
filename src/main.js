import 'flowbite';

const toggle = document.getElementById('searchToggle');
const input = document.getElementById('searchInput');

const openClasses = ['w-40', 'md:w-60', 'opacity-100', 'px-4', 'mr-3'];
const closedClasses = ['w-0', 'opacity-0', 'px-0'];

function openSearch() {
  input.classList.remove(...closedClasses);
  input.classList.add(...openClasses);
  toggle.setAttribute('aria-expanded', 'true');
  input.focus();
}

function closeSearch() {
  input.classList.remove(...openClasses);
  input.classList.add(...closedClasses);
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  if (!isOpen) {
    openSearch();
  } else if (input.value.trim()) {
    input.form.submit(); // اگه متنی نوشته شده، سرچ کن
  } else {
    closeSearch();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearch();
});

document.addEventListener('click', (e) => {
  if (!input.form.contains(e.target)) closeSearch();
});
