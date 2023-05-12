console.log("hello world");

const cl = console.log;

const showModelBtn = document.getElementById("showModelBtn");

const myModel = document.getElementById("myModel");
const movieClose = [...document.querySelectorAll(".movieClose")]
const backDrop = document.getElementById("backDrop");
const titleControl = document.getElementById("title");
const imgUrlControl = document.getElementById("imgUrl");
const ratingControl = document.getElementById("rating");
const moviesContainer = document.getElementById("moviesContainer");
const movieForm = document.getElementById("movieForm");
let movieArr = [
    {
        title :"Day Dreamer",
        imgUrl:"https://tse1.mm.bing.net/th?id=OIP.6Zoyl9J6LUUxmijvBMLKOAHaD8&pid=Api&P=0",
        rating:"5"
    }
];


let drama = (str) =>{
    let result = "";
    str.forEach(arr =>{
        result += `
        <div class="col-md-4 col-sm-6 mb-20">
                    <div class="card-group mt-3">
                        <div class="card border-0">
                            <div class="card-header text-center">
                                <h2>${arr.title}</h2>
                            </div>
                            <div class="card-body">
                                <img src="${arr.imgUrl}"
                                    class="card-img-top img-fluid movieImg" alt="logo">
                            </div>
                            <div class="card-footer">
                                <p>${arr.rating}/5</p>
                            </div>
                        </div> 
                    </div>
                </div>
                        `
    })
    moviesContainer.innerHTML=result
}


const modelShowHideHandler = () =>{
    myModel.classList.toggle("visible");
    backDrop.classList.toggle("visible");
}
drama(movieArr)
const onSubmitMovieHandler = (e) =>{
    e.preventDefault();

    movieObj ={
        title : titleControl.value,
        imgUrl : imgUrlControl.value,
        rating : ratingControl.value
    }
    movieArr.unshift(movieObj);
    drama(movieArr)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie Added In Successfully',
        showConfirmButton: false,
        timer: 3000
    })
    e.target.reset();
    modelShowHideHandler()
    cl(movieArr)
}

showModelBtn.addEventListener("click", modelShowHideHandler);
movieClose.forEach(ele =>ele.addEventListener("click", modelShowHideHandler));
movieForm.addEventListener("submit", onSubmitMovieHandler);