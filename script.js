function insertCurrentYearTo(elementId) {
    const currentYear = new Date().getFullYear();
    const element = document.getElementById(elementId);
    element.textContent = currentYear.toString();
}
