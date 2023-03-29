import "./Home.css"
import Curve from ".././general/curve/Curve"
function Home(){
    return(
        <div className="home">
            <div className="panner">
                <p >
                    Local Files
                </p>
                <p >
                     Hosting Service
                </p>
            </div>
          <Curve></Curve>
        </div>
    )
}
export default Home