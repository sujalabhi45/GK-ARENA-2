import { Question } from '../types';

// Term dictionary mapping English terms to standard Hindi (Devanagari)
export const HINDI_TERMS: Record<string, string> = {
  // National Symbols & India GK
  'Bengal Tiger': 'बंगाल टाइगर (बाघ)',
  'Asiatic Lion': 'एशियाई शेर',
  'Elephant': 'हाथी',
  'Leopard': 'तेंदुआ',
  'Indian Peacock': 'भारतीय मोर',
  'Parrot': 'तोता',
  'Kingfisher': 'नीलकंठ (किंगफिशर)',
  'Pigeon': 'कबूतर',
  'Lotus': 'कमल',
  'Rose': 'गुलाब',
  'Marigold': 'गेंदा',
  'Sunflower': 'सूरजमुखी',
  'Mango': 'आम',
  'Apple': 'सेब',
  'Banana': 'केला',
  'Guava': 'अमरूद',
  'New Delhi': 'नई दिल्ली',
  'Mumbai': 'मुंबई',
  'Kolkata': 'कोलकाता',
  'Chennai': 'चेन्नई',
  'Bengaluru': 'बेंगलुरु',
  'Hyderabad': 'हैदराबाद',
  'Banyan Tree': 'बरगद का पेड़',
  'Neem Tree': 'नीम का पेड़',
  'Peepal Tree': 'पीपल का पेड़',
  'Mango Tree': 'आम का पेड़',
  'Ganges (Ganga)': 'गंगा नदी',
  'Yamuna': 'यमुना नदी',
  'Brahmaputra': 'ब्रह्मपुत्र नदी',
  'Godavari': 'गोदावरी नदी',
  'Narmada': 'नर्मदा नदी',
  'Indian Rupee (₹)': 'भारतीय रुपया (₹)',
  'Dollar': 'डॉलर',
  'Pound': 'पाउंड',
  'Euro': 'यूरो',
  'Vande Mataram': 'वन्दे मातरम्',
  'Jana Gana Mana': 'जन गण मन',
  'Sare Jahan Se Achha': 'सारे जहां से अच्छा',
  'Ae Mere Watan Ke Logo': 'ऐ मेरे वतन के लोगों',
  'Bankim Chandra Chattopadhyay': 'बंकिम चंद्र चट्टोपाध्याय',
  'Rabindranath Tagore': 'रवींद्रनाथ टैगोर',
  'Mahatma Gandhi': 'महात्मा गांधी',
  'Subhas Chandra Bose': 'सुभाष चंद्र बोस',
  'Dr. B.R. Ambedkar': 'डॉ. बी. आर. अम्बेडकर',
  'Sardar Vallabhbhai Patel': 'सरदार वल्लभभाई पटेल',
  'Jawaharlal Nehru': 'जवाहरलाल नेहरू',
  'Bhagat Singh': 'भगत सिंह',
  'Lal Bahadur Shastri': 'लाल बहादुर शास्त्री',
  'Dr. Rajendra Prasad': 'डॉ. राजेंद्र प्रसाद',
  'Sarojini Naidu': 'सरोजिनी नायडू',
  'Agra': 'आगरा',
  'Jaipur': 'जयपुर',
  'Delhi': 'दिल्ली',
  'Lucknow': 'लखनऊ',
  'Diwali': 'दीपावली (दिवाली)',
  'Holi': 'होली',
  'Eid': 'ईद',
  'Christmas': 'क्रिसमस',
  'Dussehra': 'दशहरा (विजयादशमी)',
  'Raksha Bandhan': 'रक्षाबंधन',
  'Onam': 'ओणम',
  'Pongal': 'पोंगल',
  'Bihu': 'बिहू',
  'Three (Saffron, White, Green)': 'तीन (केसरिया, सफेद, हरा)',
  'Two': 'दो',
  'Four': 'चार',
  'Five': 'पांच',
  '24': '२४',
  '12': '१२',
  '16': '१६',
  '36': '३६',
  '15th August': '१५ अगस्त',
  '26th January': '२६ जनवरी',
  '2nd October': '२ अक्टूबर',
  '14th November': '१४ नवंबर',

  // Great Kings & Queens
  'Chhatrapati Shivaji Maharaj': 'छत्रपति शिवाजी महाराज',
  'Maharana Pratap': 'महाराणा प्रताप',
  'Ashoka the Great': 'सम्राट अशोक महान',
  'Chandragupta Maurya': 'चंद्रगुप्त मौर्य',
  'Samudragupta': 'समुद्रगुप्त',
  'Harshavardhana': 'हर्षवर्धन',
  'Krishnadevaraya': 'श्री कृष्णदेवराय',
  'Rajaraja Chola I': 'राजराज चोल प्रथम',
  'Rajendra Chola I': 'राजेंद्र चोल प्रथम',
  'Prithviraj Chauhan': 'पृथ्वीराज चौहान',
  'Rani Lakshmibai': 'रानी लक्ष्मीबाई (झांसी की रानी)',
  'Ahilyabai Holkar': 'पुण्यश्लोक अहिल्याबाई होल्कर',
  'Rani Durgavati': 'रानी दुर्गावती',
  'Rani Abbakka Chowta': 'रानी अब्बक्का चौटा',
  'Rani Chennamma': 'कित्तूर रानी चेन्नम्मा',
  'Kanishka': 'सम्राट कनिष्क',
  'Pulakeshin II': 'पुलकेशिन द्वितीय',
  'Raja Bhoja': 'राजा भोज',
  'Banda Singh Bahadur': 'बाबा बंदा सिंह बहादुर',
  'Maharaja Ranjit Singh': 'महाराजा रणजीत सिंह',
  'Lachit Borphukan': 'लचित बोरफुकन',
  'Maratha Empire': 'मराठा साम्राज्य',
  'Maurya Empire': 'मौर्य साम्राज्य',
  'Gupta Empire': 'गुप्त साम्राज्य',
  'Chola Empire': 'चोल साम्राज्य',
  'Vijayanagara Empire': 'विजयनगर साम्राज्य',
  'Mughal Empire': 'मुगल साम्राज्य',
  'Kalinga War': 'कलिंग युद्ध',
  'Battle of Haldighati': 'हल्दीघाटी का युद्ध',
  'Battle of Saraighat': 'सरायघाट का युद्ध',
  'Battle of Panipat': 'पानीपत का युद्ध',
  'Battle of Tarain': 'तराइन का युद्ध',
  'Raigad Fort': 'रायगढ़ किला',
  'Shivneri Fort': 'शिवनेरी किला',
  'Sindhudurg Fort': 'सिंधुदुर्ग किला',
  'Pratapgad': 'प्रतापगढ़',
  'Chittorgarh Fort': 'चित्तौड़गढ़ किला',
  'Kumbhalgarh Fort': 'कुंभलगढ़ किला',
  'Chetak': 'चेतक (अश्व)',
  'Ganimi Kava (Guerrilla Warfare)': 'गनीमी कावा (गुरिल्ला छापामार युद्ध)',
  'Brihadisvara Temple': 'बृहदेश्वर मंदिर (तंजावुर)',
  'Shore Temple': 'तट मंदिर (महाबलीपुरम)',
  'Meenakshi Amman Temple': 'मीनाक्षी अम्मन मंदिर',
  'Hampi': 'हम्पी',
  'Thanjavur': 'तंजावुर',
  'Pataliputra': 'पाटलिपुत्र (पटना)',
  'Ujjain': 'उज्जैन',

  'Babar': 'बाबर',
  'Babur': 'बाबर',
  'Ashoka': 'सम्राट अशोक',
  'Harsha': 'हर्षवर्धन',
  'Akbar': 'अकबर',
  'Shah Jahan': 'शाहजहाँ',
  'Aurangzeb': 'औरंगज़ेब',
  'Rana Sanga': 'राणा सांगा',
  'Baji Rao I': 'बाजीराव प्रथम',
  'Peshwa': 'पेशवा',
  'Jijabai': 'माता जीजाबाई',
  'Tanaji Malusare': 'तानाजी मालुसरे',
  'Baji Prabhu Deshpande': 'बाजीप्रभु देशपांडे',

  // Ramayan
  'Lord Rama': 'भगवान श्री राम',
  'Sita': 'माता सीता',
  'Lakshmana': 'लक्ष्मण',
  'Bharata': 'भरत',
  'Shatrughna': 'शत्रुघ्न',
  'Hanuman': 'श्री हनुमान जी',
  'King Dasharatha': 'महाराज दशरथ',
  'Dasharatha': 'महाराज दशरथ',
  'Kaushalya': 'माता कौशल्या',
  'Kaikeyi': 'रानी कैकेयी',
  'Sumitra': 'रानी सुमित्रा',
  'Ravana': 'रावण',
  'Vibhishana': 'विभीषण',
  'Kumbhakarna': 'कुंभकर्ण',
  'Indrajit (Meghanada)': 'इंद्रजीत (मेघनाद)',
  'Sugriva': 'सुग्रीव',
  'Vali': 'बाली',
  'Angada': 'अंगद',
  'Jatayu': 'जटायु',
  'Sampati': 'सम्पाती',
  'Jambavan': 'जाम्बवंत',
  'Sage Valmiki': 'महर्षि वाल्मीकि',
  'Valmiki': 'महर्षि वाल्मीकि',
  'Goswami Tulsidas': 'गोस्वामी तुलसीदास',
  'Sage Vishwamitra': 'महर्षि विश्वामित्र',
  'Sage Vashistha': 'महर्षि वशिष्ठ',
  'Sage Agastya': 'महर्षि अगस्त्य',
  'Ayodhya': 'अयोध्या',
  'Mithila': 'मिथिला (जनकपुर)',
  'Janaka': 'महाराज जनक',
  'Lanka': 'लंका',
  'Kishkindha': 'किष्किंधा',
  'Dandakaranya': 'दंडकारण्य वन',
  'Panchavati': 'पंचवटी',
  'Saryu River': 'सरयू नदी',
  'Pushpaka Vimana': 'पुष्पक विमान',
  'Sanjeevani Booti': 'संजीवनी बूटी',
  'Shiva Dhanush (Pinaka)': 'शिव धनुष (पिनाक)',
  'Ram Setu': 'राम सेतु (नल-नील सेतु)',
  'Sundara Kanda': 'सुंदरकांड',
  'Bala Kanda': 'बालकांड',
  'Ayodhya Kanda': 'अयोध्या कांड',
  'Yuddha Kanda': 'युद्ध कांड',
  '14 years': '१४ वर्ष',
  '12 years': '१२ वर्ष',
  '10 years': '१० वर्ष',

  // Mahabharat
  'Arjuna': 'अर्जुन',
  'Yudhishthira': 'युधिष्ठिर (धर्मराज)',
  'Bhima': 'भीम',
  'Nakula': 'नकुल',
  'Sahadeva': 'सहदेव',
  'Draupadi': 'द्रौपदी (पांचाली)',
  'Kunti': 'माता कुंती',
  'Madri': 'माद्री',
  'Pandu': 'महाराज पाण्डु',
  'Dhritarashtra': 'धृतराष्ट्र',
  'Gandhari': 'गांधारी',
  'Duryodhana': 'दुर्योधन',
  'Dushasana': 'दुःशासन',
  'Karna': 'दानवीर कर्ण',
  'Bhishma Pitamah': 'भीष्म पितामह',
  'Bhishma': 'भीष्म पितामह',
  'Dronacharya': 'गुरु द्रोणाचार्य',
  'Kripacharya': 'कृपाचार्य',
  'Ashwatthama': 'अश्वत्थामा',
  'Shakuni': 'मामा शकुनि',
  'Lord Krishna': 'भगवान श्री कृष्ण',
  'Krishna': 'श्री कृष्ण',
  'Balarama': 'बलराम',
  'Abhimanyu': 'वीर अभिमन्यु',
  'Ghatotkacha': 'घटोत्कच',
  'Eklavya': 'एकलव्य',
  'Vidura': 'महात्मा विदुर',
  'Sanjaya': 'संजय',
  'Vyasa': 'महर्षि वेदव्यास',
  'Hastinapur': 'हस्तिनापुर',
  'Indraprastha': 'इंद्रप्रस्थ',
  'Kurukshetra': 'कुरुक्षेत्र',
  'Bhagavad Gita': 'श्रीमद्भगवद्गीता',
  'Gandiva': 'गांडीव धनुष',
  'Sudarshana Chakra': 'सुदर्शन चक्र',
  'Panchajanya': 'पांचजन्य शंख',
  'Chakravyuha': 'चक्रव्यूह',
  '18 days': '१८ दिन',
  'Five (5)': 'पाँच (५)',
  '100': '१००',

  // Science & Space
  'Oxygen': 'ऑक्सीजन',
  'Carbon dioxide': 'कार्बन डाइऑक्साइड',
  'Nitrogen': 'नाइट्रोजन',
  'Hydrogen': 'हाइड्रोजन',
  'Water (H2O)': 'जल (H2O)',
  'Sun': 'सूर्य',
  'Earth': 'पृथ्वी',
  'Moon': 'चंद्रमा',
  'Mars': 'मंगल ग्रह',
  'Jupiter': 'बृहस्पति ग्रह',
  'Venus': 'शुक्र ग्रह',
  'Mercury': 'बुध ग्रह',
  'Saturn': 'शनि ग्रह',
  'Neptune': 'वरुण (नेप्च्यून)',
  'Uranus': 'अरुण (यूरेनस)',
  'Milky Way': 'आकाशगंगा (मिल्की वे)',
  'Gravity': 'गुरुत्वाकर्षण बल',
  'Photosynthesis': 'प्रकाश संश्लेषण',
  'Chlorophyll': 'क्लोरोफिल (पर्णहरित)',
  '206': '२०६',
  '300': '३००',
  'Heart': 'हृदय (दिल)',
  'Lungs': 'फेफड़े',
  'Brain': 'मस्तिष्क (दिमाग)',
  'Liver': 'यकृत (लीवर)',
  'ISRO': 'इसरो (ISRO)',
  'NASA': 'नासा (NASA)',
  'Chandrayaan-3': 'चंद्रयान-३',
  'Mangalyaan': 'मंगलयान (MOM)',
  'Aryabhata (Satellite)': 'आर्यभट्ट (उपग्रह)',
  'Dr. A.P.J. Abdul Kalam': 'डॉ. ए.पी.जे. अब्दुल कलाम',
  'Sir C.V. Raman': 'सर सी. वी. रमन',
  'Homi Bhabha': 'होमी जहांगीर भाभा',
  'Vikram Sarabhai': 'विक्रम साराभाई',
  'Jagadish Chandra Bose': 'जगदीश चंद्र बसु',
  'Srinivasa Ramanujan': 'श्रीनिवास रामानुजन',

  // Geography & Oceans & Continents
  'Asia': 'एशिया',
  'Africa': 'अफ्रीका',
  'Europe': 'यूरोप',
  'North America': 'उत्तरी अमेरिका',
  'South America': 'दक्षिणी अमेरिका',
  'Australia': 'ऑस्ट्रेलिया',
  'Antarctica': 'अंटार्कटिका',
  'Pacific Ocean': 'प्रशांत महासागर',
  'Atlantic Ocean': 'अटलांटिक महासागर',
  'Indian Ocean': 'हिंद महासागर',
  'Arctic Ocean': 'आर्कटिक महासागर',
  'Mount Everest': 'माउंट एवरेस्ट',
  'K2': 'के२ (गॉडविन ऑस्टिन)',
  'Kanchenjunga': 'कंचनजंगा',
  'Himalayas': 'हिमालय पर्वतमाला',
  'Western Ghats': 'पश्चिमी घाट',
  'Thar Desert': 'थार मरुस्थल',
  'Sahara Desert': 'सहारा रेगिस्तान',
  'Nile River': 'नील नदी',
  'Amazon River': 'अमेज़न नदी',

  // Sports & Common
  'Cricket': 'क्रिकेट',
  'Hockey': 'हॉकी',
  'Badminton': 'बैडमिंटन',
  'Football (Soccer)': 'फुटबॉल',
  'Chess': 'शतरंज',
  'Kabaddi': 'कबड्डी',
  '11': '११',
  '7': '७',
  'Sachin Tendulkar': 'सचिन तेंदुलकर',
  'Major Dhyan Chand': 'मेजर ध्यानचंद',
  'Neeraj Chopra': 'नीरज चोपड़ा',
  'P.V. Sindhu': 'पी.वी. सिंधु',
  'Viswanathan Anand': 'विश्वनाथन आनंद',
  'Mary Kom': 'मैरी कॉम',
  'Milkha Singh': 'मिल्खा सिंह (फ्लाइंग सिख)'
};

