import Color from "../components/Color";
import Header from "../components/Header";
import Button from "../components/Button";
import Typography from "../components/Typography";


function Home() {
    return (
        <div className="container">
            <Header />
            <main>
                <Color />
                <Typography />
                <Button />
            </main>
        </div>
    )
}

export default Home;