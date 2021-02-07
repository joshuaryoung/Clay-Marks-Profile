import React, { Component } from 'react';
import LGDjpg from './LGD.jpg';
import withSizes from 'react-sizes';

import {
  Modal, ModalHeader, ModalBody,
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

  toggle () {
    this.setState({
      open: !this.state.open
    });
  }

  onExiting () {
    this.animating = true;
  }

  onExited () {
    this.animating = false;
  }

  next () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === (this.props.isMobile ? modal.length : 2) - 1 ? this.state.activeIndex : this.state.activeIndex + 1;
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

  handleShow (body, title, src) {
    this.setState({ open: !this.state.open, body: body, title: title, src: src });
  }

  render () {
    if (this.props.isMobile) {
      const { activeIndex } = this.state;

      const slides = modal.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={'LGD' + item.src}
          >
            <div onClick={this.handleShow.bind(this, item.body, item.title, item.src)}>
              <img src={LGDjpg} alt={item.title} />
              <CarouselCaption captionText={item.title} captionHeader={null} className={'LGD-carousel-slide-text LGD-carousel-slide-text' + item.src} />
            </div>
          </CarouselItem>
        );
      });

      return (
        <div className="LGDBody">
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

            <Modal isOpen={this.state.open} toggle={this.handleShow} className={'LGDModalAll LGDmodal' + this.state.src}>
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
    else {
      const tiles = modal.map((item) => {
        return (
          <div className="table-cell" onClick={this.handleShow.bind(this, item.body, item.title, item.src)}>
            <p className={'table-cell-text LGDtable-cell-text' + item.src}>{item.title}</p>
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
              <div className="LGDBody-Table">
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
              <div className="LGDBody-Table">
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

          <div className="carousel-container">
            <Carousel className=".mySlider-slide"
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

          <Modal isOpen={this.state.open} toggle={this.handleShow} className={'LGDmodalAll LGDmodal' + this.state.src}>
            <ModalHeader toggle={this.toggle}>
              <h5 className="modal-title">{this.state.title}</h5>
            </ModalHeader>
            <ModalBody className="modalBodyStyle">
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
      title: 'IT IS GIVEN',
      src: '00',
      body:
        (
          <div>
            An aging figure pointed<br />
        a finger<br />
        with crooked joints<br />
        in the direction of a bend<br />
        in Sugarwood Creek<br />
        where a pool formed,<br />
        that his neighbor might be shown<br />
        a peek at his own<br />
        reflection.<br />
        It is given<br />
        eternally mobile molecules<br />
        render fluid<br />
        manifestations;<br />
        thus, even the most incisive<br />
        will never see<br />
        the same likeness twice.<br />
        Be that as it may,<br />
        the neighbor soon recognized<br />
        the irregular boundaries<br />
        of his blotted facade<br />
        were disagreeable,<br />
        and it angered him<br />
        ‘til he swore<br />
        a vow<br />
        he would not look<br />
        at his endowed image anymore.<br />
        Hence, he charged<br />
        his hardened old friend<br />
        with enmity.<br />
        The premise of this ode,<br />
        one might contend,<br />
        is to forebode<br />
        the near impossibility<br />
        of depending on sensibility<br />
        as a basis for swaying<br />
        acquaintances away<br />
        from traditional positions<br />
        they weren’t reasoned<br />
        into in the first place.<br />
          </div>
        )
    },
    {
      title: 'FINAL DRAFT',
      src: '01',
      body:
        (
          <div>
            Used up cerebral hemispheres bayed.<br />
            Enough!<br />
            We must dissociate!<br />
            The sensation was claustrophobic,<br />
            as though I were inside a vacuum,<br />
            but alas,<br />
            the appliance was within my head,<br />
            sucking every last watt of light,<br />
            swapping it for lead.<br />
            In weighty darkness,<br />
            abandoned and underfed,<br />
            I dragged myself<br />
            to a stony shelf,<br />
            the emission of searing dust<br />
            from my lungs<br />
            mandating tenacity.<br />
            I gaped at a river,<br />
            hundreds of feet below,<br />
            that relentlessly eroded the gorge<br />
            before me.<br />
            Fanatically, I fantasized<br />
            a flopping freefall,<br />
            imagined myself shredded by serrated<br />
            juts of the granite wall,<br />
            departing this planet,<br />
            terrified my terror<br />
            would not end<br />
            even then,<br />
            for I knew my Heavenly Father<br />
            would dispatch me<br />
            to eternal purgatory<br />
            when all was said and done.<br />
            Indeed, my homespun Lord<br />
            handpicked me<br />
            to be a child of his final dynasty,<br />
            yet somehow he reviled me<br />
            magnanimously.<br />
            My only choice<br />
            required no decision at all.<br />
            I did nothing<br />
            but exist.<br />
            With a feeble fist<br />
            I crumpled the final draft<br />
            of a master’s thesis,<br />
            albeit, the methodologically flawed<br />
            work of a proletarian<br />
            stalking self-diagnosis.<br />
            Be that as it may,<br />
            a scholarly committee of three<br />
            didn’t expect perfection<br />
            from a lay person,<br />
            and each conceded to sign<br />
            a decree of release.<br />
            My final obligation<br />
            was to procure<br />
            the proper paperwork,<br />
            but I was so depleted<br />
            I couldn’t complete<br />
            what surely should have been<br />
            the least complicated chore.<br />
            Eight vacillating years<br />
            I jousted with higher education,<br />
            on-campus employment,<br />
            graveyards at the halfway house.<br />
            Yes, I overinvested<br />
            when I engaged<br />
            an imprudent love event<br />
            ‘til I was spent,<br />
            bested by chronic fatigue.<br />
            Meager energy was needed<br />
            to overcome my inertia<br />
            and withdraw from conjugal discord,<br />
            but I couldn’t even assert<br />
            I had vapor stored.<br />
            Prostrate on the precipice of said pit,<br />
            my wits destroyed,<br />
            I lay listlessly<br />
            as page after page wafted away,<br />
            conveyed fore and aft<br />
            on downdrafts<br />
            into the void.<br />
          </div>
        )
    },
    {
      title: 'GRATEFUL FOR LIFE',
      src: '02',
      body:
        (
          <div>
            In the beginning<br />
            gods on mountaintops<br />
            created conifers<br />
            which<br />
            through plenteous epochs<br />
            have dutifully produced pods,<br />
            each with fundamentally identical<br />
            botanical composition,<br />
            arbitrary variability contingent<br />
            upon accessibility<br />
            to suitable earth, moisture, and sunlight,<br />
            as well as the providential elusion<br />
            of concentrations of pollution.<br />
            I am nothing<br />
            but a proletarian,<br />
            trusting of empiricism<br />
            conducted by someone else,<br />
            but according to my novice observations<br />
            model cones seem<br />
            to open in spring,<br />
            releasing copious seeds,<br />
            at least nine of ten filched<br />
            by beastly hordes<br />
            of hoarding fauna.<br />
            Odds are<br />
            negligible pods don’t open<br />
            ‘til autumn is upon us,<br />
            while some never open at all,<br />
            aborted by coldblooded boughs,<br />
            forsaken seeds endowed<br />
            to putrefy inside<br />
            unless of course<br />
            they are introduced<br />
            to wildfire,<br />
            and infernal birth is induced.<br />
            I feel in my gut<br />
            a kinship with the autumnal nut,<br />
            having been generously discharged<br />
            from captivity<br />
            and preserved<br />
            in a protective rut,<br />
            dodging thus far<br />
            wanton overconsumption<br />
            and indiscriminate combustion,<br />
            surviving contaminated reason,<br />
            grateful for buds of life<br />
            after ample seasons<br />
            of dormancy and strife.<br />
          </div>
        )
    },
    {
      title: 'SPIRIT PRISON',
      src: '03',
      body:
        (
          <div>
            I had no reason<br/>
            to doubt<br/>
            the devout,<br/>
            even decent,<br/>
            people who guaranteed<br/>
            the training center was the most spiritual<br/>
            place on Earth.<br/>
            I bear witness<br/>
            to having been wistful,<br/>
            missing rock ‘n’ roll music<br/>
            and Mom’s home cooked victuals,<br/>
            feeling sickened by withdrawal symptoms<br/>
            in consideration of my stifling addiction<br/>
            to prime time television.<br/>
            Nevertheless,<br/>
            it will never be known<br/>
            if I could have outgrown<br/>
            youthful neuroses<br/>
            in a balanced environment,<br/>
            given my utmost derangement<br/>
            came from celestial commands<br/>
            to rehash ironclad doctrinal balderdash<br/>
            with absolute strangers<br/>
            in a distant land.<br/>
            Dissonance rendered me blind,<br/>
            and I honestly lost my mind<br/>
            in unwarranted darkness,<br/>
            though the holiest ghost<br/>
            informed me over and over<br/>
            as to the most enlightened course.<br/>
            Even so, I didn’t dare listen,<br/>
            given sanity is the enemy<br/>
            in the spirit prison.<br/>
            Hence, without permission<br/>
            my adrenal glands orchestrated<br/>
            a hostile takeover<br/>
            of my nervous system<br/>
            ‘til I fulfilled my mission call<br/>
            and scaled the insidious wall.<br/>
            <br/>
            I had sight again,<br/>
            but alas,<br/>
            could find no place to hide,<br/>
            inescapably abiding<br/>
            the well-intended company<br/>
            of the most meek<br/>
            and condescending,<br/>
            who maintained<br/>
            through endless weeks<br/>
            of interrogation<br/>
            that true blessings could only be attained<br/>
            through my incarceration.<br/>
            It was an unsolvable quotient,<br/>
            this all-consuming notion<br/>
            that my parents could<br/>
            cease and desist<br/>
            feeling shitty<br/>
            only if I offered up my wrists<br/>
            to the manacles of the institution<br/>
            and resumed feeling shitty myself.<br/>
            The blows I was dealt<br/>
            by the bare knuckled fists of brethren<br/>
            armed with scripted humility<br/>
            crippled me for a decade,<br/>
            inflicted everlasting injury,<br/>
            not just to me<br/>
            but to my complicit family.<br/>
            Now, I cannot rebuff<br/>
            judgments from my community<br/>
            nor their endless renewals<br/>
            of the pewter rule.<br/>
            You bet your ass<br/>
            I’m an unreserved fool<br/>
            whose wrath has mass,<br/>
            but don’t expect me to forsake my role<br/>
            of offering protective clarity<br/>
            to innocent souls in the throes<br/>
            of perpetual cruelty.<br/>
          </div>
        )
    },
    {
      title: 'SPECIAL',
      src: '04',
      body:
        (
          <div>
            Teddy’s father was killed<br/>
            when he was too young<br/>
            to be conscious<br/>
            of the importance<br/>
            of a healthy paternal influence<br/>
            in his life.<br/>
            Luckily,<br/>
            if one may cite such a term,<br/>
            the ungreased gears<br/>
            of the federal bureaucracy<br/>
            are merciful<br/>
            to families of misfortune,<br/>
            and Teddy received<br/>
            a monthly socialistic<br/>
            security disbursement<br/>
            throughout his formative years.<br/>
            Keep in mind,<br/>
            the department of socialism<br/>
            security is bankrupt,<br/>
            and his compensation<br/>
            added to the collective deficit.<br/>
            Also note<br/>
            the economy did not implode<br/>
            because the nation bankrolled<br/>
            charitable funds for Teddy<br/>
            and other similarly stationed households.<br/>
            <br/>
            Be that as it may,<br/>
            making hay demands a toll,<br/>
            and Momma had to assume the role<br/>
            of sole breadwinner,<br/>
            despite having no education.<br/>
            Understandably, she felt guilty<br/>
            in Teddy’s absence<br/>
            and anxious in his presence,<br/>
            so she smothered him<br/>
            with nervous affection.<br/>
            She taught him<br/>
            he was special<br/>
            and buttered him up<br/>
            by conditioning emotional dependency<br/>
            through mass consumption<br/>
            of sausages, cheeses, and fudge<br/>
            that made him feel<br/>
            fattened<br/>
            with maternal love.<br/>
            <br/>
            Yes, Momma coddled<br/>
            and cuddled Teddy,<br/>
            bottle fed him<br/>
            fictions about privileged princes,<br/>
            in which Teddy played<br/>
            the central character,<br/>
            and their bond was irregular<br/>
            because their circumstance was irregular.<br/>
            Thus, it was the queen<br/>
            who gave the teen<br/>
            his first lust flush,<br/>
            and it filled his gut<br/>
            with shame.<br/>
            Suggestive images<br/>
            of Momma<br/>
            invading his brain,<br/>
            he came to feel<br/>
            tremendous emptiness,<br/>
            so he ate even more<br/>
            sausages, cheeses, and fudge.<br/>
            <br/>
            Throughout adolescence,<br/>
            Teddy continued to believe<br/>
            he was special<br/>
            despite his mediocrity<br/>
            in the classroom.<br/>
            Understandably, Momma felt helpless,<br/>
            and she misdirected gloom<br/>
            at his inept teachers.<br/>
            Teddy's malnourished ego<br/>
            was the status quo,<br/>
            so Momma fed him still more<br/>
            sausages, cheeses, and fudge.<br/>
            Always unsated, <br/>
            Teddy was fated<br/>
            to envy classmates<br/>
            who had fathers<br/>
            to mentor them,<br/>
            after which he felt guilty<br/>
            for not properly honoring Momma,<br/>
            so he consumed even more<br/>
            sausages, cheeses, and fudge.<br/>
            Teddy loathed<br/>
            his plump body<br/>
            and his lack<br/>
            of academic acumen<br/>
            so much that it caused him to begrudge<br/>
            peers who were lean<br/>
            and literate,<br/>
            and he became a bully.<br/>
            Come to find<br/>
            he was especially unkind<br/>
            to girls who gave him a lust flush<br/>
            because none could make him feel<br/>
            as special as Momma<br/>
            made him feel.<br/>
            <br/>
            Teddy hoarded his socialistic<br/>
            security so he could buy<br/>
            a semi-automatic rifle<br/>
            to satisfy his fantasies<br/>
            of hurting<br/>
            others<br/>
            at the gun range.<br/>
            Lulled by the musical cadence<br/>
            of blasted bullets,<br/>
            he huffed the aromatic incense<br/>
            of combusted carbon.<br/>
            Even the taste<br/>
            pinkened his face<br/>
            with bloodlust.<br/>
            He fantasized himself<br/>
            a soldier,<br/>
            but a dearth of courage<br/>
            precluded his enlistment.<br/>
            <br/>
            As he got older,<br/>
            Teddy's developing brain<br/>
            hoarded so much pain<br/>
            that his master gland anesthetized<br/>
            his cerebral hemispheres<br/>
            so he only felt it<br/>
            in his brainstem,<br/>
            which did not require him<br/>
            to work<br/>
            through it.<br/>
            And Teddy broke<br/>
            ample commandments<br/>
            'til Momma made him make<br/>
            a pact with Jesus,<br/>
            and in unison<br/>
            the couple knew<br/>
            the simultaneous climax<br/>
            of needing someone<br/>
            else to bear the burden<br/>
            of their hurtful thoughts and actions.<br/>
            <br/>
            When Teddy wasn’t deficit spending<br/>
            government dividends<br/>
            to stockpile ammunition,<br/>
            he dickered tickets<br/>
            to see prophetic profiteers,<br/>
            pied pipers<br/>
            whose golden fifes<br/>
            made music that tickled the ears<br/>
            of rapt audiences<br/>
            plenteous enough to fill sports arenas.<br/>
            Predictably, their zeal<br/>
            gave Teddy a lust flush,<br/>
            pitches from self-indulgent<br/>
            ministers of self-help<br/>
            reverberating in the void<br/>
            inadvertently vacated by Teddy’s father.<br/>
            Indeed, self-assured men<br/>
            dressed up in expensive suits<br/>
            assured him he could be<br/>
            skinny<br/>
            and literate<br/>
            and affluent<br/>
            and that he could attract princesses<br/>
            who regarded frogs as kings<br/>
            so he could cease<br/>
            doing beastly things.<br/>
            <br/>
            Yes, yes, yes,<br/>
            Teddy was impassioned<br/>
            he could even the subliminal score<br/>
            because he wanted to be more<br/>
            than just a follower.<br/>
            His grand delusion was to be<br/>
            a commander of rats himself,<br/>
            despite his lack<br/>
            of academic acumen,<br/>
            so he faked it<br/>
            and faked it,<br/>
            blowing wind<br/>
            through a pewter flute<br/>
            and exercising faith<br/>
            that he would someday<br/>
            make it<br/>
            through plentiful frustrations<br/>
            and attract rats<br/>
            for the simple reason<br/>
            he was special.<br/>
            <br/>
            Make no mistake,<br/>
            Teddy was driven to sprint<br/>
            within a spinning wheel,<br/>
            so he went to college,<br/>
            assisted by minted dollars,<br/>
            once again,<br/>
            that collared inefficient government.<br/>
            And he proved himself<br/>
            to be no scholar,<br/>
            so he went nowhere<br/>
            near the completion of a degree,<br/>
            which worsened the pain<br/>
            hoarded in his lizard brain.<br/>
            And he continued to break<br/>
            ample commandments,<br/>
            eternally burdened<br/>
            by the challenges<br/>
            of monogamy.<br/>
            <br/>
            To his credit,<br/>
            he harnessed the sensuous<br/>
            energy,<br/>
            and he built a business,<br/>
            peddling water<br/>
            door to door<br/>
            to residents of a lakeshore<br/>
            until he was no longer<br/>
            deprived and loathsome,<br/>
            but depraved and loathing<br/>
            of the weak<br/>
            and the unfortunate<br/>
            and of bureaucratic government<br/>
            up to the present day<br/>
            when all the things that give<br/>
            him lust flushes<br/>
            are bundled as one,<br/>
            and he has an unbreakable relationship<br/>
            with Jesus.<br/>
            <br/>
            And God's only messianic son<br/>
            has spun himself<br/>
            into a chrysalis,<br/>
            emerging as a four-hundred-pound bully<br/>
            with a cache of guns.<br/>
            Yes, the gluttonous one<br/>
            is disgusted by the needy<br/>
            recipients of government charity,<br/>
            a worshiper of mammon<br/>
            overcome by the purest lust flushes<br/>
            each time he conjures the undeniable<br/>
            homicidal fantasy.<br/>
          </div>
        )
    },
    {
      title: 'A ROUNDABOUT WAY',
      src: '05',
      body:
        (
          <div>
            My big brother and I<br/>
            forged an informal course<br/>
            on a northbound byway<br/>
            toward a childhood playground.<br/>
            I reasoned<br/>
            I had demons<br/>
            to exorcise<br/>
            at a special destination,<br/>
            to lay bare<br/>
            a piece of family history<br/>
            the two of us might share.<br/>
            But upon our arrival<br/>
            we mutually recognized<br/>
            archival memory<br/>
            had exercised<br/>
            a measure of trickery.<br/>
            Angst was quelled<br/>
            when we beheld a panoramic landscape<br/>
            we hadn’t recalled well at all.<br/>
            More so, we came to know<br/>
            we were not the same people,<br/>
            no longer little boys<br/>
            on quests for careless joy.<br/>
            Turned out there were no ghostly<br/>
            bouts to be fought,<br/>
            for not a single evil spirit was spotted.<br/>
            Yet, in a roundabout way<br/>
            we got the goods we sought,<br/>
            given fiends fled our imaginations<br/>
            throughout multiple hours<br/>
            of straightforward conversation,<br/>
            pit stops to empty inelastic bladders<br/>
            at filling stations,<br/>
            and restock snacks<br/>
            for a day spent tripping<br/>
            by the closest of siblings.<br/>
          </div>
        )
    },
    {
      title: 'TASTE',
      src: '06',
      body:
        (
          <div>
            Innumerable blooms<br/>
            are not palpable to all<br/>
            budding consumers.<br/>
            No, I cannot will<br/>
            a preponderance to ponder<br/>
            the ostensible splendor<br/>
            of my earnestness<br/>
            with all its washed colors<br/>
            cropping up from unwashed clefts,<br/>
            duty-bound fruits<br/>
            found to derive<br/>
            from the deepest roots<br/>
            enlivened by subtle seeps<br/>
            of subterranean dew beads.<br/>
            But, in slumber I have dreamed<br/>
            of an unencumbered maiden.<br/>
            Yes, in my vision<br/>
            I am face to face<br/>
            with the subliminal apparition<br/>
            of a wistful lady<br/>
            who wishes for a taste<br/>
            of the edible petals<br/>
            that originate from my shady landscape.<br/>
          </div>
        )
    },
    {
      title: 'CALL ME',
      src: '07',
      body:
        (
          <div>
            Dolly Munchausen<br/>
            desperately needed a respite<br/>
            from her messed up<br/>
            domestic life,<br/>
            and one night she found<br/>
            satisfying salve<br/>
            in an underground tavern.<br/>
            Call me<br/>
            satisfying salve,<br/>
            or, if you will,<br/>
            address me<br/>
            by my quill name<br/>
            which is<br/>
            in this context<br/>
            Sisyphus.<br/>
            <br/>
            Our liaison<br/>
            was begun<br/>
            of childish fun,<br/>
            and I soon ascertained<br/>
            she was blessed<br/>
            with two blameless young ones<br/>
            who gaped at this ape<br/>
            with cautious disdain.<br/>
            She believed<br/>
            she was overcome<br/>
            by an inestimable sum<br/>
            of magnetic attraction<br/>
            to my perceived steely wildness,<br/>
            which she failed<br/>
            to make out<br/>
            undoubtedly originated<br/>
            on account<br/>
            of my having hated<br/>
            being a child.<br/>
            By contrast,<br/>
            Dolly Munchausen reverenced<br/>
            the soothing innocence of youth.<br/>
            Aghast when she encountered<br/>
            the unkindness of experience<br/>
            she found<br/>
            she couldn’t keep pace<br/>
            with the more disgraceful<br/>
            facets of adulthood,<br/>
            which she would<br/>
            at once rebuff,<br/>
            judging the complicating inundations<br/>
            of provincial sophistication<br/>
            insufferable.<br/>
            <br/>
            In any case,<br/>
            our fleshly bodies trod<br/>
            a common passageway<br/>
            in that liminal space<br/>
            that demarcates<br/>
            the worldly realm<br/>
            from the sexless<br/>
            Peter Pan’s<br/>
            Neverland,<br/>
            a place I planned<br/>
            I couldn’t stand<br/>
            ever again.<br/>
            Make no mistake,<br/>
            for goodness sake<br/>
            I was a mongrel,<br/>
            not derived of an ancestral line<br/>
            of fine breeding,<br/>
            yet I felt predestined<br/>
            to break free<br/>
            from shackles<br/>
            both inane<br/>
            and inhumane,<br/>
            to gallop unfettered<br/>
            across the wide-ranging<br/>
            meadow and plain.<br/>
            <br/>
            Now, in retrospect<br/>
            I recognize<br/>
            whimsical little boys have impulses<br/>
            to sprint to and fro,<br/>
            and if they go<br/>
            unchecked,<br/>
            their deeds may be reckless<br/>
            at best,<br/>
            at worst possessed<br/>
            of a death complex.<br/>
            So, it’s simple to see<br/>
            it wasn’t enough<br/>
            for Dolly Munchausen<br/>
            to simply harness me.<br/>
            She had to keep me<br/>
            just strong enough<br/>
            to canter at the local oval,<br/>
            in order to be ogled<br/>
            by rubbernecking onlookers<br/>
            who suspected she possessed me.<br/>
            <br/>
            Whether I like it or not,<br/>
            my history is fraught<br/>
            with mommy issues,<br/>
            having imprinted<br/>
            as a young cub<br/>
            on a domestic overseer<br/>
            I feared<br/>
            loved no one,<br/>
            saving her Redeemer,<br/>
            projecting disgust<br/>
            onto her hamstrung husband<br/>
            and seemingly fancying me<br/>
            a heck destined demon.<br/>
            Ever since,<br/>
            I’ve habitually issued<br/>
            passive permission<br/>
            to women who wish<br/>
            curses upon me,<br/>
            for instance,<br/>
            my first<br/>
            spouse,<br/>
            who grew<br/>
            weary<br/>
            of hearing<br/>
            recurrent censures<br/>
            each time we<br/>
            mutually preserved cleaved meat<br/>
            by packing rock salt<br/>
            into preexisting gashes.<br/>
            Believe me,<br/>
            she was smart<br/>
            to dash away<br/>
            and leave me<br/>
            in the custody<br/>
            of a mother-in-law<br/>
            who oversaw<br/>
            monetary control<br/>
            of pricey psychotherapy<br/>
            and generously offered to share<br/>
            fistfuls of Diazepam with me.<br/>
<br/>
            At any rate,<br/>
            in my presently<br/>
            semi-sober state,<br/>
            despite profuse substantiation<br/>
            of my dedication to straightforward truths,<br/>
            Dolly Munchausen,<br/>
            some three decades hence,<br/>
            is addled<br/>
            I won’t straddle her<br/>
            barbed wire fence,<br/>
            confounded by my astounding<br/>
            refusal to forsake<br/>
            proper accommodations<br/>
            for the camouflaged snake<br/>
            who chased her<br/>
            from the safety<br/>
            of the Garden of Eden,<br/>
            a milieu she sees exclusively<br/>
            in her fantasies.<br/>
            Yes, our trajectories were,<br/>
            and most surely still are,<br/>
            oppositional,<br/>
            our dualistic union<br/>
            conventionally unrealistic<br/>
            at best,<br/>
            our divided nest knotted<br/>
            with incompatibility.<br/>
            On the other hand,<br/>
            an outstanding teacher<br/>
            passed on<br/>
            a seemingly absurd<br/>
            philosophy of wistfulness<br/>
            to me,<br/>
            such that I must make<br/>
            the uphill leap<br/>
            presuming Sisyphus reaps<br/>
            blissfulness<br/>
            from his drudgery,<br/>
            a conception that fuels<br/>
            perfectly defective<br/>
            indefatigable affection<br/>
            and drives<br/>
            our rather haphazard revival<br/>
            of the next generation.<br/>
          </div>
        )
    },
    {
      title: 'A SWITCH',
      src: '08',
      body:
        (
          <div>
            A fragile man.<br/>
            a self-described fan<br/>
            of the magic<br/>
            that is music,<br/>
            spoke into a remote<br/>
            that transformed his command,<br/>
            and invisible currents<br/>
            inexplicably enabled<br/>
            an array of viewing options<br/>
            to pass through a coaxial cable.<br/>
            The band he desired<br/>
            to sample<br/>
            was called Choir Boy,<br/>
            and the interval was limited<br/>
            before the fragile man knew<br/>
            visceral discomfort,<br/>
            construing the persona<br/>
            of a frontman possessed<br/>
            of a painted face<br/>
            and a gender bending falsetto.<br/>
            The fragile man’s knee<br/>
            jerk reaction<br/>
            was to feel weird<br/>
            satisfaction,<br/>
            supposing to have<br/>
            incontrovertible cognitions<br/>
            of the singer’s<br/>
            sexual predispositions.<br/>
            <br/>
            Attentive<br/>
            to a progressive goal,<br/>
            the fragile man<br/>
            took a stroll<br/>
            down memory lane<br/>
            and had an exchange<br/>
            with a fragile boy,<br/>
            born into the majority,<br/>
            feigning superiority,<br/>
            ignorant his dis-ease<br/>
            fueled a neurotic need<br/>
            to stampede<br/>
            into his mind’s eyes<br/>
            and visualize<br/>
            intimate details<br/>
            of a complete stranger’s<br/>
            private life.<br/>
            A switch<br/>
            in the up position<br/>
            needed to be flipped,<br/>
            a half century of inhibition<br/>
            but a blip in space<br/>
            and time continuums.<br/>
            In a split second<br/>
            the fragile man felt<br/>
            a little<br/>
            less brittle,<br/>
            aware all must share<br/>
            this short journey,<br/>
            though it is insufficient<br/>
            to simply leave the choir boy be,<br/>
            for the upright consummation<br/>
            is a conscious celebration<br/>
            of his courageous contributions<br/>
            to an uptight society.<br/>
          </div>
        )
    },
    {
      title: 'INCIVILIZATION',
      src: '09',
      body:
        (
          <div>
            Public education<br/>
            in the early ‘70s<br/>
            heated me up<br/>
            and hammered me<br/>
            into a plastic mold,<br/>
            cajoled me into agreeing<br/>
            my asphyxiation<br/>
            was self-induced,<br/>
            inculcated me<br/>
            with PTSD.<br/>
            Getting hammered<br/>
            was the only activity<br/>
            that motivated me.<br/>
            So, when I was finally cut loose,<br/>
            I had no identity,<br/>
            and I was promptly persuaded<br/>
            to join the military.<br/>
            At the time,<br/>
            America the sublime<br/>
            was still firebombing Vietnam,<br/>
            though the selective service<br/>
            had forestalled<br/>
            the tumbling of balls.<br/>
            Fortunately,<br/>
            I was never dispatched<br/>
            for a tour of duty;<br/>
            however, combat<br/>
            smoldered inside<br/>
            this pacifistic psyche,<br/>
            and society denied<br/>
            me the liberty<br/>
            of verbalizing my opposition<br/>
            to their geopolitical paranoia.<br/>
            Needless to say,<br/>
            my traumatic stress<br/>
            wasn’t lessened,<br/>
            nor was I better<br/>
            defined;<br/>
            thus this private<br/>
            was inclined<br/>
            to return<br/>
            to the private sector,<br/>
            albeit, possessed<br/>
            of a negligible level<br/>
            of self-respect,<br/>
            even more<br/>
            misplaced<br/>
            than I was before.<br/>
            <br/>
            My erudite parents<br/>
            were innocent,<br/>
            having provided<br/>
            no rationale<br/>
            for my discontent.<br/>
            After all, I came of age<br/>
            in the northeast quadrant<br/>
            of the capital city,<br/>
            not far away<br/>
            from the bourgeoisie.<br/>
            Nor did my folks suppose<br/>
            I should try<br/>
            to sidestep higher education,<br/>
            given it was subsidized<br/>
            by the G.I. Bill<br/>
            as well as part-time unskilled<br/>
            labor that paid<br/>
            minimum wage.<br/>
            Still, I impetuously<br/>
            turned the page<br/>
            on my short stay<br/>
            in college,<br/>
            hardened by knowledge<br/>
            that I was a pawn<br/>
            who despised<br/>
            formalized training,<br/>
            a spherical decagon<br/>
            with mirrored facets<br/>
            fated to be disfigured<br/>
            and crammed<br/>
            into an inflexible crate.<br/>
            <br/>
            Generally regarded<br/>
            as handsome,<br/>
            yet socially docile,<br/>
            I chose to metamorphose,<br/>
            kept a low profile,<br/>
            a decomposing leaf<br/>
            outside the mainstream,<br/>
            bereft of self esteem,<br/>
            mingling in backflow,<br/>
            pleasured to know<br/>
            communities produce<br/>
            plenty of degenerates<br/>
            who don’t measure<br/>
            up to the status quo.<br/>
            Providentially,<br/>
            I made the acquaintance<br/>
            of Lady Jane,<br/>
            who was vivacious<br/>
            and hilarious,<br/>
            notably when both<br/>
            of us were hopped up<br/>
            on barley pop<br/>
            or under the influence<br/>
            of multifarious crops<br/>
            harvested from underground gardens.<br/>
            Our magnetism<br/>
            was practically natural,<br/>
            yet I was too superficial<br/>
            to adequately communicate<br/>
            the depth of my infatuation,<br/>
            and she was incapable<br/>
            of reciprocating.<br/>
            How could that be?<br/>
            She alleged<br/>
            she was not worthy of me<br/>
            but pledged<br/>
            we would be forever friends.<br/>
            What the hell?<br/>
            My vulnerability<br/>
            smothered me.<br/>
            I couldn’t inhale<br/>
            until I departed her company.<br/>
            The same incivilization<br/>
            that taught me<br/>
            I was worthless<br/>
            informed her<br/>
            she was ugly,<br/>
            not so much externally<br/>
            as within her core.<br/>
            After Lady Jane’s<br/>
            semi-rejection of me,<br/>
            I diverted and drifted<br/>
            toward the swiftest current,<br/>
            flailed exhaustively,<br/>
            a passive casualty<br/>
            of entropy,<br/>
            until I reached that shore<br/>
            where the Jordan empties<br/>
            into the Dead Sea.<br/>
            I disappeared for years<br/>
            and anonymously regressed,<br/>
            never established<br/>
            a permanent address,<br/>
            made no effort<br/>
            to contact my forlorn family.<br/>
            <br/>
            More than a decade hence,<br/>
            on that surreal morn<br/>
            when mourning loved ones<br/>
            located their prodigal son,<br/>
            I was an unrecognizable relic<br/>
            of my own decadence,<br/>
            an amazingly graceless wretch,<br/>
            no longer fetching,<br/>
            gray matter fried,<br/>
            an object<br/>
            of metaphoric suicide.<br/>
            True to form,<br/>
            my brood was determined<br/>
            to lure<br/>
            this brooding nonconformist back<br/>
            into their society,<br/>
            made every effort<br/>
            to rehabilitate me<br/>
            and create me<br/>
            in their image again.<br/>
            No, I hadn’t abandoned<br/>
            the prospect of vitality,<br/>
            but unjustly hushed retorts<br/>
            loitered internally;<br/>
            thus, time was short<br/>
            before life gave up on me.<br/>
            An aging Lady<br/>
            Jane came<br/>
            to my memorial service,<br/>
            nervously behooved<br/>
            to introduce herself<br/>
            to my siblings<br/>
            as an old acquaintance.<br/>
            They were aware<br/>
            of her name,<br/>
            but all the same<br/>
            couldn’t place<br/>
            her face.<br/>
            Our history<br/>
            long since buried,<br/>
            she had long been married<br/>
            to a replacement father,<br/>
            a provider and protector,<br/>
            a clandestine collector<br/>
            of weaponry.<br/>
            Nonetheless,<br/>
            temporary respect transfigured<br/>
            into endless resentment<br/>
            for militancy<br/>
            that replicated a template<br/>
            of lingering anxiety<br/>
            for their offspring.<br/>
            Now, I can’t say<br/>
            for certain<br/>
            how my passing away<br/>
            impacted Lady Jane,<br/>
            but it seemed to overwhelm her,<br/>
            given her lucidity soon waned<br/>
            ‘til she self-dispatched<br/>
            into a realm of fantasy.<br/>
            My thoughtful explanation<br/>
            is that toxic<br/>
            cultural marginalization,<br/>
            combined with the trials<br/>
            of emotional self-denial,<br/>
            were exacerbated<br/>
            by chemical experimentation,<br/>
            and they all catalyzed<br/>
            ‘til she romanticized<br/>
            that Armageddon<br/>
            was on the horizon,<br/>
            a sensational event<br/>
            which portends the end<br/>
            of a half century<br/>
            of unrelenting torment.<br/>
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
