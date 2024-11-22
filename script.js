function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePhoto = document.getElementById('profile-photo');
            profilePhoto.src = e.target.result; // Display the uploaded image
        }
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}