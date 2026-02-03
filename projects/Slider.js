const images = document.querySelectorAll('.card .img');

images.forEach((img, index) => {
  img.addEventListener("click", function() {
    // Remove 'active' from all images
    images.forEach(i => i.classList.remove("active"));
    
    // Add 'active' only to the clicked image
    img.classList.add("active");
  });
});
