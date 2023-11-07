import FacebookSvg from '../../../../public/images/svg/facebook.svg';
import TwitterSvg from '../../../../public/images/svg/twitter.svg';
import YoutubeSvg from '../../../../public/images/svg/youtube.svg';
// import RSSSvg from '../../../../public/images/svg/rss.svg';

export const SOCIALS = [
    {
        link: 'https://www.facebook.com/newsancaifans/',
        Icon: FacebookSvg
    },
    {
        link: 'https://twitter.com/FromMiddleLand',
        Icon: TwitterSvg
    },
    {
        link: 'https://www.youtube.com/@user-es2kt2qy3c',
        Icon: YoutubeSvg
    }
    // { link: '/rss.xml', Icon: RSSSvg, feed: true }
];

export const FOOTER_NAVIGATION = [
    {
        link: '',
        action: 'submit',
        translationKey: 'footer.navigation1'
    },
    {
        link: '#',
        translationKey: 'footer.navigation2'
    },
    {
        link: '#',
        translationKey: 'footer.navigation3'
    },
    {
        link: '',
        action: 'signUp',
        translationKey: 'footer.navigation4'
    },
    {
        link: 'https://jointalents.com/cultural-magazines-cultural',
        translationKey: 'footer.navigation5'
    },
    {
        link: '',
        action: 'subscribe',
        translationKey: 'footer.navigation6'
    },
    {
        link: 'https://jointalents.com/good-books-books-1',
        translationKey: 'footer.navigation7'
    }
];
