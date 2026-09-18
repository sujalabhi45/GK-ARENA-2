import { Language } from './types';

export interface Translations {
  [key: string]: any;
  // Brand & Nav
  brandTitle: string;
  brandTagline: string;
  targetAge: string;
  dailyChallenge: string;
  streak: string;
  coins: string;
  points: string;
  joinArena: string;
  logout: string;
  profile: string;

  // Tabs
  tabPlay: string;
  tabKingsQueens: string;
  tabEpics: string;
  tabLeaderboard: string;
  tabTrophies: string;
  tabCustom: string;

  // Age Groups
  ageAll: string;
  ageKids: string;
  ageJunior: string;
  ageTeens: string;
  ageAdults: string;

  // Daily Challenge Card
  dailyTitle: string;
  dailySubtitle: string;
  dailyCompleted: string;
  dailyComeBack: string;
  startDailyBtn: string;
  todayReward: string;

  // Category Grid
  arenasTitle: string;
  arenasSubtitle: string;
  realms: string;
  quickStart: string;
  explorePavilion: string;
  exploreHall: string;
  questionsCount: string;

  // Quiz Modal
  questionLabel: string;
  quitQuiz: string;
  quitConfirm: string;
  fiftyFifty: string;
  fiftyFiftyUsed: string;
  aiSageHint: string;
  aiSageTitle: string;
  askAiSage: string;
  aiThinking: string;
  aiHintLabel: string;
  historicalContext: string;
  correctExplanation: string;
  incorrectExplanation: string;
  arenaTrialCompleted: string;
  correct: string;
  newAchievementsUnlocked: string;
  correctAnswerReview: string;
  returnToArena: string;
  difficulty: string;
  difficultyEasy: string;
  difficultyMedium: string;
  difficultyHard: string;
  skipQuestion: string;
  nextQuestion: string;
  viewResults: string;
  explanationTitle: string;
  correctExclamation: string;
  incorrectExclamation: string;
  timeUpExclamation: string;
  quizSummaryTitle: string;
  finalScore: string;
  accuracy: string;
  pointsEarned: string;
  coinsEarned: string;
  questionReview: string;
  yourAnswer: string;
  correctAnswerLabel: string;
  playAgain: string;
  backToArena: string;
  viewInHindi: string;
  viewInEnglish: string;
  switchLanguage: string;
  translating: string;

  // Kings & Queens Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  dynastyFilter: string;
  allDynasties: string;
  reignPeriod: string;
  keyFeats: string;
  startRulerQuiz: string;
  askAiHistorian: string;

  // Epics Pavilion
  epicsTitle: string;
  epicsSubtitle: string;
  ramayanQuest: string;
  mahabharatQuest: string;
  startQuest: string;

  // Leaderboard & Trophies
  leaderboardTitle: string;
  rank: string;
  scholar: string;
  weekly: string;
  allTime: string;
  today: string;
  trophiesTitle: string;
  trophiesSubtitle: string;
  unlocked: string;
  locked: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandTitle: 'GK ARENA',
    brandTagline: 'Kings • Queens • Ramayan • Mahabharat • Science • Space',
    targetAge: 'Target:',
    dailyChallenge: 'Daily Challenge',
    streak: 'Streak',
    coins: 'Coins',
    points: 'Points',
    joinArena: 'Join Arena',
    logout: 'Log Out',
    profile: 'Profile',

    tabPlay: 'Play Arena',
    tabKingsQueens: 'Kings & Queens',
    tabEpics: 'Epics Pavilion',
    tabLeaderboard: 'Leaderboard',
    tabTrophies: 'Trophies',
    tabCustom: 'Quiz Rooms',

    ageAll: 'All Ages',
    ageKids: 'Kids (6-9)',
    ageJunior: 'Junior (10-12)',
    ageTeens: 'Teens (13-17)',
    ageAdults: 'Adults (18+)',

    dailyTitle: "Today's 50-Question Daily Grand Trial",
    dailySubtitle: '50 Curated Questions Across Heritage & Knowledge. Keep your flame burning!',
    dailyCompleted: 'Challenge Completed Today!',
    dailyComeBack: 'Come back tomorrow for fresh questions & bonus coins!',
    startDailyBtn: "Play Today's 50-Question Trial",
    todayReward: 'Reward: +1,250 Pts • +150 Coins',

    arenasTitle: 'Knowledge Arenas',
    arenasSubtitle: 'Select a topic to test your wisdom and unlock mastery badges',
    realms: 'Realms',
    quickStart: 'Quick 10-Q Quiz',
    explorePavilion: 'Explore Pavilion',
    exploreHall: 'Explore Hall of Rulers',
    questionsCount: 'Questions',

