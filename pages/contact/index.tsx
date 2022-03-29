import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Contact.module.scss";
import * as React from "react";

const Contact: NextPage = () => {
    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [message,setMessage] = React.useState("")
    const [status,setStatus] = React.useState({
        state: "idle",
        errors: [],
    })
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        setStatus({...status,state:"loading"})
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
              if(!response.ok){
                  throw new Error("Sorry error..")
              }
              const responseJson = await response.json(); // parses JSON response into native JavaScript objects
              setMessage(""); 
              setEmail("");
              setName("");
              setStatus({...status,state:"success"})
              setTimeout(()=>{
                setStatus({...status,state:"idle"})
              },2000)
            } catch (error) {
                setStatus({...status,state:"error"})
            console.error(error);
        }
        
        
    }
    let form = null
    if(status.state === "idle"){
        form = (
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
        ) 
    }else if(status.state === "loading")
    {
        form = <p>Loading</p>
    }else if(status.state === "success"){
       form = <p>Your message was sent!</p>
    }else{
        form = (
            <div>
                <p>Message fail, plaese try again.</p>
                <button onClick={()=>{
                    setMessage(""); 
                    setEmail("");
                    setName("");
                    setStatus({...status,state: "idle"})
                    }}>Try again</button>
            </div>            
        )
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
                    {form}
                    
                </section>
            </>
        </>
    );
};

export default Contact;
