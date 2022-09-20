import Link from "next/link";
import Layout from '../components/Layout';
import Script from 'next/script'
function gtag(){dataLayer.push(arguments);}

const Index = () => (
    <div>
   <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-241661607-1"/>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-241661607-1');`}
</Script>

    <Layout title="Home">
        <Link href ='/about'>
            <a>Go to about</a>
        </Link>
        <p>Welcome to home page</p>
    
    </Layout> </div>
)   

export default Index;