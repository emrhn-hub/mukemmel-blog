import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/master-page";

const BlogPost = ({ post }) => (

  <Layout>
    <div style={{ 'max-width': 900 + 'px', 'margin': 'auto' }}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <body className="w3-light-grey">
        <div>

          <div className="w3-container w3-white w3-margin w3-padding-large">
            <div className="w3-center">
              <h3>{post.title}</h3>
              <h5><span className="w3-opacity">{post.date}</span></h5>
            </div>

            <div className="w3-justify">
              <img src={post.img} className="w3-padding-16" style={{ 'width': 100 + '%' }} />
              <p>&nbsp;&nbsp;&nbsp;{post.details}</p>
              <div className="w3-row w3-margin-bottom" style={{ 'display': 'none' }} id="demo1">


              </div>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">{post.tag}</span>
            </div>
          </div>
        </div>

      </body>

      <style jsx>{`
      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
    </div>

  </Layout >
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`https://emrhnakpnr.now.sh/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
