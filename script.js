const projects=[
{id:1,title:'Academic Staff Union of Universities Complex',location:'Olabisi Onabanjo University, Ago-Iwoye, Ogun State',category:'institutional',categoryLabel:'Institutional',description:'A comprehensive academic union complex presented through site planning, floor plans, roof plan, sections, elevations, schedules, entrance details and three-dimensional views.',slides:[9,10,11,12,13]},
{id:2,title:'Professor Idowu Sobowale International School of Mass Communication',location:'Caleb University, Imota, Lagos State',category:'educational',categoryLabel:'Educational',description:'A multi-level school of communication development documented with floor plans, roof plan, sections, elevations and construction-site photographs.',slides:[14,15,16,17,18]},
{id:3,title:'Commercial Complex',location:'Abeokuta, Ogun State',category:'commercial',categoryLabel:'Commercial',description:'A multi-storey commercial development with site plan, floor plans, sections, elevations, three-dimensional presentation and site photographs.',slides:[19,20,21,22,23]},
{id:4,title:'Caleb International College School Complex',location:'Abijo, Lagos State',category:'educational',categoryLabel:'Educational',description:'A major school complex presented through site planning, multi-floor layouts, roof plan, sections, elevations, entrance view and three-dimensional studies.',slides:[24,25,26,27,28]},
{id:5,title:'Caleb University Cafeteria',location:'Imota, Lagos State',category:'educational',categoryLabel:'Educational',description:'A university cafeteria project documented with its principal floor and roof plans, sections, elevations and three-dimensional views.',slides:[29,30,31,32]},
{id:6,title:'Law College Building Extension',location:'Caleb University, Magodo Campus, Lagos State',category:'educational',categoryLabel:'Educational',description:'A multi-storey extension to the Law College, including site plan, floor plans, roof plan, section and elevations.',slides:[33,34,35]},
{id:7,title:'Hanushi Factory',location:'Sagamu, Ogun State',category:'industrial',categoryLabel:'Industrial',description:'An industrial factory development with extensive site and floor planning, roof plans, sections and multiple elevations.',slides:[36,37,38,39,40,41]},
{id:8,title:'Residential Development I',location:'Abeokuta, Ogun State',category:'residential',categoryLabel:'Residential',description:'A substantial residential development featuring basement, ground and upper-floor plans, roof plan, sections and comprehensive elevations.',slides:[42,43,44,45]},
{id:9,title:'Residential Development II',location:'Abeokuta, Ogun State',category:'residential',categoryLabel:'Residential',description:'A residential scheme with site plan, floor plans, roof plan, sections, elevations and a coordinated gatehouse design.',slides:[46,47,48,49,50]},
{id:10,title:'Residential Development III',location:'Abeokuta, Ogun State',category:'residential',categoryLabel:'Residential',description:'A private residential development documented through site planning, ground and upper-floor layouts, roof plan, sections and elevations.',slides:[51,52,53]},
{id:11,title:'Palace Development',location:'Lagos State',category:'residential',categoryLabel:'Residential / Cultural',description:'A palace development comprising the main building and gatehouse, presented through site plan, floor plans, roof plan, sections and elevations.',slides:[54,55,56,57]}
];

