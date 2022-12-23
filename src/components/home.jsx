import '../styles/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <div className="enter">
                <div className="left"><p>Lorem ipsum, dolor sit <br />
                    amet consectetur 
                    adipisicing <br/>elit. Tempore!</p>
                    <button>Subscribe Now</button></div>
                <div className="right">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1193/1431193-h-01e6c1350629" alt="" />
                </div>
            </div>
            <div className="movie">
                <img src="images/move1.webp" alt="" />
                    <img src="images/movie2.webp" alt="" />
                    <img src="images/movie3.webp" alt="" />
                    <img src="images/movie4.webp" alt="" />
                    <img src="images/movie5.webp" alt="" />
            </div>
        </div>
     );
}
 
export default Home;