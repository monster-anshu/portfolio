import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

const openGraphImage = '/images/profile.webp'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.png" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Himanshu Gunwant: Software Engineer at Acefone" />
                    <link rel="apple-touch-icon" href="/favicon.png" />
                    <link rel="manifest" href="/manifest.json" />

                    {/* Open Graph Meta Tags */}
                    <meta property="og:image" content={openGraphImage} />
                    <meta property="og:site_name" content="Himanshu Gunwant's Portfolio" />
                    <meta property="og:title" content="Himanshu Gunwant: Software Engineer" />
                    <meta property="og:url" content="https://himanshu-gunwant.com/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Himanshu Gunwant: Software Engineer at Acefone. Check out my portfolio and projects." />

                    {/* Schema.org Meta Tags */}
                    <meta itemProp="name" content="Himanshu Gunwant's Portfolio" />
                    <meta itemProp="url" content="https://himanshu-gunwant.com/" />
                    <meta itemProp="description" content="Himanshu Gunwant: Software Engineer at Acefone." />
                    <meta itemProp="image" content={openGraphImage} />

                    {/* Twitter Card Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:url" content="https://himanshu-gunwant.com/" />
                    <meta name="twitter:title" content="Himanshu Gunwant: Software Engineer" />
                    <meta name="twitter:description" content="Himanshu Gunwant: Software Engineer at Acefone. Check out my portfolio and projects." />
                    <meta name="twitter:image" content={openGraphImage} />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}
