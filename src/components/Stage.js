import React, { Component } from 'react';
import EMC from './PDF/EMC.pdf';
import PDFsvg from './IMG/PDF.svg';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Stage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      open: false,
      body: null,
      footer: null,
      title: null,
      cssClass: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.setState({
      open: !this.state.open
    });
  }

  handleShow (body, footer, title, cssClass) {
    this.setState({ open: !this.state.open, body: body, footer: footer, title: title, cssClass: cssClass });
  }

  render () {

    const modal00 =
    {
      body: (
        <p>
          His esophagus full of regurgitated barbiturates and red wine, Jimi Hendrix asphyxiates and dies in a London apartment. In this one-act stage drama, he passes into a chamber where he is joined by three other historical characters: Leonardo daVinci, Carl Jung, and William Blake. Guided by the psychoanalyst Jung, Hendrix's new acquaintances engage him in a role-playing exercise, each participant portraying a member of the Godhead as they prepare their initiate to choose the direction of his rebirth.
        </p>
      ),
      footer:
        <div>
          <a className="PDF-img-a" target="_blank" href={EMC}>
            <img src={PDFsvg} />
          </a>
        </div>,
      title: 'EXPERIENCE IS THE MOTHER OF CERTAINTY',
      cssClass: 'stage-modal00'
    }

    return (

      <body class="stageBody">

        <div className="stage-image-container" onClick={this.handleShow.bind(this, modal00.body, modal00.footer, modal00.title, modal00.cssClass)}>
          <div className="stage-image-text" >
            {modal00.title}
          </div>
        </div>

        <Modal isOpen={this.state.open} centered={true} toggle={this.toggle} className={'modalStageAll ' + this.state.cssClass}>
          <ModalHeader toggle={this.toggle}>
            <h5 className="modal-title">{this.state.title}</h5>
          </ModalHeader>
          <ModalBody>
            {this.state.body}
          </ModalBody>
          <ModalFooter>
            {this.state.footer}
          </ModalFooter>
        </Modal>

      </body>

    );
  }
}
export default Stage;
