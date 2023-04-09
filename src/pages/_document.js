import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Html>
                    <Head>
                        <meta charSet="utf-8" />
                        <link rel="icon" href="/favicon.png" />
                        <meta name="theme-color" content="#000000" />
                        <meta name="description" content="Portfolio Website" />
                        <link rel="apple-touch-icon" href="/favicon.png" />
                        <link rel="manifest" href="/manifest.json" />

                        <meta
                            name="description"
                            content="Himanshu Gunwant : Software Enigeer @ WebToNative"
                        />
                        <meta
                            property="og:image"
                            content="Developer Portfolio"
                        />
                        <meta
                            property="og:site_name"
                            content="Developer Portfolio"
                        />
                        <meta
                            property="og:title"
                            content="Developer Portfolio"
                        />
                        <meta
                            property="og:url"
                            content="https://profile-himanshu.vercel.app/"
                        />
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:description"
                            content="Himanshu Gunwant : Software Enigeer @ WebToNative"
                        />

                        <meta itemProp="name" content="Developer Portfolio" />
                        <meta
                            itemProp="url"
                            content="https://profile-himanshu.vercel.app/"
                        />
                        <meta
                            itemProp="description"
                            content="Himanshu Gunwant : Software Enigeer @ WebToNative"
                        />
                        <meta itemProp="thumbnailUrl" content="" />

                        <meta
                            name="twitter:url"
                            content="https://profile-himanshu.vercel.app/"
                        />
                        <meta
                            name="twitter:title"
                            content="Developer Portfolio"
                        />
                        <meta
                            name="twitter:description"
                            content="Himanshu Gunwant : Software Enigeer @ WebToNative"
                        />
                        <meta name="twitter:card" content="summary" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
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
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    }
}
