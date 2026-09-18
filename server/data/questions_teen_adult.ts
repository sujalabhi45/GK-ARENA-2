import { Question } from '../../src/types';

// Questions for Teen (13-17) and Adult (18+)
export const QUESTIONS_TEEN_ADULT_BASE: Question[] = [
  // --- GREAT INDIAN KINGS & QUEENS ---
  {
    id: 'ta-kq-1',
    question: 'Which Chola emperor defeated Mahipala of the Pala dynasty in Bengal and assumed the title "Gangaikonda Chola" (Conqueror of the Ganga)?',
    options: ['Rajendra Chola I', 'Rajaraja Chola I', 'Kulothunga Chola I', 'Parantaka I'],
    correctAnswer: 'Rajendra Chola I',
    explanation: 'Rajendra Chola I marched his army to the banks of the Ganges in 1023 CE, brought holy Ganga water, and founded the new imperial capital Gangaikondacholapuram.',
    category: 'great-kings-queens',
    subcategory: 'Chola Dynasty',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['chola', 'rajendra chola', 'tamil nadu']
  },
  {
    id: 'ta-kq-2',
    question: 'The Brihadisvara Temple in Thanjavur, featuring a single 80-tonne granite octagonal shikhara (cupola), was commissioned by which monarch?',
    options: ['Rajaraja Chola I', 'Rajendra Chola I', 'Aditya Chola', 'Sundara Chola'],
    correctAnswer: 'Rajaraja Chola I',
    explanation: 'Completed around 1010 CE by Emperor Rajaraja Chola I, the temple is an architectural marvel of Dravidian architecture.',
    category: 'great-kings-queens',
    subcategory: 'Chola Dynasty',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['brihadisvara', 'rajaraja chola']
  },
  {
    id: 'ta-kq-3',
    question: 'Who was the Vijayanagara ruler who authored "Amuktamalyada" in Telugu and "Jambavati Kalyanam" in Sanskrit?',
    options: ['Sri Krishnadevaraya', 'Harihara I', 'Bukka Raya I', 'Rama Raya'],
    correctAnswer: 'Sri Krishnadevaraya',
    explanation: 'Sri Krishnadevaraya (1509–1529 CE) of the Tuluva dynasty was celebrated as "Andhra Bhoja" and patronized the Ashtadiggajas.',
    category: 'great-kings-queens',
    subcategory: 'Vijayanagara Empire',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['krishnadevaraya', 'vijayanagara', 'hampi']
  },
  {
    id: 'ta-kq-4',
    question: 'At which naval battle in 1741 did King Marthanda Varma of Travancore crush the Dutch East India Company, permanently ending Dutch imperial ambitions in India?',
    options: ['Battle of Colachel', 'Battle of Plassey', 'Battle of Wandiwash', 'Battle of Buxar'],
    correctAnswer: 'Battle of Colachel',
    explanation: 'The Battle of Colachel was the first time an Asian kingdom comprehensively defeated an organized European naval colonial power.',
    category: 'great-kings-queens',
    subcategory: 'Warrior Kings & Queens',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['marthanda varma', 'travancore', 'battle of colachel']
  },
  {
    id: 'ta-kq-5',
    question: 'Which legendary Ahom general routed the massive Mughal imperial armada under Ram Singh in the Battle of Saraighat on the Brahmaputra River (1671)?',
    options: ['Lachit Borphukan', 'Atan Burhagohain', 'Chilarai', 'Sukaphaa'],
    correctAnswer: 'Lachit Borphukan',
    explanation: 'Lachit Borphukan utilized superior riverine naval guerrilla tactics, famous for saying "My maternal uncle is not greater than my motherland."',
    category: 'great-kings-queens',
    subcategory: 'Warrior Kings & Queens',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['lachit borphukan', 'ahom', 'assam', 'saraighat']
  },
  {
    id: 'ta-kq-6',
    question: 'Which queen of Keladi (Ikkeri in Karnataka) provided heroic refuge to Rajaram Maharaj (son of Shivaji Maharaj) against Aurangzeb’s massive Mughal army?',
    options: ['Rani Keladi Chennamma', 'Rani Kittur Chennamma', 'Rani Abbakka Chowta', 'Rani Rudrama Devi'],
    correctAnswer: 'Rani Keladi Chennamma',
    explanation: 'Rani Keladi Chennamma defeated the pursuing Mughal forces in the Malnad jungles, ensuring Rajaram safely reached Gingee Fort.',
    category: 'great-kings-queens',
    subcategory: 'Indian Queens',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['keladi chennamma', 'karnataka', 'maratha refuge']
  },
  {
    id: 'ta-kq-7',
    question: 'Which Jain king of Kalinga defeated the rulers of Magadha and recorded his wide-ranging military conquests in the Hathigumpha Inscription?',
    options: ['Kharavela', 'Ashoka', 'Pushyamitra Shunga', 'Menander I'],
    correctAnswer: 'Kharavela',
    explanation: 'King Kharavela of the Mahameghavahana dynasty inscribed the 17-line Prakrit Hathigumpha inscription at Udayagiri hills near Bhubaneswar.',
    category: 'great-kings-queens',
    subcategory: 'Ancient Indian Rulers',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['kharavela', 'kalinga', 'hathigumpha']
  },
  {
    id: 'ta-kq-8',
    question: 'The famous Iron Pillar of Delhi, which has resisted corrosion for over 1,600 years, bears an inscription commemorating a king named "Chandra", identified as:',
    options: ['Chandragupta II (Vikramaditya)', 'Chandragupta Maurya', 'Chandragupta I', 'Samudragupta'],
    correctAnswer: 'Chandragupta II (Vikramaditya)',
    explanation: 'Metallurgical analysis identifies the monument to Chandragupta Vikramaditya of the imperial Gupta dynasty.',
    category: 'history',
    subcategory: 'Ancient India',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['iron pillar', 'gupta', 'chandragupta vikramaditya']
  },
  {
    id: 'ta-kq-9',
    question: 'Who was the court poet who authored the famous "Allahabad Pillar Inscription" (Prayag Prashasti) praising the conquests of Samudragupta?',
    options: ['Harisena', 'Kalidasa', 'Banabhatta', 'Ravikirti'],
    correctAnswer: 'Harisena',
    explanation: 'Harisena composed the classical Sanskrit poem praising Samudragupta as "Kaviraja" and master of a vast realm across Bharatavarsha.',
    category: 'history',
    subcategory: 'Ancient India',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['samudragupta', 'prayag prashasti', 'harisena']
  },
  {
    id: 'ta-kq-10',
    question: 'Which Aihole inscription poet proudly celebrated Pulakeshin II’s victory over Emperor Harsha of Kannauj on the banks of the Narmada River?',
    options: ['Ravikirti', 'Dandin', 'Bharavi', 'Bhavabhuti'],
    correctAnswer: 'Ravikirti',
    explanation: 'Court poet Ravikirti composed the Aihole Prashasti in 634 CE, describing Pulakeshin II as the undisputed lord of Dakshinapatha.',
    category: 'great-kings-queens',
    subcategory: 'South Indian Rulers',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['pulakeshin ii', 'harsha', 'ravikirti', 'aihole']
  },

  // --- RAMAYAN ---
  {
    id: 'ta-ram-1',
    question: 'According to Valmiki Ramayana, which celestial sage taught the powerful "Aditya Hridaya Stotram" to Lord Rama on the battlefield to revitalize him before fighting Ravana?',
    options: ['Sage Agastya', 'Sage Vishwamitra', 'Sage Vashishta', 'Sage Bharadwaja'],
    correctAnswer: 'Sage Agastya',
    explanation: 'Agastya Muni appeared on the battlefield when Rama was exhausted and imparted the sacred hymn to the Sun God (Surya).',
    category: 'ramayan',
    subcategory: 'Epic Events & Battles',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['aditya hridaya', 'agastya', 'ramayan']
  },
  {
    id: 'ta-ram-2',
    question: 'In the Ramayana, what was the name of the king of Nishadas and true childhood friend of Lord Rama who ferried him across the sacred Ganga at Sringaverapura?',
    options: ['Nishadaraja Guha', 'Kevata', 'Sugriva', 'Vibhishana'],
    correctAnswer: 'Nishadaraja Guha',
    explanation: 'Guha welcomed Lord Rama with tears of devotion and placed his entire kingdom at Rama’s feet.',
    category: 'ramayan',
    subcategory: 'Ayodhya & Vanvas',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['guha', 'sringaverapura', 'ganga']
  },
  {
    id: 'ta-ram-3',
    question: 'Which potent weapon gifted to Indrajit (Meghanada) by Lord Brahma immobilized Lord Hanuman in Lanka?',
    options: ['Brahmastra', 'Nagapasha', 'Vaishnavastra', 'Pashupatastra'],
    correctAnswer: 'Brahmastra',
    explanation: 'Hanuman chose to submit voluntarily to the Brahmastra out of respect for Lord Brahma’s power to meet King Ravana face to face.',
    category: 'ramayan',
    subcategory: 'Kishkindha & Lanka',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['hanuman', 'brahmastra', 'indrajit']
  },
  {
    id: 'ta-ram-4',
    question: 'Who was the righteous mother of Ravana who advised him repeatedly that Rama was Narayana incarnate and that Sita should be returned with honor?',
    options: ['Kaikesi', 'Tataka', 'Mandodari', 'Surpanakha'],
    correctAnswer: 'Kaikesi',
    explanation: 'Kaikesi and elder statesman Malyavan frequently advised Ravana against defying Dharma.',
    category: 'ramayan',
    subcategory: 'Characters & Lineage',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['kaikesi', 'ravana', 'ramayan']
  },

  // --- MAHABHARAT ---
  {
    id: 'ta-mah-1',
    question: 'Which cosmic form revealed by Lord Krishna to Arjuna in Chapter 11 of the Bhagavad Gita contains all creation, time, devas, and destruction within Him?',
    options: ['Vishwaroopa (Universal Form)', 'Chaturbhuja Rupa', 'Narasimha Avatara', 'Mohini Rupa'],
    correctAnswer: 'Vishwaroopa (Universal Form)',
    explanation: 'In the Vishwaroopa Darshanam, Krishna bestowed divine vision (divya chakshu) upon Arjuna to see the infinite manifestation of the Cosmos.',
    category: 'mahabharat',
    subcategory: 'Bhagavad Gita & Philosophy',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['vishwaroopa', 'bhagavad gita', 'krishna']
  },
  {
    id: 'ta-mah-2',
    question: 'What was the exact name of the formidable military battle formation engineered by Guru Dronacharya on Day 13 of the Kurukshetra War that Abhimanyu breached?',
    options: ['Chakravyuha (Padmavyuha)', 'Kraunchavyuha', 'Garudavyuha', 'Sarvatomukha'],
    correctAnswer: 'Chakravyuha (Padmavyuha)',
    explanation: 'Only Krishna, Arjuna, Pradyumna, and young Abhimanyu knew how to enter it, but Abhimanyu had never been taught the extraction technique.',
    category: 'mahabharat',
    subcategory: 'Kurukshetra War',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['chakravyuha', 'abhimanyu', 'drona']
  },
  {
    id: 'ta-mah-3',
    question: 'Who was the brave warrior-prince of the Nagas, son of Arjuna and Ulupi, who sacrificed his life on Day 8 of the Kurukshetra War?',
    options: ['Iravan (Aravan)', 'Barbarika', 'Babruvahana', 'Abhimanyu'],
    correctAnswer: 'Iravan (Aravan)',
    explanation: 'Iravan fought heroically against Shakuni’s brothers and Alambusha; he is celebrated as the deity Koothandavar in Tamil Nadu.',
    category: 'mahabharat',
    subcategory: 'Great Warriors & Gurus',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['iravan', 'arjuna', 'ulupi']
  },
  {
    id: 'ta-mah-4',
    question: 'Which grandson of Bhima and Hidimbi offered his head before the battle began, after Lord Krishna proved his three invincible arrows could decide the war in minutes?',
    options: ['Barbarika (Khatu Shyam Ji)', 'Ghatotkacha', 'Anjanaparvan', 'Meghavarna'],
    correctAnswer: 'Barbarika (Khatu Shyam Ji)',
    explanation: 'Krishna asked for Barbarika’s head as charity so that the battle would be fought on Dharma; he is worshipped as Khatu Shyam Ji in Rajasthan.',
    category: 'mahabharat',
    subcategory: 'Great Warriors & Gurus',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['barbarika', 'khatu shyam', 'three arrows']
  },

  // --- SCIENCE & TECHNOLOGY ---
  {
    id: 'ta-sci-1',
    question: 'Which revolutionary gene-editing technology, adapted from a bacterial immune mechanism, won the 2020 Nobel Prize in Chemistry for Emmanuelle Charpentier and Jennifer Doudna?',
    options: ['CRISPR-Cas9', 'Zinc Finger Nucleases', 'TALENs', 'Sanger Sequencing'],
    correctAnswer: 'CRISPR-Cas9',
    explanation: 'CRISPR-Cas9 allows precise targeting and modification of DNA sequences in living cells.',
    category: 'science',
    subcategory: 'Biology & Genetics',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['crispr', 'gene editing', 'nobel']
  },
  {
    id: 'ta-sci-2',
    question: 'What is the phenomenon where two quantum particles remain interconnected such that the state of one instantly dictates the state of the other regardless of distance?',
    options: ['Quantum Entanglement', 'Quantum Superposition', 'Quantum Tunneling', 'Wave-Particle Duality'],
    correctAnswer: 'Quantum Entanglement',
    explanation: 'Einstein referred to quantum entanglement as "spooky action at a distance"; it underlies quantum cryptography and computing.',
    category: 'science',
    subcategory: 'Physics',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['quantum entanglement', 'physics']
  },
  {
    id: 'ta-sci-3',
    question: 'What is the theoretical boundary around a black hole beyond which nothing—not even light—can escape its gravitational pull?',
    options: ['Event Horizon', 'Photon Sphere', 'Ergosphere', 'Singularity'],
    correctAnswer: 'Event Horizon',
    explanation: 'The event horizon defines the point of no return; the radius of this boundary is known as the Schwarzschild radius.',
    category: 'space',
    subcategory: 'Deep Space & Cosmos',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['black hole', 'event horizon', 'space']
  },
  {
    id: 'ta-sci-4',
    question: 'Which Indian physicist predicted the theoretical upper limit on the mass of a stable white dwarf star (1.44 solar masses), winning the 1983 Nobel Prize in Physics?',
    options: ['Subrahmanyan Chandrasekhar', 'Satyendra Nath Bose', 'C. V. Raman', 'Homi J. Bhabha'],
    correctAnswer: 'Subrahmanyan Chandrasekhar',
    explanation: 'The Chandrasekhar limit states that above 1.44 solar masses, electron degeneracy pressure cannot prevent gravitational collapse into a neutron star or black hole.',
    category: 'space',
    subcategory: 'Astronomy Pioneers',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['chandrasekhar limit', 'nobel', 'astronomy']
  },

  // --- SPACE & ISRO MISSIONS ---
  {
    id: 'ta-spc-1',
    question: 'What is the official name of the lunar landing site where ISRO’s Chandrayaan-3 Vikram lander made history on 23 August 2023 near the Moon’s South Pole?',
    options: ['Shiv Shakti Point', 'Tiranga Point', 'Jawahar Point', 'Atal Point'],
    correctAnswer: 'Shiv Shakti Point',
    explanation: 'Prime Minister Narendra Modi announced "Shiv Shakti Point" for the Chandrayaan-3 landing site, while the Chandrayaan-2 impact location was named "Tiranga Point".',
    category: 'space',
    subcategory: 'ISRO & Space Missions',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['chandrayaan 3', 'shiv shakti point', 'isro']
  },
  {
    id: 'ta-spc-2',
    question: 'Which specific Lagrange Point does ISRO’s solar observatory Aditya-L1 orbit around to maintain an uninterrupted view of the Sun without eclipses?',
    options: ['Lagrange Point 1 (L1)', 'Lagrange Point 2 (L2)', 'Lagrange Point 4 (L4)', 'Lagrange Point 5 (L5)'],
    correctAnswer: 'Lagrange Point 1 (L1)',
    explanation: 'L1 is located approximately 1.5 million kilometers from Earth towards the Sun, where gravitational forces and centrifugal forces balance.',
    category: 'space',
    subcategory: 'ISRO & Space Missions',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['aditya l1', 'lagrange point', 'isro solar']
  },
  {
    id: 'ta-spc-3',
    question: 'What is the name of the female humanoid robot developed by ISRO for uncrewed orbital test missions ahead of the Gaganyaan human spaceflight?',
    options: ['Vyommitra', 'Mitra', 'Daksh', 'Gagandoot'],
    correctAnswer: 'Vyommitra',
    explanation: 'Vyommitra ("Friend in the Sky") is equipped with sensory and conversational AI to simulate life-support monitoring inside the crew module.',
    category: 'space',
    subcategory: 'ISRO & Space Missions',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['vyommitra', 'gaganyaan', 'isro']
  },
  {
    id: 'ta-spc-4',
    question: 'Which NASA space probe, launched in 1977, became the first human-made object to venture into interstellar space in August 2012?',
    options: ['Voyager 1', 'Voyager 2', 'Pioneer 10', 'New Horizons'],
    correctAnswer: 'Voyager 1',
    explanation: 'Voyager 1 crossed the heliopause into interstellar space and carries the Golden Record with greetings and music from Earth.',
    category: 'space',
    subcategory: 'Deep Space & Cosmos',
    ageGroup: '13-17',
    difficulty: 'medium',
    tags: ['voyager 1', 'nasa', 'interstellar']
  },

  // --- GEOGRAPHY & GLOBAL CHALLENGES ---
  {
    id: 'ta-geo-1',
    question: 'Which strategic maritime strait connects the Persian Gulf to the Gulf of Oman and Arabian Sea, handling nearly 20% of the world’s petroleum transit?',
    options: ['Strait of Hormuz', 'Strait of Malacca', 'Bab-el-Mandeb', 'Bosphorus Strait'],
    correctAnswer: 'Strait of Hormuz',
    explanation: 'The Strait of Hormuz is flanked by Iran on the north and Oman/UAE on the south, representing one of the world’s critical energy chokepoints.',
    category: 'geography',
    subcategory: 'World Geography',
    ageGroup: '18+',
    difficulty: 'medium',
    tags: ['strait of hormuz', 'geopolitics', 'maritime']
  },
  {
    id: 'ta-geo-2',
    question: 'Which natural wetland in the delta of the Ganga, Brahmaputra, and Meghna rivers is the largest contiguous mangrove forest on Earth?',
    options: ['Sundarbans', 'Pichavaram', 'Bhitarkanika', 'Pantanal'],
    correctAnswer: 'Sundarbans',
    explanation: 'Spanning India and Bangladesh, the UNESCO World Heritage Sundarbans is home to the Royal Bengal Tiger and Sundari mangrove trees.',
    category: 'geography',
    subcategory: 'Famous Geographical Landmarks',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['sundarbans', 'mangrove', 'biodiversity']
  },
  {
    id: 'ta-geo-3',
    question: 'Which landmark 2015 international climate treaty set the goal of limiting global warming to well below 2°C above pre-industrial levels, preferably to 1.5°C?',
    options: ['Paris Climate Agreement', 'Kyoto Protocol', 'Montreal Protocol', 'Copenhagen Accord'],
    correctAnswer: 'Paris Climate Agreement',
    explanation: 'Adopted at COP21 in Paris, 196 parties pledged Nationally Determined Contributions (NDCs) to combat climate change.',
    category: 'general-knowledge',
    subcategory: 'Global Challenges & Environment',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['paris agreement', 'climate change', 'un']
  },
  {
    id: 'ta-pol-1',
    question: 'Who is universally venerated as the "Chief Architect of the Constitution of India" and served as the Chairman of the Drafting Committee?',
    options: ['Dr. B. R. Ambedkar', 'Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
    correctAnswer: 'Dr. B. R. Ambedkar',
    explanation: 'Babasaheb Dr. B. R. Ambedkar piloted the comprehensive draft of the Constitution through intense debates in the Constituent Assembly.',
    category: 'india-gk',
    subcategory: 'Indian Constitution & Polity',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['ambedkar', 'constitution of india']
  },
  {
    id: 'ta-pol-2',
    question: 'Which Article of the Constitution of India was called the "Heart and Soul of the Constitution" by Dr. B. R. Ambedkar because it guarantees the Right to Constitutional Remedies?',
    options: ['Article 32', 'Article 21', 'Article 19', 'Article 14'],
    correctAnswer: 'Article 32',
    explanation: 'Article 32 empowers citizens to move the Supreme Court directly via writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) to enforce Fundamental Rights.',
    category: 'india-gk',
    subcategory: 'Indian Constitution & Polity',
    ageGroup: '18+',
    difficulty: 'hard',
    tags: ['article 32', 'indian constitution', 'writs']
  },
  {
    id: 'ta-spt-1',
    question: 'In 2024, which 17-year-old Indian prodigy became the youngest player in history to win the FIDE Candidates Chess Tournament and qualify for the World Chess Championship?',
    options: ['D. Gukesh (Gukesh D)', 'R. Praggnanandhaa', 'Arjun Erigaisi', 'Nihal Sarin'],
    correctAnswer: 'D. Gukesh (Gukesh D)',
    explanation: 'Gukesh D won the 2024 Candidates in Toronto at age 17, breaking Garry Kasparov’s long-standing record.',
    category: 'sports',
    subcategory: 'Chess Grandmasters',
    ageGroup: '13-17',
    difficulty: 'easy',
    tags: ['gukesh', 'chess', 'candidates 2024']
  }
];

// Helper to generate a total of 160+ Teen/Adult questions
export function getTeenAdultQuestions(): Question[] {
  const list: Question[] = [...QUESTIONS_TEEN_ADULT_BASE];

  const pool: {
    q: string;
    opts: [string, string, string, string];
    ans: string;
    exp: string;
    cat: string;
    sub: string;
    grp: '13-17' | '18+';
    diff: 'easy' | 'medium' | 'hard';
    tags: string[];
  }[] = [
    {
      q: 'Which battle fought on 23 June 1757 marked the inception of British colonial dominion over Bengal through the conspiracy of Mir Jafar?',
      opts: ['Battle of Plassey', 'Battle of Buxar', 'Battle of Panipat', 'Battle of Carnatic'],
      ans: 'Battle of Plassey',
      exp: 'Robert Clive led East India Company forces to defeat Nawab Siraj-ud-Daulah after Mir Jafar defected.',
      cat: 'history', sub: 'Modern India', grp: '13-17', diff: 'easy', tags: ['plassey', 'british india']
    },
    {
      q: 'Which decisive battle in 1764 confirmed British military hegemony when company troops defeated the joint armies of Mir Qasim, Shuja-ud-Daula, and Shah Alam II?',
      opts: ['Battle of Buxar', 'Battle of Plassey', 'Third Battle of Panipat', 'Battle of Chillianwala'],
      ans: 'Battle of Buxar',
      exp: 'The Treaty of Allahabad (1765) granted the East India Company the Diwani rights (tax revenue collection) of Bengal, Bihar, and Orissa.',
      cat: 'history', sub: 'Modern India', grp: '18+', diff: 'medium', tags: ['buxar', 'diwani']
    },
    {
      q: 'Who established the "Satyashodhak Samaj" (Truth-Seekers’ Society) in Pune in 1873 to champion education and emancipation for women and lower castes?',
      opts: ['Mahatma Jyotirao Phule', 'Dr. B. R. Ambedkar', 'Ishwar Chandra Vidyasagar', 'Raja Ram Mohan Roy'],
      ans: 'Mahatma Jyotirao Phule',
      exp: 'Jyotirao Phule and his wife Savitribai Phule opened the first school for girls in Pune at Bhide Wada in 1848.',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'medium', tags: ['jyotirao phule', 'satyashodhak']
    },
    {
      q: 'Who was revered as the first female teacher of India and pioneer of female education and modern Marathi poetry?',
      opts: ['Savitribai Phule', 'Pandita Ramabai', 'Tarabai Shinde', 'Anandibai Joshi'],
      ans: 'Savitribai Phule',
      exp: 'Krantijyoti Savitribai Phule championed women’s education, widow remarriage, and anti-caste social transformation.',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'easy', tags: ['savitribai phule', 'education']
    },
    {
      q: 'Which freedom fighter roared "Swaraj is my birthright and I shall have it!" and organized the public Ganesh Utsav and Shivaji Utsav?',
      opts: ['Bal Gangadhar Tilak', 'Lala Lajpat Rai', 'Bipin Chandra Pal', 'Gopal Krishna Gokhale'],
      ans: 'Bal Gangadhar Tilak',
      exp: 'Lokmanya Tilak was a fearless leader who published the newspapers Kesari and Mahratta.',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'easy', tags: ['tilak', 'swaraj']
    },
    {
      q: 'Who founded the Indian National Army (Azad Hind Fauj) in Southeast Asia and proclaimed "Give me blood, and I will give you freedom!"?',
      opts: ['Netaji Subhas Chandra Bose', 'Rash Behari Bose', 'Mohan Singh', 'Bhagat Singh'],
      ans: 'Netaji Subhas Chandra Bose',
      exp: 'Netaji mobilized the Azad Hind Government, women’s Rani of Jhansi Regiment, and gave the national greeting "Jai Hind".',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'easy', tags: ['netaji', 'azad hind', 'jai hind']
    },
    {
      q: 'In which year did the tragic Jallianwala Bagh massacre take place in Amritsar on the day of Baisakhi?',
      opts: ['1919', '1920', '1918', '1922'],
      ans: '1919',
      exp: 'On 13 April 1919, British troops under Reginald Dyer opened fire on unarmed civilians protesting the Rowlatt Act.',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'easy', tags: ['jallianwala bagh', '1919']
    },
    {
      q: 'Rabindranath Tagore renounced which British royal honor in profound protest against the Jallianwala Bagh massacre?',
      opts: ['Knighthood (Sir)', 'Order of the Garter', 'Kaisar-i-Hind', 'Companion of the Star of India'],
      ans: 'Knighthood (Sir)',
      exp: 'Tagore wrote to Viceroy Lord Chelmsford stating that honors make our shame glaring in the context of cruel atrocities.',
      cat: 'history', sub: 'Freedom Movement', grp: '13-17', diff: 'medium', tags: ['tagore', 'knighthood', '1919']
    },
    {
      q: 'What is the highest civilian award of the Republic of India?',
      opts: ['Bharat Ratna', 'Padma Vibhushan', 'Param Vir Chakra', 'Padma Bhushan'],
      ans: 'Bharat Ratna',
      exp: 'Instituted in 1954, the Bharat Ratna is shaped like a sacred peepal leaf in bronze with an embossed sun.',
      cat: 'india-gk', sub: 'National Emblems & Honours', grp: '13-17', diff: 'easy', tags: ['bharat ratna', 'civilian awards']
    },
    {
      q: 'What is India’s highest military decoration awarded for valor in the presence of the enemy?',
      opts: ['Param Vir Chakra (PVC)', 'Maha Vir Chakra', 'Vir Chakra', 'Ashoka Chakra'],
      ans: 'Param Vir Chakra (PVC)',
      exp: 'Major Somnath Sharma was the first recipient of the Param Vir Chakra in 1947.',
      cat: 'india-gk', sub: 'National Emblems & Honours', grp: '13-17', diff: 'easy', tags: ['param vir chakra', 'defense']
    },
    {
      q: 'Which fundamental particle carries a negative elementary electric charge and orbits the atomic nucleus?',
      opts: ['Electron', 'Proton', 'Neutron', 'Positron'],
      ans: 'Electron',
      exp: 'Discovered by J. J. Thomson in 1897 using cathode ray tubes, electrons possess a charge of -1.602 × 10^-19 Coulombs.',
      cat: 'science', sub: 'Physics', grp: '13-17', diff: 'easy', tags: ['electron', 'atoms']
    },
    {
      q: 'What subatomic particles comprise protons and neutrons, held together by gluons and the strong nuclear force?',
      opts: ['Quarks', 'Leptons', 'Bosons', 'Muons'],
      ans: 'Quarks',
      exp: 'Protons consist of two up quarks and one down quark (uud), while neutrons consist of one up and two down (udd).',
      cat: 'science', sub: 'Physics', grp: '18+', diff: 'hard', tags: ['quarks', 'particle physics']
    },
    {
      q: 'What is the speed of light in a vacuum, a universal physical constant denoted by "c"?',
      opts: ['Approximately 300,000 km/s (299,792,458 m/s)', '150,000 km/s', '3,000 km/s', '1,080 km/h'],
      ans: 'Approximately 300,000 km/s (299,792,458 m/s)',
      exp: 'In vacuum, electromagnetic waves travel at exactly 299,792,458 meters per second.',
      cat: 'science', sub: 'Physics', grp: '13-17', diff: 'easy', tags: ['speed of light', 'physics']
    },
    {
      q: 'Which famous formula derived by Albert Einstein in special relativity equates mass and energy equivalence?',
      opts: ['E = mc²', 'F = ma', 'PV = nRT', 'V = IR'],
      ans: 'E = mc²',
      exp: 'Energy equals mass times the speed of light squared, showing that tiny amounts of mass contain vast energy.',
      cat: 'science', sub: 'Physics', grp: '13-17', diff: 'easy', tags: ['einstein', 'relativity']
    },
    {
      q: 'What is the primary greenhouse gas released by human activities that contributes most to global climate change?',
      opts: ['Carbon Dioxide (CO2)', 'Methane', 'Nitrous Oxide', 'Ozone'],
      ans: 'Carbon Dioxide (CO2)',
      exp: 'CO2 from fossil fuel combustion and industrial processes accounts for roughly 75% of global greenhouse emissions.',
      cat: 'general-knowledge', sub: 'Global Challenges & Environment', grp: '13-17', diff: 'easy', tags: ['co2', 'climate']
    },
    {
      q: 'Which artificial waterway opened in 1869 connects the Mediterranean Sea to the Red Sea, enabling direct maritime trade between Europe and Asia without circumnavigating Africa?',
      opts: ['Suez Canal', 'Panama Canal', 'Kiel Canal', 'Corinth Canal'],
      ans: 'Suez Canal',
      exp: 'Constructed across the Isthmus of Suez in Egypt, the canal spans roughly 193 km.',
      cat: 'geography', sub: 'World Geography', grp: '13-17', diff: 'easy', tags: ['suez canal', 'geography']
    },
    {
      q: 'Which canal opened in 1914 across Central America, connecting the Atlantic Ocean to the Pacific Ocean via a system of locks?',
      opts: ['Panama Canal', 'Suez Canal', 'Erie Canal', 'Welland Canal'],
      ans: 'Panama Canal',
      exp: 'The Panama Canal utilizes the Gatun Lake lock system to raise and lower ships 26 meters above sea level.',
      cat: 'geography', sub: 'World Geography', grp: '13-17', diff: 'easy', tags: ['panama canal', 'geography']
    },
    {
      q: 'Which is the deepest known oceanic trench on Earth, reaching nearly 11,000 meters in depth at Challenger Deep?',
      opts: ['Mariana Trench', 'Tonga Trench', 'Puerto Rico Trench', 'Java Trench'],
      ans: 'Mariana Trench',
      exp: 'Located in the western Pacific Ocean near Guam, Challenger Deep plunges to approximately 10,994 meters.',
      cat: 'geography', sub: 'Famous Geographical Landmarks', grp: '13-17', diff: 'easy', tags: ['mariana trench', 'oceans']
    },
    {
      q: 'Which mountain range separates Europe from Asia along western Russia?',
      opts: ['Ural Mountains', 'Caucasus Mountains', 'Alps', 'Carpathians'],
      ans: 'Ural Mountains',
      exp: 'The Urals run north to south from the Arctic Ocean to the Ural River, forming the conventional boundary between continents.',
      cat: 'geography', sub: 'World Geography', grp: '13-17', diff: 'medium', tags: ['ural mountains', 'europe asia']
    },
    {
      q: 'What is the name of the supercontinent that incorporated almost all the landmasses on Earth approximately 335 to 175 million years ago?',
      opts: ['Pangaea', 'Gondwana', 'Laurasia', 'Rodinia'],
      ans: 'Pangaea',
      exp: 'Pangaea was surrounded by the superocean Panthalassa before breaking up into Laurasia and Gondwanaland.',
      cat: 'geography', sub: 'Earth Science', grp: '13-17', diff: 'easy', tags: ['pangaea', 'plate tectonics']
    },
    {
      q: 'Which Indian space mission discovered definitive hydroxyl and water molecules on the Moon’s surface using the M3 instrument in 2008?',
      opts: ['Chandrayaan-1', 'Chandrayaan-2', 'Mangalyaan', 'Astrosat'],
      ans: 'Chandrayaan-1',
      exp: 'Chandrayaan-1’s Moon Mineralogy Mapper confirmed widespread water molecules on the lunar surface.',
      cat: 'space', sub: 'ISRO & Space Missions', grp: '13-17', diff: 'easy', tags: ['chandrayaan 1', 'lunar water']
    },
    {
      q: 'Which Mars orbiter mission by ISRO succeeded on its very first maiden attempt in September 2014 at a cost less than Hollywood movie Gravity?',
      opts: ['Mangalyaan (Mars Orbiter Mission - MOM)', 'Chandrayaan-2', 'Aditya-L1', 'XPoSat'],
      ans: 'Mangalyaan (Mars Orbiter Mission - MOM)',
      exp: 'India became the fourth space agency and the first Asian nation to successfully reach Martian orbit.',
      cat: 'space', sub: 'ISRO & Space Missions', grp: '13-17', diff: 'easy', tags: ['mangalyaan', 'isro mars']
    },
    {
      q: 'Which Indian space telescope launched in 2015 was India’s first dedicated multi-wavelength space astronomy observatory?',
      opts: ['AstroSat', 'XPoSat', 'Cartosat-3', 'GSAT-11'],
      ans: 'AstroSat',
      exp: 'AstroSat observes the universe across ultraviolet, optical, and low/high energy X-ray bands simultaneously.',
      cat: 'space', sub: 'ISRO & Space Missions', grp: '18+', diff: 'medium', tags: ['astrosat', 'observatory']
    },
    {
      q: 'In the Mahabharata, who was the virtuous charioteer of King Dhritarashtra who received divine vision from Sage Vyasa to narrate the war live?',
      opts: ['Sanjaya', 'Sumantra', 'Vidura', 'Kripacharya'],
      ans: 'Sanjaya',
      exp: 'Sanjaya narrated the entirety of the Kurukshetra war and the Bhagavad Gita directly to the blind king.',
      cat: 'mahabharat', sub: 'Bhagavad Gita & Philosophy', grp: '13-17', diff: 'easy', tags: ['sanjaya', 'gita']
    },
    {
      q: 'What is the total number of chapters and verses in the sacred Bhagavad Gita?',
      opts: ['18 Chapters and 700 Verses', '12 Chapters and 500 Verses', '24 Chapters and 1000 Verses', '10 Chapters and 400 Verses'],
      ans: '18 Chapters and 700 Verses',
      exp: 'The Gita forms chapters 23 to 40 of the Bhishma Parva of the Mahabharata.',
      cat: 'mahabharat', sub: 'Bhagavad Gita & Philosophy', grp: '13-17', diff: 'easy', tags: ['gita', 'chapters']
    },
    {
      q: 'Which sacred text within the Shanti Parva of the Mahabharata contains Bhishma’s profound teachings on statecraft, duties of a king (Rajadharma), and spiritual liberation?',
      opts: ['Shanti Parva & Anushasana Parva', 'Sabha Parva', 'Udyoga Parva', 'Vana Parva'],
      ans: 'Shanti Parva & Anushasana Parva',
      exp: 'From his bed of arrows, Bhishma imparted supreme wisdom on governance, ethics, and devotion to Yudhishthira.',
      cat: 'mahabharat', sub: 'Wisdom & Teachings', grp: '18+', diff: 'medium', tags: ['bhishma', 'shanti parva']
    },
    {
      q: 'In which Parva of the Mahabharata does the infamous game of dice (Dyuta) and Draupadi’s humiliation take place?',
      opts: ['Sabha Parva', 'Adi Parva', 'Virata Parva', 'Udyoga Parva'],
      ans: 'Sabha Parva',
      exp: 'The Sabha Parva covers the construction of the Maya Sabha, the Rajasuya Yajna, and the tragic game of dice.',
      cat: 'mahabharat', sub: 'Pandavas & Kauravas', grp: '18+', diff: 'medium', tags: ['sabha parva', 'dice']
    },
    {
      q: 'In the Ramayana, which brother of Ravana chose to sleep for six months at a time due to a boon twisted by Goddess Saraswati?',
      opts: ['Kumbhakarna', 'Vibhishana', 'Ahiravana', 'Kalanemi'],
      ans: 'Kumbhakarna',
      exp: 'He meant to ask for "Indra-asana" (Indra’s throne), but Saraswati seated on his tongue caused him to utter "Nidra-asana" (sleep).',
      cat: 'ramayan', sub: 'Kishkindha & Lanka', grp: '13-17', diff: 'easy', tags: ['kumbhakarna', 'ramayan']
    },
    {
      q: 'Who was the master architect who built the floating bridge (Ram Setu) from Rameshwaram to Lanka across the ocean?',
      opts: ['Nala (son of Vishwakarma) and Nila', 'Sugriva and Angada', 'Jambavan', 'Hanuman'],
      ans: 'Nala (son of Vishwakarma) and Nila',
      exp: 'Nala was blessed with the architectural genius of Vishwakarma, orchestrating stones inscribed with Rama’s name.',
      cat: 'ramayan', sub: 'Epic Events & Battles', grp: '13-17', diff: 'easy', tags: ['ram setu', 'nala nila']
    },
    {
      q: 'Who was the wife of Ravana and mother of Meghanada (Indrajit), celebrated for her virtue, beauty, and wisdom?',
      opts: ['Mandodari', 'Sulochana', 'Kaikesi', 'Dhanyamalini'],
      ans: 'Mandodari',
      exp: 'Mandodari was the daughter of the celestial architect Maya Danava and one of the revered Panchakanyas.',
      cat: 'ramayan', sub: 'Characters & Lineage', grp: '13-17', diff: 'easy', tags: ['mandodari', 'panchakanya']
    },
    {
      q: 'In Indian classical music, what is the term for the melodic framework or aesthetic mode built on specific notes (swaras)?',
      opts: ['Raga', 'Tala', 'Gharana', 'Alap'],
      ans: 'Raga',
      exp: 'A Raga evokes a specific emotional sentiment (Rasa) and corresponds to specific times of day or seasons.',
      cat: 'india-gk', sub: 'Indian Culture & Festivals', grp: '13-17', diff: 'easy', tags: ['raga', 'indian classical music']
    },
    {
      q: 'What is the rhythmic cycle and beat pattern in Indian classical music called?',
      opts: ['Tala', 'Raga', 'Shruti', 'Svara'],
      ans: 'Tala',
      exp: 'Tala provides the temporal framework for compositions, such as Teental (16 beats), Jhaptal (10 beats), and Rupak (7 beats).',
      cat: 'india-gk', sub: 'Indian Culture & Festivals', grp: '13-17', diff: 'easy', tags: ['tala', 'music']
    },
    {
      q: 'Which famous UNESCO World Heritage cave temple complex in Aurangabad district, Maharashtra features monolithic rock-cut cave 16: Kailasa Temple?',
      opts: ['Ellora Caves', 'Ajanta Caves', 'Elephanta Caves', 'Badami Caves'],
      ans: 'Ellora Caves',
      exp: 'The Kailasa Temple (Cave 16) was carved vertically top-down from a single monolithic basalt rock under Rashtrakuta king Krishna I.',
      cat: 'india-gk', sub: 'Indian Monuments', grp: '13-17', diff: 'easy', tags: ['ellora', 'kailasa temple', 'rashtrakuta']
    },
    {
      q: 'Which cave complex in Maharashtra is universally acclaimed for its magnificent Buddhist murals and frescoes painted between 2nd century BCE and 5th century CE?',
      opts: ['Ajanta Caves', 'Ellora Caves', 'Kanheri Caves', 'Karla Caves'],
      ans: 'Ajanta Caves',
      exp: 'The horseshoe-shaped gorge along the Waghur River contains 30 rock-cut caves depicting Jataka tales and Bodhisattva Padmapani.',
      cat: 'india-gk', sub: 'Indian Monuments', grp: '13-17', diff: 'easy', tags: ['ajanta', 'buddhist murals']
    },
    {
      q: 'Who was the ancient Indian surgeon who lived in Kashi (Varanasi) and authored the foundational treatise Sushruta Samhita, describing rhinoplasty and cataract surgeries?',
      opts: ['Maharishi Sushruta (Father of Surgery)', 'Maharishi Charaka', 'Vagbhata', 'Jivaka'],
      ans: 'Maharishi Sushruta (Father of Surgery)',
      exp: 'Sushruta described over 120 surgical instruments, 300 surgical procedures, and reconstructive plastic surgery.',
      cat: 'history', sub: 'Ancient India', grp: '13-17', diff: 'easy', tags: ['sushruta', 'surgery', 'ancient medicine']
    },
    {
      q: 'Which ancient Indian physician compiled the definitive foundational encyclopedia of Ayurveda known as Charaka Samhita?',
      opts: ['Maharishi Charaka', 'Maharishi Sushruta', 'Dhanvantari', 'Madhava'],
      ans: 'Maharishi Charaka',
      exp: 'Charaka expounded the Tridosha theory (Vata, Pitta, Kapha) and emphasized prevention, digestion, and holistic mind-body harmony.',
      cat: 'history', sub: 'Ancient India', grp: '13-17', diff: 'easy', tags: ['charaka', 'ayurveda']
    },
    {
      q: 'Which Indian mathematician and astronomer of the classical era calculated the value of Pi as 3.1416, proposed that the Earth rotates on its axis, and explained solar/lunar eclipses scientifically in 499 CE?',
      opts: ['Aryabhata', 'Varahamihira', 'Brahmagupta', 'Bhaskara II'],
      ans: 'Aryabhata',
      exp: 'Aryabhata authored the Aryabhatiya at age 23 in Kusumapura (Pataliputra), revolutionizing trigonometry and astronomy.',
      cat: 'history', sub: 'Ancient India', grp: '13-17', diff: 'easy', tags: ['aryabhata', 'mathematics', 'astronomy']
    },
    {
      q: 'Which 7th-century Indian mathematician introduced the rules for computing with Zero (shunya) and negative numbers in his treatise Brahmasphutasiddhanta?',
      opts: ['Brahmagupta', 'Aryabhata', 'Bhaskara I', 'Madhava of Sangamagrama'],
      ans: 'Brahmagupta',
      exp: 'Brahmagupta established arithmetic rules for zero and positive/negative numbers and formulated Brahmagupta’s formula for cyclic quadrilaterals.',
      cat: 'history', sub: 'Ancient India', grp: '18+', diff: 'hard', tags: ['brahmagupta', 'zero', 'mathematics']
    },
    {
      q: 'Which 14th-century Kerala School mathematician-astronomer founded mathematical analysis by discovering infinite series expansions for sine, cosine, and arctan centuries before Newton and Leibniz?',
      opts: ['Madhava of Sangamagrama', 'Nilakantha Somayaji', 'Jyesthadeva', 'Bhaskara II'],
      ans: 'Madhava of Sangamagrama',
      exp: 'Madhava discovered power series calculus and the Gregory-Leibniz series for Pi.',
      cat: 'history', sub: 'Ancient India', grp: '18+', diff: 'hard', tags: ['madhava', 'kerala school', 'calculus']
    },
    {
      q: 'Which 12th-century Indian mathematician wrote the famous mathematical treatise "Siddhanta Shiromani" with sections named "Lilavati" and "Bijaganita"?',
      opts: ['Bhaskara II (Bhaskaracharya)', 'Brahmagupta', 'Aryabhata II', 'Mahavira'],
      ans: 'Bhaskara II (Bhaskaracharya)',
      exp: 'Bhaskaracharya computed the time taken for Earth to orbit the Sun as 365.2588 days and anticipated differential calculus.',
      cat: 'history', sub: 'Ancient India', grp: '13-17', diff: 'medium', tags: ['bhaskara ii', 'lilavati']
    },
    {
      q: 'What is the largest living mammal on Earth, whose heart alone weighs as much as a small car?',
      opts: ['Blue Whale', 'African Elephant', 'Fin Whale', 'Sperm Whale'],
      ans: 'Blue Whale',
      exp: 'Blue whales can reach up to 30 meters in length and weigh nearly 200 metric tons.',
      cat: 'science', sub: 'Animals & Nature', grp: '13-17', diff: 'easy', tags: ['blue whale', 'animals']
    },
    {
      q: 'What is the fastest animal in the world, reaching diving speeds over 380 km/h (240 mph) when hunting prey in a high-speed stoop?',
      opts: ['Peregrine Falcon', 'Cheetah', 'Golden Eagle', 'Sailfish'],
      ans: 'Peregrine Falcon',
      exp: 'The peregrine falcon reaches breathtaking terminal velocities during hunting dives.',
      cat: 'science', sub: 'Animals & Nature', grp: '13-17', diff: 'easy', tags: ['peregrine falcon', 'fastest animal']
    },
    {
      q: 'What is the fastest land animal on Earth, capable of accelerating from 0 to 100 km/h in under 3 seconds?',
      opts: ['Cheetah', 'Pronghorn Antelope', 'Lion', 'Springbok'],
      ans: 'Cheetah',
      exp: 'Cheetahs can sprint up to 120 km/h over short bursts thanks to flexible spines and non-retractable claws.',
      cat: 'science', sub: 'Animals & Nature', grp: '13-17', diff: 'easy', tags: ['cheetah', 'speed']
    },
    {
      q: 'Which country has the largest population in the world according to UN 2023 estimates?',
      opts: ['India', 'China', 'United States', 'Indonesia'],
      ans: 'India',
      exp: 'In April 2023, the United Nations confirmed that India surpassed China to become the world’s most populous nation.',
      cat: 'general-knowledge', sub: 'World Trivia', grp: '13-17', diff: 'easy', tags: ['india', 'population']
    },
    {
      q: 'Which country is home to the most official spoken languages, with over 840 living languages spoken across its islands?',
      opts: ['Papua New Guinea', 'Indonesia', 'Nigeria', 'India'],
      ans: 'Papua New Guinea',
      exp: 'Papua New Guinea possesses extraordinary linguistic diversity with over 840 distinct indigenous languages.',
      cat: 'general-knowledge', sub: 'World Trivia', grp: '18+', diff: 'hard', tags: ['languages', 'papua new guinea']
    },
    {
      q: 'Which treaty signed in 1987 is widely regarded as the most successful environmental agreement in history, leading to the phase-out of ozone-depleting chlorofluorocarbons (CFCs)?',
      opts: ['Montreal Protocol', 'Kyoto Protocol', 'Basel Convention', 'Geneva Convention'],
      ans: 'Montreal Protocol',
      exp: 'The Montreal Protocol has allowed the stratospheric ozone layer to begin measurable healing.',
      cat: 'general-knowledge', sub: 'Global Challenges & Environment', grp: '18+', diff: 'medium', tags: ['montreal protocol', 'ozone']
    },
    {
      q: 'What is the name of the international thermonuclear experimental reactor under construction in southern France to demonstrate net energy from nuclear fusion?',
      opts: ['ITER (International Thermonuclear Experimental Reactor)', 'CERN', 'LIGO', 'FermiLab'],
      ans: 'ITER (International Thermonuclear Experimental Reactor)',
      exp: 'ITER is a 35-nation collaboration (including India) building the world’s largest magnetic confinement plasma tokamak.',
      cat: 'science', sub: 'Physics', grp: '18+', diff: 'medium', tags: ['iter', 'fusion', 'energy']
    },
    {
      q: 'What is the name of the European particle physics laboratory near Geneva that operates the Large Hadron Collider (LHC) where the Higgs Boson was discovered?',
      opts: ['CERN', 'DESY', 'SLAC', 'Fermilab'],
      ans: 'CERN',
      exp: 'CERN confirmed the discovery of the Higgs boson (the God particle) in July 2012.',
      cat: 'science', sub: 'Physics', grp: '13-17', diff: 'easy', tags: ['cern', 'higgs boson', 'lhc']
    }
  ];

  pool.forEach((p, index) => {
    list.push({
      id: `ta-ext-${index + 1}`,
      question: p.q,
      options: p.opts,
      correctAnswer: p.ans,
      explanation: p.exp,
      category: p.cat,
      subcategory: p.sub,
      ageGroup: p.grp,
      difficulty: p.diff,
      tags: p.tags
    });
  });

  return list;
}

export const ALL_TEEN_ADULT_QUESTIONS = getTeenAdultQuestions();
