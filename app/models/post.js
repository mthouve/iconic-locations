import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  image: DS.attr('string'),
  content: DS.attr('string'),
  datePublished: DS.attr('string'),
  author: DS.belongsTo('author', { async: true }),
  tags: DS.hasMany('tag', { async: true })
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Snapper Rocks Surfing',
      subtitle: 'Surfing Away on Pennies a Day',
      content: '<p>Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls.</p><p>Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.</p><p>An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as.</p><p>Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation.</p><p>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an. Going eat set she books found met aware.</p><p>Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. New get described applauded incommode shameless out extremity but. Resembled at perpetual no believing is otherwise sportsman. Is do he dispatched cultivated travelling astonished. Melancholy am considered possession on collecting everything.</p><p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye.</p><p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p><p>Much evil soon high in hope do view. Out may few northward believing attempted. Yet timed being songs marry one defer men our. Although finished blessing do of. Consider speaking me prospect whatever if. Ten nearer rather hunted six parish indeed number. Allowance repulsive may contained can set suspected abilities cordially. Do part am he high rest that. So fruit to ready it being views match.</p>',
      image: 'http://lorempixel.com/1000/570/sports/4/',
      datePublished: new Date(Date.parse("2015-02-12T13:15:00Z")),
      author: 1,
      tags: [1, 2, 3, 4, 5, 6]
    },
    {
      id: 2,
      title: 'The Best Sushi in St. Louis',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/food/8/',
      content: '<p>Far much courteously goodness vulgar less regardless interminable far leopard globefish the the deer alas apologetically wildebeest vulgar among more poorly krill disrespectfully besides publicly.</p><p>Combed jeepers wherever apart vocal camel crab dear abhorrent much erotically some after therefore incapably spoon-fed lynx ouch sufficiently gazed extravagantly hey woodpecker marvelously alas much gradual insect more much jeez past beside raucously panther.</p><p>Bent winked salamander wry a hound a oh rabbit much the globefish the with capybara preparatory hello paid well horse breathless because dismally and vaguely crab some confident much hippopotamus droll and one chastely hello while normally cuddled dove much more surprisingly.</p><p>Amid while public overpaid far on or far shivered versus lightly far ineffective some less a oh adjusted mundane and and.</p><p>That this yikes because up overhung this alas unreceptive octopus impeccably cautious eminent a hardheadedly thus hey jellyfish insufferable and a subtly maternal whale.</p><p>Chose horse some beyond moaned less egret well mawkish before more unblushing camel where squarely and cobra pill caribou well jeepers brusquely that beneath abrupt toward decorously and fallacious assisted.</p><p>Powerlessly seal more goodness far until a up and tenaciously by a the salamander ineffectively much the misread capybara juggled celestial aside.</p>',
      datePublished: new Date(Date.parse("2015-02-07T16:21:00Z")),
      author: 2,
      tags: [1]
    },
    {
      id: 3,
      title: 'Seven Sweet Skyline Stays',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/city/4/',
      content: '<p>Suspiciously therefore much abidingly more far wow adventurously and that less a much hired jeepers hello wow crud gosh firefly the much smart dear mammoth timidly skimpy dependently.</p><p>Oh manatee one sloth dynamically unjustifiable on meretricious this some permissive manful rattlesnake rethought ocelot opposite congratulated hatchet hello away evasive fussily weasel the.</p><p>Gosh hey acceptable thus pending wedded far flimsy cat glaring vicariously a nosily suitably.</p><p>Outdid one more tyrannical wow lighted crud goodness far versus scandalously dealt thus yikes brightly and near mandrill invoked eternal during regardless and amid amidst neurotic ate much until on.</p><p>Successful up toucan besides tonelessly the above and dire irrational until piteously far much the fraudulent and as dear hugged much meticulously cravenly monumentally goat darn unavoidable across cow conclusive owing boomed caterpillar owl dear indiscriminate groaned remade neutral grumbled according at cautious where.</p>',
      datePublished: new Date(Date.parse("2015-02-06T09:32:00Z")),
      author: 3,
      tags: [1]
    },
    {
      id: 4,
      title: 'The Best Small Towns',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/nature/4/',
      content: '<p>Via abortive hello yikes since inconsiderately physically gosh and remade more crud and terse dear this sobbed save ran admirable that on plain exuberant and that.</p><p>Since as grizzly jeez much vehement thus more freshly ouch far rationally slept popularly the far in sheep knelt.</p><p>That tenacious ouch alas and across and after yikes the uselessly rampantly.</p><p>Despite dwelled some amiably darn barring flaunting in hello far after far far apart groaned that kangaroo jeez overshot fit trenchantly lavish armadillo under far pitifully while jeepers pulled generous exultingly when carnal goodness one beside immutable some jovially tremendous amongst.</p><p>Nodded less on falcon usefully some depending then mongoose bald goodness in much much bounced hey breathless because dear notwithstanding this so near antagonistic gosh gosh gasped flinched jeez jeez as less jeez between panther.</p><p>Piranha turtle far alas hummingbird this jeepers scorpion delicately much ducked that one and strong after anagogic dubious fled excepting far implacably far more darn crane untruthful disconsolate save yikes hedgehog ladybug gosh drunken as upheld on oyster laggard along assentingly when.</p><p>Stuck compatible far set lantern across gosh alas save a and far save irritably one desperately far and lurid and within gorilla hazardously while far.</p><p>Less coughed some far and since grizzly insect up fluent thanks less less before.</p>',
      datePublished: new Date(Date.parse("2015-01-26T10:01:00Z")),
      author: 4,
      tags: [1]
    },
    {
      id: 5,
      title: 'Top Getaways for Pet Lovers',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/animals/9/',
      content: '<p>Badger much coarse some whimpered in up more some a spontaneously indefatigably and fussily and ouch menially randomly oh much ferret emu far music much honest jeering jellyfish wretchedly far far cow shined unheedfully moaned sullen ladybug that and and yikes shivered wherever together.</p><p>Up prior and rabbit tearfully well inventoried otter foresaw besides far much especially the stylistically faint numbly this fatal far lizard steadfast became neglectful got and and stared strident whimpered frowned.</p><p>Piranha palpable essentially and much and the less humanely much above so dear slatternly hello and rapidly jay in less less warthog trim a one this less held dolphin jeepers far distinctly heroically artificially wow conjointly much well on impalpably therefore a.</p><p>Save naughty black this more flustered euphemistically python meadowlark overcame naughtily otter spun this fleet wow across.</p>',
      datePublished: new Date(Date.parse("2015-01-28T16:09:00Z")),
      author: 5,
      tags: [1]
    }
  ]
});
