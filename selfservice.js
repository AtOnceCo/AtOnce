import{initializeApp as e,getApp as t}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";import{getAuth as o,signInAnonymously as n,onAuthStateChanged as i}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";import{getFirestore as a,doc as l,collection as p,query as r,where as c,limit as s,orderBy as u,getDoc as d,getDocs as v,onSnapshot as $}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";import m from"https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js";import"https://cdn.jsdelivr.net/npm/autolinker@3.15.0/dist/Autolinker.min.js";import h from"https://cdn.jsdelivr.net/gh/AtOnceCo/Slider@main/slider.js";import _ from"https://cdn.skypack.dev/mime/lite";import{getStorage as g,getDownloadURL as f,ref as A,uploadBytes as x,deleteObject as O}from"https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";async function createAtOnceLiveChat(e,t){try{var o=setInterval(function(){"complete"===document.readyState&&(clearInterval(o),function o(){try{let n=document.getElementById("AtOnceChatContainer"),i=2147483647;try{t&&Number(t.z)&&(i=Number(t.z))}catch(a){}if(n)n.innerHTML="";else{let l=!1;(window.screen.width<=600||window.innerWidth<=600)&&(l=!0),(n=document.createElement("iframe")).title="Self Service",n.id="AtOnceChatContainer",n.allowFullscreen=!0,n.style.border="none",n.style.outline="none",n.style.position="fixed",n.style.bottom=0,n.style.right=0,n.style.width="100px",n.style.height="100px",n.style.maxWidth="450px",n.style.maxHeight=`${l?"1000px":"700px"}`,n.style.zIndex=i,n.style.userSelect="none",n.style.opacity=1,n.style.visibility="visible",document.body.appendChild(n)}createTheAtOnceLiveChat(e,i)}catch(p){}}())},100)}catch(n){}}async function createTheAtOnceLiveChat(C,y){try{let b=`-${E(5)}`,S=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" style="width:24px;height:24px;">
            <path d="M61.8 68.1c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2s-2-.4-2.8-1.1l-26-25c-.8-.8-1.2-1.8-1.2-2.9s.4-2.1 1.2-2.9l26-25c1.6-1.5 4.1-1.5 5.7.1 1.5 1.6 1.5 4.1-.1 5.7L38.8 46l23 22.1z" fill="#333" class="color000000 svgShape"/>
        </svg>
        `,T=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" style="width:24px;height:24px;">
            <path d="M63 46c0 1.1-.4 2.1-1.2 2.9l-26 25C35 74.6 34 75 33 75c-1.1 0-2.1-.4-2.9-1.2-1.5-1.6-1.5-4.1.1-5.7l23-22.1-23-22.1c-1.6-1.5-1.6-4.1-.1-5.7 1.5-1.6 4.1-1.6 5.7-.1l26 25c.8.8 1.2 1.8 1.2 2.9z" fill="#333" class="color000000 svgShape"/>
        </svg>
        `,M=[{alpha2:"US",country:"United States"},{alpha2:"GB",country:"United Kingdom"},{alpha2:"CA",country:"Canada"},{alpha2:"AU",country:"Australia"},{alpha2:"DE",country:"Germany"},{alpha2:"FR",country:"France"},{alpha2:"NL",country:"Netherlands"},{alpha2:"BR",country:"Brazil"},{alpha2:"IN",country:"India"},{alpha2:"IT",country:"Italy"}],P=`
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
        <option value="ZZ">Unknown Region</option>`,w={AR:`
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
        `};async function k(e,t){return fetch(`https://atonce.com/api/selfservice.js?action=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json().then(e=>e).catch(e=>{}))}function L(e){let t=e=>({id:e.id,...e.data()});return e.docs?e.docs.map(t):e.exists()?t(e):null}function E(e){let t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length;for(let i=0;i<e;i++)t+=o.charAt(Math.floor(Math.random()*n));return t}function N(e){let t=(+`${e}`).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,"$1").toString(),o=t.slice(-2);return"."==o[0]?`${t}0`:t}function B(e){let t={USD:"$",EUR:"€",JPY:"\xa5",GBP:"\xa3",AUD:"AU$",CAD:"CA$",CHF:"CHF",HKD:"HK$",NZD:"NZ$"};return t[e]?t[e]:`${e} `}function H(e,t,o,n,i,a){let l="";if(e&&e.length>1){(l=document.createElement("div")).className=`AtOnceModalProductImageSlideshowContainer${b}`;let p=document.createElement("ul");for(let r of(p.className=`AtOnceModalProductImageUL${b}`,e)){let c=document.createElement("li");c.className=a;let s=document.createElement("img");s.alt="",s.className=`AtOnceModalProductImage${b}`,s.style.maxWidth="100%",s.setAttribute("product_image","true"),r?s.src=`${r}`:s.src=`${product_placeholder_image}`,c.appendChild(s),p.appendChild(c),n.push(c)}l.appendChild(p),t.innerHTML=S,t.className=`AtOnceModalProductImageSlideshowChevron${b} AtOnceModalProductImageSlideshowChevron_left${b}`,t.id="productSliderLeft",o.innerHTML=T,o.className=`AtOnceModalProductImageSlideshowChevron${b} AtOnceModalProductImageSlideshowChevron_right${b}`,o.id="productSliderRight",l.appendChild(t),l.appendChild(o);let u=new h(p,l);u.init(),u.addArrow(t,o)}return l}function I(e){try{let t=document.querySelectorAll('[product_image="true"]');if(t&&t.length){let o=t.length;for(let n=0;n<o;n++)if(t[n].src==e){for(let i=0;i<o;i++){let a=t[i].parentElement;if(-1!==a.className.indexOf("active")){let l=document.getElementById("productSliderLeft"),p=document.getElementById("productSliderRight"),r=i-n;if(0==r);else if(r<0){if(r=Math.abs(r),p)for(let c=0;c<r;c++)p.click()}else if(r>0&&l)for(let s=0;s<r;s++)l.click();break}}break}}}catch(u){}}let R={apiKey:"AIzaSyDt13tSh_eab4msT_1huODpEe8q4L0EHlg",authDomain:"email-automation-321716.firebaseapp.com",databaseURL:"https://email-automation-321716.firebaseio.com",storageBucket:"email-automation-321716.appspot.com"};function K(o){try{return t()}catch(n){return e(o)}}let U=K({apiKey:"AIzaSyDt13tSh_eab4msT_1huODpEe8q4L0EHlg",authDomain:"email-automation-321716.firebaseapp.com",projectId:"email-automation-321716"}),z=K(R),G=g(z,R.storageBucket),V=a(U),D=o(U),F=!0,J=1,j="",q="",Q="",Z=0,W=Date.now(),Y=!1,X="",ee=window.top.document.title,et=0,eo=0,en="",ei="",ea=[],el="#fefefe",ep=[],er=[],ec=[],es,eu=!1;(window.screen.width<=600||window.innerWidth<=600)&&(eu=!0);let ed="#1a73e8",ev="#fff",e$="#111",em="#333",eh={top_hi_text:"Hi [[NAME_PLACEHOLDER]] \uD83D\uDC4B",top_hi_subtext:"Need help? Get instant solutions below"},e_={box:`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#333">
                <path fill-rule="evenodd" d="M16.164 3a.5.5 0 0 0-.004.002.5.5 0 0 0-.01 0 .5.5 0 0 0-.17.043L4.422 7.988a.5.5 0 0 0-.422.5V23.49a.5.5 0 0 0 .043.207.5.5 0 0 0 .002.006.5.5 0 0 0 .014.027.5.5 0 0 0 .255.239l11.567 4.945a.5.5 0 0 0 .293.094.5.5 0 0 0 .328-.098l11.56-4.941a.5.5 0 0 0 .307-.395.5.5 0 0 0 .004-.027.5.5 0 0 0 .002-.024.5.5 0 0 0 0-.025.5.5 0 0 0 0-.008V8.488a.5.5 0 0 0-.414-.498L16.406 3.05a.5.5 0 0 0-.011-.005.5.5 0 0 0-.082-.027.5.5 0 0 0-.014-.004.5.5 0 0 0-.035-.008.5.5 0 0 0-.014-.002.5.5 0 0 0-.037-.002.5.5 0 0 0-.049-.002zm.023 1.045 2.45 1.047L8.25 9.535a.5.5 0 0 0-.03.014L5.769 8.5l10.42-4.455zm3.723 1.592 2.973 1.271-10.58 4.526a.5.5 0 0 0-.301.51.5.5 0 0 0-.002.058v5.35l-1.084-1.627a.5.5 0 0 0-.639-.17L9 16.193v-5.89l10.91-4.666zm4.244 1.814L26.607 8.5l-10.42 4.455-2.45-1.047 10.388-4.443a.5.5 0 0 0 .03-.014zM5 9.258l3 1.283v6.461a.5.5 0 0 0 .723.447l1.605-.803 1.729 2.592a.5.5 0 0 0 .002.004.5.5 0 0 0 .252.227.5.5 0 0 0 .002.002.5.5 0 0 0 .044.015.5.5 0 0 0 .092.02.5.5 0 0 0 .059.002.5.5 0 0 0 .058-.004.5.5 0 0 0 .041-.008.5.5 0 0 0 .03-.008.5.5 0 0 0 .025-.008.5.5 0 0 0 .082-.035.5.5 0 0 0 .002-.002.5.5 0 0 0 .254-.502v-6.26l2.688 1.15v13.915L5 23.174V9.258zm22.375.002v13.914l-10.688 4.572V13.83l10.688-4.57z" color="#333" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#333;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#333;solid-opacity:1"/>
            </svg>`,return:`
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" width="32" height="32" class="AtOnceReturnIconAdjustment${b}" fill="#333">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#333" width="30" height="30" class="AtOnceFAQIconAdjustment${b} faq">
                <path d="M14,57a1,1,0,0,1-.39-.08A1,1,0,0,1,13,56V47H9a5,5,0,0,1-5-5V18a5,5,0,0,1,5-5H49a5,5,0,0,1,5,5V42a5,5,0,0,1-5,5H24.84L14.69,56.72A1,1,0,0,1,14,57ZM9,15a3,3,0,0,0-3,3V42a3,3,0,0,0,3,3h5a1,1,0,0,1,1,1v7.66l8.75-8.38a1,1,0,0,1,.69-.28H49a3,3,0,0,0,3-3V18a3,3,0,0,0-3-3ZM60,36V12a5,5,0,0,0-5-5H15a5,5,0,0,0-5,5h2a3,3,0,0,1,3-3H55a3,3,0,0,1,3,3V36a3,3,0,0,1-3,3v2A5,5,0,0,0,60,36ZM30,31.92A6,6,0,1,0,23,26h2a4,4,0,1,1,4,4,1,1,0,0,0-1,1v5h2ZM30,38H28v2h2Z"/>
            </svg>`,chat:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333" class="AtOnceFAQIconAdjustment${b}">
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
            `};async function eg(e){return new Promise(function(t,o){Promise.all(e).then(e=>{t(e)}).catch(e=>{t("error")})})}function ef(e){let t=e.length;for(let o=0;o<t;o++)e.sort(function(e,t){return t.f-e.f});for(let n=0;n<t;n++)e[n].actions&&ef(e[n].actions);return e}async function eA(){try{let e=[];async function t(e,t){return new Promise(async function(t,o){try{let n=`${C}`.toLowerCase(),i=l(V,"self_service",`${n}.useatonce.com`,`${e}`,"1");d(i).then(o=>{o.exists()?("quick_links"==e?(er=o.data().list,er=ef(er)):(ec=o.data().list,ec=ef(ec)),t("success")):t("error")})}catch(a){t("error")}})}async function o(){return new Promise(async function(e,t){try{let o=`${C}`.toLowerCase(),n=l(V,"stripe_check",`${o}@emails.atonce.com`);d(n).then(t=>{if(t.exists()){let o=t.data();o&&"active"==o.stripeSubscriptionStatus?e(!0):e(!1)}else e(!1)})}catch(i){e(!1)}})}async function n(){return new Promise(async function(e,t){try{let o=`${C}`.toLowerCase(),n=l(V,"self_service",`${o}.useatonce.com`);d(n).then(t=>{if(t.exists()){j=t.data();try{let o=window.location.hostname;o&&-1==o.indexOf(".useatonce.com")&&-1==o.indexOf("returns.")&&-1==o.indexOf("exchanges.")&&-1==o.indexOf("refunds.")&&(q=`https://${o}`)}catch(n){}!q&&j.brand_url&&(q=`https://${j.brand_url}`),j.main_email&&(Q=j.main_email),j.last_seen&&!1==isNaN(j.last_seen)&&(Z=Number(j.last_seen));let i=`${j.color}`.trimStart().trimEnd();if(i&&/[0-9A-Fa-f]{6}/g.test(i)){ed=i;let a=function e(t,o,n){let i="#"===t.charAt(0)?t.substring(1,7):t,a=parseInt(i.substring(0,2),16),l=parseInt(i.substring(2,4),16),p=parseInt(i.substring(4,6),16);if(!(.299*a+.587*l+.114*p>186))return[o,t,t];{function r(e,t){return e.replace(/^#/,"").replace(/../g,e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))}let c=r(t,-7),s=r(t,-25);return[n,`#${c}`,`#${s}`]}}(ed,"#fff","#111");ev=a[0],e$=a[1],em=a[2]}let l=j.shopify_stores;if(l&&Array.isArray(l)&&l.length){let p=[];for(let r of l)p.push(r);ea=p=[...new Set(p)]}e("success")}else e("error")})}catch(i){e("error")}})}e.push(t("quick_links",er)),e.push(t("quick_order_links",ec)),e.push(n()),e.push(o());let i=await eg(e);if(!1==i[3])return"error";return i[0]}catch(a){return"error"}}async function e0(){return new Promise(async function(e,t){let o=!1;try{"true"==localStorage.getItem("hasTeamToken")&&(o=!0)}catch(a){}let l="";try{l=D.currentUser.uid}catch(p){}if(D&&o||l){if(!l)try{i(D,e=>{e&&localStorage.setItem("AtOnceLiveChatUserID",D.currentUser.uid)})}catch(r){}eA().then(t=>{e(t)})}else if(D&&null===D.currentUser)try{i(D,t=>{t?(eA().then(t=>{e(t)}),localStorage.setItem("AtOnceLiveChatUserID",D.currentUser.uid)):n(D).then(()=>{i(D,t=>{t?(localStorage.setItem("AtOnceLiveChatUserID",t.uid),eA().then(t=>{e(t)})):e("error")})}).catch(t=>{e("error")})})}catch(c){}else n(D).then(()=>{i(D,t=>{t?(localStorage.setItem("AtOnceLiveChatUserID",t.uid),eA().then(t=>{e(t)})):e("error")})}).catch(t=>{e("error")})})}await e0().then(e=>{if("error"!=e)try{let t=!1;try{document.addEventListener("visibilitychange",function(){try{!0==t&&"visible"==document.visibilityState&&(window.top.document.title=ee)}catch(e){}})}catch(o){}let n=0,i="",a=[];try{!1==isNaN(Number(localStorage.getItem("AtOnceLastUnreadMessage")))&&(n=Number(localStorage.getItem("AtOnceLastUnreadMessage")))}catch(h){}let g=document.createElement("div");g.className=`AtOnceChatNotification${b} hidden`;let S=document.createElement("div");async function T(e){try{let t=[`${e}`],o=localStorage.getItem("AtOnceOrders");if(o)try{let n=o.split(",");if(n&&n.length)for(let i of n)i&&i.length>7&&-1==t.indexOf(i)&&t.push(i)}catch(a){}localStorage.setItem("AtOnceOrders",t)}catch(l){}}async function R(e,t,o){k("get_customer_orders",{store:o,customer:t,order:e}).then(e=>{if(e.success){let t=e.success;for(let o of t=t.reverse())T(o)}try{let n=localStorage.getItem("AtOnceOrders");if(n){let i=n.split(",")[0];i&&i.length>7&&-1!==i.indexOf("_atonce_")&&function e(t,o,n){try{for(let i of t)i.text?-1!==i.text.indexOf(o)&&-1==i.text.indexOf(`${eM}?order=`)&&(i.text=e5(i.text,o,`${eM}?order=${n}`)):i.link&&-1!==i.link.indexOf(o)&&-1==i.link.indexOf(`${eM}?order=`)&&(i.link=e5(i.link,o,`${eM}?order=${n}`)),i.sub_actions&&e(i.sub_actions,o,n)}catch(a){}}(er,eM,i)}}catch(a){}})}function K(e){return e?e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ").replaceAll("_"," "):""}async function U(e,t){let o=null,n=null,i=[];for(let a of ea)i.push(p(a));async function p(i){return new Promise(async function(a,p){try{let r=await d(l(V,"shopify",`${i}`,`${t}`,`${e}`)).then(L);r&&(o=i,n=r),a("success")}catch(c){a("success")}})}return i.length>0&&await eg(i),[n,o,e]}S.className=`AtOnceLiveChatMessagesContainer${b} hidden`;let z=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" transform="scale(-1 1)" fill="${ev}" style="height:42px;width:42px;">
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S17.5 2 12 2zM8 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                    </svg>            
                    `,ef=`
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
                            <path fill="none" stroke="${ev}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1 1 13M1 1l12 12" class="colorStroke000 svgStroke"/>
                        </svg>
                    </svg>
                    `,eA=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                        <g data-name="Layer 2" fill="${ev}" class="color000000 svgShape">
                            <g data-name="arrow-back" class="color000000 svgShape">
                            <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" class="color000000 svgShape"/>
                            </g>
                        </g>
                    </svg>
                    `,e0=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="${"#111"==ev?em:ed}">
                        <path d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"/>
                    </svg>
                    `,ex=`
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" style="background: #888;border-radius: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
                            <g fill="#fefefe" class="color000 svgShape" data-name="Layer 2">
                                <path fill="#fefefe" d="M27 2H5a3 3 0 0 0-3 3v17.535l9.441-6.364a1 1 0 0 1 1.266.122l4.367 4.367 4.3-3.441a1 1 0 0 1 1.2-.04L30 22.347V5a3 3 0 0 0-3-3Zm-7 13a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm2.042 4.247L30 24.782V27a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2.053l9.875-6.657 6.418 6.417a1 1 0 0 0 1.414-1.414l-1.21-1.21Z" class="color4c46c8 svgShape"/>
                            </g>
                        </svg>
                    </svg>
                    `,eO=`
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                            <path fill="#333" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" class="color000000 svgShape color888"/>
                        </svg>
                    </svg>
                    `,e9=`
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16px" height="16px">
                            <path fill="#333" d="M6 13c-.55228 0-1-.4477-1-1s.44772-1 1-1h12c.5523 0 1 .4477 1 1s-.4477 1-1 1H6Z" class="color000000 svgShape color888"/>
                        </svg>
                    </svg>
                    `,eC=`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill="#888" fill-rule="evenodd" d="m15.7 13.3-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" class="color000000 svgShape"/>
                    </svg>
                    `;eA=eA.replace(`fill="${ev}"`,`fill="${"#fff"==ev?"#eee":"#222"}"`);let e1=e5(ef.replace(`stroke="${ev}"`,'stroke="#555"'),"16","10"),ey=ef.replace(`stroke="${ev}"`,`stroke="${"#fff"==ev?"#ddd":"#333"}"`),eb=ef.replace(`stroke="${ev}"`,'stroke="#555"'),e3=ef.replace(`stroke="${ev}"`,'stroke="#fff"').replace('width="16" height="16"','width="8" height="8"').replace('width="16" height="16"','width="8" height="8"'),e2="",eS=[],eT=!1,e4="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",eM=`https://${j.domain?j.domain:`${C}.useatonce.com`}`;function e5(e,t,o){let n=t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1");return e.replace(RegExp(n,"g"),o)}let eP=(e,t)=>{try{for(let o of e)o.text?(t&&-1!==o.text.indexOf("{{return_portal}}")&&(o.text=e5(o.text,"{{return_portal}}",eM)),-1!==o.text.indexOf("{{brand_url}}")&&(o.text=e5(o.text,"{{brand_url}}",q))):o.link&&(t&&-1!==o.link.indexOf("{{return_portal}}")&&(o.link=e5(o.link,"{{return_portal}}",eM)),-1!==o.link.indexOf("{{brand_url}}")&&(o.link=e5(o.link,"{{brand_url}}",q))),o.sub_actions&&eP(o.sub_actions,t)}catch(n){}};for(let[e6,ew]of Object.entries(eh))-1!==ew.indexOf("[[NAME_PLACEHOLDER]]")&&(eh[`${e6}`]=ew.replace("[[NAME_PLACEHOLDER]]","there"));eP(er,!0),eP(ec);try{for(let ek of er)"map"===ek.type||ek.tri_action||ep.push(ek)}catch(eL){}ep=ep.filter((e,t,o)=>o.findIndex(t=>t.heading===e.heading)===t);let eE=document.createElement("style");eE.innerHTML=`
                    
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
                        padding-inline-start: 16px;
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
                        font-family: ${e4};
                        font-weight: 400;
                        line-height: 1.43;
                        letter-spacing: 0.01071em;
                    }

                    strong {
                        font-weight: 600;
                    }

                    button {
                        font-family: ${e4};
                        outline: none;
                        user-select: none;
                    }

                    select {
                        font-family: ${e4};
                        margin-top: 8px;
                    }

                    select:disabled {
                        background: #ddd;
                    }

                    input {
                        font-family: ${e4};
                        display: block;
                        margin-top: 8px;
                        font-size: ${eu?"16px":"15px"};
                        width: 100%;
                        border-radius: 12px;
                        padding: 8px;
                        outline: none;
                        transition: 0.2s;
                    }

                    .atonce_input_red${b} {
                        outline: 1px solid #dd0000 !important;
                        border-color: transparent !important;
                    }

                    input:focus {
                        border-color: ${e$};
                    }

                    textarea {
                        font-family: ${e4};
                        display: block;
                        margin-top: 8px;
                        margin-bottom: 2px;
                        font-size: ${eu?"16px":"15px"};
                        width: 100%;
                        border: none;
                        padding: 8px;
                        resize: none;
                        min-height: ${eu?"85px":"80px"};
                        outline: none;
                    }

                    textarea::-webkit-scrollbar {
                        width: ${eu?'""':"8px"};
                    }
                    
                    .AtOnceBody${b} {
                        background-color: ${el};
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
                        width: ${eu?'""':"12px"};
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

                    .AtOnceBreakAll${b} {
                        word-break: break-all;
                    }

                    .AtOnceDisabledDiv${b} {
                        user-select: none;
                        pointer-events: none;
                        opacity: 0.3;
                    }

                    .AtOnceFlex${b} {
                        display: flex;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceFlexCenter${b} {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceFlexSpaced${b} {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        align-self: center;
                    }

                    .AtOnceMarginBottomSmall${b} {
                        margin-bottom: 6px;
                    }

                    .AtOnceMarginBottomMedium${b} {
                        margin-bottom: 12px;
                    }

                    .AtOnceMarginBottomLarge${b} {
                        margin-bottom: 16px;
                    }

                    .AtOnceNoSelect${b} {
                        user-select: none;
                    }

                    .AtOnceFlexSpacedOrder${b} {
                        width: 100%;
                        padding: 0 0 0 24px;
                    }

                    .AtOnceFlexSpacedNoAlign${b} {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }

                    .AtOnceFlexSpacedProductTitle${b} {
                        width: 100%;
                        margin-left: 24px;
                    }

                    .AtOnceAttachmentsUploading${b} {
                        background: ${ed};
                        color: ${ev};
                        border-radius: 100px;
                        padding: 1px 8px;
                        font-size: 13px;
                        align-items: center;
                        justify-content: center;
                        align-self: center;
                        margin-left: 4px;
                        display: inline-flex;
                    }

                    .AtOnceAttachmentCloseBtn${b} {
                        margin-left: 12px;
                        cursor: pointer;
                        user-select: none;
                    }

                    .AtOnceFlexSpacedProductTitleSmall${b} {
                        width: 100%;
                        margin: 0 12px;
                    }

                    .AtOnceProductQuantityText${b} {
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

                    .AtOnceProductQuantityTextTwo${b} {
                        right: -22% !important;
                    }

                    .AtOncePositionRelative${b} {
                        position: relative;
                    }

                    .AtOnceFlexStart${b} {
                        align-self: flex-start;
                        flex: none;
                    }

                    .AtOnceSubContainer${b} {
                        height: 100%;
                        overflow-y: hidden;
                        animation: AtOnceShowSubContainer${b} 0.25s linear forwards;
                    }

                    .AtOnceSubContainer${b} img {
                        max-width: 100%;
                    }

                    .AtOnceSubContainer${b} iframe {
                        border: none;
                        outline: none;
                        border-radius: 24px;
                        width: 100%;
                        min-height: 225px;
                    }

                    .AtOnceChatPrimaryContainer${b} {
                        border-radius: ${eu?0:"24px"};
                        background: ${el};
                        margin-top: ${eu?0:"10px"};
                        margin-left: auto;
                        margin-right: ${eu?"auto":"20px"};
                        width: 100%;
                        height: ${eu?"100%":"calc(100% - 20px)"};
                        max-width: ${eu?"unset":"400px"};
                        max-height: ${eu?"unset":"700px"};
                        display: flex;
                        flex-direction: column;
                        box-shadow: 0 0 10px #99999955;
                    }

                    .AtOnceChatPrimaryContainer${b}.AtOnceShowPrimaryContainer${b} {
                        animation: AtOnceShowPrimaryContainer${b} 0.2s linear forwards;
                    }

                    .AtOnceChatPrimaryContainer${b}.AtOnceHidePrimaryContainer${b} {
                        animation: AtOnceHidePrimaryContainer${b} 0.2s linear forwards;
                    }

                    .AtOnceLiveChatMessagesContainer${b} {
                        border-radius: 0;
                        background: transparent;
                        margin-top: -${eu?"95":"80"}px;
                        margin-left: auto;
                        margin-right: ${eu?"auto":"20px"};
                        width: 100%;
                        height: ${eu?"100%":"calc(100% - 20px)"};
                        max-width: ${eu?"unset":"400px"};
                        max-height: ${eu?"unset":"700px"};
                        display: flex;
                        flex-direction: column;
                        box-shadow: none;
                        justify-content: flex-end;
                    }

                    .AtOnceLiveChatMessagesContainer${b}.hidden {
                        display: none;
                        user-select: none;
                        pointer-events: none;
                    }

                    .AtOnceLiveChatCloseButton${b} {
                        display: flex;
                        justify-content: end;
                        align-items: center;
                        text-align: right;
                        margin-right: ${eu?"16px":"4px"};
                        margin-bottom: 12px;
                        background: #555;
                        border-radius: 50%;
                        padding: 6px;
                        width: fit-content;
                        margin-left: auto;
                        cursor: pointer;
                        user-select: none;
                    }

                    .AtOnceChatButton${b} {
                        bottom: ${eu?"15px":"20px"};
                        right: ${eu?"15px":"20px"};
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
                        z-index: ${y};
                        box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px, rgb(0 0 0 / 20%) 0px 2px 12px;
                        transform-origin: center bottom;
                        user-select: none;
                        background: ${ed};
                        cursor: pointer;
                        animation: AtOnceShowChatButton${b} 0.2s linear forwards;
                    }

                    .AtOnceChatNotification${b} {
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

                    .AtOnceChatNotification${b}.hidden {
                        display: none;
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceHideChatButton${b} {
                        animation: AtOnceHidePrimaryContainer${b} 0.2s linear forwards;
                    }

                    .AtOnceCloseButtonMobile${b} {
                        position: fixed;
                        top: ${eu?"16px":"24px"};
                        right: ${eu?"16px":"24px"};
                        cursor: pointer;
                    }

                    .AtOnceManageOrdersLabel${b} {
                        margin:7px 0;
                        position:relative;
                        display:inline-block;
                        outline: none;
                        border: none;
                        width: 100%;
                    }

                    .AtOnceManageOrdersSpan${b} {
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
                        background: ${el}00;
                    }

                    .AtOnceEnterEmailInputLabel${b} {
                        font-size: 13px;
                        margin-left: 8px;
                        margin-bottom: -7px;
                        color: #555;
                        margin-top: 6px;
                    }

                    .AtOnceSearchInput${b} {
                        padding: 8px 16px;
                        margin-bottom: 12px;
                        outline: none;
                        border-radius: 100px;
                        margin-left: 24px;
                        margin-top: 0;
                        border: 1px solid #ddd;
                        width: calc(100% - 48px);
                    }

                    .AtOnceSearchInputIconed${b} {
                        padding: 8px 16px 8px 38px;
                    }

                    .AtOnceSearchInput${b}.full {
                        margin-left: 0;
                        width: 100%;
                        margin-bottom: 0;
                        margin-top: 36px;
                    }

                    .AtOnceSearchInput${b}.full.bottomed {
                        margin-top: 8px;
                        margin-bottom: 12px;
                        border-radius: 12px;
                        padding: 8px 10px;
                    }

                    .AtOnceSearchInputIcon${b} {
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        top: 12px;
                        left: 36px;
                    }

                    .AtOnceManageOrdersInput${b} {
                        padding: 12px;
                        outline: none;
                        margin-top: 0;
                        border: 1px solid #ddd;
                        width: 100%;
                    }

                    .AtOnceManageOrdersInput${b}:focus + .AtOnceManageOrdersSpan${b}, .AtOnceManageOrdersInput${b}:not(:placeholder-shown) + .AtOnceManageOrdersSpan${b} {
                        color: #222;
                        font-size: 14px;
                        transform: translateY(-22px) translateX(2px);
                        background: ${el}ff;
                    }
                      
                    .AtOnceManageOrdersInput${b}:focus + .AtOnceManageOrdersSpan${b}, .AtOnceManageOrdersInput${b}:not(:-ms-input-placeholder) + .AtOnceManageOrdersSpan${b} {
                        color: #222;
                        font-size: 13px;
                        padding: 2px;
                        transform: translateY(-22px) translateX(2px);
                        background: ${el}ff;
                    }

                    .AtOnceLoadingSpinner${b}::after {
                        content: "";
                        z-index: 1;
                        box-sizing: border-box;
                        width: 26px;
                        margin-top: 15px;
                        height: 26px;
                        left: calc(50% - 12px);
                        position: absolute;
                        border-radius: 50%;
                        border-top: 2.5px solid ${ev};
                        border-left: 2.5px solid ${ev};
                        border-bottom: 2.5px solid ${ev};
                        border-right: 2.5px solid transparent;
                        animation: AtOnceSpinner${b} .6s linear infinite;
                    }

                    .AtOnceLoadingSpinner${b}.bottomed::after {
                        margin-top: -12.5px;
                    }

                    .AtOnceLoadingSpinner${b}.bottomed.bigger::after {
                        margin-top: -33px;
                    }

                    .AtOncePrimaryMessageContainer${b} {
                        font-size: 16px;
                    }

                    .AtOncePrimaryMessageContainer${b}.self {
                        display: table;
                        margin-left: auto;
                    }

                    .AtOnceSeenContainer${b} {
                        margin-left: auto;
                        display: table;
                        margin-right: 0;
                        font-size: 13px;
                        color: #999;
                        margin-top: 2px;
                        user-select: none;
                    }

                    .AtOnceMessageContainer${b} {
                        border-radius: 16px;
                        padding: 5px 15px 5px 15px;
                        display: table;
                        margin-top: 2px;
                        max-width: 300px;
                        word-break: break-word;
                    }

                    .AtOnceMessageContainerLink${b} {
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

                    .AtOnceMessageContainerLink${b}:hover {
                        text-decoration: underline !important;
                    }

                    .AtOnceMessageContainerLink${b}.self {
                        background: ${ev};
                        color: ${"#fff"==ev?"#222":"#fff"} !important;
                    }

                    .AtOnceMessageContainerLink${b}.sender {
                        background: #222;
                        color: #fff;
                    }

                    .AtOnceMessageContainerPreview${b} {
                        border-radius: 24px;
                        padding: 10px 15px;
                        width: fit-content;
                        background: #fff;
                        text-align: right;
                        margin-top: 4px;
                        margin-left: auto;
                        margin-right: ${eu?"16px":"0"};
                        max-width: calc(100% - 32px);
                        box-shadow: 0 0 5px #ccc;
                    }

                    .AtOnceMessageContainerPreview${b}.one {
                        opacity: 0.8;
                    }

                    .AtOnceMessageContainerPreview${b}.two {
                        opacity: 0.9;
                    }

                    .AtOnceMessageContainerPreview${b}.three {
                        opacity: 1;
                    }

                    .AtOnceMessageContainer${b}.self a {
                        color: #fff;
                    }

                    .AtOnceMessageContainer${b}.self.start {
                        border-bottom-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${b}.self.middle {
                        border-top-right-radius: 6px;
                        border-bottom-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${b}.self.end {
                        border-top-right-radius: 6px;
                    }

                    .AtOnceMessageContainer${b}.sender.start {
                        border-bottom-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${b}.sender.middle {
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${b}.sender.end {
                        border-top-left-radius: 6px;
                    }

                    .AtOnceMessageContainer${b} > a {
                        color: ${ev};
                    }

                    .AtOnceMessageContainer${b}.sender {
                        margin-right: auto;
                    }

                    .AtOnceMessageContainer${b}.self {
                        background: ${ed};
                        color: ${ev};
                        margin-left: auto;
                        ${"#111"==ev?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOncePseudoAttachmentLink${b} {
                        font-weight: 600;
                        color: ${em};
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

                    .AtOncePseudoAttachmentLink${b}.image {
                        border: none;
                        padding: 0px;
                    }

                    .AtOncePseudoAttachmentLink${b}.video {
                        border: none;
                        padding: 0px;
                    }
                    
                    .AtOncePseudoAttachmentLink${b}.video>video {
                        border-radius: 16px;
                    }

                    .AtOncePseudoAttachmentLink${b}.audio {
                        border: none;
                        padding: 0px;
                        width: 100%;
                        max-height: 48px;
                    }
                    
                    .AtOncePseudoAttachmentLink${b}.audio>audio {
                        height: 48px;
                        border-radius: 30px;
                    }

                    .AtOncePseudoAttachmentLink${b}.self {
                        margin-left: auto;
                        margin-right: 0;
                        display: block;
                    }

                    .AtOnceMainAttachmentsUnavailable${b} {
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

                    .AtOnceMainAttachmentsUnavailable${b}.self {
                        margin-left: auto;
                        background: ${ed};
                        color: ${ev};
                        ${"#111"==ev?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOnceMainAttachmentsPreview${b} {
                        border-radius: 16px;
                        width: 100%;
                    }

                    .AtOncePrimarySubjectHeader${b} {
                        margin-top: 16px;
                    }

                    .AtOnceTimestampContainer${b} {
                        font-size: 12px;
                        margin-bottom: -16px;
                        margin-top: 12px;
                        user-select: none;
                    }

                    .AtOnceMessageContainer${b}.sender {
                        background: #eee;
                    }

                    .AtOnceProductImage${b} {
                        width: 64px;
                        height: 64px;
                        background-position: center;
                        background-size: cover;
                        border-radius: 16px;
                    }

                    .AtOnceContainerPadded${b} {
                        padding: 24px;
                    }

                    .AtOnceContainerPaddedBottomSmall${b} {
                        padding-bottom: 4px;
                    }

                    .AtOnceContainerPaddedBottom${b} {
                        padding-bottom: 16px;
                    }

                    .AtOnceContainerPaddedBottomLarge${b} {
                        padding-bottom: 54px;
                    }

                    .AtOnceContainerNoBottomPadding${b} {
                        padding-bottom: 0;
                    }

                    .AtOnceContainerSmallTopPadding${b} {
                        padding-top: 12px !important;
                    }

                    .AtOnceContainerPaddedLess${b} {
                        padding: 0 24px;
                    }

                    .AtOnceContainerPaddedTopTiny${b} {
                        padding-top: 4px;
                    }

                    .AtOnceContainerPaddedTopSmall${b} {
                        padding-top: 12px;
                    }

                    .AtOnceContainerPaddedTopMedium${b} {
                        padding-top: 16px;
                    }

                    .AtOnceContainerPaddedTopLarge${b} {
                        padding-top: 24px;
                    }

                    .AtOnceContainerFlexProducts${b} {
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

                    .AtOnceContainerFlexProducts${b}.visible {
                        opacity: 1;
                    }

                    .AtOnceContainerPaddedTop${b} {
                        padding-top: 36px;
                    }

                    .AtOnceChatFirstContainer${b} {
                        height: 100%;
                    }

                    .AtOnceContainerScrollMiddle${b} {
                        width: 100%;
                        max-height: calc(100% - ${eu?"175px":"160px"});
                        height: 100%;
                        overflow-y: auto;
                        transition: 0.2s;
                        position: relative;
                    }

                    .AtOnceContainerScrollMiddleHelpCenter${b} {
                        max-height: calc(100% - 120px);
                    }

                    .AtOnceQuantityContainer${b} {
                        margin-top: 14px;
                    }

                    .AtOnceQuantitySubContainer${b} {
                        border: 1px solid #ddd;
                        border-radius: 12px;
                        width: fit-content;
                    }

                    .AtOnceQuantityButtons${b} {
                        height: 32px;
                        user-select: none;
                        width: 32px;
                        line-height: 32px;
                        text-align: center;
                        vertical-align: middle;
                        cursor: pointer;
                    }

                    .AtOnceQuantityLabel${b} {
                        color: #555;
                        font-size: 14px;
                        margin-bottom: 4px;
                        user-select: none;
                    }

                    .AtOnceQuantityLabelSmall${b} {
                        color: #555;
                        font-size: 13px;
                        margin-bottom: 2px;
                        user-select: none;
                    }

                    .AtOnceQuantityInput${b} {
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

                    .AtOnceQuantityInput${b}.smaller {
                        width: 36px;
                    }

                    .AtOnceQuantityInput${b}::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    .AtOnceQuantityInput${b}::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    .AtOnceContainerLiveChatMain${b} {
                        display: flex;
                        padding: 12px;
                        position: fixed;
                        bottom: 35px;
                        width: 100%;
                    }

                    .AtOnceContainerLiveChatAttachmentsError${b} {
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

                    .AtOnceContainerLiveChatAttachmentsError${b}.shown {
                        animation: AtOnceErrorMessage${b} 4s linear forwards;
                    }

                    .AtOnceContainerLiveChatAttachments${b} {
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

                    .AtOnceContainerLiveChatAttachments${b}.shown {
                        display: block;
                    }

                    .AtOnceContainerLiveChatAttachments${b}::-webkit-scrollbar-track {
                        margin-top: 12px;
                        margin-bottom: 12px;
                    }

                    .AtOnceContainerLiveChatAttachments${b}::-webkit-scrollbar {
                        width: ${eu?'""':"8px"};
                    }

                    .AtOnceContainerLiveChatInput${b} {
                        width: calc(100% - ${eu?"44px":"40px"});
                        margin-right: 4px;
                        max-height: 100px;
                        outline: none;
                        overflow-y: auto;
                        background: #f5f5f5;
                        border-radius: 16px;
                        padding: 6px 31px 6px 12px;
                    }

                    .AtOnceContainerLiveChatInput${b} span {
                        background-color: #f5f5f5 !important;
                        background: #f5f5f5 !important;
                        font-family: ${e4} !important;
                        color: #222 !important;
                        font-size: ${eu?"16px !important":"15px !important"};
                    }

                    .AtOnceContainerLiveChatInputDisabled${b} {
                        max-height: 28px;
                        overflow-y: hidden;
                    }

                    .AtOnceContainerLiveChatInputDisabled${b}:empty:before{
                        color: #f5f5f5;
                    }

                    .AtOnceContainerLiveChatInput${b}::-webkit-scrollbar-track {
                        margin-top: 12px;
                        margin-bottom: 12px;
                    }

                    .AtOnceContainerLiveChatInput${b}::-webkit-scrollbar {
                        width: ${eu?'""':"8px"};
                    }

                    .AtOnceContainerLiveChatInput${b}::-webkit-scrollbar-thumb {
                        background-color: transparent;
                    }

                    .AtOnceContainerLiveChatButton${b} {
                        cursor: pointer;
                        user-select: none;
                        margin-left: 8px;
                        width: fit-content;
                        height: fit-content;
                        bottom: 47px;
                        right: 16px;
                        position: fixed;
                        background: ${el};
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

                    .AtOnceContainerLiveChatButton${b}:disabled {
                        filter: grayscale(1) opacity(0.5);
                        pointer-events: none;
                    }

                    .AtOnceContainerLiveChatButton${b}:hover {
                        background: #f5f5f5;
                    }

                    .AtOnceContainerLiveChatButton${b}:active {
                        filter: brightness(0.9);
                    }

                    .AtOnceContainerLiveChatButton${b}.attachment {
                        filter: grayscale(1);
                        right: 60.5px;
                        background: transparent;
                        bottom: 52.5px;
                        padding: 2px;
                    }

                    .AtOnceContainerLiveChatButton${b}.attachment:hover {
                        filter: none;
                    }

                    .AtOnceGradientBackground${b} {
                        background: ${ed};
                        color: ${ev};
                        background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,${"#111"==ev?".12":".32"}));
                    }

                    .AtOnceTopContainer${b} {
                        ${eu?"":"border-top-right-radius: 24px;"}
                        ${eu?"":"border-top-left-radius: 24px;"}
                    }

                    .AtOnceBottomContainer${b} {
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        text-align: center;
                    }

                    .AtOnceTopHeadingContainer${b} {
                        display: flex;
                        align-items: center;
                    }

                    .AtOnceChatTopBackButton${b} {
                        margin-right: 8px;
                        margin-left: -8px;
                    }

                    .AtOnceChatRoundedCircleIcon${b} {
                        border-radius: 50%;
                        transition: 0.2s linear;
                        text-decoration: none;
                        outline: none;
                        border: none;
                        user-select: none;
                        cursor: pointer;
                        padding: 4px;
                        background: ${el}00;
                    }

                    .AtOnceChatRoundedCircleIcon${b}:hover {
                        background: ${el}55;
                    }

                    .AtOnceMarginLeft${b} {
                        margin-left: auto;
                    }

                    .AtOnceMainHeading${b} {
                        font-size: 32px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceSubHeading${b} {
                        font-size: 18px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceSubHeadingSmall${b} {
                        font-size: 14px;
                        font-weight: 600;
                        user-select: none;
                    }

                    .AtOnceTextContainer${b} {
                        padding: 0 24px;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    .AtOnceButtonContainer${b} {
                        display: ${eu?"block":"flex"};
                        justify-content: ${eu?"center":"space-between"};
                        padding-bottom: 12px;
                    }

                    .AtOnceMainButton${b} {
                        cursor: pointer;
                        font-size: 16px;
                        border-radius: 100px;
                        font-weight: 600;
                        outline: none;
                        width: 100%;
                        padding: ${eu?"11px":"8px"} 4px;
                        color: #333;
                        transition: 0.2s;
                        ${eu?"margin-top: 12px;":""}
                    }

                    .AtOnceMainButtonSmall${b} {
                        font-size: 14px;
                        font-weight: 400 !important;
                        width: unset;
                        padding: ${eu?"14px 26px":"12px 20px"};
                        border-width: 1px !important;
                        line-height: 0;
                        margin-right: 8px;
                        margin-top: -4px;
                    }

                    .AtOnceMainButtonSmall${b}.smaller {
                        margin-top: 2px;
                        margin-right: 0;
                        padding: 12px 14px;
                    }

                    .AtOnceMainButtonSmall${b}:hover {
                        box-shadow: 0 3px 6px rgb(0 0 0 / 0.15) !important;
                        filter: brightness(0.975) !important;
                    }

                    .AtOnceMainButton${b}:disabled {
                        color: #fff;
                        background: #ccc;
                        border-color: #ccc;
                        pointer-events: none;
                    }

                    .AtOnceMainButton${b}:hover {
                        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                        filter: brightness(0.95);
                    }

                    .AtOncePrimaryButton${b} {
                        color: ${ev};
                        padding: ${eu?"12.5px":"9.5px"} 5.5px;
                        border: none;
                        background: ${ed};
                        ${"#111"==ev?"background-image: linear-gradient(135deg,hsla(0,0%,100%,0),rgba(0,0,0,.07));":""}
                    }

                    .AtOncePrimaryButton${b}.green {
                        background: #16AA9E !important;
                        color: white !important;
                    }

                    .AtOncePrimaryButton${b}.red {
                        background: #dd0000 !important;
                        color: white !important;
                    }

                    .AtOnceSecondaryButton${b} {
                        border: 1.5px solid ${e$};
                        background: transparent;
                    }

                    .AtOnceTertiaryButton${b} {
                        width: fit-content;
                        padding: 4px 12px;
                        border-width: 1px;
                        color: ${e$};
                        border-color: transparent;
                        font-weight: 600;
                        ${eu?"margin-top: -2px;":""}
                    }

                    .AtOnceQuaternaryButton${b}:hover {
                        box-shadow: none !important;
                    }

                    .AtOnceMainButtonLeft${b} {
                        margin-right: ${eu?"0":"4px"};
                    }

                    .AtOnceMainButtonRight${b} {
                        margin-left: ${eu?"0":"4px"};
                    }

                    .AtOnceMainButtonRightMargin${b} {
                        margin-left: 0 !important;
                    }

                    .AtOnceTriHeading${b} {
                        font-size: 16px;
                        font-weight: 600;
                    }

                    .AtOnceBold${b} {
                        font-weight: 600;
                    }

                    .AtOnceSubTextBold${b} {
                        font-size: 14px;
                        font-weight: 600;
                    }

                    .AtOnceSubText${b} {
                        font-size: 14px;
                        font-weight: 400;
                        user-select: none;
                    }

                    .AtOnceSubTextSpacingLeft${b} {
                        margin-left: 3px;
                    }

                    .AtOnceSubTextSpacingRight${b} {
                        margin-right: 3px;
                    }

                    .AtOnceUserSelect${b} {
                        user-select: auto !important;
                    }

                    .AtOnceSubTag${b} {
                        text-align: right;
                    }
                    
                    .AtOnceSubTag${b}.gray {
                        color: #333;
                    }

                    .AtOnceSubTag${b}.blue {
                        color: #16AA9E;
                    }
                    
                    .AtOnceSubTextAntiMarginTop${b} {
                        margin-top: -8px;
                    }

                    .AtOnceSubTextMarginBottom${b} {
                        margin-bottom: 8px;
                    }

                    .AtOnceSubTextSmall${b} {
                        font-size: 13px;
                    }

                    .AtOnceSubTextLarge${b} {
                        font-size: 16px;
                    }

                    .AtOnceSubTextMediumMargin${b} {
                        margin-top: 8px;
                    }

                    .AtOnceTextLargeMargin${b} {
                        margin-top: 12px;
                    }

                    .AtOnceContainerLargeMargin${b} {
                        margin-top: ${eu?"24px":"16px"};
                    }

                    .AtOnceSubTextLargeMargin${b} {
                        margin-top: 24px;
                        margin-bottom: 12px;
                        font-weight: 600;
                    }

                    .AtOnceTextCenter${b} {
                        text-align: center;
                    }

                    .AtOnceSubTextMargin${b} {
                        margin-top: 2px;
                    }

                    .AtOnceSubHeadingMargin${b} {
                        margin: 24px 0 10px 24px;
                    }

                    .AtOnceSubHeadingMarginSmall${b} {
                        margin: 16px 0 10px 24px;
                    }

                    .AtOnceContactFormInput${b} {
                        border: none;
                        border-bottom: 1px solid #eee;
                        border-radius: 0;
                    }

                    .AtOnceTextColorError${b} {
                        color: #d40000;
                    }

                    .AtOnceTextColorTwo${b} {
                        color: #222;
                    }

                    .AtOnceTextColorThree${b} {
                        color: #333;
                    }

                    .AtOnceTextColorFive${b} {
                        color: #555;
                    }

                    .AtOnceTextColorSeven${b} {
                        color: #777;
                    }

                    .AtOnceTextColorNine${b} {
                        color: #999;
                    }

                    .AtOnceQuickIcon${b} {
                        width: fit-content;
                        height: fit-content;
                        margin-right: 6px;
                        background: transparent;
                        border-radius: 50%;
                        padding: 2px;
                        transition: 0.2s linear;
                    }

                    .AtOnceQuickButton${b} {
                        display: flex;
                        align-items: center;
                        padding: 10px 20px;
                        margin: 0;
                        width: 100%;
                        cursor: pointer;
                        transition: 0.2s linear;
                        background: ${el}00;
                        text-decoration: none;
                        outline: none;
                        border: none;
                        user-select: none;
                    }

                    .AtOnceQuickButtonPaddedMore${b} {
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

                    .AtOnceQuickButtonPaddedLess${b} {
                        padding: 10px 24px;
                    }

                    .AtOnceQuickButtonLink${b}:hover {
                        text-decoration: none;
                    }

                    .AtOnceQuickButtonPadded${b} {
                        padding: 17px 20px;
                    }

                    .AtOnceQuickButton${b}:hover {
                        background: ${ed}22;
                    }

                    .AtOnceQuickLinkButtonHeaders${b} {
                        margin-left: 4px;
                    }

                    .AtOnceReturnIconAdjustment${b} {
                        margin-right: -2px;
                        margin-left: 2px;
                    }

                    .AtOnceFAQIconAdjustment${b} {
                        margin-right: 1px;
                        margin-left: 1px;
                    }

                    .AtOnceFAQIconAdjustment${b}.faq {
                        margin-bottom: -1px;
                        margin-top: 1px;
                    }

                    .AtOnceDestinationLabel${b} {
                        font-size: 13px;
                        font-weight: 400;
                        color: #555;
                        margin-bottom: -7px;
                        margin-left: 2px;
                    }

                    .AtOnceDestinationInput${b} {
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

                    .AtOnceDestinationInput${b}:focus-visible {
                        outline: 1px solid ${e$};
                        border-color: transparent;
                    }

                    .AtOnceInputSubContainer_left${b} {
                        display: grid;
                        width: calc(50% - 8px);
                        float: left;
                    }

                    .AtOnceInputSubContainer_right${b} {
                        display: grid;
                        width: calc(50% - 8px);
                        margin-left: 16px;
                        float: right;
                    }

                    .AtOnceInputSubContainer_clear${b} {
                        clear: both;
                        padding-top: 16px;
                    }

                    .AtOnceMainShopProductSubContainer${b} {
                        flex: 50%;
                        padding: 8px;
                        cursor: default;
                        user-select: none;
                        opacity: 1;
                        color: #222;
                        min-width: 100%;
                    }

                    .AtOnceModalProductImageSlideshowContainer${b} {
                        position: relative;
                        width: 90%;
                        margin-left: 5%;
                        min-height: 100px;
                        display: block
                        overflow: hidden;
                    }

                    .AtOnceModalProductImageSlideshowChevron${b} {
                        cursor: pointer;
                        position: absolute;
                        top: calc(50% - 12px);
                        user-select: none;
                        border-radius: 100%;
                        background: ${el}77;
                        line-height: 16px;
                        transition: linear 0.2s;
                    }

                    .AtOnceModalProductImageSlideshowChevron${b}:hover {
                        background: ${el};
                    }

                    .AtOnceModalProductImageSlideshowChevron${b}:active {
                        filter: brightness(0.75);
                    }

                    .AtOnceModalProductImageSlideshowChevron_left${b} {
                        left: 0;
                        padding: 5px 5px 2px 4px;
                    }

                    .AtOnceModalProductImageSlideshowChevron_right${b} {
                        right: 0;
                        padding: 5px 4px 2px 5px;
                    }

                    .AtOnceMainShopStickyChangesContainer${b} {
                        background: ${el};
                        width: 100%;
                        height: 64px;
                        position: fixed;
                        bottom: 0;
                        z-index: 1;
                        margin-left: -24px;
                        padding: 0 24px;
                        ${eu?"":"border-bottom-left-radius: 24px; border-bottom-right-radius: 24px;"}
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.2s linear;
                    }

                    .AtOnceMainShopStickyChangesContainer${b}.bigger {
                        height: 124px;
                        display: block !important;
                    }

                    .AtOnceMainShopStickyChangesContainer${b}.visible {
                        opacity: 1;
                        pointer-events: auto;
                    }

                    .AtOnceMainShopProductImageContainer${b} {
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

                    .AtOnceMainShopProductImageContainer${b}:hover {
                        color: ${e$};
                    }

                    .AtOnceMainShopProductImageContainer${b}:hover + .AtOnceMainShopProductTitleContainer${b} {
                        color: ${e$};
                    }

                    .AtOnceMainShopProductImageDiv${b} {
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

                    .AtOnceMainShopProductImageDivText${b} {
                        margin-top: calc(-50% - 14px);
                        font-size: 16px;
                        padding: 0 8px;
                    }

                    .AtOnceMainShopProductImage${b} {
                        width: 100%;
                        user-select: none;
                        border-radius: 24px;
                        pointer-events: none;
                    }

                    .AtOnceMainShopProductPriceContainer${b} {
                        pointer-events: none;
                        user-select: none;
                        line-height: 24px;
                    }

                    .AtOnceMainShopProductTitleContainer${b} {
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceMainShopProductTitleText${b} {
                        font-size: 16px;
                        font-weight: 600;
                        user-select: none;
                        pointer-events: none;
                    }

                    .AtOnceMainShopProductPriceText${b} {
                        color: #555;
                        font-weight: 400;
                        pointer-events: none;
                        user-select: none;
                    }

                    .AtOnceMainShopProductPriceText_compare${b} {
                        color: #777 !important;
                        text-decoration: line-through;
                        text-decoration-color: #777777aa;
                        margin-right: 12px;
                    }

                    .AtOnceModalBackground${b} {
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

                    .AtOnceModalBackground${b}.active {
                        opacity: 1;
                        pointer-events: auto;
                    }

                    .AtOnceModalContainer${b} {
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
                        scrollbar-color: #ccc ${el};
                        background-color: ${el};
                    }

                    .AtOnceModalContainer${b}::-webkit-scrollbar-track {
                        ${eu?"":"margin-top: 16px; margin-bottom: 16px;"}
                    }

                    .AtOnceModalContainer${b}.active {
                        opacity: 1;
                        pointer-events: auto;
                        ${eu?"":"border-radius: 22px; box-shadow: none;"}
                    }

                    .AtOnceModalCloseBtn${b} {
                        height: 24px;
                        width: 24px;
                        text-align: center;
                        float: right;
                        cursor: pointer;
                        user-select: none;
                        position: fixed;
                        right: ${eu?"12px":"20px"};
                        top: ${eu?"16px":"24px"};
                        z-index: 2;
                    }

                    .AtOnceModalCloseBtn${b}:hover {
                        filter: brightness(0.6);
                    }

                    .AtOnceModalCloseBtn${b}:active {
                        filter: brightness(0.5);
                    }

                    .AtOnceModalStickyBottomContainer${b} {
                        padding-top: 4px;
                        background: ${el};
                        bottom: 0;
                        position: sticky;
                    }

                    .AtOnceModalProductImageContainer${b} {
                        width: 100%;
                        cursor: default;
                        display: block;
                        min-height: 100px;
                        padding-top: 8px;
                        user-select: none;
                        pointer-events: none;
                        margin-top: 24px;
                    }

                    .AtOnceModalProductImageContainer${b}.maxwidth {
                        width: 100% !important;
                    }

                    .AtOnceModalProductImageContainer${b}.slideshow {
                        margin: 0 20px;
                        overflow: hidden;
                        max-width: 400px;
                        transition: linear .4s;
                        flex-shrink: 0;
                        border-radius: 4px;
                    }

                    .AtOnceModalProductImage${b} {
                        width: 75%;
                        margin-left: 12.5%;
                        cursor: default;
                        max-width: 400px;
                        user-select: none;
                        border-radius: 24px;
                        pointer-events: none;
                    }

                    .AtOnceModalProductImageUL${b} {
                        padding: 0;
                        margin: 0;
                        list-style: none;
                        display: flex;
                    }

                    .AtOnceModalProductImageUL${b}:hover {
                        will-change: transform;
                    }

                    .AtOnceModalProductImage${b}.border {
                        border-radius: 36px;
                    }

                    .AtOnceModalProductRightContainer${b} {
                        width: 100%;
                        margin-top: 16px;
                        margin-left: 0;
                        overflow-x: hidden;
                        overflow-y: hidden;
                        float: none;
                        opacity: 1;
                        transition: linear 0.15s;
                    }
                        
                    .AtOnceModalProductRightContainer${b}::-webkit-scrollbar-track {
                        background: ${el};
                        border-radius: 20px;
                        margin-top: 6px;
                        margin-bottom: 6px;
                    }

                    .AtOnceModalProductRightContainer${b}::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 20px;
                        border: 2.5px solid ${el};
                    }

                    .AtOnceModalProductTitle${b} {
                        user-select: none;
                        font-weight: 600;
                        font-size: 24px;
                        color: #222;
                    }

                    .AtOnceModalProductVariantInfo${b} {
                        user-select: none;
                        margin-top: 4px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #999;
                    }

                    .AtOnceModalProductVariantInfo${b}.price {
                        margin-left: 24px;
                    }

                    .AtOnceVariantsLabel${b} {
                        color: #333;
                        font-size: 14px;
                        margin-top: 8px;
                        margin-bottom: 3px;
                        user-select: none;
                    }

                    .AtOnceModalProductVariantSelectionContainer_images${b} {
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        grid-template-rows: unset;
                        grid-template-columns: unset;
                        margin-bottom: -8px;
                    }

                    .AtOnceFlexTitle${b} {
                        display: flex;
                        align-items: center;
                    }

                    .AtOnceGreenCircle${b} {
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

                    .AtOnceMainShopVariantsButton${b} {
                        color: #222;
                        border: 1px solid;
                        cursor: pointer;
                        outline: none;
                        padding: 6px 16px;
                        font-size: 14px;
                        background: ${el};
                        transition: linear 0.1s;
                        font-weight: 400;
                        user-select: none;
                        border-color: #777;
                        margin-right: 8px;
                        border-radius: 500px;
                        margin-bottom: 8px;
                    }

                    .AtOnceMainShopVariantsButton${b}:hover {
                        border-color: #222;
                    }

                    .AtOnceMainShopVariantsButton${b}:disabled {
                        opacity: 0.2;
                        pointer-events: none;
                    }

                    .AtOnceMainShopVariantsButton_image${b} {
                        background-size: cover;
                        border-radius: 50%;
                        background-position: center;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        margin-left: 1.5px;
                    }

                    .AtOnceMainShopVariantsButton_one${b}:hover {
                        border-color: ${e$};
                    }

                    .AtOnceMainShopVariantsButton_image_active${b} {
                        border-color: #222;
                        outline: 1.5px solid #222;
                    }

                    .AtOnceMainShopVariantsButton_image_active_one${b} {
                        border-color: ${e$};
                        outline: 1.5px solid ${e$};
                    }

                    .AtOnceMainShopVariantsButton_active${b} {
                        color: ${el};
                        background: #222;
                        border-color: #222;
                    }

                    .AtOnceMainShopProductDescription${b} {
                        margin: 32px 0;
                    }

                    .AtOnceMainShopProductDescription${b} img {
                        border-radius: 16px;
                        max-width: 100%;
                    }

                    .AtOnceMainShopProductDescription${b}:after {
                        clear: both;
                        content: "";
                        display: block;
                    }


                    .AtOncePoweredByContainer${b} {
                        padding: 12px 0;
                    }

                    .AtOncePoweredByLink${b} {
                        user-select: none;
                        text-decoration: none !important;
                        color: #aaa;
                        transition: 0.2s linear;
                    }

                    .AtOncePoweredByText${b} {
                        font-weight: 600;
                        color: #1a73e8;
                    }

                    .AtOncePoweredByLink${b}:hover {
                        color: #1a73e8;
                    }


                    .AtOnceTiBlock${b} {
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
                    
                    .AtOnceTiContainer${b} .AtOnceTidot${b} {
                        background-color: #777;
                    }
                    
                    .AtOnceTidot${b} {
                        -webkit-animation: AtOnceMercuryTypingAnimation${b} 1.5s infinite ease-in-out;
                                animation: AtOnceMercuryTypingAnimation${b} 1.5s infinite ease-in-out;
                        border-radius: 50%;
                        display: inline-block;
                        height: 8px;
                        margin-right: 4px;
                        width: 8px;
                    }
                    
                    .AtOnceTidot${b}:nth-child(1) {
                        -webkit-animation-delay: 200ms;
                                animation-delay: 200ms;
                    }
                    
                    .AtOnceTidot${b}:nth-child(2) {
                        -webkit-animation-delay: 300ms;
                                animation-delay: 300ms;
                    }
                    
                    .AtOnceTidot${b}:nth-child(3) {
                        -webkit-animation-delay: 400ms;
                                animation-delay: 400ms;
                    }

                    @-webkit-keyframes AtOnceMercuryTypingAnimation${b} {
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
                    
                    @keyframes AtOnceMercuryTypingAnimation${b} {
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

                    @keyframes AtOnceSpinner${b} {
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes AtOnceShowSubContainer${b} {
                        0% {opacity: 0;}
                        100% {opacity: 1;}
                    }

                    @keyframes AtOnceHideSubContainer${b} {
                        0% {opacity: 1;}
                        100% {opacity: 0;}
                    }

                    @keyframes AtOnceShowChatButton${b} {
                        0% {transform:translate(0px, 10px);}
                        100% {transform:translate(0px, 0px);}
                    }

                    @keyframes AtOnceHidePrimaryContainer${b} {
                        0% {opacity: 1;${eu?"":"transform:translate(0px, 0px);"}}
                        100% {opacity: 0;user-select:none;${eu?"":"transform:translate(0px, 10px);"}}
                    }

                    @keyframes AtOnceShowPrimaryContainer${b} {
                        0% {opacity: 0;${eu?"":"transform:translate(0px, 10px);"}}
                        100% {opacity: 1;user-select:unset;${eu?"":"transform:translate(0px, 0px);"}}
                    }

                    @keyframes AtOnceErrorMessage${b} {
                        0% {opacity: 0;z-index:1;pointer-events: auto;}
                        5% {opacity: 1;z-index:1;pointer-events: auto;}
                        95% {opacity: 1;z-index:1;pointer-events: auto;}
                        100% {opacity: 0;z-index:-1;pointer-events: none;}
                    }
                    `;let eN=[],e7=[],eB="";function eH(e,t,o,n,i){return{attachments_fetched:"true",from:e,id:t,message:o,messageId:t,name:e,sender:D.currentUser.uid,snippet:"",subject:o.substring(0,30),threadId:n,timestamp:Date.now(),to:Q,type:"live",other_attachments:i}}function e8(e,t){let o=Math.floor(Date.now());(e=Number(e)).toString().length>15&&(e/=1e3);let n=o-e;if(t&&(n=e-o),n<12e4)return"Now";if(n<36e5)return`${Math.round(Number(n)/6e4)}m ago`;if(n<864e5)return`${Math.round(Number(n)/36e5)}h ago`;if(n<6048e5)return function e(t){let o=new Intl.DateTimeFormat("en-US",{dateStyle:"full",timeZone:`${Intl.DateTimeFormat().resolvedOptions().timeZone}`}),n=o.format(new Date(1e3*t));return n.substring(0,n.indexOf(","))}(e/1e3);if(n>6048e5)return function e(t){let o=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeZone:`${Intl.DateTimeFormat().resolvedOptions().timeZone}`});return o.format(new Date(1e3*t)).split(",")[0]}(e/1e3);else return""}async function eI(){let e=p(V,"messages",`${Q}`,"user_threads",`${D.currentUser.uid}`,"threads");return new Promise(async function(t,o){try{v(e).then(e=>{e.empty||e.forEach(e=>{let t=e.data().list;t&&Array.prototype.push.apply(eN,t)}),t(!0)}).catch(e=>{t(!0)})}catch(n){t(!0)}})}async function eR(){try{if(eo){let e=es.getElementById("AtOnceLiveChatMainContainer");if(e){let t=Date.now()-eo,o=es.getElementById("atOnceAgentTypingIndicatorContainer");if(o){if(t>4e3){Y=!1;try{clearInterval(X)}catch(n){}o.remove()}else!1==Y&&(Y=!0,X=setInterval(function(){eR()},2e3))}else{if(t<4e3){let i=document.createElement("div");i.className=`AtOnceTiContainer${b}`,i.id="atOnceAgentTypingIndicatorContainer";let a=document.createElement("div");a.className=`AtOnceTiBlock${b}`;for(let l=0;l<3;l++){let p=document.createElement("div");p.className=`AtOnceTidot${b}`,a.appendChild(p)}i.appendChild(a),e.appendChild(i)}!1==Y&&(Y=!0,X=setInterval(function(){eR()},2e3))}}}}catch(r){}}async function eK(e){let o=r(p(V,"messages",`${Q}`,"all_msgs",`${e}`,"sub_msgs"),u("timestamp","desc"),s(20));try{let c=r(l(V,"messages",`${Q}`,"user_threads",`${D.currentUser.uid}`));$(c,e=>{try{let t=e.data();if(t){if(t.agent_read&&!1==isNaN(t.agent_read)){et=Number(t.agent_read);let o=es.getElementById("AtOnceMessageSeenText");o&&(o.innerText="Read");let n=es.getElementById("AtOnceMessageConnectedText");n&&Date.now()-et<18e4&&en&&(n.className=`AtOnceFlexCenter${b} AtOnceTimestampContainer${b} AtOnceTextColorNine${b} AtOnceSubText${b}`,n.innerText=`${en} joined the chat`)}t.agent_typed&&!1==isNaN(t.agent_read)&&(eo=Number(t.agent_read)),t.agent_read_by&&(en=t.agent_read_by),t.agent_typed_by&&(ei=t.agent_typed_by),eR()}}catch(i){}})}catch(d){}$(o,o=>{try{o.docChanges().forEach(o=>{try{let l=o.doc.data();if(l){let p=l.message.id;for(let r of e7)if(r.threadId==e){let c=r.messages;if(c){let s=c.findIndex(function(e){return e.id==p});function u(o){let l=es.getElementById("AtOnceLiveChatMainContainer");if(eB==e&&l&&!0==t){try{"visible"==document.visibilityState?(n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)):(ee||(ee=window.top.document.title),window.top.document.title=`(1) ${ee}`)}catch(p){}o&&td(c,l)}else if(!1==t||"hidden"==document.visibilityState)try{let r=[];try{let s=D.currentUser.uid;if(c&&c.length)for(let u of c)u.timestamp&&u.timestamp>n&&u.sender!==s&&r.push(u)}catch(d){}if(r.length){let v=r.slice(0,3);if(!1==t){S.innerHTML="";let $=document.createElement("div");$.className=`AtOnceLiveChatCloseButton${b}`,$.innerHTML=e3,$.addEventListener("click",function(){try{g.className=`AtOnceChatNotification${b} hidden`,ee&&(window.top.document.title=ee),S.className=`AtOnceLiveChatMessagesContainer${b} hidden`,S.innerHTML="";try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(e){}}catch(t){}}),S.appendChild($);let m=v.length;for(let h=0;h<m;h++){let _=document.createElement("div");1==m?_.className=`AtOnceMessageContainerPreview${b} three`:2==m?_.className=`AtOnceMessageContainerPreview${b} ${0==h?"two":"three"}`:_.className=`AtOnceMessageContainerPreview${b} ${0==h?"one":1==h?"two":"three"}`,_.innerHTML=Autolinker.link(v[h].message),_.addEventListener("click",function(){tM(),th(e,c)}),i=e,a=c,S.appendChild(_)}AtOnceChatContainer.style.width="100%",AtOnceChatContainer.style.height="100%",S.className=`AtOnceLiveChatMessagesContainer${b}`,ti=[]}ee||(ee=window.top.document.title),window.top.document.title=`(${r.length}) ${ee}`,g.innerText=r.length,g.className=`AtOnceChatNotification${b}`}}catch(f){}}-1==s?(r.messages.push(l.message),r.timestamp=l.timestamp,e7.sort(function(e,t){return t.timestamp-e.timestamp}),u(!0)):u()}break}}}catch(d){}})}catch(l){}},e=>{})}async function eU(e){try{return new Promise(async function(t,o){try{let n=r(p(V,"messages",`${Q}`,"all_msgs",`${e}`,"sub_msgs"),u("timestamp","desc"),s(20));v(n).then(o=>{if(o.empty)eK(e),t(!0);else try{let n=[];o.forEach(e=>{let t=e.data().message;t&&n.push(t)}),n.length&&(n.sort(function(e,t){return e.timestamp-t.timestamp}),e7.push({threadId:e,messages:n,timestamp:n[n.length-1].timestamp}),eK(e)),t(!0)}catch(i){t(!0)}}).catch(e=>{t(!0)})}catch(i){t(!0)}})}catch(t){return!0}}function ez(e){setTimeout(function(){try{e.selectionStart=e.selectionEnd=1e4,e.focus(),e.scrollLeft=e.scrollWidth}catch(t){}},0)}let eG=document.createElement("div");eG.className=`AtOnceSubContainer${b}`;let eV=document.createElement("div");eV.style.cssText="visibility:hidden !important;position:relative !important;display:none !important;width:0;height:0;line-height:0;transform:scale(0);",eV.className=`AtOnceChatPrimaryContainer${b}`;let eD=document.createElement("div");eD.className=`AtOnceChatFirstContainer${b}`;let eF=document.createElement("div");function eJ(e){let t=document.createElement("div");return(t.innerHTML=e),t.textContent}async function ej(){try{await eQ.then(()=>{if(e7.length){e7.sort(function(e,t){return t.timestamp-e.timestamp});let e=document.createElement("div"),t=document.createElement("div");for(let o of(t.innerText="Your conversations",t.className=`AtOnceSubHeadingSmall${b} AtOnceTextColorSeven${b} AtOnceSubHeadingMargin${b}`,e.appendChild(t),e7))try{let n=o.messages,i=n[n.length-1],a=eJ(i.subject.substring(0,30)).replace(/\n/g," "),l=eJ(i.snippet.substring(0,30)).replace(/\n/g," "),p=e8(i.timestamp),r=o.threadId,c=document.createElement("div");c.className=`AtOnceFlexSpaced${b} AtOnceQuickButton${b} AtOnceQuickButtonPaddedLess${b}`,c.addEventListener("click",function(){th(r,n)});let s=document.createElement("div"),u=document.createElement("div");u.className=`AtOnceSubText${b} AtOnceSubTextLarge${b} AtOnceTextColorThree${b}`,u.innerText=a;let d=document.createElement("div");d.innerText=l,d.className=`AtOnceSubText${b} AtOnceTextColorSeven${b}`,s.appendChild(u),s.appendChild(d);let v=document.createElement("div");v.className=`AtOnceSubText${b} AtOnceFlexStart${b} AtOnceTextColorNine${b}`,v.innerText=p,c.appendChild(s),c.appendChild(v),e.appendChild(c)}catch($){}es.getElementById("AtOnceLiveChatMainContainer")||eF.appendChild(e)}})}catch(e){}}eF.className=`AtOnceContainerScrollMiddle${b}`;let eq=!1,eQ=eZ();async function eZ(){return new Promise(async function(e,t){if(!0==eq)e(!0);else try{eI().then(()=>{try{if(eN.length>0){let t=eN.slice(-5),o=[];for(let n of t)o.push(eU(n));eg(o).then(()=>{eq=!0,e(!0)})}else eq=!0,e(!0)}catch(i){eq=!0,e(!0)}})}catch(o){eq=!0,e(!0)}})}let eW=document.createElement("div");eW.className=`AtOnceContainerPadded${b} AtOnceTopContainer${b} AtOnceGradientBackground${b}`;let eY=document.createElement("div"),eX=document.createElement("div");eX.className=`AtOnceTopHeadingContainer${b}`;let te=document.createElement("div");te.className=`AtOnceChatRoundedCircleIcon${b} AtOnceChatTopBackButton${b}`,te.style.display="none";let tt=document.createElement("div");tt.innerHTML=eA,te.appendChild(tt);let to=document.createElement("div");eX.appendChild(te),eX.appendChild(to);let tn=document.createElement("div");tn.className=`AtOnceSubText${b} AtOnceSubTextMargin${b}`,eY.appendChild(eX),eY.appendChild(tn),eW.appendChild(eY);let ti=[],ta="Usual reply time: a few hours",tl=new Date().getDay();(0==tl||6==tl)&&(ta="Usual reply time: 48 hours"),Z&&W-Z<9e5&&(ta=`<div class="AtOnceFlexTitle${b}"><span class="AtOnceGreenCircle${b}"> </span>We’re Online</div>`);let tp=D.currentUser.email;tp&&localStorage.setItem("AtOnceLiveChatUserEmail",tp.trimStart().trimEnd().toLowerCase());try{tp||(tp=localStorage.getItem("AtOnceLiveChatUserEmail").trimStart().trimEnd().toLowerCase())}catch(tr){}let tc=new m(ep,{distance:2e3,keys:["heading","subheading","actions_heading","text",]});function ts(e,t,o){e||(e="order");let n=[],i=tc.search(e);if(i.item)n.push(i);else for(let a of i)try{if(n.length>o)break;n.push(a.item)}catch(l){}if(n.length)for(let p of(t.innerHTML="",n))t9(p,t,!1,!1,"",t,!1,"","",!0)}function tu(e){let t=document.createElement("a"),o=e.name;return void 0===e.type?(t.href=`data:${e.mimetype},${e.url}`,t.target="_blank",t.download=o):"image"==e.type?(t.href=`data:image/${e.filetype},${e.url}`,t.target="_blank",t.download=o):(t.href=`${e.url}`,t.target="_blank"),t}function td(e,t){try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(o){}try{if(t.innerHTML="",e&&e.length){let i=e.length,a=i-1,l="",p="",r=0,c="",s=document.createElement("div");s.className=`AtOnceTextCenter${b} AtOnceSubHeadingSmall${b} AtOnceTextColorThree${b} AtOnceSubTextAntiMarginTop${b}`,s.innerText=`We’ll reply here & email ${tp||localStorage.getItem("AtOnceLiveChatUserEmail")}`,t.appendChild(s);for(let u=0;u<i;u++){let d=e[u];if(d&&d.message){let v=d.name,$=d.to,m=d.timestamp,h=!1;d.sender!==Q&&(h=!0);let _=document.createElement("div");_.className=`AtOncePrimaryMessageContainer${b} ${h?"self":"sender"}`;let g=document.createElement("div");g.className=`AtOnceMessageContainer${b} ${h?"self":"sender"}`,g.innerHTML=Autolinker.link(d.message);try{if(d.first_url_title){let f=g.getElementsByTagName("a");if(f.length){let A=f[0].cloneNode(!1);A.className=`AtOnceMessageContainerLink${b} ${h?"self":"sender"}`,A.innerText=d.first_url_title,g.appendChild(A)}}}catch(x){}let O="",C="",y=l==v||p==$&&$==Q;if(y&&(g.classList.add("middle"),c&&-1!==c.className.indexOf("end")&&(c.classList.remove("end"),c.classList.add("start"))),!y){c?(g.classList.add("end"),c.classList.remove("middle"),c.classList.add("end")):g.classList.add("start");let S=document.createElement("div");if(S.className=`${""==l?"":"AtOncePrimarySubjectHeader"}${b} AtOnceSubText${b} AtOnceSubTextSmall${b} ${h?`AtOnceSubTextSpacingRight${b}`:`AtOnceSubTextSpacingLeft${b}`} AtOnceTextColorSeven${b} ${h?`AtOncePrimaryMessageContainer${b} self`:""}`,!0==h?S.innerText="Me":S.innerText=`${v}`,_.appendChild(S),m-r>12e4){r=m;let T=document.createElement("div");T.className=`AtOnceFlexCenter${b} AtOnceTimestampContainer${b} AtOnceTextColorNine${b}`,T.innerText=e8(m),t.appendChild(T)}}if(u==a){g.className=`AtOnceMessageContainer${b} ${h?"self":"sender"} end`;try{h&&((O=document.createElement("div")).className=`AtOnceSeenContainer${b}`,O.id="AtOnceMessageSeenText",et>=d.timestamp?O.innerText="Read":O.innerText="Unread"),(0==u||Math.abs(d.timestamp-et)>12e5)&&((C=document.createElement("div")).id="AtOnceMessageConnectedText",et>d.timestamp&&Date.now()-et<18e4&&en&&(C.className=`AtOnceFlexCenter${b} AtOnceTimestampContainer${b} AtOnceTextColorNine${b} AtOnceSubText${b}`,C.innerText=`${en} joined the chat`))}catch(M){}}_.appendChild(g),t.appendChild(_),O&&t.appendChild(O),C&&t.appendChild(C);let P=d.other_attachments,w=`${h?"self":"sender"}`;if(P&&P.length)for(let k of P)try{let L=document.createElement("div"),E=tu(k),N=k.name;if(""==N){N="File";let B=k.filetype;""!==B&&(N+=`.${B}`)}let H=N.substring(0,35);function I(e){let t=document.createElement("img");t.addEventListener("error",function(){t.style.display="none",L.className=`AtOnceMainAttachmentsUnavailable${b} ${w}`,L.innerHTML="Image unavailable/expired",E.removeAttribute("href"),E.removeAttribute("target"),E.removeAttribute("download"),E.remove()}),t.src=e.url,t.className=`AtOnceMainAttachmentsPreview${b}`,L.classList.add("image"),L.innerText="",L.appendChild(t)}function R(e){let t=document.createElement("video");t.style.width="100%",t.controls=!0;let o=document.createElement("source");o.src=e.url,t.appendChild(o),L.classList.add("video"),L.innerText="",L.appendChild(t)}function K(e){let t=document.createElement("audio");t.style.width="100%",t.controls=!0;let o=document.createElement("source");o.addEventListener("error",function(){o.style.display="none",t.style.display="none",E.removeAttribute("href"),E.removeAttribute("target"),E.removeAttribute("download"),E.remove(),L.className=`AtOnceMainAttachmentsUnavailable${b} ${w}`,L.innerHTML="Audio file unavailable"}),o.src=e.url,t.appendChild(o),L.classList.add("audio"),L.innerText="",L.appendChild(t)}N.length>35&&(H=`${H}...`),L.className=`AtOncePseudoAttachmentLink${b} ${w}`,L.title=N,L.innerText=`${H}`,!1!==k.mimetype&&(-1!==k.mimetype.indexOf("image")?I(k):-1!==k.mimetype.indexOf("video")?R(k):-1!==k.mimetype.indexOf("audio")&&K(k)),L.addEventListener("click",function(){E&&E.click()}),t.appendChild(L)}catch(U){}l=v,p=$,c=g}}}try{setTimeout(function(){eF.children[0].scrollIntoView({behavior:"smooth",block:"end"})},2)}catch(z){}}catch(G){}}async function tv(e){return new Promise(async function(t,o){try{await U(e,"orders").then(e=>{if(e&&e[0]){let o=e[0],n=o.line_items,i=[];if(o.line_items_returned&&o.line_items_returned.length){let a=o.line_items_returned;for(let l of a){let r=1;l.quantity&&(r=Number(l.quantity)),isNaN(r)&&(r=1),i.push({id:l.id,line_item:l.line_item,product_id:l.product_id,quantity:r})}}let c=p(V,"shopify",e[1],"products");n?tf(n,i,!1,c).then(()=>{t(e)}):t(null)}else t(null)})}catch(n){t(null)}})}function t$(){te.style.display="",eF.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerHTML="Recent Orders",to.className=`AtOnceSubHeading${b}`,tn.innerText="",tn.style.display="none";let e=document.createElement("div");e.className=`AtOnceContainerPaddedTopSmall${b}`;let t=document.createElement("div");t.className=`AtOnceFlexCenter${b}`;let o=document.createElement("button");return o.id=`AtOnceFindOtherOrders${b}`,o.className=`AtOnceMainButton${b} AtOnceSecondaryButton${b} AtOnceTertiaryButton${b}`,o.innerText="Find Another Order",o.addEventListener("click",function(){tg(!0)}),t.appendChild(o),e.appendChild(t),e}async function tm(e,t){return new Promise(async function(o,n){let i=function e(){let t=localStorage.getItem("AtOnceOrders"),o=[];if(t)try{let n=t.split(",");if(n&&n.length)for(let i of n)try{i&&i.length>7&&-1==o.indexOf(i)&&o.push(i.replace("_atonce_",""))}catch(a){}}catch(l){}return o}(),a=[];if(i.length){for(let l of i=i.slice(0,15))a.push(tv(l));await eg(a).then(n=>{if(a.length&&n){let i=[];for(let l of n)if(l){let p=l[1],r=i.findIndex(function(e){return e.store==p});-1==r&&i.push({order:l[0],store:p,order_identifier:l[2]})}if(i.length)for(let c of i)R(c.order_identifier,c.order.customer_id,c.store)}if(e){if(n&&n.length){let s=t$();for(let u of(eS=[],n)){if(u){let d=u[1],v=u[0];t0(v,d,s,eF)}eS.push(u)}eF.innerHTML="";es.getElementById("AtOnceLiveChatMainContainer")||eF.appendChild(s)}}else if(t)for(let $ of(eS=[],n))$&&eS.push($);o(!0)})}else o(null)})}function th(e,t,o){to.innerHTML=ta,to.className=`AtOnceSubHeading${b}`,tn.style.display="none",te.style.display="",ti=[];let n=[],i=0,a=async e=>{let t=Array.from(e.target.files);d(t)};if(o){let l=t[0];k("send_live_message",{company:Q,user:D.currentUser.uid,email:tp,message:l.message,id:l.id,threadId:e,u:!0}).then(()=>{eK(e)});let p=e7.findIndex(function(t){return t.threadId==e});-1==p&&e7.unshift({threadId:e,timestamp:Date.now(),messages:t})}eB=e;let r=document.createElement("div");r.id="AtOnceLiveChatMainContainer",r.className=`AtOnceContainerPadded${b}`,td(t,r);let c=document.createElement("div");c.className=`AtOnceContainerLiveChatMain${b}`;let s=document.createElement("div");s.className=`AtOnceContainerLiveChatAttachments${b}`;let u=document.createElement("div");async function d(e){try{let t=e.length;for(let o=0;o<t;o++){let a=await e[o],l=Number(a.size);if(l>20971520||l+i>20971520)u.classList.add("shown");else{let p=a.name,r=a.type;i+=l;let c=`${E(32)}${p}`,d=A(G,`attachments/${Q}/${c}`),v={customMetadata:{user_id:`${D.currentUser.uid}`,owner:`${Q}`}},$=document.createElement("div");$.className=`AtOnceFlex${b}`;let m=document.createElement("span");m.innerHTML=`${p} <span class="AtOnceAttachmentsUploading${b}">Uploading</span>`;let h=document.createElement("div");h.className=`AtOnceAttachmentCloseBtn${b}`,h.innerHTML=e1;let _=!1;$.appendChild(m),$.appendChild(h),s.appendChild($),s.classList.add("shown"),x(d,a,v).then(()=>{f(d).then(e=>{if(!1==_)n.push({url:e,fakeName:c,name:p,fileName:p,mimetype:r}),m.innerText=`${p}`;else{$.remove();try{O(d)}catch(t){}}}).catch(e=>{})}),h.addEventListener("click",function(){_=!0,$.remove();try{O(d)}catch(e){}if(n.length)try{for(let t of n)if(t.fakeName==c){n=n.filter(e=>e!==t);break}}catch(o){}0==n.length&&s.classList.remove("shown")})}}}catch(g){}}u.className=`AtOnceContainerLiveChatAttachmentsError${b}`,u.innerText="Max file size is 20MB";let v=document.createElement("span");v.className=`AtOnceContainerLiveChatInput${b}`,v.setAttribute("placeholder","Write a message"),v.contentEditable=!0,v.addEventListener("keydown",function e(t){try{"Enter"===t.key&&!1==t.shiftKey&&y()}catch(o){}});let $=`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="${"#111"==ev?em:ed}" d="M18.08,12.42,11.9,18.61a4.25,4.25,0,0,1-6-6l8-8a2.57,2.57,0,0,1,3.54,0,2.52,2.52,0,0,1,0,3.54l-6.9,6.89A.75.75,0,1,1,9.42,14l5.13-5.12a1,1,0,0,0-1.42-1.42L8,12.6a2.74,2.74,0,0,0,0,3.89,2.82,2.82,0,0,0,3.89,0l6.89-6.9a4.5,4.5,0,0,0-6.36-6.36l-8,8A6.25,6.25,0,0,0,13.31,20l6.19-6.18a1,1,0,1,0-1.42-1.42Z"/>
                        </svg>
                        `,m=`
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="${"#111"==ev?em:ed}" xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(1, 0)" d="m16.6915026 12.4744748-13.18537879.785487c-.31393759 0-.47090638.1570974-.47090638.3141948l-1.88362554 6.440993C.8376543 20.8006365.99 21.89 1.77946707 22.52c.63053293.47 1.72665674.58 2.35453192.3229026L21.714504 14.0454487c.9418128-.4712921 1.4127191-1.4138765 1.2557504-2.3564608-.1569688-.6283896-.6278752-1.2567791-1.2557504-1.5709739L4.13399899 1.16346272C3.34915502.9 2.40734225 1.00636533 1.77946707 1.4776575.9946231 2.10604706.8376543 3.0486314 1.15159189 3.99121575l1.88362554 6.44099305c0 .1570973.31393759.3141947.47090638.3141947l13.18537879.785487s.4709063 0 .4709063.4712922c0 .4712921-.4709063.4712921-.4709063.4712921Z"/>
                        </svg>
                        `,h=document.createElement("input");h.style.display="none",h.type="file",h.multiple=!0,h.addEventListener("change",a);let g=document.createElement("button");g.className=`AtOnceContainerLiveChatButton${b} attachment`,g.innerHTML=$,g.addEventListener("click",function(){h.click()});let C=document.createElement("button");function y(){try{let t=v.innerText,o=t.replace(/\s+/g,"");function i(){setTimeout(function(){v.innerText="",C.disabled=!0,v.classList.remove(`AtOnceContainerLiveChatInputDisabled${b}`)},1e-6)}if(o.length>0){v.classList.add(`AtOnceContainerLiveChatInputDisabled${b}`);let a=E(20),l=[];if(n.length)for(let p of n)try{l.push({url:p.url,fileName:p.fileName,name:p.name,mimetype:p.mimetype,filetype:_.getExtension(p.mimetype)})}catch(c){}for(let u of(k("send_live_message",{company:Q,user:D.currentUser.uid,email:tp,message:t,attachments:l,threadId:e,id:a}),s.classList.remove("shown"),s.innerHTML="",e7))if(u.threadId==e){let d=u.messages;if(d){let $=d.findIndex(function(e){return e.id==a});if(-1==$){let m=eH(tp,a,t,e,l);u.messages.push(m),u.timestamp=m.timestamp,e7.sort(function(e,t){return t.timestamp-e.timestamp}),td(u.messages,r)}}break}i()}else v.classList.add(`AtOnceContainerLiveChatInputDisabled${b}`),i()}catch(h){}}C.className=`AtOnceContainerLiveChatButton${b}`,C.innerHTML=m,C.disabled=!0,C.addEventListener("click",function(){y()}),v.addEventListener("keyup",function(){try{v.innerText.length>0?C.disabled=!1:C.disabled=!0}catch(e){}}),c.appendChild(u),c.appendChild(s),c.appendChild(v),c.appendChild(h),c.appendChild(g),c.appendChild(C),eF.innerHTML="",eF.appendChild(r),eF.appendChild(c),ez(v),eR()}function t_(e,t,o,n){let i=document.createElement("div");i.className=`AtOnceContainerPadded${b} AtOnceButtonContainer${b}`;let a=`AtOnceMainButton${b} AtOnceMainButtonLeft${b} AtOncePrimaryButton${b}`,l=`AtOnceMainButton${b} AtOnceMainButtonRight${b} AtOnceSecondaryButton${b}`,p=(es.getElementById("AtOnceMainSearchInput"),document.createElement("button"));p.className=t?l:a,p.innerText="Okay, thanks",p.addEventListener("click",function(){eT?tx():ty(er,"Quick links")});let r=document.createElement("button");if(r.className=t?a:l,r.innerText="Message us",r.addEventListener("click",function(){let e="";try{eT&&(e=e2.name)}catch(t){}!function e(t,o,n){to.innerHTML=ta,to.className=`AtOnceSubHeading${b}`;let i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");l.className=`AtOnceContainerPaddedLess${b}`;let p=document.createElement("div");p.className=`AtOnceContainerLargeMargin${b}`;let r=document.createElement("div");r.className=`AtOnceSubText${b} AtOnceSubTextLargeMargin${b} AtOnceTextCenter${b}`,r.innerText=`Need something else? We’d love to help!`;let c=document.createElement("input");c.className=`AtOnceContactFormInput${b}`,c.placeholder="Enter your email",c.type="text";let s=document.createElement("textarea");s.maxLength=5e3,s.placeholder="Leave a message",(t||o)&&o&&(s.value=`Order ${o}. `);let u=document.createElement("button");u.disabled=!0,u.innerText="Send",u.className=`AtOnceMainButton${b} AtOncePrimaryButton${b} AtOnceSubTextMediumMargin${b}`;let d=Date.now();function v(){setTimeout(function(){try{u.innerText="Send"}catch(e){}},3e3)}s.addEventListener("keyup",function(){try{let e=s.value;if(e.length>0){let t=Date.now();t-d>500&&(d=t,ts(e,p,4)),u.disabled=!1}else u.disabled=!0}catch(o){}}),u.addEventListener("click",function(){try{if(-1==c.value.indexOf("@"))u.innerText="Invalid Email",v();else if(""==s.value.trimStart().trimEnd())u.innerText="Invalid Message",v(),ez(s);else{var e;let t=c.value.trimStart().trimEnd().toLowerCase();!0==D.currentUser.isAnonymous&&t!==tp&&localStorage.setItem("AtOnceLiveChatUserEmail",t),tp=t;let o=s.value.trimStart().trimEnd(),n=(e=`${D.currentUser.uid}${o.substring(0,30)}`,window.btoa(unescape(encodeURIComponent(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")),i=E(20);th(n,[eH(tp,i,o,n)],!0)}}catch(a){}}),ts("order",p,4),l.appendChild(r),l.appendChild(c),l.appendChild(s),l.appendChild(u),a.appendChild(l),a.appendChild(p),i.appendChild(a),eF.innerHTML="",eF.appendChild(i),tp&&(c.value=tp,ez(s))}(o,e,n)}),!0==t){let c=document.createElement("div"),s=document.createElement("div"),u=Date.now();ts("order",s,2);let d=document.createElement("div");d.className=`AtOncePositionRelative${b} AtOnceFlexTitle${b}`;let v=document.createElement("div");v.className=`AtOnceSearchInputIcon${b}`,v.innerHTML=eC;let $=document.createElement("input");$.id="AtOnceMainSearchInput",$.type="text",$.className=`AtOnceSearchInput${b} AtOnceSearchInputIconed${b}`,$.placeholder="Search instant answers",$.addEventListener("keyup",function(){try{let e=$.value,t=Date.now();t-u>500&&(u=t,ts(e,s,2))}catch(o){}}),d.appendChild(v),d.appendChild($),c.appendChild(d),c.appendChild(s),e.appendChild(c),setTimeout(function(){ez($)},2);try{i.appendChild(r)}catch(m){}try{i.appendChild(p)}catch(h){}try{es.getElementById(`AtOnceContainerHelpCenterSearch${b}`).remove()}catch(_){}}else{try{i.appendChild(p)}catch(g){}try{i.appendChild(r)}catch(f){}}e.appendChild(i)}function tg(e){if(e||!localStorage.getItem("AtOnceOrders")){te.style.display="",eF.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerHTML=`I’m an existing customer`,to.className=`AtOnceSubHeading${b}`,tn.innerText="",tn.style.display="none";let t=document.createElement("div"),o=document.createElement("div");o.className=`AtOnceSubHeadingSmall${b} AtOnceSubHeadingMargin${b} AtOnceTextColorSeven${b}`,o.innerText="Access your orders";let n=document.createElement("div");n.className=`AtOnceContainerPaddedLess${b} AtOnceContainerPaddedTopSmall${b}`;let i=document.createElement("div");i.innerText="Order info is in your email/text/packing slip",i.className=`AtOnceSubText${b} AtOnceTextColorTwo${b} AtOnceSubTextMarginBottom${b}`;let a=document.createElement("div");a.className=`AtOnceContainerPaddedTopSmall${b}`;let l=[];function p(e,t){let o=document.createElement("label");o.className=`AtOnceManageOrdersLabel${b}`;let n=document.createElement("span");n.className=`AtOnceManageOrdersSpan${b}`,n.innerText=e;let i=document.createElement("input");i.type="text",i.className=`AtOnceManageOrdersInput${b}`,i.placeholder=" ",o.appendChild(i),o.appendChild(n),a.appendChild(o),l.push({input:i,name:t})}p("Order Number/ID","order_number"),p("Zip/Postal Code","zip_code");let r=l[0].input,c=l[1].input,s=document.createElement("div");s.style.display="none",s.className=`AtOnceLoadingSpinner${b}`;let u=document.createElement("button");u.className=`AtOnceMainButton${b} AtOncePrimaryButton${b} AtOnceSubTextMediumMargin${b}`,u.innerText="Enter",u.disabled=!0;let d=document.createElement("div");for(let v of(d.className=`AtOnceTriHeading${b} AtOncePrimarySubjectHeader${b} AtOnceFlexCenter${b} AtOnceTextColorError${b}`,d.innerText="",u.addEventListener("click",function(){s.style.display="";let t=`${r.value}`.replace(/\s/g,"").replace(/\D/g,"").trimStart().trimEnd().toUpperCase(),o=`${c.value}`.replace(/\s/g,"").trimStart().trimEnd().toUpperCase(),n=`${t}${o}`;U(n,"orders").then(n=>{n&&n[0]?(T(`${t}_atonce_${o}`),tx(e)):(u.disabled=!0,s.style.display="none",d.innerText="Order not found")})}),l))v.input.addEventListener("keyup",function(){d.innerText="",r.value.length>3&&c.value.length>3?u.disabled=!1:u.disabled=!0}),"zip_code"==v.name?v.input.addEventListener("keydown",function e(t){try{"Enter"===t.key&&!1==t.shiftKey&&u.click()}catch(o){}}):ez(v.input);n.appendChild(i),n.appendChild(a),n.appendChild(s),n.appendChild(u),n.appendChild(d),t.appendChild(o),t.appendChild(n),eF.innerHTML="",eF.appendChild(t)}else tx(!0)}async function tf(e,t,o,n){try{let i=[];if(t.length){let a=t.length;for(let l=0;l<a;l++)t[l].position_id=l}if(o)for(let p of e)p&&p.variant_id&&-1==i.indexOf(p.variant_id)&&i.push(p.variant_id);else for(let s of e){let u=s.variant_id;u&&-1==i.indexOf(u)&&i.push(u);let d=s.id,$=Number(s.price_set.presentment_money.amount)*Number(s.quantity),m=s.price_set.presentment_money.currency_code,h=s.discount_allocations,_=s.tax_lines;if(h&&h.length)for(let g of h)$-=Number(g.amount_set.presentment_money.amount);if(_&&_.length)for(let f of _)$+=Number(f.price_set.presentment_money.amount);s.customer_paid_amount=$.toFixed(2),s.customer_paid_currency=m;let A=s.quantity-s.fulfillable_quantity;if(A>0&&t.length)for(let x of t){if(0==A)break;if(x.line_item==d){let O=x.position_id,C=x.quantity-A;0==C?(A=0,t=t.filter(e=>e.id!==O)):C>0?(x.quantity-=A,A=0):C<0&&(x.quantity=0,A=Math.abs(C))}}s.returnable_quantity=A}if(i.length){let y=function e(t,o){for(var n=[],i=0;i<t.length;i+=o)n.push(t.slice(i,i+o));return n}(i,10),b=[],S=[];async function T(t){return new Promise(async function(a,l){await v(r(n,c("variant_ids_list","array-contains-any",t))).then(t=>{t.empty||t.forEach(t=>{try{let n=t.data(),a=n.variants,l=n.images,p=n.options,r=["id","price","compare_at_price","option1","option2","option3","position","product_id","title"];for(let c of i)if(-1==S.indexOf(c)){S.push(c);let s=e.findIndex(function(e){return e.variant_id==c});if(-1!==s){o&&(e[s].title=n.title);let u=[];for(let d of a){let v=d.id;if(v==c){if(o)e[s].variant_title=d.title;else{let $={};for(let m=1;m<4;m++){let h=`option${m}`,_=d[`${h}`];_&&($[`${h}`]=_)}"{}"!==JSON.stringify($)&&(e[s].current_variant=$)}}if(!o&&(null==d.inventory_management||"continue"==d.inventory_policy||d.inventory_quantity>0)){let g={};for(let f of r)-1!==f.indexOf("price")?g[`${f}`]=Number(d[`${f}`]).toFixed(2):g[`${f}`]=d[`${f}`];for(let A of l)-1!==A.variant_ids.indexOf(v)&&(g.img=A.src);u.push(g)}}if(!o){if(p&&p.length){let x=[];for(let O of p)x.push({name:O.name,position:O.position,values:O.values});e[s].product_options=x}e[s].exchange_options=u}if(l&&l.length){let C=[];for(let y of l)-1!==y.variant_ids.indexOf(c)&&(e[s].img=y.src),y.src&&C.push(y.src);o||(e[s].images=C)}1==a.length?e[s].hasOnlyDefaultVariant=!0:e[s].hasOnlyDefaultVariant=!1}}}catch(b){}}),a("success")})})}if(y&&y.length){for(let M of y)b.push(T(M));b.length&&await eg(b)}}return e}catch(P){return e}}function tA(e){if(e2){let t=[],o=[],n=0,i=e2.currency,a=B(i);te.style.display="",eF.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerHTML=`${"edit_add"==e?"Add Items Below":"Add/Remove Items Below"}`,to.className=`AtOnceSubHeading${b}`,tn.innerText="",tn.style.display="none";let l=document.createElement("div");l.className=`AtOnceContainerPadded${b} AtOnceContainerNoBottomPadding${b}`;let d=document.createElement("div");d.className=`AtOnceMainShopStickyChangesContainer${b} AtOnceFlexCenter${b}`;let $=document.createElement("button");$.className=`AtOnceMainButton${b} AtOncePrimaryButton${b}`,$.innerText="Edit Order";let h=document.createElement("div");h.style.display="none",h.className=`AtOnceLoadingSpinner${b} bottomed`;let _=document.createElement("div");_.style.display="none";let g=document.createElement("div");g.className=`AtOnceEnterEmailInputLabel${b}`,g.innerText="Enter your email";let f=document.createElement("input");f.className=`AtOnceSearchInput${b} full bottomed`,f.placeholder="Enter your email";try{e2.email?f.value=e2.email:e2.customer.email&&(f.value=e2.customer.email);try{!f.value&&localStorage.getItem("AtOnceLiveChatUserEmail")&&(f.value=localStorage.getItem("AtOnceLiveChatUserEmail"))}catch(A){}}catch(x){}f.value||(l.classList.add(`AtOnceContainerPaddedBottomLarge${b}`),l.classList.remove(`AtOnceContainerNoBottomPadding${b}`),h.classList.add("bigger"),d.classList.add("bigger"),_.style.display="",f.addEventListener("keyup",function(){try{f.value&&-1!==f.value.indexOf("@")?$.disabled=!1:$.disabled=!0}catch(e){}})),_.appendChild(g),_.appendChild(f);let O="",C=e2.shipping_zip,y=e2.billing_zip,S="";null!=C?S=C:null!=y&&(S=y);let T=e2.order_number;O=`${T=`${T}`.replace(/\s/g,"").replace(/\D/g,"").trimStart().trimEnd().toUpperCase()}${S=`${S}`.replace(/\s/g,"").trimStart().trimEnd().toUpperCase()}`,$.addEventListener("click",function(){h.style.display="",$.disabled=!0,$.classList.remove("red");let e=[];for(let o of t){let n={};!1!==o.product_exists&&o.id&&(o.line_item&&(n.line_item=Number(o.line_item)),o.id&&(n.variant_id=Number(o.id)),o.product_id&&(n.product_id=Number(o.product_id)),0==o.quantity?n.quantity=0:Number(o.quantity)?n.quantity=Number(o.quantity):n.quantity=1,e.push(n))}function i(e,t){setTimeout(function(){try{let o=$.innerText;"Updated - Check Your Email"!==o&&"Update Failed"!==o&&($.innerText=`${e} (${t}/4)`)}catch(n){}},2e3*t)}i("Checking Order",1),i("Adding Credit",2),i("Updating Order",3),i("Sending Email",4);let a=`${f.value}`.trimStart().trimEnd().toLowerCase();k("edit_order",{store:e2.shopify_store,order:e2.id,order_identifier:O,line_items:e,email:a}).then(e=>{try{a&&-1!==a.indexOf("@")&&!localStorage.getItem("AtOnceLiveChatUserEmail")&&(tp||(tp=a),localStorage.setItem("AtOnceLiveChatUserEmail",a))}catch(t){}e&&e.success?(h.style.display="none",$.disabled=!1,$.classList.add("green"),$.innerText="Updated - Check Your Email",setTimeout(function(){try{te.click()}catch(e){}},3e3)):($.classList.add("red"),h.style.display="none",$.innerText="Update Failed")})}),d.appendChild(_),d.appendChild($),d.appendChild(h);let M=document.createElement("div"),P=p(V,"shopify",e2.shopify_store,"products"),w=r(P,c("in_stock","==",!0),c("status","==","active"),u("total_sales","desc"),s(200)),L=["id","price","compare_at_price","option1","option2","option3","position","product_id","title"],E=[],R="",K={keys:["handle","description","title","variant_titles_list","product_type",]},U=document.createElement("div");U.className=`AtOnceContainerPaddedTopMedium${b}`;let z=document.createElement("div");function G(e,o){let n=e.length;if(n>0){for(let i=0;i<n;i++){let l=e[i],p=document.createElement("div");p.className=`AtOnceMainShopProductSubContainer${b}`;let r=document.createElement("div");r.className=`AtOnceMainShopProductImageContainer${b}`,r.setAttribute("atonce_product_id",`${l.id}`);let c="",s=l.image;if(s)(c=document.createElement("img")).className=`AtOnceMainShopProductImage${b}`,c.src=s;else{(c=document.createElement("div")).className=`AtOnceMainShopProductImageDiv${b}`;let u=document.createElement("div");u.className=`AtOnceMainShopProductImageDivText${b}`,u.innerText=l.title,c.appendChild(u)}r.appendChild(c);let d=document.createElement("div");if(d.className=`AtOnceMainShopProductPriceContainer${b}`,l.compare_at_price){let v=document.createElement("span");v.className=`AtOnceMainShopProductPriceText${b} AtOnceMainShopProductPriceText_compare${b}`,v.innerText=`${a}${l.compare_at_price}`,d.appendChild(v)}let $=document.createElement("span");if($.className=`AtOnceMainShopProductPriceText${b}`,$.innerText=`${a}${l.price}`,d.appendChild($),p.appendChild(r),s){let m=document.createElement("div");m.className=`AtOnceMainShopProductTitleContainer${b}`;let h=document.createElement("div");h.className=`AtOnceMainShopProductTitleText${b}`,h.innerText=l.title,m.appendChild(h),p.appendChild(m)}p.appendChild(d),r.addEventListener("click",function(){let e=document.createElement("div"),o=l.variants;e.className=`AtOnceModalBackground${b}`;let n=document.createElement("div");n.style.display="none",n.className=`AtOnceModalContainer${b}`;let i=document.createElement("div");i.innerHTML=eb,i.className=`AtOnceModalCloseBtn${b}`;let p=document.createElement("div");p.className=`AtOnceModalProductImageContainer${b}`;let r=document.createElement("img");r.className=`AtOnceModalProductImage${b}`;let c=l.images,s="",u=[],d=document.createElement("div"),v=document.createElement("div"),$=`AtOnceModalProductImageContainer${b} maxwidth slideshow`,m=`AtOnceModalProductImageContainer${b} maxwidth`,h=l.image;h?r.src=`${h}`:(r.classList.add("border"),r.src=`${product_placeholder_image}`),p.appendChild(r);let _=document.createElement("div");_.className=`AtOnceModalProductRightContainer${b}`;let g="",f=l.hasOnlyDefaultVariant;!1==f&&(g=o[0].title);let A=document.createElement("span"),x=document.createElement("span");function O(){let e=document.createElement("div");e.className=`AtOnceModalProductTitle${b}`;let t=document.createElement("div");t.className=`AtOnceModalProductVariantInfo${b}`,""==g?x.className=`AtOnceModalProductVariantInfo${b}`:x.className=`AtOnceModalProductVariantInfo${b} price`,A.innerText=g,x.innerText=`${a}${l.price}`,t.appendChild(A),t.appendChild(x),e.innerText=l.title,_.appendChild(e),_.appendChild(t)}let C={},y={};function S(e){try{let t=!1;for(let n of o){let i=!0;for(let[a,l]of Object.entries(e))if(n[a]!==l){i=!1;break}if(!0==i){t=!0;break}}return t}catch(p){return!0}}function T(e){let t=!1;for(let n of o){let i=!0;for(let[a,p]of Object.entries(C))if(n[a]!==p){i=!1;break}if(!0==i){n.img?y.img=n.img:l.image?y.img=l.image:y.img=product_placeholder_image,y.id=n.id,y.title=l.title,y.option=n.title,y.price=n.price,y.product_id=n.product_id,y.variant_title=n.title,y.hasOnlyDefaultVariant=l.hasOnlyDefaultVariant,y.quantity=void 0!==l.quantity?l.quantity:1,t=!0,z();break}}!1==t&&(e&&(e.disabled=!0),U())}function M(){let e=document.createElement("div");if(e.className=`AtOncePrimarySubjectHeader${b}`,!1==f){let t=l.options,n=t.length,i=[];for(let p of t){let c=document.createElement("div"),s=`option${p.position}`,u=document.createElement("div");u.className=`AtOnceVariantsLabel${b}`,u.innerText=p.name;let d=[],v=[],$=[],m=document.createElement("div"),h=!0,g=!0,O=!0,y="",M="";for(let P of o){let w=P[`${s}`];if(-1==d.indexOf(w)){d.push(w);let k=P.img;k!==M&&(M&&(O=!1),M=k)}}for(let L of(!1==O&&(m.className=`AtOnceModalProductVariantSelectionContainer_images${b}`),o)){let E=L[`${s}`];if(-1==v.indexOf(E)){async function N(){for(let e of o){let t=!0;for(let[n,i]of Object.entries(C))if(e[n]!==i){t=!1;break}if(!0==t){e.title?A.innerText=e.title:A.innerText="",e.price&&(x.innerText=`${a}${e.price}`);break}}}v.push(E);let B=document.createElement("button"),H=`AtOnceMainShopVariantsButton${b}`,R=`AtOnceMainShopVariantsButton_active${b}`,K=L.img;!1==O&&(1==n?(H=`AtOnceMainShopVariantsButton${b} AtOnceMainShopVariantsButton_image${b} AtOnceMainShopVariantsButton_one${b}`,R=`AtOnceMainShopVariantsButton_image_active${b} AtOnceMainShopVariantsButton_image_active_one${b}`):(H=`AtOnceMainShopVariantsButton${b} AtOnceMainShopVariantsButton_image${b}`,R=`AtOnceMainShopVariantsButton_image_active${b}`),K&&(B.style.backgroundImage=`url(${K})`)),!0==h?(h=!1,C[`${s}`]=E,B.className=`${H} ${R}`):B.className=H,K!==y&&(y&&(g=!1),y=K);let U={option_name:s,name:E,button:B};$.push(B),i.push(U),B.addEventListener("click",function(){async function e(e){try{let t=JSON.parse(JSON.stringify(C));if(t){t[`${e.option_name}`]=e.name;let o=S(t);!0==o?e.button.disabled=!1:e.button.disabled=!0}}catch(n){}}if(C[`${s}`]=E,T(B),N(),K?!1==g&&(r.src!==K&&(r.src=K),I(K)):!1==g&&(r.src!==product_placeholder_image&&(r.src=product_placeholder_image),I(K)),$.length)for(let t of $)t!==B&&(t.className=H);if(i.length)for(let o of i)e(o);B.className=`${H} ${R}`}),!0==O&&(B.innerText=E),m.appendChild(B)}}c.appendChild(u),c.appendChild(m),e.appendChild(c)}}_.appendChild(e)}function P(){let e=document.createElement("div");e.className=`AtOnceMainShopProductDescription${b}`,e.innerHTML=l.description,_.appendChild(e)}O(),M();let w=document.createElement("div");w.className=`AtOnceQuantityContainer${b}`;let k=document.createElement("div");k.className=`AtOnceQuantitySubContainer${b} AtOnceFlexCenter${b}`;let L=document.createElement("div");L.innerText="Quantity",L.className=`AtOnceQuantityLabel${b}`;let E=document.createElement("span");E.innerHTML=e9,E.className=`AtOnceQuantityButtons${b} AtOnceFlexCenter${b}`;let N=document.createElement("span");N.innerHTML=eO,N.className=`AtOnceQuantityButtons${b} AtOnceFlexCenter${b}`;let B=document.createElement("input");B.type="number",B.min=1,B.value=1,B.step=1,B.className=`AtOnceQuantityInput${b} AtOnceFlexCenter${b}`,N.addEventListener("click",function(){let e=B.value;e++,B.value=e}),E.addEventListener("click",function(){let e=B.value;e>1&&e--,B.value=e}),w.appendChild(L),w.appendChild(k),k.appendChild(E),k.appendChild(B),k.appendChild(N),_.appendChild(w);let R=document.createElement("div");R.className=`AtOncePrimarySubjectHeader${b} AtOnceModalStickyBottomContainer${b}`;let K=document.createElement("button");function U(){K.disabled=!0,K.innerText="Sold Out"}function z(){K.disabled=!1,K.innerText="Add to Cart"}function G(){if(t.length){let o=!1;for(let n of t)if(n.id==y.id){let i=Number(n.quantity);i+=Number(y.quantity),n.quantity=i,o=!0;break}!1==o&&t.push(y)}else t.push(y);ee(),V(e)}function V(e){try{e.className=`AtOnceModalBackground${b}`}catch(t){}setTimeout(function(){try{e.remove()}catch(t){}},150)}K.className=`AtOnceMainButton${b} AtOncePrimaryButton${b}`,K.innerText="Add to Cart",K.addEventListener("click",function(){!0==f&&(y.id=o[0].id,l.image?y.img=l.image:y.img=product_placeholder_image,y.name=l.title,y.price=l.price,y.product_id=l.id,y.title="");let e=B.value;e<1&&(e=1),y.quantity=e,G()}),T(),R.appendChild(K),_.appendChild(R),P(),i.addEventListener("click",function(){V(e)}),e.addEventListener("click",function(t){let o=t.target;!1===n.contains(o)&&!1===p.contains(o)&&V(e)}),n.appendChild(i),s=H(c,d,v,u,m,$),n.appendChild(i),c&&c.length>1?n.appendChild(s):n.appendChild(p),n.appendChild(_),e.appendChild(n),n.style.display="",eF.appendChild(e),setTimeout(function(){n.className=`AtOnceModalContainer${b} active`,e.className=`AtOnceModalBackground${b} active`},0)}),o.appendChild(p)}z.classList.add("visible")}}async function D(){return new Promise(async function(e,t){v(w).then(t=>{t.empty||(t.forEach(e=>{try{let t=e.data(),o=t.id,n=t.title,i=t.image,a=t.images;i&&(i=i.src);let l=t.body_html,p="0.00",r=null;try{p=`${N(Number(t.variants[0].price))}`}catch(c){}try{let s=t.variants[0].compare_at_price;s&&(r=`${N(Number(s))}`)}catch(u){}let d={id:o,title:n,image:i,description:l,product_type:t.product_type,handle:t.handle,price:p,compare_at_price:r,variant_titles_list:t.variant_titles_list,options:t.options},v=[];if(a&&a.length){for(let $ of a)$.src&&v.push($.src);d.images=v}let m=t.variants;if(1==m.length){let h=m[0];d.variants=[{product_id:h.product_id,id:h.id,title:""}],d.hasOnlyDefaultVariant=!0}else{d.hasOnlyDefaultVariant=!1;let _=[];for(let g of m)if(null==g.inventory_management||"continue"==g.inventory_policy||g.inventory_quantity>0){let f=g.id,A={};for(let x of L)-1!==x.indexOf("price")?A[`${x}`]=Number(g[`${x}`]).toFixed(2):A[`${x}`]=g[`${x}`];for(let O of a)-1!==O.variant_ids.indexOf(f)&&(A.img=O.src);_.push(A)}d.variants=_}E.push(d)}catch(C){}}),E.length&&(G(E,z),R=new m(E,K))),e(!0)})})}z.className=`AtOnceContainerFlexProducts${b}`,U.appendChild(z);let F=D(),J=document.createElement("div"),j=document.createElement("input");function q(e){t.splice(e,1),X(),ee()}function Q(e,t,o,n){let i=document.createElement("div");i.className=`AtOnceFlex${b} AtOnceMarginBottomLarge${b}${t?"":` AtOnceDisabledDiv${b}`}`;let a=document.createElement("div"),l=document.createElement("div");l.className=`AtOnceProductImage${b}`,e.img?l.style.backgroundImage=`url(${e.img})`:l.innerHTML=ex,a.appendChild(l);let p=document.createElement("div");p.className=`AtOnceFlexSpacedProductTitleSmall${b}`;let r=document.createElement("div");r.className=`AtOnceSubTextBold${b} AtOnceTextColorThree${b}`,r.innerText=e.title?e.title:"";let c=document.createElement("div");c.className=`AtOnceSubText${b} AtOnceTextColorNine${b} AtOnceUserSelect${b}`;let s="";if(!1==e.hasOnlyDefaultVariant&&e.variant_title&&(s=e.variant_title),c.innerText=s,p.appendChild(r),p.appendChild(c),!0!==e.hasOnlyDefaultVariant){let u=e.product_id,d=e.title,v=document.createElement("button");function $(){let e=es.getElementById("AtOnceSearchInputProducts");if(e){e.value=d;try{e.dispatchEvent(new KeyboardEvent("keyup",{key:"a"}))}catch(t){}}}v.className=`AtOnceMainButton${b} AtOnceMainButtonSmall${b} smaller AtOnceSecondaryButton${b}`,v.innerText="Add style",v.addEventListener("click",function(){let e=es.querySelectorAll(`[atonce_product_id="${u}"]`);if(e&&e.length)try{e[0].click()}catch(t){$()}else $()}),p.appendChild(v)}let m=document.createElement("div");m.className=`AtOnceProductQuantityText${b}`,m.innerText=e.quantity;let h=document.createElement("div"),_=document.createElement("div");_.className=`AtOnceQuantitySubContainer${b} AtOnceFlexCenter${b}`;let g=document.createElement("div");g.innerText="New quantity",g.className=`AtOnceQuantityLabelSmall${b}`;let f=document.createElement("span");f.innerHTML=e9,f.className=`AtOnceQuantityButtons${b} AtOnceFlexCenter${b}`;let A=document.createElement("span");A.innerHTML=eO,A.className=`AtOnceQuantityButtons${b} AtOnceFlexCenter${b}`;let x=document.createElement("input");x.type="number",x.min=1;let O=1;e.quantity&&Number(e.quantity)>1&&(O=Number(e.quantity)),x.value=O,x.step=1,x.className=`AtOnceQuantityInput${b} smaller AtOnceFlexCenter${b}`,t&&(x.addEventListener("keyup",function(){let t=x.value;t>0||(t=0),o||0!=t||q(n),e.quantity=t,X()}),A.addEventListener("click",function(){let t=x.value;t++,x.value=t,e.quantity=t,X()}),f.addEventListener("click",function(){let t=x.value;t>0&&t--,o||0!=t||q(n),x.value=t,e.quantity=t,X()})),h.appendChild(g),h.appendChild(_),_.appendChild(f),_.appendChild(x),_.appendChild(A),i.appendChild(a),i.appendChild(p),i.appendChild(h),M.appendChild(i)}j.className=`AtOnceSearchInput${b} full`,j.placeholder="Search new products",j.id="AtOnceSearchInputProducts",j.addEventListener("keyup",function(){F.then(()=>{if(R){if(z.innerHTML="",j.value){let e=R.search(j.value),t=[];if(e.item)t.push(e);else for(let o of e)t.push(o.item);t.length?G(t,z):G(E,z)}else G(E,z)}})}),J.appendChild(j),l.appendChild(d),l.appendChild(M),l.appendChild(J),l.appendChild(U);let Z=e2.line_items;if(Z&&Z.length){for(let W of Z){let Y=!0;!1!==W.product_exists&&W.variant_id||(Y=!1),n+=Number(W.fulfillable_quantity)*Number(W.price),t.push({line_item:W.id,id:W.variant_id,title:W.title,option:W.variant_title,price:W.price,product_id:W.product_id,variant_title:W.variant_title,is_editable:Y,img:W.img,quantity:W.fulfillable_quantity,hasOnlyDefaultVariant:W.hasOnlyDefaultVariant})}o=JSON.parse(JSON.stringify(t)),ee()}function X(){let i=!0,a=0,l=0;for(let p of t)a+=Number(p.quantity),l+=Number(p.price)*Number(p.quantity);if(f.value){if($.disabled=!1,$.classList.remove("red"),0==a&&"edit_cancel"==e)$.innerText="Cancel & Send Gift Card";else{let r=Number(Number(n).toFixed(2))-Number(Number(l).toFixed(2));r>0?$.innerText="Edit & Send Gift Card":r<0?$.innerText="Edit & Send Invoice":$.innerText="Edit Order"}}else $.disabled=!0;if(o.length!==t.length)d.classList.add("visible");else{let c=o.length;for(let s=0;s<c;s++){let u=o[s],v=t[s];if(u.quantity!==v.quantity){i=!1;break}}!1==i&&d.classList.add("visible")}!0==i&&o.length==t.length&&d.classList.remove("visible")}function ee(){M.innerHTML="";let e=t.length;for(let o=0;o<e;o++){let n=t[o],i=n.line_item;!1===n.is_editable?Q(n,!1,i,o):Q(n,!0,i,o)}X()}eF.innerHTML="",eF.appendChild(l)}}function t0(e,t,o,n){let i="",a=e.shipping_zip,l=e.billing_zip,p="";null!=a?p=a:null!=l&&(p=l);let r=e.order_number;function c(t,o){let n=document.createElement("div");n.className=`AtOnceNoSelect${b}${o?` AtOnceTextLargeMargin${b}`:""}`;let i=document.createElement("div");i.className=`AtOnceFlexSpacedNoAlign${b} AtOnceQuickButtonPaddedMore${b}`;let a=document.createElement("div");a.className=`AtOncePositionRelative${b}`;let l="",p=e.line_items,r=p.length,c=e.fulfillments;if(c&&c.length){for(let s of p)if(s.img){let $=s.id,m=s.hasOnlyDefaultVariant;for(let h of c){let _=h.line_items;if(_&&_.length)for(let g of _)g.id==$&&(g.img=s.img,g.hasOnlyDefaultVariant=m)}}}for(let f of p)if(f.img){l=f.img;break}let A=document.createElement("div");A.className=`AtOnceProductImage${b}`,l?A.style.backgroundImage=`url(${l})`:A.innerHTML=ex;let x=document.createElement("div");x.className=`AtOnceProductQuantityText${b} AtOnceProductQuantityTextTwo${b}`,a.appendChild(x),a.appendChild(A),1!==r?r=`+${r-1}`:x.remove(),x.innerText=r;let O=document.createElement("div");O.className=`AtOnceFlexSpacedOrder${b}`;let C=document.createElement("div");C.className=`AtOnceFlexSpacedNoAlign${b}`;let y=document.createElement("div");y.className=`AtOnceSubTextBold${b} AtOnceTextColorThree${b}`,y.innerText=`${e.name}`;let S=e.fulfillment_status;"paid"!==e.financial_status?S=e.financial_status:S?"partial"==S&&(S="Partially_fulfilled"):S="Unfulfilled",S=K(S);let T=["gray","gray","gray","gray","blue","gray"],M="",P=0;for(let w of[["Unfulfilled"],["Expired","Voided","On hold","Authorized","Refunded"],["Pending","In progress","Scheduled"],["Partially paid","Partially fulfilled","Partial"],["Paid","Fulfilled"],["Partially refunded"]])w.includes(S)&&(M=T[P]),P+=1;e.cancelled_at&&(M="gray",S="Cancelled");let k=document.createElement("div");k.className=`AtOnceSubTag${b} ${M}`,k.innerText=S,C.appendChild(y),C.appendChild(k);let L=document.createElement("div");L.className=`AtOnceFlexSpacedNoAlign${b}`;let E=document.createElement("div");E.className=`AtOnceSubText${b} AtOnceTextColorNine${b}`,E.innerText=`${B(e.total_price_set.presentment_money.currency_code)}${N(e.total_price_set.presentment_money.amount)}`;let H=document.createElement("div");H.className=`AtOnceSubText${b} AtOnceTextColorNine${b}`,H.innerText=e8(Date.parse(e.created_at));let I=document.createElement("div");I.className=`AtOnceFlex${b} AtOnceTextLargeMargin${b}`;let R=document.createElement("button");R.className=`AtOnceMainButton${b} AtOnceMainButtonSmall${b} AtOnceSecondaryButton${b}`,R.innerText=t[0],"Help"==t[0]?R.addEventListener("click",function(){t$(),u()}):"View"==t[0]?R.addEventListener("click",function(){t$(),v()}):"Track"==t[0]&&R.addEventListener("click",function(){t$(),d()});let U=document.createElement("button");return U.className=`AtOnceMainButton${b} AtOnceMainButtonSmall${b} AtOnceSecondaryButton${b}`,U.innerText="Track","Help"==t[1]?U.addEventListener("click",function(){t$(),u()}):"View"==t[1]?U.addEventListener("click",function(){t$(),v()}):"Track"==t[1]&&U.addEventListener("click",function(){t$(),d()}),I.appendChild(R),I.appendChild(U),L.appendChild(E),L.appendChild(H),O.appendChild(C),O.appendChild(L),O.appendChild(I),i.appendChild(a),i.appendChild(O),n.appendChild(i),n}i=`${r=`${r}`.replace(/\s/g,"").replace(/\D/g,"").trimStart().trimEnd().toUpperCase()}_atonce_${p=`${p}`.replace(/\s/g,"").trimStart().trimEnd().toUpperCase()}`;let s=c(["Help","Track"]);function u(){e.shopify_store=t,e2=e,eT=!0;let a=document.createElement("div");a.className=`AtOnceContainerPaddedTopSmall${b}`;let l=c(["View","Track"]),p=document.createElement("div"),r=document.createElement("div");r.className=`AtOnceSubHeadingSmall${b} AtOnceSubHeadingMarginSmall${b} AtOnceTextColorSeven${b}`,r.innerText="Quick help";let s=document.createElement("div");if(tC=document.createElement("div"),ec.length){let u=JSON.parse(JSON.stringify(ec));for(let d of(i&&function e(t,o){try{for(let n of t)n.text?-1!==n.text.indexOf("{{return_portal}}")&&(n.text=e5(n.text,"{{return_portal}}",`${eM}?order=${o}`)):n.link&&-1!==n.link.indexOf("{{return_portal}}")&&(n.link=e5(n.link,"{{return_portal}}",`${eM}?order=${o}`)),n.sub_actions&&e(n.sub_actions,o)}catch(i){}}(u,i),u))if(d.actions){let v=d.actions;for(let $ of u)-1!==v.indexOf($.id)&&($.is_actioned=!0)}for(let m of u)!0!==m.is_actioned&&t9(m,s,!1,!1,r,s,!1,u,"Quick help",!0,!0)}p.appendChild(r),p.appendChild(s),o.style.display="none",to.innerHTML=`Order ${e.name}`,to.className=`AtOnceSubHeading${b}`,a.appendChild(l),a.appendChild(p),n.innerHTML="",n.appendChild(a)}function d(){e.shopify_store=t,e2=e,eT=!0;let i=document.createElement("div");i.className=`AtOnceContainerPaddedTopSmall${b}`;let a=c(["Help","View"]),l=document.createElement("div"),p=e.fulfillments,r=e.shipping_address;function s(e){let t=document.createElement("div");t.className=`AtOnceContainerPadded${b} AtOnceContainerSmallTopPadding${b} AtOnceContainerNoBottomPadding${b}`;let o=document.createElement("div");o.className=`AtOnceTriHeading${b} AtOnceTextColorThree${b} AtOnceMarginBottomMedium${b}`;let n=document.createElement("div");n.className=`AtOnceContainerPaddedBottom${b}`,t.appendChild(o),t.appendChild(n);let i=!0,a=e.tracking_numbers,l=e.tracking_urls,p=0;try{p=a.length>l.length?a.length:l.length}catch(r){}function c(o,a,l,r,c,s){if(o){let u=document.createElement("div");if(u.className=`AtOnceFlex${b} AtOnceTextColorThree${b} AtOnceBreakAll${b} AtOnceContainerPaddedBottomSmall${b}`,e.tracking_company&&"Other"!==e.tracking_company&&c){let d=document.createElement("div");d.className=`AtOnceBold${b}`,d.innerText=`Sent via ${e.tracking_company}`,u.appendChild(d)}else if(c&&"Other"==e.tracking_company&&e.updated_at){i=!1;let v=document.createElement("div");v.className=`AtOnceTextColorNine${b}`,v.innerText=`Updated ${e8(Date.parse(e.updated_at))}`,u.appendChild(v)}let $=document.createElement("div");if(r&&($.className=`AtOnceTextColorNine${b} AtOnceMarginLeft${b}`),s?$.innerHTML=`${1==p&&(s||l)?"":"Tracking: "}<a href="${o}" target="_blank" rel="noopener noreferrer">${s}</a>`:l?$.innerHTML=`<a href="${o}" target="_blank" rel="noopener noreferrer">${a}</a>`:$.innerText=`${a} ${r?e8(Date.parse(o)):o}`,1==p&&(s||l)){let m=t.children[t.childElementCount-1];m.children[m.childElementCount-1].insertAdjacentElement("afterbegin",$)}else u.appendChild($),n.appendChild(u)}}c(e.created_at,"Shipped",!1,!0,!0),!0==i&&c(e.updated_at,"Updated",!1,!0);try{if(p>0)for(let s=0;s<p;s++)l[s]&&a[s]?c(l[s],"Tracking url",!0,!1,!1,a[s]):a[s]?c(a[s],"Tracking no.",!1,!1):l[s]&&c(l[s],"Tracking url",!0,!1,!1)}catch(u){}let d=e.line_items;if(d&&d.length)for(let v of(o.innerText=`${K(e.display_status)}`,d)){let $=document.createElement("div");$.className=`AtOnceFlex${b} AtOnceMarginBottomMedium${b}`;let m=document.createElement("div");m.className=`AtOncePositionRelative${b}`;let h=document.createElement("div");h.className=`AtOnceProductQuantityText${b}`,h.innerText=v.quantity;let _=document.createElement("div");_.className=`AtOnceProductImage${b}`,v.img?_.style.backgroundImage=`url(${v.img})`:_.innerHTML=ex,m.appendChild(h),m.appendChild(_);let g=document.createElement("div");g.className=`AtOnceFlexSpacedProductTitle${b}`;let f=document.createElement("div");f.className=`AtOnceSubTextBold${b} AtOnceTextColorThree${b}`,f.innerText=v.title?v.title:"";let A=document.createElement("div");A.className=`AtOnceSubText${b} AtOnceTextColorNine${b} AtOnceUserSelect${b}`;let x="";!1==v.hasOnlyDefaultVariant&&v.variant_title&&(x=v.variant_title),A.innerText=x,g.appendChild(f),g.appendChild(A),$.appendChild(m),$.appendChild(g),t.appendChild($)}return t}if(p&&p.length)for(let u of p){let d=s(u);l.appendChild(d)}else{let v=document.createElement("div");v.className=`AtOnceContainerPadded${b} AtOnceContainerSmallTopPadding${b} AtOnceContainerNoBottomPadding${b} AtOnceSubTextLarge${b}`;let $=Date.parse(e.created_at);Date.now()-$>432e6?v.innerHTML=`<p>Thanks for your patience!</p><p>Your order is likely still in production.</p><p>If you don’t get any updates after 3 more days, please message us & we’ll find your order.</p>`:v.innerHTML=`<p>Thanks for your patience!</p><p>Your order is still in production.</p><p>We’ll send your tracking info once it’s shipped.</p>`,l.appendChild(v)}let m=document.createElement("div");if(m.className=`AtOnceContainerPadded${b} AtOnceContainerNoBottomPadding${b}`,r){function h(e,t){return r[`${e}`]?`${t?" ":""}${r[`${e}`]}`:""}let _=document.createElement("div");_.className=`AtOnceSubHeadingSmall${b} AtOnceTextColorSeven${b}`,_.innerText="Shipping address";let g=document.createElement("div");g.className=`AtOnceSubText${b} AtOnceTextColorThree${b} AtOnceSubTextMediumMargin${b}`;let f=document.createElement("div");f.innerText=`${h("address1")}${h("address2",!0)}`;let A=document.createElement("div");A.innerText=`${h("city")}${h(`${r.province_code?"province_code":"province"}`,!0)}${h("zip",!0)}`;let x=document.createElement("div");x.innerText=`${h("country")}`,g.appendChild(f),g.appendChild(A),g.appendChild(x),m.appendChild(_),m.appendChild(g)}o.style.display="none",to.innerHTML=`Order ${e.name}`,to.className=`AtOnceSubHeading${b}`,i.appendChild(a),i.appendChild(l),i.appendChild(m),n.innerHTML="",n.appendChild(i)}async function v(){e.shopify_store=t,e2=e,eT=!0;let o=e.line_items,i=[];if(e.line_items_returned&&e.line_items_returned.length){let a=e.line_items_returned;for(let l of a){let p=1;l.quantity&&(p=Number(l.quantity)),isNaN(p)&&(p=1),i.push({id:l.id,line_item:l.line_item,product_id:l.product_id,quantity:p})}}te.style.display="",n.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerHTML=`Order ${e.name}`,to.className=`AtOnceSubHeading${b}`,tn.innerText="",tn.style.display="none";let r=document.createElement("div");r.className=`AtOnceContainerPadded${b}`;let s=document.createElement("div");for(let u of(s.className=`AtOnceContainerPaddedTopSmall${b}`,o))try{let d=document.createElement("div");d.className=`AtOnceFlexSpacedNoAlign${b} AtOnceMarginBottomMedium${b}`;let v=document.createElement("div");v.className=`AtOncePositionRelative${b}`;let $=u.img,m=u.title,h=u.customer_paid_amount,_=u.customer_paid_currency,g="";!1==u.hasOnlyDefaultVariant&&u.variant_title&&(g=u.variant_title);let f=document.createElement("div");f.className=`AtOnceProductQuantityText${b}`,f.innerText=u.quantity;let A=document.createElement("div");A.className=`AtOnceProductImage${b}`,$?A.style.backgroundImage=`url(${$})`:A.innerHTML=ex,v.appendChild(f),v.appendChild(A);let x=document.createElement("div");x.className=`AtOnceFlexSpacedProductTitle${b}`;let O=document.createElement("div");O.className=`AtOnceTriHeading${b} AtOnceTextColorThree${b}`,O.innerText=m;let C=document.createElement("div");C.className=`AtOnceSubText${b} AtOnceTextColorNine${b} AtOnceUserSelect${b}`,C.innerText=g,x.appendChild(O),x.appendChild(C);let y=document.createElement("div");y.className=`AtOnceSubText${b} AtOnceTextColorFive${b}`,y.innerText=`${B(_)}${N(h)}`,d.appendChild(v),d.appendChild(x),d.appendChild(y),s.appendChild(d)}catch(S){}let T=document.createElement("div");function M(t,o,n){try{let i=e[`${o}`];if(i&&i.presentment_money){let a=i.presentment_money.amount;if("Discount"==t&&0==Number(a));else{let l=document.createElement("div");l.className=`AtOnceFlexSpacedNoAlign${b} AtOnceMarginBottomSmall${b}${n?` AtOnceContainerPaddedTopSmall${b}`:""}`;let p=document.createElement("div");p.className=`${n?" AtOnceTriHeading":"AtOnceSubText"}${b} AtOnceTextColorThree${b}`,p.innerText=t;let r=document.createElement("div");r.className=`${n?" AtOnceTriHeading":"AtOnceSubText"}${b} AtOnceTextColorFive${b}`,0==Number(a)?r.innerText="Free":r.innerText=`${"Discount"==t?"- ":""}${B(i.presentment_money.currency_code)}${N(a)}`,l.appendChild(p),l.appendChild(r),T.appendChild(l)}}}catch(c){}}if(T.className=`AtOnceContainerPaddedTopMedium${b}`,M("Subtotal","total_line_items_price_set"),M("Discount","total_discounts_set"),M("Shipping","total_shipping_price_set"),M("Taxes","total_tax_set"),M("Total","total_price_set",!0),s.appendChild(T),e.self_service_gift_cards&&e.self_service_gift_cards.length){let P=e.self_service_gift_cards,w=document.createElement("div");w.className=`AtOnceContainerPaddedTopLarge${b}`;let k=document.createElement("div");k.className=`AtOnceSubHeadingSmall${b} AtOnceTextColorSeven${b} AtOnceSubTextMarginBottom${b}`,k.innerText="Gift Cards",w.appendChild(k);let L=B(e.presentment_currency);for(let E of P){let H=document.createElement("div");H.className=`AtOnceFlex${b} AtOnceMarginBottomMedium${b}`;let I=document.createElement("div");I.className=`AtOnceFlexSpacedNoAlign${b}`;let R=document.createElement("a");R.target="_blank",R.rel="noopener noreferrer",R.href=`${q||e.shopify_store}/discount/${E.code}?ref=atonce`,R.innerText=`${E.code}`;let K=document.createElement("div");K.className=`AtOnceSubText${b} AtOnceTextColorFive${b}`,K.innerText=`${L}${Number(E.presentment_amount).toFixed(2)}`,I.appendChild(R),I.appendChild(K),H.appendChild(I),w.appendChild(H)}s.appendChild(w)}if(e.self_services&&e.self_services.length){let U=e.self_services,z=document.createElement("div");z.className=`AtOnceContainerPaddedTopLarge${b}`;let G=document.createElement("div");for(let V of(G.className=`AtOnceSubHeadingSmall${b} AtOnceTextColorSeven${b} AtOnceSubTextMarginBottom${b}`,G.innerText="Returns",z.appendChild(G),U)){let D=document.createElement("div");D.className=`AtOnceFlex${b} AtOnceMarginBottomMedium${b}`;let F=document.createElement("div");F.className=`AtOnceFlexSpacedNoAlign${b}`;let J=document.createElement("a");J.target="_blank",J.rel="noopener noreferrer",J.href=`${eM}?return=${V.return}`,J.innerText=`${V.return}`,F.appendChild(J),D.appendChild(F),z.appendChild(D)}s.appendChild(z)}r.appendChild(s);let j=c(["Help","Track"],!0);n.innerHTML="",n.appendChild(j),n.appendChild(r)}o.appendChild(s)}async function tx(e){if(eT=!1,eS.length&&!e){let t=t$();for(let o of eS)if(o){let n=o[1],i=o[0];t0(i,n,t,eF)}eF.innerHTML="",eF.appendChild(t)}else tm(!0)}async function tO(){let e=document.createElement("div");if(eF.appendChild(e),0==eS.length&&await tm(!1,!0),eS.length){let t=document.createElement("div");t.innerText="Your orders",t.className=`AtOnceSubHeadingSmall${b} AtOnceTextColorSeven${b} AtOnceSubHeadingMargin${b}`,e.appendChild(t);let o=eS.length,n=eS.slice(0,3);for(let i of n)if(i){let a=i[1],l=i[0];t0(l,a,e,eF)}if(o>3){let p=document.createElement("div");p.className=`AtOnceFlexCenter${b} AtOnceContainerPaddedLess${b} AtOnceContainerPaddedTopTiny${b}`;let r=document.createElement("button");r.className=`AtOnceMainButton${b} AtOnceSecondaryButton${b} AtOnceTertiaryButton${b} AtOnceQuaternaryButton${b}`,r.innerText="View All Orders",r.addEventListener("click",function(){tx()}),p.appendChild(r),e.appendChild(p)}}}function t9(e,t,o,n,i,a,l,p,r,c,s){try{let u=!1;try{e2&&(e2.fulfillments&&e2.fulfillments.length||e2.cancelled_at||Number(e2.total_outstanding))&&(u=!0)}catch(d){}let v=null;try{v=e.action}catch($){}if(!0==u&&("edit_add"==v||"edit_remove"==v||"edit_shipping_address"==v||"edit_cancel"==v));else{let m="div";"link"==e.type?m="a":"map"==e.type?m="map":"text"==e.type?m="text":"button"==e.type&&(m="button");let h=document.createElement("a"==m?"a":"div");if(h.className=`AtOnceQuickButton${b}`,"a"==m){h.target="_blank",h.rel="noopener noreferrer";let _=e.link;_?h.href=`${_}`:h.href="https://atonce.com?utm_medium=self_service&utm_campaign=missing_link",h.classList.add(`AtOnceQuickButtonLink${b}`)}else if("map"==m){let g=e.actions,f=e.actions_heading,A=e.sub_action;h.addEventListener("click",function(){ty(g,f,!0,A)})}else if("text"==m){let x=e.text,O=e.heading,C=e.sub_actions;h.addEventListener("click",function(){let o=document.createElement("div");if(o.className=`AtOnceTextContainer${b}`,o.innerHTML=x,i&&(i.innerText=O),a.innerHTML="",a.appendChild(o),C){let s=document.createElement("div");try{for(let u of C)t9(u,s,!0,n,i,a,l,p,r)}catch(d){}a.appendChild(s)}if("search"==e.tri_action){try{tC.remove()}catch(v){}t_(a,!0,e.heading,e.tri_action)}else t_(a,!1,e.heading,e.tri_action);if(!0!==c&&ti.push({l:p,t:r,t_q:n,t_s:l}),n&&l)try{tC.remove()}catch($){}if(!0==c)try{t.scrollIntoView({behavior:"smooth"})}catch(m){}})}else"button"==m&&("manage_orders"==v?h.addEventListener("click",function(){tg(!1)}):"edit_add"==v?h.addEventListener("click",function(){tA("edit_add")}):"edit_remove"==v?h.addEventListener("click",function(){tA("edit_remove")}):"edit_shipping_address"==v?h.addEventListener("click",function(){!function e(){if(e2){let t=e2.shipping_address,o=JSON.parse(JSON.stringify(t)),n=document.createElement("div");n.className=`AtOnceMainShopStickyChangesContainer${b} AtOnceFlexCenter${b}`;let i=document.createElement("button");i.className=`AtOnceMainButton${b} AtOncePrimaryButton${b}`,i.innerText="Change Address";let a=document.createElement("div");function l(e,t){setTimeout(function(){try{let o=i.innerText;"Changed Address"!==o&&"Address Change Failed"!==o&&(i.innerText=`${e} (${t}/3)`)}catch(n){}},2e3*t)}a.style.display="none",a.className=`AtOnceLoadingSpinner${b} bottomed`,i.addEventListener("click",function(){a.style.display="",i.disabled=!0,i.classList.remove("red"),l("Confirming Address",1),l("Updating Package",2),l("Changing Address",3),k("edit_shipping_address",{store:e2.shopify_store,order:e2.id,address:t}).then(e=>{e&&e.success?(a.style.display="none",i.disabled=!1,i.classList.add("green"),i.innerText="Changed Address",setTimeout(function(){try{te.click()}catch(e){}},2500)):(i.classList.add("red"),a.style.display="none",i.innerText="Address Change Failed")})}),n.appendChild(a),n.appendChild(i);let p=[];te.style.display="",eF.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerHTML="Change Address",to.className=`AtOnceSubHeading${b}`,tn.innerText="",tn.style.display="none";let r=document.createElement("div");r.className=`AtOnceContainerPadded${b} AtOnceContainerNoBottomPadding${b}`;let c=P,s=t.country_code,u=t.country,d=[];for(let v of M)d.push(`<option value="${v.alpha2}">${v.country}</option>`);let $="";for(let m of d)-1==m.indexOf(`value="${s}"`)&&($+=m);c=$+c,s&&u&&(c=`<option value="${s}">${u}</option>`+c);let h=[{name:"Name",value:"name",required:!0,type:"text"},{name:"Address",value:"address1",required:!0,type:"text"},{name:"Apartment, suite, etc.",value:"address2",required:!1,type:"text"},{name:"City",value:"city",required:!0,type:"text"},{name:"State/Province",value:"province_code",required:!0,type:"text"},{name:"ZIP/Post code",value:"zip",required:!0,type:"text"},{name:"Country",value:"country_code",required:!0,options:c,type:"text"},{name:"Company",value:"company",required:!1,maxLength:35,type:"text"},{name:"Phone",value:"phone",required:!1,type:"tel"},];if(t)for(let _ of h){let g="";t[`${_.value}`]&&(g=t[`${_.value}`]),g&&(_.default=g)}let f="l",A=document.createElement("div"),x="";for(let O of h){let C=document.createElement("div");if(A.appendChild(C),"l"==f)f="r",C.className=`AtOnceInputSubContainer_left${b}`;else{f="l";let y=document.createElement("div");y.className=`AtOnceInputSubContainer_clear${b}`,A.appendChild(y),C.className=`AtOnceInputSubContainer_right${b}`}let S="",T=document.createElement("label");if(T.htmlFor=O.value,T.innerText=`${O.name}`,T.className=`AtOnceDestinationLabel${b}`,O.options||"province_code"==O.value){if((S=document.createElement("select")).className=`AtOnceDestinationInput${b}`,O.options){if(S.innerHTML=O.options,t.country_code){if(x.innerHTML=w[`${t.country_code}`],t.province_code){x.value=t.province_code;try{let L=new Event("change");x.dispatchEvent(L)}catch(E){}}w[`${t.country_code}`]?x.disabled=!1:x.disabled=!0}else x.disabled=!0;S.addEventListener("change",function(){x.innerHTML=w[`${S.value}`],w[`${S.value}`]?x.disabled=!1:x.disabled=!0})}else x=S}else(S=document.createElement("input")).className=`AtOnceDestinationInput${b}`,S.type=O.type,S.name=O.value,O.maxLength&&(S.maxLength=O.maxLength);function N(){i.innerText="Change Address",i.disabled=!1,i.classList.remove("red"),B(),!S.value&&O.required?S.classList.add(`atonce_input_red${b}`):S.classList.remove(`atonce_input_red${b}`)}O.default&&(S.value=O.default),S.addEventListener("keyup",function(){B()}),S.addEventListener("change",function(){t[`${O.value}`]=S.value,N()}),N(),p.push({input:S,required:O.required,value:O.value,name:O.name}),C.appendChild(T),C.appendChild(S)}function B(){let e=!0;for(let[i,a]of Object.entries(o))if(t[`${i}`]!==o[`${i}`]){e=!1;break}!0==e?n.classList.remove("visible"):n.classList.add("visible")}A.style.display="",r.appendChild(A),r.appendChild(n),eF.innerHTML="",eF.appendChild(r)}}()}):"edit_cancel"==v&&h.addEventListener("click",function(){tA("edit_cancel")}));if("map"==m||"text"==m||"button"==m||"link"==m){let y=e.id;h.addEventListener("click",function(){try{k("update_frequency",{store:Q,id:y,ol:eT,u:F,f:J}),J+=.1,F=!1}catch(e){}})}let S=document.createElement("div");S.className=`AtOnceQuickLinkButtonHeaders${b}`;let T=document.createElement("div");if(T.className=`AtOnceTriHeading${b} AtOnceTextColorThree${b}`,T.innerText=e.heading?e.heading:e.actions_heading,S.appendChild(T),e.subheading){let L=document.createElement("div");L.className=`AtOnceSubText${b} AtOnceTextColorSeven${b}`,L.innerText=e.subheading,S.appendChild(L)}else(n||s)&&!0!==o&&h.classList.add(`AtOnceQuickButtonPadded${b}`);if(e.icon){let E=document.createElement("div");E.className=`AtOnceQuickIcon${b}`,E.innerHTML=e_[`${e.icon}`],h.appendChild(E)}h.appendChild(S);let N=document.createElement("div");N.className=`AtOnceMarginLeft${b}`,N.innerHTML=e0,h.appendChild(N),t.appendChild(h)}}catch(B){}}tm(!1,!0);let tC="";function t1(e,t){let o=document.createElement("div");o.id=`AtOnceContainerHelpCenterSearch${b}`,o.className=`AtOnceContainerPaddedTopSmall${b}`;let n=document.createElement("div"),i=Date.now(),a=document.createElement("div");a.className=`AtOncePositionRelative${b} AtOnceFlexTitle${b}`;let l=document.createElement("div");l.className=`AtOnceSearchInputIcon${b}`,l.innerHTML=eC;let p=document.createElement("input");p.id="AtOnceMainSearchInput",p.type="text",p.className=`AtOnceSearchInput${b} AtOnceSearchInputIconed${b}`,p.placeholder="Search instant answers",function e(t,o,n){try{let i=[];if(o||!(ea&&ea.length)&&ep.length){if(t.innerHTML="",o){let a=tc.search(o);if(a.item)i.push(a);else{a.sort(function(e,t){return t.f-e.f});let l=[];function p(){if(n&&n.length&&a.length)for(let e of a){let t=e.id;-1==n.findIndex(function(e){return e==t})&&l.push(e)}}if(p(),l.length)for(let r of l)try{if(i.length>5)break;i.push(r.item)}catch(c){}else for(let s of(a=ep.sort(function(e,t){return t.f-e.f}),p(),l))try{if(i.length>5)break;i.push(s)}catch(u){}}}else i=ep.sort(function(e,t){return t.f-e.f});try{if(o&&i.length<5){let d=ep.sort(function(e,t){return t.f-e.f});for(let v of d){let $=v.id;if(i.length<5)-1==n.findIndex(function(e){return e==$})&&i.push(v);else break}let m=d.slice(0,5);for(let h of m){let _=h.id;if(i.length<5)-1==i.findIndex(function(e){return e.id==_})&&i.push(h);else break}}}catch(g){}let f=i.slice(0,5);for(let A of f)t9(A,t,!1,!1,"",t,!1,"","",!0)}}catch(x){}}(n,e,t),p.addEventListener("keyup",function(){try{let e=p.value,t=Date.now();t-i>500&&(i=t,ts(e,n,4))}catch(o){}}),a.appendChild(l),a.appendChild(p),o.appendChild(a),o.appendChild(n),eF.appendChild(o)}function ty(e,t,o,n,i){o?(eF.classList.add(`AtOnceContainerScrollMiddleHelpCenter${b}`),to.innerText="Instant Answers",to.className=`AtOnceSubHeading${b}`,tn.style.display="none",te.style.display=""):(eF.classList.remove(`AtOnceContainerScrollMiddleHelpCenter${b}`),te.style.display="none",to.className=`AtOnceMainHeading${b}`,to.innerText=eh.top_hi_text,tn.innerText=eh.top_hi_subtext,tn.style.display="");let a=document.createElement("div"),l=document.createElement("div");l.className=`AtOnceSubHeadingSmall${b} AtOnceSubHeadingMargin${b} AtOnceTextColorSeven${b}`,l.innerText=t||"";let p=document.createElement("div"),r=document.createElement("div");if(tC=r,"Quick links"==t){if(e.length)for(let c of e)c.icon&&t9(c,p,!1,o,l,p,n,e,t)}else if(eT){if(e.length){for(let s of e)for(let u of ec)if(u.id==s){t9(u,p,!1,o,l,p,n,e,t);break}}}else if(e.length){for(let d of e)for(let v of er)if(v.id==d){t9(v,p,!1,o,l,p,n,e,t);break}}if(a.appendChild(l),a.appendChild(p),o&&n)try{r.className=`AtOnceContainerPaddedTop${b}`,t9(n,r,!0,o,l,p,n,e,t),a.appendChild(r)}catch($){}eF.innerHTML="",eF.appendChild(a),"Quick links"==t?(t1(),tO(),ej()):t1(t,e),!0!==i&&ti.push({l:e,t:t,t_q:o,t_s:n})}te.addEventListener("click",function(){if(eT)tx();else{ti.pop();let e=ti[ti.length-1];e?ty(e.l,e.t,e.t_q,e.t_s,!0):ty(er,"Quick links"),eT=!1}});let tb=document.createElement("div");tb.className=`AtOncePoweredByContainer${b} AtOnceBottomContainer${b}`;let t3=document.createElement("div");t3.className=`AtOnceSubText${b} AtOnceTextColorSeven${b}`,t3.innerHTML=`<a href="https://atonce.com?utm_medium=self_service&utm_campaign=by_atonce" target="_blank" rel="noopener noreferrer" class="AtOncePoweredByLink${b}">Powered by <span class="AtOncePoweredByText${b}">AtOnce</span></a>`,tb.appendChild(t3),eD.appendChild(eW),eD.appendChild(eF),eD.appendChild(tb),eV.appendChild(eD);let t2=document.createElement("button");t2.className=`AtOnceChatButton${b}`,t2.appendChild(g),t2.ariaLabel="Open self service",t2.ariaHasPopup=!1;let tS=document.createElement("div");tS.innerHTML=z;let tT=document.createElement("div");function t4(){t=!1,t2.classList.remove(`AtOnceHideChatButton${b}`),!0==eu&&es.body.classList.remove(`AtOnceBody${b}`),eV.className=`AtOnceChatPrimaryContainer${b} AtOnceHidePrimaryContainer${b}`;try{n=Date.now(),localStorage.setItem("AtOnceLastUnreadMessage",n)}catch(e){}setTimeout(function(){!1==t&&(t2.style.display="",eV.style.display="none",AtOnceChatContainer.style.width="100px",AtOnceChatContainer.style.height="100px")},200)}function tM(){AtOnceChatContainer.style.width="100%",AtOnceChatContainer.style.height="100%",eV.style.display="",S.className=`AtOnceLiveChatMessagesContainer${b} hidden`,S.innerHTML="",setTimeout(function(){if(!0==t){t2.style.display="none";try{g.className=`AtOnceChatNotification${b} hidden`,ee&&(window.top.document.title=ee)}catch(e){}}},200),t=!0,ti=[],ty(er,"Quick links"),eV.style.cssText="",t2.classList.add(`AtOnceHideChatButton${b}`),!0==eu&&es.body.classList.add(`AtOnceBody${b}`),eV.className=`AtOnceChatPrimaryContainer${b} AtOnceShowPrimaryContainer${b}`}tT.className=`AtOnceCloseButtonMobile${b}`,tT.innerHTML=ey,tT.addEventListener("click",function(){t4()}),eV.appendChild(tT),tS.className=`AtOnceFlexCenter${b}`,t2.addEventListener("click",function(){if(!0==t)t4();else{if(i&&S.innerText)try{setTimeout(function(){try{th(i,a)}catch(e){}})}catch(e){}tM()}}),t2.appendChild(tS),eG.appendChild(S),eG.appendChild(eV),eG.appendChild(t2),setTimeout(function(){let e=document.getElementById("AtOnceChatContainer");e.contentDocument?es=e.contentDocument:e.contentWindow&&(es=e.contentWindow.document),es.head.appendChild(eE),es.body.appendChild(eG)})}catch(t5){}})}catch(ex){}}export{createAtOnceLiveChat};