    questionLabel: 'Question',
    quitQuiz: 'Quit Quiz',
    quitConfirm: 'Are you sure you want to quit the quiz? Your current progress will be lost.',
    fiftyFifty: '50:50 Lifeline',
    fiftyFiftyUsed: '50:50 Used',
    aiSageHint: 'Ask AI Sage',
    aiSageTitle: 'Guidance from the Ancient Sage',
    askAiSage: 'Ask AI Sage Hint',
    aiThinking: 'Sage thinking...',
    aiHintLabel: 'Arena Sage Hint',
    historicalContext: 'Chronicle & Explanation',
    correctExplanation: 'Correct Answer!',
    incorrectExplanation: 'Better luck next round!',
    arenaTrialCompleted: 'Arena Trial Completed!',
    correct: 'Correct',
    newAchievementsUnlocked: 'New Achievements Unlocked!',
    correctAnswerReview: 'Correct',
    returnToArena: 'Return to Arena',
    difficulty: 'Difficulty',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    skipQuestion: 'Skip Question',
    nextQuestion: 'Next Question',
    viewResults: 'View Results',
    explanationTitle: 'Historical Context & Explanation:',
    correctExclamation: 'Correct Answer! Outstanding!',
    incorrectExclamation: 'Incorrect!',
    timeUpExclamation: "Time's Up!",
    quizSummaryTitle: 'Arena Trial Completed!',
    finalScore: 'Final Score',
    accuracy: 'Accuracy',
    pointsEarned: 'Points Earned',
    coinsEarned: 'Coins Earned',
    questionReview: 'Question Review',
    yourAnswer: 'Your Answer:',
    correctAnswerLabel: 'Correct:',
    playAgain: 'Play Another Quiz',
    backToArena: 'Back to Arena',
    viewInHindi: 'हिंदी में देखें (Switch to Hindi)',
    viewInEnglish: 'View in English (अंग्रेजी में देखें)',
    switchLanguage: 'Switch to Hindi',
    translating: 'Translating to Hindi...',

    galleryTitle: 'Hall of Great Indian Kings & Queens',
    gallerySubtitle: 'Explore the reigns, military feats, and architectural wonders of monumental rulers.',
    dynastyFilter: 'Filter Dynasty:',
    allDynasties: 'All Dynasties',
    reignPeriod: 'Reign / Era:',
    keyFeats: 'Key Accomplishments:',
    startRulerQuiz: 'Play Ruler Quiz',
    askAiHistorian: 'Ask AI Historian',

    epicsTitle: 'Sacred Epics Pavilion: Ramayan & Mahabharat',
    epicsSubtitle: 'Explore timeless wisdom, righteous dharma, noble heroes, and legendary battles.',
    ramayanQuest: 'Ramayan Quest',
    mahabharatQuest: 'Mahabharat Quest',
    startQuest: 'Start Quest',

    leaderboardTitle: 'Arena Hall of Champions',
    rank: 'Rank',
    scholar: 'Scholar',
    weekly: 'This Week',
    allTime: 'All Time',
    today: 'Today',
    trophiesTitle: 'Hall of Trophies & Achievements',
    trophiesSubtitle: 'Unlock prestigious titles, mastery badges, and royal honors as you level up.',
    unlocked: 'Unlocked',
    locked: 'Locked',

    // Custom Quiz
    customQuizTitle: 'Custom Quiz Arenas & Multiplayer PIN',
    customQuizSubtitle: 'Enter a 6-digit room PIN or build your own custom arena for friends and classmates.',
    enterPin: 'Join Arena with PIN',
    enterPinPlaceholder: 'Enter 6-digit PIN (e.g. 123456)',
    joinQuiz: 'Join & Play',
    createCustomQuiz: 'Create Custom Arena',
    quizTitleLabel: 'Quiz Title',
    quizTitlePlaceholder: 'e.g. 8th Grade History Challenge',
    quizDescLabel: 'Description',
    quizDescPlaceholder: 'Brief intro to your challenge...',
    selectCategory: 'Select Topic',
    questionCountLabel: 'Question Count',
    createQuizBtn: 'Generate & Publish Arena',
    communityQuizzes: 'Public Custom Arenas',
    pinCopied: 'PIN copied to clipboard!',
    createdBy: 'Created by',

