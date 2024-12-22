import react from "react";
import Header from "../../components/header/header";
import './stylesCnc.css';
import video from '../../assets/batman.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Form from 'react-bootstrap/Form';


function Contato() {
    return (<>
        <Header></Header>
        <div className="contact-form-container">
            <div className="contact-form-content">
                <div className="photo banner-1"></div>


                <div className="form-content">
                    <div className="form-title">
                        <h1>
                            Fale Conosco
                        </h1>
                        <div className="divider" id="form-divider"></div>
                    </div>
                    <p className="form-description"> Mande sua dúvida, solicitação de orçamento ou comentário. Te responderemos
                        em breve!</p>

                    <Form className="form-inputs">
                        <Form.Group className=" first-inputs" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" className="user-input" placeholder="Nome" />
                            <Form.Control type="email" className="user-input" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3 other-inputs " controlId="exampleForm.ControlInput1" >
                            <Form.Control type="number" className="user-input" placeholder="Celular" />
                        </Form.Group>
                        <Form.Group className="mb-3 other-inputs" controlId="exampleForm.ControlTextarea1" >

                            <Form.Control as="textarea" className="user-input" rows={3} id='user-message' />
                        </Form.Group>

                        <button className="submit-button">Submit</button>

                    </Form>

                </div>



            </div>

        </div>

        <Footer></Footer>

    </>



    )
}

export default Contato