export interface SocialIcon {
  name: string;
  url: string;
  icon: string;
  enabled: boolean;
}

export const socialIcons: SocialIcon[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/actionanand',
    icon: 'twitter',
    enabled: true
  },
  {
    name: 'GitHub',
    url: 'https://github.com/actionanand',
    icon: 'github',
    enabled: false
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/anand-ns',
    icon: 'linkedin',
    enabled: false
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/actionanand',
    icon: 'instagram',
    enabled: true
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/actionanand',
    icon: 'facebook',
    enabled: true
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@actionanand13',
    icon: 'youtube',
    enabled: true
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@artamizhsolai',
    icon: 'tiktok',
    enabled: false
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/911234567890',
    icon: 'whatsapp',
    enabled: false
  },
  {
    name: 'WhatsApp Business',
    url: 'https://wa.me/919876543210',
    icon: 'whatsapp-business',
    enabled: false
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/6noSP4wHXCQZLhI3TqgedD',
    icon: 'spotify',
    enabled: true
  },
  {
    name: 'Threads',
    url: 'https://threads.net/@actionanand',
    icon: 'threads',
    enabled: true
  },
  {
    name: 'RSS',
    url: '/rss.xml',
    icon: 'rss',
    enabled: false
  },
  {
    name: 'Snapchat',
    url: 'https://snapchat.com/add/actionanand',
    icon: 'snapchat',
    enabled: false
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/your-username',
    icon: 'pinterest',
    enabled: false
  },
  {
    name: 'Website',
    url: 'https://your-website.com',
    icon: 'website',
    enabled: false
  },
  {
    name: 'Telegram',
    url: 'https://t.me/your-username',
    icon: 'telegram',
    enabled: false
  },
  {
    name: 'Email',
    url: 'mailto:your-email@example.com',
    icon: 'email',
    enabled: false
  },
  {
    name: 'WeChat',
    url: 'weixin://dl/chat?your-id',
    icon: 'wechat',
    enabled: false
  },
  {
    name: 'Reddit',
    url: 'https://reddit.com/user/your-username',
    icon: 'reddit',
    enabled: false
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/your-invite-code',
    icon: 'discord',
    enabled: false
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/10907720/anand-raja',
    icon: 'stackoverflow',
    enabled: true
  }
];