    // Profile
    profileOverview: 'Scholar Dashboard & Mastery',
    quizzesPlayed: 'Quizzes Played',
    accuracyRate: 'Accuracy Rate',
    categoryMasteryTitle: 'Discipline & Topic Mastery',
    recentAttempts: 'Recent Arena Trials',
    noAttemptsYet: 'No quiz attempts recorded yet. Play a quiz to see your history!',
    attemptScore: 'Score',
    attemptTime: 'Time',
    attemptDate: 'Date',

    // Auth
    authLoginTitle: 'Sign In to GK Arena',
    authRegisterTitle: 'Create Your Scholar Account',
    usernameOrEmail: 'Username or Email',
    passwordLabel: 'Password',
    displayNameLabel: 'Display Name',
    ageGroupLabel: 'Select Your Age Group',
    quickDemoDiya: 'Quick Demo: Diya (Age 10-12)',
    quickDemoArjun: 'Quick Demo: Arjun (Age 13-17)',
    signInBtn: 'Sign In to Arena',
    registerBtn: 'Create Account & Play',
    noAccountPrompt: "Don't have an account?",
    hasAccountPrompt: 'Already have an account?',
    signUpNow: 'Sign Up',
    signInNow: 'Sign In'
  },

  hi: {
    brandTitle: 'जीके एरीना',
    brandTagline: 'राजा • रानियां • रामायण • महाभारत • विज्ञान • अंतरिक्ष',
    targetAge: 'लक्ष्य आयु:',
    dailyChallenge: 'दैनिक चुनौती',
    streak: 'लगातार दिन',
    coins: 'सिक्के',
    points: 'अंक',
    joinArena: 'प्रवेश करें',
    logout: 'लॉग आउट',
    profile: 'प्रोफ़ाइल',

    tabPlay: 'प्रश्नोत्तरी (खेलें)',
    tabKingsQueens: 'राजा और रानियां',
    tabEpics: 'रामायण व महाभारत',
    tabLeaderboard: 'लीडरबोर्ड',
    tabTrophies: 'उपलब्धियां',
    tabCustom: 'क्विज़ रूम',

    ageAll: 'सभी आयु',
    ageKids: 'बच्चे (६-९ वर्ष)',
    ageJunior: 'जूनियर (१०-१२ वर्ष)',
    ageTeens: 'किशोर (१३-१७ वर्ष)',
    ageAdults: 'वयस्क (१८+ वर्ष)',

    dailyTitle: 'आज की ५० प्रश्नों की महा-मुकाबला परीक्षा',
    dailySubtitle: 'भारतीय धरोहर और ज्ञान के ५० विशेष प्रश्न। अपनी ज्ञान ज्योति प्रज्वलित रखें!',
    dailyCompleted: 'आज की चुनौती सम्पन्न हुई!',
    dailyComeBack: 'नए प्रश्नों और बोनस सिक्कों के लिए कल पुनः पधारें!',
    startDailyBtn: '५० प्रश्नों का महा-मुकाबला खेलें',
    todayReward: 'पुरस्कार: +१,२५० अंक • +१५० सिक्के',

    arenasTitle: 'ज्ञान के प्रमुख क्षेत्र',
    arenasSubtitle: 'अपने ज्ञान को परखने और सम्मान पदक जीतने के लिए विषय चुनें',
    realms: 'विषय',
    quickStart: 'त्वरित १०-प्रश्नों की क्विज़',
    explorePavilion: 'विस्तृत कथाएं देखें',
    exploreHall: 'शासकों का इतिहास देखें',
    questionsCount: 'प्रश्न',

    questionLabel: 'प्रश्न',
    quitQuiz: 'क्विज़ छोड़ें',
    quitConfirm: 'क्या आप वाकई क्विज़ छोड़ना चाहते हैं? आपकी प्रगति सुरक्षित नहीं रहेगी।',
    fiftyFifty: '५०:५० लाइफलाइन',
    fiftyFiftyUsed: '५०:५० प्रयुक्त',
    aiSageHint: 'ऋषि से सलाह लें',
    aiSageTitle: 'प्राचीन ऋषि का मार्गदर्शन',
    askAiSage: 'ऋषि से संकेत (Hint) लें',
    aiThinking: 'ऋषि विचार कर रहे हैं...',
    aiHintLabel: 'ऋषि का दिव्य संकेत',
    historicalContext: 'ऐतिहासिक संदर्भ एवं व्याख्या',
    correctExplanation: 'शानदार! बिल्कुल सही उत्तर!',
    incorrectExplanation: 'प्रयास उत्तम था! अगली बार सफलता मिलेगी!',
    arenaTrialCompleted: 'क्विज़ मुकाबला सम्पन्न!',
    correct: 'सही उत्तर',
    newAchievementsUnlocked: 'नयी उपलब्धियां प्राप्त हुईं!',
    correctAnswerReview: 'सही उत्तर',
    returnToArena: 'मुख्य मंच पर लौटें',
    difficulty: 'कठिनाई',
    difficultyEasy: 'सरल',
    difficultyMedium: 'मध्यम',
    difficultyHard: 'कठिन',
    skipQuestion: 'प्रश्न छोड़ें',
    nextQuestion: 'अगला प्रश्न',
    viewResults: 'परिणाम देखें',
    explanationTitle: 'ऐतिहासिक संदर्भ एवं विस्तृत व्याख्या:',
    correctExclamation: 'शानदार! बिल्कुल सही उत्तर!',
    incorrectExclamation: 'गलत उत्तर!',
    timeUpExclamation: 'समय समाप्त!',
    quizSummaryTitle: 'क्विज़ मुकाबला सम्पन्न!',
    finalScore: 'अंतिम स्कोर',
    accuracy: 'सटीकता',
    pointsEarned: 'अर्जित अंक',
    coinsEarned: 'अर्जित सिक्के',
    questionReview: 'प्रश्नों की समीक्षा',
    yourAnswer: 'आपका उत्तर:',
    correctAnswerLabel: 'सही उत्तर:',
    playAgain: 'दूसरी क्विज़ खेलें',
    backToArena: 'मुख्य मंच पर लौटें',
    viewInHindi: 'हिंदी में देखें (Switch to Hindi)',
    viewInEnglish: 'View in English (अंग्रेजी में देखें)',
    switchLanguage: 'अंग्रेजी में बदलें (Switch to English)',
    translating: 'हिंदी में अनुवाद हो रहा है...',

    galleryTitle: 'महान भारतीय राजा और रानियां',
    gallerySubtitle: 'भारत के पराक्रमी शासकों, वीर रानियों, युद्ध रणनीतियों और भव्य स्थापत्य का इतिहास।',
    dynastyFilter: 'राजवंश चुनें:',
    allDynasties: 'सभी राजवंश',
    reignPeriod: 'शासनकाल / युग:',
    keyFeats: 'प्रमुख ऐतिहासिक उपलब्धियां:',
    startRulerQuiz: 'शासक क्विज़ खेलें',
    askAiHistorian: 'एआई इतिहासकार से पूछें',

    epicsTitle: 'पवित्र महाकाव्य: रामायण एवं महाभारत',
    epicsSubtitle: 'सनातन धर्म, मर्यादा पुरुषोत्तम श्रीराम, भगवान श्रीकृष्ण, कुरुक्षेत्र और भगवद्गीता का अमर ज्ञान।',
    ramayanQuest: 'रामायण ज्ञान यात्रा',
    mahabharatQuest: 'महाभारत ज्ञान यात्रा',
    startQuest: 'यात्रा शुरू करें',

    leaderboardTitle: 'सर्वश्रेष्ठ विद्वान (लीडरबोर्ड)',
    rank: 'स्थान',
    scholar: 'विद्वान',
    weekly: 'इस सप्ताह',
    allTime: 'सर्वकालिक',
    today: 'आज',
    trophiesTitle: 'उपलब्धियां और पदक कक्ष',
    trophiesSubtitle: 'जैसे-जैसे आप क्विज़ जीतेंगे, आपको ऐतिहासिक उपाधियां और स्वर्ण पदक प्राप्त होंगे।',
    unlocked: 'प्राप्त (अनलॉक)',
    locked: 'लॉक्ड',

    // Custom Quiz
    customQuizTitle: 'कस्टम क्विज़ रूम एवं मल्टीप्लेयर पिन',
    customQuizSubtitle: '६ अंकों का रूम पिन दर्ज कर शामिल हों या मित्रों व सहपाठियों के लिए अपनी क्विज़ बनाएं।',
    enterPin: 'पिन (PIN) द्वारा क्विज़ में शामिल हों',
    enterPinPlaceholder: '६ अंकों का पिन दर्ज करें (उदा. 123456)',
    joinQuiz: 'शामिल हों और खेलें',
    createCustomQuiz: 'अपनी स्वयं की क्विज़ बनाएं',
    quizTitleLabel: 'क्विज़ का शीर्षक',
    quizTitlePlaceholder: 'उदा. भारतीय इतिहास महा-मुकाबला',
    quizDescLabel: 'विवरण / निर्देश',
    quizDescPlaceholder: 'अपनी क्विज़ के बारे में संक्षिप्त परिचय लिखें...',
    selectCategory: 'विषय चुनें',
    questionCountLabel: 'प्रश्नों की संख्या',
    createQuizBtn: 'क्विज़ बनाएं और प्रकाशित करें',
    communityQuizzes: 'सार्वजनिक एरीना क्विज़',
    pinCopied: 'पिन क्लिपबोर्ड पर कॉपी हो गया!',
    createdBy: 'निर्माता:',

    // Profile
    profileOverview: 'विद्वान डैशबोर्ड एवं विषयवार दक्षता',
    quizzesPlayed: 'खेले गए क्विज़',
    accuracyRate: 'सटीकता दर',
    categoryMasteryTitle: 'विषयवार दक्षता एवं प्रगति',
    recentAttempts: 'हाल के क्विज़ प्रयास',
    noAttemptsYet: 'अभी तक कोई क्विज़ नहीं खेला गया। इतिहास देखने के लिए एक क्विज़ खेलें!',
    attemptScore: 'स्कोर',
    attemptTime: 'समय',
    attemptDate: 'दिनांक',

    // Auth
    authLoginTitle: 'जीके एरीना में लॉग इन करें',
    authRegisterTitle: 'नया विद्वान खाता बनाएं',
    usernameOrEmail: 'यूज़रनेम या ईमेल',
    passwordLabel: 'पासवर्ड',
    displayNameLabel: 'प्रदर्शन नाम (Display Name)',
    ageGroupLabel: 'अपना आयु वर्ग चुनें',
    quickDemoDiya: 'त्वरित डेमो: दीया (आयु १०-१२)',
    quickDemoArjun: 'त्वरित डेमो: अर्जुन (आयु १३-१७)',
    signInBtn: 'मंच में प्रवेश करें',
    registerBtn: 'खाता बनाएं और खेलें',
    noAccountPrompt: 'क्या आपके पास खाता नहीं है?',
    hasAccountPrompt: 'क्या पहले से खाता है?',
    signUpNow: 'पंजीकरण करें',
    signInNow: 'लॉग इन करें'
  }
};

