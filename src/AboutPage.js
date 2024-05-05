import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";
import { Map, Marker } from "pigeon-maps"

const AboutPage = () => {
    return (
        <div>
            <motion.div 
                className="about-page"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
            >
                <motion.h1 
                    className="about-title"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    TravelEase: Your Ticket Booking Companion
                </motion.h1>
                <div className="about-description">
                    <motion.p 
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        TravelEase is a comprehensive web application designed to streamline the process 
                        of purchasing tickets for trains and planes. Whether you're planning a weekend getaway, 
                        a business trip, or a holiday adventure, TravelEase offers a user-friendly platform 
                        to book your travel tickets hassle-free.
                    </motion.p>
                    <motion.h2 
                        className="about-subtitle"
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Key Features:
                    </motion.h2>
                    <ul>
                        <motion.li 
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Effortless Booking Interface: TravelEase boasts an intuitive booking interface, ensuring a seamless experience for users of all technical proficiencies. With just a few clicks, users can search for available flights or trains, select preferred routes, and confirm their bookings swiftly.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Extensive Travel Options: Our application provides access to a vast array of travel options, including domestic and international flights, as well as train routes spanning various destinations. From budget-friendly options to luxury travel, TravelEase caters to diverse preferences and budgets.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Real-time Availability: Say goodbye to the frustration of encountering fully booked flights or trains. TravelEase integrates real-time data, allowing users to view up-to-date availability and make informed decisions regarding their travel plans.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            Customized Preferences: Personalization is key at TravelEase. Users can set their preferences based on factors such as departure times, transit durations, airline or railway preferences, and seating accommodations. Our platform tailors search results to match individual requirements, ensuring a tailored booking experience.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            Secure Payment Processing: Security is paramount when it comes to online transactions. TravelEase incorporates robust payment processing systems, safeguarding users' sensitive information during the checkout process. Whether using credit cards, digital wallets, or other payment methods, users can trust TravelEase to handle transactions securely.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        >
                            Booking Management: Once bookings are confirmed, users can conveniently manage their reservations through TravelEase. From itinerary adjustments to ticket cancellations or rescheduling, our platform offers flexible options to accommodate changing travel plans.
                        </motion.li>
                        <motion.li 
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        >
                            Customer Support: Should users encounter any issues or require assistance, TravelEase provides reliable customer support services. Our dedicated team is available to address inquiries, resolve concerns, and offer guidance throughout the booking process, ensuring a stress-free experience from start to finish.
                        </motion.li>
                    </ul>
                    <motion.h2 
                        className="about-subtitle"
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 3.1, duration: 1 }}
                    >
                        Benefits:
                    </motion.h2>
                    <motion.p 
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 3.6, duration: 1 }}
                    >
                        Time-saving Convenience: With TravelEase, users can bypass long queues and tedious reservation processes. Our efficient platform enables quick and convenient ticket bookings, freeing up time for other travel preparations.
                    </motion.p>
                    <motion.p 
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 3.8, duration: 1 }}
                    >
                        Transparent Pricing: TravelEase promotes transparency in pricing, displaying comprehensive fare details and potential additional charges upfront. Users can make well-informed decisions based on accurate pricing information, without encountering unexpected costs later in the booking process.
                    </motion.p>
                    <motion.p 
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 4, duration: 1 }}
                    >
                        Travel Planning Made Easy: Whether planning a solo journey, a family vacation, or a group excursion, TravelEase simplifies the travel planning process. With access to a diverse range of travel options and customizable preferences, users can effortlessly create tailored itineraries to suit their needs and preferences.
                    </motion.p>
                    <motion.p 
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 4.4, duration: 1 }}
                    >
                        Experience the future of travel booking with TravelEase today!
                    </motion.p>
                </div>
            </motion.div>
        
            <footer className="footer">
                <div className="footer-left">
                    <div>
                        <span>Name:</span> Khasankhujayev Azlarkhon
                    </div>
                    <div>
                        <span>Phone:</span> +998 97 737 09 84
                    </div>
                    <div>
                        <span>Email:</span> sendinfo@gmail.com
                    </div>
                </div>
                <div className="footer-right">
                    <Map height={300} defaultCenter={[41.32754234804764, 69.42731422447997]} defaultZoom={15}>
                        <Marker width={50} anchor={[41.32754234804764, 69.42731422447997]} />
                    </Map>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
