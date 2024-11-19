import React from 'react'
import hikvision1 from "../assets/images/carousel/hikvision1.jpg"
import hikvision2 from "../assets/images/carousel/hikvision2.jpg"
import hikvision3 from "../assets/images/carousel/hikvision3.jpg"
import hikvision4 from "../assets/images/carousel/hikvision4.jpg"
import hikvision5 from "../assets/images/carousel/hikvision5.jpg"
import hikvision6 from "../assets/images/carousel/hikvision6.jpg"





const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                   
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={hikvision1} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Technology Adoption and Usage
                                </h5>
                                <p>Beyond Visible Light Technologies Survey.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision2} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>2024 Hikvision Customer </h5>
                                <p>Satisfaction Survey</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision3} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Making Pro, More Pro</h5>
                                <p></p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision2} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Grow Your Business with</h5>
                                <p>One-stop SMB Solutions</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision4} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Explore Our Advancements in AIoT Techs</h5>
                                <p></p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision5} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={hikvision6} class="d-block w-100 h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Go to Hikvision Password Reset Page</h5>
                                <p>Find a treasure trove of user-friendly ways to reset those pesky passwords</p>
                            </div>
                    </div>
                    
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner