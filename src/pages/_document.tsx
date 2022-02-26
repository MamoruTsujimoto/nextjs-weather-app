import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#'>
          <meta name='robots' content='noindex' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' href='/android-chrome-192x192.png' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://nextjs-weather-app-chi.vercel.app/' />
          <meta property='og:title' content='NextJS Weather APP' />
          <meta property='og:description' content='Experimental site using Nextjs and OpenWeather API' />
          <meta property='og:image' content='https://nextjs-weather-app-chi.vercel.app/nextjs-weather-app.jpg' />
          <meta name='twitter:card' content='https://nextjs-weather-app-chi.vercel.app/nextjs-weather-app.jpg' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='theme-color' content='#718096' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
