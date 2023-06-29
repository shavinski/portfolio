import './Projects.css'

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className='projects-container'>
                <div className='projects-title title'>
                    My Work
                </div>

                <div className='projects-cards-container'>
                    <div className='project-card'>
                        <div className='project-image'>
                            <img src='https://eletiofe.com/wp-content/uploads/2022/12/339872-twitter-blue-explained-what-is-it-how-much-does-it-cost.jpg' alt='lots of blue chips with checkmarks'></img>
                        </div>
                        <div class="project-body">
                            <h2>Warbler</h2>
                            <p>A twitter clone.</p>
                            <div className='link-container'>
                                <a class="link-github">
                                    Code
                                </a>
                                <a class="link-site">
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects-cards-container'>
                    <div className='project-card'>
                        <div className='project-image'>
                            <img src='https://getfive.com/wp-content/uploads/2019/08/job-searching.jpg' alt='person filing out resume, job search occurring'></img>
                        </div>
                        <div class="project-body">
                            <h2>Jobly</h2>
                            <p>A job searching app.</p>
                            <div className='link-container'>
                                <a class="link-github">
                                    Code
                                </a>
                                <a class="link-site">
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects