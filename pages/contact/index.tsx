import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Contact.module.scss";
import * as React from "react";

const Contact: NextPage = () => {
    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [message,setMessage] = React.useState("")
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            message: message
        }
        const url = "http://127.0.0.1:8000/api/v2/contact/";
        try {
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(formData) // body data type must match "Content-Type" header
              });
              const responseJson = await response.json(); // parses JSON response into native JavaScript objects
        } catch (error) {
            
        }
        
        
    }
    
    return (
        <>
            <Head>
                <title>Contact - Fernando Eiras</title>
                <meta name="description" content="My first next js page" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <>
                <section className="container">
                    <h1>Contact Page</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail address</label>
                            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="message">message</label>
                            <input type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </>
        </>
    );
};

export default Contact;
