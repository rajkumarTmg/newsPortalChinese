import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { LOCALES, DEFAULT_LOCALE } from '../../constants';

const DEFAULT_TITLE = 'default SEO title';
const DEFAULT_DESCRIPTION = 'default SEO description';

const Helmet = ({ title, description, keywords, preview }) => {
    const { locale, asPath } = useRouter();
    const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

    const langLinks = useMemo(() => LOCALES.map(locale => {
        if (locale === DEFAULT_LOCALE) {
            return ({ lang: locale, link: `${DOMAIN}${asPath}` });
        }
        return ({ lang: locale, link: `${DOMAIN}/${locale}${asPath}` });
    }), [asPath]);

    return <Head>
        {/* <html lang={locale} /> */}
        <title>{title || DEFAULT_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={description || DEFAULT_DESCRIPTION} />
        {keywords && <meta name='keywords' content={keywords} />}
        <link rel='canonical' href={`${DOMAIN}${prefix}${asPath}`} />
        <meta property="og:url" content={`${DOMAIN}${prefix}${asPath}`}/>
        <meta property="og:type" content="website"/>
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {
            preview &&
            <meta property='og:image' content={`${DOMAIN}${preview}`} />
        }
        <meta property="twitter:url" content={`${DOMAIN}${prefix}${asPath}`}/>
        <meta name="twitter:card" content='summary_large_image' />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        {
            preview &&
            <meta property='twitter:image' content={`${DOMAIN}${preview}`} />
        }
        {langLinks.map((langLink, i) => <link key={i} rel='alternate' hrefLang={langLink.lang} href={langLink.link} />)}
    </Head>;
};

Helmet.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    preview: PropTypes.string
};

export default Helmet;