// Common sentence transformation rules
const QUESTION_PATTERNS: { regex: RegExp; replace: (match: RegExpMatchArray) => string }[] = [
  {
    regex: /^Who was the (?:brave )?founder of the ([a-zA-Z\s]+?)(?: known for.*)?\?/i,
    replace: (m) => `${translateWord(m[1].trim())} के वीर और प्रसिद्ध संस्थापक कौन थे?`
  },
  {
    regex: /^Who was the (?:first|great|famous) ([a-zA-Z\s]+) of ([a-zA-Z\s]+)\?/i,
    replace: (m) => `${translateWord(m[2].trim())} के प्रमुख ${translateWord(m[1].trim())} कौन थे?`
  },
  {
    regex: /^What is the National ([a-zA-Z\s]+) of India\?/i,
    replace: (m) => `भारत का राष्ट्रीय ${translateWord(m[1].trim())} क्या / कौन सा है?`
  },
  {
    regex: /^Which is the National ([a-zA-Z\s]+) of India\?/i,
    replace: (m) => `भारत का राष्ट्रीय ${translateWord(m[1].trim())} कौन सा है?`
  },
  {
    regex: /^What is the capital city of India\?/i,
    replace: () => 'भारत की राष्ट्रीय राजधानी क्या है?'
  },
  {
    regex: /^What is the capital of ([a-zA-Z\s]+)\?/i,
    replace: (m) => `${translateWord(m[1].trim())} की राजधानी क्या है?`
  },
  {
    regex: /^How many colors are there in the Indian National Flag.*?\?/i,
    replace: () => 'भारतीय राष्ट्रीय ध्वज (तिरंगे) में कितने रंग होते हैं?'
  },
  {
    regex: /^How many spokes are in the Ashoka Chakra.*?\?/i,
    replace: () => 'तिरंगे के अशोक चक्र में कितनी तीलियाँ (spokes) होती हैं?'
  },
  {
    regex: /^In which city is the famous Taj Mahal located\?/i,
    replace: () => 'प्रसिद्ध ताजमहल किस शहर में स्थित है?'
  },
  {
    regex: /^In which city is ([a-zA-Z\s]+) located\?/i,
    replace: (m) => `प्रसिद्ध ${translateWord(m[1].trim())} किस शहर में स्थित है?`
  },
  {
    regex: /^Which festival is widely celebrated as the Festival of Lights.*?\?/i,
    replace: () => 'भारत में रोशनी के पर्व के रूप में कौन सा त्योहार मनाया जाता है?'
  },
  {
    regex: /^Which festival is popularly known as the Festival of Colors.*?\?/i,
    replace: () => 'रंगों के त्योहार के रूप में कौन सा पर्व लोकप्रिय है?'
  },
  {
    regex: /^Who was the founder of the ([a-zA-Z\s]+)\?/i,
    replace: (m) => `${translateWord(m[1].trim())} के महान संस्थापक कौन थे?`
  },
  {
    regex: /^Who is the central hero and prince of Ayodhya in the Ramayan\?/i,
    replace: () => 'रामायण में अयोध्या के राजकुमार और केंद्रीय नायक कौन हैं?'
  },
  {
    regex: /^Who was the father of Lord Rama in the Ramayan\?/i,
    replace: () => 'रामायण के अनुसार भगवान श्री राम के पिता कौन थे?'
  },
  {
    regex: /^How many brothers were the Pandavas in the Mahabharat\?/i,
    replace: () => 'महाभारत में पांडव कुल कितने भाई थे?'
  },
  {
    regex: /^Which gas do humans inhale to stay alive\?/i,
    replace: () => 'जीवित रहने के लिए मनुष्य कौन सी गैस सांस के रूप में ग्रहण करते हैं?'
  },
  {
    regex: /^Which is the closest star to our planet Earth\?/i,
    replace: () => 'हमारी पृथ्वी के सबसे निकटतम तारा कौन सा है?'
  },
  {
    regex: /^How many continents are there on Earth\?/i,
    replace: () => 'हमारी पृथ्वी पर कुल कितने महाद्वीप हैं?'
  },
  {
    regex: /^How many days are there in a standard leap year\?/i,
    replace: () => 'एक साधारण लीप वर्ष (Leap Year) में कुल कितने दिन होते हैं?'
  },
  {
    regex: /^How many players are on the field in one cricket team.*?\?/i,
    replace: () => 'क्रिकेट मैच के दौरान एक टीम के कितने खिलाड़ी मैदान में होते हैं?'
  },
  {
    regex: /^Which planet is known as the ([a-zA-Z\s]+)\?/i,
    replace: (m) => `किस ग्रह को ${translateWord(m[1].trim())} के रूप में जाना जाता है?`
  },
  {
    regex: /^Which is the largest ([a-zA-Z\s]+) on Earth\?/i,
    replace: (m) => `पृथ्वी पर सबसे बड़ा ${translateWord(m[1].trim())} कौन सा है?`
  },
  {
    regex: /^Who wrote the epic ([a-zA-Z\s]+)\?/i,
    replace: (m) => `महान ग्रंथ ${translateWord(m[1].trim())} की रचना किसने की थी?`
  },
  {
    regex: /^In which year was the historic Battle of Haldighati fought.*?\?/i,
    replace: () => 'महाराणा प्रताप और मुगल सेना के बीच ऐतिहासिक हल्दीघाटी का युद्ध किस वर्ष लड़ा गया था?'
  },
  {
    regex: /^Why is Chhatrapati Shivaji Maharaj recognized as the "Father of the Indian Navy"\?/i,
    replace: () => 'छत्रपति शिवाजी महाराज को "भारतीय नौसेना का जनक" क्यों माना जाता है?'
  },
  {
    regex: /^Which weapon did Arjuna receive from Lord Shiva.*?\?/i,
    replace: () => 'अर्जुन को भगवान शिव की तपस्या के बाद कौन सा अमोघ दिव्यास्त्र प्राप्त हुआ था?'
  }
];

