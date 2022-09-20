import Image from "next/image";
import aboutImage from "../static/Chalton Prins Profile.jpeg"
import Link from "next/link";
import Layout from "../components/Layout";
import Script from 'next/script'

export default () => (
    <div>
    
<Script async src="https://www.googletagmanager.com/gtag/js?id=UA-241661607-1"/>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-241661607-1');`}
</Script>

   
    <Layout title="About">
        <Link href="/">
            <a>Go to Home</a>
        </Link>
        <h2>Bio</h2>
        <p> Having worked in the Tech industry for the past going on 6 years, I have grown a real passion for technology.
                Although I have worked on the Business Development spectrum, I have been exposed to the programming side of the software
                technologies I was working with. After an intial dive in and getting my hands dirty with a few basics I was instantly hooked
                with programming and needless to say the bug bit hard. 

                I am now fully vested in my journey to becoming a Full Stack Developer focusing on MERN stack development.</p>

        <Image src={ aboutImage } width="300" height="300"/>
        

    </Layout> </div>
);