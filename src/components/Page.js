import React, { Component } from 'react';
import TLD from './PDF/TLD.pdf';
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

  toggle () {
    this.setState({
      open: !this.state.open
    });
  }

  handleShow (body, footer, title, cssClass) {
    if (this.state.open) {
      this.toggle();
      return;
    }
    this.setState({ open: !this.state.open, body: body, footer: footer, title: title, cssClass: cssClass });
  }

  render () {

    const modal00 =
    {
      body: (
        <p>
          It is wasted energy to question the truthfulness of this latter-day epistle.
        </p>
      ),
      footer:
        <div>
          <a className="PDF-img-a" target="_blank" href={TLD}>
            <img src={PDFsvg} />
          </a>
        </div>,
      title: 'The Little Dipper',
      cssClass: 'page-modal00'
    }

    return (

      <div class="pageBody">

        <div className="page-image-container" onClick={this.handleShow.bind(this, modal00.body, modal00.footer, modal00.title, modal00.cssClass)}>
          <div className="page-image-text" >
            {modal00.title}
          </div>
        </div>

        <Modal isOpen={this.state.open} toggle={this.handleShow} className={'modalPageAll ' + this.state.cssClass}>
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

      </div>

    );
  }
}

export default Page;