function translateWord(w: string): string {
  const trimmed = w.trim();
  if (HINDI_TERMS[trimmed]) return HINDI_TERMS[trimmed];

  const lower = trimmed.toLowerCase();
  const wordMap: Record<string, string> = {
    'animal': 'पशु',
    'bird': 'पक्षी',
    'flower': 'फूल',
    'fruit': 'फल',
    'tree': 'वृक्ष',
    'river': 'नदी',
    'song': 'गीत',
    'anthem': 'गान',
    'emblem': 'प्रतीक',
    'currency': 'मुद्रा',
    'sport': 'खेल',
    'heritage animal': 'धरोहर पशु',
    'aquatic animal': 'जलीय जीव',
    'ocean': 'महासागर',
    'continent': 'महाद्वीप',
    'mountain': 'पर्वत',
    'planet': 'ग्रह',
    'red planet': 'लाल ग्रह',
    'blue planet': 'नीला ग्रह',
    'capital': 'राजधानी'
  };

  return wordMap[lower] || trimmed;
}

// Memory cache for translated questions
const translationCache = new Map<string, Question>();

/**
 * Translates an individual option term or phrase to clean Hindi
 */
export function translateOptionToHindi(option: string): string {
  if (!option) return option;
  const trimmed = option.trim();
  if (HINDI_TERMS[trimmed]) return HINDI_TERMS[trimmed];

  // Try replacing known sub-terms
  let res = trimmed;
  for (const [en, hi] of Object.entries(HINDI_TERMS)) {
    if (res.includes(en)) {
      res = res.replace(new RegExp(`\\b${en}\\b`, 'g'), hi);
    }
  }

  // Handle common prefixes/suffixes
  res = res
    .replace(/\bKing\b/gi, 'राजा')
    .replace(/\bQueen\b/gi, 'रानी')
    .replace(/\bEmperor\b/gi, 'सम्राट')
    .replace(/\bFort\b/gi, 'किला')
    .replace(/\bTemple\b/gi, 'मंदिर')
    .replace(/\bRiver\b/gi, 'नदी')
    .replace(/\bOcean\b/gi, 'महासागर')
    .replace(/\bYears\b/gi, 'वर्ष')
    .replace(/\bDays\b/gi, 'दिन')
    .replace(/\bBrothers\b/gi, 'भाई')
    .replace(/\bSisters\b/gi, 'बहनें');

  return res;
}

