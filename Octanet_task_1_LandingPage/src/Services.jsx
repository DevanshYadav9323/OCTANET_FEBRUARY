import React from "react";
import "./Services.css";

function Services() {
    return (
        <>
            <div id="background-wrapper">
                <div id="content-wrapper">
                    <h2 id="heading">Why us ?</h2>
                    <div class="wrapper">
                        <div class="card">
                            <h3 class="card-title">Budget-Friendly Adventure Packages:</h3>
                            <p class="card-content">Explore exciting destinations affordably with our curated adventure packages.</p>
                            <button class="card-btn">READ MORE</button>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Local Immersion Tours:</h3>
                            <p class="card-content">Discover hidden gems and connect with local culture on guided immersion tours.</p>
                            <button class="card-btn">READ MORE</button>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Smart Savings Accommodations:</h3>
                            <p class="card-content">Stay comfortably on a budget with our quality yet affordable accommodations.</p>
                            <button class="card-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;