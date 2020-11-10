import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { ValidationForm, TextInput, TextInputGroup, SelectGroup } from 'react-bootstrap4-form-validation';
import Service from "../../../services/EventosService"
import Aux from "../../../hoc/_Aux";
import { convertCurrencyPTtoUS, convertCurrencyUStoPT } from "../../../helpers/convertCurrency"

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            qtd_vagas: "",
            palestrante: "",
            url_imagem: "",
            detalhes: "",
            descricao: "",
            categoria: "",
            ativo: "",
            gratuito: "",
            preco: "",
            privado: "",
            cancelado: "",
            data_inicio: "",
            data_fim: "",
            prazo_inscricao: "",
        }
    };


    UNSAFE_componentWillMount() {
        this.getById()
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        var formData = {
            name: this.state.name,
            qtd_vagas: this.state.qtd_vagas,
            palestrante: this.state.palestrante,
            url_imagem: this.state.url_imagem,
            detalhes: this.state.detalhes,
            descricao: this.state.descricao,
            categoria: this.state.categoria,
            ativo: this.state.ativo,
            gratuito: this.state.gratuito,
            preco: this.state.preco,
            privado: this.state.privado,
            cancelado: this.state.cancelado,
            data_inicio: this.state.data_inicio,
            data_fim: this.state.data_fim,
            prazo_inscricao: this.state.prazo_inscricao
        }



        if (this.state.id === undefined) {
            Service.create(formData).then(() => {
                this.props.handleCloseCreate()
                this.props.getAll()
            }).catch((errors) => {
                this.showErrors(errors.response.data.errors)
            })
        }
        else {
            formData.id = this.state.id
            Service.update(formData).then(() => {
                this.props.handleCloseCreate()
                this.props.getAll()
            }).catch((errors) => {
                console.log(errors.response.data)
            })
        }
    }

    showErrors(errors) {
        console.log('Resolver aqui')
    }

    getById = () => {
        let id = this.props.id
        Service.getById(id).then((_dataReturned) => {
            this.setState({
                id: _dataReturned.data.id,
                name: _dataReturned.data.name,
                qtd_vagas: _dataReturned.data.qtd_vagas,
                palestrante: _dataReturned.data.palestrante,
                url_imagem: _dataReturned.data.url_imagem,
                detalhes: _dataReturned.data.detalhes,
                descricao: _dataReturned.data.descricao,
                categoria: _dataReturned.data.categoria,
                ativo: _dataReturned.data.ativo,
                gratuito: _dataReturned.data.gratuito,
                preco: _dataReturned.data.preco,
                privado: _dataReturned.data.privado,
                cancelado: _dataReturned.data.cancelado,
                data_inicio: _dataReturned.data.data_inicio,
                data_fim: _dataReturned.data.data_fim,
                prazo_inscricao: _dataReturned.data.prazo_inscricao
            })
        })
    }


    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">CADASTRO DE SERVIÇOS</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <ValidationForm onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="formServiceName">
                                                <Form.Label>Nome *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    defaultValue={this.state.name}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceQtdVagas">
                                                <Form.Label>Quantidade de Vagas *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="qtd_vagas"
                                                    placeholder="Quantidade de vagas"
                                                    defaultValue={this.state.qtd_vagas}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServicePalestrante">
                                                <Form.Label>Palestrante *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="palestrante"
                                                    placeholder="Palestrante"
                                                    defaultValue={this.state.palestrante}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceuUrlImagem">
                                                <Form.Label>Url da Imagem *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="url_imagem"
                                                    placeholder="Url da Imagem"
                                                    defaultValue={this.state.url_imagem}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceDetalhes">
                                                <Form.Label>Detalhes *</Form.Label>
                                                <TextInput
                                                    name="detalhes"
                                                    placeholder="Detalhes"
                                                    defaultValue={this.state.detalhes}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceCategoria">
                                                <Form.Label>Categoria *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="categoria"
                                                    placeholder="Categoria"
                                                    defaultValue={this.state.categoria}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceDescricao">
                                                <Form.Label>Descrição *</Form.Label>
                                                <TextInput
                                                    name="descricao"
                                                    placeholder="Descrição"
                                                    defaultValue={this.state.descricao}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceAtivo">
                                                <Form.Label>Ativo *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="ativo"
                                                    placeholder="Ativo"
                                                    defaultValue={this.state.ativo}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServiceGratuito">
                                                <Form.Label>Gratuito *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="gratuito"
                                                    placeholder="Gratuito"
                                                    defaultValue={this.state.gratuito}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formServicePrivado">
                                                <Form.Label>Privado *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="privado"
                                                    placeholder="Privado"
                                                    defaultValue={this.state.privado}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formServiceCancelado">
                                                <Form.Label>Cancelado *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="cancelado"
                                                    placeholder="Cancelado"
                                                    defaultValue={this.state.cancelado}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formServiceDataInicio">
                                                <Form.Label>Data Inicio *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="data_inicio"
                                                    placeholder="data_inicio"
                                                    defaultValue={this.state.data_inicio}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formServiceDataInicio">
                                                <Form.Label>Data Fim *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="data_fim"
                                                    placeholder="data_fim"
                                                    defaultValue={this.state.data_fim}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formServicePrazoInscricao">
                                                <Form.Label>Prazo Inscrição *</Form.Label>
                                                <TextInput
                                                    type="text"
                                                    name="prazo_inscricao"
                                                    placeholder="prazo inscrição"
                                                    defaultValue={this.state.prazo_inscricao}
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                /* required */
                                                />
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formServicePrice">
                                                    <Form.Label>Preço *</Form.Label>
                                                    <TextInputGroup
                                                        name="preco"
                                                        placeholder="Preço"
                                                        defaultValue={this.state.preco}
                                                        autoComplete="off"
                                                        onChange={this.handleChange}
                                                    /* required */
                                                    /*                                                         pattern="([\d,]*)"
                                                                                                            errorMessage={{ required: "Campo Requerido", pattern: "Esse campo não pode conter letras" }}
                                                                                                            prepend={<span className="input-group-text">R$</span>} */
                                                    />
                                                </Form.Group>
                                                {/*                                                 <Form.Group as={Col} controlId="formServiceDuration">
                                                    <Form.Label>Duração</Form.Label>
                                                    <TextInputGroup
                                                        name="duration"
                                                        placeholder="Duration"
                                                        defaultValue={this.state.duration}
                                                        autoComplete="off"
                                                        onChange={this.handleChange}
                                                        pattern="([\d]*)"
                                                        errorMessage={{ required: "Campo Requerido", pattern: "Esse campo deve ser numérico" }}
                                                        append={<span className="input-group-text">min</span>}
                                                    />
                                                </Form.Group> */}
                                            </Form.Row>

                                            {/* <Form.Group controlId="formServiceTypeCommission">
                                                <Form.Label>Qual comissão será utilizada *</Form.Label>
                                                <SelectGroup
                                                    name="type_commission"
                                                    id="type_commission"
                                                    value={this.state.type_commission}
                                                    onChange={this.handleChange}>
                                                    <option value="0">Não aplicada</option>
                                                    <option value="1">Porcentagem</option>
                                                    <option value="2">Fixa</option>
                                                </SelectGroup>
                                            </Form.Group> */}
                                            <Form.Group style={{ marginTop: '45px', textAlign: 'right' }}>
                                                <Button variant="secondary" onClick={this.props.handleCloseCreate}>CANCELAR</Button>
                                                <Button type="submit" variant="primary">SALVAR</Button>
                                            </Form.Group>
                                        </ValidationForm>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Create;