import React, { Component } from 'react';
import LGDjpg from './LGD.jpg';
import withSizes from 'react-sizes';

import { Modal, ModalHeader, ModalBody,
         Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators
       } from 'reactstrap';


class LGD extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      open: false,
      body: null,
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

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === (this.props.isMobile ? modal.length : 2 ) - 1 ? this.state.activeIndex : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.activeIndex : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
  }

  handleShow(body, title, src) {
    this.setState({ open: !this.state.open, body: body, title: title, src: src });
  }

  render() {
    if(this.props.isMobile)
    {
      const { activeIndex } = this.state;

      const slides = modal.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={'LGD'+item.src}
          >
            <div onClick = {this.handleShow.bind(this, item.body, item.title, item.src)}>
              <img src={LGDjpg} alt={item.title} />
              <CarouselCaption captionText={item.title} captionHeader={null} className={'LGD-carousel-slide-text LGD-carousel-slide-text'+item.src} />
            </div>
          </CarouselItem>
        );
      });

      return(
        <div className ="LGDBody">
          <div className="LGD-carousel-container">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              pause={false}
              interval={false}
            >
              <CarouselIndicators items={modal} className="LGD-carousel-indicators" activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>

            <Modal isOpen = {this.state.open} toggle = {this.handleShow} className = {'LGDModalAll LGDmodal' + this.state.src}>
              <ModalHeader toggle={this.toggle}>
                <h5>{this.state.title}</h5>
              </ModalHeader>
              <ModalBody>
                {this.state.body}
              </ModalBody>
            </Modal>
          </div>
        </div>
      );
    }
    else
    {
      const tiles = modal.map((item) =>
      {
          return(
            <div className = "table-cell" onClick = {this.handleShow.bind(this, item.body, item.title, item.src)}>
              <p className = {'table-cell-text LGDtable-cell-text'+item.src}>{item.title}</p>
            </div>
          );
      });

      const breakpoint = Math.ceil(tiles.length / 4);

      const row1 = tiles.splice(0, breakpoint);
      const row2 = tiles.splice(0, breakpoint);
      const row3 = tiles.splice(0, breakpoint);
      const row4 = tiles;

      const carouselItems =
      [
        (
          <CarouselItem onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={0}
          >
            <div className = "LGDBody-Table">
              <div id="LGDBody-Table-Row1">
                {row1}
              </div>
              <div id="LGDBody-Table-Row2">
                {row2}
              </div>
            </div>
          </CarouselItem>
        ),

        (
          <CarouselItem onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={1}
          >
          <div className = "LGDBody-Table">
            <div id="LGDBody-Table-Row1">
              {row3}
            </div>
            <div id="LGDBody-Table-Row2">
              {row4}
            </div>
          </div>

          </CarouselItem>
        )

      ];

      const { activeIndex } = this.state;

      return (

        <div className="LGDbody">

        <div className = "carousel-container">
          <Carousel className = ".mySlider-slide"
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    pause={false}
                    interval={false}
          >
            <CarouselIndicators items={carouselItems} className="LGD-carousel-indicators" activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {carouselItems}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />

          </Carousel>
        </div>

          <Modal isOpen = {this.state.open} toggle = {this.handleShow} className = {'LGDmodalAll LGDmodal' + this.state.src}>
            <ModalHeader toggle={this.toggle}>
              <h5 className = "modal-title">{this.state.title}</h5>
            </ModalHeader>
            <ModalBody className = "modalBodyStyle">
              {this.state.body}
            </ModalBody>
          </Modal>

        </div>
      );
    }
  }
}

