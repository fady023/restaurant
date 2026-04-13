import { useState } from "react";
import "./book.css";

function BookTable() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        name: "",
        phone: "",
        guests: "1 Person",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);


    };

    return (
        <section className="book-page">

            {/* Header */}
            <div className="book-header">
                <h1>Book A Table</h1>
                <p>
                    We consider all the drivers of change gives you the components
                    you need to create a truly happens.
                </p>
            </div>

            {/* Form */}
            <form className="book-form" onSubmit={handleSubmit}>

                <div className="form-row">
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" name="date" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input type="time" name="time" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder="x-xxx-xxx-xxxx" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Total Person</label>
                    <select name="guests" onChange={handleChange}>
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                    </select>
                </div>

                <button type="submit" className="book-btn">
                    Book A Table
                </button>
            </form>
  <div className="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.77263192159!2d31.22504617523891!3d30.072051174909685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841c80d5e18c5%3A0xb4aa2c37fb8f8530!2sL&#39;ULIVETO!5e0!3m2!1sen!2seg!4v1774484947827!5m2!1sen!2seg"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}

                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


          
        </section>



    );
}

export default BookTable;