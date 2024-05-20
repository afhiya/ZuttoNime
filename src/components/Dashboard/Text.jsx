const Text = ({title,text}) => {
    return (
        <div>
            <h1 className="md:text-lg sm:text-md text-sm">{title}</h1>
            <h3 className="md:text-lg sm:text-md text-sm">{text}</h3>
        </div>
    )
}

export default Text