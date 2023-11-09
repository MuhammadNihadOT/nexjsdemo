import Image from "next/image";
import "./hero.css";
import { client, urlFor } from "@/app/lib/sanity";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";




async function getData() {
  const query = "*[_type=='mainImage'][1]";
  const data = await client.fetch(query);
  return data;
}
async function getCarouselData() {
  const query1 = "*[_type=='firstcarouselimage']";
  const carouseldata = await client.fetch(query1);
  return carouseldata;
}
async function getfigcaption(){
  var figquery="*[_type=='firstfigCaption'][0]"
  var figdata=await client.fetch(figquery)
  return figdata
}
async function getCarouselquotes(){
      var query="*[_type=='carouselquotes']"
      var data=await client.fetch(query)
      return data
}

export default async function Hero() {
  
  const data = await getData();
  const data1 = await getCarouselData();
  const data2=await getCarouselquotes()
  
  var figdata=await getfigcaption()
  return (
    <div className="container">
      <div className="hero container-fluid">
        <Row>
          <Col sm={12}>
            <div className="mainimagediv container-fluid md:items-center md:flex ">
              <Image
                src={urlFor(data.image2).url()}
                alt="first main image"
                width={1300}
                height={600}
                className="sanity-image h-full w-full object-cover"
              />
            </div>
          </Col>
        </Row>
        <div className="mainheading">
          <h1 className="mainhead-h1">{figdata.maincaption}</h1>
          <p className="fw-bold">{figdata.subcaption} </p>
          <div className="mt-4">
            <button className="first-button ">Shop</button>
            <button className="second-button">Explore</button>
          </div>
        </div>
      </div>
      <div className="second-main">
        <div className="featured">
          <h3 className="ms-4 ">Featured</h3>
        </div>
        <div className="slider-image p-5 mx-auto">
          <ul>
            <li>
              {" "}
              <Image
                src={urlFor(data1[0].image1).url()}
                alt="first carousel image"
                width={370}
                height={500}
              />{" "}
               <h3 className="figcap">For Him</h3>
            </li>
           
            <li className="ms-2">
              {" "}
              <Image
                src={urlFor(data1[0].image2).url()}
                alt="first carousel image"
                width={370}
                height={500}
              />{" "}
               <h3  className="figcap">For Her</h3>
            </li>
            
            <li className="ms-2">
              {" "}
              <Image
                src={urlFor(data1[0].image3).url()}
                alt="first carousel image"
                width={370}
                height={500}
              />{" "}
               <h3 className="figcap">For Kids</h3>
            </li>
          </ul>
          <div className="figcaption  pt-3">
            <ul className="mt-">
              <li>
                <h3>For Him</h3>
              </li>
              <li className="second-figlist "><h3>For Her</h3></li>
              <li className="third-figlist"><h3>For Kids</h3></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="third-main">
        <div className="justin">
          <h3 className="ms-3 ">Just In</h3>
        </div>
        <div className="main-image2 p-2 mx-auto">
          {data.image1 && (
            <Image
              src={urlFor(data.image1).url()}
              alt="second-mainimage"
              width={1300}
              height={600}
              className="second-image"
            />
          )}
        </div>
        <div className="second-mainheading mt-5">
          <p className="fs-6">Air Max Pulse Roam</p>
          <h1 className="second-mainhead-h1">ROAM ENDLESSLY</h1>
          <p className="p-2">
            The Air Max Pulse Roam has arrived, leveled up to deal with anything
            the inner city can throw at it. Designed to be with you anywhere at
            anytime, from morning till night.
          </p>
          <div className="mt-4">
            <button className="first-button ">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="fourthmain">
        <div className="latest"><h3> The Latest</h3></div>
        <div className="fourth-imagesection p-relative">
        <Image
                src={urlFor(data1[1].image1).url()}
                alt="first carousel image"
                width={680}
                height={700}
                className="latestfirst relative "
              />
              <div className="first-quote absolute text-white left-2 top-8 bottom-0">
                <span>{data2[0].firstquote}</span>
                <h5>{data2[0].secondquote}</h5>
              </div>
              <Image
                src={urlFor(data1[1].image2).url()}
                alt="first carousel image"
                width={680}
                height={700}
                className=" latestfirst"
              />
               <div className="second-quote lg:text-lg sm:text-sm text-white "> 
                 <span>{data2[1].firstquote}</span>
                 <h4>{data2[1].secondquote}</h4>
               </div>
              
        </div>
      </div>
    </div>
  );
}
