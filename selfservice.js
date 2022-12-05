import{initializeApp as e,getApp as t}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";import{getAuth as o,signInAnonymously as n,onAuthStateChanged as i}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";import{getFirestore as a,doc as l,collection as p,query as r,where as c,limit as s,orderBy as u,getDoc as d,getDocs as v,onSnapshot as $,setDoc as m}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";import h from"https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js";import"https://cdn.jsdelivr.net/npm/autolinker@3.15.0/dist/Autolinker.min.js";import _ from"https://cdn.jsdelivr.net/gh/AtOnceCo/Slider@main/slider.js";import g from"https://cdn.skypack.dev/mime/lite";import{getStorage as f,getDownloadURL as A,ref as x,uploadBytes as O,deleteObject as C}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";async function createAtOnceLiveChat(e,t){try{var o=setInterval(function(){"complete"===document.readyState&&(clearInterval(o),function o(){try{let n=document.getElementById("AtOnceChatContainer"),i=2147483647;try{t&&Number(t.z)&&(i=Number(t.z))}catch(a){}if(n)n.innerHTML="";else{let l=!1;(window.screen.width<=600||window.innerWidth<=600)&&(l=!0),(n=document.createElement("iframe")).title="Self Service",n.id="AtOnceChatContainer",n.allowFullscreen=!0,n.style.border="none",n.style.outline="none",n.style.position="fixed",n.style.bottom=0,n.style.right=0,n.style.width="100px",n.style.height="100px",n.style.maxWidth="450px",n.style.maxHeight=`${l?"1000px":"700px"}`,n.style.zIndex=i,n.style.userSelect="none",n.style.opacity=1,n.style.visibility="visible",document.body.appendChild(n)}createTheAtOnceLiveChat(e,i)}catch(p){}}())},100)}catch(n){}}async function createTheAtOnceLiveChat(y,b){try{let T=`-${E(5)}`,S=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" style="width:24px;height:24px;">
            <path d="M61.8 68.1c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2s-2-.4-2.8-1.1l-26-25c-.8-.8-1.2-1.8-1.2-2.9s.4-2.1 1.2-2.9l26-25c1.6-1.5 4.1-1.5 5.7.1 1.5 1.6 1.5 4.1-.1 5.7L38.8 46l23 22.1z" fill="#333" class="color000000 svgShape"/>
        </svg>
        `,M=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" style="width:24px;height:24px;">
            <path d="M63 46c0 1.1-.4 2.1-1.2 2.9l-26 25C35 74.6 34 75 33 75c-1.1 0-2.1-.4-2.9-1.2-1.5-1.6-1.5-4.1.1-5.7l23-22.1-23-22.1c-1.6-1.5-1.6-4.1-.1-5.7 1.5-1.6 4.1-1.6 5.7-.1l26 25c.8.8 1.2 1.8 1.2 2.9z" fill="#333" class="color000000 svgShape"/>
        </svg>
        `,w=[{alpha2:"US",country:"United States"},{alpha2:"GB",country:"United Kingdom"},{alpha2:"CA",country:"Canada"},{alpha2:"AU",country:"Australia"},{alpha2:"DE",country:"Germany"},{alpha2:"FR",country:"France"},{alpha2:"NL",country:"Netherlands"},{alpha2:"BR",country:"Brazil"},{alpha2:"IN",country:"India"},{alpha2:"IT",country:"Italy"}],P=`
        <option value="AF">Afghanistan</option>
        <option value="AX">\xc5land Islands</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AG">Antigua & Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AC">Ascension Island</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia</option>
        <option value="BA">Bosnia & Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BV">Bouvet Island</option>
        <option value="BR">Brazil</option>
        <option value="IO">British Indian Ocean Territory</option>
        <option value="VG">British Virgin Islands</option>
        <option value="BN">Brunei</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="KH">Cambodia</option>
        <option value="CM">Cameroon</option>
        <option value="CA">Canada</option>
        <option value="CV">Cape Verde</option>
        <option value="BQ">Caribbean Netherlands</option>
        <option value="KY">Cayman Islands</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CX">Christmas Island</option>
        <option value="CC">Cocos (Keeling) Islands</option>
        <option value="CO">Colombia</option>
        <option value="KM">Comoros</option>
        <option value="CG">Congo - Brazzaville</option>
        <option value="CD">Congo - Kinshasa</option>
        <option value="CK">Cook Islands</option>
        <option value="CR">Costa Rica</option>
        <option value="CI">C\xf4te d’Ivoire</option>
        <option value="HR">Croatia</option>
        <option value="CU">Cuba</option>
        <option value="CW">Cura\xe7ao</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czechia</option>
        <option value="DK">Denmark</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egypt</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="EE">Estonia</option>
        <option value="SZ">Eswatini</option>
        <option value="ET">Ethiopia</option>
        <option value="FK">Falkland Islands</option>
        <option value="FO">Faroe Islands</option>
        <option value="FJ">Fiji</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="GF">French Guiana</option>
        <option value="PF">French Polynesia</option>
        <option value="TF">French Southern Territories</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="DE">Germany</option>
        <option value="GH">Ghana</option>
        <option value="GI">Gibraltar</option>
        <option value="GR">Greece</option>
        <option value="GL">Greenland</option>
        <option value="GD">Grenada</option>
        <option value="GP">Guadeloupe</option>
        <option value="GT">Guatemala</option>
        <option value="GG">Guernsey</option>
        <option value="GN">Guinea</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HM">Heard & McDonald Islands</option>
        <option value="HN">Honduras</option>
        <option value="HK">Hong Kong SAR</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran</option>
        <option value="IQ">Iraq</option>
        <option value="IE">Ireland</option>
        <option value="IM">Isle of Man</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japan</option>
        <option value="JE">Jersey</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KE">Kenya</option>
        <option value="KI">Kiribati</option>
        <option value="XK">Kosovo</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Laos</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libya</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MO">Macao SAR</option>
        <option value="MG">Madagascar</option>
        <option value="MW">Malawi</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MQ">Martinique</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="YT">Mayotte</option>
        <option value="MX">Mexico</option>
        <option value="MD">Moldova</option>
        <option value="MC">Monaco</option>
        <option value="MN">Mongolia</option>
        <option value="ME">Montenegro</option>
        <option value="MS">Montserrat</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar (Burma)</option>
        <option value="NA">Namibia</option>
        <option value="NR">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="NL">Netherlands</option>
        <option value="AN">Netherlands Antilles</option>
        <option value="NC">New Caledonia</option>
        <option value="NZ">New Zealand</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="NU">Niue</option>
        <option value="NF">Norfolk Island</option>
        <option value="KP">North Korea</option>
        <option value="MK">North Macedonia</option>
        <option value="NO">Norway</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PS">Palestinian Territories</option>
        <option value="PA">Panama</option>
        <option value="PG">Papua New Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PH">Philippines</option>
        <option value="PN">Pitcairn Islands</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="QA">Qatar</option>
        <option value="RE">R\xe9union</option>
        <option value="RO">Romania</option>
        <option value="RU">Russia</option>
        <option value="RW">Rwanda</option>
        <option value="WS">Samoa</option>
        <option value="SM">San Marino</option>
        <option value="ST">S\xe3o Tom\xe9 & Pr\xedncipe</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SN">Senegal</option>
        <option value="RS">Serbia</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SG">Singapore</option>
        <option value="SX">Sint Maarten</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="SB">Solomon Islands</option>
        <option value="SO">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="GS">South Georgia & South Sandwich Islands</option>
        <option value="KR">South Korea</option>
        <option value="SS">South Sudan</option>
        <option value="ES">Spain</option>
        <option value="LK">Sri Lanka</option>
        <option value="BL">St Barth\xe9lemy</option>
        <option value="SH">St Helena</option>
        <option value="KN">St Kitts & Nevis</option>
        <option value="LC">St Lucia</option>
        <option value="MF">St Martin</option>
        <option value="PM">St Pierre & Miquelon</option>
        <option value="VC">St Vincent & Grenadines</option>
        <option value="SD">Sudan</option>
        <option value="SR">Suriname</option>
        <option value="SJ">Svalbard & Jan Mayen</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="SY">Syria</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TZ">Tanzania</option>
        <option value="TH">Thailand</option>
        <option value="TL">Timor-Leste</option>
        <option value="TG">Togo</option>
        <option value="TK">Tokelau</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad & Tobago</option>
        <option value="TA">Tristan da Cunha</option>
        <option value="TN">Tunisia</option>
        <option value="TR">Turkey</option>
        <option value="TM">Turkmenistan</option>
        <option value="TC">Turks & Caicos Islands</option>
        <option value="TV">Tuvalu</option>
        <option value="UG">Uganda</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
        <option value="UY">Uruguay</option>
        <option value="UM">US Outlying Islands</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VU">Vanuatu</option>
        <option value="VA">Vatican City</option>
        <option value="VE">Venezuela</option>
        <option value="VN">Vietnam</option>
        <option value="WF">Wallis & Futuna</option>
        <option value="EH">Western Sahara</option>
        <option value="YE">Yemen</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
        <option value="ZZ">Unknown Region</option>`,k={AR:`
        <option value='B'>Buenos Aires</option>
        <option value='K'>Catamarca</option>
        <option value='H'>Chaco</option>
        <option value='U'>Chubut</option>
        <option value='C'>Ciudad Aut\xf3noma de Buenos Aires</option>
        <option value='X'>C\xf3rdoba</option>
        <option value='W'>Corrientes</option>
        <option value='E'>Entre R\xedos</option>
        <option value='P'>Formosa</option>
        <option value='Y'>Jujuy</option>
        <option value='L'>La Pampa</option>
        <option value='F'>La Rioja</option>
        <option value='M'>Mendoza</option>
        <option value='N'>Misiones</option>
        <option value='Q'>Neuqu\xe9n</option>
        <option value='R'>R\xedo Negro</option>
        <option value='A'>Salta</option>
        <option value='J'>San Juan</option>
        <option value='D'>San Luis</option>
        <option value='Z'>Santa Cruz</option>
        <option value='S'>Santa Fe</option>
        <option value='G'>Santiago Del Estero</option>
        <option value='V'>Tierra Del Fuego</option>
        <option value='T'>Tucum\xe1n</option>
        `,AU:`
        <option value='ACT'>Australian Capital Territory</option>
        <option value='NSW'>New South Wales</option>
        <option value='NT'>Northern Territory</option>
        <option value='QLD'>Queensland</option>
        <option value='SA'>South Australia</option>
        <option value='TAS'>Tasmania</option>
        <option value='VIC'>Victoria</option>
        <option value='WA'>Western Australia</option>
        `,BR:`
        <option value='AC'>Acre</option>
        <option value='AL'>Alagoas</option>
        <option value='AP'>Amap\xe1</option>
        <option value='AM'>Amazonas</option>
        <option value='BA'>Bahia</option>
        <option value='CE'>Cear\xe1</option>
        <option value='DF'>Distrito Federal</option>
        <option value='ES'>Esp\xedrito Santo</option>
        <option value='GO'>Goi\xe1s</option>
        <option value='MA'>Maranh\xe3o</option>
        <option value='MT'>Mato Grosso</option>
        <option value='MS'>Mato Grosso do Sul</option>
        <option value='MG'>Minas Gerais</option>
        <option value='PA'>Par\xe1</option>
        <option value='PB'>Para\xedba</option>
        <option value='PR'>Paran\xe1</option>
        <option value='PE'>Pernambuco</option>
        <option value='PI'>Piau\xed</option>
        <option value='RJ'>Rio de Janeiro</option>
        <option value='RN'>Rio Grande do Norte</option>
        <option value='RS'>Rio Grande do Sul</option>
        <option value='RO'>Rond\xf4nia</option>
        <option value='RR'>Roraima</option>
        <option value='SC'>Santa Catarina</option>
        <option value='SP'>S\xe3o Paulo</option>
        <option value='SE'>Sergipe</option>
        <option value='TO'>Tocantins</option>
        `,CA:`
        <option value='AB'>Alberta</option>
        <option value='BC'>British Columbia</option>
        <option value='MB'>Manitoba</option>
        <option value='NB'>New Brunswick</option>
        <option value='NL'>Newfoundland and Labrador</option>
        <option value='NT'>Northwest Territories</option>
        <option value='NS'>Nova Scotia</option>
        <option value='NU'>Nunavut</option>
        <option value='ON'>Ontario</option>
        <option value='PE'>Prince Edward Island</option>
        <option value='QC'>Quebec</option>
        <option value='SK'>Saskatchewan</option>
        <option value='YT'>Yukon</option>
        `,CL:`
        <option value='AP'>Arica and Parinacota</option>
        <option value='TA'>Tarapac\xe1</option>
        <option value='AN'>Antofagasta</option>
        <option value='AT'>Atacama</option>
        <option value='CO'>Coquimbo</option>
        <option value='VS'>Valpara\xedso</option>
        <option value='RM'>Santiago</option>
        <option value='LI'>O’Higgins</option>
        <option value='ML'>Maule</option>
        <option value='NB'>\xd1uble</option>
        <option value='BI'>Biob\xedo</option>
        <option value='AR'>Araucan\xeda</option>
        <option value='LR'>Los R\xedos</option>
        <option value='LL'>Los Lagos</option>
        <option value='AI'>Ays\xe9n</option>
        <option value='MA'>Magallanes</option>
        `,CN:`
        <option value='AH'>Anhui</option>
        <option value='BJ'>Beijing</option>
        <option value='CQ'>Chongqing</option>
        <option value='FJ'>Fujian</option>
        <option value='GS'>Gansu</option>
        <option value='GD'>Guangdong</option>
        <option value='GX'>Guangxi</option>
        <option value='GZ'>Guizhou</option>
        <option value='HI'>Hainan</option>
        <option value='HE'>Hebei</option>
        <option value='HL'>Heilongjiang</option>
        <option value='HA'>Henan</option>
        <option value='HB'>Hubei</option>
        <option value='HN'>Hunan</option>
        <option value='NM'>Inner Mongolia</option>
        <option value='JS'>Jiangsu</option>
        <option value='JX'>Jiangxi</option>
        <option value='JL'>Jilin</option>
        <option value='LN'>Liaoning</option>
        <option value='NX'>Ningxia</option>
        <option value='QH'>Qinghai</option>
        <option value='SN'>Shaanxi</option>
        <option value='SD'>Shandong</option>
        <option value='SH'>Shanghai</option>
        <option value='SX'>Shanxi</option>
        <option value='SC'>Sichuan</option>
        <option value='TJ'>Tianjin</option>
        <option value='XJ'>Xinjiang</option>
        <option value='YZ'>Xizang</option>
        <option value='YN'>Yunnan</option>
        <option value='ZJ'>Zhejiang</option>
        `,CO:`
        <option value='AMA'>Amazonas</option>
        <option value='ANT'>Antioquia</option>
        <option value='ARA'>Arauca</option>
        <option value='ATL'>Atl\xe1ntico</option>
        <option value='DC'>Bogot\xe1, D.C.</option>
        <option value='BOL'>Bol\xedvar</option>
        <option value='BOY'>Boyac\xe1</option>
        <option value='CAL'>Caldas</option>
        <option value='CAQ'>Caquet\xe1</option>
        <option value='CAS'>Casanare</option>
        <option value='CAU'>Cauca</option>
        <option value='CES'>Cesar</option>
        <option value='CHO'>Choc\xf3</option>
        <option value='COR'>C\xf3rdoba</option>
        <option value='CUN'>Cundinamarca</option>
        <option value='GUA'>Guain\xeda</option>
        <option value='GUV'>Guaviare</option>
        <option value='HUI'>Huila</option>
        <option value='LAG'>La Guajira</option>
        <option value='MAG'>Magdalena</option>
        <option value='MET'>Meta</option>
        <option value='NAR'>Nari\xf1o</option>
        <option value='NSA'>Norte de Santander</option>
        <option value='PUT'>Putumayo</option>
        <option value='QUI'>Quind\xedo</option>
        <option value='RIS'>Risaralda</option>
        <option value='SAP'>San Andr\xe9s, Providencia y Santa Catalina</option>
        <option value='SAN'>Santander</option>
        <option value='SUC'>Sucre</option>
        <option value='TOL'>Tolima</option>
        <option value='VAC'>Valle del Cauca</option>
        <option value='VAU'>Vaup\xe9s</option>
        <option value='VID'>Vichada</option>
        `,EG:`<option value='SU'>6th of October</option>
        <option value='SHR'>Al Sharqia</option>
        <option value='ALX'>Alexandria</option>
        <option value='ASN'>Aswan</option>
        <option value='AST'>Asyut</option>
        <option value='BH'>Beheira</option>
        <option value='BNS'>Beni Suef</option>
        <option value='C'>Cairo</option>
        <option value='DK'>Dakahlia</option>
        <option value='DT'>Damietta</option>
        <option value='FYM'>Faiyum</option>
        <option value='GH'>Gharbia</option>
        <option value='GZ'>Giza</option>
        <option value='HU'>Helwan</option>
        <option value='IS'>Ismailia</option>
        <option value='KFS'>Kafr el-Sheikh</option>
        <option value='LX'>Luxor</option>
        <option value='MT'>Matrouh</option>
        <option value='MN'>Minya</option>
        <option value='MNF'>Monufia</option>
        <option value='WAD'>New Valley</option>
        <option value='SIN'>North Sinai</option>
        <option value='PTS'>Port Said</option>
        <option value='KB'>Qalyubia</option>
        <option value='KN'>Qena</option>
        <option value='BA'>Red Sea</option>
        <option value='SHG'>Sohag</option>
        <option value='JS'>South Sinai</option>
        <option value='SUZ'>Suez</option>    
        `,GT:`
        <option value='AVE'>Alta Verapaz</option>
        <option value='BVE'>Baja Verapaz</option>
        <option value='CMT'>Chimaltenango</option>
        <option value='CQM'>Chiquimula</option>
        <option value='EPR'>El Progreso</option>
        <option value='ESC'>Escuintla</option>
        <option value='GUA'>Guatemala</option>
        <option value='HUE'>Huehuetenango</option>
        <option value='IZA'>Izabal</option>
        <option value='JAL'>Jalapa</option>
        <option value='JUT'>Jutiapa</option>
        <option value='PET'>Pet\xe9n</option>
        <option value='QUE'>Quetzaltenango</option>
        <option value='QUI'>Quich\xe9</option>
        <option value='RET'>Retalhuleu</option>
        <option value='SAC'>Sacatep\xe9quez</option>
        <option value='SMA'>San Marcos</option>
        <option value='SRO'>Santa Rosa</option>
        <option value='SOL'>Solol\xe1</option>
        <option value='SUC'>Suchitep\xe9quez</option>
        <option value='TOT'>Totonicap\xe1n</option>
        <option value='ZAC'>Zacapa</option>
        `,HK:`
        <option value='HK'>Hong Kong Island</option>
        <option value='KL'>Kowloon</option>
        <option value='NT'>New Territories</option>
        `,IN:`
        <option value='AN'>Andaman and Nicobar Islands</option>
        <option value='AP'>Andhra Pradesh</option>
        <option value='AR'>Arunachal Pradesh</option>
        <option value='AS'>Assam</option>
        <option value='BR'>Bihar</option>
        <option value='CH'>Chandigarh</option>
        <option value='CG'>Chhattisgarh</option>
        <option value='DN'>Dadra and Nagar Haveli</option>
        <option value='DD'>Daman and Diu</option>
        <option value='DL'>Delhi</option>
        <option value='GA'>Goa</option>
        <option value='GJ'>Gujarat</option>
        <option value='HR'>Haryana</option>
        <option value='HP'>Himachal Pradesh</option>
        <option value='JK'>Jammu and Kashmir</option>
        <option value='JH'>Jharkhand</option>
        <option value='KA'>Karnataka</option>
        <option value='KL'>Kerala</option>
        <option value='LA'>Ladakh</option>
        <option value='LD'>Lakshadweep</option>
        <option value='MP'>Madhya Pradesh</option>
        <option value='MH'>Maharashtra</option>
        <option value='MN'>Manipur</option>
        <option value='ML'>Meghalaya</option>
        <option value='MZ'>Mizoram</option>
        <option value='NL'>Nagaland</option>
        <option value='OR'>Odisha</option>
        <option value='PY'>Puducherry</option>
        <option value='PB'>Punjab</option>
        <option value='RJ'>Rajasthan</option>
        <option value='SK'>Sikkim</option>
        <option value='TN'>Tamil Nadu</option>
        <option value='TS'>Telangana</option>
        <option value='TR'>Tripura</option>
        <option value='UP'>Uttar Pradesh</option>
        <option value='UK'>Uttarakhand</option>
        <option value='WB'>West Bengal</option>
        `,ID:`
        <option value='AC'>Aceh</option>
        <option value='BA'>Bali</option>
        <option value='BB'>Bangka Belitung</option>
        <option value='BT'>Banten</option>
        <option value='BE'>Bengkulu</option>
        <option value='GO'>Gorontalo</option>
        <option value='JK'>Jakarta</option>
        <option value='JA'>Jambi</option>
        <option value='JB'>Jawa Barat</option>
        <option value='JT'>Jawa Tengah</option>
        <option value='JI'>Jawa Timur</option>
        <option value='KB'>Kalimantan Barat</option>
        <option value='KS'>Kalimantan Selatan</option>
        <option value='KT'>Kalimantan Tengah</option>
        <option value='KI'>Kalimantan Timur</option>
        <option value='KU'>Kalimantan Utara</option>
        <option value='KR'>Kepulauan Riau</option>
        <option value='LA'>Lampung</option>
        <option value='MA'>Maluku</option>
        <option value='MU'>Maluku Utara</option>
        <option value='SU'>North Sumatra</option>
        <option value='NB'>Nusa Tenggara Barat</option>
        <option value='NT'>Nusa Tenggara Timur</option>
        <option value='PA'>Papua</option>
        <option value='PB'>Papua Barat</option>
        <option value='RI'>Riau</option>
        <option value='SS'>South Sumatra</option>
        <option value='SR'>Sulawesi Barat</option>
        <option value='SN'>Sulawesi Selatan</option>
        <option value='ST'>Sulawesi Tengah</option>
        <option value='SG'>Sulawesi Tenggara</option>
        <option value='SA'>Sulawesi Utara</option>
        <option value='SB'>West Sumatra</option>
        <option value='YO'>Yogyakarta</option>
        `,IE:`<option value='CW'>Carlow</option>
        <option value='CN'>Cavan</option>
        <option value='CE'>Clare</option>
        <option value='CO'>Cork</option>
        <option value='DL'>Donegal</option>
        <option value='D'>Dublin</option>
        <option value='G'>Galway</option>
        <option value='KY'>Kerry</option>
        <option value='KE'>Kildare</option>
        <option value='KK'>Kilkenny</option>
        <option value='LS'>Laois</option>
        <option value='LM'>Leitrim</option>
        <option value='LK'>Limerick</option>
        <option value='LD'>Longford</option>
        <option value='LH'>Louth</option>
        <option value='MO'>Mayo</option>
        <option value='MH'>Meath</option>
        <option value='MN'>Monaghan</option>
        <option value='OY'>Offaly</option>
        <option value='RN'>Roscommon</option>
        <option value='SO'>Sligo</option>
        <option value='TA'>Tipperary</option>
        <option value='WD'>Waterford</option>
        <option value='WH'>Westmeath</option>
        <option value='WX'>Wexford</option>
        <option value='WW'>Wicklow</option>    
        `,IT:`
        <option value='AG'>Agrigento</option>
        <option value='AL'>Alessandria</option>
        <option value='AN'>Ancona</option>
        <option value='AO'>Aosta</option>
        <option value='AR'>Arezzo</option>
        <option value='AP'>Ascoli Piceno</option>
        <option value='AT'>Asti</option>
        <option value='AV'>Avellino</option>
        <option value='BA'>Bari</option>
        <option value='BT'>Barletta-Andria-Trani</option>
        <option value='BL'>Belluno</option>
        <option value='BN'>Benevento</option>
        <option value='BG'>Bergamo</option>
        <option value='BI'>Biella</option>
        <option value='BO'>Bologna</option>
        <option value='BZ'>Bolzano</option>
        <option value='BS'>Brescia</option>
        <option value='BR'>Brindisi</option>
        <option value='CA'>Cagliari</option>
        <option value='CL'>Caltanissetta</option>
        <option value='CB'>Campobasso</option>
        <option value='CI'>Carbonia-Iglesias</option>
        <option value='CE'>Caserta</option>
        <option value='CT'>Catania</option>
        <option value='CZ'>Catanzaro</option>
        <option value='CH'>Chieti</option>
        <option value='CO'>Como</option>
        <option value='CS'>Cosenza</option>
        <option value='CR'>Cremona</option>
        <option value='KR'>Crotone</option>
        <option value='CN'>Cuneo</option>
        <option value='EN'>Enna</option>
        <option value='FM'>Fermo</option>
        <option value='FE'>Ferrara</option>
        <option value='FI'>Firenze</option>
        <option value='FG'>Foggia</option>
        <option value='FC'>Forl\xec-Cesena</option>
        <option value='FR'>Frosinone</option>
        <option value='GE'>Genova</option>
        <option value='GO'>Gorizia</option>
        <option value='GR'>Grosseto</option>
        <option value='IM'>Imperia</option>
        <option value='IS'>Isernia</option>
        <option value='AQ'>L’Aquila</option>
        <option value='SP'>La Spezia</option>
        <option value='LT'>Latina</option>
        <option value='LE'>Lecce</option>
        <option value='LC'>Lecco</option>
        <option value='LI'>Livorno</option>
        <option value='LO'>Lodi</option>
        <option value='LU'>Lucca</option>
        <option value='MC'>Macerata</option>
        <option value='MN'>Mantova</option>
        <option value='MS'>Massa-Carrara</option>
        <option value='MT'>Matera</option>
        <option value='VS'>Medio Campidano</option>
        <option value='ME'>Messina</option>
        <option value='MI'>Milano</option>
        <option value='MO'>Modena</option>
        <option value='MB'>Monza e Brianza</option>
        <option value='NA'>Napoli</option>
        <option value='NO'>Novara</option>
        <option value='NU'>Nuoro</option>
        <option value='OG'>Ogliastra</option>
        <option value='OT'>Olbia-Tempio</option>
        <option value='OR'>Oristano</option>
        <option value='PD'>Padova</option>
        <option value='PA'>Palermo</option>
        <option value='PR'>Parma</option>
        <option value='PV'>Pavia</option>
        <option value='PG'>Perugia</option>
        <option value='PU'>Pesaro e Urbino</option>
        <option value='PE'>Pescara</option>
        <option value='PC'>Piacenza</option>
        <option value='PI'>Pisa</option>
        <option value='PT'>Pistoia</option>
        <option value='PN'>Pordenone</option>
        <option value='PZ'>Potenza</option>
        <option value='PO'>Prato</option>
        <option value='RG'>Ragusa</option>
        <option value='RA'>Ravenna</option>
        <option value='RC'>Reggio Calabria</option>
        <option value='RE'>Reggio Emilia</option>
        <option value='RI'>Rieti</option>
        <option value='RN'>Rimini</option>
        <option value='RM'>Roma</option>
        <option value='RO'>Rovigo</option>
        <option value='SA'>Salerno</option>
        <option value='SS'>Sassari</option>
        <option value='SV'>Savona</option>
        <option value='SI'>Siena</option>
        <option value='SR'>Siracusa</option>
        <option value='SO'>Sondrio</option>
        <option value='TA'>Taranto</option>
        <option value='TE'>Teramo</option>
        <option value='TR'>Terni</option>
        <option value='TO'>Torino</option>
        <option value='TP'>Trapani</option>
        <option value='TN'>Trento</option>
        <option value='TV'>Treviso</option>
        <option value='TS'>Trieste</option>
        <option value='UD'>Udine</option>
        <option value='VA'>Varese</option>
        <option value='VE'>Venezia</option>
        <option value='VB'>Verbano-Cusio-Ossola</option>
        <option value='VC'>Vercelli</option>
        <option value='VR'>Verona</option>
        <option value='VV'>Vibo Valentia</option>
        <option value='VI'>Vicenza</option>
        <option value='VT'>Viterbo</option>
        `,JP:`
        <option value='JP-01'>Hokkaidō</option>
        <option value='JP-02'>Aomori</option>
        <option value='JP-03'>Iwate</option>
        <option value='JP-04'>Miyagi</option>
        <option value='JP-05'>Akita</option>
        <option value='JP-06'>Yamagata</option>
        <option value='JP-07'>Fukushima</option>
        <option value='JP-08'>Ibaraki</option>
        <option value='JP-09'>Tochigi</option>
        <option value='JP-10'>Gunma</option>
        <option value='JP-11'>Saitama</option>
        <option value='JP-12'>Chiba</option>
        <option value='JP-13'>Tōkyō</option>
        <option value='JP-14'>Kanagawa</option>
        <option value='JP-15'>Niigata</option>
        <option value='JP-16'>Toyama</option>
        <option value='JP-17'>Ishikawa</option>
        <option value='JP-18'>Fukui</option>
        <option value='JP-19'>Yamanashi</option>
        <option value='JP-20'>Nagano</option>
        <option value='JP-21'>Gifu</option>
        <option value='JP-22'>Shizuoka</option>
        <option value='JP-23'>Aichi</option>
        <option value='JP-24'>Mie</option>
        <option value='JP-25'>Shiga</option>
        <option value='JP-26'>Kyōto</option>
        <option value='JP-27'>Ōsaka</option>
        <option value='JP-28'>Hyōgo</option>
        <option value='JP-29'>Nara</option>
        <option value='JP-30'>Wakayama</option>
        <option value='JP-31'>Tottori</option>
        <option value='JP-32'>Shimane</option>
        <option value='JP-33'>Okayama</option>
        <option value='JP-34'>Hiroshima</option>
        <option value='JP-35'>Yamaguchi</option>
        <option value='JP-36'>Tokushima</option>
        <option value='JP-37'>Kagawa</option>
        <option value='JP-38'>Ehime</option>
        <option value='JP-39'>Kōchi</option>
        <option value='JP-40'>Fukuoka</option>
        <option value='JP-41'>Saga</option>
        <option value='JP-42'>Nagasaki</option>
        <option value='JP-43'>Kumamoto</option>
        <option value='JP-44'>Ōita</option>
        <option value='JP-45'>Miyazaki</option>
        <option value='JP-46'>Kagoshima</option>
        <option value='JP-47'>Okinawa</option>
        `,MY:`<option value='JHR'>Johor</option>
        <option value='KDH'>Kedah</option>
        <option value='KTN'>Kelantan</option>
        <option value='KUL'>Kuala Lumpur</option>
        <option value='LBN'>Labuan</option>
        <option value='MLK'>Melaka</option>
        <option value='NSN'>Negeri Sembilan</option>
        <option value='PHG'>Pahang</option>
        <option value='PNG'>Penang</option>
        <option value='PRK'>Perak</option>
        <option value='PLS'>Perlis</option>
        <option value='PJY'>Putrajaya</option>
        <option value='SBH'>Sabah</option>
        <option value='SWK'>Sarawak</option>
        <option value='SGR'>Selangor</option>
        <option value='TRG'>Terengganu</option>
        `,MX:`
        <option value='AGS'>Aguascalientes</option>
        <option value='BC'>Baja California</option>
        <option value='BCS'>Baja California Sur</option>
        <option value='CAMP'>Campeche</option>
        <option value='CHIS'>Chiapas</option>
        <option value='CHIH'>Chihuahua</option>
        <option value='DF'>Ciudad de M\xe9xico</option>
        <option value='COAH'>Coahuila</option>
        <option value='COL'>Colima</option>
        <option value='DGO'>Durango</option>
        <option value='GTO'>Guanajuato</option>
        <option value='GRO'>Guerrero</option>
        <option value='HGO'>Hidalgo</option>
        <option value='JAL'>Jalisco</option>
        <option value='MEX'>M\xe9xico</option>
        <option value='MICH'>Michoac\xe1n</option>
        <option value='MOR'>Morelos</option>
        <option value='NAY'>Nayarit</option>
        <option value='NL'>Nuevo Le\xf3n</option>
        <option value='OAX'>Oaxaca</option>
        <option value='PUE'>Puebla</option>
        <option value='QRO'>Quer\xe9taro</option>
        <option value='Q ROO'>Quintana Roo</option>
        <option value='SLP'>San Luis Potos\xed</option>
        <option value='SIN'>Sinaloa</option>
        <option value='SON'>Sonora</option>
        <option value='TAB'>Tabasco</option>
        <option value='TAMPS'>Tamaulipas</option>
        <option value='TLAX'>Tlaxcala</option>
        <option value='VER'>Veracruz</option>
        <option value='YUC'>Yucat\xe1n</option>
        <option value='ZAC'>Zacatecas</option>
        `,NZ:`
        <option value='AUK'>Auckland</option>
        <option value='BOP'>Bay of Plenty</option>
        <option value='CAN'>Canterbury</option>
        <option value='CIT'>Chatham Islands</option>
        <option value='GIS'>Gisborne</option>
        <option value='HKB'>Hawke’s Bay</option>
        <option value='MWT'>Manawatu-Wanganui</option>
        <option value='MBH'>Marlborough</option>
        <option value='NSN'>Nelson</option>
        <option value='NTL'>Northland</option>
        <option value='OTA'>Otago</option>
        <option value='STL'>Southland</option>
        <option value='TKI'>Taranaki</option>
        <option value='TAS'>Tasman</option>
        <option value='WKO'>Waikato</option>
        <option value='WGN'>Wellington</option>
        <option value='WTC'>West Coast</option>
        `,NG:`
        <option value='AB'>Abia</option>
        <option value='FC'>Abuja Federal Capital Territory</option>
        <option value='AD'>Adamawa</option>
        <option value='AK'>Akwa Ibom</option>
        <option value='AN'>Anambra</option>
        <option value='BA'>Bauchi</option>
        <option value='BY'>Bayelsa</option>
        <option value='BE'>Benue</option>
        <option value='BO'>Borno</option>
        <option value='CR'>Cross River</option>
        <option value='DE'>Delta</option>
        <option value='EB'>Ebonyi</option>
        <option value='ED'>Edo</option>
        <option value='EK'>Ekiti</option>
        <option value='EN'>Enugu</option>
        <option value='GO'>Gombe</option>
        <option value='IM'>Imo</option>
        <option value='JI'>Jigawa</option>
        <option value='KD'>Kaduna</option>
        <option value='KN'>Kano</option>
        <option value='KT'>Katsina</option>
        <option value='KE'>Kebbi</option>
        <option value='KO'>Kogi</option>
        <option value='KW'>Kwara</option>
        <option value='LA'>Lagos</option>
        <option value='NA'>Nasarawa</option>
        <option value='NI'>Niger</option>
        <option value='OG'>Ogun</option>
        <option value='ON'>Ondo</option>
        <option value='OS'>Osun</option>
        <option value='OY'>Oyo</option>
        <option value='PL'>Plateau</option>
        <option value='RI'>Rivers</option>
        <option value='SO'>Sokoto</option>
        <option value='TA'>Taraba</option>
        <option value='YO'>Yobe</option>
        <option value='ZA'>Zamfara</option>
        `,PA:`
        <option value='PA-1'>Bocas del Toro</option>
        <option value='PA-4'>Chiriqu\xed</option>
        <option value='PA-2'>Cocl\xe9</option>
        <option value='PA-3'>Col\xf3n</option>
        <option value='PA-5'>Dari\xe9n</option>
        <option value='PA-EM'>Ember\xe1</option>
        <option value='PA-6'>Herrera</option>
        <option value='PA-KY'>Kuna Yala</option>
        <option value='PA-7'>Los Santos</option>
        <option value='PA-NB'>Ng\xf6be-Bugl\xe9</option>
        <option value='PA-8'>Panam\xe1</option>
        <option value='PA-10'>Panam\xe1 Oeste</option>
        <option value='PA-9'>Veraguas</option>
        `,PE:`<option value='PE-AMA'>Amazonas</option>
        <option value='PE-ANC'>\xc1ncash</option>
        <option value='PE-APU'>Apur\xedmac</option>
        <option value='PE-ARE'>Arequipa</option>
        <option value='PE-AYA'>Ayacucho</option>
        <option value='PE-CAJ'>Cajamarca</option>
        <option value='PE-CAL'>Callao</option>
        <option value='PE-CUS'>Cuzco</option>
        <option value='PE-HUV'>Huancavelica</option>
        <option value='PE-HUC'>Hu\xe1nuco</option>
        <option value='PE-ICA'>Ica</option>
        <option value='PE-JUN'>Jun\xedn</option>
        <option value='PE-LAL'>La Libertad</option>
        <option value='PE-LAM'>Lambayeque</option>
        <option value='PE-LIM'>Lima (departamento)</option>
        <option value='PE-LMA'>Lima (provincia)</option>
        <option value='PE-LOR'>Loreto</option>
        <option value='PE-MDD'>Madre de Dios</option>
        <option value='PE-MOQ'>Moquegua</option>
        <option value='PE-PAS'>Pasco</option>
        <option value='PE-PIU'>Piura</option>
        <option value='PE-PUN'>Puno</option>
        <option value='PE-SAM'>San Mart\xedn</option>
        <option value='PE-TAC'>Tacna</option>
        <option value='PE-TUM'>Tumbes</option>
        <option value='PE-UCA'>Ucayali</option>
        `,PH:`
        <option value='PH-ABR'>Abra</option>
        <option value='PH-AGN'>Agusan del Norte</option>
        <option value='PH-AGS'>Agusan del Sur</option>
        <option value='PH-AKL'>Aklan</option>
        <option value='PH-ALB'>Albay</option>
        <option value='PH-ANT'>Antique</option>
        <option value='PH-APA'>Apayao</option>
        <option value='PH-AUR'>Aurora</option>
        <option value='PH-BAS'>Basilan</option>
        <option value='PH-BAN'>Bataan</option>
        <option value='PH-BTN'>Batanes</option>
        <option value='PH-BTG'>Batangas</option>
        <option value='PH-BEN'>Benguet</option>
        <option value='PH-BIL'>Biliran</option>
        <option value='PH-BOH'>Bohol</option>
        <option value='PH-BUK'>Bukidnon</option>
        <option value='PH-BUL'>Bulacan</option>
        <option value='PH-CAG'>Cagayan</option>
        <option value='PH-CAN'>Camarines Norte</option>
        <option value='PH-CAS'>Camarines Sur</option>
        <option value='PH-CAM'>Camiguin</option>
        <option value='PH-CAP'>Capiz</option>
        <option value='PH-CAT'>Catanduanes</option>
        <option value='PH-CAV'>Cavite</option>
        <option value='PH-CEB'>Cebu</option>
        <option value='PH-NCO'>Cotabato</option>
        <option value='PH-COM'>Davao de Oro</option>
        <option value='PH-DAV'>Davao del Norte</option>
        <option value='PH-DAS'>Davao del Sur</option>
        <option value='PH-DVO'>Davao Occidental</option>
        <option value='PH-DAO'>Davao Oriental</option>
        <option value='PH-DIN'>Dinagat Islands</option>
        <option value='PH-EAS'>Eastern Samar</option>
        <option value='PH-GUI'>Guimaras</option>
        <option value='PH-IFU'>Ifugao</option>
        <option value='PH-ILN'>Ilocos Norte</option>
        <option value='PH-ILS'>Ilocos Sur</option>
        <option value='PH-ILI'>Iloilo</option>
        <option value='PH-ISA'>Isabela</option>
        <option value='PH-KAL'>Kalinga</option>
        <option value='PH-LUN'>La Union</option>
        <option value='PH-LAG'>Laguna</option>
        <option value='PH-LAN'>Lanao del Norte</option>
        <option value='PH-LAS'>Lanao del Sur</option>
        <option value='PH-LEY'>Leyte</option>
        <option value='PH-MAG'>Maguindanao</option>
        <option value='PH-MAD'>Marinduque</option>
        <option value='PH-MAS'>Masbate</option>
        <option value='PH-00'>Metro Manila</option>
        <option value='PH-MSC'>Misamis Occidental</option>
        <option value='PH-MSR'>Misamis Oriental</option>
        <option value='PH-MOU'>Mountain Province</option>
        <option value='PH-NEC'>Negros Occidental</option>
        <option value='PH-NER'>Negros Oriental</option>
        <option value='PH-NSA'>Northern Samar</option>
        <option value='PH-NUE'>Nueva Ecija</option>
        <option value='PH-NUV'>Nueva Vizcaya</option>
        <option value='PH-MDC'>Occidental Mindoro</option>
        <option value='PH-MDR'>Oriental Mindoro</option>
        <option value='PH-PLW'>Palawan</option>
        <option value='PH-PAM'>Pampanga</option>
        <option value='PH-PAN'>Pangasinan</option>
        <option value='PH-QUE'>Quezon</option>
        <option value='PH-QUI'>Quirino</option>
        <option value='PH-RIZ'>Rizal</option>
        <option value='PH-ROM'>Romblon</option>
        <option value='PH-WSA'>Samar</option>
        <option value='PH-SAR'>Sarangani</option>
        <option value='PH-SIG'>Siquijor</option>
        <option value='PH-SOR'>Sorsogon</option>
        <option value='PH-SCO'>South Cotabato</option>
        <option value='PH-SLE'>Southern Leyte</option>
        <option value='PH-SUK'>Sultan Kudarat</option>
        <option value='PH-SLU'>Sulu</option>
        <option value='PH-SUN'>Surigao del Norte</option>
        <option value='PH-SUR'>Surigao del Sur</option>
        <option value='PH-TAR'>Tarlac</option>
        <option value='PH-TAW'>Tawi-Tawi</option>
        <option value='PH-ZMB'>Zambales</option>
        <option value='PH-ZAN'>Zamboanga del Norte</option>
        <option value='PH-ZAS'>Zamboanga del Sur</option>
        <option value='PH-ZSI'>Zamboanga Sibugay</option>
        `,PT:`
        <option value='PT-20'>A\xe7ores</option>
        <option value='PT-01'>Aveiro</option>
        <option value='PT-02'>Beja</option>
        <option value='PT-03'>Braga</option>
        <option value='PT-04'>Bragan\xe7a</option>
        <option value='PT-05'>Castelo Branco</option>
        <option value='PT-06'>Coimbra</option>
        <option value='PT-07'>\xc9vora</option>
        <option value='PT-08'>Faro</option>
        <option value='PT-09'>Guarda</option>
        <option value='PT-10'>Leiria</option>
        <option value='PT-11'>Lisboa</option>
        <option value='PT-30'>Madeira</option>
        <option value='PT-12'>Portalegre</option>
        <option value='PT-13'>Porto</option>
        <option value='PT-14'>Santar\xe9m</option>
        <option value='PT-15'>Set\xfabal</option>
        <option value='PT-16'>Viana do Castelo</option>
        <option value='PT-17'>Vila Real</option>
        <option value='PT-18'>Viseu</option>
        `,RO:`
        <option value='AB'>Alba</option>
        <option value='AR'>Arad</option>
        <option value='AG'>Argeș</option>
        <option value='BC'>Bacău</option>
        <option value='BH'>Bihor</option>
        <option value='BN'>Bistrița-Năsăud</option>
        <option value='BT'>Botoșani</option>
        <option value='BV'>Brașov</option>
        <option value='BR'>Brăila</option>
        <option value='B'>București</option>
        <option value='BZ'>Buzău</option>
        <option value='CL'>Călărași</option>
        <option value='CS'>Caraș-Severin</option>
        <option value='CJ'>Cluj</option>
        <option value='CT'>Constanța</option>
        <option value='CV'>Covasna</option>
        <option value='DB'>D\xe2mbovița</option>
        <option value='DJ'>Dolj</option>
        <option value='GL'>Galați</option>
        <option value='GR'>Giurgiu</option>
        <option value='GJ'>Gorj</option>
        <option value='HR'>Harghita</option>
        <option value='HD'>Hunedoara</option>
        <option value='IS'>Iași</option>
        <option value='IL'>Ialomița</option>
        <option value='IF'>Ilfov</option>
        <option value='MM'>Maramureș</option>
        <option value='MH'>Mehedinți</option>
        <option value='MS'>Mureș</option>
        <option value='NT'>Neamț</option>
        <option value='OT'>Olt</option>
        <option value='PH'>Prahova</option>
        <option value='SJ'>Sălaj</option>
        <option value='SM'>Satu Mare</option>
        <option value='SB'>Sibiu</option>
        <option value='SV'>Suceava</option>
        <option value='TR'>Teleorman</option>
        <option value='TM'>Timiș</option>
        <option value='TL'>Tulcea</option>
        <option value='VL'>V\xe2lcea</option>
        <option value='VS'>Vaslui</option>
        <option value='VN'>Vrancea</option>
        `,RU:`<option value='AD'>Republic of Adygeya</option>
        <option value='AL'>Altai Republic</option>
        <option value='ALT'>Altai Krai</option>
        <option value='AMU'>Amur Oblast</option>
        <option value='ARK'>Arkhangelsk Oblast</option>
        <option value='AST'>Astrakhan Oblast</option>
        <option value='BA'>Republic of Bashkortostan</option>
        <option value='BEL'>Belgorod Oblast</option>
        <option value='BRY'>Bryansk Oblast</option>
        <option value='BU'>Republic of Buryatia</option>
        <option value='CE'>Chechen Republic</option>
        <option value='CHE'>Chelyabinsk Oblast</option>
        <option value='CHU'>Chukotka Autonomous Okrug</option>
        <option value='CU'>Chuvash Republic</option>
        <option value='DA'>Republic of Dagestan</option>
        <option value='IN'>Republic of Ingushetia</option>
        <option value='IRK'>Irkutsk Oblast</option>
        <option value='IVA'>Ivanovo Oblast</option>
        <option value='YEV'>Jewish Autonomous Oblast</option>
        <option value='KB'>Kabardino-Balkarian Republic</option>
        <option value='KGD'>Kaliningrad Oblast</option>
        <option value='KL'>Republic of Kalmykia</option>
        <option value='KLU'>Kaluga Oblast</option>
        <option value='KAM'>Kamchatka Krai</option>
        <option value='KC'>Karachay–Cherkess Republic</option>
        <option value='KR'>Republic of Karelia</option>
        <option value='KEM'>Kemerovo Oblast</option>
        <option value='KHA'>Khabarovsk Krai</option>
        <option value='KK'>Republic of Khakassia</option>
        <option value='KHM'>Khanty-Mansi Autonomous Okrug</option>
        <option value='KIR'>Kirov Oblast</option>
        <option value='KO'>Komi Republic</option>
        <option value='KOS'>Kostroma Oblast</option>
        <option value='KDA'>Krasnodar Krai</option>
        <option value='KYA'>Krasnoyarsk Krai</option>
        <option value='KGN'>Kurgan Oblast</option>
        <option value='KRS'>Kursk Oblast</option>
        <option value='LEN'>Leningrad Oblast</option>
        <option value='LIP'>Lipetsk Oblast</option>
        <option value='MAG'>Magadan Oblast</option>
        <option value='ME'>Mari El Republic</option>
        <option value='MO'>Republic of Mordovia</option>
        <option value='MOW'>Moscow</option>
        <option value='MOS'>Moscow Oblast</option>
        <option value='MUR'>Murmansk Oblast</option>
        <option value='NIZ'>Nizhny Novgorod Oblast</option>
        <option value='NGR'>Novgorod Oblast</option>
        <option value='NVS'>Novosibirsk Oblast</option>
        <option value='OMS'>Omsk Oblast</option>
        <option value='ORE'>Orenburg Oblast</option>
        <option value='ORL'>Oryol Oblast</option>
        <option value='PNZ'>Penza Oblast</option>
        <option value='PER'>Perm Krai</option>
        <option value='PRI'>Primorsky Krai</option>
        <option value='PSK'>Pskov Oblast</option>
        <option value='ROS'>Rostov Oblast</option>
        <option value='RYA'>Ryazan Oblast</option>
        <option value='SPE'>Saint Petersburg</option>
        <option value='SA'>Sakha Republic (Yakutia)</option>
        <option value='SAK'>Sakhalin Oblast</option>
        <option value='SAM'>Samara Oblast</option>
        <option value='SAR'>Saratov Oblast</option>
        <option value='SE'>Republic of North Ossetia–Alania</option>
        <option value='SMO'>Smolensk Oblast</option>
        <option value='STA'>Stavropol Krai</option>
        <option value='SVE'>Sverdlovsk Oblast</option>
        <option value='TAM'>Tambov Oblast</option>
        <option value='TA'>Republic of Tatarstan</option>
        <option value='TOM'>Tomsk Oblast</option>
        <option value='TUL'>Tula Oblast</option>
        <option value='TVE'>Tver Oblast</option>
        <option value='TYU'>Tyumen Oblast</option>
        <option value='TY'>Tyva Republic</option>
        <option value='UD'>Udmurtia</option>
        <option value='ULY'>Ulyanovsk Oblast</option>
        <option value='VLA'>Vladimir Oblast</option>
        <option value='VGG'>Volgograd Oblast</option>
        <option value='VLG'>Vologda Oblast</option>
        <option value='VOR'>Voronezh Oblast</option>
        <option value='YAN'>Yamalo-Nenets Autonomous Okrug</option>
        <option value='YAR'>Yaroslavl Oblast</option>
        <option value='ZAB'>Zabaykalsky Krai</option>
        `,SA:`
        <option value='EC'>Eastern Cape</option>
        <option value='FS'>Free State</option>
        <option value='GT'>Gauteng</option>
        <option value='NL'>KwaZulu-Natal</option>
        <option value='LP'>Limpopo</option>
        <option value='MP'>Mpumalanga</option>
        <option value='NW'>North West</option>
        <option value='NC'>Northern Cape</option>
        <option value='WC'>Western Cape</option>
        `,KR:`
        <option value='KR-26'>Busan</option>
        <option value='KR-43'>Chungbuk</option>
        <option value='KR-44'>Chungnam</option>
        <option value='KR-27'>Daegu</option>
        <option value='KR-30'>Daejeon</option>
        <option value='KR-42'>Gangwon</option>
        <option value='KR-29'>Gwangju</option>
        <option value='KR-47'>Gyeongbuk</option>
        <option value='KR-41'>Gyeonggi</option>
        <option value='KR-48'>Gyeongnam</option>
        <option value='KR-28'>Incheon</option>
        <option value='KR-49'>Jeju</option>
        <option value='KR-45'>Jeonbuk</option>
        <option value='KR-46'>Jeonnam</option>
        <option value='KR-50'>Sejong</option>
        <option value='KR-11'>Seoul</option>
        <option value='KR-31'>Ulsan</option>
        `,ES:`
        <option value='C'>A Coru\xf1a</option>
        <option value='VI'>\xc1lava</option>
        <option value='AB'>Albacete</option>
        <option value='A'>Alicante</option>
        <option value='AL'>Almer\xeda</option>
        <option value='O'>Asturias</option>
        <option value='AV'>\xc1vila</option>
        <option value='BA'>Badajoz</option>
        <option value='PM'>Balears</option>
        <option value='B'>Barcelona</option>
        <option value='BU'>Burgos</option>
        <option value='CC'>C\xe1ceres</option>
        <option value='CA'>C\xe1diz</option>
        <option value='S'>Cantabria</option>
        <option value='CS'>Castell\xf3n</option>
        <option value='CE'>Ceuta</option>
        <option value='CR'>Ciudad Real</option>
        <option value='CO'>C\xf3rdoba</option>
        <option value='CU'>Cuenca</option>
        <option value='GI'>Girona</option>
        <option value='GR'>Granada</option>
        <option value='GU'>Guadalajara</option>
        <option value='SS'>Guip\xfazcoa</option>
        <option value='H'>Huelva</option>
        <option value='HU'>Huesca</option>
        <option value='J'>Ja\xe9n</option>
        <option value='LO'>La Rioja</option>
        <option value='GC'>Las Palmas</option>
        <option value='LE'>Le\xf3n</option>
        <option value='L'>Lleida</option>
        <option value='LU'>Lugo</option>
        <option value='M'>Madrid</option>
        <option value='MA'>M\xe1laga</option>
        <option value='ML'>Melilla</option>
        <option value='MU'>Murcia</option>
        <option value='NA'>Navarra</option>
        <option value='OR'>Ourense</option>
        <option value='P'>Palencia</option>
        <option value='PO'>Pontevedra</option>
        <option value='SA'>Salamanca</option>
        <option value='TF'>Santa Cruz de Tenerife</option>
        <option value='SG'>Segovia</option>
        <option value='SE'>Sevilla</option>
        <option value='SO'>Soria</option>
        <option value='T'>Tarragona</option>
        <option value='TE'>Teruel</option>
        <option value='TO'>Toledo</option>
        <option value='V'>Valencia</option>
        <option value='VA'>Valladolid</option>
        <option value='BI'>Vizcaya</option>
        <option value='ZA'>Zamora</option>
        <option value='Z'>Zaragoza</option>
        `,TH:`
        <option value='TH-37'>Amnat Charoen</option>
        <option value='TH-15'>Ang Thong</option>
        <option value='TH-10'>Bangkok</option>
        <option value='TH-38'>Bueng Kan</option>
        <option value='TH-31'>Buriram</option>
        <option value='TH-24'>Chachoengsao</option>
        <option value='TH-18'>Chai Nat</option>
        <option value='TH-36'>Chaiyaphum</option>
        <option value='TH-22'>Chanthaburi</option>
        <option value='TH-50'>Chiang Mai</option>
        <option value='TH-57'>Chiang Rai</option>
        <option value='TH-20'>Chon Buri</option>
        <option value='TH-86'>Chumphon</option>
        <option value='TH-46'>Kalasin</option>
        <option value='TH-62'>Kamphaeng Phet</option>
        <option value='TH-71'>Kanchanaburi</option>
        <option value='TH-40'>Khon Kaen</option>
        <option value='TH-81'>Krabi</option>
        <option value='TH-52'>Lampang</option>
        <option value='TH-51'>Lamphun</option>
        <option value='TH-42'>Loei</option>
        <option value='TH-16'>Lopburi</option>
        <option value='TH-58'>Mae Hong Son</option>
        <option value='TH-44'>Maha Sarakham</option>
        <option value='TH-49'>Mukdahan</option>
        <option value='TH-26'>Nakhon Nayok</option>
        <option value='TH-73'>Nakhon Pathom</option>
        <option value='TH-48'>Nakhon Phanom</option>
        <option value='TH-30'>Nakhon Ratchasima</option>
        <option value='TH-60'>Nakhon Sawan</option>
        <option value='TH-80'>Nakhon Si Thammarat</option>
        <option value='TH-55'>Nan</option>
        <option value='TH-96'>Narathiwat</option>
        <option value='TH-39'>Nong Bua Lam Phu</option>
        <option value='TH-43'>Nong Khai</option>
        <option value='TH-12'>Nonthaburi</option>
        <option value='TH-13'>Pathum Thani</option>
        <option value='TH-94'>Pattani</option>
        <option value='TH-S'>Pattaya</option>
        <option value='TH-82'>Phangnga</option>
        <option value='TH-93'>Phatthalung</option>
        <option value='TH-56'>Phayao</option>
        <option value='TH-67'>Phetchabun</option>
        <option value='TH-76'>Phetchaburi</option>
        <option value='TH-66'>Phichit</option>
        <option value='TH-65'>Phitsanulok</option>
        <option value='TH-14'>Phra Nakhon Si Ayutthaya</option>
        <option value='TH-54'>Phrae</option>
        <option value='TH-83'>Phuket</option>
        <option value='TH-25'>Prachin Buri</option>
        <option value='TH-77'>Prachuap Khiri Khan</option>
        <option value='TH-85'>Ranong</option>
        <option value='TH-70'>Ratchaburi</option>
        <option value='TH-21'>Rayong</option>
        <option value='TH-45'>Roi Et</option>
        <option value='TH-27'>Sa Kaeo</option>
        <option value='TH-47'>Sakon Nakhon</option>
        <option value='TH-11'>Samut Prakan</option>
        <option value='TH-74'>Samut Sakhon</option>
        <option value='TH-75'>Samut Songkhram</option>
        <option value='TH-19'>Saraburi</option>
        <option value='TH-91'>Satun</option>
        <option value='TH-17'>Sing Buri</option>
        <option value='TH-33'>Sisaket</option>
        <option value='TH-90'>Songkhla</option>
        <option value='TH-64'>Sukhothai</option>
        <option value='TH-72'>Suphan Buri</option>
        <option value='TH-84'>Surat Thani</option>
        <option value='TH-32'>Surin</option>
        <option value='TH-63'>Tak</option>
        <option value='TH-92'>Trang</option>
        <option value='TH-23'>Trat</option>
        <option value='TH-34'>Ubon Ratchathani</option>
        <option value='TH-41'>Udon Thani</option>
        <option value='TH-61'>Uthai Thani</option>
        <option value='TH-53'>Uttaradit</option>
        <option value='TH-95'>Yala</option>
        <option value='TH-35'>Yasothon</option>
        `,AE:`<option value='AZ'>Abu Dhabi</option>
        <option value='AJ'>Ajman</option>
        <option value='DU'>Dubai</option>
        <option value='FU'>Fujairah</option>
        <option value='RK'>Ras al-Khaimah</option>
        <option value='SH'>Sharjah</option>
        <option value='UQ'>Umm al-Quwain</option>
        `,GB:`
        <option value='ENG'>England</option>
        <option value='SCT'>Scotland</option>
        <option value='NIR'>Northern Ireland</option>
        <option value='WLS'>Wales</option>
        <option value='BFP'>British Forces</option>
        `,US:`
        <option value='AL'>Alabama</option>
        <option value='AK'>Alaska</option>
        <option value='AS'>American Samoa</option>
        <option value='AZ'>Arizona</option>
        <option value='AR'>Arkansas</option>
        <option value='CA'>California</option>
        <option value='CO'>Colorado</option>
        <option value='CT'>Connecticut</option>
        <option value='DE'>Delaware</option>
        <option value='DC'>District of Columbia</option>
        <option value='FM'>Federated States of Micronesia</option>
        <option value='FL'>Florida</option>
        <option value='GA'>Georgia</option>
        <option value='GU'>Guam</option>
        <option value='HI'>Hawaii</option>
        <option value='ID'>Idaho</option>
        <option value='IL'>Illinois</option>
        <option value='IN'>Indiana</option>
        <option value='IA'>Iowa</option>
        <option value='KS'>Kansas</option>
        <option value='KY'>Kentucky</option>
        <option value='LA'>Louisiana</option>
        <option value='ME'>Maine</option>
        <option value='MH'>Marshall Islands</option>
        <option value='MD'>Maryland</option>
        <option value='MA'>Massachusetts</option>
        <option value='MI'>Michigan</option>
        <option value='MN'>Minnesota</option>
        <option value='MS'>Mississippi</option>
        <option value='MO'>Missouri</option>
        <option value='MT'>Montana</option>
        <option value='NE'>Nebraska</option>
        <option value='NV'>Nevada</option>
        <option value='NH'>New Hampshire</option>
        <option value='NJ'>New Jersey</option>
        <option value='NM'>New Mexico</option>
        <option value='NY'>New York</option>
        <option value='NC'>North Carolina</option>
        <option value='ND'>North Dakota</option>
        <option value='MP'>Northern Mariana Islands</option>
        <option value='OH'>Ohio</option>
        <option value='OK'>Oklahoma</option>
        <option value='OR'>Oregon</option>
        <option value='PW'>Palau</option>
        <option value='PA'>Pennsylvania</option>
        <option value='PR'>Puerto Rico</option>
        <option value='RI'>Rhode Island</option>
        <option value='SC'>South Carolina</option>
        <option value='SD'>South Dakota</option>
        <option value='TN'>Tennessee</option>
        <option value='TX'>Texas</option>
        <option value='UT'>Utah</option>
        <option value='VT'>Vermont</option>
        <option value='VA'>Virginia</option>
        <option value='WA'>Washington</option>
        <option value='WV'>West Virginia</option>
        <option value='WI'>Wisconsin</option>
        <option value='WY'>Wyoming</option>
        <option value='VI'>Virgin Islands</option>
        <option value='AA'>Armed Forces Americas</option>
        <option value='AE'>Armed Forces Europe</option>
        <option value='AP'>Armed Forces Pacific</option>
        `};async function L(e,t){return fetch(`https://atonce.com/api/selfservice.js?action=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json().then(e=>e).catch(e=>{}))}function N(e){let t=e=>({id:e.id,...e.data()});return e.docs?e.docs.map(t):e.exists()?t(e):null}function E(e){let t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length;for(let i=0;i<e;i++)t+=o.charAt(Math.floor(Math.random()*n));return t}function B(e){let t=(+`${e}`).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,"$1").toString(),o=t.slice(-2);return"."==o[0]?`${t}0`:t}function H(e){let t={USD:"$",EUR:"€",JPY:"\xa5",GBP:"\xa3",AUD:"AU$",CAD:"CA$",CHF:"CHF",HKD:"HK$",NZD:"NZ$"};return t[e]?t[e]:`${e} `}function I(e,t,o,n,i,a){let l="";if(e&&e.length>1){(l=document.createElement("div")).className=`AtOnceModalProductImageSlideshowContainer${T}`;let p=document.createElement("ul");for(let r of(p.className=`AtOnceModalProductImageUL${T}`,e)){let c=document.createElement("li");c.className=a;let s=document.createElement("img");s.alt="",s.className=`AtOnceModalProductImage${T}`,s.style.maxWidth="100%",s.setAttribute("product_image","true"),r?s.src=`${r}`:s.src=`${AtOnceProductPlaceholderImage}`,c.appendChild(s),p.appendChild(c),n.push(c)}l.appendChild(p),t.innerHTML=S,t.className=`AtOnceModalProductImageSlideshowChevron${T} AtOnceModalProductImageSlideshowChevron_left${T}`,t.id="productSliderLeft",o.innerHTML=M,o.className=`AtOnceModalProductImageSlideshowChevron${T} AtOnceModalProductImageSlideshowChevron_right${T}`,o.id="productSliderRight",l.appendChild(t),l.appendChild(o);let u=new _(p,l);u.init(),u.addArrow(t,o)}return l}function R(e){try{let t=eh.querySelectorAll('[product_image="true"]');if(t&&t.length){let o=t.length;for(let n=0;n<o;n++)if(t[n].src==e){for(let i=0;i<o;i++){let a=t[i].parentElement;if(-1!==a.className.indexOf("active")){let l=eh.getElementById("productSliderLeft"),p=eh.getElementById("productSliderRight"),r=i-n;if(0==r);else if(r<0){if(r=Math.abs(r),p)for(let c=0;c<r;c++)p.click()}else if(r>0&&l)for(let s=0;s<r;s++)l.click();break}}break}}}catch(u){}}function K(e){try{let t=document.createElement("div");t.innerHTML=e;let o=t.getElementsByTagName("a");if(o&&o.length)for(let n of o)n.rel="noopener noreferrer nofollow";e=t.innerHTML}catch(i){}return e}let U={apiKey:"AIzaSyDt13tSh_eab4msT_1huODpEe8q4L0EHlg",authDomain:"email-automation-321716.firebaseapp.com",databaseURL:"https://email-automation-321716.firebaseio.com",storageBucket:"email-automation-321716.appspot.com"};function z(o){try{return t()}catch(n){return e(o)}}let G=z({apiKey:"AIzaSyDt13tSh_eab4msT_1huODpEe8q4L0EHlg",authDomain:"email-automation-321716.firebaseapp.com",projectId:"email-automation-321716"}),V=z(U),D=f(V,U.storageBucket),F=a(G),J=o(G),q=!0,j=1,Q="",Z="",Y="",W="a few hours",X=0,ee=Date.now(),et=!1,eo="",en=window.top.document.title,ei=0,ea=0,el="",ep="",er="",ec="shopify",es=[],eu="https://atonce.com",ed="#fefefe",ev=[],e$=[],em=[],eh,e_=!1;(window.screen.width<=600||window.innerWidth<=600)&&(e_=!0);let eg="#1a73e8",ef="#fff",eA="#111",e0="#333",ex={top_hi_text:"Hi [[NAME_PLACEHOLDER]] \uD83D\uDC4B",top_hi_subtext:"Need help? Get instant solutions below"},eO={box:`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#333">
                <path fill-rule="evenodd" d="M16.164 3a.5.5 0 0 0-.004.002.5.5 0 0 0-.01 0 .5.5 0 0 0-.17.043L4.422 7.988a.5.5 0 0 0-.422.5V23.49a.5.5 0 0 0 .043.207.5.5 0 0 0 .002.006.5.5 0 0 0 .014.027.5.5 0 0 0 .255.239l11.567 4.945a.5.5 0 0 0 .293.094.5.5 0 0 0 .328-.098l11.56-4.941a.5.5 0 0 0 .307-.395.5.5 0 0 0 .004-.027.5.5 0 0 0 .002-.024.5.5 0 0 0 0-.025.5.5 0 0 0 0-.008V8.488a.5.5 0 0 0-.414-.498L16.406 3.05a.5.5 0 0 0-.011-.005.5.5 0 0 0-.082-.027.5.5 0 0 0-.014-.004.5.5 0 0 0-.035-.008.5.5 0 0 0-.014-.002.5.5 0 0 0-.037-.002.5.5 0 0 0-.049-.002zm.023 1.045 2.45 1.047L8.25 9.535a.5.5 0 0 0-.03.014L5.769 8.5l10.42-4.455zm3.723 1.592 2.973 1.271-10.58 4.526a.5.5 0 0 0-.301.51.5.5 0 0 0-.002.058v5.35l-1.084-1.627a.5.5 0 0 0-.639-.17L9 16.193v-5.89l10.91-4.666zm4.244 1.814L26.607 8.5l-10.42 4.455-2.45-1.047 10.388-4.443a.5.5 0 0 0 .03-.014zM5 9.258l3 1.283v6.461a.5.5 0 0 0 .723.447l1.605-.803 1.729 2.592a.5.5 0 0 0 .002.004.5.5 0 0 0 .252.227.5.5 0 0 0 .002.002.5.5 0 0 0 .044.015.5.5 0 0 0 .092.02.5.5 0 0 0 .059.002.5.5 0 0 0 .058-.004.5.5 0 0 0 .041-.008.5.5 0 0 0 .03-.008.5.5 0 0 0 .025-.008.5.5 0 0 0 .082-.035.5.5 0 0 0 .002-.002.5.5 0 0 0 .254-.502v-6.26l2.688 1.15v13.915L5 23.174V9.258zm22.375.002v13.914l-10.688 4.572V13.83l10.688-4.57z" color="#333" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#333;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#333;solid-opacity:1"/>
            </svg>`,return:`
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" width="32" height="32" class="AtOnceReturnIconAdjustment${T}" fill="#333">
                <path d="M21 32a1 1 0 0 1-.71-.29l-3.56-3.56-2.41.8A1 1 0 0 1 13 28v-7a1 1 0 0 1 .64-.93l21-8a1 1 0 0 1 .71 1.87L15 21.69v4.92l1.68-.56a1 1 0 0 1 1 .24l2.32 2.3V24a1 1 0 0 1 .62-.93l21-8.59a1 1 0 0 1 .76 1.85L22 24.67V31a1 1 0 0 1-1 1Z"/>
                <path d="M28 57a1 1 0 0 1-.34-.06l-22-8A1 1 0 0 1 5 48V18a1 1 0 0 1 2 0v29.3l20 7.27V26a1 1 0 0 1 2 0v30a1 1 0 0 1-1 1zm22-31a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"/>
                <path d="M28 57a1 1 0 0 1-.34-1.94L49 47.3V45a1 1 0 0 1 2 0v3a1 1 0 0 1-.66.94l-22 8A1 1 0 0 1 28 57zm0-30a1 1 0 0 1-.34-.06l-22-8a1 1 0 0 1 0-1.88l22-8a1 1 0 0 1 .68 0l22 8a1 1 0 0 1 0 1.88l-22 8A1 1 0 0 1 28 27zM8.93 18 28 24.94 47.07 18 28 11.06zM33 49.55a1 1 0 0 1-.34-1.94l4-1.45a1 1 0 0 1 .68 1.84l-4 1.45a1 1 0 0 1-.34.1zm0-4a1 1 0 0 1-.34-1.94l2-.73a1 1 0 0 1 .68 1.88l-2 .73a1 1 0 0 1-.34.06z"/>
                <path d="M48.5 45a10.5 10.5 0 1 1 8.29-16.95 1 1 0 0 1-1.58 1.23A8.5 8.5 0 1 0 52.53 42a1 1 0 1 1 .95 1.76A10.53 10.53 0 0 1 48.5 45Z"/>
                <path d="M56 30h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"/>
            </svg>`,tracking:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="32" height="32" style="padding:2px;">
                <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="3" d="M95 8.438H30.704L5 27.266h64.296zM47.707 47.651l-10.909-4.202-10.209 4.202V27.266h21.118z"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="3" d="M73.411 8.438H52.293L26.589 27.266h21.118z"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="m64.092 61.75 4.233 4.531 6.46-7.156"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M81.303 73.567c-6.542 6.542-17.187 6.542-23.729 0-6.542-6.542-6.542-17.186 0-23.728 6.542-6.542 17.186-6.542 23.728 0 6.543 6.542 6.543 17.186.001 23.728z"/><circle cx="69.439" cy="61.703" r="11.779" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M81.303 73.567a16.723 16.723 0 0 1-1.998 1.683L90.01 85.954a2.603 2.603 0 0 0 3.68 0h0a2.603 2.603 0 0 0 0-3.68L82.986 71.569a16.63 16.63 0 0 1-1.683 1.998z"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="3" d="M57.575 73.567c-6.542-6.542-6.542-17.186 0-23.728 3.235-3.235 7.472-4.864 11.721-4.9V27.266H5v64.296h64.296V78.467c-4.249-.036-8.487-1.665-11.721-4.9zm21.73 1.683.029-.022a16.744 16.744 0 0 1-10.038 3.239v13.095l15.193-11.129-5.184-5.183z"/><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="3" d="M69.296 27.266v17.673c4.344-.037 8.7 1.592 12.007 4.9 5.915 5.915 6.463 15.174 1.682 21.732l.001-.001 5.752 5.752L95 72.734V8.438L69.296 27.266z"/>
            </svg>
            `,question:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32">
                <rect width="256" height="256" fill="transparent"/>
                <circle cx="128" cy="128" r="96" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
                <circle cx="128" cy="180" r="8" fill="#333"/>
                <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M128,144.0045v-8a28,28,0,1,0-28-28"/>
            </svg>`,faq:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#333" width="30" height="30" class="AtOnceFAQIconAdjustment${T} faq">
                <path d="M14,57a1,1,0,0,1-.39-.08A1,1,0,0,1,13,56V47H9a5,5,0,0,1-5-5V18a5,5,0,0,1,5-5H49a5,5,0,0,1,5,5V42a5,5,0,0,1-5,5H24.84L14.69,56.72A1,1,0,0,1,14,57ZM9,15a3,3,0,0,0-3,3V42a3,3,0,0,0,3,3h5a1,1,0,0,1,1,1v7.66l8.75-8.38a1,1,0,0,1,.69-.28H49a3,3,0,0,0,3-3V18a3,3,0,0,0-3-3ZM60,36V12a5,5,0,0,0-5-5H15a5,5,0,0,0-5,5h2a3,3,0,0,1,3-3H55a3,3,0,0,1,3,3V36a3,3,0,0,1-3,3v2A5,5,0,0,0,60,36ZM30,31.92A6,6,0,1,0,23,26h2a4,4,0,1,1,4,4,1,1,0,0,0-1,1v5h2ZM30,38H28v2h2Z"/>
            </svg>`,chat:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333" class="AtOnceFAQIconAdjustment${T}">
                <path transform="scale(-1, 1) translate(-24,0)" d="M12 11.25c-.4141846 0-.75.3358154-.75.75s.3358154.75.75.75.75-.3358154.75-.75-.3358154-.75-.75-.75zm-3 0c-.4141846 0-.75.3358154-.75.75s.3358154.75.75.75.75-.3358154.75-.75-.3358154-.75-.75-.75zm6 0c-.4141846 0-.75.3358154-.75.75s.3358154.75.75.75.75-.3358154.75-.75-.3358154-.75-.75-.75zm4.4152832-5.9597168c-3.7055054-4.09552-10.02948-4.4117432-14.125-.7062988-4.09552 3.7055054-4.4117432 10.02948-.7062988 14.125l-2.4375 2.4375c-.09375.09375-.1464233.2208862-.1464233.3534546C2 21.776062 2.223877 21.999939 2.5 22H12c2.4794312-.000061 4.8704224-.9212646 6.7089844-2.5847168 4.095581-3.7055054 4.4117431-10.02948.7062988-14.125zM12 21H3.7069702l1.928772-1.9287109c.000061-.000061.0001221-.0001221.0001221-.0001831.1951904-.1952515.1951294-.5117188-.0001221-.7068481C3.9483643 16.6768799 3.0002441 14.3883667 3 12.0020142c-.0005493-4.9700317 4.0279541-8.9994507 8.9979858-9 4.9699707-.0005493 8.9994507 4.0279541 9 8.9979858.0005494 4.9699707-4.0279541 8.9994507-8.9979858 9z"/>
            </svg>
            `,existing_customer:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#333" width="32" height="32">
                <path d="M15.9 32.3v3.8c0 .6.4 1 1 1H33c.6 0 1-.4 1-1v-3.8c0-2.8-2.2-5-5-5h-8.1c-2.8 0-5 2.3-5 5zm2 0c0-1.7 1.3-3 3-3H29c1.7 0 3 1.3 3 3v2.8H17.9v-2.8zm7.1-6.5c3 0 5.3-3 5.3-5.7 0-2.8-2.4-5.2-5.3-5.2s-5.3 2.3-5.3 5.2c0 2.7 2.2 5.7 5.3 5.7zm0-8.9c1.8 0 3.3 1.4 3.3 3.2 0 1.7-1.4 3.7-3.3 3.7s-3.3-2-3.3-3.7c0-1.8 1.4-3.2 3.3-3.2zm11.4 26.5c-7 4.5-16 4.5-23 0h-.1l4-.3c.6 0 1-.5.9-1.1s-.5-1-1.1-.9l-5.7.4c-.3 0-.5.1-.7.3-.2.2-.3.5-.2.7l.4 5.7c0 .5.5.9 1 .9h.1c.6 0 1-.5.9-1.1l-.2-2.7C20.4 50 30 49.8 37.4 45c.5-.3.6-.9.3-1.4-.2-.4-.8-.5-1.3-.2zM8.1 11.3l-5.6-.6c-.6-.1-1 .3-1.1.9-.1.5.3 1 .9 1.1l2.6.3c-2.2 3.7-3.4 7.9-3.4 12.2 0 4.5 1.3 8.8 3.6 12.6.3.5.9.6 1.4.3.5-.3.6-.9.3-1.4-2.2-3.4-3.3-7.4-3.3-11.5s1.1-8.1 3.3-11.5v-.1l-.4 4c-.1.5.3 1 .9 1.1h.1c.5 0 .9-.4 1-.9l.6-5.4c0-.5-.4-1-.9-1.1zm30.5-9.7c-.1-.5-.7-.9-1.2-.7-.5.1-.9.7-.7 1.2l.8 3.1C33.7 2.8 29.4 1.6 25 1.6c-4.5 0-8.8 1.3-12.6 3.7-.5.3-.6.9-.3 1.4.3.5.9.6 1.4.3 3.4-2.2 7.4-3.3 11.5-3.3S33.1 4.9 36.5 7h.1l-3.2.8c-.6.2-.9.7-.8 1.2.1.5.5.7 1 .7h.3l5.5-1.4c.5-.1.9-.7.7-1.2l-1.5-5.5zm9.2 36.3-2.9-.3c2.3-3.7 3.6-8 3.6-12.4 0-4.5-1.3-8.8-3.6-12.6-.3-.5-.9-.6-1.4-.3-.5.3-.6.9-.3 1.4 2.2 3.4 3.3 7.4 3.3 11.5 0 4-1.1 7.9-3.2 11.3l.4-3.7c.1-.5-.3-1-.9-1.1-.5 0-1 .3-1.1.9l-.6 5.7c0 .3.1.5.2.7.2.2.4.3.7.4l5.6.6h.1c.5 0 .9-.4 1-.9 0-.7-.4-1.2-.9-1.2z"/>
            </svg>
            `,bolt:`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path style="stroke:none;fill-rule:nonzero;fill:#333;fill-opacity:1" d="m17.117188 8.25-1.03125 5.570312L15.875 15h5.25l-6.238281 8.75 1.03125-5.570312L16.125 17h-5.242188l6.234376-8.75M18.917969 4 8.9375 18h5.988281l-1.84375 10L23.0625 14h-5.988281Zm0 0"/>
            </svg>
            `,link:`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path style="stroke:none;fill-rule:nonzero;fill:#333;fill-opacity:1" d="m26.367188 14.273438-3.871094 3.871093c-.257813.253907-.640625.253907-.894532 0-.257812-.257812-.257812-.640625 0-.898437L25.472656 13.375c1.886719-1.886719 1.886719-4.960938 0-6.847656-.929687-.925782-2.113281-1.40625-3.425781-1.40625-1.277344 0-2.496094.511718-3.421875 1.40625l-3.871094 3.871094c-1.890625 1.890624-1.890625 4.960937 0 6.847656.445313.449218.988282.832031 1.597656 1.058594.320313.128906.480469.511718.351563.832031-.289063.671875-1.023437.289062-.832031.351562-.765625-.320312-1.4375-.769531-2.015625-1.34375-2.398438-2.367187-2.398438-6.273437 0-8.640625l3.871093-3.871094c1.152344-1.152343 2.6875-1.792968 4.320313-1.792968 1.632813 0 3.167969.640625 4.320313 1.792968 2.402343 2.367188 2.402343 6.269532 0 8.640626Zm-10.238282-1.761719c-.320312-.128907-.703125.03125-.832031.351562-.128906.320313.03125.703125.351563.832031.609374.257813 1.152343.609376 1.597656 1.058594 1.890625 1.886719 1.890625 4.957032 0 6.847656L13.375 25.472656c-.925781.925782-2.109375 1.40625-3.421875 1.40625-1.28125 0-2.496094-.511718-3.425781-1.40625-1.886719-1.886718-1.886719-4.960937 0-6.847656l3.871094-3.871094c.257812-.257812.257812-.640625 0-.898437-.253907-.253907-.636719-.253907-.894532 0l-3.871094 3.871093c-2.367187 2.371094-2.367187 6.273438 0 8.640626 1.152344 1.152343 2.6875 1.792968 4.320313 1.792968 1.632813 0 3.167969-.640625 4.320313-1.792968l3.871093-3.871094c2.398438-2.367188 2.398438-6.273438 0-8.640625-.578125-.574219-1.25-1.023438-2.015625-1.34375Zm0 0"/>
                <path style="stroke:none;fill-rule:nonzero;fill:#333;fill-opacity:1" d="M481.28125-163.199219v538.878907H-89.601562v-538.878907H481.28125m2.558594-2.5625h-576v544h576Zm0 0"/>
            </svg>
            `,search:`
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" viewBox="0 0 128 128" width="32" height="32">
                <path fill="none" d="M.211 0h128v128h-128z"/><path fill="#333" fill-rule="nonzero" d="M75.941 79.528c-11.617 10.144-28.988 13.34-43.601 7.365C14.72 79.689 3.496 59.425 6.867 40.571 10.24 21.704 27.782 6.443 47.398 6.008c.361-.006.722-.008 1.084-.007 19.279.183 37.454 15.06 41.025 34.312 2.394 12.904-1.734 26.845-10.689 36.433l34.787 33.82c.746.788.617 1.05.605 1.489-.042 1.525-2.11 2.527-3.394 1.379L75.941 79.528ZM47.965 10.001c-17.208.163-33.355 13.173-36.934 30.111-2.634 12.469 1.515 26.166 10.639 35.073 10.478 10.228 27.063 13.662 40.897 8.005 16.003-6.542 26.182-25.034 23.007-42.148-3.147-16.967-18.86-30.64-36.627-31.035a53.632 53.632 0 0 0-.982-.006Z"/>
            </svg>
            `};async function e9(e){try{m(l(F,"messages",`${Y}`,"active_live",J.currentUser.uid),{time:!0==e?-1:Date.now()}).catch(e=>{})}catch(t){}}async function eC(e){return new Promise(function(t,o){Promise.all(e).then(e=>{t(e)}).catch(e=>{t("error")})})}function ey(e){let t=e.length;for(let o=0;o<t;o++)e.sort(function(e,t){return t.f-e.f});for(let n=0;n<t;n++)e[n].actions&&ey(e[n].actions);return e}function e1(e){if(e>80){let t=(e/60).toFixed(0);return t>48?"a few days":t>24?"a day":t>3?`${t} hours`:"a few hours"}return e<2?"a minute":`${e} minutes`}async function eb(){try{let e=[];async function t(e,t){return new Promise(async function(t,o){try{let n=`${y}`.toLowerCase(),i=l(F,"self_service",`${n}.useatonce.com`,`${e}`,"1");d(i).then(o=>{o.exists()?("quick_links"==e?(e$=o.data().list,e$=ey(e$)):(em=o.data().list,em=ey(em)),t("success")):t("error")})}catch(a){t("error")}})}async function o(){return new Promise(async function(e,t){try{let o=`${y}`.toLowerCase(),n=l(F,"stripe_check",`${o}@emails.atonce.com`);d(n).then(t=>{if(t.exists()){let o=t.data();o&&("active"==o.stripeSubscriptionStatus||"trialing"==o.stripeSubscriptionStatus||!0!==o.more)?e(!0):e(!1)}else e(!1)})}catch(i){e(!1)}})}async function n(){return new Promise(async function(e,t){try{let o=`${y}`.toLowerCase(),n=l(F,"self_service",`${o}.useatonce.com`);d(n).then(t=>{if(t.exists()){Q=t.data();try{let o=window.location.hostname;o&&-1==o.indexOf("help.")&&-1==o.indexOf(".helpatonce.com")&&(Z=`https://${o}`)}catch(n){}if(!Z&&Q.brand_url&&(Z=`https://${Q.brand_url}`),Q.main_email&&(Y=Q.main_email),Q.last_reply_times)try{if(Q.last_reply_times.length){let i=Q.last_reply_times,a=0;for(let l of i)a+=Number(l);let p=a/i.length,r=Number((p/6e4).toFixed(0));W=e1(r)}}catch(c){}Q.last_seen&&!1==isNaN(Q.last_seen)&&(X=Number(Q.last_seen));let s=`${Q.color}`.trim();if(s&&/[0-9A-Fa-f]{6}/g.test(s)){eg=s;let u=function e(t,o,n){let i="#"===t.charAt(0)?t.substring(1,7):t,a=parseInt(i.substring(0,2),16),l=parseInt(i.substring(2,4),16),p=parseInt(i.substring(4,6),16);if(!(.299*a+.587*l+.114*p>186))return[o,t,t];{function r(e,t){return e.replace(/^#/,"").replace(/../g,e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))}let c=r(t,-7),s=r(t,-25);return[n,`#${c}`,`#${s}`]}}(eg,"#fff","#111");ef=u[0],eA=u[1],e0=u[2]}let d=Q.shopify_stores,v=Q.woo_stores,$=[];if(d&&Array.isArray(d)&&d.length?(ec="shopify",$=d):v&&Array.isArray(v)&&v.length&&(ec="woocommerce",$=v),$.length){let m=[];for(let h of $)m.push(h);es=m=[...new Set(m)]}e("success")}else e("error")})}catch(i){e("error")}})}e.push(t("quick_links",e$)),e.push(t("quick_order_links",em)),e.push(n()),e.push(o());let i=await eC(e);if(!1==i[3])return"error";return i[0]}catch(a){return"error"}}async function e3(){return new Promise(async function(e,t){let o=!1;try{"true"==localStorage.getItem("hasTeamToken")&&(o=!0)}catch(a){}let l="";try{l=J.currentUser.uid}catch(p){}if(J&&o||l){if(!l)try{i(J,e=>{e&&localStorage.setItem("AtOnceLiveChatUserID",J.currentUser.uid)})}catch(r){}eb().then(t=>{e(t)})}else if(J&&null===J.currentUser)try{i(J,t=>{t?(eb().then(t=>{e(t)}),localStorage.setItem("AtOnceLiveChatUserID",J.currentUser.uid)):n(J).then(()=>{i(J,t=>{t?(localStorage.setItem("AtOnceLiveChatUserID",t.uid),eb().then(t=>{e(t)})):e("error")})}).catch(t=>{e("error")})})}catch(c){}else n(J).then(()=>{i(J,t=>{t?(localStorage.setItem("AtOnceLiveChatUserID",t.uid),eb().then(t=>{e(t)})):e("error")})}).catch(t=>{e("error")})})}await e3().then(e=>{if("error"!=e)try{let t=!1;try{document.addEventListener("visibilitychange",function(){try{!0==t&&"visible"==document.visibilityState&&(window.top.document.title=en)}catch(e){}})}catch(o){}let n=0,i="",a=[];try{!1==isNaN(Number(localStorage.getItem("AtOnceLastUnreadMessage")))&&(n=Number(localStorage.getItem("AtOnceLastUnreadMessage")))}catch(m){}let _=document.createElement("div");_.className=`AtOnceChatNotification${T} hidden`;let f=document.createElement("div");async function S(e){try{let t=[`${e}`],o=localStorage.getItem("AtOnceOrders");if(o)try{let n=o.split(",");if(n&&n.length)for(let i of n)i&&i.length>7&&-1==t.indexOf(i)&&t.push(i)}catch(a){}localStorage.setItem("AtOnceOrders",t)}catch(l){}}async function M(e,t,o){L("get_customer_orders",{store:o,customer:t,order:e}).then(e=>{if(e.success){let t=e.success;for(let o of t=t.reverse())S(o)}try{let n=localStorage.getItem("AtOnceOrders");if(n){let i=n.split(",")[0];i&&i.length>7&&-1!==i.indexOf("_atonce_")&&function e(t,o,n){try{for(let i of t)i.text?-1!==i.text.indexOf(o)&&-1==i.text.indexOf(`${eH}?order=`)&&(i.text=eI(i.text,o,`${eH}?order=${n}`)):i.link&&-1!==i.link.indexOf(o)&&-1==i.link.indexOf(`${eH}?order=`)&&(i.link=eI(i.link,o,`${eH}?order=${n}`)),i.sub_actions&&e(i.sub_actions,o,n)}catch(a){}}(e$,eH,i)}}catch(a){}})}function U(e){return e?e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ").replaceAll("_"," "):""}f.className=`AtOnceLiveChatMessagesContainer${T} hidden`;let z="";try{z=J.currentUser.email}catch(G){}z&&localStorage.setItem("AtOnceLiveChatUserEmail",`${z}`.trim().toLowerCase());try{z||(z=localStorage.getItem("AtOnceLiveChatUserEmail").trim().toLowerCase())}catch(V){}async function ey(e,t){let o=null,n=null,i=[];for(let a of es)i.push(p(a));async function p(i){return new Promise(async function(a,p){try{let r=await d(l(F,ec,`${i}`,`${t}`,`${e}`)).then(N);if(r){o=i,n=r;try{n.email&&!z&&(localStorage.setItem("AtOnceLiveChatUserEmail",n.email.trim().toLowerCase()),z=n.email.trim().toLowerCase())}catch(c){}}a("success")}catch(s){a("success")}})}return i.length>0&&await eC(i),[n,o,e]}let eb=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" transform="scale(-1 1)" fill="${ef}" style="height:42px;width:42px;">
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S17.5 2 12 2zM8 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                    </svg>            
                    `,e3=`
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
                            <path fill="none" stroke="${ef}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1 1 13M1 1l12 12" class="colorStroke000 svgStroke"/>
                        </svg>
                    </svg>
                    `,e2=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                        <g data-name="Layer 2" fill="${ef}" class="color000000 svgShape">
                            <g data-name="arrow-back" class="color000000 svgShape">
                            <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" class="color000000 svgShape"/>
                            </g>
                        </g>
                    </svg>
                    `,eT=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="${"#111"==ef?e0:eg}">
                        <path d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"/>
                    </svg>
                    `,eS=`
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" style="background: #888;border-radius: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
                            <g fill="#fefefe" class="color000 svgShape" data-name="Layer 2">
                                <path fill="#fefefe" d="M27 2H5a3 3 0 0 0-3 3v17.535l9.441-6.364a1 1 0 0 1 1.266.122l4.367 4.367 4.3-3.441a1 1 0 0 1 1.2-.04L30 22.347V5a3 3 0 0 0-3-3Zm-7 13a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm2.042 4.247L30 24.782V27a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2.053l9.875-6.657 6.418 6.417a1 1 0 0 0 1.414-1.414l-1.21-1.21Z" class="color4c46c8 svgShape"/>
                            </g>
                        </svg>
                    </svg>
                    `,e4="";try{e4="data:image/svg+xml;base64,"+btoa(eS)}catch(eM){}let ew=`
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                            <path fill="#333" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" class="color000000 svgShape color888"/>
                        </svg>
                    </svg>
                    `,e5=`
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16px" height="16px">
                            <path fill="#333" d="M6 13c-.55228 0-1-.4477-1-1s.44772-1 1-1h12c.5523 0 1 .4477 1 1s-.4477 1-1 1H6Z" class="color000000 svgShape color888"/>
                        </svg>
                    </svg>
                    `,eP=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill="#888" fill-rule="evenodd" d="m15.7 13.3-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" class="color000000 svgShape"/>
                    </svg>
                    `;e2=e2.replace(`fill="${ef}"`,`fill="${"#fff"==ef?"#eee":"#222"}"`);let e6=eI(e3.replace(`stroke="${ef}"`,'stroke="#555"'),"16","10"),ek=e3.replace(`stroke="${ef}"`,`stroke="${"#fff"==ef?"#ddd":"#333"}"`),eL=e3.replace(`stroke="${ef}"`,'stroke="#555"'),eN=e3.replace(`stroke="${ef}"`,'stroke="#fff"').replace('width="16" height="16"','width="8" height="8"').replace('width="16" height="16"','width="8" height="8"'),eE="",e7=[],e8=!1,eB="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",eH=`https://${Q.domain?Q.domain:`${y}.useatonce.com`}`;function eI(e,t,o){let n=t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1");return e.replace(RegExp(n,"g"),o)}let eR=(e,t)=>{try{for(let o of e)o.text?(t&&-1!==o.text.indexOf("{{return_portal}}")&&(o.text=eI(o.text,"{{return_portal}}",eH)),-1!==o.text.indexOf("{{brand_url}}")&&(o.text=eI(o.text,"{{brand_url}}",Z))):o.link&&(t&&-1!==o.link.indexOf("{{return_portal}}")&&(o.link=eI(o.link,"{{return_portal}}",eH)),-1!==o.link.indexOf("{{brand_url}}")&&(o.link=eI(o.link,"{{brand_url}}",Z))),o.sub_actions&&eR(o.sub_actions,t)}catch(n){}};for(let[eK,eU]of Object.entries(ex))-1!==eU.indexOf("[[NAME_PLACEHOLDER]]")&&(ex[`${eK}`]=eU.replace("[[NAME_PLACEHOLDER]]","there"));eR(e$,!0),eR(em);try{for(let ez of e$)"map"===ez.type||ez.tri_action||ez.icon||ev.push(ez)}catch(eG){}ev=ev.filter((e,t,o)=>o.findIndex(t=>t.heading===e.heading)===t);let eV=document.createElement("style");eV.innerHTML=`
                    
                    html {
                        box-sizing: border-box;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }

                    head {
                        display: none;
                    }

                    b {
                        font-weight: 600;
                    }

                    div {
                        outline: none;
                    }

                    a {
                        cursor: pointer;
                        color: #1a73e8;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: underline;
                    }

                    img, video {
                        border-radius: 24px;
                    }

                    ol, ul {
                        margin: 0;
                        margin-block-start: 0;
                        margin-block-end: 0;
                        padding-inline-start: 20px;
                    }

                    li {
                        margin-bottom: 6px;
                    }

                    li::before {
                        color: #333;
                    }

                    [contenteditable=true]:empty:before{
                        content: attr(placeholder);
                        pointer-events: none;
                        color: #999;
                        display: block;
                    }

                    [contenteditable=true] {
                        color: #222;
                        font-size: 16px;
                    }

                    body {
                        display: block;
                        color: rgba(0, 0, 0, 0.87);
                        margin: 0;
                        font-size: 0.875rem;
                        font-family: ${eB};
                        font-weight: 400;
                        line-height: 1.43;
                        letter-spacing: 0.01071em;
                    }

                    strong {
                        font-weight: 600;
                    }

                    button {
                        font-family: ${eB};
                        outline: none;
                        user-select: none;
                    }

                    select {
                        font-family: ${eB};
                        margin-top: 8px;
                    }

                    select:disabled {
                        background: #ddd;
                    }

                    input {
                        font-family: ${eB};
                        display: block;
                        margin-top: 8px;
                        font-size: ${e_?"16px":"15px"};
                        width: 100%;
                        border-radius: 12px;
                        padding: 8px;
                        outline: none;
                        transition: 0.2s;
                    }

                    .atonce_input_red${T} {
                        outline: 1px solid #dd0000 !important;
                        border-color: transparent !important;
                    }

                    input:focus {
                        border-color: ${eA};
                    }

                    textarea {
                        font-family: ${eB};
                        display: block;
                        margin-top: 8px;
                        margin-bottom: 2px;
                        font-size: ${e_?"16px":"15px"};
                        width: 100%;
                        border: none;
                        padding: 8px;
                        resize: none;
                        min-height: ${e_?"85px":"80px"};
                        outline: none;
                    }

                    textarea::-webkit-scrollbar {
                        width: ${e_?'""':"8px"};
                    }
                    
                    .AtOnceBody${T} {
                        background-color: ${ed};
                    }

                    * {
                        scrollbar-color: #99999999 transparent;
                        scrollbar-width: thin;
                        -webkit-tap-highlight-color: transparent;
                    }
                    
                    *, *::before, *::after {
                        box-sizing: inherit;
                    }

                    *::-webkit-scrollbar {
                        width: ${e_?'""':"12px"};
                    }

                    *::-webkit-scrollbar-thumb {
                        border: 0px solid transparent;
                        border-radius: 20px;
                        background-clip: padding-box;
                        background-color: #99999999;
                    }

                    *::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .AtOnceBreakAll${T} {
                        word-break: break-all;
                    }

                    .AtOnceDisabledDiv${T} {
                        user-select: none;
                        pointer-events: none;
                        opacity: 0.3;
                    }

                    .AtOnceFlex${T} {
                        display: flex;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceFlexCenter${T} {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceFlexSpaced${T} {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceMarginBottomSmall${T} {
                        margin-bottom: 6px;
                    }

                    .AtOnceMarginBottomMedium${T} {
                        margin-bottom: 12px;
                    }

                    .AtOnceMarginBottomLarge${T} {
                        margin-bottom: 16px;
                    }

                    .AtOnceNoSelect${T} {
                        user-select: none;
                    }

                    .AtOnceFlexSpacedOrder${T} {
                        width: 100%;
                        padding: 0 0 0 24px;
                    }

                    .AtOnceFlexSpacedNoAlign${T} {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }

                    .AtOnceFlexSpacedProductTitle${T} {
                        width: 100%;
                        margin-left: 24px;
                    }

                    .AtOnceAttachmentsUploading${T} {
                        background: ${eg};
                        color: ${ef};
                        border-radius: 100px;
                        padding: 1px 8px;
                        font-size: 13px;
                        align-items: center;
                        justify-content: center;
                        align-self: center;
                        margin-left: 4px;
                        display: inline-flex;
                    }

                    .AtOnceAttachmentCloseBtn${T} {
                        margin-left: 12px;
                        cursor: pointer;
                        user-select: none;
                    }

                    .AtOnceFlexSpacedProductTitleSmall${T} {
                        width: 100%;
                        margin: 0 12px;
                    }

                    .AtOnceProductQuantityText${T} {
                        position: absolute;
                        top: -6px;
                        right: -17%;
                        font-size: 12px;
                        font-weight: 600;
                        color: #222;
                        background: #f1f1f1;
                        border-radius: 100px;
                        padding: 2px 8px;
                        user-select: none;
                    }

                    .AtOnceProductQuantityTextTwo${T} {
                        right: -22% !important;
                    }

                    .AtOncePositionRelative${T} {
                        position: relative;
                    }

                    .AtOnceFlexStart${T} {
                        align-self: flex-start;
                        flex: none;
                    }

                    .AtOnceSubContainer${T} {
                        height: 100%;
                        overflow-y: hidden;
                        animation: AtOnceShowSubContainer${T} 0.25s linear forwards;
                    }

                    .AtOnceSubContainer${T} img {
                        max-width: 100%;
                    }

                    .AtOnceSubContainer${T} iframe {
                        border: none;
                        outline: none;
                        border-radius: 24px;
                        width: 100%;
                        min-height: 225px;
                    }

                    .AtOnceChatPrimaryContainer${T} {
                        border-radius: ${e_?0:"24px"};
                        background: ${ed};
                        margin-top: ${e_?0:"10px"};
                        margin-left: auto;
                        margin-right: ${e_?"auto":"20px"};
                        width: 100%;
                        height: ${e_?"100%":"calc(100% - 20px)"};
                        max-width: ${e_?"unset":"400px"};
                        max-height: ${e_?"unset":"700px"};
                        display: flex;
                        flex-direction: column;
                        box-shadow: 0 0 10px #99999955;
                    }

                    .AtOnceChatPrimaryContainer${T}.AtOnceShowPrimaryContainer${T} {
                        animation: AtOnceShowPrimaryContainer${T} 0.2s linear forwards;
                    }

                    .AtOnceChatPrimaryContainer${T}.AtOnceHidePrimaryContainer${T} {
                        animation: AtOnceHidePrimaryContainer${T} 0.2s linear forwards;
                    }

                    .AtOnceLiveChatMessagesContainer${T} {
                        border-radius: 0;
                        background: transparent;
                        margin-top: -${e_?"95":"80"}px;
                        margin-left: auto;
                        margin-right: ${e_?"auto":"20px"};
                        width: 100%;
                        height: ${e_?"100%":"calc(100% - 20px)"};
                        max-width: ${e_?"unset":"400px"};
                        max-height: ${e_?"unset":"700px"};
                        display: flex;
                        flex-direction: column;
                        box-shadow: none;
                        justify-content: flex-end;
                    }

                    .AtOnceLiveChatMessagesContainer${T}.hidden {
                        display: none;
                        user-select: none;
                        pointer-events: none;
                    }

                    .AtOnceLiveChatCloseButton${T} {
                        display: flex;
                        justify-content: end;
                        align-items: center;
                        text-align: right;
                        margin-right: ${e_?"16px":"4px"};
                        margin-bottom: 12px;
                        background: #555;
                        border-radius: 50%;
                        padding: 6px;
                        width: fit-content;
                        margin-left: auto;
                        cursor: pointer;
                        user-select: none;
                    }

                    .AtOnceChatButton${T} {
                        bottom: ${e_?"15px":"20px"};
                        right: ${e_?"15px":"20px"};
                        border: none;
                        margin: 0px;
                        padding: 0px;
                        overflow: visible;
                        text-align: inherit;
                        color: inherit;
                        font-style: inherit;
                        font-variant: inherit;
                        font-weight: inherit;
                        font-stretch: inherit;
                        font-size: inherit;
                        font-family: inherit;
                        line-height: normal;
                        -webkit-font-smoothing: inherit;
                        appearance: none;
                        box-sizing: border-box;
                        position: fixed;
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                        z-index: ${b};
                        box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px, rgb(0 0 0 / 20%) 0px 2px 12px;
                        transform-origin: center bottom;
                        user-select: none;
                        background: ${eg};
                        cursor: pointer;
                        animation: AtOnceShowChatButton${T} 0.2s linear forwards;
                    }

                    .AtOnceChatNotification${T} {
                        position: absolute;
                        right: -3px;
                        bottom: -3px;
                        color: #fff;
                        background: #dd0000;
                        font-weight: 600;
                        width: 22px;
                        height: 22px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 14px;
                        align-self: center;
                        border-radius: 50%;
                        z-index: 1;
                        line-height: 0;
                        user-select: none;
                    }

                    .AtOnceChatNotification${T}.hidden {
                        display: none;
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceHideChatButton${T} {
                        animation: AtOnceHidePrimaryContainer${T} 0.2s linear forwards;
                    }

                    .AtOnceCloseButtonMobile${T} {
                        position: fixed;
                        top: ${e_?"16px":"24px"};
                        right: ${e_?"16px":"24px"};
                        cursor: pointer;
                    }

                    .AtOnceManageOrdersLabel${T} {
                        margin:7px 0;
                        position:relative;
                        display:inline-block;
                        outline: none;
                        border: none;
                        width: 100%;
                    }

                    .AtOnceManageOrdersSpan${T} {
                        margin:10px;
                        padding: 2px;
                        pointer-events: none;
                        position:absolute;
                        left:0;
                        top:0;
                        transition: 0.2s;
                        color: #777;
                        outline: none;
                        border: none;
                        font-size: 15px;
                        background: ${ed}00;
                    }

                    .AtOnceEnterEmailInputLabel${T} {
                        font-size: 13px;
                        margin-left: 8px;
                        margin-bottom: -7px;
                        color: #555;
                        margin-top: 6px;
                    }

                    .AtOnceSearchInput${T} {
                        padding: 8px 16px;
                        margin-bottom: 12px;
                        outline: none;
                        border-radius: 100px;
                        margin-left: 24px;
                        margin-top: 0;
                        border: 1px solid #ddd;
                        width: calc(100% - 48px);
                    }

                    .AtOnceSearchInputIconed${T} {
                        padding: 8px 16px 8px 38px;
                    }

                    .AtOnceSearchInput${T}.full {
                        margin-left: 0;
                        width: 100%;
                        margin-bottom: 0;
                        margin-top: 36px;
                    }

                    .AtOnceSearchInput${T}.full.bottomed {
                        margin-top: 8px;
                        margin-bottom: 12px;
                        border-radius: 12px;
                        padding: 8px 10px;
                    }

                    .AtOnceSearchInputIcon${T} {
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        top: 12px;
                        left: 36px;
                    }

                    .AtOnceManageOrdersInput${T} {
                        padding: 12px;
                        outline: none;
                        margin-top: 0;
                        border: 1px solid #ddd;
                        width: 100%;
                        text-transform: uppercase;
                    }

                    .AtOnceManageOrdersInput${T}:focus + .AtOnceManageOrdersSpan${T}, .AtOnceManageOrdersInput${T}:not(:placeholder-shown) + .AtOnceManageOrdersSpan${T} {
                        color: #222;
                        font-size: 14px;
                        transform: translateY(-22px) translateX(2px);
                        background: ${ed}ff;
                    }
                      
                    .AtOnceManageOrdersInput${T}:focus + .AtOnceManageOrdersSpan${T}, .AtOnceManageOrdersInput${T}:not(:-ms-input-placeholder) + .AtOnceManageOrdersSpan${T} {
                        color: #222;
                        font-size: 13px;
                        padding: 2px;
                        transform: translateY(-22px) translateX(2px);
                        background: ${ed}ff;
                    }

                    .AtOnceLoadingSpinner${T}::after {
                        content: "";
                        z-index: 1;
                        box-sizing: border-box;
                        width: 26px;
                        margin-top: 15px;
                        height: 26px;
                        left: calc(50% - 12px);
                        position: absolute;
                        border-radius: 50%;
                        border-top: 2.5px solid ${ef};
                        border-left: 2.5px solid ${ef};
                        border-bottom: 2.5px solid ${ef};
                        border-right: 2.5px solid transparent;
                        animation: AtOnceSpinner${T} .6s linear infinite;
                    }

                    .AtOnceLoadingSpinner${T}.bottomed::after {
                        margin-top: -12.5px;
                    }

                    .AtOnceLoadingSpinner${T}.bottomed.bigger::after {
                        margin-top: -33px;
                    }

                    .AtOncePrimaryMessageContainer${T} {
                        font-size: 16px;
                    }

                    .AtOncePrimaryMessageContainer${T}.self {
                        display: table;
                        margin-left: auto;
                    }

                    .AtOnceSeenContainer${T} {
                        margin-left: auto;
                        display: table;
                        margin-right: 0;
                        font-size: 13px;
                        color: #999;
                        margin-top: 2px;
                        user-select: none;
                    }

                    .AtOnceMessageContainer${T} {
                        border-radius: 16px;
                        padding: 5px 15px 5px 15px;
                        display: table;
                        margin-top: 2px;
                        max-width: 300px;
                        word-break: break-word;
                    }

                    .AtOnceMessageContainerLink${T} {
                        border-radius: 100px;
                        text-decoration: none !important;
                        justify-content: center;
                        align-items: center;
                        align-self: center;
                        font-weight: 600;
                        margin: 8px 0 4px 0;
                        word-break: break-all;
                        line-height: 30px;
                        text-align: center;
                        height: 31px;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        padding: 0 16px;
                        overflow: hidden;
                        width: auto;
                        min-width: 175px;
                    }

                    .AtOnceMessageContainerLink${T}:hover {
                        text-decoration: underline !important;
                    }

                    .AtOnceMessageContainerLink${T}.self {
                        background: ${ef};
                        color: ${"#fff"==ef?"#222":"#fff"} !important;
                    }

                    .AtOnceMessageContainerLink${T}.sender {
                        background: #222;
                        color: #fff;
                    }

                    .AtOnceMessageContainerPreview${T} {
                        border-radius: 24px;
                        padding: 10px 15px;
                        width: fit-content;
                        background: #fff;
                        text-align: right;
                        margin-top: 4px;
                        margin-left: auto;
                        margin-right: ${e_?"16px":"0"};
                        max-width: calc(100% - 32px);
                        box-shadow: 0 0 5px #ccc;
                    }

                    .AtOnceMessageContainerPreview${T}.one {
                        opacity: 0.8;
                    }

                    .AtOnceMessageContainerPreview${T}.two {
                        opacity: 0.9;
                    }

                    .AtOnceMessageContainerPreview${T}.three {
                        opacity: 1;
                    }

                    .AtOnceMessageContainer${T}.self a {
                        color: #fff;
                    }

                    .AtOnceMessageContainer${T}.self.start {
                        border-bottom-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${T}.self.middle {
                        border-top-right-radius: 6px;
                        border-bottom-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${T}.self.end {
                        border-top-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${T}.sender.start {
                        border-bottom-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${T}.sender.middle {
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${T}.sender.end {
                        border-top-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${T} > a {
                        color: ${ef};
                    }

                    .AtOnceMessageContainer${T}.sender {
                        margin-right: auto;
                    }

                    .AtOnceMessageContainer${T}.self {
                        background: ${eg};
                        color: ${ef};
                        margin-left: auto;
                        ${"#111"==ef?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOncePseudoAttachmentLink${T} {
                        font-weight: 600;
                        color: ${e0};
                        cursor: pointer;
                        display: -ms-inline-grid;
                        display: inline-grid;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 16px;
                        margin-top: 8px;
                        margin-bottom: 8px;
                        width: fit-content;
                        vertical-align: top;
                    }

                    .AtOncePseudoAttachmentLink${T}.image {
                        border: none;
                        padding: 0px;
                    }

                    .AtOncePseudoAttachmentLink${T}.video {
                        border: none;
                        padding: 0px;
                    }
                    
                    .AtOncePseudoAttachmentLink${T}.video>video {
                        border-radius: 16px;
                    }

                    .AtOncePseudoAttachmentLink${T}.audio {
                        border: none;
                        padding: 0px;
                        width: 100%;
                        max-height: 48px;
                    }
                    
                    .AtOncePseudoAttachmentLink${T}.audio>audio {
                        height: 48px;
                        border-radius: 30px;
                    }

                    .AtOncePseudoAttachmentLink${T}.self {
                        margin-left: auto;
                        margin-right: 0;
                        display: block;
                    }

                    .AtOnceMainAttachmentsUnavailable${T} {
                        background-color: #eee;
                        width: fit-content;
                        border-radius: 50px;
                        padding: 5px 15px;
                        cursor: default;
                        -webkit-user-select: none;
                        -webkit-touch-callout: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        margin-top: 8px;
                        margin-bottom: 8px;
                    }

                    .AtOnceMainAttachmentsUnavailable${T}.self {
                        margin-left: auto;
                        background: ${eg};
                        color: ${ef};
                        ${"#111"==ef?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOnceMainAttachmentsPreview${T} {
                        border-radius: 16px;
                        width: 100%;
                    }

                    .AtOncePrimarySubjectHeader${T} {
                        margin-top: 16px;
                    }

                    .AtOnceTimestampContainer${T} {
                        font-size: 12px;
                        margin-bottom: -16px;
                        margin-top: 12px;
                        user-select: none;
                    }

                    .AtOnceMessageContainer${T}.sender {
                        background: #eee;
                    }

                    .AtOnceProductImage${T} {
                        width: 64px;
                        height: 64px;
                        background-position: center;
                        background-size: cover;
                        border-radius: 16px;
                    }

                    .AtOnceContainerPadded${T} {
                        padding: 24px;
                    }
					
					.AtOnceContainerMarginBottom${T} {
						margin-bottom: 48px;
					}

                    .AtOnceContainerPaddedBottomSmall${T} {
                        padding-bottom: 4px;
                    }

                    .AtOnceContainerPaddedBottom${T} {
                        padding-bottom: 16px;
                    }

                    .AtOnceContainerPaddedBottomLarge${T} {
                        padding-bottom: 54px;
                    }

                    .AtOnceContainerNoBottomPadding${T} {
                        padding-bottom: 0;
                    }

                    .AtOnceContainerSmallTopPadding${T} {
                        padding-top: 12px !important;
                    }

                    .AtOnceContainerPaddedLess${T} {
                        padding: 0 24px;
                    }

                    .AtOnceContainerPaddedTopTiny${T} {
                        padding-top: 4px;
                    }

                    .AtOnceContainerPaddedTopSmall${T} {
                        padding-top: 12px;
                    }

                    .AtOnceContainerPaddedTopMedium${T} {
                        padding-top: 16px;
                    }

                    .AtOnceContainerPaddedTopLarge${T} {
                        padding-top: 24px;
                    }

                    .AtOnceContainerFlexProducts${T} {
                        display: grid;
                        flex-wrap: unset;
                        width: calc(100% + 16px);
                        flex-direction: unset;
                        grid-template-rows: min-content;
                        grid-template-columns: 50% 50%;
                        overflow-y: auto;
                        user-select: none;
                        text-align: center;
                        padding-top: 0;
                        margin-left: -8px;
                        margin-bottom: 24px;
                        opacity: 0;
                        transition: 0.2s opacity linear;
                    }

                    .AtOnceContainerFlexProducts${T}.visible {
                        opacity: 1;
                    }

                    .AtOnceContainerPaddedTop${T} {
                        padding-top: 36px;
                    }

                    .AtOnceChatFirstContainer${T} {
                        height: 100%;
                    }

                    .AtOnceContainerScrollMiddle${T} {
                        width: 100%;
                        max-height: calc(100% - ${e_?"175px":"160px"});
                        height: 100%;
                        overflow-y: auto;
                        transition: 0.2s;
                        position: relative;
                    }

                    .AtOnceContainerScrollMiddleHelpCenter${T} {
                        max-height: calc(100% - 120px);
                    }

                    .AtOnceQuantityContainer${T} {
                        margin-top: 14px;
                    }

                    .AtOnceQuantitySubContainer${T} {
                        border: 1px solid #ddd;
                        border-radius: 12px;
                        width: fit-content;
                    }

                    .AtOnceQuantityButtons${T} {
                        height: 32px;
                        user-select: none;
                        width: 32px;
                        line-height: 32px;
                        text-align: center;
                        vertical-align: middle;
                        cursor: pointer;
                    }

                    .AtOnceQuantityLabel${T} {
                        color: #555;
                        font-size: 14px;
                        margin-bottom: 4px;
                        user-select: none;
                    }

                    .AtOnceQuantityLabelSmall${T} {
                        color: #555;
                        font-size: 13px;
                        margin-bottom: 2px;
                        user-select: none;
                    }

                    .AtOnceQuantityInput${T} {
                        width: 48px;
                        height: 16px;
                        user-select: none;
                        text-align: center;
                        vertical-align: middle;
                        margin-top: -2px;
                        border: none;
                        border-radius: 0;
                        outline: none !important;
                        color: #222;
                        font-size: 16px;
                        font-weight: 400;
                        padding: 0;
                        -moz-appearance: textfield;
                    }

                    .AtOnceQuantityInput${T}.smaller {
                        width: 36px;
                    }

                    .AtOnceQuantityInput${T}::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    .AtOnceQuantityInput${T}::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    .AtOnceContainerLiveChatMain${T} {
                        display: flex;
                        padding: 12px;
                        position: fixed;
                        bottom: 35px;
                        width: 100%;
						background: ${ed};
                    }

                    .AtOnceContainerLiveChatAttachmentsError${T} {
                        background: #f5f5f5;
                        width: calc(100% - 36px);
                        height: 64px;
                        border-radius: 16px;
                        margin-top: -80px;
                        position: absolute;
                        color: #dd0000;
                        font-size: 16px;
                        font-weight: 600;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        user-select: none;
                        opacity: 0;
                        pointer-events: none;
                    }

                    .AtOnceContainerLiveChatAttachmentsError${T}.shown {
                        animation: AtOnceErrorMessage${T} 4s linear forwards;
                    }

                    .AtOnceContainerLiveChatAttachments${T} {
                        background: #f5f5f5;
                        width: calc(100% - 36px);
                        height: 64px;
                        border-radius: 16px;
                        margin-top: -80px;
                        position: absolute;
                        display: none;
                        padding: 4px 12px;
                        overflow-y: auto;
                    }

                    .AtOnceContainerLiveChatAttachments${T}.shown {
                        display: block;
                    }

                    .AtOnceContainerLiveChatAttachments${T}::-webkit-scrollbar-track {
                        margin-top: 12px;
                        margin-bottom: 12px;
                    }

                    .AtOnceContainerLiveChatAttachments${T}::-webkit-scrollbar {
                        width: ${e_?'""':"8px"};
                    }

                    .AtOnceContainerLiveChatInput${T} {
                        width: calc(100% - ${e_?"44px":"40px"});
                        margin-right: 4px;
                        max-height: 100px;
                        outline: none;
                        overflow-y: auto;
                        background: #f5f5f5;
                        border-radius: 16px;
                        padding: 6px 31px 6px 12px;
                    }

                    .AtOnceContainerLiveChatInput${T} span {
                        background-color: #f5f5f5 !important;
                        background: #f5f5f5 !important;
                        font-family: ${eB} !important;
                        color: #222 !important;
                        font-size: ${e_?"16px !important":"15px !important"};
                    }

                    .AtOnceContainerLiveChatInputDisabled${T} {
                        max-height: 28px;
                        overflow-y: hidden;
                    }

                    .AtOnceContainerLiveChatInputDisabled${T}:empty:before{
                        color: #f5f5f5;
                    }

                    .AtOnceContainerLiveChatInput${T}::-webkit-scrollbar-track {
                        margin-top: 12px;
                        margin-bottom: 12px;
                    }

                    .AtOnceContainerLiveChatInput${T}::-webkit-scrollbar {
                        width: ${e_?'""':"8px"};
                    }

                    .AtOnceContainerLiveChatInput${T}::-webkit-scrollbar-thumb {
                        background-color: transparent;
                    }

                    .AtOnceContainerLiveChatButton${T} {
                        cursor: pointer;
                        user-select: none;
                        margin-left: 8px;
                        width: fit-content;
                        height: fit-content;
                        bottom: 47px;
                        right: 16px;
                        position: fixed;
                        background: ${ed};
                        border-radius: 50%;
                        padding: 9px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        align-self: center;
                        transition: 0.2s;
                        border: none;
                        outline: none;
                    }

                    .AtOnceContainerLiveChatButton${T}:disabled {
                        filter: grayscale(1) opacity(0.5);
                        pointer-events: none;
                    }

                    .AtOnceContainerLiveChatButton${T}:hover {
                        background: #f5f5f5;
                    }

                    .AtOnceContainerLiveChatButton${T}:active {
                        filter: brightness(0.9);
                    }

                    .AtOnceContainerLiveChatButton${T}.attachment {
                        filter: grayscale(1);
                        right: 60.5px;
                        background: transparent;
                        bottom: 52.5px;
                        padding: 2px;
                    }

                    .AtOnceContainerLiveChatButton${T}.attachment:hover {
                        filter: none;
                    }

                    .AtOnceGradientBackground${T} {
                        background: ${eg};
                        color: ${ef};
                        background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,${"#111"==ef?".12":".32"}));
                    }

                    .AtOnceTopContainer${T} {
                        ${e_?"":"border-top-right-radius: 24px;"}
                        ${e_?"":"border-top-left-radius: 24px;"}
                    }

                    .AtOnceBottomContainer${T} {
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        text-align: center;
						background: ${ed};
                    }

                    .AtOnceTopHeadingContainer${T} {
                        display: flex;
                        align-items: center;
                    }

                    .AtOnceChatTopBackButton${T} {
                        margin-right: 8px;
                        margin-left: -8px;
                    }

                    .AtOnceChatRoundedCircleIcon${T} {
                        border-radius: 50%;
                        transition: 0.2s linear;
                        text-decoration: none;
                        outline: none;
                        border: none;
                        user-select: none;
                        cursor: pointer;
                        padding: 4px;
                        background: ${ed}00;
                    }

                    .AtOnceChatRoundedCircleIcon${T}:hover {
                        background: ${ed}55;
                    }

                    .AtOnceMarginLeft${T} {
                        margin-left: auto;
                    }

                    .AtOnceMainHeading${T} {
                        font-size: 32px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceSubHeading${T} {
                        font-size: 18px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceSubHeadingSmall${T} {
                        font-size: 14px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceTextContainer${T} {
                        padding: 0 24px;
                        font-size: 16px;
                        font-weight: 400;
                    }
					
					.AtOnceTextContainer${T} h3 {
						font-weight: 600;
						font-size: 1.25rem;
						margin-block-end: 0;
					}
					
					.AtOnceTextContainer${T} h2 {
						font-weight: 600;
						font-size: 1.5rem;
						margin-block-end: 0;
					}

                    .AtOnceTextContainer${T} ul li::marker {
                        color: ${eA};
                    }

                    .AtOnceTextContainer${T} ol {
                        list-style: none;
                        counter-reset: my-atonce-counter;
                        padding-inline-start: 0;
                    }

                    .AtOnceTextContainer${T} ol li {
                        counter-increment: my-atonce-counter;
                        margin: 1rem 4px;
                        padding-left: 2.25rem;
                        position: relative;
                    }

                    .AtOnceTextContainer${T} ol li::before {
                        position: absolute;
                        top: .75rem;
                        left: 0;
                        transform: translateY(-50%);
                        content: counter(my-atonce-counter);
                        outline: 1px solid ${eA};
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius: 50%;
                        display: inline-block;
                        line-height: 1.5rem;
                        text-align: center;
                        margin-right: 0.5rem;
                        font-size: 0.9rem;
                    }

                    .AtOnceButtonContainer${T} {
                        display: ${e_?"block":"flex"};
                        justify-content: ${e_?"center":"space-between"};
                        padding-bottom: 12px;
                    }

                    .AtOnceMainButton${T} {
                        cursor: pointer;
                        font-size: 16px;
                        border-radius: 100px;
                        font-weight: 600;
                        outline: none;
                        width: 100%;
                        padding: ${e_?"11px":"8px"} 4px;
                        color: #333;
                        transition: 0.2s;
                        ${e_?"margin-top: 12px;":""}
                    }

                    .AtOnceMainButtonSmall${T} {
                        font-size: 14px;
                        font-weight: 400 !important;
                        width: unset;
                        padding: ${e_?"14px 26px":"12px 20px"};
                        border-width: 1px !important;
                        line-height: 0;
                        margin-right: 8px;
                        margin-top: -4px;
                    }

                    .AtOnceMainButtonSmall${T}.smaller {
                        margin-top: 2px;
                        margin-right: 0;
                        padding: 12px 14px;
                    }

                    .AtOnceMainButtonSmall${T}:hover {
                        box-shadow: 0 3px 6px rgb(0 0 0 / 0.15) !important;
                        filter: brightness(0.975) !important;
                    }

                    .AtOnceMainButton${T}:disabled {
                        color: #fff;
                        background: #ccc;
                        border-color: #ccc;
                        pointer-events: none;
                    }

                    .AtOnceMainButton${T}:hover {
                        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                        filter: brightness(0.95);
                    }

                    .AtOncePrimaryButton${T} {
                        color: ${ef};
                        padding: ${e_?"12.5px":"9.5px"} 5.5px;
                        border: none;
                        background: ${eg};
                        ${"#111"==ef?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOncePrimaryButton${T}.green {
                        background: #16AA9E !important;
                        color: white !important;
                    }

                    .AtOncePrimaryButton${T}.red {
                        background: #dd0000 !important;
                        color: white !important;
                    }

                    .AtOnceSecondaryButton${T} {
                        border: 1.5px solid ${eA};
                        background: transparent;
                    }

                    .AtOnceTertiaryButton${T} {
                        width: fit-content;
                        padding: 4px 12px;
                        border-width: 1px;
                        color: ${eA};
                        border-color: transparent;
                        font-weight: 600;
                        ${e_?"margin-top: -2px;":""}
                    }

                    .AtOnceQuaternaryButton${T}:hover {
                        box-shadow: none !important;
                    }

                    .AtOnceMainButtonLeft${T} {
                        margin-right: ${e_?"0":"4px"};
                    }

                    .AtOnceMainButtonRight${T} {
                        margin-left: ${e_?"0":"4px"};
                    }

                    .AtOnceMainButtonRightMargin${T} {
                        margin-left: 0 !important;
                    }

                    .AtOnceTriHeading${T} {
                        font-size: 16px;
                        font-weight: 600;
                    }

                    .AtOnceMobileTriHeading${T} {
                        ${e_?"padding: 0.5rem 0;":""}
                        ${e_?"font-size: 18px;":""}
                    }

                    .AtOnceBold${T} {
                        font-weight: 600;
                    }

                    .AtOnceSubTextBold${T} {
                        font-size: 14px;
                        font-weight: 600;
                    }

                    .AtOnceSubText${T} {
                        font-size: 14px;
                        font-weight: 400;
                        user-select: none;
                    }

                    .AtOnceSubTextSpacingLeft${T} {
                        margin-left: 3px;
                    }

                    .AtOnceSubTextSpacingRight${T} {
                        margin-right: 3px;
                    }

                    .AtOnceUserSelect${T} {
                        user-select: auto !important;
                    }

                    .AtOnceSubTag${T} {
                        text-align: right;
                    }
                    
                    .AtOnceSubTag${T}.gray {
                        color: #333;
                    }

                    .AtOnceSubTag${T}.blue {
                        color: #16AA9E;
                    }
                    
                    .AtOnceSubTextAntiMarginTop${T} {
                        margin-top: -8px;
                    }

                    .AtOnceSubTextMarginBottom${T} {
                        margin-bottom: 8px;
                    }

                    .AtOnceSubTextSmall${T} {
                        font-size: 13px;
                    }

                    .AtOnceSubTextLarge${T} {
                        font-size: 16px;
                    }

                    .AtOnceSubTextMediumMargin${T} {
                        margin-top: 8px;
                    }

                    .AtOnceTextLargeMargin${T} {
                        margin-top: 12px;
                    }

                    .AtOnceContainerLargeMargin${T} {
                        margin-top: ${e_?"24px":"16px"};
                    }

                    .AtOnceSubTextLargeMargin${T} {
                        margin-top: 24px;
                        margin-bottom: 12px;
                        font-weight: 600;
                    }

                    .AtOnceTextCenter${T} {
                        text-align: center;
                    }

                    .AtOnceSubTextMargin${T} {
                        margin-top: 2px;
                    }

                    .AtOnceSubHeadingMargin${T} {
                        margin: 24px 0 10px 24px;
                    }

                    .AtOnceSubHeadingMarginSmall${T} {
                        margin: 16px 0 10px 24px;
                    }

                    .AtOnceContactFormInput${T} {
                        border: none;
                        border-bottom: 1px solid #eee;
                        border-radius: 0;
                    }

                    .AtOnceTextColorError${T} {
                        color: #d40000;
                    }

                    .AtOnceTextColorTwo${T} {
                        color: #222;
                    }

                    .AtOnceTextColorThree${T} {
                        color: #333;
                    }

                    .AtOnceTextColorFive${T} {
                        color: #555;
                    }

                    .AtOnceTextColorSeven${T} {
                        color: #777;
                    }

                    .AtOnceTextColorNine${T} {
                        color: #999;
                    }

                    .AtOnceQuickIcon${T} {
                        width: fit-content;
                        height: fit-content;
                        margin-right: 6px;
                        background: transparent;
                        border-radius: 50%;
                        padding: 2px;
                        transition: 0.2s linear;
                    }

                    .AtOnceQuickButton${T} {
                        display: flex;
                        align-items: center;
                        padding: 10px 20px;
                        margin: 0;
                        width: 100%;
                        cursor: pointer;
                        transition: 0.2s linear;
                        background: ${ed}00;
                        text-decoration: none;
                        outline: none;
                        border: none;
                        user-select: none;
                    }

                    .AtOnceQuickButtonPaddedMore${T} {
                        padding: 16px 20px;
                        display: flex;
                        align-items: center;
                        margin: 0;
                        width: 100%;
                        text-decoration: none;
                        outline: none;
                        border: none;
                        user-select: none;
                    }

                    .AtOnceQuickButtonPaddedLess${T} {
                        padding: 10px 24px;
                    }

                    .AtOnceQuickButtonLink${T}:hover {
                        text-decoration: none;
                    }

                    .AtOnceQuickButtonPadded${T} {
                        padding: 17px 20px;
                    }

                    .AtOnceQuickButton${T}:hover {
                        background: ${eg}22;
                    }

                    .AtOnceQuickLinkButtonHeaders${T} {
                        margin-left: 4px;
                    }

                    .AtOnceReturnIconAdjustment${T} {
                        margin-right: -2px;
                        margin-left: 2px;
                    }

                    .AtOnceFAQIconAdjustment${T} {
                        margin-right: 1px;
                        margin-left: 1px;
                    }

                    .AtOnceFAQIconAdjustment${T}.faq {
                        margin-bottom: -1px;
                        margin-top: 1px;
                    }

                    .AtOnceDestinationLabel${T} {
                        font-size: 13px;
                        font-weight: 400;
                        color: #555;
                        margin-bottom: -7px;
                        margin-left: 2px;
                    }

                    .AtOnceDestinationInput${T} {
                        outline: 1px solid transparent;
                        border: 1px solid;
                        border-color: #ddd;
                        font-size: 14px;
                        font-weight: 400;
                        padding: 8px;
                        border-radius: 12px;
                        color: #333;
                        width: 100%;
                        height: 40px;
                        transition: 0s;
                    }

                    .AtOnceDestinationInput${T}:focus-visible {
                        outline: 1px solid ${eA};
                        border-color: transparent;
                    }

                    .AtOnceInputSubContainer_left${T} {
                        display: grid;
                        width: calc(50% - 8px);
                        float: left;
                    }

                    .AtOnceInputSubContainer_right${T} {
                        display: grid;
                        width: calc(50% - 8px);
                        margin-left: 16px;
                        float: right;
                    }

                    .AtOnceInputSubContainer_clear${T} {
                        clear: both;
                        padding-top: 16px;
                    }

                    .AtOnceMainShopProductSubContainer${T} {
                        flex: 50%;
                        padding: 8px;
                        cursor: default;
                        user-select: none;
                        opacity: 1;
                        color: #222;
                        min-width: 100%;
                    }

                    .AtOnceModalProductImageSlideshowContainer${T} {
                        position: relative;
                        width: 90%;
                        margin-left: 5%;
                        min-height: 100px;
                        display: block
                        overflow: hidden;
                    }

                    .AtOnceModalProductImageSlideshowChevron${T} {
                        cursor: pointer;
                        position: absolute;
                        top: calc(50% - 12px);
                        user-select: none;
                        border-radius: 100%;
                        background: ${ed}77;
                        line-height: 16px;
                        transition: linear 0.2s;
                    }

                    .AtOnceModalProductImageSlideshowChevron${T}:hover {
                        background: ${ed};
                    }

                    .AtOnceModalProductImageSlideshowChevron${T}:active {
                        filter: brightness(0.75);
                    }

                    .AtOnceModalProductImageSlideshowChevron_left${T} {
                        left: 0;
                        padding: 5px 5px 2px 4px;
                    }

                    .AtOnceModalProductImageSlideshowChevron_right${T} {
                        right: 0;
                        padding: 5px 4px 2px 5px;
                    }

                    .AtOnceMainShopStickyChangesContainer${T} {
                        background: ${ed};
                        width: 100%;
                        height: 64px;
                        position: fixed;
                        bottom: 0;
                        z-index: 1;
                        margin-left: -24px;
                        padding: 0 24px;
                        ${e_?"":"border-bottom-left-radius: 24px; border-bottom-right-radius: 24px;"}
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.2s linear;
                    }

                    .AtOnceMainShopStickyChangesContainer${T}.bigger {
                        height: 124px;
                        display: block !important;
                    }

                    .AtOnceMainShopStickyChangesContainer${T}.visible {
                        opacity: 1;
                        pointer-events: auto;
                    }

                    .AtOnceMainShopProductImageContainer${T} {
                        width: 100%;
                        user-select: none;
                        align-self: center;
                        align-items: center;
                        vertical-align: middle;
                        justify-content: center;
                        word-break: break-word;
                        hyphens: auto;
                        padding: 4px;
                        cursor: pointer;
                    }

                    .AtOnceMainShopProductImageContainer${T}:hover {
                        color: ${eA};
                    }

                    .AtOnceMainShopProductImageContainer${T}:hover + .AtOnceMainShopProductTitleContainer${T} {
                        color: ${eA};
                    }

                    .AtOnceMainShopProductImageDiv${T} {
                        align-self: center;
                        background: #eee;
                        text-align: center;
                        align-items: center;
                        padding-top: 100%;
                        user-select: none;
                        border-radius: 24px;
                        vertical-align: middle;
                        justify-content: center;
                    }

                    .AtOnceMainShopProductImageDivText${T} {
                        margin-top: calc(-50% - 14px);
                        font-size: 16px;
                        padding: 0 8px;
                    }

                    .AtOnceMainShopProductImage${T} {
                        width: 100%;
                        user-select: none;
                        border-radius: 24px;
                        pointer-events: none;
                    }

                    .AtOnceMainShopProductPriceContainer${T} {
                        pointer-events: none;
                        user-select: none;
                        line-height: 24px;
                    }

                    .AtOnceMainShopProductTitleContainer${T} {
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceMainShopProductTitleText${T} {
                        font-size: 16px;
                        font-weight: 600;
                        user-select: none;
                        pointer-events: none;
                    }

                    .AtOnceMainShopProductPriceText${T} {
                        color: #555;
                        font-weight: 400;
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceMainShopProductPriceText_compare${T} {
                        color: #777 !important;
                        text-decoration: line-through;
                        text-decoration-color: #777777aa;
                        margin-right: 12px;
                    }

                    .AtOnceModalBackground${T} {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        padding: 0;
                        z-index: 8;
                        overflow: hidden;
                        position: fixed;
                        transition: opacity linear 0.15s;
                        user-select: none;
                        pointer-events: none;
                        background-color: transparent;
                    }

                    .AtOnceModalBackground${T}.active {
                        opacity: 1;
                        pointer-events: auto;
                    }

                    .AtOnceModalContainer${T} {
                        width: 100%;
                        border: none;
                        height: 100%;
                        margin: auto;
                        opacity: 0;
                        outline: none;
                        padding: 16px;
                        max-width: 900px;
                        box-shadow: 0 0 3px #ccc;
                        max-height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto;
                        transition: linear 0.2s;
                        user-select: none;
                        border-radius: 0;
                        pointer-events: none;
                        scrollbar-color: #ccc ${ed};
                        background-color: ${ed};
                    }

                    .AtOnceModalContainer${T}::-webkit-scrollbar-track {
                        ${e_?"":"margin-top: 16px; margin-bottom: 16px;"}
                    }

                    .AtOnceModalContainer${T}.active {
                        opacity: 1;
                        pointer-events: auto;
                        ${e_?"":"border-radius: 22px; box-shadow: none;"}
                    }

                    .AtOnceModalCloseBtn${T} {
                        height: 24px;
                        width: 24px;
                        text-align: center;
                        float: right;
                        cursor: pointer;
                        user-select: none;
                        position: fixed;
                        right: ${e_?"12px":"20px"};
                        top: ${e_?"16px":"24px"};
                        z-index: 2;
                    }

                    .AtOnceModalCloseBtn${T}:hover {
                        filter: brightness(0.6);
                    }

                    .AtOnceModalCloseBtn${T}:active {
                        filter: brightness(0.5);
                    }

                    .AtOnceModalStickyBottomContainer${T} {
                        padding-top: 4px;
                        background: ${ed};
                        bottom: 0;
                        position: sticky;
                    }

                    .AtOnceModalProductImageContainer${T} {
                        width: 100%;
                        cursor: default;
                        display: block;
                        min-height: 100px;
                        padding-top: 8px;
                        user-select: none;
                        pointer-events: none;
                        margin-top: 24px;
                    }

                    .AtOnceModalProductImageContainer${T}.maxwidth {
                        width: 100% !important;
                    }

                    .AtOnceModalProductImageContainer${T}.slideshow {
                        margin: 0 20px;
                        overflow: hidden;
                        max-width: 400px;
                        transition: linear .4s;
                        flex-shrink: 0;
                        border-radius: 4px;
                    }

                    .AtOnceModalProductImage${T} {
                        width: 75%;
                        margin-left: 12.5%;
                        cursor: default;
                        max-width: 400px;
                        user-select: none;
                        border-radius: 24px;
                        pointer-events: none;
                    }

                    .AtOnceModalProductImageUL${T} {
                        padding: 0;
                        margin: 0;
                        list-style: none;
                        display: flex;
                    }

                    .AtOnceModalProductImageUL${T}:hover {
                        will-change: transform;
                    }

                    .AtOnceModalProductImage${T}.border {
                        border-radius: 36px;
                    }

                    .AtOnceModalProductRightContainer${T} {
                        width: 100%;
                        margin-top: 16px;
                        margin-left: 0;
                        overflow-x: hidden;
                        overflow-y: hidden;
                        float: none;
                        opacity: 1;
                        transition: linear 0.15s;
                    }
                        
                    .AtOnceModalProductRightContainer${T}::-webkit-scrollbar-track {
                        background: ${ed};
                        border-radius: 20px;
                        margin-top: 6px;
                        margin-bottom: 6px;
                    }

                    .AtOnceModalProductRightContainer${T}::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 20px;
                        border: 2.5px solid ${ed};
                    }

                    .AtOnceModalProductTitle${T} {
                        user-select: none;
                        font-weight: 600;
                        font-size: 24px;
                        color: #222;
                    }

                    .AtOnceModalProductVariantInfo${T} {
                        user-select: none;
                        margin-top: 4px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #999;
                    }

                    .AtOnceModalProductVariantInfo${T}.price {
                        margin-left: 24px;
                    }

                    .AtOnceVariantsLabel${T} {
                        color: #333;
                        font-size: 14px;
                        margin-top: 8px;
                        margin-bottom: 3px;
                        user-select: none;
                    }

                    .AtOnceModalProductVariantSelectionContainer_images${T} {
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        grid-template-rows: unset;
                        grid-template-columns: unset;
                        margin-bottom: -8px;
                    }

                    .AtOnceFlexTitle${T} {
                        display: flex;
                        align-items: center;
                    }

                    .AtOnceGreenCircle${T} {
                        margin-right: 10px;
                        background-color: #2ecc71;
                        font-size: 0;
                        width: 0;
                        height: 0;
                        line-height: 0;
                        padding: 6px;
                        margin-top: 2px;
                        align-items: center;
                        align-self: center;
                        border-radius: 50%;
                        display: inline-flex;
                    }

                    .AtOnceGreenCircle${T}.yellow {
                        background-color: #ffbb3b;
                    }

                    .AtOnceMainShopVariantsButton${T} {
                        color: #222;
                        border: 1px solid;
                        cursor: pointer;
                        outline: none;
                        padding: 6px 16px;
                        font-size: 14px;
                        background: ${ed};
                        transition: linear 0.1s;
                        font-weight: 400;
                        user-select: none;
                        border-color: #777;
                        margin-right: 8px;
                        border-radius: 500px;
                        margin-bottom: 8px;
                    }

                    .AtOnceMainShopVariantsButton${T}:hover {
                        border-color: #222;
                    }

                    .AtOnceMainShopVariantsButton${T}:disabled {
                        opacity: 0.2;
                        pointer-events: none;
                    }

                    .AtOnceMainShopVariantsButton_image${T} {
                        background-size: cover;
                        border-radius: 50%;
                        background-position: center;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        margin-left: 1.5px;
                    }

                    .AtOnceMainShopVariantsButton_one${T}:hover {
                        border-color: ${eA};
                    }

                    .AtOnceMainShopVariantsButton_image_active${T} {
                        border-color: #222;
                        outline: 1.5px solid #222;
                    }

                    .AtOnceMainShopVariantsButton_image_active_one${T} {
                        border-color: ${eA};
                        outline: 1.5px solid ${eA};
                    }

                    .AtOnceMainShopVariantsButton_active${T} {
                        color: ${ed};
                        background: #222;
                        border-color: #222;
                    }

                    .AtOnceMainShopProductDescription${T} {
                        margin: 32px 0;
                    }

                    .AtOnceMainShopProductDescription${T} img {
                        border-radius: 16px;
                        max-width: 100%;
                    }

                    .AtOnceMainShopProductDescription${T}:after {
                        clear: both;
                        content: "";
                        display: block;
                    }


                    .AtOncePoweredByContainer${T} {
                        padding: 12px 0;
                    }

                    .AtOncePoweredByLink${T} {
                        user-select: none;
                        text-decoration: none !important;
                        color: #aaa;
                        transition: 0.2s linear;
                    }

                    .AtOncePoweredByText${T} {
                        font-weight: 600;
                        color: #1a73e8;
                    }

                    .AtOncePoweredByLink${T}:hover {
                        color: #1a73e8;
                    }


                    .AtOnceTiBlock${T} {
                        -webkit-box-align: center;
                            -ms-flex-align: center;
                                align-items: center;
                        display: table;
                        height: 20px;
                        padding: 11px 15px 11px 17px;
                        margin-top: 2px;
                        border-radius: 100px;
                        width: fit-content;
                        background: #eee;
                    }
                    
                    .AtOnceTiContainer${T} .AtOnceTidot${T} {
                        background-color: #777;
                    }
                    
                    .AtOnceTidot${T} {
                        -webkit-animation: AtOnceMercuryTypingAnimation${T} 1.5s infinite ease-in-out;
                                animation: AtOnceMercuryTypingAnimation${T} 1.5s infinite ease-in-out;
                        border-radius: 50%;
                        display: inline-block;
                        height: 8px;
                        margin-right: 4px;
                        width: 8px;
                    }
                    
                    .AtOnceTidot${T}:nth-child(1) {
                        -webkit-animation-delay: 200ms;
                                animation-delay: 200ms;
                    }
                    
                    .AtOnceTidot${T}:nth-child(2) {
                        -webkit-animation-delay: 300ms;
                                animation-delay: 300ms;
                    }
                    
                    .AtOnceTidot${T}:nth-child(3) {
                        -webkit-animation-delay: 400ms;
                                animation-delay: 400ms;
                    }

                    @-webkit-keyframes AtOnceMercuryTypingAnimation${T} {
                        0% {
                            -webkit-transform: translateY(0)
                        }
                    
                        28% {
                            -webkit-transform: translateY(-4px)
                        }
                    
                        44% {
                            -webkit-transform: translateY(0)
                        }
                    }
                    
                    @keyframes AtOnceMercuryTypingAnimation${T} {
                        0% {
                            -webkit-transform: translateY(0)
                        }
                    
                        28% {
                            -webkit-transform: translateY(-4px)
                        }
                    
                        44% {
                            -webkit-transform: translateY(0)
                        }
                    }

                    @keyframes AtOnceSpinner${T} {
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes AtOnceShowSubContainer${T} {
                        0% {opacity: 0;}
                        100% {opacity: 1;}
                    }

                    @keyframes AtOnceHideSubContainer${T} {
                        0% {opacity: 1;}
                        100% {opacity: 0;}
                    }

                    @keyframes AtOnceShowChatButton${T} {
                        0% {transform:translate(0px, 10px);}
                        100% {transform:translate(0px, 0px);}
                    }

                    @keyframes AtOnceHidePrimaryContainer${T} {
                        0% {opacity: 1;${e_?"":"transform:translate(0px, 0px);"}}
                        100% {opacity: 0;user-select:none;${e_?"":"transform:translate(0px, 10px);"}}
                    }

                    @keyframes AtOnceShowPrimaryContainer${T} {
                        0% {opacity: 0;${e_?"":"transform:translate(0px, 10px);"}}
                        100% {opacity: 1;user-select:unset;${e_?"":"transform:translate(0px, 0px);"}}
                    }

                    @keyframes AtOnceErrorMessage${T} {
                        0% {opacity: 0;z-index:1;pointer-events: auto;}
                        5% {opacity: 1;z-index:1;pointer-events: auto;}
                        95% {opacity: 1;z-index:1;pointer-events: auto;}
                        100% {opacity: 0;z-index:-1;pointer-events: none;}
                    }
                    `;let eD=[],eF=[],eJ="";function eq(e,t,o,n,i){return{attachments_fetched:"true",from:e,id:t,message:o,messageId:t,name:e,sender:J.currentUser.uid,snippet:"",subject:o.substring(0,30),threadId:n,timestamp:Date.now(),to:Y,type:"live",other_attachments:i}}function ej(e,t){let o=Math.floor(Date.now());(e=Number(e)).toString().length>15&&(e/=1e3);let n=o-e;if(t&&(n=e-o),n<12e4)return"Now";if(n<36e5)return`${Math.round(Number(n)/6e4)}m ago`;if(n<864e5)return`${Math.round(Number(n)/36e5)}h ago`;if(n<6048e5)return function e(t){let o=new Intl.DateTimeFormat("en-US",{dateStyle:"full",timeZone:`${Intl.DateTimeFormat().resolvedOptions().timeZone}`}),n=o.format(new Date(1e3*t));return n.substring(0,n.indexOf(","))}(e/1e3);if(n>6048e5)return function e(t){let o=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeZone:`${Intl.DateTimeFormat().resolvedOptions().timeZone}`});return o.format(new Date(1e3*t)).split(",")[0]}(e/1e3);else return""}async function eQ(){let e=p(F,"messages",`${Y}`,"user_threads",`${J.currentUser.uid}`,"threads");return new Promise(async function(t,o){try{v(e).then(e=>{e.empty||e.forEach(e=>{let t=e.data().list;t&&Array.prototype.push.apply(eD,t)}),t(!0)}).catch(e=>{t(!0)})}catch(n){t(!0)}})}async function eZ(){try{if(ea){let e=eh.getElementById("AtOnceLiveChatMainContainer");if(e){let t=Date.now()-ea,o=eh.getElementById("atOnceAgentTypingIndicatorContainer");if(o){if(t>4e3){et=!1;try{clearInterval(eo)}catch(n){}o.remove()}else!1==et&&(et=!0,eo=setInterval(function(){eZ()},2e3))}else{if(t<4e3){let i=document.createElement("div");i.className=`AtOnceTiContainer${T}`,i.id="atOnceAgentTypingIndicatorContainer";let a=document.createElement("div");a.className=`AtOnceTiBlock${T}`;for(let l=0;l<3;l++){let p=document.createElement("div");p.className=`AtOnceTidot${T}`,a.appendChild(p)}i.appendChild(a),e.appendChild(i)}!1==et&&(et=!0,eo=setInterval(function(){eZ()},2e3))}}}}catch(r){}}async function eY(e){let o=r(p(F,"messages",`${Y}`,"all_msgs",`${e}`,"sub_msgs"),u("timestamp","desc"),s(20));try{let c=r(l(F,"messages",`${Y}`,"user_threads",`${J.currentUser.uid}`));$(c,e=>{try{let t=e.data();if(t){if(t.agent_read&&!1==isNaN(t.agent_read)){ei=Number(t.agent_read);let o=eh.getElementById("AtOnceMessageSeenText");o&&(o.innerText="Read");let n=eh.getElementById("AtOnceMessageConnectedText");n&&Date.now()-ei<18e4&&el&&(n.className=`AtOnceFlexCenter${T} AtOnceTimestampContainer${T} AtOnceTextColorNine${T} AtOnceSubText${T}`,n.innerText=`${el} joined the chat`)}t.agent_typed&&!1==isNaN(t.agent_read)&&(ea=Number(t.agent_read)),t.agent_read_by&&(el=t.agent_read_by),t.agent_typed_by&&(ep=t.agent_typed_by),eZ()}}catch(i){}})}catch(d){}$(o,o=>{try{o.docChanges().forEach(o=>{try{let l=o.doc.data();if(l){let p=l.message.id;for(let r of eF)if(r.threadId==e){let c=r.messages;if(c){let s=c.findIndex(function(e){return e.id==p});function u(o){let l=eh.getElementById("AtOnceLiveChatMainContainer");if(eJ==e&&l&&!0==t){try{"visible"==document.visibilityState?(n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)):(en||(en=window.top.document.title),window.top.document.title=`(1) ${en}`)}catch(p){}o&&tO(c,l)}else if(!1==t||"hidden"==document.visibilityState)try{let r=[];try{let s=J.currentUser.uid;if(c&&c.length)for(let u of c)u.timestamp&&u.timestamp>n&&u.sender!==s&&r.push(u)}catch(d){}if(r.length){let v=r.slice(0,3);if(!1==t){f.innerHTML="";let $=document.createElement("div");$.className=`AtOnceLiveChatCloseButton${T}`,$.innerHTML=eN,$.addEventListener("click",function(){try{_.className=`AtOnceChatNotification${T} hidden`,en&&(window.top.document.title=en),f.className=`AtOnceLiveChatMessagesContainer${T} hidden`,f.innerHTML="";try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(e){}}catch(t){}}),f.appendChild($);let m=v.length;for(let h=0;h<m;h++){let g=document.createElement("div");1==m?g.className=`AtOnceMessageContainerPreview${T} three`:2==m?g.className=`AtOnceMessageContainerPreview${T} ${0==h?"two":"three"}`:g.className=`AtOnceMessageContainerPreview${T} ${0==h?"one":1==h?"two":"three"}`,g.innerHTML=K(Autolinker.link(v[h].message)),g.addEventListener("click",function(){tB(),t1(e,c)}),i=e,a=c,f.appendChild(g)}AtOnceChatContainer.style.width="100%",AtOnceChatContainer.style.height="100%",f.className=`AtOnceLiveChatMessagesContainer${T}`,th=[]}en||(en=window.top.document.title),window.top.document.title=`(${r.length}) ${en}`,_.innerText=r.length,_.className=`AtOnceChatNotification${T}`}}catch(A){}}-1==s?(r.messages.push(l.message),r.timestamp=l.timestamp,eF.sort(function(e,t){return t.timestamp-e.timestamp}),u(!0)):u()}break}}}catch(d){}})}catch(l){}},e=>{})}async function eW(e){try{return new Promise(async function(t,o){try{let n=r(p(F,"messages",`${Y}`,"all_msgs",`${e}`,"sub_msgs"),u("timestamp","desc"),s(20));v(n).then(o=>{if(o.empty)eY(e),t(!0);else try{let n=[];o.forEach(e=>{let t=e.data().message;t&&n.push(t)}),n.length&&(n.sort(function(e,t){return e.timestamp-t.timestamp}),eF.push({threadId:e,messages:n,timestamp:n[n.length-1].timestamp}),eY(e)),t(!0)}catch(i){t(!0)}}).catch(e=>{t(!0)})}catch(i){t(!0)}})}catch(t){return!0}}function eX(e){setTimeout(function(){try{e.selectionStart=e.selectionEnd=1e4,e.focus(),e.scrollLeft=e.scrollWidth}catch(t){}},0)}let te=document.createElement("div");te.className=`AtOnceSubContainer${T}`;let tt=document.createElement("div");tt.style.cssText="visibility:hidden !important;position:relative !important;display:none !important;width:0;height:0;line-height:0;transform:scale(0);",tt.className=`AtOnceChatPrimaryContainer${T}`;let to=document.createElement("div");to.className=`AtOnceChatFirstContainer${T}`;let tn=document.createElement("div");function ti(e){let t=document.createElement("div");return(t.innerHTML=e),t.textContent}async function ta(){try{await tp.then(()=>{if(eF.length){eF.sort(function(e,t){return t.timestamp-e.timestamp});let e=document.createElement("div"),t=document.createElement("div");for(let o of(t.innerText="Your conversations",t.className=`AtOnceSubHeadingSmall${T} AtOnceTextColorSeven${T} AtOnceSubHeadingMargin${T}`,e.appendChild(t),eF))try{let n=o.messages,i=n[n.length-1],a=ti(i.subject.substring(0,30)).replace(/\n/g," "),l=ti(i.snippet.substring(0,30)).replace(/\n/g," "),p=ej(i.timestamp),r=o.threadId,c=document.createElement("div");c.className=`AtOnceFlexSpaced${T} AtOnceQuickButton${T} AtOnceQuickButtonPaddedLess${T}`,c.addEventListener("click",function(){t1(r,n)});let s=document.createElement("div"),u=document.createElement("div");u.className=`AtOnceSubText${T} AtOnceSubTextLarge${T} AtOnceTextColorThree${T}`,u.innerText=a;let d=document.createElement("div");d.innerText=l,d.className=`AtOnceSubText${T} AtOnceTextColorSeven${T}`,s.appendChild(u),s.appendChild(d);let v=document.createElement("div");v.className=`AtOnceSubText${T} AtOnceFlexStart${T} AtOnceTextColorNine${T}`,v.innerText=p,c.appendChild(s),c.appendChild(v),e.appendChild(c)}catch($){}eh.getElementById("AtOnceLiveChatMainContainer")||tn.appendChild(e)}})}catch(e){}}tn.className=`AtOnceContainerScrollMiddle${T}`;let tl=!1,tp=tr();async function tr(){return new Promise(async function(e,t){if(!0==tl)e(!0);else try{eQ().then(()=>{try{if(eD.length>0){let t=eD.slice(-5),o=[];for(let n of t)o.push(eW(n));eC(o).then(()=>{tl=!0,e(!0)})}else tl=!0,e(!0)}catch(i){tl=!0,e(!0)}})}catch(o){tl=!0,e(!0)}})}let tc=document.createElement("div");tc.className=`AtOnceContainerPadded${T} AtOnceTopContainer${T} AtOnceGradientBackground${T}`;let ts=document.createElement("div"),tu=document.createElement("div");tu.className=`AtOnceTopHeadingContainer${T}`;let td=document.createElement("div");td.className=`AtOnceChatRoundedCircleIcon${T} AtOnceChatTopBackButton${T}`,td.style.display="none";let tv=document.createElement("div");tv.innerHTML=e2,td.appendChild(tv);let t$=document.createElement("div");tu.appendChild(td),tu.appendChild(t$);let tm=document.createElement("div");tm.className=`AtOnceSubText${T} AtOnceSubTextMargin${T}`,ts.appendChild(tu),ts.appendChild(tm),tc.appendChild(ts);let th=[],t_=`Usually replies in ${W}`;if(X){let tg=ee-X;if(tg<9e5)t_=`
                            <div class="AtOnceFlexTitle${T}"><span class="AtOnceGreenCircle${T}"> </span>We’re Online</div>
                            <div class="AtOnceSubText${T} AtOnceSubTextMargin${T}">${t_}</div>`;else if(tg>9e5){var tf;t_=`
                            <div class="AtOnceFlexTitle${T}"><span class="AtOnceGreenCircle${T} yellow"> </span>Active ${(tf=e1(Number((tg/6e4).toFixed(0)))).toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")} Ago</div>
                            <div class="AtOnceSubText${T} AtOnceSubTextMargin${T}">${t_}</div>`}}let tA=new h(ev,{distance:2e3,keys:["heading","subheading","actions_heading","text",]});function t0(e,t,o,n){e||(e="order");let i=[],a=tA.search(e);if(a.item)i.push(a);else for(let l of a)try{if(i.length>o)break;i.push(l.item)}catch(p){}if(i.length){for(let r of(t.innerHTML="",i))tw(r,t,!1,!1,"",t,!1,"","",!0,void 0,n);if(!0==n)try{setTimeout(function(){try{t.scrollIntoView({behavior:"smooth",block:"end"})}catch(e){}},2)}catch(c){}}}function tx(e){let t=document.createElement("a");t.rel="noopener noreferrer nofollow";let o=e.name;return void 0===e.type?(t.href=`data:${e.mimetype},${e.url}`,t.target="_blank",t.download=o):"image"==e.type?(t.href=`data:image/${e.filetype},${e.url}`,t.target="_blank",t.download=o):(t.href=`${e.url}`,t.target="_blank"),t}function tO(e,t){try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(o){}try{if(t.innerHTML="",e&&e.length){let i=e.length,a=i-1,l="",p="",r=0,c="",s=document.createElement("div");s.className=`AtOnceTextCenter${T} AtOnceSubHeadingSmall${T} AtOnceTextColorThree${T} AtOnceSubTextAntiMarginTop${T}`,s.innerText=`We’ll reply here & email ${z||localStorage.getItem("AtOnceLiveChatUserEmail")}`,t.appendChild(s);for(let u=0;u<i;u++){let d=e[u];if(d&&d.message){let v=d.name,$=d.to,m=d.timestamp,h=!1;d.sender!==Y&&(h=!0);let _=document.createElement("div");_.className=`AtOncePrimaryMessageContainer${T} ${h?"self":"sender"}`;let g=document.createElement("div");g.className=`AtOnceMessageContainer${T} ${h?"self":"sender"}`,g.innerHTML=K(Autolinker.link(d.message));try{if(d.first_url_title){let f=g.getElementsByTagName("a");if(f.length){let A=f[0].cloneNode(!1);A.className=`AtOnceMessageContainerLink${T} ${h?"self":"sender"}`,A.innerText=d.first_url_title,g.appendChild(A)}}}catch(x){}let O="",C="",y=l==v||p==$&&$==Y;if(y&&(g.classList.add("middle"),c&&-1!==c.className.indexOf("end")&&(c.classList.remove("end"),c.classList.add("start"))),!y){c?(g.classList.add("end"),c.classList.remove("middle"),c.classList.add("end")):g.classList.add("start");let b=document.createElement("div");if(b.className=`${""==l?"":"AtOncePrimarySubjectHeader"}${T} AtOnceSubText${T} AtOnceSubTextSmall${T} ${h?`AtOnceSubTextSpacingRight${T}`:`AtOnceSubTextSpacingLeft${T}`} AtOnceTextColorSeven${T} ${h?`AtOncePrimaryMessageContainer${T} self`:""}`,!0==h?b.innerText="Me":b.innerText=`${v}`,_.appendChild(b),m-r>12e4){r=m;let S=document.createElement("div");S.className=`AtOnceFlexCenter${T} AtOnceTimestampContainer${T} AtOnceTextColorNine${T}`,S.innerText=ej(m),t.appendChild(S)}}if(u==a){g.className=`AtOnceMessageContainer${T} ${h?"self":"sender"} end`;try{h&&((O=document.createElement("div")).className=`AtOnceSeenContainer${T}`,O.id="AtOnceMessageSeenText",ei>=d.timestamp?O.innerText="Read":O.innerText="Unread"),(0==u||Math.abs(d.timestamp-ei)>12e5)&&((C=document.createElement("div")).id="AtOnceMessageConnectedText",ei>d.timestamp&&Date.now()-ei<18e4&&el&&(C.className=`AtOnceFlexCenter${T} AtOnceTimestampContainer${T} AtOnceTextColorNine${T} AtOnceSubText${T}`,C.innerText=`${el} joined the chat`))}catch(M){}}_.appendChild(g),t.appendChild(_),O&&t.appendChild(O),C&&t.appendChild(C);let w=d.other_attachments,P=`${h?"self":"sender"}`;if(w&&w.length)for(let k of w)try{let L=document.createElement("div"),N=tx(k),E=k.name;if(""==E){E="File";let B=k.filetype;""!==B&&(E+=`.${B}`)}let H=E.substring(0,35);function I(e){let t=document.createElement("img");t.addEventListener("error",function(){t.style.display="none",L.className=`AtOnceMainAttachmentsUnavailable${T} ${P}`,L.innerHTML="Image unavailable/expired",N.removeAttribute("href"),N.removeAttribute("target"),N.removeAttribute("download"),N.remove()}),t.src=e.url,t.className=`AtOnceMainAttachmentsPreview${T}`,L.classList.add("image"),L.innerText="",L.appendChild(t)}function R(e){let t=document.createElement("video");t.style.width="100%",t.controls=!0;let o=document.createElement("source");o.src=e.url,t.appendChild(o),L.classList.add("video"),L.innerText="",L.appendChild(t)}function U(e){let t=document.createElement("audio");t.style.width="100%",t.controls=!0;let o=document.createElement("source");o.addEventListener("error",function(){o.style.display="none",t.style.display="none",N.removeAttribute("href"),N.removeAttribute("target"),N.removeAttribute("download"),N.remove(),L.className=`AtOnceMainAttachmentsUnavailable${T} ${P}`,L.innerHTML="Audio file unavailable"}),o.src=e.url,t.appendChild(o),L.classList.add("audio"),L.innerText="",L.appendChild(t)}E.length>35&&(H=`${H}...`),L.className=`AtOncePseudoAttachmentLink${T} ${P}`,L.title=E,L.innerText=`${H}`,!1!==k.mimetype&&(-1!==k.mimetype.indexOf("image")?I(k):-1!==k.mimetype.indexOf("video")?R(k):-1!==k.mimetype.indexOf("audio")&&U(k)),L.addEventListener("click",function(){N&&N.click()}),t.appendChild(L)}catch(G){}l=v,p=$,c=g}}}try{setTimeout(function(){tn.children[0].scrollIntoView({behavior:"smooth",block:"end"})},2)}catch(V){}}catch(D){}}async function t9(e){return new Promise(async function(t,o){try{await ey(e,"orders").then(e=>{if(e&&e[0]){let o=e[0],n=o.line_items,i=[];if(o.line_items_returned&&o.line_items_returned.length){o.is_changeable=!1;let a=o.line_items_returned;for(let l of a){let r=1;l.quantity&&(r=Number(l.quantity)),isNaN(r)&&(r=1),i.push({id:l.id,line_item:l.line_item,product_id:l.product_id,quantity:r})}}let c=p(F,ec,e[1],"products");n?t2(n,i,!1,c,o.currency).then(()=>{t(e)}):t(null)}else t(null)})}catch(n){t(null)}})}function tC(){td.style.display="",tn.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerHTML="Recent Orders",t$.className=`AtOnceSubHeading${T}`,tm.innerText="",tm.style.display="none";let e=document.createElement("div");e.className=`AtOnceContainerPaddedTopSmall${T}`;let t=document.createElement("div");t.className=`AtOnceFlexCenter${T}`;let o=document.createElement("button");return o.id=`AtOnceFindOtherOrders${T}`,o.className=`AtOnceMainButton${T} AtOnceSecondaryButton${T} AtOnceTertiaryButton${T}`,o.innerText="Find Another Order",o.addEventListener("click",function(){t3(!0)}),t.appendChild(o),e.appendChild(t),e}async function ty(e,t){return new Promise(async function(o,n){let i=function e(){let t=localStorage.getItem("AtOnceOrders"),o=[];if(t)try{let n=t.split(",");if(n&&n.length)for(let i of n)try{i&&i.length>7&&-1==o.indexOf(i)&&o.push(i.replace("_atonce_",""))}catch(a){}}catch(l){}return o}(),a=[];if(i.length){for(let l of i=i.slice(0,15))a.push(t9(l));await eC(a).then(n=>{if(a.length&&n){let i=[];for(let l of n)if(l){let p=l[1],r=i.findIndex(function(e){return e.store==p});-1==r&&i.push({order:l[0],store:p,order_identifier:l[2]})}if(i.length)for(let c of i)M(c.order_identifier,c.order.customer_id,c.store)}if(e){if(n&&n.length){let s=tC();for(let u of(e7=[],n)){if(u){let d=u[1],v=u[0];tS(v,d,s,tn)}e7.push(u)}tn.innerHTML="";eh.getElementById("AtOnceLiveChatMainContainer")||tn.appendChild(s)}}else if(t)for(let $ of(e7=[],n))$&&e7.push($);o(!0)})}else o(null)})}function t1(e,t,o){t$.innerHTML=t_,t$.className=`AtOnceSubHeading${T}`,tm.style.display="none",td.style.display="",th=[];let n=[],i=0,a=async e=>{let t=Array.from(e.target.files);d(t)};if(o){let l=t[0];L("send_live_message",{company:Y,user:J.currentUser.uid,email:z,message:l.message,id:l.id,threadId:e,u:!0}).then(()=>{eY(e)});let p=eF.findIndex(function(t){return t.threadId==e});-1==p&&eF.unshift({threadId:e,timestamp:Date.now(),messages:t})}eJ=e;let r=document.createElement("div");r.id="AtOnceLiveChatMainContainer",r.className=`AtOnceContainerPadded${T} AtOnceContainerMarginBottom${T}`,tO(t,r);let c=document.createElement("div");c.className=`AtOnceContainerLiveChatMain${T}`;let s=document.createElement("div");s.className=`AtOnceContainerLiveChatAttachments${T}`;let u=document.createElement("div");async function d(e){try{let t=e.length;for(let o=0;o<t;o++){let a=await e[o],l=Number(a.size);if(l>20971520||l+i>20971520)u.classList.add("shown");else{let p=a.name,r=a.type;i+=l;let c=`${E(32)}${p}`,d=x(D,`attachments/${Y}/${c}`),v={customMetadata:{user_id:`${J.currentUser.uid}`,owner:`${Y}`}},$=document.createElement("div");$.className=`AtOnceFlex${T}`;let m=document.createElement("span");m.innerHTML=`${p} <span class="AtOnceAttachmentsUploading${T}">Uploading</span>`;let h=document.createElement("div");h.className=`AtOnceAttachmentCloseBtn${T}`,h.innerHTML=e6;let _=!1;$.appendChild(m),$.appendChild(h),s.appendChild($),s.classList.add("shown"),O(d,a,v).then(()=>{A(d).then(e=>{if(!1==_)n.push({url:e,fakeName:c,name:p,fileName:p,mimetype:r}),m.innerText=`${p}`;else{$.remove();try{C(d)}catch(t){}}}).catch(e=>{})}),h.addEventListener("click",function(){_=!0,$.remove();try{C(d)}catch(e){}if(n.length)try{for(let t of n)if(t.fakeName==c){n=n.filter(e=>e!==t);break}}catch(o){}0==n.length&&s.classList.remove("shown")})}}}catch(g){}}u.className=`AtOnceContainerLiveChatAttachmentsError${T}`,u.innerText="Max file size is 20MB";let v=document.createElement("div"),$=document.createElement("span");$.className=`AtOnceContainerLiveChatInput${T}`,$.setAttribute("placeholder","Write a message"),$.contentEditable=!0,$.addEventListener("keydown",function e(t){try{"Enter"===t.key&&!1==t.shiftKey&&b()}catch(o){}});let m=`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="${"#111"==ef?e0:eg}" d="M18.08,12.42,11.9,18.61a4.25,4.25,0,0,1-6-6l8-8a2.57,2.57,0,0,1,3.54,0,2.52,2.52,0,0,1,0,3.54l-6.9,6.89A.75.75,0,1,1,9.42,14l5.13-5.12a1,1,0,0,0-1.42-1.42L8,12.6a2.74,2.74,0,0,0,0,3.89,2.82,2.82,0,0,0,3.89,0l6.89-6.9a4.5,4.5,0,0,0-6.36-6.36l-8,8A6.25,6.25,0,0,0,13.31,20l6.19-6.18a1,1,0,1,0-1.42-1.42Z"/>
                        </svg>
                        `,h=`
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="${"#111"==ef?e0:eg}" xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(1, 0)" d="m16.6915026 12.4744748-13.18537879.785487c-.31393759 0-.47090638.1570974-.47090638.3141948l-1.88362554 6.440993C.8376543 20.8006365.99 21.89 1.77946707 22.52c.63053293.47 1.72665674.58 2.35453192.3229026L21.714504 14.0454487c.9418128-.4712921 1.4127191-1.4138765 1.2557504-2.3564608-.1569688-.6283896-.6278752-1.2567791-1.2557504-1.5709739L4.13399899 1.16346272C3.34915502.9 2.40734225 1.00636533 1.77946707 1.4776575.9946231 2.10604706.8376543 3.0486314 1.15159189 3.99121575l1.88362554 6.44099305c0 .1570973.31393759.3141947.47090638.3141947l13.18537879.785487s.4709063 0 .4709063.4712922c0 .4712921-.4709063.4712921-.4709063.4712921Z"/>
                        </svg>
                        `,_=document.createElement("input");_.style.display="none",_.type="file",_.multiple=!0,_.addEventListener("change",a);let f=document.createElement("button");f.className=`AtOnceContainerLiveChatButton${T} attachment`,f.innerHTML=m,f.addEventListener("click",function(){_.click()});let y=document.createElement("button");function b(){try{let t=$.innerText,o=t.replace(/\s+/g,"");function i(){setTimeout(function(){$.innerText="",y.disabled=!0,$.classList.remove(`AtOnceContainerLiveChatInputDisabled${T}`)},1e-6)}if(o.length>0){$.classList.add(`AtOnceContainerLiveChatInputDisabled${T}`);let a=E(20),l=[];if(n.length)for(let p of n)try{l.push({url:p.url,fileName:p.fileName,name:p.name,mimetype:p.mimetype,filetype:g.getExtension(p.mimetype)})}catch(c){}for(let u of(L("send_live_message",{company:Y,user:J.currentUser.uid,email:z,message:t,attachments:l,threadId:e,id:a}),s.classList.remove("shown"),s.innerHTML="",eF))if(u.threadId==e){let d=u.messages;if(d){let v=d.findIndex(function(e){return e.id==a});if(-1==v){let m=eq(z,a,t,e,l);u.messages.push(m),u.timestamp=m.timestamp,eF.sort(function(e,t){return t.timestamp-e.timestamp}),tO(u.messages,r)}}break}i()}else $.classList.add(`AtOnceContainerLiveChatInputDisabled${T}`),i()}catch(h){}}y.className=`AtOnceContainerLiveChatButton${T}`,y.innerHTML=h,y.disabled=!0,y.addEventListener("click",function(){b()});let S=Date.now();$.addEventListener("keyup",function(){try{$.innerText.length>0?y.disabled=!1:y.disabled=!0}catch(e){}try{let t=$.innerText.trim();if(t.length>0){let o=Date.now();o-S>500&&(S=o,t0(t,v,2,!0))}else v.innerHTML=""}catch(n){}}),c.appendChild(u),c.appendChild(s),c.appendChild($),c.appendChild(_),c.appendChild(f),c.appendChild(y),tn.innerHTML="",tn.appendChild(r),tn.appendChild(v),tn.appendChild(c),eX($),eZ()}function tb(e,t,o,n,i){let a=document.createElement("div");a.className=`AtOnceContainerPadded${T} AtOnceButtonContainer${T}`;let l=`AtOnceMainButton${T} AtOnceMainButtonLeft${T} AtOncePrimaryButton${T}`,p=`AtOnceMainButton${T} AtOnceMainButtonRight${T} AtOnceSecondaryButton${T}`,r=eh.getElementById("AtOnceMainSearchInput"),c=document.createElement("button");c.className=t?p:l,c.innerText="Okay, thanks",c.addEventListener("click",function(){if(!0==i){e.innerHTML="";try{r.dispatchEvent(new KeyboardEvent("keyup",{key:"a"}))}catch(t){}}else e8?t4():t6(e$,"Quick links")});let s=document.createElement("button");if(s.className=t?l:p,s.innerText="Message us",s.addEventListener("click",function(){if(!0==i)e.innerHTML="";else{let t="";try{e8&&(t=eE.name)}catch(a){}!function e(t,o,n){t$.innerHTML=t_,t$.className=`AtOnceSubHeading${T}`,tm.style.display="none";let i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");l.className=`AtOnceContainerPaddedLess${T}`;let p=document.createElement("div");p.className=`AtOnceContainerLargeMargin${T}`;let r=document.createElement("div");r.className=`AtOnceSubText${T} AtOnceSubTextLargeMargin${T} AtOnceTextCenter${T}`,r.innerText=`Need something else? We’d love to help!`;let c=document.createElement("input");c.className=`AtOnceContactFormInput${T}`,c.placeholder="Enter your email",c.type="text";let s=document.createElement("textarea");s.maxLength=5e3,s.placeholder="Leave a message",(t||o)&&o&&(s.value=`Order ${o}. `);let u=document.createElement("button");u.disabled=!0,u.innerText="Send",u.className=`AtOnceMainButton${T} AtOncePrimaryButton${T} AtOnceSubTextMediumMargin${T}`;let d=Date.now();function v(){setTimeout(function(){try{u.innerText="Send"}catch(e){}},3e3)}s.addEventListener("keyup",function(){try{let e=s.value;if(e.length>0){let t=Date.now();t-d>500&&(d=t,t0(e,p,4)),u.disabled=!1}else u.disabled=!0}catch(o){}}),u.addEventListener("click",function(){try{if(-1==c.value.indexOf("@"))u.innerText="Invalid Email",v();else if(""==s.value.trim())u.innerText="Invalid Message",v(),eX(s);else{var e;let t=c.value.trim().toLowerCase();!0==J.currentUser.isAnonymous&&t!==z&&localStorage.setItem("AtOnceLiveChatUserEmail",t),z=t;let o=s.value.trim(),n=(e=`${J.currentUser.uid}${o.substring(0,30)}`,window.btoa(unescape(encodeURIComponent(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")),i=E(20);t1(n,[eq(z,i,o,n)],!0)}}catch(a){}}),t0("order",p,4),l.appendChild(r),l.appendChild(c),l.appendChild(s),l.appendChild(u),a.appendChild(l),a.appendChild(p),i.appendChild(a),tn.innerHTML="",tn.appendChild(i),z&&(c.value=z,eX(s))}(o,t,n)}}),!0==t){let u=document.createElement("div"),d=document.createElement("div"),v=Date.now();t0("order",d,2);let $=document.createElement("div");$.className=`AtOncePositionRelative${T} AtOnceFlexTitle${T}`;let m=document.createElement("div");m.className=`AtOnceSearchInputIcon${T}`,m.innerHTML=eP;let h=document.createElement("input");h.id="AtOnceMainSearchInput",h.type="text",h.className=`AtOnceSearchInput${T} AtOnceSearchInputIconed${T}`,h.placeholder="Search instant answers",h.addEventListener("keyup",function(){try{let e=h.value,t=Date.now();t-v>500&&(v=t,t0(e,d,2))}catch(o){}}),$.appendChild(m),$.appendChild(h),u.appendChild($),u.appendChild(d),e.appendChild(u),setTimeout(function(){eX(h)},2);try{a.appendChild(s)}catch(_){}try{a.appendChild(c)}catch(g){}try{eh.getElementById(`AtOnceContainerHelpCenterSearch${T}`).remove()}catch(f){}}else{try{a.appendChild(c)}catch(A){}try{a.appendChild(s)}catch(x){}}e.appendChild(a)}function t3(e){if(e||!localStorage.getItem("AtOnceOrders")){td.style.display="",tn.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerHTML=`I’m an existing customer`,t$.className=`AtOnceSubHeading${T}`,tm.innerText="",tm.style.display="none";let t=document.createElement("div"),o=document.createElement("div");o.className=`AtOnceSubHeadingSmall${T} AtOnceSubHeadingMargin${T} AtOnceTextColorSeven${T}`,o.innerText="Access your orders";let n=document.createElement("div");n.className=`AtOnceContainerPaddedLess${T} AtOnceContainerPaddedTopSmall${T}`;let i=document.createElement("div");i.innerText="Order info is in your email/text/packing slip",i.className=`AtOnceSubText${T} AtOnceTextColorTwo${T} AtOnceSubTextMarginBottom${T}`;let a=document.createElement("div");a.className=`AtOnceContainerPaddedTopSmall${T}`;let l=[];function p(e,t){let o=document.createElement("label");o.className=`AtOnceManageOrdersLabel${T}`;let n=document.createElement("span");n.className=`AtOnceManageOrdersSpan${T}`,n.innerText=e;let i=document.createElement("input");i.type="text",i.className=`AtOnceManageOrdersInput${T}`,i.placeholder=" ",o.appendChild(i),o.appendChild(n),a.appendChild(o),l.push({input:i,name:t})}p("Order Number/ID","order_number"),p("Zip/Postal Code","zip_code");let r=l[0].input,c=l[1].input,s=document.createElement("div");s.style.display="none",s.className=`AtOnceLoadingSpinner${T}`;let u=document.createElement("button");u.className=`AtOnceMainButton${T} AtOncePrimaryButton${T} AtOnceSubTextMediumMargin${T}`,u.innerText="Enter",u.disabled=!0;let d=document.createElement("div");for(let v of(d.className=`AtOnceTriHeading${T} AtOncePrimarySubjectHeader${T} AtOnceFlexCenter${T} AtOnceTextColorError${T}`,d.innerText="",u.addEventListener("click",function(){s.style.display="";let t=`${r.value}`.replace(/\s/g,"").replace(/\D/g,"").trim().toUpperCase(),o=`${c.value}`.replace(/\s/g,"").trim().toUpperCase(),n=`${t}${o}`;ey(n,"orders").then(n=>{n&&n[0]?(S(`${t}_atonce_${o}`),t4(e)):(u.disabled=!0,s.style.display="none",d.innerText="Order not found")})}),l))v.input.addEventListener("keyup",function(){d.innerText="",r.value.length>0&&c.value.length>3?u.disabled=!1:u.disabled=!0}),"zip_code"==v.name?v.input.addEventListener("keydown",function e(t){try{"Enter"===t.key&&!1==t.shiftKey&&u.click()}catch(o){}}):eX(v.input);n.appendChild(i),n.appendChild(a),n.appendChild(s),n.appendChild(u),n.appendChild(d),t.appendChild(o),t.appendChild(n),tn.innerHTML="",tn.appendChild(t)}else t4(!0)}async function t2(e,t,o,n,i){try{let a=[];if(t.length){let l=t.length;for(let p=0;p<l;p++)t[p].position_id=p}if(o)for(let s of e)s&&s.variant_id&&-1==a.indexOf(s.variant_id)&&a.push(s.variant_id);else for(let u of e){let d=u.variant_id;d&&-1==a.indexOf(d)&&a.push(d);let $=u.id;if("shopify"==ec){let m=Number(u.price_set.presentment_money.amount)*Number(u.quantity),h=u.price_set.presentment_money.currency_code,_=u.discount_allocations,g=u.tax_lines;if(_&&_.length)for(let f of _)m-=Number(f.amount_set.presentment_money.amount);if(g&&g.length)for(let A of g)m+=Number(A.price_set.presentment_money.amount);u.customer_paid_amount=m.toFixed(2),u.customer_paid_currency=h}else"woocommerce"==ec&&(u.customer_paid_amount=Number(u.total).toFixed(2),u.customer_paid_currency=i);let x=u.quantity-u.fulfillable_quantity;if(x>0&&t.length)for(let O of t){if(0==x)break;if(O.line_item==$){let C=O.position_id,y=O.quantity-x;0==y?(x=0,t=t.filter(e=>e.id!==C)):y>0?(O.quantity-=x,x=0):y<0&&(O.quantity=0,x=Math.abs(y))}}u.returnable_quantity=x}if("woocommerce"==ec){for(let b of e)if(b&&!b.variant_id){let T=b.product_id;-1==a.indexOf(T)&&a.push(T)}}if(a.length){let S=function e(t,o){for(var n=[],i=0;i<t.length;i+=o)n.push(t.slice(i,i+o));return n}(a,10),M=[],w=[];async function P(t){return new Promise(async function(i,l){await v(r(n,c("variant_ids_list","array-contains-any",t))).then(t=>{t.empty||t.forEach(t=>{try{let n=t.data(),i=n.variants,l=n.variant_ids_list,p=n.images,r=n.options,c=n.requires_shipping,s=["id","price","compare_at_price","option1","option2","option3","position","product_id","title"];for(let u of("shopify"==ec&&s.push("requires_shipping"),a))try{if(-1==w.indexOf(u)){l&&-1!==l.indexOf(u)&&w.push(u);let d=e.findIndex(function(e){return e.variant_id==u});if(-1==d&&"woocommerce"==ec&&(d=e.findIndex(function(e){return e.product_id==u})),-1!==d){o&&(e[d].title=n.title);let v=[];for(let $ of i){let m=$.id;if(m==u){if(o)e[d].variant_title=$.title;else{let h={};for(let _=1;_<4;_++){let g=`option${_}`,f=$[`${g}`];f&&(h[`${g}`]=f)}"{}"!==JSON.stringify(h)&&(e[d].current_variant=h)}}if(!o&&(null==$.inventory_management||"continue"==$.inventory_policy||$.inventory_quantity>0||!0==$.in_stock)){let A={};for(let x of s)-1!==x.indexOf("price")?A[`${x}`]=Number($[`${x}`]).toFixed(2):A[`${x}`]=$[`${x}`];if("shopify"==ec)for(let O of p)-1!==O.variant_ids.indexOf(m)&&(A.img=O.src);else A.requires_shipping=c,$.img&&(A.img=$.img);v.push(A)}}if(!o){if(r&&r.length){let C=[];for(let y of r)C.push({name:y.name,position:y.position,values:y.values});e[d].product_options=C}e[d].exchange_options=v}let b=[];if("woocommerce"==ec){for(let T of i){let S=T.id;T.img&&S==u&&(e[d].img=T.img),T.img&&-1==b.indexOf(T.img)&&b.push(T.img)}e[d].requires_shipping=c}else if(p&&p.length)for(let M of p)-1!==M.variant_ids.indexOf(u)&&(e[d].img=M.src),M.src&&b.push(M.src);b.length&&!o&&(e[d].images=b),1==i.length?e[d].hasOnlyDefaultVariant=!0:e[d].hasOnlyDefaultVariant=!1}}}catch(P){}}catch(k){}}),i("success")})})}if(S&&S.length){for(let k of S)M.push(P(k));M.length&&await eC(M)}}return e}catch(L){return e}}function tT(e){if(eE){let t=[],o=[],n=0,i=eE.currency,a=H(i);td.style.display="",tn.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerHTML=`${"edit_add"==e?"Add Items Below":"Add/Remove Items Below"}`,t$.className=`AtOnceSubHeading${T}`,tm.innerText="",tm.style.display="none";let l=document.createElement("div");l.className=`AtOnceContainerPadded${T} AtOnceContainerNoBottomPadding${T}`;let d=document.createElement("div");d.className=`AtOnceMainShopStickyChangesContainer${T} AtOnceFlexCenter${T}`;let $=document.createElement("button");$.className=`AtOnceMainButton${T} AtOncePrimaryButton${T}`,$.innerText="Edit Order";let m=document.createElement("div");m.style.display="none",m.className=`AtOnceLoadingSpinner${T} bottomed`;let _=document.createElement("div");_.style.display="none";let g=document.createElement("div");g.className=`AtOnceEnterEmailInputLabel${T}`,g.innerText="Enter your email";let f=document.createElement("input");f.className=`AtOnceSearchInput${T} full bottomed`,f.placeholder="Enter your email";try{eE.email?f.value=eE.email:eE.customer.email&&(f.value=eE.customer.email);try{!f.value&&localStorage.getItem("AtOnceLiveChatUserEmail")&&(f.value=localStorage.getItem("AtOnceLiveChatUserEmail"))}catch(A){}}catch(x){}f.value||(l.classList.add(`AtOnceContainerPaddedBottomLarge${T}`),l.classList.remove(`AtOnceContainerNoBottomPadding${T}`),m.classList.add("bigger"),d.classList.add("bigger"),_.style.display="",f.addEventListener("keyup",function(){try{f.value&&-1!==f.value.indexOf("@")?$.disabled=!1:$.disabled=!0}catch(e){}})),_.appendChild(g),_.appendChild(f);let O="",C=eE.shipping_zip,y=eE.billing_zip,b="";null!=C?b=C:null!=y&&(b=y);let S=eE.order_number;O=`${S=`${S}`.replace(/\s/g,"").replace(/\D/g,"").trim().toUpperCase()}${b=`${b}`.replace(/\s/g,"").trim().toUpperCase()}`,$.addEventListener("click",function(){m.style.display="",$.disabled=!0,$.classList.remove("red");let e=[];for(let o of t){let n={};!1!==o.product_exists&&o.id&&(o.line_item&&(n.line_item=Number(o.line_item)),o.id&&(n.variant_id=Number(o.id)),o.product_id&&(n.product_id=Number(o.product_id)),0==o.quantity?n.quantity=0:Number(o.quantity)?n.quantity=Number(o.quantity):n.quantity=1,e.push(n))}function i(e,t){setTimeout(function(){try{let o=$.innerText;"Updated - Check Your Email"!==o&&"Update Failed"!==o&&($.innerText=`${e} (${t}/4)`)}catch(n){}},2e3*t)}i("Checking Order",1),i("Adding Credit",2),i("Updating Order",3),i("Sending Email",4);let a=`${f.value}`.trim().toLowerCase();L("edit_order",{store:eE.shopify_store,order:eE.id,order_identifier:O,line_items:e,email:a}).then(e=>{try{a&&-1!==a.indexOf("@")&&!localStorage.getItem("AtOnceLiveChatUserEmail")&&(z||(z=a),localStorage.setItem("AtOnceLiveChatUserEmail",a))}catch(t){}e&&e.success?(m.style.display="none",$.disabled=!1,$.classList.add("green"),$.innerText="Updated - Check Your Email",setTimeout(function(){try{td.click()}catch(e){}},3e3)):($.classList.add("red"),m.style.display="none",$.innerText="Update Failed")})}),d.appendChild(_),d.appendChild($),d.appendChild(m);let M=document.createElement("div"),w=p(F,ec,eE.shopify_store,"products"),P=r(w,c("in_stock","==",!0),c("status","==","active"),u("total_sales","desc"),s(200)),k=["id","price","compare_at_price","option1","option2","option3","position","product_id","title"],N=[],E="",K={keys:["handle","description","title","variant_titles_list","product_type",]},U=document.createElement("div");U.className=`AtOnceContainerPaddedTopMedium${T}`;let G=document.createElement("div");function V(e,o){let n=e.length;if(n>0){for(let i=0;i<n;i++){let l=e[i],p=document.createElement("div");p.className=`AtOnceMainShopProductSubContainer${T}`;let r=document.createElement("div");r.className=`AtOnceMainShopProductImageContainer${T}`,r.setAttribute("atonce_product_id",`${l.id}`);let c="",s=l.image;if(s)(c=document.createElement("img")).className=`AtOnceMainShopProductImage${T}`,c.src=s;else{(c=document.createElement("div")).className=`AtOnceMainShopProductImageDiv${T}`;let u=document.createElement("div");u.className=`AtOnceMainShopProductImageDivText${T}`,u.innerText=l.title,c.appendChild(u)}r.appendChild(c);let d=document.createElement("div");if(d.className=`AtOnceMainShopProductPriceContainer${T}`,l.compare_at_price&&l.compare_at_price!==l.price){let v=document.createElement("span");v.className=`AtOnceMainShopProductPriceText${T} AtOnceMainShopProductPriceText_compare${T}`,v.innerText=`${a}${l.compare_at_price}`,d.appendChild(v)}let $=document.createElement("span");if($.className=`AtOnceMainShopProductPriceText${T}`,$.innerText=`${a}${l.price}`,d.appendChild($),p.appendChild(r),s){let m=document.createElement("div");m.className=`AtOnceMainShopProductTitleContainer${T}`;let h=document.createElement("div");h.className=`AtOnceMainShopProductTitleText${T}`,h.innerText=l.title,m.appendChild(h),p.appendChild(m)}p.appendChild(d),r.addEventListener("click",function(){let e=document.createElement("div"),o=l.variants;e.className=`AtOnceModalBackground${T}`;let n=document.createElement("div");n.style.display="none",n.className=`AtOnceModalContainer${T}`;let i=document.createElement("div");i.innerHTML=eL,i.className=`AtOnceModalCloseBtn${T}`;let p=document.createElement("div");p.className=`AtOnceModalProductImageContainer${T}`;let r=document.createElement("img");r.className=`AtOnceModalProductImage${T}`;let c=l.images,s="",u=[],d=document.createElement("div"),v=document.createElement("div"),$=`AtOnceModalProductImageContainer${T} maxwidth slideshow`,m=`AtOnceModalProductImageContainer${T} maxwidth`,h=l.image;h?r.src=`${h}`:(r.classList.add("border"),r.src=`${e4}`),p.appendChild(r);let _=document.createElement("div");_.className=`AtOnceModalProductRightContainer${T}`;let g="",f=l.hasOnlyDefaultVariant;!1==f&&(g=o[0].title);let A=document.createElement("span"),x=document.createElement("span");function O(){let e=document.createElement("div");e.className=`AtOnceModalProductTitle${T}`;let t=document.createElement("div");t.className=`AtOnceModalProductVariantInfo${T}`,""==g?x.className=`AtOnceModalProductVariantInfo${T}`:x.className=`AtOnceModalProductVariantInfo${T} price`,A.innerText=g,x.innerText=`${a}${l.price}`,t.appendChild(A),t.appendChild(x),e.innerText=l.title,_.appendChild(e),_.appendChild(t)}let C={},y={};function b(e){try{let t=!1;for(let n of o){let i=!0;for(let[a,l]of Object.entries(e))if(n[a]!==l){i=!1;break}if(!0==i){t=!0;break}}return t}catch(p){return!0}}function S(e){let t=!1;for(let n of o){let i=!0;for(let[a,p]of Object.entries(C))if(n[a]!==p){i=!1;break}if(!0==i){if(n.img?y.img=n.img:l.image?y.img=l.image:y.img=e4,"woocommerce"==ec&&y.img)try{r.src=y.img}catch(c){}"shopify"==ec?y.requires_shipping=n.requires_shipping:"woocommerce"==ec&&(y.requires_shipping=l.requires_shipping),y.id=n.id,y.title=l.title,y.option=n.title,y.price=n.price,y.product_id=n.product_id,y.variant_title=n.title,y.hasOnlyDefaultVariant=l.hasOnlyDefaultVariant,y.quantity=void 0!==l.quantity?l.quantity:1,t=!0,z();break}}!1==t&&(e&&(e.disabled=!0),U())}function M(){let e=document.createElement("div");if(e.className=`AtOncePrimarySubjectHeader${T}`,!1==f){let t=l.options,n=t.length,i=[];for(let p of t){let c=document.createElement("div"),s=`option${p.position}`,u=document.createElement("div");u.className=`AtOnceVariantsLabel${T}`,u.innerText=p.name;let d=[],v=[],$=[],m=document.createElement("div"),h=!0,g=!0,O=!0,y="",M="";for(let w of o){let P=w[`${s}`];if(-1==d.indexOf(P)){d.push(P);let k=w.img;k!==M&&(M&&(O=!1),M=k)}}for(let L of(!1==O&&(m.className=`AtOnceModalProductVariantSelectionContainer_images${T}`),o)){let N=L[`${s}`];if(-1==v.indexOf(N)){async function E(){for(let e of o){let t=!0;for(let[n,i]of Object.entries(C))if(e[n]!==i){t=!1;break}if(!0==t){e.title?A.innerText=e.title:A.innerText="",e.price&&(x.innerText=`${a}${e.price}`);break}}}v.push(N);let B=document.createElement("button"),H=`AtOnceMainShopVariantsButton${T}`,I=`AtOnceMainShopVariantsButton_active${T}`,K=L.img;!1==O&&(1==n?(H=`AtOnceMainShopVariantsButton${T} AtOnceMainShopVariantsButton_image${T} AtOnceMainShopVariantsButton_one${T}`,I=`AtOnceMainShopVariantsButton_image_active${T} AtOnceMainShopVariantsButton_image_active_one${T}`):(H=`AtOnceMainShopVariantsButton${T} AtOnceMainShopVariantsButton_image${T}`,I=`AtOnceMainShopVariantsButton_image_active${T}`),K&&(B.style.backgroundImage=`url(${K})`)),!0==h?(h=!1,C[`${s}`]=N,B.className=`${H} ${I}`):B.className=H,K!==y&&(y&&(g=!1),y=K);let U={option_name:s,name:N,button:B};$.push(B),i.push(U),B.addEventListener("click",function(){async function e(e){try{let t=JSON.parse(JSON.stringify(C));if(t){t[`${e.option_name}`]=e.name;let o=b(t);!0==o?e.button.disabled=!1:e.button.disabled=!0}}catch(n){}}if(C[`${s}`]=N,S(B),E(),K?!1==g&&(r.src!==K&&(r.src=K),R(K),setTimeout(function(){R(K)},10)):!1==g&&(r.src!==e4&&(r.src=e4),R(K),setTimeout(function(){R(K)},10)),$.length)for(let t of $)t!==B&&(t.className=H);if(i.length)for(let o of i)e(o);B.className=`${H} ${I}`}),!0==O&&(B.innerText=N),m.appendChild(B)}}c.appendChild(u),c.appendChild(m),e.appendChild(c)}}_.appendChild(e)}function w(){let e=document.createElement("div");e.className=`AtOnceMainShopProductDescription${T}`,e.innerHTML=l.description,_.appendChild(e)}O(),M();let P=document.createElement("div");P.className=`AtOnceQuantityContainer${T}`;let k=document.createElement("div");k.className=`AtOnceQuantitySubContainer${T} AtOnceFlexCenter${T}`;let L=document.createElement("div");L.innerText="Quantity",L.className=`AtOnceQuantityLabel${T}`;let N=document.createElement("span");N.innerHTML=e5,N.className=`AtOnceQuantityButtons${T} AtOnceFlexCenter${T}`;let E=document.createElement("span");E.innerHTML=ew,E.className=`AtOnceQuantityButtons${T} AtOnceFlexCenter${T}`;let B=document.createElement("input");B.type="number",B.min=1,B.value=1,B.step=1,B.className=`AtOnceQuantityInput${T} AtOnceFlexCenter${T}`,E.addEventListener("click",function(){let e=B.value;e++,B.value=e}),N.addEventListener("click",function(){let e=B.value;e>1&&e--,B.value=e}),P.appendChild(L),P.appendChild(k),k.appendChild(N),k.appendChild(B),k.appendChild(E),_.appendChild(P);let H=document.createElement("div");H.className=`AtOncePrimarySubjectHeader${T} AtOnceModalStickyBottomContainer${T}`;let K=document.createElement("button");function U(){K.disabled=!0,K.innerText="Sold Out"}function z(){K.disabled=!1,K.innerText="Add to Cart"}function G(){if(t.length){let o=!1;for(let n of t)if(n.id==y.id){let i=Number(n.quantity);i+=Number(y.quantity),n.quantity=i,o=!0;break}!1==o&&t.push(y)}else t.push(y);et(),V(e)}function V(e){try{e.className=`AtOnceModalBackground${T}`}catch(t){}setTimeout(function(){try{e.remove()}catch(t){}},150)}K.className=`AtOnceMainButton${T} AtOncePrimaryButton${T}`,K.innerText="Add to Cart",K.addEventListener("click",function(){!0==f&&(y.id=o[0].id,l.image?y.img=l.image:y.img=e4,y.name=l.title,y.price=l.price,y.product_id=l.id,y.title="");let e=B.value;e<1&&(e=1),y.quantity=e,G()}),S(),H.appendChild(K),_.appendChild(H),w(),i.addEventListener("click",function(){V(e)}),e.addEventListener("click",function(t){let o=t.target;!1===n.contains(o)&&!1===p.contains(o)&&V(e)}),n.appendChild(i),s=I(c,d,v,u,m,$),n.appendChild(i),c&&c.length>1?n.appendChild(s):n.appendChild(p),n.appendChild(_),e.appendChild(n),n.style.display="",tn.appendChild(e),setTimeout(function(){n.className=`AtOnceModalContainer${T} active`,e.className=`AtOnceModalBackground${T} active`},0)}),o.appendChild(p)}G.classList.add("visible")}}async function D(){return new Promise(async function(e,t){v(P).then(t=>{t.empty||(t.forEach(e=>{try{let t=e.data(),o=t.id,n=t.title,i=t.image,a=t.images,l=t.requires_shipping;i&&(i=i.src);let p=t.body_html,r="0.00",c=null;try{r=`${B(Number(t.variants[0].price))}`}catch(s){}try{let u=t.variants[0].compare_at_price;u&&(c=`${B(Number(u))}`)}catch(d){}let v={id:o,title:n,image:i,description:p,product_type:t.product_type,handle:t.handle,price:r,compare_at_price:c,variant_titles_list:t.variant_titles_list,options:t.options};"woocommerce"==ec&&(v.requires_shipping=l);let $=[];if(a&&a.length){for(let m of a)m.src&&$.push(m.src);v.images=$}let h=t.variants;if(1==h.length){let _=h[0],g={product_id:_.product_id,id:_.id,title:""};"shopify"==ec?g.requires_shipping=_.requires_shipping:g.requires_shipping=l,v.variants=[g],v.hasOnlyDefaultVariant=!0}else{v.hasOnlyDefaultVariant=!1;let f=[];for(let A of h)if(null==A.inventory_management||"continue"==A.inventory_policy||A.inventory_quantity>0){let x=A.id,O={};for(let C of("shopify"==ec?O.requires_shipping=A.requires_shipping:O.requires_shipping=l,k))-1!==C.indexOf("price")?O[`${C}`]=Number(A[`${C}`]).toFixed(2):O[`${C}`]=A[`${C}`];for(let y of a)try{-1!==y.variant_ids.indexOf(x)&&(O.img=y.src)}catch(b){}"woocommerce"==ec&&A.img&&(O.img=A.img),f.push(O)}v.variants=f}N.push(v)}catch(T){}}),N.length&&(V(N,G),E=new h(N,K))),e(!0)})})}G.className=`AtOnceContainerFlexProducts${T}`,U.appendChild(G);let J=D(),q=document.createElement("div"),j=document.createElement("input");function Q(e){t.splice(e,1),ee(),et()}function Z(e,t,o,n){let i=document.createElement("div");i.className=`AtOnceFlex${T} AtOnceMarginBottomLarge${T}${t?"":` AtOnceDisabledDiv${T}`}`;let a=document.createElement("div"),l=document.createElement("div");l.className=`AtOnceProductImage${T}`,e.img?l.style.backgroundImage=`url(${e.img})`:l.innerHTML=eS,a.appendChild(l);let p=document.createElement("div");p.className=`AtOnceFlexSpacedProductTitleSmall${T}`;let r=document.createElement("div");r.className=`AtOnceSubTextBold${T} AtOnceTextColorThree${T}`,r.innerText=e.title?e.title:e.name?e.name:"";let c=document.createElement("div");c.className=`AtOnceSubText${T} AtOnceTextColorNine${T} AtOnceUserSelect${T}`;let s="";if(!1==e.hasOnlyDefaultVariant&&e.variant_title&&(s=e.variant_title),c.innerText=s,p.appendChild(r),p.appendChild(c),!0!==e.hasOnlyDefaultVariant){let u=e.product_id,d=e.title;if(t){let v=document.createElement("button");function $(){let e=eh.getElementById("AtOnceSearchInputProducts");if(e){e.value=d;try{e.dispatchEvent(new KeyboardEvent("keyup",{key:"a"}))}catch(t){}}}v.className=`AtOnceMainButton${T} AtOnceMainButtonSmall${T} smaller AtOnceSecondaryButton${T}`,v.innerText="Add style",v.addEventListener("click",function(){let e=eh.querySelectorAll(`[atonce_product_id="${u}"]`);if(e&&e.length)try{e[0].click()}catch(t){$()}else $()}),p.appendChild(v)}}let m=document.createElement("div");m.className=`AtOnceProductQuantityText${T}`,m.innerText=e.quantity;let h=document.createElement("div"),_=document.createElement("div");_.className=`AtOnceQuantitySubContainer${T} AtOnceFlexCenter${T}`;let g=document.createElement("div");g.innerText="New quantity",g.className=`AtOnceQuantityLabelSmall${T}`;let f=document.createElement("span");f.innerHTML=e5,f.className=`AtOnceQuantityButtons${T} AtOnceFlexCenter${T}`;let A=document.createElement("span");A.innerHTML=ew,A.className=`AtOnceQuantityButtons${T} AtOnceFlexCenter${T}`;let x=document.createElement("input");x.type="number",x.min=1;let O=1;e.quantity&&Number(e.quantity)>1&&(O=Number(e.quantity)),x.value=O,x.step=1,x.className=`AtOnceQuantityInput${T} smaller AtOnceFlexCenter${T}`,t&&(x.addEventListener("keyup",function(){let t=x.value;t>0||(t=0),o||0!=t||Q(n),e.quantity=t,ee()}),A.addEventListener("click",function(){let t=x.value;t++,x.value=t,e.quantity=t,ee()}),f.addEventListener("click",function(){let t=x.value;t>0&&t--,o||0!=t||Q(n),x.value=t,e.quantity=t,ee()})),h.appendChild(g),h.appendChild(_),_.appendChild(f),_.appendChild(x),_.appendChild(A),i.appendChild(a),i.appendChild(p),i.appendChild(h),M.appendChild(i)}j.className=`AtOnceSearchInput${T} full`,j.placeholder="Search new products",j.id="AtOnceSearchInputProducts",j.addEventListener("keyup",function(){J.then(()=>{if(E){if(G.innerHTML="",j.value){let e=E.search(j.value),t=[];if(e.item)t.push(e);else for(let o of e)t.push(o.item);t.length?V(t,G):V(N,G)}else V(N,G)}})}),q.appendChild(j),l.appendChild(d),l.appendChild(M),l.appendChild(q),l.appendChild(U);let Y=eE.line_items;if(Y&&Y.length){for(let W of Y){let X=!0;"shopify"!=ec||!1!==W.product_exists&&W.variant_id||(X=!1),n+=Number(W.fulfillable_quantity)*Number(W.price),"shopify"==ec?t.push({line_item:W.id,id:W.variant_id,title:W.title,option:W.variant_title,price:W.price,product_id:W.product_id,variant_title:W.variant_title,is_editable:X,img:W.img,quantity:W.fulfillable_quantity,hasOnlyDefaultVariant:W.hasOnlyDefaultVariant}):t.push({line_item:W.id,id:W.variant_id?W.variant_id:W.product_id,title:W.title,option:W.variant_title,price:W.price,product_id:W.product_id,variant_title:W.variant_title?W.variant_title:"",is_editable:X,img:W.img,quantity:W.fulfillable_quantity,hasOnlyDefaultVariant:W.hasOnlyDefaultVariant})}o=JSON.parse(JSON.stringify(t)),et()}function ee(){let i=!0,a=0,l=0;for(let p of t)a+=Number(p.quantity),l+=Number(p.price)*Number(p.quantity);if(f.value){if($.disabled=!1,$.classList.remove("red"),0==a&&"edit_cancel"==e)$.innerText="Cancel & Send Gift Card";else{let r=Number(Number(n).toFixed(2))-Number(Number(l).toFixed(2));r>0?$.innerText="Edit & Send Gift Card":r<0?$.innerText="Edit & Send Invoice":$.innerText="Edit Order"}}else $.disabled=!0;if(o.length!==t.length)d.classList.add("visible");else{let c=o.length;for(let s=0;s<c;s++){let u=o[s],v=t[s];if(u.quantity!==v.quantity){i=!1;break}}!1==i&&d.classList.add("visible")}!0==i&&o.length==t.length&&d.classList.remove("visible")}function et(){M.innerHTML="";let e=t.length;for(let o=0;o<e;o++){let n=t[o],i=n.line_item;!1===n.is_editable?Z(n,!1,i,o):Z(n,!0,i,o)}ee()}tn.innerHTML="",tn.appendChild(l)}}function tS(e,t,o,n){let i="",a=e.shipping_zip,l=e.billing_zip,p="";null!=a?p=a:null!=l&&(p=l);let r=e.order_number;function c(t,o){let n=document.createElement("div");n.className=`AtOnceNoSelect${T}${o?` AtOnceTextLargeMargin${T}`:""}`;let i=document.createElement("div");i.className=`AtOnceFlexSpacedNoAlign${T} AtOnceQuickButtonPaddedMore${T}`;let a=document.createElement("div");a.className=`AtOncePositionRelative${T}`;let l="",p=e.line_items,r=p.length,c=e.fulfillments;if(c&&c.length){for(let s of p)if(s.img){let $=s.id,m=s.hasOnlyDefaultVariant;for(let h of c){let _=h.line_items;if(_&&_.length)for(let g of _)g.id==$&&(g.img=s.img,g.hasOnlyDefaultVariant=m)}}}for(let f of p)if(f.img){l=f.img;break}let A=document.createElement("div");A.className=`AtOnceProductImage${T}`,l?A.style.backgroundImage=`url(${l})`:A.innerHTML=eS;let x=document.createElement("div");x.className=`AtOnceProductQuantityText${T} AtOnceProductQuantityTextTwo${T}`,a.appendChild(x),a.appendChild(A),1!==r?r=`+${r-1}`:x.remove(),x.innerText=r;let O=document.createElement("div");O.className=`AtOnceFlexSpacedOrder${T}`;let C=document.createElement("div");C.className=`AtOnceFlexSpacedNoAlign${T}`;let y=document.createElement("div");y.className=`AtOnceSubTextBold${T} AtOnceTextColorThree${T}`,y.innerText=`${e.name}`;let b=e.fulfillment_status;"woocommerce"==ec?b=e.status:"paid"!==e.financial_status?b=e.financial_status:b?"partial"==b&&(b="Partially_fulfilled"):b="Unfulfilled",b=U(b);let S=["gray","gray","gray","gray","blue","gray"],M="",w=0;for(let P of[["Unfulfilled"],["Expired","Voided","On hold","Authorized","Refunded","Cancelled","Failed","Trash"],["Pending","In progress","Scheduled","Processing"],["Partially paid","Partially fulfilled","Partial"],["Paid","Fulfilled","Completed"],["Partially refunded"]])P.includes(b)&&(M=S[w]),w+=1;e.cancelled_at&&(M="gray",b="Cancelled");let k=document.createElement("div");k.className=`AtOnceSubTag${T} ${M}`,k.innerText=b,C.appendChild(y),C.appendChild(k);let L=document.createElement("div");L.className=`AtOnceFlexSpacedNoAlign${T}`;let N=document.createElement("div");N.className=`AtOnceSubText${T} AtOnceTextColorNine${T}`,"shopify"==ec?N.innerText=`${H(e.total_price_set.presentment_money.currency_code)}${B(e.total_price_set.presentment_money.amount)}`:"woocommerce"==ec&&(N.innerText=`${e.currency_symbol}${B(e.total)}`);let E=document.createElement("div");E.className=`AtOnceSubText${T} AtOnceTextColorNine${T}`,E.innerText=ej(Date.parse(e.created_at));let I=document.createElement("div");I.className=`AtOnceFlex${T} AtOnceTextLargeMargin${T}`;let R=document.createElement("button");R.className=`AtOnceMainButton${T} AtOnceMainButtonSmall${T} AtOnceSecondaryButton${T}`,R.innerText=t[0],"Help"==t[0]?R.addEventListener("click",function(){tC(),u()}):"View"==t[0]?R.addEventListener("click",function(){tC(),v()}):"Track"==t[0]&&R.addEventListener("click",function(){tC(),d()});let K=document.createElement("button");return K.className=`AtOnceMainButton${T} AtOnceMainButtonSmall${T} AtOnceSecondaryButton${T}`,K.innerText="Track","Help"==t[1]?K.addEventListener("click",function(){tC(),u()}):"View"==t[1]?K.addEventListener("click",function(){tC(),v()}):"Track"==t[1]&&K.addEventListener("click",function(){tC(),d()}),I.appendChild(R),I.appendChild(K),L.appendChild(N),L.appendChild(E),O.appendChild(C),O.appendChild(L),O.appendChild(I),i.appendChild(a),i.appendChild(O),n.appendChild(i),n}i=`${r=`${r}`.replace(/\s/g,"").replace(/\D/g,"").trim().toUpperCase()}_atonce_${p=`${p}`.replace(/\s/g,"").trim().toUpperCase()}`;let s=c(["Help","Track"]);function u(){e.shopify_store=t,eE=e,e8=!0;let a=document.createElement("div");a.className=`AtOnceContainerPaddedTopSmall${T}`;let l=c(["View","Track"]),p=document.createElement("div"),r=document.createElement("div");r.className=`AtOnceSubHeadingSmall${T} AtOnceSubHeadingMarginSmall${T} AtOnceTextColorSeven${T}`,r.innerText="Quick help";let s=document.createElement("div");if(t5=document.createElement("div"),em.length){let u=JSON.parse(JSON.stringify(em));for(let d of(i&&function e(t,o){try{for(let n of t)n.text?-1!==n.text.indexOf("{{return_portal}}")&&(n.text=eI(n.text,"{{return_portal}}",`${eH}?order=${o}`)):n.link&&-1!==n.link.indexOf("{{return_portal}}")&&(n.link=eI(n.link,"{{return_portal}}",`${eH}?order=${o}`)),n.sub_actions&&e(n.sub_actions,o)}catch(i){}}(u,i),u))if(d.actions){let v=d.actions;for(let $ of u)-1!==v.indexOf($.id)&&($.is_actioned=!0)}for(let m of u)!0!==m.is_actioned&&tw(m,s,!1,!1,r,s,!1,u,"Quick help",!0,!0)}p.appendChild(r),p.appendChild(s),o.style.display="none",t$.innerHTML=`Order ${e.name}`,t$.className=`AtOnceSubHeading${T}`,a.appendChild(l),a.appendChild(p),n.innerHTML="",n.appendChild(a)}function d(){e.shopify_store=t,eE=e,e8=!0;let i=document.createElement("div");i.className=`AtOnceContainerPaddedTopSmall${T}`;let a=c(["Help","View"]),l=document.createElement("div"),p=e.fulfillments,r=e.shipping_address;function s(e){let t=document.createElement("div");t.className=`AtOnceContainerPadded${T} AtOnceContainerSmallTopPadding${T} AtOnceContainerNoBottomPadding${T}`;let o=document.createElement("div");o.className=`AtOnceTriHeading${T} AtOnceTextColorThree${T} AtOnceMarginBottomMedium${T}`;let n=document.createElement("div");n.className=`AtOnceContainerPaddedBottom${T}`,t.appendChild(o),t.appendChild(n);let i=!0,a=e.tracking_numbers,l=e.tracking_urls,p=0;try{p=a.length>l.length?a.length:l.length}catch(r){}function c(o,a,l,r,c,s){if(o){let u=document.createElement("div");if(u.className=`AtOnceFlex${T} AtOnceTextColorThree${T} AtOnceBreakAll${T} AtOnceContainerPaddedBottomSmall${T}`,e.tracking_company&&"Other"!==e.tracking_company&&c){let d=document.createElement("div");d.className=`AtOnceBold${T}`,d.innerText=`Sent via ${e.tracking_company}`,u.appendChild(d)}else if(c&&"Other"==e.tracking_company&&e.updated_at){i=!1;let v=document.createElement("div");v.className=`AtOnceTextColorNine${T}`,v.innerText=`Updated ${ej(Date.parse(e.updated_at))}`,u.appendChild(v)}let $=document.createElement("div");if(r&&($.className=`AtOnceTextColorNine${T} AtOnceMarginLeft${T}`),s?$.innerHTML=`${1==p&&(s||l)?"":"Tracking: "}<a href="${o}" target="_blank" rel="noopener noreferrer nofollow">${s}</a>`:l?$.innerHTML=`<a href="${o}" target="_blank" rel="noopener noreferrer nofollow">${a}</a>`:$.innerText=`${a} ${r?ej(Date.parse(o)):o}`,1==p&&(s||l)){let m=t.children[t.childElementCount-1];m.children[m.childElementCount-1].insertAdjacentElement("afterbegin",$)}else u.appendChild($),n.appendChild(u)}}c(e.created_at,"Shipped",!1,!0,!0),!0==i&&c(e.updated_at,"Updated",!1,!0);try{if(p>0)for(let s=0;s<p;s++)l[s]&&a[s]?c(l[s],"Tracking url",!0,!1,!1,a[s]):a[s]?c(a[s],"Tracking no.",!1,!1):l[s]&&c(l[s],"Tracking url",!0,!1,!1)}catch(u){}let d=e.line_items;if(d&&d.length)for(let v of(o.innerText=`${U(e.display_status)}`,d)){let $=document.createElement("div");$.className=`AtOnceFlex${T} AtOnceMarginBottomMedium${T}`;let m=document.createElement("div");m.className=`AtOncePositionRelative${T}`;let h=document.createElement("div");h.className=`AtOnceProductQuantityText${T}`,h.innerText=v.quantity;let _=document.createElement("div");_.className=`AtOnceProductImage${T}`,v.img?_.style.backgroundImage=`url(${v.img})`:_.innerHTML=eS,m.appendChild(h),m.appendChild(_);let g=document.createElement("div");g.className=`AtOnceFlexSpacedProductTitle${T}`;let f=document.createElement("div");f.className=`AtOnceSubTextBold${T} AtOnceTextColorThree${T}`,f.innerText=v.title?v.title:"";let A=document.createElement("div");A.className=`AtOnceSubText${T} AtOnceTextColorNine${T} AtOnceUserSelect${T}`;let x="";!1==v.hasOnlyDefaultVariant&&v.variant_title&&(x=v.variant_title),A.innerText=x,g.appendChild(f),g.appendChild(A),$.appendChild(m),$.appendChild(g),t.appendChild($)}return t}if(p&&p.length)for(let u of p){let d=s(u);l.appendChild(d)}else{let v=document.createElement("div");v.className=`AtOnceContainerPadded${T} AtOnceContainerSmallTopPadding${T} AtOnceContainerNoBottomPadding${T} AtOnceSubTextLarge${T}`;let $=Date.parse(e.created_at);Date.now()-$>432e6?v.innerHTML=`<p>Thanks for your patience!</p><p>Your order is likely still in production.</p><p>If you don’t get any updates after 3 more days, please message us & we’ll find your order.</p>`:v.innerHTML=`<p>Thanks for your patience!</p><p>Your order is still in production.</p><p>We’ll send your tracking info once it’s shipped.</p>`,l.appendChild(v)}let m=document.createElement("div");if(m.className=`AtOnceContainerPadded${T} AtOnceContainerNoBottomPadding${T}`,r){function h(e,t){return r[`${e}`]?`${t?" ":""}${r[`${e}`]}`:""}let _=document.createElement("div");_.className=`AtOnceSubHeadingSmall${T} AtOnceTextColorSeven${T}`,_.innerText="Shipping address";let g=document.createElement("div");g.className=`AtOnceSubText${T} AtOnceTextColorThree${T} AtOnceSubTextMediumMargin${T}`;let f=document.createElement("div");f.innerText=`${h("address1")}${h("address2",!0)}`;let A=document.createElement("div");A.innerText=`${h("city")}${h(`${r.province_code?"province_code":"province"}`,!0)}${h("zip",!0)}`;let x=document.createElement("div");x.innerText=`${h("country")}`,g.appendChild(f),g.appendChild(A),g.appendChild(x),m.appendChild(_),m.appendChild(g)}o.style.display="none",t$.innerHTML=`Order ${e.name}`,t$.className=`AtOnceSubHeading${T}`,i.appendChild(a),i.appendChild(l),i.appendChild(m),n.innerHTML="",n.appendChild(i)}async function v(){e.shopify_store=t,eE=e,e8=!0;let o=e.line_items,i=[];if(e.line_items_returned&&e.line_items_returned.length){let a=e.line_items_returned;for(let l of a){let p=1;l.quantity&&(p=Number(l.quantity)),isNaN(p)&&(p=1),i.push({id:l.id,line_item:l.line_item,product_id:l.product_id,quantity:p})}}td.style.display="",n.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerHTML=`Order ${e.name}`,t$.className=`AtOnceSubHeading${T}`,tm.innerText="",tm.style.display="none";let r=document.createElement("div");r.className=`AtOnceContainerPadded${T}`;let s=document.createElement("div");for(let u of(s.className=`AtOnceContainerPaddedTopSmall${T}`,o))try{let d=document.createElement("div");d.className=`AtOnceFlexSpacedNoAlign${T} AtOnceMarginBottomMedium${T}`;let v=document.createElement("div");v.className=`AtOncePositionRelative${T}`;let $=u.img,m=u.title,h=u.customer_paid_amount,_=u.customer_paid_currency,g="";!1==u.hasOnlyDefaultVariant&&u.variant_title&&(g=u.variant_title);let f=document.createElement("div");f.className=`AtOnceProductQuantityText${T}`,f.innerText=u.quantity;let A=document.createElement("div");A.className=`AtOnceProductImage${T}`,$?A.style.backgroundImage=`url(${$})`:A.innerHTML=eS,v.appendChild(f),v.appendChild(A);let x=document.createElement("div");x.className=`AtOnceFlexSpacedProductTitle${T}`;let O=document.createElement("div");O.className=`AtOnceTriHeading${T} AtOnceTextColorThree${T}`,O.innerText=m;let C=document.createElement("div");C.className=`AtOnceSubText${T} AtOnceTextColorNine${T} AtOnceUserSelect${T}`,C.innerText=g,x.appendChild(O),x.appendChild(C);let y=document.createElement("div");y.className=`AtOnceSubText${T} AtOnceTextColorFive${T}`,y.innerText=`${H(_)}${B(h)}`,d.appendChild(v),d.appendChild(x),d.appendChild(y),s.appendChild(d)}catch(b){}let S=document.createElement("div");function M(t,o,n,i){try{let a,l=0,p="";try{"shopify"==ec?(l=(a=e[`${o}`]).presentment_money.amount,p=H(a.presentment_money.currency_code)):(l=a=!0==i&&!1==isNaN(o)?o:e[`${o}`],p=e.currency_symbol)}catch(r){}if(null!=a){if("Discount"==t&&0==Number(l));else{let c=document.createElement("div");c.className=`AtOnceFlexSpacedNoAlign${T} AtOnceMarginBottomSmall${T}${n?` AtOnceContainerPaddedTopSmall${T}`:""}`;let s=document.createElement("div");s.className=`${n?" AtOnceTriHeading":"AtOnceSubText"}${T} AtOnceTextColorThree${T}`,s.innerText=t;let u=document.createElement("div");u.className=`${n?" AtOnceTriHeading":"AtOnceSubText"}${T} AtOnceTextColorFive${T}`,0==Number(l)?u.innerText="Free":u.innerText=`${"Discount"==t?"- ":""}${p}${B(l)}`,c.appendChild(s),c.appendChild(u),S.appendChild(c)}}}catch(d){}}if(S.className=`AtOnceContainerPaddedTopMedium${T}`,"shopify"==ec)M("Subtotal","total_line_items_price_set"),M("Discount","total_discounts_set"),M("Shipping","total_shipping_price_set"),M("Taxes","total_tax_set"),M("Total","total_price_set",!0);else{try{let w=Number(e.total)-Number(e.total_tax)-Number(e.shipping_total)-Number(e.discount_total);null!=w&&!1==isNaN(w)&&M("Subtotal",w,!1,!0)}catch(P){}M("Discount","discount_total"),M("Shipping","shipping_total"),M("Taxes","total_tax"),M("Total","total",!0)}if(s.appendChild(S),e.self_service_gift_cards&&e.self_service_gift_cards.length){let k=e.self_service_gift_cards,L=document.createElement("div");L.className=`AtOnceContainerPaddedTopLarge${T}`;let N=document.createElement("div");N.className=`AtOnceSubHeadingSmall${T} AtOnceTextColorSeven${T} AtOnceSubTextMarginBottom${T}`,N.innerText="Gift Cards",L.appendChild(N);let E=H(e.presentment_currency);for(let I of k){let R=document.createElement("div");R.className=`AtOnceFlex${T} AtOnceMarginBottomMedium${T}`;let K=document.createElement("div");K.className=`AtOnceFlexSpacedNoAlign${T}`;let U=document.createElement("a");U.target="_blank",U.rel="noopener noreferrer nofollow",U.href=`${Z||e.shopify_store}/discount/${I.code}?ref=atonce`,U.innerText=`${I.code}`;let z=document.createElement("div");z.className=`AtOnceSubText${T} AtOnceTextColorFive${T}`,z.innerText=`${E}${Number(I.presentment_amount).toFixed(2)}`,K.appendChild(U),K.appendChild(z),R.appendChild(K),L.appendChild(R)}s.appendChild(L)}if(e.self_services&&e.self_services.length){let G=e.self_services,V=document.createElement("div");V.className=`AtOnceContainerPaddedTopLarge${T}`;let D=document.createElement("div");for(let F of(D.className=`AtOnceSubHeadingSmall${T} AtOnceTextColorSeven${T} AtOnceSubTextMarginBottom${T}`,D.innerText="Returns",V.appendChild(D),G)){let J=document.createElement("div");J.className=`AtOnceFlex${T} AtOnceMarginBottomMedium${T}`;let q=document.createElement("div");q.className=`AtOnceFlexSpacedNoAlign${T}`;let j=document.createElement("a");j.target="_blank",j.rel="noopener noreferrer nofollow",j.href=`${eH}?return=${F.return}`,j.innerText=`${F.return}`,q.appendChild(j),J.appendChild(q),V.appendChild(J)}s.appendChild(V)}r.appendChild(s);let Q=c(["Help","Track"],!0);n.innerHTML="",n.appendChild(Q),n.appendChild(r)}o.appendChild(s)}async function t4(e){if(e8=!1,e7.length&&!e){let t=tC();for(let o of e7)if(o){let n=o[1],i=o[0];tS(i,n,t,tn)}tn.innerHTML="",tn.appendChild(t)}else ty(!0)}async function tM(){let e=document.createElement("div");if(tn.appendChild(e),0==e7.length&&await ty(!1,!0),e7.length){let t=document.createElement("div");t.innerText="Your orders",t.className=`AtOnceSubHeadingSmall${T} AtOnceTextColorSeven${T} AtOnceSubHeadingMargin${T}`,e.appendChild(t);let o=e7.length,n=e7.slice(0,3);for(let i of n)if(i){let a=i[1],l=i[0];tS(l,a,e,tn)}if(o>3){let p=document.createElement("div");p.className=`AtOnceFlexCenter${T} AtOnceContainerPaddedLess${T} AtOnceContainerPaddedTopTiny${T}`;let r=document.createElement("button");r.className=`AtOnceMainButton${T} AtOnceSecondaryButton${T} AtOnceTertiaryButton${T} AtOnceQuaternaryButton${T}`,r.innerText="View All Orders",r.addEventListener("click",function(){t4()}),p.appendChild(r),e.appendChild(p)}}}function tw(e,t,o,n,i,a,l,p,r,c,s,u){try{let d=!1;try{if(eE){if("shopify"==ec)(eE.fulfillments&&eE.fulfillments.length||eE.cancelled_at||Number(eE.total_outstanding))&&(d=!0);else if("woocommerce"==ec){("on-hold"==eE.status||"completed"==eE.status||"cancelled"==eE.status||"refunded"==eE.status||"failed"==eE.status||"trash"==eE.status)&&(d=!0);try{!0==eE.needs_payment&&(d=!0)}catch(v){}try{!1===eE.is_changeable&&(d=!0)}catch($){}}}}catch(m){}let h=null;try{h=e.action}catch(_){}if(!0==d&&("edit_add"==h||"edit_remove"==h||"edit_shipping_address"==h||"edit_cancel"==h));else{let g="div";"link"==e.type?g="a":"map"==e.type?g="map":"text"==e.type?g="text":"button"==e.type&&(g="button");let f=document.createElement("a"==g?"a":"div");if(f.className=`AtOnceQuickButton${T}`,"a"==g){f.target="_blank",f.rel="noopener noreferrer nofollow";let A=e.link;A?f.href=`${A}`:f.href=eu,f.classList.add(`AtOnceQuickButtonLink${T}`)}else if("map"==g){let x=e.actions,O=e.actions_heading,C=e.sub_action;f.addEventListener("click",function(){t6(x,O,!0,C,u)})}else if("text"==g){let y=e.text,b=e.heading,S=e.sub_actions;f.addEventListener("click",function(){let o=document.createElement("div");if(o.className=`AtOnceTextContainer${T}`,o.innerHTML=y,i&&(i.innerText=b),a.innerHTML="",a.appendChild(o),S){let s=document.createElement("div");try{for(let d of S)tw(d,s,!0,n,i,a,l,p,r,void 0,void 0,u)}catch(v){}a.appendChild(s)}if("search"==e.tri_action){try{t5.remove()}catch($){}tb(a,!0,e.heading,e.tri_action,u)}else tb(a,!1,e.heading,e.tri_action,u);if(!0!==c&&th.push({l:p,t:r,t_q:n,t_s:l}),n&&l)try{t5.remove()}catch(m){}if(!0==c)try{t.scrollIntoView({behavior:"smooth"})}catch(h){}})}else"button"==g&&("manage_orders"==h?f.addEventListener("click",function(){t3(!1)}):"edit_add"==h?f.addEventListener("click",function(){tT("edit_add")}):"edit_remove"==h?f.addEventListener("click",function(){tT("edit_remove")}):"edit_shipping_address"==h?f.addEventListener("click",function(){!function e(){if(eE){let t=eE.shipping_address,o=JSON.parse(JSON.stringify(t)),n=document.createElement("div");n.className=`AtOnceMainShopStickyChangesContainer${T} AtOnceFlexCenter${T}`;let i=document.createElement("button");i.className=`AtOnceMainButton${T} AtOncePrimaryButton${T}`,i.innerText="Change Address";let a=document.createElement("div");function l(e,t){setTimeout(function(){try{let o=i.innerText;"Changed Address"!==o&&"Address Change Failed"!==o&&(i.innerText=`${e} (${t}/3)`)}catch(n){}},2e3*t)}a.style.display="none",a.className=`AtOnceLoadingSpinner${T} bottomed`,i.addEventListener("click",function(){a.style.display="",i.disabled=!0,i.classList.remove("red"),l("Confirming Address",1),l("Updating Package",2),l("Changing Address",3),L("edit_shipping_address",{store:eE.shopify_store,order:eE.id,address:t}).then(e=>{e&&e.success?(a.style.display="none",i.disabled=!1,i.classList.add("green"),i.innerText="Changed Address",setTimeout(function(){try{td.click()}catch(e){}},2500)):(i.classList.add("red"),a.style.display="none",i.innerText="Address Change Failed")})}),n.appendChild(a),n.appendChild(i);let p=[];td.style.display="",tn.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerHTML="Change Address",t$.className=`AtOnceSubHeading${T}`,tm.innerText="",tm.style.display="none";let r=document.createElement("div");r.className=`AtOnceContainerPadded${T} AtOnceContainerNoBottomPadding${T}`;let c=P,s=t.country_code,u=t.country,d=[];for(let v of w)d.push(`<option value="${v.alpha2}">${v.country}</option>`);let $="";for(let m of d)-1==m.indexOf(`value="${s}"`)&&($+=m);c=$+c,s&&u&&(c=`<option value="${s}">${u}</option>`+c);let h=[{name:"Name",value:"name",required:!0,type:"text"},{name:"Address",value:"address1",required:!0,type:"text"},{name:"Apartment, suite, etc.",value:"address2",required:!1,type:"text"},{name:"City",value:"city",required:!0,type:"text"},{name:"State/Province",value:"province_code",required:"shopify"==ec,type:"text"},{name:"ZIP/Post code",value:"zip",required:!0,type:"text"},{name:"Country",value:"country_code",required:!0,options:c,type:"text"},{name:"Company",value:"company",required:!1,maxLength:35,type:"text"},{name:"Phone",value:"phone",required:!1,type:"tel"},];if(t)for(let _ of h){let g="";t[`${_.value}`]&&(g=t[`${_.value}`]),g&&(_.default=g)}let f="l",A=document.createElement("div"),x="";for(let O of h){let C=document.createElement("div");if(A.appendChild(C),"l"==f)f="r",C.className=`AtOnceInputSubContainer_left${T}`;else{f="l";let y=document.createElement("div");y.className=`AtOnceInputSubContainer_clear${T}`,A.appendChild(y),C.className=`AtOnceInputSubContainer_right${T}`}let b="",S=document.createElement("label");if(S.htmlFor=O.value,S.innerText=`${O.name}`,S.className=`AtOnceDestinationLabel${T}`,O.options||"province_code"==O.value){if((b=document.createElement("select")).className=`AtOnceDestinationInput${T}`,O.options){if(b.innerHTML=O.options,t.country_code){if(x.innerHTML=k[`${t.country_code}`],t.province_code){x.value=t.province_code;try{let M=new Event("change");x.dispatchEvent(M)}catch(N){}}k[`${t.country_code}`]?x.disabled=!1:x.disabled=!0}else x.disabled=!0;b.addEventListener("change",function(){x.innerHTML=k[`${b.value}`],k[`${b.value}`]?x.disabled=!1:x.disabled=!0})}else x=b}else(b=document.createElement("input")).className=`AtOnceDestinationInput${T}`,b.type=O.type,b.name=O.value,O.maxLength&&(b.maxLength=O.maxLength);function E(){i.innerText="Change Address",i.disabled=!1,i.classList.remove("red"),B(),!b.value&&O.required?b.classList.add(`atonce_input_red${T}`):b.classList.remove(`atonce_input_red${T}`)}O.default&&(b.value=O.default),b.addEventListener("keyup",function(){B()}),b.addEventListener("keyup",function(){t[`${O.value}`]=b.value,E()}),b.addEventListener("change",function(){t[`${O.value}`]=b.value,E()}),E(),p.push({input:b,required:O.required,value:O.value,name:O.name}),C.appendChild(S),C.appendChild(b)}function B(){let e=!0;for(let[i,a]of Object.entries(o))if(t[`${i}`]!==o[`${i}`]){e=!1;break}!0==e?n.classList.remove("visible"):n.classList.add("visible")}A.style.display="",r.appendChild(A),r.appendChild(n),tn.innerHTML="",tn.appendChild(r)}}()}):"edit_cancel"==h&&f.addEventListener("click",function(){tT("edit_cancel")}));if("map"==g||"text"==g||"button"==g||"link"==g){let M=e.id;f.addEventListener("click",function(){try{L("update_frequency",{store:Y,id:M,ol:e8,u:q,f:j}),j+=.1,q=!1}catch(e){}})}let N=document.createElement("div");N.className=`AtOnceQuickLinkButtonHeaders${T}`;let E=document.createElement("div");if(E.className=`AtOnceTriHeading${T} AtOnceTextColorThree${T} AtOnceMobileTriHeading${T}`,E.innerText=e.heading?e.heading:e.actions_heading,N.appendChild(E),e.subheading){let B=document.createElement("div");B.className=`AtOnceSubText${T} AtOnceTextColorSeven${T}`,B.innerText=e.subheading,N.appendChild(B)}else(n||s)&&!0!==o&&f.classList.add(`AtOnceQuickButtonPadded${T}`);if(e.icon){let H=document.createElement("div");H.className=`AtOnceQuickIcon${T}`,H.innerHTML=eO[`${e.icon}`],f.appendChild(H)}f.appendChild(N);let I=document.createElement("div");I.className=`AtOnceMarginLeft${T}`,I.innerHTML=eT,f.appendChild(I),t.appendChild(f)}}catch(R){}}ty(!1,!0);let t5="";function tP(e,t){let o=document.createElement("div");o.id=`AtOnceContainerHelpCenterSearch${T}`,o.className=`AtOnceContainerPaddedTopSmall${T}`;let n=document.createElement("div"),i=Date.now(),a=document.createElement("div");a.className=`AtOncePositionRelative${T} AtOnceFlexTitle${T}`;let l=document.createElement("div");l.className=`AtOnceSearchInputIcon${T}`,l.innerHTML=eP;let p=document.createElement("input");p.id="AtOnceMainSearchInput",p.type="text",p.className=`AtOnceSearchInput${T} AtOnceSearchInputIconed${T}`,p.placeholder="Search instant answers",function e(t,o,n){try{let i=[],a=!0;if(es&&es.length)try{let l=localStorage.getItem("AtOnceOrders");l&&l.split(",").length&&(a=!1)}catch(p){}if(o||!0==a&&ev.length){if(t.innerHTML="",o){let r=tA.search(o);if(r.item)i.push(r);else{r.sort(function(e,t){return t.f-e.f});let c=[];function s(){try{if(n&&n.length&&r.length)for(let e of r){let t=e.id;-1==n.findIndex(function(e){return e==t})&&c.push(e)}}catch(o){}}if(s(),c.length)for(let u of c)try{if(i.length>5)break;i.push(u.item)}catch(d){}else for(let v of(r=ev.sort(function(e,t){return t.f-e.f}),s(),c))try{if(i.length>5)break;i.push(v)}catch($){}}}else i=ev.sort(function(e,t){return t.f-e.f});let m=i.slice(0,5);try{m=m.filter(e=>-1==n.indexOf(e.id))}catch(h){}for(let _ of m)tw(_,t,!1,!1,"",t,!1,"","",!0)}}catch(g){}}(n,e,t),p.addEventListener("keyup",function(){try{let e=p.value,t=Date.now();t-i>500&&(i=t,t0(e,n,4))}catch(o){}}),a.appendChild(l),a.appendChild(p),o.appendChild(a),o.appendChild(n),tn.appendChild(o)}function t6(e,t,o,n,i,a){o?(tn.classList.add(`AtOnceContainerScrollMiddleHelpCenter${T}`),t$.innerText="Instant Answers",t$.className=`AtOnceSubHeading${T}`,tm.style.display="none",td.style.display=""):(tn.classList.remove(`AtOnceContainerScrollMiddleHelpCenter${T}`),td.style.display="none",t$.className=`AtOnceMainHeading${T}`,t$.innerText=ex.top_hi_text,tm.innerText=ex.top_hi_subtext,tm.style.display="");let l=document.createElement("div"),p=document.createElement("div");p.className=`AtOnceSubHeadingSmall${T} AtOnceSubHeadingMargin${T} AtOnceTextColorSeven${T}`,p.innerText=t||"";let r=document.createElement("div"),c=document.createElement("div");if(t5=c,"Quick links"==t){if(e.length)for(let s of e)s.icon&&tw(s,r,!1,o,p,r,n,e,t,void 0,void 0,a)}else if(e8){if(e.length){for(let u of e)for(let d of em)if(d.id==u){tw(d,r,!1,o,p,r,n,e,t,void 0,void 0,a);break}}}else if(e.length){for(let v of e)for(let $ of e$)if($.id==v){tw($,r,!1,o,p,r,n,e,t,void 0,void 0,a);break}}if(l.appendChild(p),l.appendChild(r),o&&n)try{c.className=`AtOnceContainerPaddedTop${T}`,tw(n,c,!0,o,p,r,n,e,t,void 0,void 0,a),l.appendChild(c)}catch(m){}tn.innerHTML="",tn.appendChild(l),"Quick links"==t?(tP(),tM(),ta()):tP(t,e),!0!==i&&th.push({l:e,t:t,t_q:o,t_s:n})}td.addEventListener("click",function(){if(e8)t4();else{th.pop();let e=th[th.length-1];e?t6(e.l,e.t,e.t_q,e.t_s,!0):t6(e$,"Quick links"),e8=!1}});let tk=document.createElement("div");tk.className=`AtOncePoweredByContainer${T} AtOnceBottomContainer${T}`;let tL=document.createElement("div");tL.className=`AtOnceSubText${T} AtOnceTextColorSeven${T}`,tL.innerHTML=`<a href="${eu}" target="_blank" rel="noopener noreferrer nofollow" class="AtOncePoweredByLink${T}">Powered by <span class="AtOncePoweredByText${T}">AtOnce</span></a>`,tk.appendChild(tL),to.appendChild(tc),to.appendChild(tn),to.appendChild(tk),tt.appendChild(to);let tN=document.createElement("button");tN.className=`AtOnceChatButton${T}`,tN.appendChild(_),tN.ariaLabel="Open self service",tN.ariaHasPopup=!1;let tE=document.createElement("div");tE.innerHTML=eb;let t7=document.createElement("div");function t8(){t=!1,tN.classList.remove(`AtOnceHideChatButton${T}`),!0==e_&&eh.body.classList.remove(`AtOnceBody${T}`),tt.className=`AtOnceChatPrimaryContainer${T} AtOnceHidePrimaryContainer${T}`;try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(e){}setTimeout(function(){!1==t&&(tN.style.display="",tt.style.display="none",AtOnceChatContainer.style.width="100px",AtOnceChatContainer.style.height="100px")},200)}function tB(){AtOnceChatContainer.style.width="100%",AtOnceChatContainer.style.height="100%",tt.style.display="",f.className=`AtOnceLiveChatMessagesContainer${T} hidden`,f.innerHTML="",setTimeout(function(){if(!0==t){tN.style.display="none";try{_.className=`AtOnceChatNotification${T} hidden`,en&&(window.top.document.title=en)}catch(e){}try{!er&&Y&&J.currentUser.uid&&(e9(!1),eh.addEventListener("visibilitychange",function(){try{"hidden"===eh.visibilityState?navigator.sendBeacon("https://atonce.com/api/selfservice.js?action=update_live_active",JSON.stringify({email:Y,user:J.currentUser.uid})):e9(!1)}catch(e){}}),er=setInterval(function(){e9(!1)},6e4))}catch(o){}}},200),t=!0,th=[],t6(e$,"Quick links"),tt.style.cssText="",tN.classList.add(`AtOnceHideChatButton${T}`),!0==e_&&eh.body.classList.add(`AtOnceBody${T}`),tt.className=`AtOnceChatPrimaryContainer${T} AtOnceShowPrimaryContainer${T}`}t7.className=`AtOnceCloseButtonMobile${T}`,t7.innerHTML=ek,t7.addEventListener("click",function(){t8()}),tt.appendChild(t7),tE.className=`AtOnceFlexCenter${T}`,tN.addEventListener("click",function(){if(!0==t)t8();else{if(i&&f.innerText)try{setTimeout(function(){try{t1(i,a)}catch(e){}})}catch(e){}tB()}}),tN.appendChild(tE),te.appendChild(f),te.appendChild(tt),te.appendChild(tN),setTimeout(function(){let e=document.getElementById("AtOnceChatContainer");e.contentDocument?eh=e.contentDocument:e.contentWindow&&(eh=e.contentWindow.document),eh.head.appendChild(eV),eh.body.appendChild(te)})}catch(tH){}})}catch(e2){}}export{createAtOnceLiveChat};
