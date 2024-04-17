document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const form = e.target;
    const formData = new FormData(form);

    fetch("process_form.js", {
        method: "POST",
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        });
});
