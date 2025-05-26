const Notification = ({ errorMessage, acceptMessage }) => {
    if(errorMessage === null && acceptMessage === null)
            return null
    
    if(errorMessage === null)
        return (
            <div className = 'error'>
                {errorMessage}
            </div>
        )
    
    if(acceptMessage === null)
        return (
            <div className = 'accept'>
                {acceptMessage}
            </div>
        )
}

export default Notification