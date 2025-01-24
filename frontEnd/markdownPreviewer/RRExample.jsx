const quotes = [
  { quote:"A revolution is not a dinner party, or writing an essay, or painting a picture, or doing embroidery; it cannot be so refined, so leisurely and gentle, so temperate, kind, courteous, restrained and magnanimous. A revolution is an insurrection, an act of violence by which one class overthrows another.", author: "Mao Zedong" },
  { quote:"In the sphere of theory, destroy the roots of ultra-democracy. First, it should be pointed out that the danger of ultra-democracy lies in the fact that it damages or even completely wrecks the Party organization and weakens or even completely undermines the Party's fighting capacity, rendering the Party incapable of fulfilling its fighting tasks and thereby causing the defeat of the revolution.", author: "Mao Zedong" },
  { quote:"Inner-Party criticism is a weapon for strengthening the Party organization and increasing its fighting capacity. In the Party organization of the Red Army, however, criticism is not always of this character, and sometimes turns into personal attack. As a result, it damages the Party organization as well as individuals. This is a manifestation of petty-bourgeois individualism.", author: "Mao Zedong" },
  { quote:"When we look at a thing, we must examine its essence and treat its appearance merely as an usher at the threshold, and once we cross the threshold, we must grasp the essence of the thing; this is the only reliable and scientific method of analysis.", author: "Mao Zedong" },
  { quote:"The revolutionary war is a war of the masses; only by mobilizing the masses and relying on them can we wage it.", author: "Mao Zedong" },
  { quote:"In approaching a problem a Marxist should see the whole as well as the parts. A frog in a well says, 'The sky is no bigger than the mouth of the well.' That is untrue, for the sky is not just the size of the mouth of the well. If it said, 'A part of the sky is the size of the mouth of a well', that would be true, for it tallies with the facts.", author: "Mao Zedong" },
  { quote:"We the Chinese nation have the spirit to fight the enemy to the last drop of our blood, the determination to recover our lost territory by our own efforts, and the ability to stand on our own feet in the family of nations.", author: "Mao Zedong" },
  { quote:"It is well known that when you do anything, unless you understand its actual circumstances, its nature and its relations to other things, you will not know the laws governing it, or know how to do it, or be able to do it well.", author: "Mao Zedong" },
  { quote:"War is the highest form of struggle for resolving contradictions, when they have developed to a certain stage, between classes, nations, states, or political groups, and it has existed ever since the emergence of private property and of classes.", author: "Mao Zedong" },
  { quote:"What we need is an enthusiastic but calm state of mind and intense but orderly work.", author: "Mao Zedong" },
  { quote:"Communists should be the most farsighted, the most self-sacrificing, the most resolute, and the least prejudiced in sizing up situations, and should rely on the majority of the masses and win their support.", author: "Mao Zedong" },
  { quote:"In class society, everyone lives as a member of a particular class, and every kind of thinking, without exception, is stamped with the brand of a class.", author: "Mao Zedong" },
  { quote:"All men must die, but death can vary in its significance. The ancient Chinese writer Sima Qian said, 'Though death befalls all men alike, it may be weightier than Mount Tai or lighter than a feather.' To die for the people is weightier than Mount Tai, but to work for the fascists and die for the exploiters and oppressors is lighter than a feather.", author: "Mao Zedong" },
  { quote:"The people, and the people alone, are the motive force in the making of world history.", author: "Mao Zedong" },
  { quote:"Policy and tactics are the life of the Party; leading comrades at all levels must give them full attention and must never on any account be negligent.", author: "Mao Zedong" },
  { quote:"Whoever sides with the revolutionary people is a revolutionary. Whoever sides with imperialism, feudalism and bureaucrat-capitalism is a counter-revolutionary.", author: "Mao Zedong" },
  { quote:"We must make a distinction between the enemy and ourselves, and we must not adopt an antagonistic stand towards comrades and treat them as we would the enemy.", author: "Mao Zedong" },
  { quote:"The atom bombs and hydrogen bombs in the hands of the U.S. imperialists will never cow those who refuse to be enslaved. The raging tide of the people of the world against the U.S. aggressors is irresistible.", author: "Mao Zedong" },
  { quote:"Political power grows out of the barrel of a gun.", author: "Mao Zedong" },
  { quote:"The world is yours, as well as ours, but in the last analysis, it is yours. You young people, full of vigor and vitality, are in the bloom of life, like the sun at eight or nine in the morning. Our hope is placed on you. The world belongs to you. China's future belongs to you.", author: "Mao Zedong" },
  { quote:"In class society, everyone lives as a member of a particular class, and every kind of thinking, without exception, is stamped with the brand of a class.", author: "Mao Zedong" },
  { quote:"All men must die, but death can vary in its significance. The ancient Chinese writer Sima Qian said, 'Though death befalls all men alike, it may be weightier than Mount Tai or lighter than a feather.' To die for the people is weightier than Mount Tai, but to work for the fascists and die for the exploiters and oppressors is lighter than a feather.", author: "Mao Zedong" },
  { quote:"The people, and the people alone, are the motive force in the making of world history.", author: "Mao Zedong" },
  { quote:"Policy and tactics are the life of the Party; leading comrades at all levels must give them full attention and must never on any account be negligent.", author: "Mao Zedong" },
  { quote:"Whoever sides with the revolutionary people is a revolutionary. Whoever sides with imperialism, feudalism and bureaucrat-capitalism is a counter-revolutionary.", author: "Mao Zedong" },
  { quote:"We must make a distinction between the enemy and ourselves, and we must not adopt an antagonistic stand towards comrades and treat them as we would the enemy.", author: "Mao Zedong" },
  { quote:"The atom bombs and hydrogen bombs in the hands of the U.S. imperialists will never cow those who refuse to be enslaved. The raging tide of the people of the world against the U.S. aggressors is irresistible.", author: "Mao Zedong" },
  { quote:"Political power grows out of the barrel of a gun.", author: "Mao Zedong" },
  { quote:"The world is yours, as well as ours, but in the last analysis, it is yours. You young people, full of vigor and vitality, are in the bloom of life, like the sun at eight or nine in the morning. Our hope is placed on you. The world belongs to you. China's future belongs to you.", author: "Mao Zedong" },
  { quote:"In class society, everyone lives as a member of a particular class, and every kind of thinking, without exception, is stamped with the brand of a class.", author: "Mao Zedong" },
  { quote:"All men must die, but death can vary in its significance. The ancient Chinese writer Sima Qian said, 'Though death befalls all men alike, it may be weightier than Mount Tai or lighter than a feather.' To die for the people is weightier than Mount Tai, but to work for the fascists and die for the exploiters and oppressors is lighter than a feather.", author: "Mao Zedong" },
  { quote:"The people, and the people alone, are the motive force in the making of world history.", author: "Mao Zedong" },

  { quote: "To the socialist it is not the horrors of war that are the hardest to endure ... but the horrors of the treachery shown by the leaders of present day socialism, the horrors of the collapse of the present-day International.", author: "Lenin, The European War and International Socialism (1914)" },
  { quote: "War cannot be abolished unless classes are abolished and Socialism is created.", author: "Lenin, Socialism and War (1915)" },
  { quote: "We fully regard civil wars, i.e., wars waged by the oppressed class against the oppressing class, slaves against slave-owners, serfs against land-owners, and wage-workers against the bourgeoisie, as legitimate, progressive and necessary.", author: "Lenin, Socialism and War (1915)" },
  { quote: "If tomorrow, Morocco were to declare war on France, India on England, Persia or China on Russia, and so forth, those would be 'just' 'defensive' wars, irrespective of who attacked first; and every Socialist would sympathise with the victory of the oppressed, dependent, unequal states against the oppressing, slave-owning, predatory 'great' powers.", author: "Lenin, Socialism and War (1915)" },
  { quote: "The working class cannot play its world-revolutionary role unless it wages a ruthless struggle against this renegacy, spinelessness, subservience to opportunism and unexampled vulgarization of the theories of Marxism.", author: "Lenin, Socialism and War (1915)" },
  { quote: "Convert the imperialist war into civil war.", author: "Lenin, Socialism and War (1915)" },
  { quote: "A revolutionary class cannot but wish for the defeat of its government in a reactionary war.", author: "Lenin, Socialism and War (1915)" },
  { quote: "Socialists must explain to the masses that they have no other road of salvation except the revolutionary overthrow of 'their' governments, and that advantage must be taken of these governments’ embarrassments in the present war precisely for this purpose.", author: "Lenin, Socialism and War (1915)" },
  { quote: "Socialists cannot achieve their great aim without fighting against all oppression of nations.", author: "Lenin, Socialism and War (1915)" },
  { quote: "The Socialists of oppressed nations must, in their turn, unfailingly fight for the complete (including organisational) unity of the workers of the oppressed and oppressing nationalities.", author: "Lenin, Socialism and War (1915)" },
  { quote: "The war of 1914-18 was imperialist (that is, an annexationist, predatory, war of plunder) on the part of both sides; it was a war for the division of the world, for the partition and repartition of colonies and spheres of influence of finance capital.", author: "Lenin, Imperialism: The Highest Stage of Capitalism (1914)" },
  { quote: "We Social-Democrats always stand for democracy, not 'in the name of capitalism,' but in the name of clearing the path for our movement, which clearing is impossible without the development of capitalism.", author: "Lenin, Letter to Inessa Armand (1916)" },
  { quote: "Monopolies, oligarchy, the striving for domination and not for freedom, the exploitation of an increasing number of small or weak nations by a handful of the richest or most powerful nations — all these have given birth to those distinctive characteristics of imperialism which compel us to define it as parasitic or decaying capitalism.", author: "Lenin, Imperialism: The Highest Stage of Capitalism (1914)" },
  { quote: "When nine-tenths of Africa had been seized (by 1900), when the whole world had been divided up, there was inevitably ushered in the era of monopoly possession of colonies and, consequently, of particularly intense struggle for the division and the redivision of the world.", author: "Lenin, Imperialism: The Highest Stage of Capitalism (1914)" },
  { quote: "The so-called Great Powers have long been exploiting and enslaving a whole number of small and weak nations. And the imperialist war is a war for the division and redivision of this kind of booty.", author: "Lenin, State and Revolution (1917)" },
  { quote: "It is not done in modern socialist parties to talk or even think about the significance of this idea, — the 'withering away' of the state.", author: "Lenin, State and Revolution (1917)" },
  { quote: "A standing army and police are the chief instruments of state power.", author: "Lenin, State and Revolution (1917)" },
  { quote: "Our Socialist-Revolutionaries and Mensheviks themselves share, and instil into the minds of the people, the false notion that universal suffrage 'in the present-day state' is really capable of revealing the will of the majority of the working people and of securing its realization.", author: "Lenin, State and Revolution (1917)" },
  { quote: "The working class must break up, smash the 'ready-made state machinery,' and not confine itself merely to laying hold of it.", author: "Lenin, State and Revolution (1917)" },
  { quote: "Democracy is a form of the state, it represents, on the one hand, the organized, systematic use of force against persons; but, on the other hand, it signifies the formal recognition of equality of citizens, the equal right of all to determine the structure of, and to administer, the state.", author: "Lenin, State and Revolution (1917)" },
  { quote: "Democracy for an insignificant minority, democracy for the rich — that is the democracy of capitalist society.", author: "Lenin, State and Revolution (1917)" },
  { quote: "The oppressed are allowed once every few years to decide which particular representatives of the oppressing class shall represent and repress them in parliament.", author: "Lenin, State and Revolution (1917)" },
  { quote: "The dictatorship of the proletariat, i.e., the organization of the vanguard of the oppressed as the ruling class for the purpose of suppressing the oppressors, cannot result merely in an expansion of democracy. Simultaneously with an immense expansion of democracy, which for the first time becomes democracy for the poor, democracy for the people, and not democracy for the money-bags, the dictatorship of the proletariat imposes a series of restrictions on the freedom of the oppressors, the exploiters, the capitalists.", author: "Lenin, State and Revolution (1917)" },
  { quote: "And so in capitalist society we have a democracy that is curtailed, wretched, false, a democracy only for the rich, for the minority. The dictatorship of the proletariat, the period of transition to communism, will for the first time create democracy for the people, for the majority, along with the necessary suppression of the exploiters, of the minority.", author: "Lenin, State and Revolution (1917)" },
  { quote: "In our attitude towards the war, which under the new government of Lvov and Co. unquestionably remains on Russia’s part a predatory imperialist war owing to the capitalist nature of that government, not the slightest concession to 'revolutionary defencism' is permissible.", author: "Lenin, April Theses (1917)" },
  { quote: "In view of the undoubted honesty of those broad sections of the mass believers in revolutionary defencism who accept the war only as a necessity, and not as a means of conquest, in view of the fact that they are being deceived by the bourgeoisie, it is necessary with particular thoroughness, persistence and patience to explain their error to them, and to prove that without overthrowing capital it is impossible to end the war by a truly democratic peace.", author: "Lenin, April Theses (1917)" },
  { quote: "The masses must be made to see that the Soviets of Workers’ Deputies are the only possible form of revolutionary government.", author: "Lenin, April Theses (1917)" },
  { quote: "Abolition of the police, the army and the bureaucracy. The salaries of all officials, all of whom are elective and displaceable at any time, not to exceed the average wage of a competent worker.", author: "Lenin, April Theses (1917)" },
  { quote: "It is not our immediate task to 'introduce' socialism, but only to bring social production and the distribution of products at once under the control of the Soviets of Workers’ Deputies.", author: "Lenin, April Theses (1917)" },
  { quote: "It is, of course, much easier to shout, abuse, and howl than to attempt to relate, to explain.", author: "Lenin, April Theses (1917)" },
  { quote: "A party is the vanguard of a class, and its duty is to lead the masses and not merely to reflect the average political level of the masses.", author: "Lenin, Speech On The Agrarian Question November 14 (1917)" },
  { quote: "It is the duty of the revolution to put an end to compromise, and to put an end to compromise means taking the path of socialist revolution.", author: "Lenin, Speech On The Agrarian Question November 14 (1917)" },
  { quote: "The Russian is a bad worker compared with people in advanced countries. It could not be otherwise under the tsarist regime and in view of the persistence of the hangover from serfdom. The task that the Soviet government must set the people in all its scope is - learn to work. The Taylor system, the last word of capitalism in this respect, like all capitalist progress, is a combination of the refined brutality of bourgeois exploitation and a number of the greatest scientific achievements in the field.", author: "Lenin, The Immediate Task of the Soviet Government (1918)" },
  { quote: "Human childbirth is an act which transforms the woman into an almost lifeless, bloodstained heap of flesh, tortured, tormented and driven frantic by pain.", author: "Lenin, Prophetic Words (1918)" },
  { quote: "Let the 'socialist' snivellers croak, let the bourgeoisie rage and fume, but only people who shut their eyes so as not to see, and stuff their ears so as not to hear, can fail to notice that all over the world the birth pangs of the old, capitalist society, which is pregnant with socialism, have begun.", author: "Lenin, Prophetic Words (1918)" },
  { quote: "The passing of state power from one class to another is the first, the principal, the basic sign of a revolution, both in the strictly scientific and in the practical political meaning of that term. To this extent, the bourgeois, or the bourgeois-democratic, revolution in Russia is completed.", author: "Lenin, Letters on Tactics (1918)" },

  { quote: "Those who do not move, do not notice their chains.", author: "Rosa Luxemburg" },
  { quote: "History is the only true teacher, the revolution the best school for the proletariat.", author: "Rosa Luxemburg" },
  { quote: "One day, when the world market is more or less fully developed and can no longer be suddenly enlarged, and if labour productivity continues to advance, then sooner or later the periodic clashes between productive forces and market barriers will begin, and because of their recurrence, these will naturally become increasingly rough and stormy.", author: "Rosa Luxemburg" },
  { quote: "Freedom is always and exclusively freedom for the one who thinks differently.", author: "Rosa Luxemburg" },
  { quote: "Only through the conscious action of the working masses in city and country can it be brought to life, only through the people's highest intellectual maturity and inexhaustible idealism can it be brought safely through all storms and find its way to port.", author: "Rosa Luxemburg" },
  { quote: "The masses are the decisive element, they are the rock on which the final victory of the revolution will be built.", author: "Rosa Luxemburg" },
  { quote: "Freedom only for the members of the government, only for the members of the Party - though they are quite numerous - is no freedom at all.", author: "Rosa Luxemburg" },
  { quote: "Bourgeois class domination is undoubtedly an historical necessity, but, so too, the rising of the working class against it. Capital is an historical necessity, but, so too, its grave digger, the socialist proletariat.", author: "Rosa Luxemburg" },
  { quote: "Marxism is a revolutionary worldview that must always struggle for new revelations.", author: "Rosa Luxemburg" },
  { quote: "Social democracy... is only the advance guard of the proletariat, a small piece of the total working masses; blood from their blood, and flesh from their flesh.", author: "Rosa Luxemburg" },
  { quote: "The working classes in every country only learn to fight in the course of their struggles.", author: "Rosa Luxemburg" },
  { quote: "The masses are in reality their own leaders, dialectically creating their own development process.", author: "Rosa Luxemburg" },
  { quote: "People finally understood that the role of the social-democratic party rests on its conscious leadership of the mass struggle against the existing society, a struggle that must reckon with the vital, necessary conditions of capitalist society.", author: "Rosa Luxemburg" },
  { quote: "The more that social democracy develops, grows, and becomes stronger, the more the enlightened masses of workers will take their own destinies, the leadership of their movement, and the determination of its direction into their own hands.", author: "Rosa Luxemburg" },
  { quote: "Work for legal reform takes place only within the framework of the social form created by the last revolution.", author: "Rosa Luxemburg" },
  { quote: "Social democracy seeks and finds the ways, and particular slogans, of the workers' struggle only in the course of the development of this struggle, and gains directions for the way forward through this struggle alone.", author: "Rosa Luxemburg" },
  { quote: "Between social reforms and revolution there exists for the social democracy an indissoluble tie. The struggle for reforms is its means; the social revolution, its aim.", author: "Rosa Luxemburg" },
  { quote: "Credit reproduces all the fundamental antagonisms of the capitalist world. It accentuates them. It precipitates their development and thus pushes the capitalist world forward to its own destruction.", author: "Rosa Luxemburg" },
  { quote: "Our scribblings are usually not lyrics but whirrings, without colour or resonance, like the tone of an engine-wheel. I believe that the cause lies in the fact that when people write, they forget for the most part to dig deeply into themselves and to feel the whole import and truth of what they are writing.", author: "Rosa Luxemburg" },
  { quote: "Democracy is indispensable, not because it renders superfluous the conquest of political power by the proletariat, but, on the contrary, because it makes this seizure of power both necessary and possible.", author: "Rosa Luxemburg" },
  { quote: "Under the leaden sway of Alexander III's government, the silence of the graveyard prevailed. Russian society, equally discouraged by the collapse of all hopes for peaceful reforms and by the apparent ineffectiveness of the revolutionary movement, was in the grip of a mood of depression and resignation.", author: "Rosa Luxemburg" },
  { quote: "The very action of the proletariat is a determining factor in history. And although we can no more jump over the stages of historical development than a man can jump over his shadow, nevertheless, we can accelerate or retard that development.", author: "Rosa Luxemburg" },
  { quote: "The existing legal constitution is nothing but the product of a revolution. Revolution is the act of political creation in the history of classes, while constitutional legislation is the expression of the continual political vegetation of a society.", author: "Rosa Luxemburg" },
  { quote: "Though foreign loans are indispensable for the emancipation of the rising capitalist states, they are yet the surest ties by which the old capitalist states maintain their influence, exercise financial control, and exert pressure on the customs, foreign and commercial policy of the young capitalist states.", author: "Rosa Luxemburg" },
  { quote: "In the Imperialist Era, the foreign loan played an outstanding part as a means for young capitalist countries to acquire independence.", author: "Rosa Luxemburg" },

  { quote: "Hate does not produce love, and by hate one cannot remake the world.", author: "Errico Malatesta" },
  { quote: "In all times and in all places, whatever may be the name that the government takes, whatever has been its origin, or its organization, its essential function is always that of oppressing and exploiting the masses, and of defending the oppressors and exploiters. Its principal characteristic and indispensable instruments are the bailiff and the tax collector, the soldier and the prison. And to these are necessarily added the time-serving priest or teacher, as the case may be, supported and protected by the government, to render the spirit of the people servile and make them docile under the yoke.", author: "Errico Malatesta" },
  { quote: "Impossibility never prevented anything from happening.", author: "Errico Malatesta" },
  { quote: "By anarchist spirit I mean that deeply human sentiment, which aims at the good of all, freedom and justice for all, solidarity and love among the people; which is not an exclusive characteristic only of self-declared anarchists, but inspires all people who have a generous heart and an open mind.", author: "Errico Malatesta" },
  { quote: "The freedom we want, for ourselves and for others, is not an absolute metaphysical, abstract freedom which in practice is inevitably translated into the oppression of the weak; but it is real freedom, possible freedom, which is the conscious community of interests, voluntary solidarity.", author: "Errico Malatesta" },
  { quote: "By definition an anarchist is he who does not wish to be oppressed nor wishes to be himself an oppressor; who wants the greatest well-being, freedom and development for all human beings. His ideas, his wishes have their origin in a feeling of sympathy, love and respect for humanity: a feeling which must be sufficiently strong to induce him to want the well-being of others as much as his own, and to renounce those personal advantages, the achievement of which, would involve the sacrifice of others.", author: "Errico Malatesta" },
  { quote: "We too aspire to communism as the most perfect achievement of human solidarity, but it must be anarchist communism, that is, freely desired and accepted, and the means by which the freedom of everyone is guaranteed and can expand; for these reasons we maintain that State communism, which is authoritarian and imposed, is the most hateful tyranny that has ever afflicted, tormented and handicapped mankind.", author: "Errico Malatesta" },
  { quote: "The needs, tastes, aspirations and interests of mankind are neither similar nor naturally harmonious; often they are diametrically opposed and antagonistic. On the other hand, the life of each individual is so conditioned by the life of others that it would be impossible, even assuming it were convenient to do so, to isolate oneself and live one’s own life. Social solidarity is a fact from which no one can escape.", author: "Errico Malatesta" },
  { quote: "Capitalism is the same everywhere. In order to survive and prosper it needs a permanent situation of partial scarcity: it needs it to maintain its prices and to create hungry masses to work under any conditions.", author: "Errico Malatesta" },
  { quote: "Governments oppress mankind in two ways, either directly, by brute force, that is physical violence, or indirectly, by depriving them of the means of subsistence and thus reducing them to helplessness at discretion.", author: "Errico Malatesta" },
  { quote: "Anarchism is organization, organization and more organization.", author: "Errico Malatesta" },
  { quote: "There can be no doubt that the Anarchist Idea, denying government, is by its very nature opposed to violence, which is the essence of every authoritarian system - the mode of action of every government.", author: "Errico Malatesta" },
  { quote: "We are, in any case, only one of the forces acting in society.", author: "Errico Malatesta" },
  { quote: "To condone ferocious anti-human feelings and raise them to the level of principle as a tactic for a movement... is both evil and counter-revolutionary.", author: "Errico Malatesta" },
  { quote: "If today we fall without lowering our colors, our cause is certain of victory tomorrow.", author: "Errico Malatesta" },
  { quote: "Anarchy is synonymous with Socialism. Because both signify the abolition of exploitation and of the domination of man over man, whether maintained by the force of arms or by the monopolization of the means of life.", author: "Errico Malatesta" },
  { quote: "Man, like all living beings, adapts and habituates himself to the conditions in which he lives, and transmits by inheritance his acquired habits. Thus being born and having lived in bondage, being the descendant of a long line of slaves, man, when he began to think, believed that slavery was an essential condition of life; and liberty seemed to him an impossible thing.", author: "Errico Malatesta" },
  { quote: "I only believe those things which can be proved; but I know full well that proofs are relative and can, and are in fact, continually superseded and cancelled out by other proved facts; and therefore I believe that doubt should be the mental approach of all who aspire to get ever closer to the truth, or at least to that much of truth that it is possible to establish.", author: "Errico Malatesta" },
  { quote: "Communism made through the will of a government instead of through the direct and voluntary work of groups of workers does not really appeal to me. If it was possible, it would be the most suffocating tyranny to which human society has ever been subjected.", author: "Errico Malatesta" },
  { quote: "There is among us a tendency to consider true, good and fine everything that appears under the agreeable cloak of revolt against the accepted 'truths', especially if supported by people who are, or call themselves, anarchists. This shows a deficiency of that spirit of investigation and criticism that should be maximally developed in anarchists.", author: "Errico Malatesta" },
  { quote: "The one essential is that a society be constituted in which the exploitation and domination of man by man are impossible. That the society, in other words, be such that the means of existence and development of labor be free and open to everyone, and all be able to co-operate, according to their wishes and their knowledge, in the organization of social life.", author: "Errico Malatesta" },
  { quote: "We do not carry on our struggle in order to put ourselves in the place of the exploiters and oppressors of today, nor do we even struggle for the triumph of an empty abstraction.", author: "Errico Malatesta" },
  { quote: "A society without a government, which would act by free, voluntary co-operation, trusting entirely to the spontaneous action of those interested, and founded altogether on solidarity and sympathy, is certainly, they say, a very beautiful ideal, but, like all ideals, it is a castle in the air.", author: "Errico Malatesta" }

  ];

