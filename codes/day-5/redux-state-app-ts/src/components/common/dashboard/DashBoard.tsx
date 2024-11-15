const DashBoard = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TASK MANAGEMENT SYSTEM</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tasks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add Task</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default DashBoard