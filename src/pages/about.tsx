import React from 'react'

const About: React.FC = () => {

    return <div className="flex flex-col flex-wrap items-center mt-4 md:mt-8 gap-y-4">
            <h1 className="gap-4 text-lg font-bold sm:text-2xl font-display">This Guy:</h1>
            <div className="flex flex-wrap justify-center gap-2 px-4 divide-x">
                <p className="px-2">Journeyman SWE</p>
                <p className="px-2">Still in hobby discovery phase</p>
                <p className="px-2">Currently Watching One-Piece</p>
            </div>
            <div className="flex justify-center mt-4 gap-x-4 sm:gap-x-6 ">
                <a href="https://github.com/byronwong-dev/" className="flex items-center text-xl gap-x-4">
                    <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"></path></svg>
                    <div>
                        Github
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/byron-wong-580772116/" className="flex items-center text-xl gap-x-4">
                <svg className="w-8 h-8" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 310 310">
                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                </svg>
                <div>
                    Linkedin
                </div>
                </a>
            </div>
        </div>
}

export default About