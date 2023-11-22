import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nv.css";
import im from "./imac.png";
import mm from './second_back.jpg'
import ipad from './ipad.jpg'
import ipad2 from './ipad2.jpg'
import watch from './iwatch.jpg'
import airpod from './airpods_back (1).jpg'
import iw from './iw.png'
import trade from './iphone_trade.jpg'
import sw from './easy_feature_back.jpg'
function Nave() {
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" className="py-0 bg-dark nv sticky-top">
        <Container>
          <Navbar.Brand className="text-white me-5"><i class="fa-brands fa-apple"></i></Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className=" d-flex justify-content-between">
            
            <Nav.Link className="text-white" href="#home">
              Store
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
              Mac
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              iPad
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              Watch
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
              AirPods
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              TV & Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              Entertainemnt
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
              Acesssories
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              Support
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-magnifying-glass text-white"></i>
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-bag-shopping text-white"></i>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

<Navbar collapseOnSelect expand="lg" className=" py-0 bg-dark nv sticky-top">
      <Container>
        <Navbar.Brand href="#home"><i className="fa-brands fa-apple text-white"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-between " id="responsive-navbar-nav">
          <Nav className=" d-flex justify-content-between  ms-5 me-5">
            <Nav.Link className="text-white ms-4 me-4" href="#pricing">Mac</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">Store</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">iPad</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">Watch</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">AirPods</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">TV & Home</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">Entertainment</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">Acessories</Nav.Link>
            <Nav.Link className="text-white ms-3 me-3" href="#features">Support</Nav.Link>
            
            <Nav.Link>
              <i  class="fa-solid fa-magnifying-glass text-white ms-3 me-3"></i>
            </Nav.Link>
            <Nav.Link>
              <i className="ms-3 me-3" class="fa-solid fa-bag-shopping text-white ms-3 me-3 "></i>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>





      <p className="text-center m-3">
        Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit
        Cards.* Plus No Cost EMI from most leading banks.‡ Shop now
      </p>

      <div className="onediv mt-5 d-flex justify-content-center flex-column align-items-center">
        <div className="text-center jj    ">
          <h3 className="mt-2 fs-1 ">MacBook Pro</h3>
          <h4 className="mt-3 fs-4  ">Mind-blowing.Head-turning</h4>
          <h5 className="mt-3">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
        <img
          className="mm"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment?wid=500&hei=400&fmt=png-alpha&qlt=80&.v=1573580916082"
          alt="noimage"
        ></img>
      </div>

      <div
        style={{ backgroundColor: "#FBFAFB", fontSize: "larger" }}
        className="mt-5 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="text-center     ">
          <h3 className="mt-2 fs-1 ">iMac</h3>
          <h4 className="mt-3 fs-4  ">Packed with more juice.</h4>
          <h5 className="mt-3">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
        <img className="mb-5" width={"500px"} src={im} alt="noimage"></img>
      </div>

      <div className="d-flex  justify-content-center mt-5">
        <div className="text-center  sec   ">
          <h3 style={{color:"white"}} className="mt-2 fs-1 ">iPhone 14 Pro</h3>
          <h4 className="mt-1 fs-4  ">Pro. beyond.</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
        <img className="im" width={'100%'} alt="noimage" src={mm}></img>
      </div>
      {/* first 2 div */}
      <div className="container-fluid">
      <div className="row mt-5">
         <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">
         <div className="text-center  sec1   ">
          <h3  className="mt-1 fs-2 ">iPad</h3>
          <h4 className="mt-1 fs-5  ">Lovabale.Drawable.Magical</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
         <img  className="img-fluid  " src={ipad}></img>
        </div>
      
        <div className="col-lg-6 col-sm-12  h-100 d-flex justify-content-center">
        <div className="text-center  sec2   ">
          <h3  className="mt-1 fs-2 ">iPad Pro</h3>
          <h4 className="mt-1 fs-5  ">SuperCharged by m2</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
        <img className="img-fluid " src={ipad2}></img>
        </div>  

      </div>
      </div>

{/* second main div */}
      <div className="container-fluid">
      <div className="row mt-5">
         <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">
         <div className="text-center  sec2   ">
          <h3  className="mt-1 fs-2 ">AirPods Pro</h3>
          <h4 className="mt-1 fs-5  ">Rebuilt from the soud up</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
         <img  className="img-fluid  " src={airpod}></img>
        </div>
      
        <div className="col-lg-6  col-sm-12  h-100 d-flex justify-content-center">
        <div className="text-center  sec1   ">
          <h3  className="mt-1 fs-2 "><img src={iw}></img></h3>
          <h4 className="mt-1 fs-5  ">Adventure awaits</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              Learn More
            </a>{" "}
            <a style={{ textDecoration: "none" }} className="ms-3">
              buy
            </a>
          </h5>
        </div>
        <img className="img-fluid " src={watch}></img>
        </div>  

      </div>
      </div>

{/* third main div */}
<div className="container-fluid">
      <div className="row mt-5">
        
      
        <div className="col-lg-12  col-sm-12 h-100 d-flex justify-content-center">
        <div className="text-center  sec3  ">
          <h3  className="mt-1 fs-1  fw-bold ">Trade In</h3>
          <h4 className="mt-1 fs-5  ">Upgrade and save .it's that easy.</h4>
          <h5 className="mt-1">
            <a style={{ textDecoration: "none" }} className="me-2">
              See what your device is worth
            </a>{" "}
            
          </h5>
        </div>
        <img width={"100%"} src={trade}></img>
        </div>  

      </div>
      </div>

      <footer className="mt-5" style={{ backgroundColor: "#FBFAFB"}}>
        <div  className="container">
            <p style={{color:'#808080'}} className="text-start fs-small p-3 ">*Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.

<br />A subscription is required for Apple TV+.</p>
<hr />
<p className="text-center">Copyright © 2023 Apple Inc. All rights reserved.</p>
        </div>
      </footer>

      

    </>
  );
}

export default Nave;
