const toggleCheckbox = document.getElementById ('toggle');
const togglePlans = document.getElementById('toggle-plans');

toggleCheckbox.addEventListener('change', () => {
    togglePlans.classList.toggle('show-monthly-pricing');
})
