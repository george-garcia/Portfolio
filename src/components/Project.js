function Project({subheading, heading, tld, tags, description, siteLink, gitLInk}){

    function renderTags(){
        return tags.map(tag => {
            return <p className={"tags"}>{tag}</p>
        })
    }

    return (
        <div className={"projects-component--container  "}>
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
                <a className={"btn"} href={siteLink} target={"_blank"}>Visit Website</a>
                <a className={"btn"} href={gitLInk} target={"_blank"}>View Code</a>
            </div>
            <p className="label">Description:</p>
            <p className={"projects-description"}>
                {description}
            </p>
        </div>
    );
}

export default Project;