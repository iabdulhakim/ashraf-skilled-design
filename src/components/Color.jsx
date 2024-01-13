function Color() {
    return (
        <div className="color-wrapper">
            <h1 className="color-title">Color</h1>
            <div className="color-list">
                <div className="color-item">
                    <img src="./light-blue.png" alt="" />
                    <h3 className="color-hex"><span>#</span>666CA3</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">102, 108, 163</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">234°, 25%, 52%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./dark-blue.png" alt="" />
                    <h3 className="color-hex"><span>#</span>13183F</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">19, 24, 63</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">233°, 54%, 16%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./grey.png" alt="" />
                    <h3 className="color-hex"><span>#</span>83869A</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">131, 134, 154</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">232°, 10%, 56%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./pink.png" alt="" />
                    <h3 className="color-hex"><span>#</span>F74780</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">247, 71, 128</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">341°, 92%, 62%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./light-pink.png" alt="" />
                    <h3 className="color-hex"><span>#</span>FFA7C3</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">255, 167, 195</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">341°, 100%, 83%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./white.png" alt="" />
                    <h3 className="color-hex"><span>#</span>FFFFFF</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">255, 255, 255</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">0°, 0%, 100%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./gradient-orange.png" alt="" />
                    <h3 className="color-hex"><span>#</span>F02AA6 - FF6F48</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">240, 42, 166 255, 111, 72</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">322°, 87%, 55% 13°, 100%, 64%</p>
                    </span>
                </div>
                <div className="color-item">
                    <img src="./gradient-purple.png" alt="" />
                    <h3 className="color-hex"><span>#</span>4851FF - F02AA6</h3>
                    <span className="color-rgb-wrapper">
                        <p className="color-rgb-rgb">RGB</p>
                        <p className="color-rgb">72, 81, 255 240, 42, 166</p>
                    </span>
                    <span className="color-hsl-wrapper">
                        <p className="color-hsl-hsl">HSL</p>
                        <p className="color-hsl">237°, 100%, 64% 322°, 87%, 55%</p>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Color;