import { useState } from "react";
import Toast from "./Toast";

export default function Contact() {
    const [contact, setContact] = useState({email:"",name:"",message:""});
    const [type, setType] = useState("");
    const [notification, setNotification] = useState("");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({...contact,[name]:value})
    }
    
    const submitMessage = (e) => {
        e.preventDefault();
        const { email, name, message } = contact;
        if(email && name && message) {

            const formData = new FormData();
            formData.append('email',email);
            formData.append('name',name);
            formData.append('message',message);
            sendRequest(formData);
            setContact({email:"",name:"",message:""});
        } else {
            setType("Error");
            setNotification('some fields are empty or badly formatted');
        }
    }

    const sendRequest = async (data) => {
        await fetch('https://formspree.io/f/myyvyozr', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setType("success");
                setNotification("Thanks for your submission!");
            } else {
              response.json().then(data => {
                setType("error");
                if (Object.hasOwn(data, 'errors')) {
                  setNotification(data["errors"].map(error => error["message"]).join(", "));
                } else {
                  setNotification("Oops! There was a problem submitting your form");
                }
              })
            }
        }).catch(error => {
            setType(error);
            setNotification(error.message || error);
        })
    }
    return (
        <section id="contact" className="min-h-screen pt-6 flex flex-col gap-8">
            <h2 className="text-center text-2xl underline decoration-blue-500 decoration-4">Contact</h2>
            <form className="max-w-sm w-full mx-auto mt-10 flex flex-col gap-4" onSubmit={submitMessage}>
              <div className="relative z-0 w-full group">
                  <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={contact.email} onChange={handleChange} />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
        <div className="relative z-0 w-full group">
            <input type="text" name="name" id="floating_full_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={contact.name} onChange={handleChange} />
            <label htmlFor="floating_full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
        </div>
        <div>
            <label htmlFor="message" className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-600">Your message</label>
            <textarea id="message" rows="4" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..." value={contact.message} onChange={handleChange}></textarea>
        </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitMessage}>Submit</button>
            </form>
            <Toast type={type} message={notification} />
        </section>
    )
}