const profiles={
  oriola:{
    name:'Arc. Oriola Ayotunde Olusegun',role:'Founder & Principal Architect',credentials:'FNIA',portrait:'assets/team/oriola-ayotunde-olusegun.jpg',initials:'AO',
    bio:'An accomplished architect, practice leader and academic with decades of professional experience. After architectural training at Ogun State Polytechnic and Ahmadu Bello University, Zaria, he built early professional experience at AIC Ltd before establishing Segun Oriola & Associates in Abeokuta. His career combines architectural practice, project delivery and architectural education.',
    specialties:['Architectural Design','Project Delivery','Construction Supervision','Institutional Projects','Academic Leadership'],
    details:[
      {title:'Education',text:'HND Architecture, Ogun State Polytechnic, Abeokuta (1986); further architectural studies at Ahmadu Bello University, Zaria, including B.Sc. and M.Sc. Architecture.'},
      {title:'Practice Experience',text:'Professional work has included AIC Ltd and the establishment of Segun Oriola & Associates, with project experience across healthcare, institutional, commercial, residential and civic developments.'},
      {title:'Selected Institutional Experience',text:'The supplied profile identifies work and clients including Federal Medical Centre, Abeokuta; Neuropsychiatric Hospital, Abeokuta; Federal College of Education, Abeokuta; Caleb University; and Olabisi Onabanjo University.'},
      {title:'Academic Contribution',text:'The profile records a long-standing academic role at Olabisi Onabanjo University, including departmental leadership and the supervision and development of younger architects.'}
    ],work:[]
  },
  ajayi:{
    name:'Prof. Arc. Oluwole Oluwaseun Ajayi',role:'Architect, Academic & Construction Ergonomics Specialist',credentials:'M.Tech (LAU), Ph.D (UJ), MNIA, ARCON Reg., ICIoB (UK), Pr.Arch (SA), ANIsafetyE, FIPMD',portrait:'assets/team/oluwole-oluwaseun-ajayi.jpg',initials:'OA',
    bio:'A distinguished architect and academic whose work bridges architecture, buildability and space ergonomics, construction project procurement and management, policy and industry innovation. His professional profile highlights a focus on sustainable materials and regenerative architecture alongside consultancy and contract-administration responsibilities from project start-up to commissioning.',
    specialties:['Construction Ergonomics','Buildability','Space Ergonomics','Project Procurement','Sustainable Architecture','Contract Administration'],
    details:[
      {title:'Advanced Training',text:'Certificate in Practical Project Management, Cum Laude (Distinction), Nelson Mandela Metropolitan University, South Africa (2007); Ph.D in Engineering Management with specialization in Architecture and Construction Ergonomics, University of Johannesburg, South Africa (2013).'},
      {title:'Professional Registration & Memberships',text:'The supplied profile lists ARCON, the Nigerian Institute of Architects, South African Council for the Architectural Profession, Incorporated Chartered Institute of Building (UK), Nigeria Institution of Safety Engineers and the Institute of Policy Management and Development.'},
      {title:'Consultancy Reach',text:'Consultancy experience is identified across Nigeria, South Africa and Namibia, with responsibilities spanning design facilitation, construction, procurement and contract administration.'},
      {title:'Project Sectors',text:'Residential, commercial, religious and industrial buildings, with an emphasis on construction architecture, sustainable material choices and coordinated project delivery.'}
    ],
    work:[
      {src:'assets/team/ajayi-shopping-mall-01.jpg',caption:'Proposed Adegbayi Shopping Mall'},
      {src:'assets/team/ajayi-shopping-mall-02.jpg',caption:'Proposed shopping mall — exterior visualization'}
    ]
  },
  ayoola:{
    name:'Arc. Alade Olamide Ayoola',role:'Architectural Designer & Project Coordinator',credentials:'B.Tech (FUTA)',portrait:'assets/team/alade-olamide-ayoola.jpg',initials:'AA',
    bio:'A creative problem-solver who combines artistic vision with technical knowledge, strong listening skills and practical project management. His consultancy experience includes architectural design, construction and interior design, together with project and contract administration from start-up through commissioning.',
    specialties:['Architectural Design','Construction','Interior Design','Project Coordination','Contract Administration'],
    details:[
      {title:'Education',text:'Bachelor of Technology (B.Tech), Federal University of Technology, Akure (2017).'},
      {title:'Design & Delivery',text:'Experience includes architectural design, construction and interior design, with involvement in project and contract administration through the commissioning stage.'},
      {title:'Building Types',text:'The supplied profile identifies experience across residential, commercial, religious and industrial building projects.'},
      {title:'Professional Approach',text:'Combines creative problem-solving, technical discipline, listening skills and practical project-management awareness in consultancy work.'}
    ],
    work:[
      {src:'assets/team/ayoola-laboratory.jpg',caption:'Proposed Laboratory'},
      {src:'assets/team/ayoola-petrol-station.jpg',caption:'Proposed Petrol Station'},
      {src:'assets/team/ayoola-duplex.jpg',caption:'Proposed 4-bedroom Duplex'},
      {src:'assets/team/ayoola-hotel-reception.jpg',caption:'Proposed Interior Design — University of Ibadan Hotel Reception'}
    ]
  },
  ojelade:{
    name:'Ojelade Oluwasegun',role:'Architectural Designer & Documentation Specialist',credentials:'B.Sc. (Lead City University, 2026), HND, OND (Architecture)',portrait:null,initials:'OO',
    bio:'An architectural designer with experience in architectural documentation, design presentation and construction-site inspection. His work includes detailed drawings, technical specifications, architectural presentations and working drawings, with a collaborative approach to translating design intentions into clear, buildable documentation.',
    specialties:['Architectural Documentation','Working Drawings','Site Inspection','3D Visualisation','Technical Specifications','Team Coordination'],
    details:[
      {title:'Education',text:'B.Sc., Lead City University (2026); HND Architecture (2017–2019) and OND Architecture (2014–2016), Moshood Abiola Polytechnic.'},
      {title:'Professional Experience',text:'Architectural design work with Segun Oriola Associate; Archroute Limited (2019–2021); NYSC Clerk of Work, Works and Service Department, College of Education, Akamkpa, Cross River State (2021–2022); Ministry of Housing, Alausa, Ikeja internship (2016–2017).'},
      {title:'Core Responsibilities',text:'Detailed drawings and technical specifications, design presentations, working drawings, construction quality inspections, checking compliance with building plans, site inspection and progress documentation.'},
      {title:'Technical Tools',text:'AutoCAD, SketchUp, Revit Architecture, V-Ray, Lumion and Adobe Photoshop, with additional skills in Adobe Illustrator, InDesign and Premiere Pro.'}
    ],work:[]
  }
};

