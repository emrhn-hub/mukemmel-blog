import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav"
import Layout from "../components/master-page";
import MyForm from "./cont"

const Home = ({ posts }) => (
  <Layout>
    <div>

      <Head>
        <title>Home</title>
      </Head>

      <div className="w3-light-grey">
        {/* <div className="w3-bar w3-black w3-hide-small">
  </div> */}

        <div className="container">

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
        </div>



        <div className="w3-row w3-border">

          <Nav />

          <div className="blog">
            {posts.map(post => (
              <Link href={post.slug}>
                <a>
                  <div>
                    <div className="blog-container w3-margin">
                      <div>
                        <h5><span className="date">{post.date}</span></h5>
                      </div>

                      <div className="w3-justify">
                        <img src={post.img} className="blog-img w3-padding-14" style={{ 'width': 100 + '%' }} />
                        <h3 className="title"><ReactMarkdown source={post.title} /></h3>
                        <p>{post.desc}...</p>
                        <p className="w3-clear"></p>
                        <div className="w3-row w3-margin-bottom" style={{ 'display': 'none' }} id="demo1">

                        </div>
                      </div>

                    </div>
                    <hr />
                  </div>
                </a>
              </Link>
            ))}

          </div>
        </div>
      </div>

      <style jsx>{`
      .blog-img{
        margin-bottom: 10px;
        max-height: 350px;
        height: 100%;
      }
      .title{
        font-weight: 500;
        font-size: 30px;
      }
      .date{
        margin-top: -1em;
        float: right;
        font-family: Exo;
        opacity: 0.5;
        font-size: .85em;
        margin-bottom: 1em;
      }
      .blog-container{
        border-radius: 8px;
        background-color:White;
        padding: 15px;
      }
      
      .container{
        width:100%;
      }
      .blog{
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
      }
      .read{
        float:right;
        margin-top: -40px;
        color: #95a5a6;
        font-style: italic;
      }
      a{
        text-decoration: none;
      }
  
`}</style>

    </div>
  </Layout>
  
);





Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
