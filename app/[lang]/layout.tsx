import {i18n} from '../../i18n-config';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import "./global.scss"

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({
        lang: locale,
    }));
}


export default function LocaleLayout({children, params}:{
    children: React.ReactNode,
    params: {
        lang: string
    }

}) {

 
  // Show a 404 error if the user requests an unknown locale

  return (
    <html lang={params.lang}>
        
      <body>
        <Header />
  
          {children}
        
        <Footer />
      </body>
    </html>
  );
}