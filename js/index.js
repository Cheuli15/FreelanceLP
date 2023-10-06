let myVar;

// Preloader functions
function contentLoader() {
  myVar = setTimeout(showPage, 5000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("my-Content").style.display = "block";
}

// sticky navigation bar
let navBar = document.querySelector('.nav-bar');
 let scrollposition = navBar.offsetTop;
  window.addEventListener('scroll', ()=>{
    if(window.screenY >= scrollposition){
      navBar.classList.add('fixed-top');
    } else {
      navBar.classList.remove('fixed-top');
    }
  });
  
  

// first page Frelancers image manipulatin up and down
const talentDetails = [
  {
    id: 0,
    image: 'images/a-tope1.png',
    name: 'Vladimir Oscar',
    skill: 'Software Developer',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.56934046897!2d30.203047754166477!3d50.402007501517694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sng!4v1694000859693!5m2!1sen!2sng',
    local: 'UKR',
    work: 'Google'
  },
  {
    id: 1,
    image: 'images/a-tope2.png',
    name: 'Putin Samuel',
    skill: 'Web Developer',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070396.664001759!2d3.3763021672673066!3d9.006759842043934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1694085305706!5m2!1sen!2sng',
    local: 'NG',
    work: 'Feedel'
  },
  {
    id: 2,
    image: 'images/a-tope3.png',
    name: 'David Oscar',
    skill: 'Product Manager',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380517.6495605694!2d-88.32282569047135!3d41.832730828780036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sng!4v1694085484416!5m2!1sen!2sng',
    local: 'US',
    work: 'Google'
  },
  {
    id: 3,
    image: 'images/a-tope4.png',
    name: 'Joe Daniel',
    skill: 'Project Manager',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423288.8962432608!2d-119.0026364972346!3d34.01963548570383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1694085552459!5m2!1sen!2sng',
    local: 'US',
    work: 'Amazon'
  },
  {
    id: 4,
    image: 'images/a-tope5.png',
    name: 'Trump victor',
    skill: 'Content Writer',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.54963527987!2d-122.73295005887285!3d37.75760299611907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1694085622512!5m2!1sen!2sng',
    local: 'US',
    work: 'EEF ILC'
  },
  {
    id: 5,
    image: 'images/a-tope6.png',
    name: 'Aiyegbokiti Tope',
    skill: 'Ui/Ux Designer',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070396.664001759!2d3.3763021672673066!3d9.006759842043934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1694085305706!5m2!1sen!2sng',
    local: 'NG',
    work: 'Dysney'
  }
];

// display image cards on Home Page
const talent = [...new Set(talentDetails.map((item)=>{ return item}))];

let c = 0;
 
  document.getElementById("fl-img-layout").innerHTML = talent.map((item)=>
  {
    let {image, name, skill, id} = item;
    return(
      "<div class='fl-img-column' data-id='${id}'  onclick='show("+(c++)+")'>" +
         ` <div>
            <img src="${image}" alt="${name}">
          </div>
          <h6> ${name} </h6>
          <p> <i class="bi bi-code"></i> ${skill} </p>
        </div> `

    )
  }).join('');




  let imgShow =[];
function show(c){
  imgShow.pop();
  imgShow.push({...talent[c]});
  
  document.getElementById('second-column-map').innerHTML = imgShow.map((item)=>
  {
    let {location, local, name, skill, work} = item;
    return(
      `
      <iframe src="${location}"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <h3>${name}, ${local}</h3>
    <p> <i class="bi bi-code"></i> ${skill} </p>
    <span> Previously at ${work}</span>
      `

    )
  });

  document.getElementById('second-column-img').innerHTML = imgShow.map((item)=>
  {
    let {image} = item;
    return(
      `
      <img src="${image}" alt=""  onload='slideLoader()' >
      `

    )
  });
  

}

// let slide;
// Image slider functions
// function slideLoader() {
   
//     slide = setTimeout(show, 500);
  

// };

