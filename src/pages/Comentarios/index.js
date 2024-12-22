import react from "react";
import Header from "../../components/header/header";
import './stylesComments.css';
import Footer from "../../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

function Comentario() {
    return (<>
        <Header></Header>

        <div className="contact-form-container">
            <div className="comentarios-content">


                <div className="form-content">
                    <div className="form-title">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" />
                        <h1>
                            Comentarios sobre o filme!
                        </h1>

                    </div>



                </div>




            </div>
            <div className="comments-container">
                <div className="cards-container">
                    <Card className=" card-comment">

                        <Card.Img src="https://media.istockphoto.com/id/1389361465/pt/foto/profile-portrait-of-smiling-black-man-in-studio.jpg?s=2048x2048&w=is&k=20&c=1RfG9JqDkfhDmxa0eRJF9PsEAj1IQmJzH-9jBdeW3us="
                            className="card-img-top imgIcon" alt="..." />

                        <Card.Body >


                            <Card.Title className="card-title"> Jose Cardoso
                            </Card.Title>
                            <p className="card-text">   <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" /> With supporting text below
                                as a natural lead-in to additional content.    <FontAwesomeIcon icon={faQuoteRight} className="quoteIcon" /></p>


                        </Card.Body>
                    </Card>
                    <Card className=" card-comment">

                        <Card.Img src="https://media.istockphoto.com/id/1295120027/pt/foto/studio-portrait-of-18-year-old-woman-with-brown-hair.jpg?s=2048x2048&w=is&k=20&c=1ml08P-Kf6lEg-Ucf18Bgt8hi4sRrhBiALVQmUH-_AE="
                            className="card-img-top imgIcon" alt="..." />
                        <Card.Body >


                            <Card.Title className="card-title"> Vanessa Lima
                            </Card.Title>
                            <p className="card-text">   <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" /> With supporting text below
                                as a natural lead-in to additional content.    <FontAwesomeIcon icon={faQuoteRight} className="quoteIcon" /></p>


                        </Card.Body>
                    </Card>
                    <Card className=" card-comment">

                        <Card.Img src="https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482_960_720.jpg"
                            className="card-img-top imgIcon" alt="..." />

                        <Card.Body className="card-body ">


                            <Card.Title className="card-title"> Lucas Alves
                            </Card.Title>
                            <p className="card-text">   <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" /> With supporting text below
                                as a natural lead-in to additional content.    <FontAwesomeIcon icon={faQuoteRight} className="quoteIcon" /></p>


                        </Card.Body>
                    </Card>
                    <Card className="card-comment">

                        <Card.Img src="https://media.istockphoto.com/id/2149366762/pt/foto/contemplative-graceful-profile-with-quiet-confidence.jpg?s=2048x2048&w=is&k=20&c=nFwPp3GLmB1s2OAv62TXNgZXurHgNj3nfVder3m9RRQ="
                            className="card-img-top imgIcon" alt="..." />

                        <Card.Body className="card-body ">


                            <Card.Title className="card-title"> Maria Silva
                            </Card.Title>
                            <p className="card-text">   <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" /> With supporting text below
                                as a natural lead-in to additional content.    <FontAwesomeIcon icon={faQuoteRight} className="quoteIcon" /></p>


                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>


        <Footer></Footer>

    </>



    )
}

export default Comentario