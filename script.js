// form validation



function validate(event) {
    //prevent default was used to keep the submit button from redirecting to index.html. will want to remove that when I have a back end
    event.preventDefault();
if (document.registration_form.name.value === "")
    alert('Please enter your name')
}