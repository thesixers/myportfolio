import react from '/src/assets/react.svg'

export const userProfile = {
    id: 1,
    name: 'Nnamdi Joe Amaga',
    phone: '+2347012345678',
    status: 'Online',
    profilePicture: "../assets/NA's icon.jpeg",
    bio: 'A backend developer specializing in building efficient, secure, and scalable systems. With expertise in Node.js and Python, I enjoy solving complex problems and creating tools that power exceptional user experiences.',
    email: "nnamdiamaga2k20@gmail.com",
    skill: [ 
        {name: 'html', icon: 'html.png'}, 
        {name: 'css', icon: 'css.png'}, 
        {name: 'javascript', icon: 'javascript.png'},
        {name: 'react', icon: react}, 
        {name: 'express', icon: 'express.png'}, 
        {name: 'nodejs', icon: 'nodejs.png'}, 
        {name: 'mongodb', icon: 'mongodb.png'}, 
        {name: 'git', icon: 'git.png'}, 
        {name: 'socket.io', icon: 'sockectio.png'}
    ],
    projects: [
        {name: 'Gx Movies', description: '', repo: 'https://github.com/thesixers/movies-site', link: 'https://movies-site-4woj.onrender.com', logo: ''},
        {name: 'The WebToon Project', description: '', repo: 'https://github.com/thesixers/twp2', link: 'https://thewebtoonproject.com/', logo: '/twp_logo.jpg'},
    ],
    cv: '/cv.docx',
    socials: [
        // {name: 'linkden', link: 'https://www.linkedin.com/in/nnamdi-amaga-2944bb274/'},
        {name: 'facebook.png', link: 'https://www.facebook.com/joejnr123/'},
        {name: 'github.png', link: 'https://github.com/thesixers'},
        {name: 'twitter.svg', link: ''},
        {name: 'gmail.png', link: 'nnamdiamaga2k20@gmail.com'}
    ]
};