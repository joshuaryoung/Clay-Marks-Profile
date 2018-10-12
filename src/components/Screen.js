import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,
         Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators
       } from 'reactstrap';
import withSizes from 'react-sizes';

class Screen extends Component {
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

  handleShow(body, title, src) {
    this.setState({ open: !this.state.open, body: body, title: title, src: src });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === modal.length - 1 ? this.state.activeIndex : this.state.activeIndex + 1;
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

  render() {

    if(this.props.isMobile)
    {
      const { activeIndex } = this.state;

      const slides = modal.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.name}

          >
            <div onClick = {this.handleShow.bind(this, item.body, item.title, item.src)}>
              <CarouselCaption captionText={item.title} captionHeader={null} className={'screen-carousel-slide-text screen-carousel-slide-text'+item.src} />
            </div>
          </CarouselItem>
        );
      });

      return(
        <div className ="screenBody">
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

            <Modal isOpen = {this.state.open} toggle = {this.handleShow} className = {'screenModalAll screen-modal' + this.state.src}>
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
              <p className = {'table-cell-text table-cell-text'+item.src}>{item.title}</p>
            </div>
          );
      });

      const breakpoint = Math.ceil(tiles.length / 2);

      const row1 = tiles.splice(0, breakpoint);
      const row2 = tiles;

      return (
          <div className ="screenBody">

            <div id="Body-Table-Container">
              <div id="Body-Table-Row1">
                {row1}
              </div>

              <div id="Body-Table-Row2">
                {row2}
              </div>
            </div>

          <Modal isOpen = {this.state.open} toggle = {this.handleShow} className = {'modalAll screen-modal' + this.state.src}>
            <ModalHeader toggle={this.toggle}>
              <h5 className = "modal-title">{this.state.title}</h5>
            </ModalHeader>
            <ModalBody>
              {this.state.body}
            </ModalBody>
          </Modal>

        </div>

      );
    }
  }

}

