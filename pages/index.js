import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav"
import Layout from "../components/master-page";
import MyForm from "../components/cont"

const Home = ({ posts }) => (
  <Layout>
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <body className="w3-light-grey">
        <div className="w3-bar w3-black w3-hide-small">
          <Link href="../contacts.html">
          <a>Contacts</a>
          </Link>
        </div>

        <div className="w3-content" style={{ 'max-width': 1600 + 'px' }}>

          <header className="w3-container w3-center w3-padding-48 w3-white">
            <h1 className="w3-xxxlarge"><b>Emirhan Akpınar</b></h1>
            <h6>Welcome to the blog of <span className="w3-tag">Emirhan's world</span></h6>
          </header>

          <header className="w3-display-container w3-wide" id="home">
            <img className="w3-image"
              src="https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="" />
            <div className="w3-display-left w3-padding-large">
              <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>LIFE BLOG</b></h1>
              <h5 className="w3-text-white">there is a long way...</h5>


            </div>
          </header>
          <div className="w3-row w3-padding w3-border">

            <div className="w3-col l8 s15">

              {posts.map(post => (
                //  < !--Blog entry-- >
                <div>
                <div>
                    <div className="w3-container w3-white w3-margin w3-padding-large">
                      <div className="w3-center">
                        <h3><ReactMarkdown source={post.title}/></h3>
                        <h5><span className="w3-opacity">{post.date}</span></h5>
                      </div>

                      <div className="w3-justify">
                        <img src={post.img} className="w3-padding-16" style={{ 'width': 100 + '%' }} />
                        <p>&nbsp;&nbsp;&nbsp;{post.details}</p>
                        <p className="w3-clear"></p>
                        <div className="w3-row w3-margin-bottom" style={{ 'display': 'none' }} id="demo1">


                        </div>
                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">{post.tag}</span>
                      </div>
                      <div>
                        <Link href="">
                        <a className="read">Devamını Oku...</a>
                        </Link>
                      </div>
                    </div>
                    <hr />
                </div>
              </div>
              ))}
            </div>

            <div className="w3-col l4">
              <div className="w3-white w3-margin">
                <img src="https://images.pexels.com/photos/279467/pexels-photo-279467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  style={{ 'width': 100 + '%', 'max-height': 250 + 'px' }} className="w3-grayscale" />
                <div className="w3-container w3-black">
                  <h4>Ben Emirhan</h4>
                  <p>Lise 3. sınıfa gitmekteyim ve ders çalışmaktan geriye kalan çoğu zamanımı yazılım ile geçirmekteyim.
                    Hayatımdan bazı kesitlerin bulunduğu bloğa hoşgeldin.
                  </p>
                </div>

              </div>


              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">Future</span> <span
                      className="w3-tag w3-light-grey w3-small w3-margin-bottom">San Francisco</span>

                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
         <MyForm/>       
        
      </body>
      <style jsx>{`
      .read{
        float:right;
        margin-top: -40px;
        color: #95a5a6;
        font-style: italic;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    </div>
  </Layout>


);
 
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://emrhnakpnr-nebiyf1wq.now.sh/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};
export default Home;