const randomIndexer = () => {
  return Math.floor(Math.random() * quotes.length);
}

let randomIndex = Math.floor(Math.random() * quotes.length);

//REDUX

const randomQuote = quotes[randomIndexer()]; // Get a single random quote

const initialState = {
  quote: randomQuote.quote,
  author: randomQuote.author,
};

const CHANGE = 'CHANGE'

const changeQuote = (quote) => {
  return {
    type: CHANGE,
    quote: quote.quote,
    author: quote.author
  }
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        quote: action.quote,
        author: action.author,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(quoteReducer);

//REACT
//αυτά χρησιμοποιούντε στην έννωση React/Rerdux (gpt add more)
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = () => {
    const newQuote = quotes[randomIndexer()];
    this.props.changeQuote(newQuote); // Dispatch the action to update Redux state
  }

  render() {
    return (
      <div className="p-4" id="quote-box">
      <div id="text">
        <p>"{this.props.quote}"</p>
      </div>
      <div className="d-flex justify-content-end align-items-center" id="author">
        <strong>- {this.props.author}</strong>
      </div>
      <button
        className="btn btn-primary me-2"
        id="new-quote"
        onClick={this.handleChange}
      >
        <i className="fas fa-sync-alt"></i> New
      </button>
      <button className="btn btn-info text-white" id="tweet-quote">
        <i className="fab fa-twitter"></i>{' '}
        <a
          href={`https://twitter.com/intent/tweet?text="${this.props.quote}" - ${this.props.author}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Tweet
        </a>
      </button>
    </div>
    )
  }
}


// Map state and dispatch to props
const mapStateToProps = (state) => ({
  quote: state.quote,
  author: state.author,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuote: (quote) => dispatch(changeQuote(quote)),
});

// Connect React component to Redux
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// Render App
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);





