import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators
} from 'reactstrap';
import PDFsvg from './IMG/PDF.svg';
import DA from './PDF/DIVINEACCIDENT.pdf';
import MARTYR from './PDF/MARTYR.pdf';
import DRIVE from './PDF/DRIVE.pdf';
import IYI from './PDF/IN YOUR IMAGE.pdf';
import withSizes from 'react-sizes';

class Screen extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      open: false,
      body: null,
      footer: null,
      title: null,
      src: null,
      activeIndex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

  }

  toggle () {
    this.setState({
      open: !this.state.open
    });
  }

  handleShow (body, footer, title, src) {
    if (this.state.open) {
      this.toggle();
      return;
    }
    this.setState({ open: !this.state.open, body, footer, title, src });
  }

  onExiting () {
    this.animating = true;
  }

  onExited () {
    this.animating = false;
  }

  next () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === modal.length - 1 ? this.state.activeIndex : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.activeIndex : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex (newIndex) {
    if (this.animating) return;
  }

  render () {

    if (this.props.isMobile) {
      const { activeIndex } = this.state;

      const slides = modal.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.name}

          >
            <div onClick={this.handleShow.bind(this, item.body, item.footer, item.title, item.src)}>
              <CarouselCaption captionText={item.title} captionHeader={null} className={'screen-carousel-slide-text screen-carousel-slide-text' + item.src} />
            </div>
          </CarouselItem>
        );
      });

      return (
        <div className="screenBody">
          <div className="screen-carousel-container">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              pause={false}
              interval={false}
            >
              <CarouselIndicators items={modal} className="screen-carousel-indicators" activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>

            <Modal isOpen={this.state.open} centered={true} toggle={this.handleShow} className={'screenModalAll screen-modal' + this.state.src}>
              <ModalHeader toggle={this.toggle}>
                <h5>{this.state.title}</h5>
              </ModalHeader>
              <ModalBody>
                {this.state.body}
              </ModalBody>
              <ModalFooter>
                {this.state.footer}
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
    else {
      const tiles = modal.map((item) => {
        return (
          <div className="table-cell" onClick={this.handleShow.bind(this, item.body, item.footer, item.title, item.src)}>
            <p className={'table-cell-text table-cell-text' + item.src}>{item.title}</p>
          </div>
        );
      });

      const breakpoint = Math.ceil(tiles.length / 2);

      const row1 = tiles;

      return (
        <div className="screenBody">
          <div id="Body-Table-Container">
            <div id="Body-Table-Row1">
              {row1}
            </div>
          </div>

          <Modal isOpen={this.state.open} centered={true} toggle={this.handleShow} className={'modalAll screen-modal' + this.state.src}>
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

}

const modal = [
  {
    title: 'A DIVINE ACCIDENT',
    src: '00',
    body:
      (
        <div>
          Harry is a bar musician on the cusp of psychosis. He is also a washed up journalist who once represented Independence College’s newspaper at a mayoral town hall. He has visions of an angel named Peter, a Welsh musician who urges him to resurrect a documentary he made in the aftermath of the election, when the losing candidate was mysteriously murdered, and the case went cold. Contrary to the beliefs of his community, Harry might just be the sanest guy in town.
        </div>
      ),
    footer:
      <div className="stage-PDF-img">
        <a target="_blank" href={DA}>
          <img src={PDFsvg} />
        </a>
      </div>
  },
  {
    title: 'MARTYR',
    src: '01',
    body:
      (
        <div>
          A biopic within a biopic, “MARTYR” examines the transformation from duckling to swan of the scholarly Fawn McKay Brodie while she hurdles obstructive walls within a patriarchal labyrinth from 1943 through 1946, researching and writing a biography about the polarizing Mormon prophet, Joseph Smith. This honest dramatization of documented history analyzes both author and subject through a series of time traveling intercuts, akin to The Hours, with a sprinkling of Trumbo.
        </div>
      ),
    footer:
      <div className="stage-PDF-img">
        <a target="_blank" href={MARTYR}>
          <img src={PDFsvg} />
        </a>
      </div>
  },
  {
    title: 'DRIVE',
    src: '02',
    body:
      (
        <div>
          Post World War One. A love story becomes a cautionary tale about cutthroat economics. The spoils are Biblical in scale when two America-born sons must compete for their immigrant father’s approval. One is equipped. The other is not.
        </div>
      ),
    footer:
      <div className="stage-PDF-img">
        <a target="_blank" href={DRIVE}>
          <img src={PDFsvg} />
        </a>
      </div>
  },
  {
    title: 'IN YOUR IMAGE',
    src: '03',
    body:
      (
        <div>
          A simple act of charity results in unthinkable calamity in a humble town.
        </div>
      ),
    footer:
      <div className="stage-PDF-img">
        <a target="_blank" href={IYI}>
          <img src={PDFsvg} />
        </a>
      </div>
  }];

const mapSizesToProps = sizes => ({
  isMobile: withSizes.isMobile(sizes),
  sizes: sizes
});

export default withSizes(mapSizesToProps)(Screen);
