import React, { Component } from 'react';
import FEFG from './PDF/FEFG.pdf';
import PDFsvg from './IMG/PDF.svg';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Page extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      open: false,
      body: null,
      footer: null,
      title: null,
      cssClass: null,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleShow(body, footer, title, cssClass) {
    this.setState({ open: !this.state.open, body: body, footer: footer, title: title, cssClass: cssClass });
  }

  render() {

    const modal00 =
    {
      body:(
        <p>
          Three very short narratives about thinly veiled public figures who are dead. The common thread is that they all have secrets, albeit secrets that are easy to recognize should the reader choose not to suppress readily apparent evidence. Astute readers will discover sobering riddles between the written lines.
        </p>
      ),
      footer:
        <div>
          <a className="PDF-img-a" target="_blank" href={FEFG}>
            <img src={PDFsvg} />
          </a>
        </div>,
      title: 'FICTITIOUS EPISTLES FROM THE GRAVE',
      cssClass: 'page-modal00'
    }

    return (

      <div class="pageBody">

        <div className="page-image-container" onClick = {this.handleShow.bind(this, modal00.body, modal00.footer, modal00.title, modal00.cssClass)}>
          <div className="page-image-text" >
            {modal00.title}
          </div>
        </div>

        <Modal isOpen = {this.state.open} toggle = {this.handleShow} className = {'modalPageAll ' + this.state.cssClass}>
          <ModalHeader toggle={this.toggle}>
            <h5 className = "modal-title">{this.state.title}</h5>
          </ModalHeader>
          <ModalBody>
            {this.state.body}
          </ModalBody>
          <ModalFooter>
            {this.state.footer}
          </ModalFooter>
        </Modal>

      </div>

    );
  }
}

export default Page;
