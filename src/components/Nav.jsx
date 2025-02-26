

export default function Nav(props){
    const {currentNav, setCurrentNav} = props
    const navValues = ['Me', 'Projects', 'Skill', 'Contact']
    return(
        <div className="nav">
            {
                navValues.map((item, index) => {
                    return(
                        <a href={"#" + (item.toLowerCase())} key={index} 
                            className={' ' + ((currentNav === item) ? 'active-nav' : '')}
                            onClick={() => {setCurrentNav(item)}}
                        >
                            {item}
                        </a>
                    )
                })
            }
        </div>
    )
}