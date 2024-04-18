document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('source');
    const targetParagraph = document.getElementById('target');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = form.querySelector('[name="firstname"]').value;
        const lastName = form.querySelector('[name="lastname"]').value;

        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    });
});
