import React, { useState } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Header } from "../../component/header/Header";
import { SignIn } from "../../component/signin/SignIn";
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [bus, setBus] = useState({
    from: '',
    to: '',
    date: ''
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const bookingId = searchParams.get('bookingId');

  const handleSearch = () => {
    navigate(`/search?from=${bus.from}&to=${bus.to}&date=${bus.date}`);
  }

  return (
    <>
      <Header setOpen={setOpen} />
      <SignIn open={open} setOpen={setOpen} />
      <div>
        {bookingId ? "Ticket booked successfully " + bookingId : ''}
        <div className="home-container-image"></div>
        <div id="search_div" className="clearfix">
          <section id="search">
            <div className="clearfix search-wrap">
              <div
                className="fl search-box clearfix"
                style={{ borderColor: "rgb(210, 210, 210)" }}
              >
                <span className="fl icon-city icon"></span>
                <div>
                  <input
                    type="text"
                    id="src"
                    className="db"
                    data-message="Please enter a source city"
                    tabindex="1"
                    autocomplete="off"
                    value={bus.from}
                    onChange={(e) => setBus({...bus, from: e.target.value })}
                  />
                  <label
                    for="src"
                    className="db move-up"
                    style={{ left: "15%" }}
                  >
                    FROM
                  </label>
                  <div className="error-message-fixed "> </div>
                </div>
              </div>
              <span className="icon-doublearrow icon" id="togglebtn"></span>
              <div className="fl search-box">
                <span
                  className="fl icon-city icon"
                  style={{ marginLeft: "13px" }}
                ></span>
                <div>
                  <input
                    type="text"
                    id="dest"
                    className="db"
                    data-message="Please enter a destination city"
                    tabindex="2"
                    autocomplete="off"
                    value={bus.to}
                    onChange={(e) => setBus({...bus, to: e.target.value })}
                  />
                  <label
                    for="dest"
                    style={{ left: "21%" }}
                    className="db move-up"
                  >
                    TO
                  </label>
                  <div className="error-message-fixed "> </div>
                </div>
              </div>
              <div className="fl search-box date-box gtm-onwardCalendar">
                {/* <span className="fl icon-calendar_icon-new icon-onward-calendar icon"></span> */}
                <div>
                  {/* <input
                    type="text"
                    id="onward_cal"
                    className="db"
                    readonly="readonly"
                    tabindex="3"
                    data-caleng="11-Mar-2022"
                  />
                  <label for="onward_cal" className="db text-trans-uc move-up">
                    Date
                  </label> */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label=""
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        setBus({...bus, date: newValue.toISOString().split('T')[0]})
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <div className="date-error">
                    {/* "Onward date should be before return date" */}
                  </div>
                </div>
              </div>
              <button id="search_btn" className="fl button" onClick={handleSearch}>
                Search Buses
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="rest">
        <div id="offer_div" className="rest1 offer_div  animate">
          <div className="main-body over-vis">
            <div className="w-100" id="gtm_promo_cont">
              <div className="Offers mySlides" id="offers" data-order="2">
                <div
                  className="clearfix dib promotions-wrap link-blocks gtm-promotions-trigger"
                  data-link="https://www.redbus.in/info/OfferTerms#FIRST"
                  data-slot="1"
                  data-creative="promotion-banner"
                >
                  <div className="fl dib promotion-image">
                    <img src="https://st.redbus.in/Images/INDOFFER/Nonatak/7.png" />
                  </div>

                  <div className="fl dib promotion-text-wrap">
                    <div className="tac promotion-header main-header-family gtm-offer-code">
                      No Natak, only Best Discounts!
                    </div>
                    <div className="tac promotion-description gtm-offer-desc">
                      Save upto Rs 150* on your bus tickets. Book your favourite
                      seat now.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100" id="gtm_promo_cont"></div>
            <div id="offer_w" style={{ marginTop: "14px" }}>
              <div id="offer_heading">
                <span className="main-header-family heading-1"></span>
              </div>
              <div
                id="carousel-wrapper"
                className="carousel-wrapper clearfix  w-1200"
              >
                <ul
                  className="carousel-container c-1 clearfix className-1"
                  id="offer_container"
                  style={{ width: "1900px" }}
                >
                  <li
                    className="  offer-slide-item offer-blocks gtm-promotions-trigger grow"
                    data-link="https://www.redbus.in/info/OfferTerms#FIRST"
                    data-slot="1"
                    data-creative="offer-banner"
                    style={{
                      width: "360px !important",
                      background: "white !important",
                      left: "0px",
                    }}
                  >
                    <span className="clearfix offer-li-wrap">
                      <span className="offer-det">
                        Save up to Rs 250 on bus tickets
                      </span>
                      <span className="offer-img">
                        <img src="https://st.redbus.in/Images/INDOFFER/Nonatak/new/80x80.png" />
                      </span>
                      <span className="fl w-100 offer-txt-wraper">
                        <span className="offer-code gtm-offer-code">
                          Use code FIRST
                        </span>
                        <span className="offer-det gtm-offer-desc"></span>
                      </span>
                    </span>
                  </li>
                  <li
                    className="  offer-slide-item offer-blocks gtm-promotions-trigger grow"
                    data-link="https://m.redbus.in/covid-passenger-guidelines"
                    data-slot="2"
                    data-creative="offer-banner"
                    style={{
                      width: "360px !important",
                      background: "white !important",
                      left: "380px",
                    }}
                  >
                    <span className="clearfix offer-li-wrap">
                      <span className="offer-det">State wise Guidelines</span>
                      <span className="offer-img">
                        <img src="https://st.redbus.in/Images/buscommon/guidelines.png" />
                      </span>
                      <span className="fl w-100 offer-txt-wraper">
                        <span className="offer-code gtm-offer-code">
                          Click here for latest updates
                        </span>
                        <span className="offer-det gtm-offer-desc"></span>
                      </span>
                    </span>
                  </li>
                  <li
                    className="  offer-slide-item offer-blocks gtm-promotions-trigger grow"
                    data-link="https://www.redbus.in/info/OfferTerms#SLIRED"
                    data-slot="3"
                    data-creative="offer-banner"
                    style={{
                      width: "360px !important",
                      background: "white !important",
                      left: "760px",
                    }}
                  >
                    <span className="clearfix offer-li-wrap">
                      <span className="offer-det">
                        Flat Rs.300 cashback for first time slice users.
                      </span>
                      <span className="offer-img">
                        <img src="https://st.redbus.in/Images/slice/247x147.png" />
                      </span>
                      <span className="fl w-100 offer-txt-wraper">
                        <span className="offer-code gtm-offer-code">
                          Use code SLIRED
                        </span>
                        <span className="offer-det gtm-offer-desc"></span>
                      </span>
                    </span>
                  </li>
                  <li
                    className="  offer-slide-item offer-blocks gtm-promotions-trigger grow"
                    data-link="https://www.redbus.in/info/OfferTerms#AMAZON"
                    data-slot="4"
                    data-creative="offer-banner"
                    style={{
                      width: "360px !important",
                      background: "white !important",
                      left: "1140px",
                    }}
                  >
                    <span className="clearfix offer-li-wrap">
                      <span className="offer-det">
                        Get upto Rs. 500 on minimum purchase of Rs 300.
                      </span>
                      <span className="offer-img">
                        <img src="https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png" />
                      </span>
                      <span className="fl w-100 offer-txt-wraper">
                        <span className="offer-code gtm-offer-code">
                          Pay using Amazon pay
                        </span>
                        <span className="offer-det gtm-offer-desc"></span>
                      </span>
                    </span>
                  </li>
                  <li
                    className="  offer-slide-item offer-blocks gtm-promotions-trigger grow"
                    data-link="https://www.redbus.in/info/OfferTerms#SLICEIT"
                    data-slot="5"
                    data-creative="offer-banner"
                    style={{
                      width: "360px !important",
                      background: "white !important",
                      left: "1520px",
                    }}
                  >
                    <span className="clearfix offer-li-wrap">
                      <span className="offer-det">Get 15% off upto Rs 150</span>
                      <span className="offer-img">
                        <img src="https://st.redbus.in/Images/slice/247x147.png" />
                      </span>
                      <span className="fl w-100 offer-txt-wraper">
                        <span className="offer-code gtm-offer-code">
                          Use code SLICEIT
                        </span>
                        <span className="offer-det gtm-offer-desc"></span>
                      </span>
                    </span>
                  </li>
                </ul>

                <span
                  id="prevarrow"
                  className="carousel-control prev1 pos offerP vis"
                  data-container="c-1"
                  style={{ display: "none" }}
                ></span>
                <span
                  id="nextarrow"
                  className="carousel-control next1 pos offerN vis"
                  data-container="c-1"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body">
          <div className="HeroMain">
            <div className="header">
              <div className="img2_Hero"></div>

              <span className="fl">
                <div className="Title_hero">Safety+</div>
                <div className="subtext_hero">
                  Opt to Travel Safe with redBus
                  <a className="know-more-anchor" href="/SafetyPlus">
                    &nbsp;Know more
                  </a>
                </div>
              </span>
              <span className="fr"></span>
            </div>
            <div className="subHeader_hero">
              <span className="img3_hero"></span>
              <span className="Herotext1">Look for buses with </span>
              <span className="img4_Hero"></span>
              <span className="text">tag while booking your journey, </span>
            </div>

            <div className="info_hero">
              <div className="titl_hero"> Sanitized Bus </div>
              <div className="value_hero"> </div>
              <div className="text_hero">
                All Safety+ buses are sanitized and disinfected before and after
                every trip.{" "}
              </div>
            </div>
            <div className="info_hero2">
              <div className="titl_hero"> Mandatory masks </div>
              <div className="value_hero"> </div>
              <div className="text_hero">
                Proper masks are mandatory for all passengers and bus staff.
              </div>
            </div>
            <div className="info_hero2">
              <div className="titl_hero"> Thermal Screening </div>
              <div className="value_hero"> </div>
              <div className="text_hero">
                All passengers will undergo thermal screening. Temperature
                checks for bus drivers and service staff are done before every
                trip.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="pR other-plt-outer-wrap">
          <div id="platforms_div" className="main-body">
            <section className="pR">
              <div className="clearfix op-wrapper">
                <div className="pA w-50 txt-otherplt">
                  <div className="oph heading-1 main-header-family rest1 animate">
                    Convenience On-the-go.
                  </div>
                  <div className="opd rest1 second-level-heading animate"></div>
                  <div className="desc-OP-new rest1 animate">
                    {" "}
                    Enjoy the following exclusive features on the redBus app{" "}
                    <br />
                    <span className="Platform-hl">Last Minute Booking</span> -
                    In a hurry to book a bus at the last minute? Choose the bus
                    passing from your nearest boarding point and book in a few
                    easy steps. <br />
                    <span className="Platform-hl">
                      Boarding Point Navigation
                    </span>{" "}
                    - Never lose your way while travelling to your boarding
                    point! <br />
                    <span className="Platform-hl">
                      Comprehensive Ticket Details{" "}
                    </span>
                    - Everything that you need to make the travel hassle free -
                    rest stop details, boarding point images, chat with
                    co-passengers, wake-up alarm and much more!
                  </div>
                  <div id="download-sms" className="section gray W125">
                    <span className="download-sms-txt">
                      Enter your mobile number below to download the redBus
                      mobile app.
                    </span>

                    <div id="phoneWrapper">
                      <div className="phone_number_sec">
                        <select
                          className="IP"
                          id="upphoneCode"
                          name="upphoneCode"
                        >
                          <option value="93">93</option>
                          <option value="355">355</option>
                          <option value="213">213</option>
                          <option value="1684">1684</option>
                          <option value="376">376</option>
                          <option value="244">244</option>
                          <option value="1264">1264</option>
                          <option value="672">672</option>
                          <option value="1268">1268</option>
                          <option value="54">54</option>
                          <option value="374">374</option>
                          <option value="297">297</option>
                          <option value="61">61</option>
                          <option value="43">43</option>
                          <option value="994">994</option>
                          <option value="1242">1242</option>
                          <option value="973">973</option>
                          <option value="880">880</option>
                          <option value="1246">1246</option>
                          <option value="375">375</option>
                          <option value="32">32</option>
                          <option value="501">501</option>
                          <option value="229">229</option>
                          <option value="1441">1441</option>
                          <option value="975">975</option>
                          <option value="591">591</option>
                          <option value="599">599</option>
                          <option value="387">387</option>
                          <option value="267">267</option>
                          <option value="47">47</option>
                          <option value="55">55</option>
                          <option value="246">246</option>
                          <option value="673">673</option>
                          <option value="359">359</option>
                          <option value="226">226</option>
                          <option value="257">257</option>
                          <option value="855">855</option>
                          <option value="237">237</option>
                          <option value="1">1</option>
                          <option value="238">238</option>
                          <option value="1345">1345</option>
                          <option value="236">236</option>
                          <option value="235">235</option>
                          <option value="56">56</option>
                          <option value="86">86</option>
                          <option value="61">61</option>
                          <option value="61">61</option>
                          <option value="57">57</option>
                          <option value="269">269</option>
                          <option value="242">242</option>
                          <option value="243">243</option>
                          <option value="682">682</option>
                          <option value="506">506</option>
                          <option value="385">385</option>
                          <option value="53">53</option>
                          <option value="599">599</option>
                          <option value="357">357</option>
                          <option value="420">420</option>
                          <option value="225">225</option>
                          <option value="45">45</option>
                          <option value="253">253</option>
                          <option value="1767">1767</option>
                          <option value="1809">1809</option>
                          <option value="1829">1829</option>
                          <option value="1849">1849</option>
                          <option value="593">593</option>
                          <option value="20">20</option>
                          <option value="503">503</option>
                          <option value="240">240</option>
                          <option value="291">291</option>
                          <option value="372">372</option>
                          <option value="251">251</option>
                          <option value="500">500</option>
                          <option value="298">298</option>
                          <option value="679">679</option>
                          <option value="358">358</option>
                          <option value="33">33</option>
                          <option value="594">594</option>
                          <option value="689">689</option>
                          <option value="262">262</option>
                          <option value="241">241</option>
                          <option value="220">220</option>
                          <option value="995">995</option>
                          <option value="49">49</option>
                          <option value="233">233</option>
                          <option value="350">350</option>
                          <option value="30">30</option>
                          <option value="299">299</option>
                          <option value="1473">1473</option>
                          <option value="590">590</option>
                          <option value="1671">1671</option>
                          <option value="502">502</option>
                          <option value="44">44</option>
                          <option value="224">224</option>
                          <option value="245">245</option>
                          <option value="592">592</option>
                          <option value="509">509</option>
                          <option value="672">672</option>
                          <option value="379">379</option>
                          <option value="504">504</option>
                          <option value="852">852</option>
                          <option value="36">36</option>
                          <option value="354">354</option>
                          <option value="91">91</option>
                          <option value="62">62</option>
                          <option value="98">98</option>
                          <option value="964">964</option>
                          <option value="353">353</option>
                          <option value="44">44</option>
                          <option value="972">972</option>
                          <option value="39">39</option>
                          <option value="1876">1876</option>
                          <option value="81">81</option>
                          <option value="44">44</option>
                          <option value="962">962</option>
                          <option value="7">7</option>
                          <option value="254">254</option>
                          <option value="686">686</option>
                          <option value="850">850</option>
                          <option value="82">82</option>
                          <option value="965">965</option>
                          <option value="996">996</option>
                          <option value="856">856</option>
                          <option value="371">371</option>
                          <option value="961">961</option>
                          <option value="266">266</option>
                          <option value="231">231</option>
                          <option value="218">218</option>
                          <option value="423">423</option>
                          <option value="370">370</option>
                          <option value="352">352</option>
                          <option value="853">853</option>
                          <option value="389">389</option>
                          <option value="261">261</option>
                          <option value="265">265</option>
                          <option value="60">60</option>
                          <option value="960">960</option>
                          <option value="223">223</option>
                          <option value="356">356</option>
                          <option value="692">692</option>
                          <option value="596">596</option>
                          <option value="222">222</option>
                          <option value="230">230</option>
                          <option value="262">262</option>
                          <option value="52">52</option>
                          <option value="691">691</option>
                          <option value="373">373</option>
                          <option value="377">377</option>
                          <option value="976">976</option>
                          <option value="382">382</option>
                          <option value="1664">1664</option>
                          <option value="212">212</option>
                          <option value="258">258</option>
                          <option value="95">95</option>
                          <option value="264">264</option>
                          <option value="674">674</option>
                          <option value="977">977</option>
                          <option value="31">31</option>
                          <option value="687">687</option>
                          <option value="64">64</option>
                          <option value="505">505</option>
                          <option value="227">227</option>
                          <option value="234">234</option>
                          <option value="683">683</option>
                          <option value="672">672</option>
                          <option value="1670">1670</option>
                          <option value="47">47</option>
                          <option value="968">968</option>
                          <option value="92">92</option>
                          <option value="680">680</option>
                          <option value="970">970</option>
                          <option value="507">507</option>
                          <option value="675">675</option>
                          <option value="595">595</option>
                          <option value="51">51</option>
                          <option value="63">63</option>
                          <option value="870">870</option>
                          <option value="48">48</option>
                          <option value="351">351</option>
                          <option value="1">1</option>
                          <option value="974">974</option>
                          <option value="40">40</option>
                          <option value="7">7</option>
                          <option value="250">250</option>
                          <option value="262">262</option>
                          <option value="590">590</option>
                          <option value="290">290</option>
                          <option value="1869">1869</option>
                          <option value="1758">1758</option>
                          <option value="590">590</option>
                          <option value="508">508</option>
                          <option value="1784">1784</option>
                          <option value="685">685</option>
                          <option value="378">378</option>
                          <option value="239">239</option>
                          <option value="966">966</option>
                          <option value="221">221</option>
                          <option value="381">381</option>
                          <option value="248">248</option>
                          <option value="232">232</option>
                          <option value="65">65</option>
                          <option value="1721">1721</option>
                          <option value="421">421</option>
                          <option value="386">386</option>
                          <option value="677">677</option>
                          <option value="252">252</option>
                          <option value="27">27</option>
                          <option value="500">500</option>
                          <option value="211">211</option>
                          <option value="34">34</option>
                          <option value="94">94</option>
                          <option value="249">249</option>
                          <option value="597">597</option>
                          <option value="47">47</option>
                          <option value="268">268</option>
                          <option value="46">46</option>
                          <option value="41">41</option>
                          <option value="963">963</option>
                          <option value="886">886</option>
                          <option value="992">992</option>
                          <option value="255">255</option>
                          <option value="66">66</option>
                          <option value="670">670</option>
                          <option value="228">228</option>
                          <option value="690">690</option>
                          <option value="676">676</option>
                          <option value="1868">1868</option>
                          <option value="216">216</option>
                          <option value="90">90</option>
                          <option value="993">993</option>
                          <option value="1649">1649</option>
                          <option value="688">688</option>
                          <option value="256">256</option>
                          <option value="380">380</option>
                          <option value="971">971</option>
                          <option value="44">44</option>
                          <option value="1">1</option>
                          <option value="1">1</option>
                          <option value="598">598</option>
                          <option value="998">998</option>
                          <option value="678">678</option>
                          <option value="58">58</option>
                          <option value="84">84</option>
                          <option value="1284">1284</option>
                          <option value="1340">1340</option>
                          <option value="681">681</option>
                          <option value="212">212</option>
                          <option value="967">967</option>
                          <option value="260">260</option>
                          <option value="263">263</option>
                        </select>
                        <input
                          type="text"
                          id="smsTXTBOX"
                          placeholder="Enter your mobile number"
                          className="LB"
                          data-validate="required|phone"
                          maxlength="15"
                          data-message="Enter the mobile number|Invalid Mobile No"
                        />
                        <div className="message hide" id="success">
                          SMS sent with download link
                        </div>
                        <div className="message hide" id="failure">
                          Sorry ! please try again. We are facing issues in
                          sending SMS
                        </div>
                        <input
                          name=""
                          id="sendLinkButton"
                          type="button"
                          className="smsBtn button LB"
                          value="SMS me the link"
                        />
                      </div>
                      <div className="clear"></div>
                      <p className="errorMessageFixed"></p>
                      <div className="clear"></div>
                    </div>
                  </div>

                  <div className="opi rest1 app_icons animate">
                    <a
                      href="https://itunes.apple.com/in/app/redbus/id733712604?mt=8"
                      target="_blank"
                      className="apple icon-iPhone_download"
                    ></a>
                    <a
                      href="https://play.google.com/store/apps/details?id=in.redbus.android&amp;hl=en"
                      target="_blank"
                      className="google icon-Google_download"
                    ></a>
                  </div>
                </div>
                <div className="phone rest1 pA phn-cont animate">
                  <img
                    src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png"
                    height="552"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="pA bgImgCont">
            <img
              src="//s2.rdbuz.com/web/images/home/city_scape_app_download.png"
              height="430"
              className="bg-img"
            />
          </div>
        </div>
        <div className="border-separator"></div>
        <div id="advantage_div">
          <section>
            <div className="aw main-body">
              <div className="ah heading-1 main-header-family rest1 animate">
                <div className="dib">
                  <img
                    src="//s1.rdbuz.com/web/images/home/promise.png"
                    height="100"
                  />
                </div>
                <div className="promise-head-main"> We promise to deliver</div>
              </div>
              <div className="ad rest1 animate"></div>
              <div className="clearfix aa our-promise-blocks" id="advantage">
                <div className="fl rest1 appear-first aa-25 animate">
                  <div className="imgCont rest1 animate">
                    <img
                      src="//s3.rdbuz.com/Images/safety/srp/safety.svg"
                      height="90"
                    />
                  </div>
                  <div className="tilleBlock rest1 animate">SAFETY+</div>
                  <div className="second-level-heading descCont rest1 animate">
                    With Safety+ we have brought in a set of measures like
                    Sanitized buses, mandatory masks etc. to ensure you travel
                    safely.
                  </div>
                </div>
                <div className="fl rest1 appear-second aa-25 animate">
                  <div className="imgCont rest1 animate">
                    <img
                      src="//s1.rdbuz.com/web/images/home/customer_care.png"
                      height="100"
                    />
                  </div>
                  <div className="tilleBlock rest1 animate">
                    SUPERIOR CUSTOMER SERVICE
                  </div>
                  <div className="second-level-heading descCont rest1 animate">
                    We put our experience and relationships to good use and are
                    available to solve your travel issues.
                  </div>
                </div>
                <div className="fl rest1 appear-third aa-25 animate">
                  <div className="imgCont rest1 animate">
                    <img
                      src="//s1.rdbuz.com/web/images/home/lowest_Fare.png"
                      height="90"
                    />
                  </div>
                  <div className="tilleBlock rest1 animate">LOWEST PRICES</div>
                  <div className="second-level-heading descCont rest1 animate">
                    We always give you the lowest price with the best partner
                    offers.
                  </div>
                </div>
                <div className="fl rest1 appear-fourth aa-25 animate">
                  <div className="imgCont rest1 animate">
                    <img
                      src="//s2.rdbuz.com/web/images/home/benefits.png"
                      height="90"
                    />
                  </div>
                  <div className="tilleBlock rest1 animate">
                    UNMATCHED BENEFITS
                  </div>
                  <div className="second-level-heading descCont rest1 animate">
                    We take care of your travel beyond ticketing by providing
                    you with innovative and unique benefits.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="border-separator"></div>
        <div id="awards_div" className="main-body">
          <section>
            <div className="aw">
              <div className="ah heading-1 main-header-family rest1 main-head animate">
                Awards &amp; Recognition
              </div>
              <div className="clearfix ac awards-main">
                <div className="fl rest1 appear-first animate">
                  <a
                    href="http://www.business-standard.com/article/companies/bs-annual-awards-saluting-the-spirit-of-entrepreneurship-114033100015_1.html"
                    target="_blank"
                  >
                    <div>
                      <div className="imgCont">
                        <img src="//s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" />
                      </div>
                      <div className="second-level-heading label-1">
                        Most Innovative Company
                      </div>
                      <div className="second-level-heading label-2"></div>
                    </div>
                  </a>
                </div>
                <div className="fl rest1 appear-second animate">
                  <a
                    href="https://thebrandtrustreport.wordpress.com/tag/redbus-in/"
                    target="_blank"
                  >
                    <div style={{ marginTop: "35px" }}>
                      <div className="imgCont">
                        <img src="//s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png" />
                      </div>
                      <div className="second-level-heading label-1">
                        Most Trusted Brand
                      </div>
                      <div className="second-level-heading label-2"></div>
                    </div>
                  </a>
                </div>
                <div className="fl rest1 appear-third animate">
                  <a
                    href="https://eyefortravelblog.blogspot.in/2014/04/winners-of-mobile-innovation-in-travel.html"
                    target="_blank"
                  >
                    <div>
                      <div className="imgCont">
                        <img src="//s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png" />
                      </div>
                      <div className="second-level-heading label-1">
                        Mobile Innovation Award
                      </div>
                      <div className="second-level-heading label-2"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="border-separator"></div>
        <div id="our_distribution_div" className="clearfix">
          <div className="main-body">
            <section className="clearfix main-body">
              <div className="ah heading-1 main-header-family main-head rest1 animate">
                Our Global Presence
              </div>
            </section>
            <ul className="flag-cont clearfix rest1 animate">
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.co/"
              >
                <span>
                  <span className="flagicon icon-COL"></span>
                </span>
                <span className="flag-name">colombia</span>
              </li>
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.in"
              >
                <span>
                  <span className="flagicon icon-IND"></span>
                </span>
                <span className="flag-name">india</span>
              </li>
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.id"
              >
                <span>
                  <span className="flagicon icon-IDN"></span>
                </span>
                <span className="flag-name">indonesia</span>
              </li>
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.my"
              >
                <span>
                  <span className="flagicon icon-MYS"></span>
                </span>
                <span className="flag-name">malaysia</span>
              </li>
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.pe/"
              >
                <span>
                  <span className="flagicon icon-PER"></span>
                </span>
                <span className="flag-name">Peru</span>
              </li>
              <li
                className="dib country-flags link-blocks site-links rest1 animate"
                data-link="https://www.redbus.sg"
              >
                <span>
                  <span className="flagicon icon-SGP"></span>
                </span>
                <span className="flag-name">singapore</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-separator"></div>
        <div className="main-body">
          <section id="stats_div">
            <div>
              <div className="stats-header heading-1 main-header-family rest1">
                The numbers are growing!
              </div>
              <div className="clearfix stats-v-holder">
                <div className="fl">
                  <div>
                    <div className="sp rest1">CUSTOMERS</div>
                    <div className="sv rest1">36 M</div>
                    <div className="common-desc second-level-heading rest1">
                      redBus is trusted by over 36 million happy customers
                      globally
                    </div>
                  </div>
                </div>
                <div className="fl">
                  <div>
                    <div className="sp rest1">OPERATORS</div>
                    <div className="sv rest1">3500</div>
                    <div className="common-desc second-level-heading rest1">
                      network of over 3500 bus operators worldwide
                    </div>
                  </div>
                </div>
                <div className="fl">
                  <div>
                    <div className="sp rest1">BUS TICKETS</div>
                    <div className="sv rest1">220+ M</div>
                    <div className="common-desc second-level-heading rest1">
                      Over 220 million trips booked using redBus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="border-separator"></div>
      </div>
      <footer id="rh_footer">
        <div className="seo-section clearfix ">
          <div className="main-body ">
            <div className="seo-wrapper rest1 clearfix animate">
              <div className="w-20 fl tac fl tal">
                <div className="seo-header">Top Bus Routes</div>
                <a
                  href="/bus-tickets/hyderabad-to-bangalore"
                  target="_blank"
                  title="Hyderabad to Bangalore Bus"
                >
                  Hyderabad to Bangalore Bus
                </a>
                <a
                  href="/bus-tickets/bangalore-to-chennai"
                  target="_blank"
                  title="Bangalore to Chennai Bus"
                >
                  Bangalore to Chennai Bus
                </a>
                <a
                  href="/bus-tickets/pune-to-bangalore"
                  target="_blank"
                  title="Pune to Bangalore Bus"
                >
                  Pune to Bangalore Bus
                </a>
                <a
                  href="/bus-tickets/mumbai-to-bangalore"
                  target="_blank"
                  title="Mumbai to Bangalore Bus"
                >
                  Mumbai to Bangalore Bus
                </a>
                <a
                  href="/bus-tickets/routes-directory"
                  className="more-link site-links"
                  target="_blank"
                  title="More >"
                >
                  More &gt;
                </a>
              </div>
              <div className="w-20 fl tac fl tal">
                <div className="seo-header">Top Cities</div>
                <a
                  href="/buses/hyderabad-bus-tickets.aspx"
                  target="_blank"
                  title="Hyderabad Bus Tickets"
                >
                  Hyderabad Bus Tickets
                </a>
                <a
                  href="/buses/bangalore-bus-tickets.aspx"
                  target="_blank"
                  title="Bangalore Bus Tickets"
                >
                  Bangalore Bus Tickets
                </a>
                <a
                  href="/buses/chennai-bus-tickets.aspx"
                  target="_blank"
                  title="Chennai Bus Tickets"
                >
                  Chennai Bus Tickets
                </a>
                <a
                  href="/buses/pune-bus-tickets.aspx"
                  target="_blank"
                  title="Pune Bus Tickets"
                >
                  Pune Bus Tickets
                </a>
                <a
                  href="/buses/cities-directory.aspx"
                  className="more-link site-links"
                  target="_blank"
                >
                  More &gt;
                </a>
              </div>
              <div className="w-20 fl tac fl tal">
                <div className="seo-header">Top RTC's</div>
                <a
                  href="/online-booking/apsrtc.aspx"
                  target="_blank"
                  title="APSRTC"
                >
                  APSRTC
                </a>
                <a
                  href="/online-booking/msrtc.aspx"
                  target="_blank"
                  title="MSRTC"
                >
                  MSRTC
                </a>
                <a
                  href="/online-booking/hrtc.aspx"
                  target="_blank"
                  title="HRTC"
                >
                  HRTC
                </a>
                <a
                  href="/online-booking/upsrtc.aspx"
                  target="_blank"
                  title="UPSRTC"
                >
                  UPSRTC
                </a>
                <a
                  href="/online-booking/rtc-directory.aspx"
                  className="more-link site-links"
                  target="_blank"
                >
                  More&gt;{" "}
                </a>
              </div>
              <div className="w-20 fl tac fl tal">
                <div className="seo-header">Other</div>
                <a
                  href="https://www.redbus.in/online-booking/gsrtc.aspx"
                  target="_blank"
                  title="GSRTC"
                >
                  GSRTC
                </a>
                <a
                  href="https://www.redbus.in/online-booking/rsrtc.aspx"
                  target="_blank"
                  title="RSRTC"
                >
                  RSRTC
                </a>
                <a
                  href="https://www.redbus.in/online-booking/ktcl.aspx"
                  target="_blank"
                  title="KTCL"
                >
                  KTCL
                </a>
                <a
                  href="https://www.redbus.in/online-booking/pepsu.aspx"
                  target="_blank"
                  title="PEPSU"
                >
                  PEPSU
                </a>
                <a
                  href="https://www.redbus.in/online-booking/rtc-directory.aspx"
                  className="more-link site-links"
                  target="_blank"
                  title=""
                >
                  More&gt;{" "}
                </a>
              </div>
              <div className="w-20 fl tac fl tal">
                <div className="seo-header">Tempo Traveller in Cities</div>
                <a
                  href="https://www.redbus.in/tempo-traveller/bangalore"
                  target="_blank"
                  title="Tempo Traveller Bangalore"
                >
                  Tempo traveller in Bangalore
                </a>
                <a
                  href="https://www.redbus.in/tempo-traveller/chennai"
                  target="_blank"
                  title="Tempo Traveller Chennai"
                >
                  Tempo traveller in Chennai
                </a>
                <a
                  href="https://www.redbus.in/tempo-traveller/mumbai"
                  target="_blank"
                  title="Tempo traveller in Mumbai"
                >
                  Tempo traveller in Mumbai
                </a>
                <a
                  href="https://www.redbus.in/tempo-traveller/hyderabad"
                  target="_blank"
                  title="Tempo traveller in Hyderabad"
                >
                  Tempo traveller in Hyderabad
                </a>
                <a
                  href="https://www.redbus.in/tempo-traveller/ahmedabad"
                  target="_blank"
                  title="Tempo traveller in Ahmedabad"
                >
                  Tempo traveller in Ahmedabad
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="seo-section clearfix ">
          <div className="main-body ">
            <div className="operator-footer-list clearfix">
              {" "}
              <ul className="container clearfix">
                {" "}
                <h6 className="seo-header">Top Operators</h6>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/srs-travels-srs.aspx">
                    SRS Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/evacay-bus.aspx ">
                    Evacay Bus
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/kallada-travels-kallada.aspx ">
                    Kallada Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/kpn-travels-kpn.aspx ">
                    KPN Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/orange-travels-orange.aspx ">
                    Orange Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/parveen-travels.aspx ">
                    Parveen Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/rajdhani-express.aspx ">
                    Rajdhani Express
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/vrl-travels-vrl.aspx">
                    VRL Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/chartered-bus.aspx">
                    Chartered Speed Bus
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/bengal-tiger.aspx">
                    Bengal Tiger
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/srm-travels-srm.aspx">
                    SRM Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/infant-jesus.aspx">
                    Infant Jesus
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/patel-travels-lufthanza-9940.aspx">
                    Patel Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/jbt-travels.aspx">
                    JBT Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/shatabdi-travels-1.aspx">
                    Shatabdi Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/eagle-travels.aspx">
                    Eagle Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/kanker-roadways-10172.aspx">
                    Kanker Roadways
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/komitla.aspx">
                    Komitla
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/sri-krishna-travels.aspx">
                    Sri Krishna Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/humsafar-travels-9807.aspx">
                    Humsafar Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/mahasagar-travels-mahasagar.aspx">
                    Mahasagar Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/raj-express-1.aspx">
                    Raj Express
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/sharma-travels.aspx">
                    Sharma Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/shrinath-travels-agency-online.aspx">
                    Shrinath Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/universal-travels.aspx">
                    Universal Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/verma-travels.aspx">
                    Verma Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/gujarat-travels.aspx">
                    Gujarat Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/madurai-radha-travels.aspx">
                    Madurai Radha Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/patel-tours-and-travels.aspx">
                    Patel Tours and Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/paulo-travels.aspx">
                    Paulo Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/royal-travels.aspx">
                    Royal Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/amarnath-travels-9984.aspx">
                    Amarnath Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/vaibhav-travels.aspx">
                    Vaibhav Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/ganesh-travels-2.aspx">
                    Ganesh Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/jabbar-travels.aspx">
                    Jabbar Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/jain-travels.aspx">
                    Jain Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/manish-travels.aspx">
                    Manish Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/pradhan.aspx">
                    Pradhan Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/ybm-travels.aspx">
                    YBM Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/hebron-transports.aspx">
                    Hebron Transports
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/mahalaxmi-travels-mahalaxmi.aspx">
                    Mahalaxmi travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/mr-travels.aspx">
                    MR Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/vivegam-travels.aspx">
                    Vivegam Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/vst.aspx">
                    VST Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/jakhar-travels.aspx">
                    Jakhar Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/kaleswari-travels.aspx">
                    Kaleswari Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/mahendra-travels-10027.aspx">
                    Mahendra Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/neeta-tours-and-travels.aspx">
                    Neeta Tours and Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/yamani-travels.aspx">
                    Yamani Travels
                  </a>
                </li>{" "}
                <li>
                  <a href="https://www.redbus.in/travels/arthi-travels.aspx">
                    Arthi Travels
                  </a>
                </li>{" "}
              </ul>
              <div className="more-link">
                <a
                  href="/travels/operators-directory.aspx"
                  className="more-link site-links"
                  target="_blank"
                >
                  All Operators &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="clearfix promotion  main-body rest1 animate">
            <div className="w-100 pR fl footer-links">
              <div className="dib foot-wrapper">
                <div className="row fl">
                  <div className="dib">About redBus</div>
                  <a href="/info/aboutus" target="_blank">
                    About Us
                  </a>
                  <a href="/info/contactus" target="_blank">
                    Contact Us
                  </a>
                  <a href="//m.redbus.in" target="_blank">
                    Mobile Version
                  </a>
                  <a href="/info/mobile" target="_blank">
                    redBus on Mobile
                  </a>
                  <a href="/sitemap.html" target="_blank">
                    Sitemap
                  </a>
                  <a href="/info/OfferTerms" target="_blank">
                    Offers
                  </a>
                  <a href="/careers" target="_blank">
                    Careers
                  </a>
                  <a href="/values" target="_blank">
                    Values
                  </a>
                </div>
                <div className="row fl">
                  <div className="dib">Info</div>
                  <a href="/info/termscondition" target="_blank">
                    T &amp; C
                  </a>
                  <a href="/info/privacypolicy" target="_blank">
                    Privacy Policy
                  </a>
                  <a href="/info/faq" target="_blank">
                    FAQ
                  </a>
                  <a href="http://blog.redbus.in/" target="_blank">
                    Blog
                  </a>
                  <a
                    href="https://onboardvendor.redbus.in/"
                    id="busOperatorReg"
                    target="_blank"
                  >
                    Bus Operator Registration
                  </a>
                  <a href="https://in3.seatseller.travel/" target="_blank">
                    Agent Registration
                  </a>
                  <a href="https://www.icicilombard.com/" target="_blank">
                    Insurance Partner
                  </a>
                  <a href="/info/useragreement" target="_blank">
                    User Agreement
                  </a>
                </div>
                <div className="row fl">
                  <div className="dib">Global Sites</div>
                  <a href="https://www.redbus.in" target="_blank">
                    India
                  </a>
                  <a href="https://www.redbus.sg" target="_blank">
                    Singapore
                  </a>
                  <a href="https://www.redbus.my" target="_blank">
                    Malaysia
                  </a>
                  <a href="https://www.redbus.id" target="_blank">
                    Indonesia
                  </a>
                  <a href="https://www.redbus.pe" target="_blank">
                    Peru
                  </a>
                  <a href="https://www.redbus.co" target="_blank">
                    Colombia
                  </a>
                </div>
                <div className="row fl">
                  <div className="dib">Our Partners</div>
                  <a href="https://www.goibibo.com/bus/" target="_blank">
                    Goibibo
                  </a>
                  <a
                    href="https://www.makemytrip.com/bus-tickets/"
                    target="_blank"
                  >
                    Makemytrip
                  </a>
                </div>
              </div>

              <div className="fr rights-cont">
                <div className="img-cont">
                  <img
                    src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png"
                    width="76px"
                    height="48px"
                  />
                </div>
                <div>
                  redBus is the world's largest online bus ticket booking
                  service trusted by over 25 million happy customers globally.
                  redBus offers bus ticket booking through its website,iOS and
                  Android mobile apps for all major routes.
                </div>
                <div id="social-media">
                  <a target="_blank" href="https://www.facebook.com/redbus.in/">
                    <span className="fbicon icon-Facebook"></span>
                  </a>
                  <a target="_blank" href="https://twitter.com/redBus_in">
                    <span className="twittericon icon-Twitter"></span>
                  </a>
                </div>
                <div style={{ float: "left" }}>
                  <span>Ⓒ</span>
                  <span> 2021 ibibogroup All rights reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
