// library imports
import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// app imports
import styles from "@/styles/pages/Contact.module.scss";
import { json } from "stream/consumers";

/*
 * Types
 */
type TContactErrors = {
    name?: string[];
    email?: string[];
    message?: string[];
};

type TContactResponse = {
    data: {
        name: string;
        email: string;
        message: string;
    } | null;
    errors: TContactErrors | null;
};

type TStatus = {
    state: "idle" | "loading" | "success" | "error";
    errors: TContactErrors | null;
};
type TTurn = "morning" | "afternoon" | "evening";

type TTime = "8:00" | "12:00" | "18:00";

/*
 * Contact Page component
 */
const Contact: NextPage = () => {
    // State for component here
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [turn, setTurn] = React.useState("morning");
    const [time, setTime] = React.useState({
        "8:00": false,
        "10:00": false,
        "18:00": false,
    });
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState<TStatus>({
        state: "idle",
        errors: null,
    });
    // handle sumbit function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ ...status, state: "loading" });
        const formData = {
            name: name,
            email: email,
            turn: turn,
            time: time,
            message: message,
        };
        // start api calls here
        const url = "http://127.0.0.1:8000/api/v2/contact/";
        try {
            console.log(formData);
            const response = await fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // body data type must match "Content-Type" header
            });
            if (!response.ok) {
                // Deal with non HTTP status 200 errors here
                throw new Error("Sorry error..");
            }
            const responseJson: TContactResponse = await response.json(); // parses JSON response into native JavaScript objects
            if (responseJson.errors) {
                // Deal with field errors here
                const statusCopy = JSON.parse(JSON.stringify(status));
                statusCopy.errors = responseJson.errors;
                statusCopy.state = "idle";
                setStatus(statusCopy);
            } else {
                // Deal with successful submission here
                setMessage("");
                setEmail("");
                setName("");
                setStatus({ errors: null, state: "success" });
                setTimeout(() => {
                    setStatus({ errors: null, state: "idle" });
                }, 2000);
            }
        } catch (error) {
            // catch and deal with errors from (!response.ok) or any other network errors
            setStatus({ ...status, state: "error" });
            console.error(error);
        }
    }; // end handleSubmit
    
    function handleTimeChange(e){
        const timeCopy = JSON.parse(JSON.stringify(time))
        timeCopy[e.target.value] = !timeCopy[e.target.value]
        setTime(timeCopy)
    }

    //Create and set the value of the form variable here bases on status.state
    let form = null;
    if (status.state === "idle") {
        console.log("status", status);
        form = (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => {
                            const statusCopy = JSON.parse(JSON.stringify(status));
                            if(statusCopy && statusCopy.errors?.hasOwnProperty(e.target.name)){
                                delete statusCopy.errors[e.target.name]
                                setStatus(statusCopy)
                            }
                        }}
                    />
                    {status?.errors?.name ? (
                        <ul>
                            {status.errors.name.map((error: string) => {
                                return <li key={error}>{error}</li>;
                            })}
                        </ul>
                    ) : null}
                </div>
                <div
                    
                     // onFocus={(e) => {
                        //     const statusCopy = JSON.parse(JSON.stringify(status));
                        //     if(statusCopy && statusCopy.errors.hasOwnProperty(e.target.name)){
                        //         delete statusCopy.errors[e.target.name]
                        //         setStatus(statusCopy)
                        //     }
                        // }}
                >
                    <label>Morning
                        <input
                            type="radio"
                            name="turn"
                            value = "morning"
                            checked
                            onChange={(e) => {
                                setTurn(e.target.value)
                            }}
                        />
                    </label>
                    <label>
                        Afternoon
                        <input
                            type="radio"
                            name="turn"
                            value="afternoon"
                            onChange={(e) => {
                                setTurn(e.target.value)
                            }}
                        />
                    </label>
                    <label>
                        Evening
                        <input
                            type="radio"
                            name="turn"
                            value="evening"
                            onChange={(e) => {
                                setTurn(e.target.value)
                            }}
                        />
                    </label>
                    
                </div>
                <div>
                    <fieldset>
                        <legend>What time do you wanna visit me?</legend>
                        <label>
                            8:00
                            <input 
                            type="checkbox" 
                            name="time"
                            id="8:00"
                            value="8:00"
                            onChange={handleTimeChange}
                            />
                        </label>
                        <label>
                            12:00
                            <input 
                            type="checkbox" 
                            name="time"
                            id="10:00"
                            value="10:00"
                            onChange={handleTimeChange}
                            />
                        </label>
                        <label>
                            18:00
                            <input 
                            type="checkbox" 
                            name="time"
                            id="18:00"
                            value="18:00"
                            onChange={handleTimeChange}
                            />
                        </label>
                    </fieldset>
                    
                    
                </div>
                <div>
                    <label htmlFor="email">E-mail address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => {
                            const statusCopy = JSON.parse(JSON.stringify(status));
                            if(statusCopy && statusCopy.errors?.hasOwnProperty(e.target.name)){
                                delete statusCopy.errors[e.target.name]
                                setStatus(statusCopy)
                            }
                        }}
                    />
                    {status?.errors?.email ? (
                        <ul>
                            {status.errors.email.map((error: string) => {
                                return <li key={error}>{error}</li>;
                            })}
                        </ul>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="message">message</label>
                    <input
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={(e) => {
                            const statusCopy = JSON.parse(JSON.stringify(status));
                            if(statusCopy && statusCopy.errors?.hasOwnProperty(e.target.name)){
                                delete statusCopy.errors[e.target.name]
                                setStatus(statusCopy)
                            }
                        }}
                    />
                    {status?.errors?.message ? (
                        <ul>
                            {status.errors.message.map((error: string) => {
                                return <li key={error}>{error}</li>;
                            })}
                        </ul>
                    ) : null}
                </div>
                <button type="submit">Send</button>
            </form>
        );
    } else if (status.state === "loading") {
        form = <p>Loading</p>;
    } else if (status.state === "success") {
        form = <p>Your message was sent!</p>;
    } else {
        form = (
            <div>
                <p>Message fail, plaese try again.</p>
                <button
                    onClick={() => {
                        setMessage("");
                        setEmail("");
                        setName("");
                        setStatus({ ...status, state: "idle" });
                    }}
                >
                    Try again
                </button>
            </div>
        );
    }
    /*
     * JSX return from here
     */
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
}; //end Contact

// exports here
export default Contact;
