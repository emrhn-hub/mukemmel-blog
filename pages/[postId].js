import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/master-page";
import Nav from "../components/nav";

const BlogPost = ({ post }) => (

  <Layout>
    <div style={{ 'max-width': 800 + 'px', 'margin': 'auto' }}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <body className="w3-light-grey">
        <Nav/>
        <div>
          <div className="w3-container w3-white w3-margin w3-padding-large">
            <div>
              <h5><span className="date">{post.date}</span></h5>
            </div>

            <div className="w3-justify">
              <img src={post.img} className="blog-img w3-padding-16" style={{ 'width': 100 + '%' }} />
              <h3 className="title">{post.title}</h3>
              <p>&nbsp;&nbsp;&nbsp;{post.details}</p>
              <div className="w3-row w3-margin-bottom" style={{ 'display': 'none' }} id="demo1">


              </div>
            </div>
          </div>
        </div>
        <hr/>

      </body>

      <style jsx>{`
      .blog-img{
        margin-bottom: 10px;
        max-height: 500px;
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

  </Layout >
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
