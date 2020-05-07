
import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from '../components/footer'


import React, { Component } from 'react';
import ReactDOM from "react-dom";
 
class Registry extends Component {
 
  componentDidMount () {
    
    const script = document.createElement("script");
 
    script.src = "https://www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=cOJDtpMnQSju5NQNRNtIXg2&v=2";
    script.async = true;
    script.id = 'script_myregistry_giftlist_iframe'
 
    this.div.appendChild(script);
  }
  render() {
    
    const iframeURL = "www.myregistry.com/ExternalApps/EmbededVistorView/v2/Visitors/GiftList.aspx?registryId=2309641&pageSize=10000"
    const iframeID = 'script_myregistry_giftlist_iframe'
    const divStyle = {
        top: '-81px',
        position: 'relative'
    }
    return (
        <Layout>
            <SEO title="Registry" />
            <div className="Registry" style={divStyle} ref={el => (this.div = el)}><div></div></div>
            <Footer />
        </Layout>

    );
  }


//   render() {
//     // `dangerouslySetInnerHTML` is safe,
//     // Naming is meant to make sure you trust the source,
//     // with &iframe=1&omit_script=1 - the source will be always be Iframely 
//     const url = "https://www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=cOJDtpMnQSju5NQNRNtIXg2&v=2";
//     return <div dangerouslySetInnerHTML={__html: this.url} />
//   }
 
//   render() {
  
 
    
//     const riddleUrl = "https://www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=cOJDtpMnQSju5NQNRNtIXg2&v=2";
 
//     return (
//       <div className="Registry">
//         {/* <div className="riddle_target" data-rid-id={riddleID} data-fg="#252525" data-bg="#EDEDED" style={divStyle} data-auto-scroll="true"> */}
//           <iframe title="embed-test" style={iframeStyle} src={riddleUrl}></iframe>
//         {/* </div> */}
//       </div>
//     );
//   }
}
 
export default Registry;


// const IndexPage = ({data}) => {

// return (
//   <Layout>
//     <SEO title="Home" />

//     <section className="hero">
//       <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
//     </section>
//     <div id="root">
        
//     </div>
   

      

//     <br><script id='script_myregistry_giftlist_iframe' type='text/javascript' src='//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=cOJDtpMnQSju5NQNRNtIXg2&v=2'></script>
//     <Footer />
//   </Layout>
//   )
// }

