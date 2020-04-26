import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

function Nav() {
  return <nav>
    <div className="container">
      <div className="topnav">
        <Link href="/index"><a className="active">Home</a></Link>
        <Link href="/cont"><a>Contact</a></Link>
        <Link href="#"><a>About</a></Link>
        <div className="search-container">
          <form action="/action_page.php">
            <input className="search" type="text" placeholder="Search.." name="search" />
            <i className="search-btn fa fa-search"></i>
          </form>
        </div>
      </div>
      <hr />
    </div>

    <style jsx>{`
    .container{
      max-width: 900px;
      width: 100%;
      margin: 10px auto;
    }
    .search-btn{
      margin-left: -20px;
      margin-right: 20px;
    }
    .search{
      background-color:  #f2f3f4 ;
      border-radius: 8px;
    }
    * {box-sizing: border-box;}

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .topnav {
      border-radius: 4px;
      overflow: hidden;
      background-color: white;
    }
    
    .topnav a {
      float: left;
      display: block;
      color: black;
      text-align: center;
      padding: 13px 12px;
      text-decoration: none;
      font-size: 16px;
    }
    
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }
    
    .topnav a.active {
      background-color: #2196F3;
      color: white;
    }
    
    .topnav .search-container {
      float: right;
    }
    
    .topnav input[type=text] {
      padding: 6px;
      margin-top: 8px;
      font-size: 17px;
      border: none;
    }
    
    .topnav .search-container button {
      float: right;
      padding: 6px 10px;
      margin-top: 8px;
      margin-right: 16px;
      background: #ddd;
      font-size: 17px;
      border: none;
      cursor: pointer;
    }
    
    .topnav .search-container button:hover {
      background: #ccc;
    }
    
    @media screen and (max-width: 600px) {
      .topnav .search-container {
        float: none;
      }
      .topnav a, .topnav input[type=text], .topnav .search-container button {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
      }
      .topnav input[type=text] {
        border: 1px solid #ccc;  
      }
    }
    `}</style>
  </nav>
}

export default Nav
