import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://root.mom',
    avatar: {
        src: avatar,
        alt: '朱佳乐'
    },
    title: '朱佳乐',
    subtitle: '计算机科学学生 · AI Agent 开发者',
    description: '记录人工智能、Agent 开发、项目实践与技术成长。',
    image: {
        src: '/dante-preview.jpg',
        alt: '朱佳乐个人网站'
    },
    headerNavLinks: [
        { text: '首页', href: '/' },
        { text: '项目', href: '/projects' },
        { text: '博客', href: '/blog' },
        { text: '标签', href: '/tags' }
    ],
    footerNavLinks: [
        { text: '关于我', href: '/about' },
        { text: '联系我', href: '/contact' },
        { text: '服务条款', href: '/terms' },
        { text: 'GitHub', href: 'https://github.com/FelixZoe' }
    ],
    socialLinks: [
        { text: 'GitHub', href: 'https://github.com/FelixZoe' }
    ],
    hero: {
        title: '你好，欢迎来到我的个人空间！',
        text: '我是 **朱佳乐**，一名计算机科学专业学生，专注于 AI Agent、Python、FastAPI 和智能应用开发。\n\n这里记录我的技术学习、项目实践以及对未来技术的探索。',
        image: {
            src: hero,
            alt: '个人头像'
        },
        actions: [
            {
                text: '联系我',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: '订阅博客更新',
        text: '获取最新文章和项目动态。',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
