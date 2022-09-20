import Image from 'next/image';
import hirePic from "../static/My-Weather-App.png"
import Layout from '../components/Layout';
import Script from 'next/script'
function gtag(){dataLayer.push(arguments);}

const HireMe = () => (
    <div>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-241661607-1"/>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-241661607-1');`}
</Script>

    <Layout title="Hire Me">
        <p>
            Email {" "}
            <a href="mailto:cgprins@gmail.com">cgprins@gmail.com</a>
        </p>
        <h2>Projects</h2>

        <h3>Weather App</h3>
            <p>
                This little project is one of my first demontrations of working with the Web storage API and JSON to
                store
                user input and transfer it from one webpage to another. It asks the user to enter some information about
                their city of choice and then displays the weather information on the page. 
            </p>
            <Image src={ hirePic } width="300" height="300"/>
            <p>
                Explore my code for the project on Github: <a href="https://github.com/CharlieDaBru1990/l2t14-my-weather-ap"
                    target="_blank">Code for my weather app</a>.
            </p>
            
    </Layout> </div>
)

export default HireMe;