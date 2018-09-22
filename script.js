+function () {

    const body = document.querySelector('body');
    const evhGrid = document.querySelector('#evh-grid');

    if (evhGrid) {
        evhGrid.remove();
    } else {
        let cols = '<div class="evh-grid--col"></div>'.repeat(12);
        body.innerHTML += `<div id="evh-grid" style="height: ${document.body.scrollHeight}px" class="evh-grid">${cols}</div>`;
    }
}();