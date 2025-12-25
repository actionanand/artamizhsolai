export interface AboutSection {
  heading: string;
  content: string;
}

export interface AboutLanguageContent {
  sections: AboutSection[];
}

export const aboutContent = {
  tamil: {
    sections: [
      {
        heading: 'வரவேற்பு',
        content: 'AR Tamizh Solai -க்கு வரவேற்கிறோம். இந்த வெளியீடு தமிழ் மொழியைப் பெருமைப்படுத்தவும், தமிழ் இலக்கியம், ஐதீகம் மற்றும் கலாச்சாரத்தை நிரந்தரமாக்கவும் ஒரு சிறிய முயற்சி.'
      },
      {
        heading: 'பற்றிய குறிப்பு',
        content: 'நான் ஒரு தமிழ் மொழி ஆர்வர் மற்றும் இலக்கியக் கல்விதாரர். தமிழ் மொழிக்கும் அதன் சாகித்யத்திற்கும் எனக்கு ஆழ்ந்த ஆர்வம் உள்ளது. சிலப்பதிகாரம், மணிமேகலை, திருக்குறள் மற்றும் பிற பாரம்பரிய தமிழ் நூல்கள் என் மனத்தைக் கவர்ந்துவிட்டன.'
      },
      {
        heading: 'தமிழ் இலக்கியம் மற்றும் சங்கப் பாடல்கள்',
        content: 'தமிழ் இலக்கியத்தின் அழுத்தமான வரலாற்றை ஆராய்ந்து பார்ப்பது என் வாழ்க்கையின் ஒரு பெரிய பகுதி. சங்கப் பாடல்கள், ஐங்குறுநூறு, பத்துப்பாட்டு, சிலப்பதிகாரம் மற்றும் பிற தமிழ் நூல்களின் ஆழ்ந்த பொருளை புரிந்து கொள்ள பிரயாசப்படுகிறேன்.'
      },
      {
        heading: 'மொழி கற்பவர்',
        content: 'தமிழ் மொழி கற்பவராக, நான் வேதங்கள் அறிஞர்கள் மற்றும் பழங்கதைகள் அறிஞர்களாக நாம் என்ன பெறுகிறோம் என்பதை அறிய விரும்புகிறேன். மொழிகள் கலாச்சாரத்தின் கொங்கணத்தையும், ஒரு மக்களின் மன மற்றும் ஆத்மாவையும் பிரதிபலிக்கின்றன என்பதை நான் நம்புகிறேன்.'
      },
      {
        heading: 'பிற விஷயங்கள்',
        content: 'இந்த வலைப்பக்கத்தில் நீங்கள் தமிழ் இலக்கியம், சாகித்யம், இலக்கணம் மற்றும் பிற தமிழ்-சார்ந்த கண்டுபிடிப்புகள் மற்றும் சிந்தனைகளைக் கண்டுபிடிக்க முடியும். உங்கள் கருத்துக்கள், வாக்கியங்கள் மற்றும் ஆலோசனைகளை எப்போதும் வரவேற்கிறோம்!'
      },
      {
        heading: 'தொடர்புக்கு',
        content: 'கேள்விகள், பரामர்ச்சைகள், வெறுமனே அரட்டைக்கு அல்லது ஏதாவது நல்ல தமிழ் சொற்களைப் பகிர்ந்து கொள்ள விரும்பினால், தயவுசெய்து கீழே உள்ள தொடர்புக்கு படிவத்தை அல்லது சமூக ஊடக தொடர்புகளைப் பயன்படுத்தி எனக்கு தொடர்புகொள்ளுங்கள்!'
      }
    ]
  } as AboutLanguageContent,

  english: {
    sections: [
      {
        heading: 'Welcome',
        content: 'Welcome to AR Tamizh Solai! This publication is a humble effort to celebrate the Tamil language and preserve Tamil literature, mythology, and culture for generations to come.'
      },
      {
        heading: 'About Me',
        content: 'I\'m a passionate lover of the Tamil language and literature enthusiast. I have a keen interest in Tamil literature, epics, and folklore. The timeless classics like Silappatikaram, Manimekalai, Thirukkural, and other ancient Tamil works have captured my heart and imagination.'
      },
      {
        heading: 'Tamil Literature and Sangam Epics',
        content: 'Exploring the rich tapestry of Tamil literature and Sangam poetry is a significant part of my journey. I delve into Sangam poems, Aingerunuru, Pathupattu, Silappatikaram, and other classical Tamil texts, seeking to understand their profound meanings and cultural significance.'
      },
      {
        heading: 'Language Enthusiast',
        content: 'As a Tamil language enthusiast, I\'m fascinated by what the ancient scholars and mythologists have left us. I believe languages are the heartbeat of culture, and they reflect the mind and soul of a people. Understanding Tamil is, for me, understanding the essence of Dravidian civilization.'
      },
      {
        heading: 'Other Interests',
        content: 'On this blog, you\'ll find articles on Tamil literature, epics, grammar, linguistics, and other Tamil-related explorations and thoughts. Your feedback, suggestions, and ideas are always welcome! Whether you want to discuss a literary work, suggest a topic, or share a beautiful Tamil phrase, I\'d love to hear from you.'
      },
      {
        heading: 'Get in Touch',
        content: 'Have questions about Tamil literature? Want to discuss an epic or verse? Just want to chat or share a beautiful Tamil word? Feel free to reach out via the contact form in the footer or connect with me on social media. I look forward to connecting with fellow Tamil language lovers!'
      }
    ]
  } as AboutLanguageContent
};
