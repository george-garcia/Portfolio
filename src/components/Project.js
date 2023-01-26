function Project({subheading, heading, tld, tags, description}){

    function renderTags(){
        return tags.map(tag => {
            return <p className={"tags"}>{tag}</p>
        })
    }

    return (
        <div className={"projects-helpDeskHero"}>
            <h6 className={"projects-subheading"}>{subheading}</h6>
            <div className={"projects-heading--container"}>
                <h2 className={"projects-heading"}>{heading}</h2>
                <span className={"projects-heading--tld"}>{tld}</span>
            </div>
            <p className="label">Technologies:</p>
            <div className={"projects-tags"}>
                {renderTags()}
            </div>
            <div>
                <p className="label">Actions:</p>
                <button className={"btn"}>Visit Website</button>
                <button className={"btn"}>View Code</button>
            </div>
            <p className="label">Description:</p>
            <p className={"projects-description"}>
                {description}
            </p>
        </div>
    );
}

export default Project;