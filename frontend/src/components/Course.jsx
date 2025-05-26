const Parts = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            {parts.map(part =>
                <div key = {part.id}>
                    {part.name} {part.exercises}
                </div>
            )}
            <b>total of {total} exercises</b>
        </div>
    )
}

const Courses = ({courses}) => {
    return (
        <div>
            {courses.map(course => {
                return (
                    <div key = {course.id}>
                        <h2>{course.name}</h2>
                        <Parts parts = {course.parts}/>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Courses