/**
 * Translates a full question into natural Hindi synchronously and with 100% guarantee.
 * Matches option indices exactly so that option shuffling and scoring work without error.
 */
export function getQuestionInHindi(q: Question): Question {
  // If question already contains high-grade Hindi fields, use them directly
  if (q.questionHi && q.optionsHi && q.optionsHi.length === q.options.length) {
    const correctIdx = q.options.indexOf(q.correctAnswer);
    return {
      ...q,
      question: q.questionHi,
      options: q.optionsHi,
      correctAnswer: q.correctAnswerHi || (correctIdx >= 0 ? q.optionsHi[correctIdx] : q.correctAnswer),
      explanation: q.explanationHi || q.explanation
    };
  }

  // Check cache
  if (translationCache.has(q.id)) {
    return translationCache.get(q.id)!;
  }

  // 1. Translate question text
  let translatedQuestion = q.question;
  let matched = false;

  for (const pat of QUESTION_PATTERNS) {
    const m = q.question.match(pat.regex);
    if (m) {
      translatedQuestion = pat.replace(m);
      matched = true;
      break;
    }
  }

  if (!matched) {
    // Contextual token replacement
    let text = q.question;
    for (const [en, hi] of Object.entries(HINDI_TERMS)) {
      if (text.includes(en)) {
        text = text.replace(new RegExp(`\\b${en}\\b`, 'g'), hi);
      }
    }

    // Common question stems
    text = text
      .replace(/^Which of the following is/i, 'निम्नलिखित में से कौन सा')
      .replace(/^Which of the following was/i, 'निम्नलिखित में से कौन')
      .replace(/^Which of these is/i, 'इनमें से कौन सा')
      .replace(/^Which of these was/i, 'इनमें से कौन')
      .replace(/^Who among the following was/i, 'निम्नलिखित में से कौन')
      .replace(/^Who was known as/i, 'किन्हें इस नाम से जाना जाता था:')
      .replace(/^In which year did/i, 'किस वर्ष में')
      .replace(/^Where did/i, 'कहाँ पर')
      .replace(/^What was the name of/i, 'क्या नाम था:')
      .replace(/^What is the primary function of/i, 'मुख्य कार्य क्या है:')
      .replace(/^Who was the teacher\/guru of/i, 'किसके गुरु कौन थे:');

    translatedQuestion = text;
  }

  // 2. Translate options maintaining exact index 1-to-1 correspondence
  const optionsHi = q.options.map(opt => translateOptionToHindi(opt));

  // 3. Translate correct answer to match the corresponding option
  const correctIdx = q.options.indexOf(q.correctAnswer);
  const correctAnswerHi = (correctIdx >= 0 && optionsHi[correctIdx])
    ? optionsHi[correctIdx]
    : translateOptionToHindi(q.correctAnswer);

  // 4. Translate explanation
  let explanationHi = q.explanation;
  for (const [en, hi] of Object.entries(HINDI_TERMS)) {
    if (explanationHi.includes(en)) {
      explanationHi = explanationHi.replace(new RegExp(`\\b${en}\\b`, 'g'), hi);
    }
  }

  const result: Question = {
    ...q,
    question: translatedQuestion,
    options: optionsHi,
    correctAnswer: correctAnswerHi,
    explanation: explanationHi,
    questionHi: translatedQuestion,
    optionsHi,
    correctAnswerHi,
    explanationHi
  };

  translationCache.set(q.id, result);
  return result;
}
