function Content() {
    return (
        <>
            <div className="btn-wrapper">
                <h1 className="btn-title">Buttons</h1>
                <div className="btn-list">
                    <div>
                        <div className="btn-item">
                            <button className="btn-darkblue btn">Get Started</button>
                            <p className="btn-text">Button 1 Idle</p>
                        </div>
                        <div className="btn-item">
                            <button className="btn-lightblue btn">Get Started</button>
                            <p className="btn-text">Button 1 Hover</p>
                        </div>
                    </div>
                    <div>
                        <div className="btn-item">
                            <button className="btn-grdorange-d btn">Get Started</button>
                            <p className="btn-text">Button 2 Idle</p>
                        </div>
                        <div className="btn-item">
                            <button className="btn-grdorange-l btn">Get Started</button>
                            <p className="btn-text">Button 2 Hover</p>
                        </div>
                    </div>
                    <div>
                        <div className="btn-item">
                            <button className="btn-grdpurple-d btn">Get Started</button>
                            <p className="btn-text">Button 3 Idle</p>
                        </div>
                        <div className="btn-item"> 
                            <button className="btn-grdpurple-l btn">Get Started</button>
                            <p className="btn-text">Button 3 Hover</p>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}


export default Content;