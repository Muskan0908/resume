import './Home.css';
import 'boxicons';
/*====================SHOW MENU =============================*/
// const showMenu = (toggleId, navId) =>{
//   let toggle = document.getElementById(toggleId);
//   let nav = document.getElementById(navId);
  
//   // Validate that variables exist
//   if(toggle && nav){
//       toggle.addEventListener('click', ()=>{
//           // We add the show-menu class to the div tag with the nav__menu class
//           nav.classList.toggle('show-menu');
//       })
//   }
// }
// showMenu('nav-toggle','nav-menu');

/*========================REMOVE MENU MOBILE ==================*/
// const navLink = document.querySelectorAll('.nav__link');

// const linkAction=()=>{
//     let navMenu = document.getElementById('nav-menu');
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));

const showMenu = (toggleId,navId) =>{
  let toggle = document.getElementById(toggleId);
  let nav = document.getElementById(navId);
  
  // Validate that variables exist
  if(toggle && nav){
               nav.classList.toggle('show-menu');
     
  }
}
const Home=({
    img,
    firstName,
    lastName,
    address,
    email,
    phone,
    linkedInUrl,
    gitHubUrl,
    instagramUrl,
    summary,
    ugTitle,
    ugName,
    ugYear,
    hsTitle,
    hsName,
    hsYear,
    sTitle,
    sName,
    sYear,
  experienceTitle,
  experienceCompany,
  experienceDesc,
  intern1Title,
  intern1Company,
  intern1Desc,
  intern2Title,
  intern2Company,
  intern2Desc,
  projectTitle,
  projectDesc,
  achievementTitle,
  achievementDesc,
  extraTitle,
  extraDesc}) =>{


    

     
    const linkAction=()=>{
        let navMenu = document.getElementById('nav-menu');
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
    }
let navLink = document.querySelectorAll('.nav__link');
  
navLink.forEach(n => n.addEventListener('click', linkAction));
 

  return (
    <div className="home">
    <div className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#home" className="nav__logo">Muskan</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="active-link nav__link ">
                  <i className="bx bx-home nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#summary" className="nav__link">
                <i className='bx bx-user nav__icon'></i>Summary
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                <i className='bx bxs-book-bookmark nav__icon'></i>Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                <i className='bx bx-receipt nav__icon' ></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                <i class='bx bxs-briefcase nav__icon' ></i>Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#internships" className="nav__link">
                <i className='bx bx-bulb nav__icon'></i>Internships
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                <i className='bx bxs-doughnut-chart nav__icon'></i>Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#achievements" className="nav__link">
                <i className='bx bx-trophy nav__icon'></i>Achievements
                </a>
              </li>
              <li className="nav__item">
                <a href="#curricular" className="nav__link">
                <i className='bx bx-trim nav__icon' ></i>Extra- Curricular Activities
                </a>
              </li> 
              <li className="nav__item">
                <a href="#languages" className="nav__link">
                <i className='bx bx-volume-low nav__icon' ></i>Languages
                </a>
              </li>
              <li className="nav__item">
                <a href="#interests" className="nav__link">
                <i className='bx bxs-cube-alt' ></i>Interests
                </a>
              </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt' onClick={()=>{showMenu('nav-toggle','nav-menu')}} ></i>
        </div>
      </nav>
    </div>
    <div className="l-main bd-container">
        <div className="resume">
            <div className="resume__left">
                {/* ======================HOME=========================== */}
                <section className="home" id="home">
                    <div className="home__container section bd-grid">
                        <div className="home__data bd-grid">
                            <img src={img} alt="Profile Pic" className="home__img"/>
                            <h1 className="home__title">{firstName}<b>{lastName}</b></h1>
                        </div> 
                        <div className="home__address bd-grid">
                            <span className="home__information">
                                <i className="bx bx-map home__icon"></i>{address}
                            </span>
                            <span className="home__information">
                                <i className="bx bx-envelope"></i>{email}
                            </span>
                            <span className="home__information">
                                <i className="bx bx-phone"></i>{phone}
                            </span>
                        </div>
                    </div>
                </section>

                {/* ======================SOCIAL================================== */}
                <section className="social section">
                    <h2 className="section-title">SOCIAL</h2>
                    <div className="social__container bd-grid">
                        <a href={linkedInUrl} target="_blank" rel="noreferrer" className="social__link">
                        <i className='bx bxl-linkedin-square social__icon' ></i>
                        </a>
                        <a href={gitHubUrl} target="_blank" rel="noreferrer" className="social__link">
                        <i className='bx bxl-github social__icon'></i>
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noreferrer" className="social__link">
                        <i className='bx bxl-instagram social__icon' ></i>
                        </a>
                    </div>
                </section>

                {/* ===================SUMMARY============================================= */}

                <section className="profile section" id="summary">
                    <h2 className="section-title">Summary</h2>
                    <p className="profile__description">{summary}</p>
                </section>

                {/* =====================EDUCATION=============================================== */}
                <section className="education section" id="education">
                    <h2 className="section-title">Education</h2>
                    <div className="education__container bd-grid">
                        <div className="education__content">
                            <div className="education__time">
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>
                            <div className="education__data bd-grid">
                                <h3 className="education__title">{ugTitle}</h3>
                                <span className="education__studies">{ugName}</span>
                                <span className="education__year">{ugYear}</span>
                            </div>
                        </div>

                        <div className="education__content">
                            <div className="education__time">
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>
                            <div className="education__data bd-grid">
                                <h3 className="education__title">{hsTitle}</h3>
                                <span className="education__studies">{hsName}</span>
                                <span className="education__year">{hsYear}</span>
                            </div>
                        </div>

                        <div className="education__content">
                            <div className="education__time">
                                <span className="education__rounder"></span>
                            </div>
                            <div className="education__data bd-grid">
                                <h3 className="education__title">{sTitle}</h3>
                                <span className="education__studies">{sName}</span>
                                <span className="education__year">{sYear}</span>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ==========================SKILLS======================================================= */}
                <section className="skills section" id="skills">
                  <h2 className="section-title">Skills</h2>
                  <div className="skills__content bd-grid">
                    <ul className="skills__data">
                      <li className="skills__name">
                        <span className="skills__circle"></span>Html
                      </li>
                      <li className="skills__name">
                        <span className="skills__circle"></span>CSS
                      </li>
                      <li className="skills__name">
                        <span className="skills__circle"></span>ReactJs
                      </li>
                      <li className="skills__name">
                        <span className="skills__circle"></span>Redux
                      </li>
                    </ul>

                    <ul className="skills__data">
                      <li className="skills__name">
                        <span className="skills__circle"></span>C/C++
                      </li>
                      <li className="skills__name">
                        <span className="skills__circle"></span>Java
                      </li>
                      <li className="skills__name">
                        <span className="skills__circle"></span>Python
                      </li>
                      
                    </ul>

                  </div>
                </section>

            </div>
            <div className="resume__right">

              {/* =========================EXPERIENCE======================================== */}
              <section className="experience section" id="experience">
                <h2 className="section-title">Experience</h2>
                <div className="experience__container bd-grid">
                  <div className="experience__content">
                    <div className="experience__time">
                      <span className="experience__rounder"></span>
                    </div>
                    <div className="experience__data bd-grid">
                      <h3 className="experience__title">{experienceTitle}</h3>
                      <span className="experience__company">{experienceCompany}</span>
                      <p className="experience__description">{experienceDesc}</p>
                    </div>
                  </div>
                </div>

              </section>

              {/* ========================INTERNSHIPS================================================= */}
              <section className="internship section" id="internships">
                <h2 className="section-title">Internships</h2>
                <div className="internship__container bd-grid">
                  
                  <div className="internship__content">
                    <div className="internship__time">
                      <span className="internship__rounder"></span>
                      <span className="internship__line"></span>
                    </div>
                    <div className="internship__data bd-grid">
                      <h3 className="internship__title">{intern1Title}</h3>
                      <span className="internship__company">{intern1Company}</span>
                      <p className="internship__description">{intern1Desc}</p>
                      <a className="internship__link" href="https://www.codespeedy.com/author/muskan_garg/">codespeedy.com/author/muskan_garg/</a>
                    </div>
                  </div>


                  <div className="internship__content">
                    <div className="internship__time">
                      <span className="internship__rounder"></span>
                    </div>
                    <div className="internship__data bd-grid">
                      <h3 className="internship__title">{intern2Title}</h3>
                      <span className="internship__company">{intern2Company}</span>
                      <p className="internship__description">{intern2Desc}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ===========================PROJECTSs======================================================== */}
              <section className="project section" id="projects">
              <h2 className="section-title">Project</h2>
                <div className="project__container bd-grid">
                  <div className="project__content">
                    <h3 className="project__title">{projectTitle}</h3>
                      <p className="project__description">{projectDesc}</p>
                      <a className="project__link" href="https://github.com/Muskan0908/rat-in-a-maze">https://github.com/Muskan0908/rat-in-a-maze</a>
                      <a className="project__link" href="https://rat-in-a-maze.netlify.app/">https://rat-in-a-maze.netlify.app/</a>
                  </div>
                  
                </div>
              </section>

              {/* ===========================ACHIEVEMENTS==================================================== */}

              <section className="achievemnt section" id="achievements">
                <h2 className="section-title">Achievement</h2>
                <div className="achievement__container bd-grid">
                  <div className="achievement__content bd-grid">
                    <h3 classname="achievement__title">{achievementTitle}</h3>
                    <p className="achievemt__description">{achievementDesc}</p>
                  </div>
                </div>
              </section>

                {/* =============================EXTRA CURRICULAR ACTIVITY=============================== */}

                <section className="extra section" id="curricular">
                <h2 className="section-title">Extra-Curricular Activity</h2>
                <div className="extra__container bd-grid">
                  <div className="extra__content bd-grid">
                    <h3 classname="extra__title">{extraTitle}</h3>
                    <p className="extra__description">{extraDesc}</p>
                  </div>
                </div>
              </section>

              {/* ============================LANGUAGES============================================= */}

              <section className="language section" id="languages">
                <h2 className="section-title">Languages</h2>

                <div className="language__container bd-grid">
                  <ul className="language__content bd-grid">
                    <li className="language__name">
                      <span className="language__circle"></span>English
                    </li>
                    <li className="language__name">
                      <span className="language__circle"></span>Hindi
                    </li>
                   </ul>
                </div>
              </section>

              {/* ========================INTERESTS========================================================== */}

              <section className="interests section" id="interests">
                <h2 className="section-title">Interests</h2>

                <div className="interests__container bd-grid">
                  <div className="interests__content">
                    <i class='bx bxs-cake interests__icon'></i>
                    <span className="interests__name">Baking</span>
                  </div>

                  <div className="interests__content">
                    <i class='bx bxs-cookie interests__icon'></i>
                    <span className="interests__name">Cooking</span>
                  </div>

                  <div className="interests__content">
                    <i class='bx bxs-plane-alt interests__icon'></i>
                    <span className="interests__name">Travel</span>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </div>
    <a href="#home" className="scrolltop" id="scroll-top">
      <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
    </a>
    </div>
  );
}

export default Home;
