// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function getAllGames(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      tags: [
        'single player',
        'action',
        'narration',
        'cinematic',
        'drama',
        'science fiction',
      ],
      _id: '5e4c5d971625f208e43a3870',
      title: 'Detroit: Become Human',
      posterImg: 'https://i.imgur.com/c0fZxQC.jpg',
      developer: '5e976f6a57d97f425c2256aa',
      date: '2019-12-11T23:00:00.000Z',
      description:
        'Detroit 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.\\nIn this first chapter, play as Connor, the unique prototype android serving the Detroit police department and face a deviant android who has taken a little girl hostage. Look for clues, investigate the crime scene and choose your approach wisely as each of your actions will affect the outcome of the mission and bring you to one of the six different endings for this chapter.',
      price: 40,
      __v: 0,
    },
    {
      tags: ['shooter', 'action', 'simulation', 'mech'],
      _id: '5e4c60dc07ec873b0431166d',
      title: 'MechWarrior 5: Mercenaries',
      posterImg:
        'https://cdn1.epicgames.com/undefined/offer/S2-Store-Primary-Promo-1280x1440-9ed9999a41eda751681e392016d636ba.jpg',
      developer: '5e97712957d97f425c2256ab',
      date: '2019-12-09T23:00:00.000Z',
      description:
        'The year is 3015. Humanity has colonized thousands of systems across a vast region of space splintered by centuries of conflict. The battlefields of the future are dominated by MechWarriors, elite pilots of hulking machines of war known as BattleMechs. It is a lucrative time to be a mercenary. <br><br> A World of Destruction - Level entire cities and decimate armies of enemy forces while piloting hundreds of unique BattleMech variants.<br><br> Seek The Truth - Follow a path of interstellar intrigue in a quest for glory and revenge as the leader of a mercenary company reborn in the flames of near destruction.<br><br> The Merc Life - Manage the intricacies of running an expanding mercenary company, from the maintenance and acquisition of BattleMechs to the hiring of fellow MechWarriors.<br><br> Fight Together - Fight alongside your friends with four-player PvE co-op support.',
      price: 50,
      __v: 0,
    },
    {
      tags: [
        'open world',
        'first person',
        'simulation',
        'building',
        'management',
      ],
      _id: '5e5846d9e9fafb3cfc2c6c2a',
      title: 'Satisfactory',
      posterImg:
        'https://cdn1.epicgames.com/epic/offer/PotraitSatisfactorySale-860x1148-8c5ae98dee1618dfa09cfe9dcec4eb43.jpg',
      developer: '5e97724157d97f425c2256ac',
      date: '2019-03-18T23:00:00.000Z',
      description:
        'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!',
      price: 30,
      __v: 0,
    },
    {
      tags: ['action', 'rpg', 'history', 'open world', 'third person'],
      _id: '5e584871e9fafb3cfc2c6c2b',
      title: 'Assassins Creed Odyssey',
      posterImg:
        'https://images-na.ssl-images-amazon.com/images/I/81uGwhMm9gL._AC_SY679_.jpg',
      developer: '5e97735757d97f425c2256ad',
      date: '2018-10-04T22:00:00.000Z',
      description:
        'From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece',
      price: 50,
      __v: 0,
    },
    {
      tags: ['card game', 'ccg'],
      _id: '5e58490de9fafb3cfc2c6c2c',
      title: 'Magic: The Gathering Arena',
      posterImg:
        'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1l8n.jpg',
      developer: '5e97744a57d97f425c2256ae',
      date: '2020-01-15T23:00:00.000Z',
      description:
        "You know the name. Now download and play the original strategy card game on your PC. Unlock powerful decks right away, earn rewards just by playing, and jump into action with a variety of game formats for players of all skill levels. There's never been a better time to get into Magic.",
      price: 0,
      __v: 0,
    },
    {
      tags: ['action', 'supernatural', 'adventure', 'third person'],
      _id: '5e584a23e9fafb3cfc2c6c2d',
      title: 'Control',
      posterImg:
        'https://cdn-products.eneba.com/resized-products/3g_ECP85lvtKhlreEF1-NjSfuBCdCEIp6I6Fo4f1R2Q_390x400_1x-0.jpeg',
      developer: '5e9774c657d97f425c2256af',
      date: '2019-08-26T22:00:00.000Z',
      description:
        "After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.<br><br>From developer Remedy Entertainment, this supernatural 3rd person action-adventure will challenge you to master the combination of supernatural abilities, modifiable loadouts and reactive environments while fighting through a deep and unpredictable world.<br><br>Control is Jesse Faden's story and her personal search for answers as she grows into the role of the Director. The world of Control has its own story, as do the allies Jesse meets along the way. Jesse works with other Bureau agents and discovers strange experiments and secrets.",
      price: 60,
      __v: 0,
    },
    {
      tags: ['action', 'single player', 'narration', 'cinematic', 'drama'],
      _id: '5ed0d4ad9e2570201c2afcc1',
      title: 'Heavy Rain',
      posterImg: 'https://i.imgur.com/Y4bsytZ.jpg',
      developer: '5e976f6a57d97f425c2256aa',
      date: '2010-02-23T22:00:00.000Z',
      description:
        'Play four different characters in this tension-soaked psychological thriller. Choose your next move carefully, as every decision may have dramatic outcomes. Spanning four days of mystery and suspense, the hunt is on for a murderer known only as “The Origami Killer” - named after his macabre calling card of leaving behind folded paper shapes at crime scenes. Each of the four characters follow their own leads, with their own motives. Directing their very actions, you have to prevent the killer from claiming a new victim. How this story ends is entirely up to you…',
      price: 20,
      __v: 0,
    },
    {
      tags: ['action', 'single player', 'narration', 'cinematic', 'drama'],
      _id: '5ed0d6659e2570201c2afcc2',
      title: 'Beyond: Two Souls',
      posterImg:
        'https://upload.wikimedia.org/wikipedia/en/d/da/Beyond_Two_Souls_final_cover.jpg',
      developer: '5e976f6a57d97f425c2256aa',
      date: '2013-10-07T22:00:00.000Z',
      description:
        "A unique psychological action thriller delivered by A-list Hollywood performances of Ellen PAGE, Willem DAFOE, Beyond: Two Souls™ takes you on a thrilling journey across the globe as you play out the remarkable life of Jodie Holmes.<br>Born with a connection to a mysterious entity with incredible powers, Jodie is different. Your actions will determine Jodie's fate as she faces extraordinary challenges, danger, and heart-wrenching loss on a journey to discover the truth of who she is.",
      price: 25,
      __v: 0,
    },
    {
      tags: ['action', 'rpg', 'open world', 'history', 'third person'],
      _id: '5ed0d8eb60b52e450845ba6f',
      title: 'Assassins Creed Origins',
      posterImg:
        'https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png',
      developer: '5e97735757d97f425c2256ad',
      date: '2017-10-26T22:00:00.000Z',
      description:
        "Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin's Brotherhood.",
      price: 40,
      __v: 0,
    },
    {
      tags: ['action', 'rpg', 'co-op', 'isometric', 'top-down'],
      _id: '5f3e374a9614db3248e20dc4',
      title: 'Torchlight II',
      posterImg: 'https://i.imgur.com/kAdHycz.jpg',
      developer: '5f3e36c09614db3248e20dc3',
      date: '2012-09-19T22:00:00.000Z',
      description:
        "Torchlight II takes place in a fantasy world where the player character can be any of four classes, each with different skills and abilities. The plot starts with the destruction of the town of Torchlight, at the hands of the Alchemist from the first game, and has the character following the trail of destruction left in the Alchemist's wake as he searches for a cure to his illness which has driven him insane.",
      price: 20,
      __v: 0,
    },
    {
      tags: ['action', 'rpg', 'isometric', 'top-down'],
      _id: '5f3e37e09614db3248e20dc5',
      title: 'Torchlight',
      posterImg: 'https://i.imgur.com/hwZvT10.jpg',
      developer: '5f3e36c09614db3248e20dc3',
      date: '2012-09-19T22:00:00.000Z',
      description:
        'In the fantasy world that serves as the setting of Torchlight, Ember is a mysterious ore which has the power to imbue people and items with magical power. The mining boomtown called Torchlight is built above a rich vein of Ember, and adventurers are drawn there seeking the magical substance and the enchanted items it creates. However, as the player character explores the dungeons below Torchlight, they discover that Ember has a corrupting influence which led to the fall of past civilizations and endangers those who use it in the present.',
      price: 10,
      __v: 0,
    },
    {
      tags: [
        'action',
        'rpg',
        'single player',
        'first person',
        'science fiction',
        'alternate history',
      ],
      _id: '5f3e39829614db3248e20dc7',
      title: 'The Outer Worlds',
      posterImg: 'https://i.imgur.com/jvmapOO.jpg',
      developer: '5f3e38a59614db3248e20dc6',
      date: '2019-10-24T22:00:00.000Z',
      description:
        "The Outer Worlds is a new single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division.<br>Lost in transit while on a colonist ship bound for the furthest edge of the galaxy, you awake decades later only to find yourself in the midst of a deep conspiracy threatening to destroy the Halcyon colony. As you explore the furthest reaches of space and encounter various factions, all vying for power, the character you decide to become will determine how this player-driven story unfolds. In the corporate equation for the colony, you are the unplanned variable.<br>• The player-driven story RPG: In keeping with the Obsidian tradition, how you approach The Outer Worlds is up to you. Your choices affect not only the way the story develops; but your character build, companion stories, and end game scenarios.<br>• You can be flawed, in a good way: New to The Outer Worlds is the idea of flaws. A compelling hero is made by the flaws they carry with them. While playing The Outer Worlds, the game tracks your experience to find what you aren't particularly good at. Keep getting attacked by Raptidons? Taking the Raptiphobia flaw gives you a debuff when confronting the vicious creatures, but rewards you with an additional character perk immediately. This optional approach to the game helps you build the character you want while exploring Halcyon.<br>• Lead your companions: During your journey through the furthest colony, you will meet a host of characters who will want to join your crew. Armed with unique abilities, these companions all have their own missions, motivations, and ideals. It's up to you to help them achieve their goals, or turn them to your own ends.<br>• Explore the corporate colony: Halcyon is a colony at the edge of the galaxy owned and operated by a corporate board. They control everything... except for the alien monsters left behind when the terraforming of the colony's two planets didn't exactly go according to plan. Find your ship, build your crew, and explore the settlements, space stations, and other intriguing locations throughout Halcyon.",
      price: 60,
      __v: 0,
    },
  ]);
}
