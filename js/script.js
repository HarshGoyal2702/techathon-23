

let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const addBgImages = document.querySelectorAll(".addBgImage");


const enableDarkMode = () =>{

   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   addBgImages.forEach((element) => {
      element.classList.add("dark");
   })
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   addBgImages.forEach((element) => {
      element.classList.remove("dark");
   })
   localStorage.setItem('dark-mode', 'disabled');

}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}



//CHAT


   const submitBtn = document.querySelector('.submit__btn')
   const userName = document.querySelector('#user')
   const comment = document.querySelector('#comment')
   const likeIcon = document.querySelector('.heart__icon')
   const count = document.querySelector('.count')
   const commentsCont = document.querySelector('.comments__container')
   
   likeIcon.addEventListener('click', likeVideo)
   submitBtn.addEventListener('click', submitFeedback)
   
   
   feedbackArr = []
   let positiveFeedback = false
   let likesCount = 0
   
   function submitFeedback(e){
       // get user name
       const userForm = userName.value 
       // get feedback
       const commentForm = comment.value 
       // if inputs are not empty
       if(userForm && commentForm !== ''){
           // create new feedback
           newFeedback = {
               "id": Math.floor((Math.random() * 1000)+ 1),
               "userName": userForm,
               "userComment": commentForm,
               "typeOfFeedback": positiveFeedback
           }
           // add new feedback to array
           feedbackArr.push(newFeedback)
           // if liked add to count
           if(positiveFeedback === true){
               addLikes()
           }
           // clear inputs 
           resetForm()
           // add feedback to list
           addFeedback(newFeedback)
       }
   
   
       e.preventDefault()
   }
   
   function likeVideo(){
       likeIcon.classList.toggle('liked')
   
       if(likeIcon.classList.contains('liked')){
           likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
           // set feedback to liked
           positiveFeedback = true
       } else {
           likeIcon.innerHTML = `<i class="far fa-heart"></i>`
           // set feedback to not liked
           positiveFeedback = false
       }
   }
   
   function addLikes(){
       likesCount++
       count.innerHTML = likesCount
   }
   
   function resetForm(){
       userName.value = ''
       comment.value = ''
       likeIcon.innerHTML = `<i class="far fa-heart"></i>`
       positiveFeedback = false
   }
   
   function addFeedback(item){
       // select first letter of the user name
       const letter = (item.userName).charAt(0)
       // create new div
       const div = document.createElement('div')
       // add class
       div.classList = 'comment__card'
       // add id
       div.id = item.id 
       // add html
       div.innerHTML = `
       <div class="pic center__display">
                       ${letter}
                   </div>
                   <div class="comment__info">
                       <small class="nickname">
                           ${item.userName}
                       </small>
                       <p class="comment">
                           ${item.userComment}
                       </p>
                       <div class="comment__bottom">
                           <div class="heart__icon--comment">
                               ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                           </div>
                           <button>
                               Reply
                           </button>
                       </div>
                   </div>
       `
       // insert feedback into the list
       commentsCont.insertAdjacentElement('beforeend', div)
   }
   







  

      const thoughts = [
          "Life is like a camera, focus on the good times, develop from the negatives, and if things don't work out, take another shot.",
          "Happiness is not something ready-made. It comes from your own actions.",
          "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          "Believe you can and you're halfway there.",
          "The only way to do great work is to love what you do.",
          "It does not matter how slowly you go as long as you do not stop."
        ];
        
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        const randomThought = thoughts[randomIndex];
        
        const footerElement = document.getElementById("footer");
        
        if (footerElement) {
          footerElement.innerHTML = randomThought;
        } else {
          console.error("Could not find footer element.");
        }
        
      