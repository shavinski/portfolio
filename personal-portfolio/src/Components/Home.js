import './Home.css'

function Home() {
    return (
        <section className="home" id="home">
            <div className="container-main">

                <div className='container-pf'>
                    <div className='profile-photo'></div>
                </div>

                <div className="container-info">
                    {/* <div><h4>Welcome to my portfolio!</h4></div> */}
                    <div><p className='name'>Hi, I'm Jakob Shavinski</p></div>
                    <div><p className='intro'>I am a front end engineer with a passion for learning and exploring new technologies.</p></div>
                </div>

                <div className='container-connect'>
                    <div className='connect'>
                        <a href="#contact">
                            Lets Connect<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </a>
                    </div>
                </div>

                <div className='container-socials'>
                    <div className='socials'>
                        <a target='blank' href="https://www.linkedin.com/in/jakob-shavinski-41452b179/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                    <div className='socials'>
                        <a target='blank' href="https://github.com/shavinski">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Home