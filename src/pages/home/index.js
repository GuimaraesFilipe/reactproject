import react from "react";
import Header from "../../components/header/header";
import './styles.css';
import video from '../../assets/batman.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer";


function Home() {
    return (<>
        <Header></Header>
        <div id='banner'>
        </div>
        <div id='trailerContainer'>
            <div className="content">
                <video controls className="trailer">
                    <source src={video}></source>
                    Seu video nao foi encontrado
                </video>
                <div id='sinopse'>
                    <p class="description">From Warner Bros. Pictures comes Matt Reeves’ “The Batman,” starring Robert
                        Pattinson in the dual role of Gotham City’s vigilante detective and his alter ego, reclusive
                        billionaire Bruce Wayne. Starring alongside Pattinson (“Tenet,” “The Lighthouse”) as Gotham’s famous
                    </p>
                    <button class="button"> Comprar Ingresso</button>
                </div>
            </div>

        </div>
        <Cards></Cards>
        <Footer></Footer>

    </>



    )
}

export default Home