const grid=document.getElementById('projectsGrid');
const modal=document.getElementById('projectModal');
const gallery=document.getElementById('modalGallery');
let activeImages=[],activeIndex=0;
const src=n=>`assets/projects/slide-${String(n).padStart(2,'0')}.jpg`;

function render(filter='all'){
  grid.innerHTML='';
  projects.filter(p=>filter==='all'||p.category===filter).forEach(p=>{
    const a=document.createElement('article');
    a.className='project-card reveal visible';
    a.innerHTML=`<div class="project-cover"><img loading="lazy" src="${src(p.slides[p.slides.length-1])}" alt="${p.title}"></div><div class="project-info"><span class="project-tag">${p.categoryLabel}</span><h3>${p.title}</h3><p>${p.location}</p></div>`;
    a.onclick=()=>openProject(p);grid.appendChild(a);
  });
}
function openProject(p){
  document.getElementById('modalCategory').textContent=p.categoryLabel;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalMeta').textContent=p.location;
  document.getElementById('modalDescription').textContent=p.description;
  gallery.innerHTML='';
  activeImages=p.slides.map((n,i)=>({src:src(n),caption:`${p.title} — portfolio sheet ${i+1} of ${p.slides.length}`}));
  activeImages.forEach((im,i)=>{const f=document.createElement('figure');f.innerHTML=`<img loading="lazy" src="${im.src}" alt="${im.caption}"><figcaption>${im.caption}</figcaption>`;f.onclick=()=>openLightbox(i);gallery.appendChild(f)});
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
document.querySelectorAll('[data-close]').forEach(x=>x.onclick=closeModal);
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});

const profileModal=document.getElementById('profileModal');
const profilePortrait=document.getElementById('profilePortrait');
const profileRole=document.getElementById('profileRole');
const profileName=document.getElementById('profileName');
const profileCredentials=document.getElementById('profileCredentials');
const profileBio=document.getElementById('profileBio');
const profileSpecialties=document.getElementById('profileSpecialties');
const profileDetails=document.getElementById('profileDetails');
const profileWork=document.getElementById('profileWork');
const profileWorkGrid=document.getElementById('profileWorkGrid');

function openProfile(key){
  const p=profiles[key]; if(!p) return;
  profilePortrait.innerHTML=p.portrait?`<img src="${p.portrait}" alt="${p.name}">`:`<div class="profile-initials" aria-label="Portrait placeholder">${p.initials}</div>`;
  profileRole.textContent=p.role;profileName.textContent=p.name;profileCredentials.textContent=p.credentials;profileBio.textContent=p.bio;
  profileSpecialties.innerHTML=p.specialties.map(item=>`<span>${item}</span>`).join('');
  profileDetails.innerHTML=p.details.map(item=>`<section class="profile-detail-card"><h3>${item.title}</h3><p>${item.text}</p></section>`).join('');
  if(p.work.length){profileWork.hidden=false;profileWorkGrid.innerHTML=p.work.map(item=>`<figure><img loading="lazy" src="${item.src}" alt="${item.caption}"><figcaption>${item.caption}</figcaption></figure>`).join('')}else{profileWork.hidden=true;profileWorkGrid.innerHTML=''}
  profileModal.classList.add('open');profileModal.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');
  document.querySelector('.profile-close').focus();
}
function closeProfile(){profileModal.classList.remove('open');profileModal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
document.querySelectorAll('[data-profile]').forEach(btn=>btn.addEventListener('click',()=>openProfile(btn.dataset.profile)));
document.querySelectorAll('[data-profile-close]').forEach(x=>x.addEventListener('click',closeProfile));

const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImage'),lbCap=document.getElementById('lightboxCaption');
function openLightbox(i){activeIndex=i;lbImg.src=activeImages[i].src;lbCap.textContent=activeImages[i].caption;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}
function closeLightbox(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true')}
function move(d){activeIndex=(activeIndex+d+activeImages.length)%activeImages.length;openLightbox(activeIndex)}
document.querySelector('.lightbox-close').onclick=closeLightbox;document.querySelector('.lightbox-nav.prev').onclick=()=>move(-1);document.querySelector('.lightbox-nav.next').onclick=()=>move(1);lb.onclick=e=>{if(e.target===lb)closeLightbox()};

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLightbox();closeModal();closeProfile()}if(lb.classList.contains('open')&&e.key==='ArrowRight')move(1);if(lb.classList.contains('open')&&e.key==='ArrowLeft')move(-1)});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');toggle.onclick=()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
render();