export const CATEGORY_NAMES_HI: Record<string, { name: string; description: string }> = {
  'great-kings-queens': {
    name: 'महान भारतीय राजा और रानियां',
    description: 'छत्रपति शिवाजी, रानी लक्ष्मीबाई, सम्राट अशोक, महाराणा प्रताप और भारत के गौरवशाली शासक।'
  },
  'ramayan': {
    name: 'रामायण महाकाव्य',
    description: 'मर्यादा पुरुषोत्तम श्रीराम, माता सीता, भक्त हनुमान, अयोध्या और रामायण की पवित्र सीख।'
  },
  'mahabharat': {
    name: 'महाभारत महाकाव्य',
    description: 'धर्मक्षेत्र कुरुक्षेत्र, पांडव, कौरव, भगवान श्रीकृष्ण और श्रीमद्भगवद्गीता का अमर ज्ञान।'
  },
  'india-gk': {
    name: 'भारत सामान्य ज्ञान एवं संस्कृति',
    description: 'भारत का भूगोल, राज्य, राजधानियां, राष्ट्रीय प्रतीक, प्रसिद्ध स्मारक और भव्य त्योहार।'
  },
  'history': {
    name: 'भारतीय एवं विश्व इतिहास',
    description: 'सिंधु घाटी सभ्यता, मौर्य, गुप्त, स्वतंत्रता संग्राम और विश्व इतिहास के महत्वपूर्ण पड़ाव।'
  },
  'science': {
    name: 'विज्ञान और प्रकृति',
    description: 'भौतिकी, रसायन, मानव शरीर, जीव-जंतु और पर्यावरण के रहस्यमयी नियम।'
  },
  'space': {
    name: 'अंतरिक्ष एवं खगोलशास्त्र',
    description: 'सौरमंडल, ग्रह, चंद्रमा, सूर्य, इसरो (ISRO) और अंतरिक्ष अभियानों का रोमांच।'
  },
  'world-gk': {
    name: 'विश्व सामान्य ज्ञान',
    description: 'विश्व के महाद्वीप, नदियां, विश्व धरोहर स्थल, मुद्राएं और वैश्विक उपलब्धियां।'
  },
  'sports': {
    name: 'खेल एवं प्रतियोगिताएं',
    description: 'क्रिकेट, ओलंपिक, एशियाई खेल, पारंपरिक भारतीय खेल और विश्व रिकॉर्ड।'
  }
};
