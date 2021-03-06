import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Service from "../../../../services/InscricaoService"
import Aux from "../../../../hoc/_Aux";
import { convertCurrencyUStoPT } from "../../../../helpers/convertCurrency"
import { convertDateUStoPT, getTimeSplited } from "../../../../helpers/convertDate"
import InscricaoService from "./../../../../services/InscricaoService"

import { Link } from 'react-router-dom'


class Index extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId,
            loggedUser: '',
            eventos: []
        }
    };


    UNSAFE_componentWillMount() {
        this.checkIsAuth()
        this.getInscricoesByUserId(this.state.userId)
    };

    checkIsAuth = async () => {
        if (localStorage.getItem('user_session')) {
            this.setState({ isAuthenticated: true })
            this.setState({ loggedUser: JSON.parse(localStorage.getItem('user_session')) })
        }
    }

    getInscricoesByUserId = async (userId) => {

        let idUsuarioLogado = JSON.parse(localStorage.getItem('user_session')).id

        if (parseInt(idUsuarioLogado) === parseInt(userId)) {
            try {
                let _eventos = await Service.getInscricoesByUserId(userId)
                this.setState({ eventos: _eventos.data })
            } catch (error) {
                if (error.response.status === 401) {
                    alert('sessão expirada deslogue e logue novamente pra funcionar')
                }
            }
        } else {
            window.location.href = `/meus-ingressos/${idUsuarioLogado}`
        }
    }

    desinscricaoEvento = async (e, eventoId) => {
        e.preventDefault()
        InscricaoService.desinscrever(eventoId, this.state.loggedUser.id).then((res) => {
            this.setState({ inscrito: false })
            this.getInscricoesByUserId(this.state.loggedUser.id)
        }).catch(error => {
            if (error.response.status === 401) {
                alert('sessão expirada deslogue e logue novamente pra funcionar')
            }
        })
    }


    render() {
        return (
            <Aux>
                <Row>
                    {this.state.eventos.length <= 0
                        ?
                        <div class="col-sm-12">
                            <div class="alert alert-primary" role="alert">
                                <p style={{ textAlign: 'center' }}>Você ainda não esta inscrito em nenhum evento - <a href="/" class="alert-link">HOME</a></p><br />
                                <label class="text-muted">O Portal de Eventos Acadêmicos PUC Minas objetiva ser espaço para que as diversas atividades
                                acadêmicas promovidas na universidade - Simpósios, Congressos, Seminários, Encontros, Semanas ou Jornadas Acadêmicas,
                                Conferências, Palestras e demais atividades.</label>
                            </div>
                        </div>
                        :
                        this.state.eventos.map((evento) => {
                            if (evento.publicado) {
                                return (
                                    <Col md={4} xl={3} key={evento.id}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Img src={evento.url_imagem ? evento.url_imagem : `${process.env.REACT_APP_FRONTEND_SERVER_URL}/images/evento-padrao-img.png`} />
                                                <h5 className="m-t-35">{evento.name}</h5>
                                                <span className="text-muted d-block m-b-30">{evento.detalhes}</span>
                                                <p className="border-top m-b-20 p-t-10 m-t-20"></p>
                                                <div className="row">
                                                    <div className="col">
                                                        <h5><b>Data:</b> {convertDateUStoPT(evento.data_inicio)} as {getTimeSplited(evento.data_inicio)}</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h5><b>Investimento:</b> {evento.gratuito ? 'GRATUITO' : evento.preco ? 'R$ ' + convertCurrencyUStoPT(evento.preco) : ''}</h5>
                                                    </div>
                                                </div>
                                                <div className="row m-t-30" style={{ marginTop: "30px auto 1px" }}>
                                                    <div className="col-6">
                                                        {this.state.isAuthenticated ? <button className="btn btn-danger text-uppercase btn-block" onClick={(e) => this.desinscricaoEvento(e, evento.evento_id)}>cancelar</button> : ""}
                                                    </div>
                                                    <div className="col-6">
                                                        <Link to={`../evento/${evento.id}`} className="btn text-uppercase border btn-block btn-outline-secondary">+ detalhes</Link>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        })}
                </Row>
            </Aux>
        );
    }
}

export default Index;




