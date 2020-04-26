import React from "react";
import Layout from "../components/master-page";
import Nav from "../components/nav";
import Head from "next/head";



export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (<div>
            <Head>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            </Head>
            <div>
                <Nav className="nav-cont"/>
            </div>

            <div className="container">

                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/xjvenbdk"
                    method="POST"
                >
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." required="required"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="lname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="lname" name="lastname" placeholder="example@example.com" required="required"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." required="required"/>
                        </div>
                    </div>
                    {status === "SUCCESS" ? <div className="w3-panel w3-green">
                        <h3>Teşekkürler!</h3>
                        <p>En kısa sürede yazmış olduğunuz eposta adresine dönüş yapacağım!</p>
                    </div> : <div className="row">
                            <input type="submit" value="SubmitFF" />
                        </div>}
                    {status === "ERROR" && <div className="w3-panel w3-red">
                        <h3>Hata!</h3>
                        <p>Lütfen tüm alanları istenilen şekilde doldurun!</p>
                    </div>}
                </form>

            </div>
            <style jsx>{`
            .ana{
                background-color: red;
            }

            #subject{
               height:200px
            }
            * {
              box-sizing: border-box;
            }
            
            input[type=text], select, textarea {
              width: 100%;
              padding: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              resize: vertical;
            }
            
            label {
              padding: 12px 12px 12px 0;
              display: inline-block;
            }
            
            input[type=submit] {
              background-color: #4CAF50;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              float: right;
            }
            
            input[type=submit]:hover {
              background-color: #45a049;
            }
            
            .container {
              border-radius: 5px;
              background-color: #f2f2f2;
              padding: 20px;
              max-width: 700px;
              margin: 0 auto;
            }
            
            .col-25 {
              float: left;
              width: 25%;
              margin-top: 6px;
            }
            
            .col-75 {
              float: left;
              width: 75%;
              margin-top: 6px;
            }
            
            .row:after {
              content: "";
              display: table;
              clear: both;
            }
            
            @media screen and (max-width: 600px) {
              .col-25, .col-75, input[type=submit] {
                width: 100%;
                margin-top: 0;
              }
            }
            `}</style>
        </div>

        );
    }



    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}




