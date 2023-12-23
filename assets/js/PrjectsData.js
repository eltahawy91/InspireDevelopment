let dataPortfolio = [
  {
    id: "1",
    image: "assets/images/project/project1.jpg",
    nameProject: "Havana Hills 6 October",
    images: [
      "assets/images/project/project1.jpg",
      "assets/images/project/project1-4.jpg",
      "assets/images/project/project1-3.jpg",
    ],
  },
  {
    id: "2",
    image: "assets/images/project/project2-1.jpg",
    nameProject: "West Gravity",
    images: [
      "assets/images/project/project2-1.jpg",
      "assets/images/project/project2-2.jpg",
      "assets/images/project/project2-3.jpg",
      "assets/images/project/project2-4.jpg",
      "assets/images/project/project2-5.jpg",
      "assets/images/project/project2-6.jpg",
      "assets/images/project/project2-7.jpg",
      "assets/images/project/project2-8.jpg",
    ],
  },
  {
    id: "3",
    image: "assets/images/project/project3-1.jpg",
    nameProject: "B Gravity",
    images: [
      "assets/images/project/project3-1.jpg",
      "assets/images/project/project3-2.jpg",
    ],
  },
];

var temp;
var projectImagesImg = "";
let previewImage = document.getElementById("projectImagePrevieo"); // Assuming you have an element with id "projectImagePreview"
let portCard = document.getElementById("portCard"); ///row card project
let RowprojectImages = document.querySelectorAll(".projectImages");

function getId(id) {
  // console.log(id);
  let item = dataPortfolio.flat((i) => i.id === id);
  item.forEach((el, index) => {
    if (el.id == id) {
      temp = el.image;
      // Create an array to store all images
      let imagesArray = el.images;
      // Accumulate image elements in a string
      imagesArray.forEach((img) => {
        projectImagesImg += `
          <div class="col-6">
            <img
              src=${img}
              class="h-75 w-100"
              style="object-fit: cover; cursor: pointer"
              alt=""
              onclick="showProjectImg('${img}')"
            />
          </div>
        `;
      });

      // Append the accumulated image elements to portCard
      RowprojectImages.innerHTML = projectImagesImg;
    }
  });
}

function showProjectImg(imgSrc) {
  temp = imgSrc;

}

dataPortfolio.map((card) => {
  let cardInfo = `  
    
    <div class="col-lg-4 col-md-6  zoomIn card-project ${card.category}" data-wow-delay="0.3s">
    <div class="card " data-tilt>
        <div class="portfolio-item">
            <img src=${card.image} id="projectImage" class="w-100 h-100" alt="">
        </div>
        <div class="portfolio-info">
            <h3>${card.nameProject}</h3>
            <div class="d-flex justify-content-center gap-4 mt-3">
                <button class="modal-plus" onclick="getId(${card.id})" id="openModalPortfolio">
                <i class="fa-solid fa-plus"></i>
                
                </button>
            </div>
        </div>
  
    </div>
  </div>
    `;

  portCard.innerHTML += cardInfo;
  var openModalPortfolio = document.querySelectorAll(".modal-plus"); /////btn plus
  openModalPortfolio.forEach((plus) => {
    plus.addEventListener("click", (e) => {
      var modalProjects = document.querySelectorAll(".modal-projects"); //modal
      var modal_content = `
              <div class="container h-100">
                  <div class="row h-100">
                      <div class="col-lg-8 col-12 m-auto home-dark p-3 position-relative h-100">
                          <span class="closeBtn position-absolute end-0 me-3"><i class="fa-solid fa-xmark"></i></span>
                          <img src=${temp}  class="h-50 w-100 projectImagePrevieo" style="object-fit:cover" id="projectImagePrevieo" alt="">  
                          <div class="projectImages row mt-3" style="row-gap:10px;flex-wrap: nowrap;overflow-x: scroll;padding-bottom:15px">
                              ${projectImagesImg}
                          </div>
                      </div>
                  </div>
              </div>
            `;
      modalProjects.forEach((modal) => {
        modal.innerHTML = modal_content;
        modal.style.transform = "scale(1)";
        let closeBtn = document.querySelector(".closeBtn");
        let closeBtnIcon = document.querySelector(".closeBtn i");
        closeBtn.addEventListener("click", () => {
          modal.style.transform = "scale(0)";
          projectImagesImg = "";
        });

        closeBtn.addEventListener("mouseover", () => {
          closeBtnIcon.classList.remove("fa-xmark");
          closeBtnIcon.classList.add("fa-slash");
        });
        closeBtn.addEventListener("mouseleave", () => {
          closeBtnIcon.classList.remove("fa-slash");
          closeBtnIcon.classList.add("fa-xmark");
        });
      });
    });
  });
});