const modal =
[
  {
    title: 'WHEN HE CROSSED THE LINE',
    src: '00',
    body:
    (
      <div>
        The superstar exposed himself in front<br />
        of eyewitnesses who watched sycophants<br />
        pump foreign substances into his grunt<br />
        hole in order to performance enhance.<br />
        He entered a race whose prize was mammon,<br />
        knowing that he had no chance to win it<br />
        unless whores monitored dirty urine<br />
        by dipping their crucifixes in it.<br />
        Liberal press balked when he crossed the line,<br />
        but when he pressed the Bible to his hand<br />
        his cult gushed lust hormones, blind to his crimes<br />
        until the law crashed his victory stand.<br />
        He’ll eat beautiful cake with his gold spoon<br />
        while the platform falls on one of his goons.
      </div>
    )
  },
  {
    title: 'A CREATURE WITHOUT SENTIMENTS',
    src: '01',
    body:
    (
      <div>
        A foreboding shadow provides a split<br />
        second of shade in this parched, mind-bending<br />
        desert mountain juxtaposition. Slits<br />
        in pink spy between pterodactyl’s wings.<br />
        Typically shy, a prehistoric<br />
        scavenger makes an uncommonly low<br />
        pass and interrupts the dysphoria,<br />
        my baked water a challenge to swallow.<br />
        The beast has evolved faculties that sense<br />
        animal infirmity. My rival,<br />
        it is a creature without sentiments,<br />
        encrypted with a code of survival.<br />
        Salty vision, sunspots, and spiral lines.<br />
        The distress it smells is probably mine.<br />
      </div>
    )
  },
  {
    title: 'SELF-EVIDENT',
    src: '02',
    body:
    (
      <div>
        I am simply not a capitalist.<br />
        I’m positive<br />
                    there is a genetic<br />
        consideration. I’m a humanist<br />
        ideologically, pathetic<br />
        though it may seem, given that in practice<br />
        I am mostly just human. Some will call<br />
        me un-American, but the fact is<br />
        the nation of my birth venerates all<br />
        constitutions equally, including<br />
        an unalienable alien<br />
        who might pronounce grapes sour after brooding<br />
        over his lack of pluck in reaching them.<br />
        Conspicuous consumption insults me,<br />
        but that does not make me your enemy.<br />
      </div>
    )
  },
  {
    title: 'SIMPLY FAILED',
    src: '03',
    body:
    (
      <div>
        In tandem, she and I were fit to burst,<br />
        though absent convenient amenities.<br />
        Recreationally satisfied thirst<br />
        sent us back to the nineteenth century.<br />
        Had she said that she wanted to see me<br />
        naked, I wouldn’t have hesitated<br />
        to expose the fleshy utility<br />
        of this simian form god created.<br />
        But the urge to excrete in her presence<br />
        catalyzed a spore of shame in the veiled<br />
        depths of my phallic phase, and a tense<br />
        sphincter with a simple job simply failed.<br />
        Universities publish futile tomes<br />
        on the cruelty of Y chromosomes.<br />
      </div>
    )
  },
  {
    title: 'CHARGED WITH REBELLION',
    src: '04',
    body:
    (
      <div>
        The cascade is warm, they said, but they were<br />
        propagating falsehood. Years of hearsay<br />
        had you stripped bare when you chose to enter<br />
        the stream of sadistically cold spray.<br />
        Despite repeated objections you were<br />
        held in rigid deference to your will,<br />
        smashed about and suffocated under<br />
        the force of the unrelenting spillway.<br />
        Having long since pulled yourself free, you stand<br />
        on the bank and observe while others fall<br />
        into the stream, pushed by another’s hand,<br />
        frozen in their bones, unmindful of gall.<br />
        Rope in hand, you offer liberation,<br />
        aggrieved that you are charged with rebellion.
      </div>
    )
  },
  {
    title: 'NAUTICAL VIOLATION',
    src: '05',
    body:
    (
      <div>
        The lake was calm when I boarded truth boat,<br />
        but darkness a tempest accompanied.<br />
        An illumined face placed me under oath<br />
        and cross-examined to the third degree.<br />
        The skipper coerced me into sharing<br />
        the details of my secret tendencies,<br />
        thwarting false testimony and baring<br />
        matters of personal intimacy.<br />
        Waves of inquiries had me stupefied,<br />
        rocked about without a method to flee<br />
        or find justice in the merciless tide,<br />
        left to cop a plea with Neptune. Get thee<br />
        behind me, nautical violation!<br />
        That voyage I should never have taken.
      </div>
    )
  },
  {
    title: 'CONSERVATIVE EARTH',
    src: '06',
    body:
    (
      <div>
        We are little<br />
                         more than a colony<br />
        of worms<br />
                       the cynic observed<br />
                                                   chasing scents,<br />
        ingesting easy fuel, enormously<br />
        adept at generating waste, and hence,<br />
        settling in our own discharges<br />
                                                    crawling<br />
        organisms in bloodthirsty jungles,<br />
        obedient to reflexes, mauling<br />
        each other and mating in mud puddles,<br />
        disposed to spawn progeny before we<br />
        become fuel ourselves and pass through entrails<br />
        of random ravenous adversaries,<br />
        hoarded in conservative earth’s mold cells<br />
        until moist egocentric tongues protrude,<br />
        seduced by crude reconstituted food.
      </div>
    )
  },
  {
    title: 'FOREVER GONE',
    src: '07',
    body:
    (
      <div>
        I egocentrically interpret<br />
        my bubble-like environment by means<br />
        of consciousness four billion years old, yet<br />
        one contemporaneously convened.<br />
        You’re special, say looking glass deities,<br />
        though haphazardly drawn from a bloodline,<br />
        tiktaaliks fleeing predatory seas,<br />
        propelled by arms, the prototypes of mine.<br />
        Reality shared with present and past,<br />
        merely one of an infinite number<br />
        of genetic combinations so vast,<br />
        my brief existence not spared from slumber.<br />
        Part and parcel of my self will live on,<br />
        but awareness will be forever gone.
      </div>
    )
  },
  {
    title: 'PERVERSE REALITY',
    src: '08',
    body:
    (
      <div>
        Desiré is pregnant out of wedlock<br />
        and claims that her baby is divinely<br />
        conceived. A spirit surely must have knocked<br />
        her up. She’s never known intimacy.<br />
        Burdened with delusion since she was young,<br />
        she misjudges my gullibility.<br />
        Whatever you do, don’t count me among<br />
        those who buy her perverse reality.<br />
        Desiré, I call you to repentance,<br />
        not just for your licentiousness.<br />
        Eternal anguish will be your sentence<br />
        if your trickery you cannot confess.<br />
        Vast good deeds will not redeem you nary<br />
        a hallowed plea to Jesus and Mary.
      </div>
    )
  },
  {
    title: 'GOODBYE',
    src: '09',
    body:
    (
      <div>
        Walk on water to a distant island,<br />
        a paradise with no inhabitants.<br />
        Gather together all your compliant<br />
        devotees and infinite sky tyrants.<br />
        Please make good on your threats to isolate<br />
        from this great union. Go ahead and feed<br />
        your imaginations until sated<br />
        with loaves and fishes and magical deeds.<br />
        Leave us, conservative and liberal,<br />
        to conduct secular democracy<br />
        while you speak with tongues evangelical<br />
        and kill by the will of false prophesies.<br />
        Godspeed when your burning bosoms explode.<br />
        Goodbye apocalyptic moral codes.
      </div>
    )
  },
  {
    title: 'MY GETHSEMANE',
    src: '10',
    body:
    (
      <div>
        White and delightsome boys in uniform<br />
        suits and ties sat in a small lecture hall,<br />
        aspirant to a statistical norm,<br />
        boxed within colorless and sterile walls.<br />
        Indistinct, I was an anxious nineteen<br />
        year old, stunted in both body and mind;<br />
        to my way of thinking, morally clean,<br />
        but deeply flawed and spiritually blind.<br />
        A high priest brayed out a proclamation<br />
        forecasting sinful earth consumed by flames.<br />
        My bosom burned, not with affirmation,<br />
        each cell heavy, suffocated by shame.<br />
        I tasted the smoke from human debris,<br />
        Christ’s terror strike on my Gethsemane.<br />
      </div>
    )
  },
  {
    title: 'PINION PINE',
    src: '11',
    body:
    (
      <div>
        A hungry kestrel surveys from a bough,<br />
        her breast awash like the burnt sky at dusk.<br />
        No history, no future, only now,<br />
        she releases from the coarse tawny husk,<br />
        and hangs with preliminary savor,<br />
        a cone nuzzling chipmunk unwary prey.<br />
        Who natural selection will favor,<br />
        just one witness, the pinion pine, can say.<br />
        Durable ensign, in high wind she lists,<br />
        her needled plumes capturing random gusts.<br />
        Her trunk rejoins revolving earth and twists,<br />
        talons bare, weepy eyes lightly dusted.<br />
        The ready rodent into its den slips,<br />
        rooted in her subterranean grip.
      </div>
    )
  },
  {
    title: 'REPLACED',
    src: '12',
    body:
    (
      <div>
        She scrubbed the toilet bowl and commented<br />
        that such unpleasant tasks made her yearn most<br />
        for her dad. I missed him, I lamented,<br />
        when I set one less plate for Sunday roast.<br />
        Going unnoticed, he greased squeaky wheels<br />
        and old hinges. Worn gaskets he replaced,<br />
        he switched old filters and filled leaky seals,<br />
        unfailing gruff expression on his face.<br />
        Seemed she expected me to replace him,<br />
        fill a role of old-fashioned servitude<br />
        and be responsive to her passive whims<br />
        while maintaining a can-do attitude.<br />
        Over the years, her bitterness has grown<br />
        for the father I replaced<br />
        was my own.
      </div>
    )
  },
  {
    title: 'TURQUOISE BLUE',
    src: '13',
    body:
    (
      <div>
        One man’s inner transformation is fueled<br />
        by a meal of pinion nuts and pinto<br />
        beans, a soak in a geothermal pool,<br />
        and a run with a herd of  buffalo.<br />
        He sleeps in a hogan with a fork stick<br />
        frame and a door that opens to the east.<br />
        Red earth adobe is used to form bricks<br />
        and build a chimney where smoke is released.<br />
        In dreams he lies in the cavernous ground.<br />
        Metals break down, and residues are fused<br />
        that leave stony formations to be found,<br />
        matching his irises of turquoise blue.<br />
        Neither Indian nor brave, he borrows<br />
        native culture while chasing tomorrow.
      </div>
    )
  },
  {
    title: 'AWED EXPRESSIONS',
    src: '14',
    body:
    (
      <div>
        A serpent with vocal cords did beguile<br />
        a boy, and commanded him to harvest<br />
        fruit from a tree. Sacramental vials<br />
        were filled with juice said to be marvelous.<br />
        The innocent child partook of the crushed<br />
        concoction, finding its taste to be both<br />
        sweet and acrid. His objections were hushed<br />
        by naked emperors and hell-bent hosts,<br />
        so he drank and became nauseated,<br />
        voicing displeasure until pukes with awed<br />
        expressions glowered and castigated,<br />
        sighing by partitions that he was flawed.<br />
        One day he stopped drinking poison tonic.<br />
        Now that he is well, folks claim he is sick.
      </div>
    )
  },
  {
    title: 'MUMBLE-SINGING',
    src: '15',
    body:
    (
      <div>
        Demonstrating expert percussive skills<br />
        for an audience of one, I keep time<br />
        on the worn surface of the steering wheel<br />
        to an unspecified radio rhyme.<br />
        This has to be Spirit, I am thinking,<br />
        mumble-singing as I break down the sounds,<br />
        energized by measured squeals of steel strings<br />
        and enthralled by scores of bald, skin-pounding<br />
        jazzbeats that boom from parade bass floor toms.<br />
        Charmed by California’s imperfect pitch,<br />
        I let lyrics pass through an intercom<br />
        that links past to present without a hitch.<br />
        Soon, the DJ confirms my suspicion<br />
        and deftly unmasks a dark eyed woman.
      </div>
    )
  }
];

const mapSizesToProps = sizes => ({
   isMobile: withSizes.isMobile(sizes),
   sizes: sizes
  });

export default withSizes(mapSizesToProps)(LGD);
