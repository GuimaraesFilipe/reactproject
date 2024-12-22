import react from "react";
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer";


function Fotos() {
    return (<>
        <Header></Header>

        <h1>
            Galeria de Fotos
        </h1>

        <div className="gallery-container">
            <div className="gallery">
                <span style={{ "--i": "1" }}>
                    <img src="https://image.tmdb.org/t/p/w780/IYUD7rAIXzBM91TT3Z5fILUS7n.jpg" alt="" />
                </span>
                <span style={{ "--i": "2" }}>
                    <img src="https://images.wallpapersden.com/image/wxl-the-batman-official-2022-movie_81536.jpg" alt="" />
                </span>
                <span style={{ "--i": "3" }}>
                    <img src="https://images.wallpapersden.com/image/download/the-batman-2022-movie-4k_bWZuaW6UmZqaraWkpJRpZW5rrWdqa2k.jpg"
                        alt="" />
                </span>
                <span style={{ "--i": "4" }}>
                    <img src="https://image.tmdb.org/t/p/original/92JAHiydcR3azBDbJO859yuXes3.jpg" alt="" />
                </span>
                <span style={{ "--i": "5" }}>
                    <img src="https://th.bing.com/th/id/R.7b5eb92030ff296e0c0b0b5704c73e98?rik=AayHCxD151uTrA&pid=ImgRaw&r=0"
                        alt="" />
                </span>
                <span style={{ "--i": "6" }}>
                    <img src="https://th.bing.com/th/id/R.ed3547a075bdf5201e57cdce96ca9fdf?rik=1z6iX7m4GiqZig&pid=ImgRaw&r=0"
                        alt="" />
                </span>
                <span style={{ "--i": "7" }}>
                    <img src="https://th.bing.com/th/id/OIP.fN8LPCV6_naGV9-fscVnSwHaEo?rs=1&pid=ImgDetMain" alt="" />
                </span>
                <span style={{ "--i": "8" }}>
                    <img src="https://i1.sndcdn.com/artworks-ZeDWtsn1ef0gpToo-V0BU1A-t500x500.jpg" alt="" />
                </span>
            </div>
        </div>

        <div className="gallery-image">
            <div className="img-box">
                <img src="https://images.hdqwalls.com/download/the-batman-2022-movie-fanart-fh-1024x600.jpg" alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Library</p>
                        <p className="opacity-low">Architect Design</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://th.bing.com/th/id/OIP.MBmjCIP1JYd6FszEr2vKkwHaCe?rs=1&pid=ImgDetMain" alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Night Sky</p>
                        <p className="opacity-low">Cinematic</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/10/The-Joker-Killing-Joke-Cropped.jpg?q=50&fit=crop&w=825&dpr=1.5"
                    alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Tea Talk</p>
                        <p className="opacity-low">Composite</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://m.media-amazon.com/images/M/MV5BMjU5ZTI4NjYtNjg5OC00NjQwLTk4M2QtMDJlZDNmMGQyZDY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                    alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Road</p>
                        <p className="opacity-low">Landscape</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://th.bing.com/th/id/OIP.R29rZKA7pOzL1ZUsfLmkugHaEK?rs=1&pid=ImgDetMain" alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Sea</p>
                        <p className="opacity-low">Cityscape</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://th.bing.com/th/id/R.01cf1a49019e2ed0cf813ec2367f4a46?rik=cpXwrsCuizcOvg&pid=ImgRaw&r=0"
                    alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Vintage</p>
                        <p className="opacity-low">Cinematic</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://m.media-amazon.com/images/M/MV5BNTlhMmIxZWEtNzg5MC00M2U1LTk1YWQtMzVmOGE0ZGJkZDBjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                    alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Vintage</p>
                        <p className="opacity-low">Cinematic</p>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/10/To-The-Batman-Cropped.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
                    alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>Batman</p>
                        <p className="opacity-low">Note</p>
                    </div>
                </div>
            </div>
        </div>


        <Footer></Footer>

    </>



    )
}

export default Fotos