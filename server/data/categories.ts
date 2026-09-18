import { CategoryInfo, HistoricalFigure } from '../../src/types';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'great-kings-queens',
    name: 'Great Indian Kings & Queens',
    description: 'Explore the legacy of legendary rulers, warriors, queens, dynasties, battles, and architecture across India.',
    icon: 'Crown',
    color: 'from-amber-500 to-orange-600',
    totalQuestions: 160,
    subcategories: [
      'Ancient Indian Rulers',
      'Medieval Indian Rulers',
      'South Indian Rulers',
      'Rajput Rulers',
      'Maratha Rulers',
      'Indian Queens',
      'Warrior Kings & Queens',
      'Indian Empires & Dynasties'
    ],
    featured: true
  },
  {
    id: 'ramayan',
    name: 'Ramayan',
    description: 'Test your knowledge on sacred characters, journeys, teachings, virtuous ideals, and epic episodes of Ramayan.',
    icon: 'Scroll',
    color: 'from-orange-500 to-amber-700',
    totalQuestions: 90,
    subcategories: [
      'Characters & Lineage',
      'Ayodhya & Vanvas',
      'Kishkindha & Lanka',
      'Sacred Teachings & Values',
      'Epic Events & Battles'
    ],
    featured: true
  },
  {
    id: 'mahabharat',
    name: 'Mahabharat',
    description: 'Deep dive into the great epic of dharma, Kurukshetra, the Pandavas, Kauravas, Krishna, and the Bhagavad Gita.',
    icon: 'Shield',
    color: 'from-rose-600 to-red-800',
    totalQuestions: 90,
    subcategories: [
      'Pandavas & Kauravas',
      'Lord Krishna & Bhagavad Gita',
      'Great Warriors & Gurus',
      'Kurukshetra War',
      'Wisdom & Teachings'
    ],
    featured: true
  },
  {
    id: 'india-gk',
    name: 'India GK & Culture',
    description: 'Explore Indian geography, states, capitals, monuments, national symbols, festivals, and rich traditions.',
    icon: 'Flag',
    color: 'from-emerald-500 to-teal-700',
    totalQuestions: 110,
    subcategories: [
      'States & Capitals',
      'Indian Monuments',
      'Indian Culture & Festivals',
      'Constitution & Civics',
      'Indian Geography & Rivers'
    ],
    featured: true
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through ancient civilizations, medieval transformations, the Indian freedom struggle, and world milestones.',
    icon: 'BookOpen',
    color: 'from-blue-600 to-indigo-800',
    totalQuestions: 100,
    subcategories: [
      'Ancient India',
      'Medieval India',
      'Modern India & Freedom Movement',
      'World History',
      'Ancient Civilizations'
    ]
  },
  {
    id: 'science',
    name: 'Science & Nature',
    description: 'Discover the laws of physics, chemical wonders, the human body, animal biology, and environmental science.',
    icon: 'Atom',
    color: 'from-cyan-500 to-blue-600',
    totalQuestions: 95,
    subcategories: [
      'General Science',
      'Physics',
      'Chemistry',
      'Human Body',
      'Animals & Nature'
    ]
  },
  {
    id: 'space',
    name: 'Space & Astronomy',
    description: 'Venture into outer space, explore planets, the solar system, galaxies, stars, and landmark space missions.',
    icon: 'Rocket',
    color: 'from-purple-600 to-indigo-950',
    totalQuestions: 85,
    subcategories: [
      'Solar System & Planets',
      'Moon & Sun',
      'Space Missions & ISRO/NASA',
      'Stars & Galaxies',
      'Astronomy'
    ]
  },
  {
    id: 'geography',
    name: 'World Geography',
    description: 'Discover countries, capitals, continents, towering mountains, deep oceans, and natural wonders of planet Earth.',
    icon: 'Globe2',
    color: 'from-teal-500 to-emerald-700',
    totalQuestions: 80,
    subcategories: [
      'Countries & Capitals',
      'Continents & Oceans',
      'Rivers & Mountains',
      'Famous Geographical Landmarks'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics & Mental Maths',
    description: 'Sharpen your calculation speed, tackle arithmetic, geometry, number patterns, and mental math puzzles.',
    icon: 'Calculator',
    color: 'from-amber-600 to-yellow-700',
    totalQuestions: 75,
    subcategories: [
      'Mental Maths',
      'Basic Arithmetic',
      'Geometry & Shapes',
      'Math Puzzles & Patterns'
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Cricket',
    description: 'Celebrate world athletic achievements, Olympic feats, football legends, and Indian & world cricket milestones.',
    icon: 'Trophy',
    color: 'from-lime-500 to-green-700',
    totalQuestions: 80,
    subcategories: [
      'Cricket World & IPL',
      'Olympics & World Games',
      'Football & Global Sports',
      'Indian Sporting Legends'
    ]
  },
  {
    id: 'general-knowledge',
    name: 'General Knowledge & World Facts',
    description: 'Broaden your horizons with intriguing trivia, famous personalities, major inventions, and everyday wonders.',
    icon: 'Sparkles',
    color: 'from-fuchsia-500 to-pink-700',
    totalQuestions: 90,
    subcategories: [
      'World Facts & Wonders',
      'Inventions & Discoveries',
      'Famous Personalities',
      'Everyday Trivia'
    ]
  }
];

export const HISTORICAL_FIGURES_DATA: HistoricalFigure[] = [
  {
    id: 'shivaji-maharaj',
    name: 'Chhatrapati Shivaji Maharaj',
    title: 'Founder of the Maratha Empire',
    dynasty: 'Bhonsle / Maratha',
    period: '1630 – 1680 CE',
    region: 'Maharashtra / Western Ghats',
    capital: 'Raigad',
    keyAchievements: [
      'Founded the sovereign Hindavi Swarajya and Maratha Empire',
      'Mastered strategic guerrilla warfare (Ganimi Kava) and mountain fortress warfare',
      'Built a formidable naval fleet (Father of the Indian Navy) with coastal forts like Sindhudurg and Vijaydurg',
      'Instituted an enlightened, progressive administration with the Ashta Pradhan council'
    ],
    shortBio: 'Chhatrapati Shivaji Maharaj was a visionary military genius, benevolent administrator, and champion of swarajya who established a powerful sovereign Maratha empire against overwhelming imperial odds.',
    icon: 'Swords'
  },
  {
    id: 'maharana-pratap',
    name: 'Maharana Pratap',
    title: 'Hero of Mewar & Indomitable Patriot',
    dynasty: 'Sisodia Rajput',
    period: '1540 – 1597 CE',
    region: 'Mewar, Rajasthan',
    capital: 'Chittorgarh / Kumbhalgarh / Chavand',
    keyAchievements: [
      'Valiantly defended the independence and sovereignty of Mewar against imperial expansion',
      'Fought the historic Battle of Haldighati (1576 CE) with unmatched courage',
      'Reclaimed almost the entirety of Mewar territory through perseverance and guerrilla tactics',
      'Known for his legendary loyal steed, Chetak, and his unbending spirit'
    ],
    shortBio: 'Maharana Pratap was the legendary 13th king of Mewar whose steadfast refusal to bow to imperial supremacy made him an enduring symbol of Rajput chivalry, valor, and patriotism.',
    icon: 'Shield'
  },
  {
    id: 'rani-lakshmibai',
    name: 'Rani Lakshmibai (Rani of Jhansi)',
    title: 'Queen of Jhansi & 1857 Freedom Warrior',
    dynasty: 'Newalkar / Maratha',
    period: '1828 – 1858 CE',
    region: 'Jhansi, Bundelkhand, Uttar Pradesh',
    capital: 'Jhansi',
    keyAchievements: [
      'Led the heroic defense of Jhansi during the Indian Rebellion of 1857',
      'Defied the British colonial Doctrine of Lapse with the rallying cry "Main Apni Jhansi Nahi Doongi"',
      'Fought fiercely on horseback with sword in hand until her martyrdom at Gwalior',
      'Immortalized in Indian history as the epitome of feminine bravery and patriotism'
    ],
    shortBio: 'Rani Lakshmibai, born Manikarnika, was the valiant queen of the princely state of Jhansi who became one of the leading figures of the 1857 rebellion against British rule.',
    icon: 'Flame'
  },
  {
    id: 'ashoka-the-great',
    name: 'Emperor Ashoka',
    title: 'Chakravartin Samrat of the Maurya Empire',
    dynasty: 'Maurya',
    period: 'c. 304 – 232 BCE',
    region: 'Pan-Indian Subcontinent',
    capital: 'Pataliputra (modern Patna)',
    keyAchievements: [
      'Ruled one of the largest empires in world history, spanning almost the entire subcontinent',
      'Underwent profound moral transformation following the devastating Kalinga War',
      'Championed Ashoka Dhamma—a code of non-violence, religious tolerance, and moral governance',
      'Erected the famous Edicts of Ashoka and Lion Capital of Sarnath (National Emblem of India)'
    ],
    shortBio: 'Emperor Ashoka was the third Maurya ruler whose transformation from conqueror to patron of peace, Buddhism, and welfare made him one of world history’s most revered monarchs.',
    icon: 'Crown'
  },
  {
    id: 'chandragupta-maurya',
    name: 'Chandragupta Maurya',
    title: 'Founder of the Maurya Empire',
    dynasty: 'Maurya',
    period: 'c. 350 – 295 BCE',
    region: 'Northern, Central & Western India',
    capital: 'Pataliputra',
    keyAchievements: [
      'United the fractured Indian subcontinent into the first pan-Indian empire with mentor Chanakya (Kautilya)',
      'Overthrew the powerful Nanda dynasty of Magadha',
      'Defeated Seleucus I Nicator, securing the northwestern frontiers of India',
      'Established a centralized, well-governed administrative and economic framework'
    ],
    shortBio: 'Guided by the political genius Chanakya, Chandragupta Maurya established the Maurya Empire, turning India into a unified imperial power with grand administrative strength.',
    icon: 'Scroll'
  },
  {
    id: 'rajaraja-chola',
    name: 'Rajaraja Chola I',
    title: 'Architect of the Chola Golden Age',
    dynasty: 'Chola',
    period: '985 – 1014 CE',
    region: 'Tamil Nadu, South India & Northern Sri Lanka',
    capital: 'Thanjavur',
    keyAchievements: [
      'Built the architectural marvel Brihadisvara Temple (Peruvudaiyar Kovil) at Thanjavur',
      'Built a powerful naval arm that expanded trade across the Indian Ocean and Bay of Bengal',
      'Conducted extensive land surveys, administrative standardization, and local village democracy (Kudavolai)',
      'Laid the foundation for the overseas expansion of the Chola Empire'
    ],
    shortBio: 'Rajaraja Chola I transformed the Chola kingdom into a maritime and architectural superpower, renowned for grand temple architecture and naval supremacy.',
    icon: 'Compass'
  },
  {
    id: 'rajendra-chola',
    name: 'Rajendra Chola I',
    title: 'Gangaikonda Chola & Ocean Conqueror',
    dynasty: 'Chola',
    period: '1014 – 1044 CE',
    region: 'South India, East Coast, Sri Lanka & Southeast Asia',
    capital: 'Gangaikondacholapuram',
    keyAchievements: [
      'Conquered lands up to the holy river Ganga, earning the title "Gangaikonda Chola"',
      'Launched triumphant naval expeditions to Srivijaya (modern Indonesia/Malaysia)',
      'Built the magnificent Gangaikondacholapuram temple and the massive Chola Gangam water reservoir',
      'Consolidated complete control over Anuradhapura and Sri Lanka'
    ],
    shortBio: 'Son of Rajaraja Chola, Rajendra Chola I spearheaded unprecedented overseas naval expeditions and reached the sacred Ganga, establishing Chola dominion across Southeast Asian trade lanes.',
    icon: 'Anchor'
  },
  {
    id: 'krishnadevaraya',
    name: 'Krishnadevaraya',
    title: 'Emperor of Vijayanagara & Andhra Bhoja',
    dynasty: 'Tuluva / Vijayanagara',
    period: '1509 – 1529 CE',
    region: 'Deccan & South India',
    capital: 'Hampi (Vijayanagara)',
    keyAchievements: [
      'Led the Vijayanagara Empire to its golden pinnacle of military, economic, and cultural power',
      'Patronized literature, arts, and the Ashtadiggajas (eight great poets including Tenali Rama)',
      'Authored the famous Telugu epic Amuktamalyada',
      'Constructed majestic temple gopurams at Hampi, Tirupati, and across South India'
    ],
    shortBio: 'Krishnadevaraya was the celebrated ruler of Vijayanagara whose reign witnessed unmatched architectural splendor, literary brilliance, and military supremacy in South India.',
    icon: 'Trophy'
  },
  {
    id: 'prithviraj-chauhan',
    name: 'Prithviraj Chauhan',
    title: 'Prithviraj III & Valor of Delhi-Ajmer',
    dynasty: 'Chahamana / Chauhan',
    period: '1177 – 1192 CE',
    region: 'Rajasthan, Delhi, Haryana',
    capital: 'Ajmer / Qila Rai Pithora',
    keyAchievements: [
      'Unified and defended northwestern India with great chivalry and martial skill',
      'Won the First Battle of Tarain (1191 CE)',
      'Celebrated for exceptional archery skills (Shabd Bhedi Baan) in court chronicles',
      'Immortalized in Chand Bardai’s famous epic poem Prithviraj Raso'
    ],
    shortBio: 'Prithviraj Chauhan was the brave Chauhan monarch of Delhi and Ajmer whose tales of honor, archery mastery, and courage in the Battles of Tarain remain legendary.',
    icon: 'Target'
  },
  {
    id: 'samudragupta',
    name: 'Samudragupta',
    title: 'The Napoleon of India & Kaviraja',
    dynasty: 'Gupta',
    period: 'c. 335 – 375 CE',
    region: 'Northern & Central India, reaching South',
    capital: 'Pataliputra',
    keyAchievements: [
      'Undefeated military conqueror who greatly expanded the Gupta Empire',
      'Recorded on the famous Allahabad Pillar Inscription (Prayag Prashasti) by poet Harisena',
      'Accomplished musician and poet depicted playing the veena on gold coinage',
      'Inaugurated the classical "Golden Age" of Indian art, science, and literature'
    ],
    shortBio: 'Samudragupta was the formidable second Gupta emperor celebrated as a universal conqueror, gifted veena player, and patron of classical Sanskrit learning.',
    icon: 'Music'
  },
  {
    id: 'chandragupta-vikramaditya',
    name: 'Chandragupta II (Vikramaditya)',
    title: 'Sun of Valor & Patron of Navaratnas',
    dynasty: 'Gupta',
    period: 'c. 380 – 415 CE',
    region: 'Pan-Northern & Western India',
    capital: 'Pataliputra & Ujjain',
    keyAchievements: [
      'Defeated the Western Kshatrapas (Sakas) of Gujarat and Malwa, taking title Shakari',
      'Patronized the legendary "Navaratnas" (Nine Gems) including Kalidasa and Varahamihira',
      'Witnessed extraordinary prosperity described by Chinese pilgrim Faxian (Fa-Hien)',
      'The rust-resistant Iron Pillar of Delhi is widely attributed to his reign'
    ],
    shortBio: 'Chandragupta II, celebrated as Vikramaditya, ushered in the zenith of the Gupta Golden Age, marked by peerless Sanskrit literature, astronomy, and global trade.',
    icon: 'Sun'
  },
  {
    id: 'ahilyabai-holkar',
    name: 'Rani Ahilyabai Holkar',
    title: 'The Philosopher Queen of Malwa',
    dynasty: 'Holkar / Maratha',
    period: '1725 – 1795 CE',
    region: 'Malwa, Central India',
    capital: 'Maheshwar',
    keyAchievements: [
      'Rebuilt and restored destroyed sacred temples across India including Kashi Vishwanath and Somnath',
      'Governed with exemplary justice, peace, and public welfare for nearly three decades',
      'Constructed ghats, wells, dharamsalas, and highways from Himalayas to Rameswaram',
      'Promoted the renowned Maheshwari textile weaving industry that thrives today'
    ],
    shortBio: 'Rani Ahilyabai Holkar was an extraordinary administrative genius, spiritual visionary, and defender of dharma who transformed Maheshwar into a thriving cultural haven.',
    icon: 'HeartHandshake'
  },
  {
    id: 'rani-durgavati',
    name: 'Rani Durgavati',
    title: 'Warrior Queen of Garha-Mandla',
    dynasty: 'Chandela / Gondwana',
    period: '1524 – 1564 CE',
    region: 'Gondwana (Jabalpur, Madhya Pradesh)',
    capital: 'Singorgarh / Chauragarh',
    keyAchievements: [
      'Successfully governed the wealthy, peaceful kingdom of Garha-Mandla as regent',
      'Defeated Baz Bahadur of Malwa when he attempted to invade Gondwana',
      'Led her troops into battle mounted on her war elephant Sarman against Asaf Khan',
      'Preferred martyrdom on the battlefield over surrender, leaving an immortal legacy'
    ],
    shortBio: 'Rani Durgavati of Gondwana was a fearless warrior queen descended from the Chandelas who defended her kingdom and sovereignty with unmatched martial courage.',
    icon: 'ShieldAlert'
  },
  {
    id: 'rani-abbakka',
    name: 'Rani Abbakka Chowta',
    title: 'Abhaya Rani & Defier of Colonial Fleets',
    dynasty: 'Chowta',
    period: 'c. 1525 – 1570s CE',
    region: 'Ullal, Coastal Karnataka',
    capital: 'Ullal',
    keyAchievements: [
      'One of the first Indian rulers to resist European colonizers, defeating Portuguese fleets multiple times',
      'Forged strong multi-community alliances with the Zamorin of Calicut and local Moplahs',
      'Mastered coastal night warfare and archery',
      'Known proudly as "Abhaya Rani" (The Fearless Queen)'
    ],
    shortBio: 'Rani Abbakka of Ullal was the valiant Jain queen who repeatedly repulsed Portuguese naval invasions on the Kanara coast for over four decades.',
    icon: 'Ship'
  },
  {
    id: 'rudrama-devi',
    name: 'Rani Rudrama Devi',
    title: 'Ruler of the Kakatiya Dynasty',
    dynasty: 'Kakatiya',
    period: '1262 – 1289 CE',
    region: 'Deccan, Telangana & Andhra Pradesh',
    capital: 'Orugallu (Warangal)',
    keyAchievements: [
      'One of the few reigning queens in Indian history, formally designated as Rudradeva Maharaja',
      'Defeated the invading Yadavas of Devagiri and eastern Gangas',
      'Completed the formidable layered stone fortifications and moats of Warangal Fort',
      'Praised lavishly by Venetian traveler Marco Polo for her wisdom and peaceful governance'
    ],
    shortBio: 'Rani Rudrama Devi broke gender barriers to rule the Kakatiya dynasty with fierce military leadership, fortifying Warangal and ensuring widespread agrarian prosperity.',
    icon: 'Castle'
  },
  {
    id: 'lachit-borphukan',
    name: 'Lachit Borphukan',
    title: 'Commander of the Ahom Kingdom',
    dynasty: 'Ahom Kingdom',
    period: '1622 – 1672 CE',
    region: 'Assam, Northeast India',
    capital: 'Garhgaon / Guwahati',
    keyAchievements: [
      'Decisively defeated the imperial Mughal army in the famous naval Battle of Saraighat (1671 CE) on the Brahmaputra',
      'Put duty to motherland above family, famously declaring "My uncle is not greater than my country"',
      'Expertly utilized riverine terrain, earthen ramparts, and naval maneuvering',
      'Preserved the sovereignty of Assam against imperial annexation'
    ],
    shortBio: 'Lachit Borphukan was the legendary Ahom general whose strategic brilliance at the Battle of Saraighat ensured Assam remained free and unconquered.',
    icon: 'Waves'
  },
  {
    id: 'maharaja-ranjit-singh',
    name: 'Maharaja Ranjit Singh',
    title: 'Sher-e-Punjab (Lion of Punjab)',
    dynasty: 'Sikh Empire / Sukerchakia Misl',
    period: '1780 – 1839 CE',
    region: 'Punjab, Northwest India',
    capital: 'Lahore',
    keyAchievements: [
      'Unified competing Sikh misls into the powerful, secular Sikh Empire',
      'Modernized the army with the Fauj-i-Khas incorporating European training',
      'Covered the sacred Harmandir Sahib in Amritsar with gold foil, creating the Golden Temple',
      'Administered an exceptionally just realm with zero death penalty executions'
    ],
    shortBio: 'Maharaja Ranjit Singh, the Lion of Punjab, founded a sovereign empire renowned for military modernization, religious harmony, and patronizing the Golden Temple.',
    icon: 'Crown'
  },
  {
    id: 'pulakeshin-ii',
    name: 'Pulakeshin II',
    title: 'Great Emperor of the Badami Chalukyas',
    dynasty: 'Chalukya of Badami',
    period: '610 – 642 CE',
    region: 'Deccan, Karnataka, Maharashtra',
    capital: 'Vatapi (Badami)',
    keyAchievements: [
      'Defeated Emperor Harshavardhana on the banks of the Narmada river, halting northern expansion',
      'Commemorated in the renowned Aihole Inscription authored by poet Ravikirti',
      'Received ambassadors from the Sasanian Persian court of Khosrow II',
      'Visited and documented by Chinese traveler Xuanzang (Hiuen Tsang)'
    ],
    shortBio: 'Pulakeshin II was the preeminent Chalukya monarch who established Deccan supremacy, halting Harshavardhana’s southern march and reigning over a culturally vibrant empire.',
    icon: 'Mountain'
  },
  {
    id: 'harshavardhana',
    name: 'Emperor Harshavardhana',
    title: 'Supreme Ruler of Kannauj & Scholar King',
    dynasty: 'Vardhana / Pushyabhuti',
    period: '590 – 647 CE',
    region: 'Northern India',
    capital: 'Kannauj',
    keyAchievements: [
      'Unified North India after the decline of the Gupta Empire',
      'Patronized the great university of Nalanda and welcomed Chinese traveler Xuanzang',
      'Accomplished Sanskrit playwright who authored Ratnavali, Priyadarsika, and Nagananda',
      'Convened the famous grand assembly at Kannauj and Prayag Maha Moksha Parishad'
    ],
    shortBio: 'Harshavardhana was a benevolent scholar-king whose court was immortalized by his biographer Banabhatta in the Harshacharita, and who turned Kannauj into a premier capital.',
    icon: 'Book'
  },
  {
    id: 'lalitaditya-muktapida',
    name: 'Lalitaditya Muktapida',
    title: 'The Great Emperor of Kashmir',
    dynasty: 'Karkota',
    period: 'c. 724 – 760 CE',
    region: 'Kashmir, Northern & Central Asia',
    capital: 'Parihaspora',
    keyAchievements: [
      'Built the grand, world-renowned Martand Sun Temple in Kashmir',
      'Led victorious military campaigns across North India, Tibet, and Central Asia',
      'Celebrated extensively in Kalhana’s historic chronicle Rajatarangini',
      'Built sophisticated irrigation systems that converted Kashmir valleys into fertile lands'
    ],
    shortBio: 'Lalitaditya Muktapida of the Karkota dynasty was Kashmir’s greatest conqueror and builder, celebrated for monumental stone temples like Martand Sun Temple.',
    icon: 'SunDim'
  }
];

export const CATEGORIES = CATEGORIES_DATA;
export const HISTORICAL_FIGURES = HISTORICAL_FIGURES_DATA;

