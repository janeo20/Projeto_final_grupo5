import { React, useState} from 'react';
import '../quartos/Quartos.css';
import banheira from '../img/quarto 1/banheira_quarto1.jpg'
import cama from '../img/quarto 1/cama_quarto1.jpg'
import rede from '../img/quarto 1/rede_quarto1.jpg'
import vista from '../img/quarto 1/vista_quarto1.jpg'
import banheira2 from '../img/quarto 2/banheira_quarto2.jpg'
import cama2 from '../img/quarto 2/cama_quarto2.jpg'
import rede2 from '../img/quarto 2/rede_quarto2.jpg'
import vista2 from '../img/quarto 2/vista_quarto2.jpg'
import banheira3 from '../img/quarto 3/banheira_quarto3.jpg'
import cama3 from '../img/quarto 3/cama_quarto3.jpg'
import rede3 from '../img/quarto 3/rede_quarto3.jpg'
import vista3 from '../img/quarto 3/vista_quarto3.jpg'
import banheira4 from '../img/quarto 4/banheira_quarto4.jpg'
import cama4 from '../img/quarto 4/cama_quarto4.jpg'
import rede4 from '../img/quarto 4/rede_quarto4.jpg'
import vista4 from '../img/quarto 4/vista_quarto4.jpg'
import banheira5 from '../img/quarto 5/banheira_quarto5.jpg'
import cama5 from '../img/quarto 5/cama_quarto5.jpg'
import rede5 from '../img/quarto 5/rede_quarto5.jpg'
import vista5 from '../img/quarto 5/vista_quarto5.jpg'
import academia from '../icons/academia.png'
import massagem from '../icons/massagem.png'
import piscina from '../icons/piscina.png'
import restaurante from '../icons/restaurante.png'
import wifi from '../icons/wifi.png'
import {
  MDBCarousel,
  MDBCarouselItem,  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
 } from 'mdb-react-ui-kit';

 function Quartos() {

 
  return (
    <>
    <h1>Acomodações</h1>
    <p>varias acomodaçoes</p>
    <br/>

    
    <br/>

    <div className='container'>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Quarto Mantiqueira</MDBCardTitle>
        <MDBCardText>
       
Este Quarto possui piscina climatizada, banheira de hidromassagem, lareira, ventilador de teto, frigobar, ofurô no deck, sauna privativa e mini adega de vinhos.
        </MDBCardText>
       </MDBCardBody>
    </MDBCard>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='img-carousel'
        itemId={1}
        src={banheira2}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={2}
        src={cama2}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={3}
        src={rede2}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={4}
        src={vista2}
        alt='...'
      />
      </MDBCarousel>
    </div>
     
    <br/>

    <div className='container'>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='img-carousel'
        itemId={1}
        src={banheira3}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={2}
        src={cama3}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={3}
        src={rede3}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={4}
        src={vista3}
        alt='...'
      />
      </MDBCarousel>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Quarto Lua de Minas</MDBCardTitle>
        <MDBCardText>
        O chalé possui ofurô, banheira de hidromassagem, sauna privativa, lareira, TV a cabo, frigobar, mini adega de vinhos, ventilador de teto, varanda com rede. 
        </MDBCardText>
       </MDBCardBody>
    </MDBCard>
    </div>

    <br/>

    <div className='container'>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Quarto Lua Cheia</MDBCardTitle>
        <MDBCardText>
        O Quarto fica mais no alto e possui cama king, hidromassagem para casal, lareira, frigobar, TV a cabo “Oi”, DVD, ventilador de teto, mini adega de vinhos, varanda com rede e vista para Pedra Selada. 
        </MDBCardText>
       </MDBCardBody>
    </MDBCard>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='img-carousel'
        itemId={1}
        src={banheira4}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={2}
        src={cama4}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={3}
        src={rede4}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={4}
        src={vista4}
        alt='...'
      />
      </MDBCarousel>
    </div>

    <br/>

    <div className='container'>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='img-carousel'
        itemId={1}
        src={banheira5}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={2}
        src={cama5}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={3}
        src={rede5}
        alt='...'
      />
      <MDBCarouselItem
        className='img-carousel'
        itemId={4}
        src={vista5}
        alt='...'
      />
      </MDBCarousel>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Quarto Alpino - Aurora</MDBCardTitle>
        <MDBCardText>
        O quarto possui cama queen, hidromassagem para casal, lareira, frigobar, TV a cabo “Oi”, DVD, ventilador de teto, mini adega de vinhos, varanda com vista para Pedra Selada. 
        </MDBCardText>
       </MDBCardBody>
    </MDBCard>
    </div>

    <br/>


    <h2> Serviços e facilidades</h2>
    <div className='container'>
    
        
        <div class="icon col-3" >
        <img src={wifi} />
        <p>Wi-fi por Toda
          a pousada</p>
        </div>
        <div class="icon col-3" >
        <img src={academia} />
        <p>academia</p>
        </div>
        <div class="icon col-3" >
        <img src={massagem} />
        <p>massagens</p>
        </div>
        <div class="icon col-3" >
        <img src={piscina} />
        <p>piscina climatizada</p>
        </div>
        <div class="icon col-3" >
        <img src={restaurante} />
        <p>restaurante</p>
        </div>
    
        
    </div>

    <br/>

    <div className='hospedagem'>
        <div className='content'>
            <div className='valores-hospedagem'>
                <div className='capacidade'>
                    <h3>Finais de semana</h3>
                    <h4>hospedagem com check-in de sexta à sabados e feriados</h4>
                    <div className='title-valor'>"DIÁRIA PARA"
                        <strong> DUAS PESSOAS</strong>
                    </div>
                    <div className='valor'>R$970,00</div>
                    <h3 >Dias de semana</h3>
                    <h4>Hospedagem com check-in de domingo á quinta-feira</h4>
                    <div className='title-valor'>"DIÁRIA PARA"
                        <strong> DUAS PESSOAS</strong>
                    </div>
                    <div className='valor'>R$850,00</div>
                </div>

                <div className='servicos-valores'>
                    <div className='text'>
                        <span className='icon'>::before</span>
                        <div className='text-hosp-item'> HÓSPEDE ADICIONAL</div>
                        <p>
                            <b>R$120,00</b>
                            "POR DIA"
                        </p>
                    </div>

                    <div className='text'>
                        <span className='icon'>::before</span>
                        <div className='text-hosp-item'> Crianças até 6 anos</div>
                        <p>
                            <b>R$0,00</b>
                            "(NÃO PAGAM)"
                        </p>
                    </div>

                    <div className='text'>
                        <span className='icon'>::before</span>
                        <div className='text-hosp-item'> PET DE PEQUENO E MÉDIO PORTE</div>
                        <p>
                            <b>R$120,00</b>
                            "POR PET"
                        </p>
                    </div>

                    <div className='text-hosp-min'>
                        <span className='icon'> :: before </span>
                        <div className='text-hosp-item'> HOSPEDAGEM MÍNIMA DE DUAS NOITES </div>
                        <div className='btn-reservar'>
                             <a href='#' target="_blank">
                                Reservar pelo whats
                             </a>
                         </div>
                    </div>
                </div>
            </div>

            <div className='text-hospedagem'>
                <h3> Reservas </h3>
                <h4> Devido a alta demanda de reservas recomendamos que você garanta a sua data com a máximo de antecedência</h4>
                <div>
                    <ul>
                        <li>
                            <span className='icon'> ::before </span>
                            <h5>
                                Todas as reservas são realizadas pelo
                                <strong> whatsap 92382636</strong>
                                .
                            </h5>
                        </li>
                        <li>
                        <span className='icon'> ::before </span>
                            <h5>
                                Todas as reservas são realizadas pelo
                                <strong> whatsap 92382636</strong>
                                .
                            </h5>
                        </li>
                    </ul>
                </div>
                <div className='duvidas'>
                    <h4>
                        <strong > Ficou com dúvida </strong>
                        Não deixe de entrar em contato conosco
                        <a href=''> clicando aqui.</a>
                    </h4>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default Quartos;