const modal = [
{
  title: 'THE EXPOSITOR',
  src: '00',
  body:
  (
    <div>
    <p>The first installment of a regionally themed trilogy, “The Expositor” is a fictional period
    drama set in the late nineteenth century. Due to its ambitious content, it has steep
    budgetary requirements. Likewise, multiple sophisticated roles will attract stars with
    potentially high salary demands.</p>

    <p>The film’s protagonist is DR. WILLIAM SIDNEY (70), a retired physician in
    Shullsburg, Wisconsin. The septuagenarian visits his wife’s grave in the opening scene
    and begs her posthumous forgiveness for an as-yet-unknown transgression. Sidney’s
    antagonist is his past, specifically his discipleship thirty-five years previously under the
    auspices of JOSEPH JAMES (40), the founding prophet of a Christian commune, the
    Millennial Church of Saints located in Zion, Illinois.</p>

    <p>ARTHUR WILEY (30) is a secondary character, a newspaper reporter for the <span className="italicized">Rocky
    Mountain Tribune</span>. He is familiar with the Millennial Church, now headquartered in the
    West; and he travels thirteen hundred miles in an effort to locate Sidney and interview
    him about his past relationship with James. Wiley has an ulterior motive. Namely, he has
    a fiancé, who recently was baptized into the Millennial Church, contrary to his wishes,
    and he is out to prove that James was a charlatan. Glimpses into this subplot are shown
    through Wiley’s conversations with a flirtatious innkeeper named Becky Baxter.</p>

    <p>Initially, Dr. Sidney denies his identity, but Wiley’s bashful persistence pays off, and the
    snoop is able to get Sidney to open up about his subservience to the madman, James. Dr.
    Sidney is a sympathetic figure who long ago compromised his values with God’s
    permission. He laments that, on multiple occasions, he performed abortions at the
    prophet’s insistence. More so, he is burdened by his feeble, copycat attempt to seduce a
    vulnerable widow in Zion. Though rebuffed, his actions caused immeasurable pain to his
    wife Jane, and he blames himself for her early death.</p>

    <p>Meanwhile, James is exposited as a wolf in sheep’s clothing, a narcissistic figure whose
    villainy is widely accepted as virtue. James’ arc follows the formula of a Greek tragedy,
    and is revealed through narrated flashbacks, akin to <span className="italicized">The Shawshank Redemption</span>.
    Ironically, the prophet’s demise is foretold by his own oracle, a book of scripture called
    <span className="italicized"> The Priceless Jewel</span>.</p>

    <p>This story is a cautionary tale that confronts an archetype, though most of the human race
    seems to be incapable of facing this particular vulnerability. “The Expositor” is a surreal
    testament about common individuals who are willing to compromise their morals in a
    groupthink environment wherein a supernatural master rules them. This film will arouse
    believers and non-believers as it explores Zion’s systematic transformation from a culture
    of Christian economics to one of apocalyptic lunacy wherein serial rape, adultery, and
    homicide are rationalized. Sidney’s narrative ends with the fiery destruction of James’s
    temple, followed by the self-anointed holy man’s violent death. Like Bugsy Siegel, James
    is riddled with bullets by unidentified assailants. The parallels to Mormonism will be
    obvious to anyone familiar with its history.</p>
    </div>
  )
},
{
  title: 'TESTIMONY',
  src: '01',
  body:
  (
    <div>
      <p>“Testimony” is a contemporary drama with a lean budget. It is the second installment of a
      regionally themed trilogy, proselytic in an antithetical way because it lays bare the neurosis of
      religion and its subsequent abuses. It is in fact one individual’s testimony of a gospel that does
      not elevate his soul but crushes it. Ten million Mormons will be admonished by the patriarchy to
      boycott this movie, not because the church is misrepresented but precisely because it is
      represented, and they want their secrets to remain secret, hidden behind the cloak of sacredness.</p>

      <p>ANDY FOOTHILL is just ten years old when he suggests to his Sunday school teacher in a
      Mormon church in Salt Lake City that Jesus is a fictional manifestation of someone’s
      imagination. His mother, RAELYN (40), hears about his comments later that afternoon and gives
      him twenty lashes with her wooden spoon. RaeLyn is an overstressed, sleep-deprived mother of
      ten, in the throes of chronic postpartum depression. She embraces the fatiguing chores of
      motherhood, not because she loves children, but because she feels tyrannical allegiance to her
      Savior. Much of Act One is represented in flashbacks while Andy (now ELDER FOOTHILL
      [19]) stands at a window in his dormitory room at the Missionary Training Center, mentally
      rehearsing his clandestine escape.</p>

      <p>Act Two is set in southern California, where Andy (now 25) meets and falls in love with a fellow
      Mormon named Francisca Seymour (FRANKY [25]). Andy is a tall, handsome, broad-shouldered descendant of the master race. He is an enigma, because emotionally he is still a little
      boy. Though Andy and Franky have much in common, her orientation is different than his. She
      was raised in Provo, but she was born in Cape Verde to parents of mixed, undocumented
      heritage. Her lineage is significant because the Mormon Church is just a few years removed from
      amending a century-enforced doctrine of Aryan supremacy founded on Brigham Young’s “curse
      of Cain.” Andy falls apart when Franky relocates to attend medical school at Texas Tech
      University. His collapse is complete when he makes an impromptu trip to Lubbock and gets his
      nose bloodied by the fists of Franky’s new lover, a woman named JUDY (25).</p>

      <p>Act Three finds Andy (now 29) back in Salt Lake, living with his widowed mother. He has
      shoulder length hair and a beard. He is a failure, both professionally and romantically. An
      Oedipal theme emerges because he replaces his prematurely deceased father (VICTOR), not as
      RaeLyn’s bed partner but as her emotional punching bag. Painfully, Andy recognizes in
      retrospect that he mimicked RaeLyn’s mistreatment of his father and that he was indeed an
      accomplice to his figurative murder.</p>

      <p>Following a chaotic affair with a Florida transplant named JULIA (25), Andy decides that he
      would be better in intimate relationships if he had a nurturing mother that he could have
      sexualized. Twenty years of due diligence have brought him to an understanding of the futility of
      his self-perpetuating struggles. God has broken promise after promise to Andy because God is an
      aberration. In fact, Andy’s God is an abusive woman. Andy must redefine his world, a process
      which begins after Franky reconnects with him and requests his DNA so that she can have a
      child. In the final scene, Andy gathers all of his temple garments, tosses them into an outdoor
      fireplace, douses them with lighter fluid, and strikes a match.</p>
    </div>
  )
},
{
  title: 'EVERYTHING IS TEMPORARY',
  src: '02',
  body:
  (
    <div>
      <p>The third installment of a regionally themed trilogy, “Everything is Temporary” is a
      modern drama with lean budgetary requirements. BILL GUNTHER (42) is a high school
      science teacher in Salt Lake City who comes to the realization, after years of thoughtful
      consideration, that he is an atheist. He procrastinates making an announcement to his
      Mormon family and community because the word invokes hostility. Little does he know
      the severity of the backlash he faces. He comes to find that, of all the oppressed and
      profiled minorities that cultures choose to hate, no one is reviled quite like the faithless
      individual.</p>

      <p>Bill is “outed” while participating in a sensitivity workshop organized by the school
      district that employs him. At the end of the seminar, he gets punched in the gut by a man
      who found Jesus in an addiction recovery program and is offended by Bill’s perceived
      indifference to the Savior. Bill suffers a broken rib, which he has to explain to his wife
      Sarah when he gets home. Sarah is convinced that Bill is having an affair and that his
      injury is the work of a jealous husband. She is prepared to forgive him until she discovers
      the real cause of the altercation. Act One ends when she kicks him out of the house where
      he lives with her and their five children.</p>

      <p>Due to financial constraints, Bill moves into the house where he was raised, sharing space
      with his retired parents, in addition to his 90-year-old paternal grandfather. For better or
      worse, he reacquaints with a number of former associates, including an old schoolmate
      named Evan Barton. As it happens, Evan is the Bishop of the Mormon congregation
      where Bill’s parents go to church. As word of Bill’s apostasy spreads, it is his old friend
      who must convince him to change his heart. The alternative is to arrange an
      excommunication hearing. Meanwhile, Bill is blamed for every misfortune that affects
      the neighborhood, including the sudden death of his grandfather. Act Two ends when Bill
      and Sarah’s son Jason, a 20-year-old missionary in London, is shot by a deranged
      mugger. Jason survives the attack, but his companion, Porter Hatch, also from Salt Lake
      City, dies from his wounds.</p>

      <p>Thereafter, one by one, the dominoes in Bill’s life are toppled. He gets fired by the
      school district for unspecified reasons, he gets evicted by his own parents and moves into
      a camper, and his 17-year-old daughter becomes pregnant. Religionists cannot help but
      attach all the adversity to his atheism. God’s retribution for Bill’s faithlessness reaches its
      apex when Porter Hatch’s otherwise charitable father is so overcome with religiously
      rooted rage that he pulls a gun on Bill at Bill’s excommunication hearing. Luckily, Bill’s
      son Jason alertly thwarts the homicide attempt and prevents another tragedy.</p>

      <p>Eventually, order is restored in Bill’s life. He finds a new job at a private high school, his
      daughter gets married, and his wife apologizes for her extreme reaction to his views. Life
      normalizes, and yet everyone is changed. Indeed, they discover that everything is
      temporary and that joy should not be procrastinated.</p>
    </div>
  )
},
{
  title: 'A DIVINE ACCIDENT',
  src: '03',
  body:
  (
    <div>
      <p>“A Divine Accident” is a contemporary Christmas story, as anti-traditional as any ever devised.
      Its protagonist is HARRISON (40), a deeply flawed, has-been journalist in a city called
      Independence. Fact is, Harry is a never-was journalist. His only claim to fame is that he once
      represented the college newspaper at a mayoral debate eighteen years ago that pitted the
      incumbent, SONNY PRINCE (60), against a neophyte hippie named JUDAH MANSON (33).
      Judah was born in Independence but has Semitic heritage.</p>

      <p>Following the debate, Harry pledged his support to Judah, an unapologetic Marxist who was
      raised at the Lake Galilee Cooperative, a commune located on the fringe of town. Harry wrote an
      article about the challenger for the paper to spread Judah’s message of democratic socialism. But
      to Harry’s disappointment, Judah did not just lose a close election; he lost his life. He was
      murdered in broad daylight on Christmas day. What is worse, the mystifying investigation never
      resulted in a conviction. Thus, Harry’s task is to resurrect the story. More specifically, he must
      publicize a rudimentary documentary that he produced in the aftermath of the election and the
      subsequent murder.</p>

      <p>Eighteen years after the fact, Harry’s antagonist is a tangle of concepts, personified by the Prince
      family. Economic power wielded by three generations of Princes has suffocated the mountain
      charm of Harry’s hometown. The Prince family operates enterprises in oil extraction, mining,
      and the manufacture of military jet components. They own just about everything in
      Independence, including the city’s most prominent newspaper, <span className = "italicized">The Watch</span>. Harry’s challenge is
      compounded because he inherited a mental illness gene, and he slips more and more deeply into
      madness. He displays traits of paranoia, and he professes visitations from a ghost, a dead Welsh
      musician who channels his songs through Harry.</p>

      <p>But the Prince hierarchy did not just bring industry to Independence. They brought supreme
      power. An Aryan incarnation of Jesus Christ hangs on a cross in front of a temple on the main
      thoroughfare. The sculpture is a hybrid of Dan Fogelberg and Zac Ephron: a handsome, heavily
      muscled Messiah. Indeed, Independence is a theocracy, established under the premise that Jesus
      will make his second appearance on earth in the very near future. But it is insufficient to
      proclaim that the Lord is coming soon; he is coming to Independence. And it is the Prince
      family’s divine mission to build a billion dollar palace from which the Lord will govern the
      survivors of Armageddon. The only drawback is that the property they covet is the Lake Galilee
      Cooperative, which, to their dismay, is not for sale. Not to worry. They bank on the probability
      that power will prevail.</p>

      <p>Harry’s documentary ends with grainy footage from a surveillance camera at Prince Plaza. Judah
      lies in a pool of blood on the icy sidewalk, his bearded face pale and lifeless, his cruciform arms
      extended at ninety-degree angles on either side of his rag doll body. Harry intercuts between the
      tape and his own shots of the crucifix at the temple. The images are eerily similar. Was Judah
      Manson, in fact, the reincarnation of Jesus? And, did those who shouted his name the loudest
      murder him?</p>
    </div>
  )
},
{
  title: 'IN YOUR IMAGE',
  src: '04',
  body:
  (
    <div>
      <p>“In Your Image” is a contemporary character drama with a lean budget. It is set in the 1970s in
      the high desert town of Bell Basin. It begins when MAGGIE VALENTINE (30) befriends a
      Hopi Indian named Johnny Red Wolf, who identifies himself simply as RED (40). Red is an
      indigent man who is frequently seen sleeping at the local park. Not only does Maggie feed Red,
      but she invites him back to her apartment to shower, shave, and launder his effects. Her
      charitable act sets in motion an unthinkable chain of events.</p>

      <p>Maggie is a psychiatric tech at a halfway house for narcotics offenders. She is also a certified
      yogini with a desire to earn a master’s degree in social work and define a treatment model that
      unites Eastern spirituality with the advances of Western medicine. A looming obstacle is her
      husband, ROGER BALLARD (40), a Cessna pilot who transports mail for the post office. Roger
      has power issues and, admittedly, would prefer to have a wife who wears makeup and works as
      an accountant. Act One ends with the couple’s separation, after Roger, in an insomnia-fueled fit
      of rage, fills the cab of Maggie’s Datsun truck with yard clippings. Maggie finds an apartment,
      and Roger moves into a mobile home with his father, ARLEN BALLARD (65).</p>

      <p>Only after she gets away from Roger’s disharmony does Maggie muster the wherewithal to
      follow her own internal prompts. Throughout Act Two, she nurtures Red with the intention of
      transforming him into a productive member of the community. She is surprised to learn that Red
      has a master’s degree of his own and that he worked for seven years as a structural engineer on
      the Condor Canyon hydroelectric dam that is the centerpiece of the town and the engine of its
      economy. To her chagrin, she also learns that Red does not want to be changed and that his
      downtrodden condition, in his opinion, is a result of having been reshaped by white people, in
      their image. He regrets having gone to college, and more so, he regrets having betrayed the Great
      Mystery when he participated in the construction of a corporate artifice that is a toxic blight on
      Mother Earth.</p>

      <p>Eventually, Maggie recognizes that she is attempting to do the same thing to Red that Roger is
      trying to do to her. Red’s hereditary orientation is much different than hers, and he must follow
      his own path on his own terms. After a brief amorous turn, their relationship ends, and Red
      disappears, enabled by Maggie to absolve himself of his sins and undo the damage that he
      believes he has done. Act Two concludes with a bang, when a transformer inside of the Condor
      Canyon dam explodes. Initially, officials call it an accident until evidence reveals that someone
      with intimate knowledge of the structure destroyed it by deftly harnessing its own power.</p>

      <p>By necessity, Roger and his father find temporary shelter in Maggie’s apartment after an
      emergency evacuation of the flooded mobile home park. Act Three explores Roger’s attempts to
      reignite a romantic flame with Maggie. She is somewhat receptive to his advances but is quickly
      reminded that their differences are truly irreconcilable. In the process, she arrives at the
      realization that she is her own antagonist. Though she is accepted into graduate school, Maggie
      now has second thoughts about attending. Instead, she contemplates the possibility of traveling
      to India and studying yoga in the land of its origins.</p>
    </div>
  )
},
{
  title: 'THE BRAIN MERCHANT',
  src: '05',
  body:
  (
    <div>
      <p>Loosely adapted from Jack London’s semi-autobiographical novel, <span className="italicized" >Martin Eden</span>, this
      movie is a biopic about London’s rise to fame. Despite his impoverished childhood and
      his shortage of formal education, London draws on his exploits while riding rails across
      the country as an adolescent, shoveling coal on steamships, and surveying for gold in the
      Klondike to become the most famous and remunerated author in the world during the first
      decade of the twentieth century. Considered in perspective, London was a millionaire
      during a period of time when one could rent an apartment in San Francisco for ten dollars
      a month.</p>

      <p>Primarily, this is a story about social class. It is also a love story, albeit one of unrequited
      love. JACK LONDON meets RUTH APPLEGARTH, and both are instantly infatuated.
      The conflict is as old as storytelling. Ruth comes from Oakland, California’s upper crust,
      while Jack survived in the slums. Ruth intends to tame the bloody-knuckled adventurer,
      but Jack, despite his idealism, must answer the call of the wild. When Jack declares his
      desire to be a writer, Ruth and her family are amused at best, condescendingly dismissive
      at worst. Mr. Applegarth reluctantly offers him a clerking position at his law firm, but
      Jack declines due to his impetuous nature.</p>

      <p>Instead, Jack commences the arduous task of fiction writing, rising at five o’clock each
      morning to peck away on a rented typewriter, working for a pittance at his disapproving
      brother-in-law’s grocery store during the day, and resuming his writing at night, limiting
      himself to four hours of sleep. He submits dozens of stories to periodicals and is rejected
      at every turn. Years of futility pass. Jack works at multiple short-lived jobs, all the while
      maintaining his exhaustive agenda. Eventually, he returns to sea, a welcome turn of
      events for the Applegarth family, including Ruth, who is both sadden and relieved to see
      him go.</p>

      <p>Everyone knows how the story ends. An editor is enchanted by Jack’s rugged revelations.
      Then another, and still another. Jack’s fortune changes dramatically when <span className="italicized">The Saturday
      Evening Post</span> agrees to publish “The Call of the Wild” as a serial, one chapter each
      month. Readers discover, consciously or otherwise, that it is not merely a story about a
      dog, but an astute commentary on social order. The unfortunate truth is that classes
      cannot mix.</p>

      <p>Rich and famous in Act Three, but also hardened and cynical, Jack is surprised when he
      answers the doorbell of his penthouse and sees Ruth Applegarth standing at the entry.
      She is apologetic, even tearful, as she pleads for a second chance to rekindle a romance.
      Though initially sympathetic, Jack is wizened enough to recognize that he must reject her
      offer and look for love with an admirer who has a more compatible socioeconomic
      origin.</p>
    </div>
  )
},
{
  title: 'CHASING THE SUN',
  src: '06',
  body:
  (
    <div>
      <p>West meets East in this contemporary character drama that is the sequel to “In Your
      Image.” Its budget is similarly lean, although an expensive actress like Emma Stone
      would be attracted to the complexities of the lead role.</p>

      <p>Freelance journalist and Page, Arizona resident HELENA PALMER (30) writes an
      article for Smithsonian Magazine about the history of red wolves in the southwestern
      United States. Her research inspires her to delve into her own origins, in consideration
      that she was adopted as an infant. Afraid that she is betraying her adoptive parents,
      Helena discovers that her mysterious history is her antagonist. Despite her red hair and
      fair skin, Helena learns, after reluctantly having her DNA tested, that she is half Native
      American. To the chagrin of her editor in Washington DC, Ellie’s curiosity takes her all
      the way to Rishikesh, India to locate her biological mother.</p>
    </div>
  )
},
{
  title: 'BRIGHT PATH',
  src: '07',
  body:
  (
    <div>
      <p>“Bright Path” is a biopic that can be made with a modest budget, dependent upon the
      expense of purchasing the story rights. Act One opens in 1945 in a grimy motel room in
      Tijuana, Mexico, where JIM THORPE (58) wakes up in a tangle of bed sheets,
      accompanied by a hangover and a relative stranger named PATSY ASKEW (48). He
      soon determines that they were married in an impromptu ceremony last night. Jim is
      portly and brown. Patsy is petite and pale. In a metaphorical sense, brown must learn to
      get along with white.</p>

      <p>Many of the scenes in Act One are represented in Jim’s memory, while he and Patsy sort
      through photo albums in Jim’s trailer home in San Diego. On the wide-open prairies of
      Bellemont, Oklahoma, JIMMY (10) skillfully spears fish in a creek near his family’s
      home. He excels at rudimentary games of baseball and kickball. He even mythically
      (perhaps exaggeratedly) runs down a stray horse that flees the corral after Jimmy
      inadvertently leaves it open while retrieving his own homerun ball.</p>

      <p>Act Two is a cross-country drive, suggested by Patsy after she learns of Jim’s past fame.
      Jim’s goal is the return of his two Olympic gold medals, which were taken from him by
      the Amateur Athletic Union after it was determined that he had played professional
      baseball. Patsy claims to have the same goal, but her principal objective is to resurrect
      Jim’s celebrity and turn a profit from it. Patsy is a graduate of Vassar College. She is a
      piano player, a cocktail singer, and a self-anointed business manager. As it turns out, she
      is quite effective at booking appearances and collecting fees on behalf of the sports
      legend.</p>

      <p>Jim and Patsy make a living, but Jim is no closer to getting his Olympic medals back.
      Along their journey, he makes frequent impulsive stops to fish or hunt. Patsy is
      exasperated to learn that Jim’s favorite meal is squirrel. Both are physically abusive, but
      Patsy’s most effective weapon is emotional cruelty. On multiple occasions, she famously
      refers to Jim as a dumb Indian, to which he replies, “I’m a smart Indian. I’m a dumb
      white man.”</p>

      <p>Act Three begins with Patsy’s announcement that they are going back to California
      because she wants Jim to appear in movies. In a stunning turn of events, she negotiates a
      handshake agreement with MGM to make a movie about Jim’s life. The only hang up is
      her insistence that Jim play himself. After Patsy schedules a meeting with executives at
      Warner Brothers, MGM withdraws their offer, and it is indeed Warner Brothers that
      makes the movie, casting Burt Lancaster in the lead role.</p>

      <p>Postscript: Jim Thorpe’s gold medals were restored in 1982, twenty-nine years after his
      death.</p>
    </div>
  )
}];

const mapSizesToProps = sizes => ({
   isMobile: withSizes.isMobile(sizes),
   sizes: sizes
  });

export default withSizes(mapSizesToProps)(Screen);
