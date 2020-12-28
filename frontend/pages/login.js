// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../_pages/login'

export default function Page({ _ns, _lang, ...p }){
  return (
    <I18nProvider
      lang={_lang}
      namespaces={_ns}  
      
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })





export const getStaticProps = async ctx => {
    const _lang = ctx.locale || ctx.router?.locale || 'en'
  const ns0 = await import(`../locales/${_lang}/common`).then(m => m.default)
const ns1 = await import(`../locales/${_lang}/login`).then(m => m.default)
  const _ns = { 'common': ns0, 'login': ns1 }
  
    let res = {}
    if(typeof res.then === 'function') res = await res
  
    return { 
      ...res, 
      props: {
        ...(res.props || {}),
        _ns,
        _lang,
      }
    }
  }



