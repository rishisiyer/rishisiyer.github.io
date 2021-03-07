let csvdata = `id,name,type,address,city,zip,CO2
1,Arcola,Elementary,1820 Franwall Ave.,Silver Spring,20902,0.758
2,Ashburton,Elementary,6314 Lone Oak Dr.,Bethesda,20817,0.758
3,Bannockburn,Elementary,6520 Dalroy Lane,Bethesda,20817,0.758
4,Lucy V. Barnsley,Elementary,14516 Nadine Dr.,Rockville,20853,0.758
5,Beall,Elementary,451 Beall Ave.,Rockville,20850,0.758
6,Bel Pre,Elementary,13801 Rippling Brook Dr.,Silver Spring,20906,0.758
7,Bells Mill,Elementary,8225 Bells Mill Rd.,Potomac,20854,0.758
8,Belmont,Elementary,19528 Olney Mill Rd.,Olney,20832,0.758
9,Bethesda,Elementary,7600 Arlington Rd.,Bethesda,20814,0.758
10,Beverly Farms,Elementary,8501 Postoak Rd.,Potomac,20854,0.758
11,Bradley Hills,Elementary,8701 Hartsdale Ave.,Bethesda,20817,0.758
12,Brooke Grove,Elementary,2700 Spartan Rd.,Olney,20832,0.758
13,Brookhaven,Elementary,4610 Renn St.,Rockville,20853,0.758
14,Brown Station,Elementary,851 Quince Orchard Blvd.,Gaithersburg,20878,0.758
15,Burning Tree,Elementary,7900 Beech Tree Rd.,Bethesda,20817,0.758
16,Burnt Mills,Elementary,11211 Childs St.,Silver Spring,20901,0.758
17,Burtonsville,Elementary,15516 Old Columbia Pike,Burtonsville,20866,0.758
18,Candlewood,Elementary,7210 Osprey Dr.,Rockville,20855,0.758
19,Cannon Road,Elementary,901 Cannon Rd.,Silver Spring,20904,0.758
20,Carderock Springs,Elementary,7401 Persimmon Tree Lane,Bethesda,20817,0.758
21,Rachel Carson,Elementary,100 Tschiffely Square Rd.,Gaithersburg,20878,0.758
22,Cashell,Elementary,17101 Cashell Rd.,Rockville,20853,0.758
23,Cedar Grove,Elementary,24001 Ridge Rd.,Germantown,20876,1.001
24,Chevy Chase,Elementary,4015 Rosemary St.,Chevy Chase,20815,0.758
25,Clarksburg,Elementary,13530 Redgrave Pl.,Clarksburg,20871,1.243
26,Clearspring,Elementary,9930 Moyer Rd.,Damascus,20872,1.243
27,Clopper Mill,Elementary,18501 Cinnamon Dr.,Germantown,20874,1.001
28,Cloverly,Elementary,800 Briggs Chaney Rd.,Silver Spring,20905,0.758
29,Cold Spring,Elementary,9201 Falls Chapel Way,Potomac,20854,0.758
30,College Gardens,Elementary,1700 Yale Pl.,Rockville,20850,0.758
31,Cresthaven,Elementary,1234 Cresthaven Dr.,Silver Spring,20903,0.758
32,Capt. James E. Daly,Elementary,20301 Brandermill Dr.,Germantown,20876,1.001
33,Damascus,Elementary,10201 Bethesda Church Rd.,Damascus,20872,1.243
34,Darnestown,Elementary,15030 Turkey Foot Rd.,Gaithersburg,20878,0.758
35,Diamond,Elementary,4 Marquis Dr.,Gaithersburg,20878,0.758
36,Dr. Charles R. Drew,Elementary,1200 Swingingdale Dr.,Silver Spring,20905,0.758
37,DuFief,Elementary,15001 DuFief Dr.,Gaithersburg,20878,0.758
38,East Silver Spring,Elementary,631 Silver Spring Ave.,Silver Spring,20910,0.758
39,Fairland,Elementary,14315 Fairdale Rd.,Silver Spring,20905,0.758
40,Fallsmead,Elementary,1800 Greenplace Terr.,Rockville,20850,0.758
41,Farmland,Elementary,7000 Old Gate Rd.,Rockville,20852,0.758
42,Fields Road,Elementary,One School Dr.,Gaithersburg,20878,0.758
43,Flower Hill,Elementary,18425 Flower Hill Way,Gaithersburg,20879,0.758
44,Flower Valley,Elementary,4615 Sunflower Dr.,Rockville,20853,0.758
45,Forest Knolls,Elementary,10830 Eastwood Ave.,Silver Spring,20901,0.758
46,Fox Chapel,Elementary,19315 Archdale Rd.,Germantown,20876,1.001
47,Gaithersburg,Elementary,35 North Summit Ave.,Gaithersburg,20877,0.758
48,Galway,Elementary,12612 Galway Dr.,Silver Spring,20904,0.758
49,Garrett Park,Elementary,4810 Oxford St.,Kensington,20895,0.758
50,Georgian Forest,Elementary,3100 Regina Dr.,Silver Spring,20906,0.758
51,Germantown,Elementary,19110 Liberty Mill Rd.,Germantown,20874,1.001
52,William B. Gibbs,Elementary,Jr. 12615 Royal Crown Dr.,Germantown,20876,1.001
53,Glen Haven,Elementary,10900 Inwood Ave.,Silver Spring,20902,0.758
54,Glenallan,Elementary,12520 Heurich Rd.,Silver Spring,20902,0.758
55,Goshen,Elementary,8701 Warfield Rd.,Gaithersburg,20882,1.001
56,Great Seneca Creek,Elementary,13010 Dairymaid Dr.,Germantown,20874,1.001
57,Greencastle,Elementary,13611 Robey Rd.,Silver Spring,20904,0.758
58,Greenwood,Elementary,3336 Gold Mine Rd.,Brookeville,20833,1.001
59,Harmony Hills,Elementary,13407 Lydia St.,Silver Spring,20906,0.758
60,Highland,Elementary,3100 Medway St.,Silver Spring,20902,0.758
61,Highland View,Elementary,9010 Providence Ave.,Silver Spring,20901,0.758
62,Jackson Road,Elementary,900 Jackson Rd.,Silver Spring,20904,0.758
63,Jones Lane,Elementary,15110 Jones Lane,Gaithersburg,20878,0.758
64,Kemp Mill,Elementary,411 Sisson St.,Silver Spring,20902,0.758
65,Kensington Parkwood,Elementary,4710 Saul Rd.,Kensington,20895,0.758
66,Lake Seneca,Elementary,13600 Wanegarden Dr.,Germantown,20874,1.001
67,Lakewood,Elementary,2534 Lindley Terr.,Rockville,20850,0.758
68,Laytonsville,Elementary,21401 Laytonsville Rd.,Gaithersburg,20882,1.001
69,JoAnn Leleck ES at Broad Acres,Elementary,710 Beacon Rd.,Silver Spring,20903,0.758
70,Little Bennett,Elementary,23930 Burdette Forest Rd.,Clarksburg,20871,1.243
71,Luxmanor,Elementary,6201 Tilden Lane,Rockville,20852,0.758
72,(Located at Grosvenor Center,Elementary,5701 Grosvenor Ln.,Bethesda,20814,0.758
73,Thurgood Marshall,Elementary,12260 McDonald Chapel Dr.,Gaithersburg,20878,0.758
74,Maryvale,Elementary,1000 First St.,Rockville,20850,0.758
75,(Located at North Lake Center,Elementary,15101 Bauer Dr.,Rockville,20852,0.758
76,Spark M. Matsunaga,Elementary,13902 Bromfield Rd.,Germantown,20874,1.001
77,S. Christa McAuliffe,Elementary,12500 Wisteria Dr.,Germantown,20874,1.001
78,Ronald McNair,Elementary,13881 Hopkins Rd.,Germantown,20874,1.001
79,Meadow Hall,Elementary,951 Twinbrook Pkwy.,Rockville,20851,0.758
80,Mill Creek Towne,Elementary,17700 Park Mill Dr.,Rockville,20855,0.758
81,Monocacy,Elementary,18801 Barnesville Rd.,Dickerson,20842,1.243
82,Montgomery Knolls,Elementary,807 Daleview Dr.,Silver Spring,20901,0.758
83,New Hampshire Estates,Elementary,8720 Carroll Ave.,Silver Spring,20903,0.758
84,Roscoe R. Nix,Elementary,1100 Corliss St.,Silver Spring,20903,0.758
85,North Chevy Chase,Elementary,3700 Jones Bridge Rd.,Chevy Chase,20815,0.758
86,Oak View,Elementary,400 East Wayne Ave.,Silver Spring,20901,0.758
87,Oakland Terrace,Elementary,2720 Plyers Mill Rd.,Silver Spring,20902,0.758
88,Olney,Elementary,3401 Queen Mary Dr.,Olney,20832,0.758
89,William Tyler Page,Elementary,13400 Tamarack Rd.,Silver Spring,20904,0.758
90,Pine Crest,Elementary,201 Woodmoor Dr.,Silver Spring,20901,0.758
91,Piney Branch,Elementary,7510 Maple Ave.,Takoma Park,20912,0.758
92,Poolesville,Elementary,19565 Fisher Ave.,Poolesville,20837,1.001
93,Potomac,Elementary,10311 River Rd.,Potomac,20854,0.758
94,(Located at Radnor Center,Elementary,700 Radnor Rd.,Bethesda,20817,0.758
95,Judith A. Resnik,Elementary,7301 Hadley Farms Dr.,Gaithersburg,20879,0.758
96,Dr. Sally K. Ride,Elementary,21301 Seneca Crossing Dr.,Germantown,20876,1.001
97,Ritchie Park,Elementary,1514 Dunster Rd.,Rockville,20854,0.758
98,Rock Creek Forest,Elementary,8330 Grubb Rd.,Chevy Chase,20815,0.758
99,Rock Creek Valley,Elementary,5121 Russett Rd.,Rockville,20853,0.758
100,Rock View,Elementary,3901 Denfeld Ave.,Kensington,20895,0.758
101,Lois P. Rockwell,Elementary,24555 Cutsail Dr.,Damascus,20872,1.243
102,Rolling Terrace,Elementary,705 Bayfield St.,Takoma Park,20912,0.758
103,Rosemary Hills,Elementary,2111 Porter Rd.,Silver Spring,20910,0.758
104,Rosemont,Elementary,16400 Alden Ave.,Gaithersburg,20877,0.758
105,Bayard Rustin,Elementary,332 West Edmonston Dr.,Rockville,20852,0.758
106,Sequoyah,Elementary,17301 Bowie Mill Rd.,Derwood,20855,0.758
107,Seven Locks,Elementary,9500 Seven Locks Rd.,Bethesda,20817,0.758
108,Sherwood,Elementary,1401 Olneyâ€‘Sandy Spring Rd.,Sandy,20860,0.758
109,Sargent Shriver,Elementary,12518 Greenly Dr.,Silver Spring,20906,0.758
110,Flora M. Singer,Elementary,2600 Hayden Dr.,Silver Spring,20902,0.758
111,Sligo Creek,Elementary,500 Schuyler Rd.,Silver Spring,20910,0.758
112,Snowden Farm,Elementary,22500 Sweetspire Dr.,Clarksburg,20871,1.243
113,Somerset,Elementary,5811 Warwick Pl.,Chevy Chase,20815,0.758
114,South Lake,Elementary,18201 Contour Rd.,Gaithersburg,20877,0.758
115,Stedwick,Elementary,10631 Stedwick Rd.,Montgomery Village,20886,1.001
116,Stone Mill,Elementary,14323 Stonebridge View Dr.,North Potomac,20878,0.758
117,Stonegate,Elementary,14811 Notley Rd.,Silver Spring,20905,0.758
118,Strathmore,Elementary,3200 Beaverwood Lane,Silver Spring,20906,0.758
119,Strawberry Knoll,Elementary,18820 Strawberry Knoll Rd.,Gaithersburg,20879,0.758
120,Summit Hall,Elementary,101 West Deer Park Rd.,Gaithersburg,20877,0.758
121,Takoma Park,Elementary,7511 Holly Ave.,Takoma Park,20912,0.758
122,Travilah,Elementary,13801 DuFief Mill Rd.,North Potomac,20878,0.758
123,Twinbrook,Elementary,5911 Ridgway Ave.,Rockville,20851,0.758
124,Viers Mill,Elementary,11711 Joseph Mill Rd.,Silver Spring,20906,0.758
125,Washington Grove,Elementary,8712 Oakmont St.,Gaithersburg,20877,0.758
126,Waters Landing,Elementary,13100 Waters Landing Dr.,Germantown,20874,1.001
127,Watkins Mill,Elementary,19001 Watkins Mill Rd.,Montgomery Village,20886,1.001
128,Wayside,Elementary,10011 Glen Rd.,Potomac,20854,0.758
129,Weller Road,Elementary,3301 Weller Rd.,Silver Spring,20906,0.758
130,Westbrook,Elementary,5110 Allan Terr.,Bethesda,20816,0.758
131,Westover,Elementary,401 Hawkesbury Lane,Silver Spring,20904,0.758
132,Wheaton Woods,Elementary,4510 Faroe Pl.,Rockville,20853,0.758
133,Whetstone,Elementary,19201 Thomas Farm Rd.,Gaithersburg,20879,0.758
134,Wilson Wims,Elementary,12520 Blue Sky Dr.,Clarksburg,20871,1.243
135,Wood Acres,Elementary,5800 Cromwell Dr.,Bethesda,20816,0.758
136,Woodfield,Elementary,24200 Woodfield Rd.,Gaithersburg,20882,1.001
137,Woodlin,Elementary,2101 Luzerne Ave.,Silver Spring,20910,0.758
138,Wyngate,Elementary,9300 Wadsworth Dr.,Bethesda,20817,0.758
139,Argyle,Middle,2400 Bel Pre Rd.,Silver Spring,20906,0.758
140,John T. Baker,Middle,25400 Oak Dr.,Damascus,20872,1.243
141,Benjamin Banneker,Middle,14800 Perrywood Dr.,Burtonsville,20866,0.758
142,Briggs Chaney,Middle,1901 Rainbow Dr.,Silver Spring,20905,0.758
143,Cabin John,Middle,10701 Gainsborough Rd.,Potomac,20854,0.758
144,Roberto W. Clemente,Middle,18808 Waring Station Rd.,Germantown,20874,1.001
145,Eastern,Middle,300 University Blvd. East,Silver Spring,20901,0.758
146,William H. Farquhar,Middle,17017 Batchellors Forest Rd.,Olney,20832,0.758
147,Forest Oak,Middle,651 Saybrooke Oaks Blvd.,Gaithersburg,20877,0.758
148,Robert Frost,Middle,9201 Scott Dr.,Rockville,20850,0.758
149,Gaithersburg,Middle,2 Teachersâ€™ Way,Gaithersburg,20877,0.758
150,Herbert Hoover,Middle,8810 Postoak Rd.,Potomac,20854,0.758
151,Francis Scott Key,Middle,910 Schindler Dr.,Silver Spring,20903,0.758
152,Dr. Martin Luther King,Middle,13737 Wisteria Dr.,Germantown,20874,1.001
153,Kingsview,Middle,18909 Kingsview Rd.,Germantown,20874,1.001
154,Lakelands Park,Middle,1200 Main St.,Gaithersburg,20878,0.758
155,Col. E. Brooke Lee,Middle,11800 Monticello Ave.,Silver Spring,20902,0.758
156,A. Mario Loiederman,Middle,12701 Goodhill Rd.,Silver Spring,20906,0.758
157,Montgomery Village,Middle,19300 Watkins Mill Rd.,Montgomery Village,20886,1.001
158,Neelsville,Middle,11700 Neelsville Church Rd.,Germantown,20876,1.001
159,Newport Mill,Middle,11311 Newport Mill Rd.,Kensington,20895,0.758
160,North Bethesda,Middle,8935 Bradmoor Dr.,Bethesda,20817,0.758
161,Parkland,Middle,4610 West Frankfort Dr.,Rockville,20853,0.758
162,Rosa M. Parks,Middle,19200 Olney Mill Rd.,Olney,20832,0.758
163,John Poole,Middle,17014 Tom Fox Ave.,Poolesville,20837,1.001
164,Thomas W. Pyle,Middle,6311 Wilson Lane,Bethesda,20817,0.758
165,Redland,Middle,6505 Muncaster Mill Rd.,Rockville,20855,0.758
166,Ridgeview,Middle,16600 Raven Rock Dr.,Gaithersburg,20878,0.758
167,Rocky Hill,Middle,22401 Brick Haven Way,Clarksburg,20871,1.243
168,Shady Grove,Middle,8100 Midcounty Hwy.,Gaithersburg,20877,0.758
169,Silver Creek,Middle,3701 Saul Rd.,Kensington,20895,0.758
170,Silver Spring International,Middle,313 Wayne Ave.,Silver Spring,20910,0.758
171,Sligo,Middle,1401 Dennis Ave.,Silver Spring,20902,0.758
172,Takoma Park,Middle,7611 Piney Branch Rd.,Silver Spring,20910,0.758
173,Tilden,Middle,11211 Old Georgetown Rd.,Rockville,20852,0.758
174,Hallie Wells,Middle,11701 Little Seneca Parkway,Clarksburg,20871,1.243
175,Julius West,Middle,651 Great Falls Rd.,Rockville,20850,0.758
176,Westland,Middle,5511 Massachusetts Ave.,Bethesda,20816,0.758
177,White Oak,Middle,12201 New Hampshire Ave.,Silver Spring,20904,0.758
178,Earle B. Wood,Middle,14615 Bauer Dr.,Rockville,20853,0.758
179,Bethesdaâ€‘Chevy Chase,High,4301 Eastâ€‘West Hwy.,Bethesda,20814,0.758
180,Montgomery Blair,High,51 University Blvd. East,Silver Spring,20901,0.758
181,James Hubert Blake,High,300 Norwood Rd.,Silver Spring,20905,0.758
182,Winston Churchill,High,11300 Gainsborough Rd.,Potomac,20854,0.758
183,Clarksburg,High,22500 Wims Rd.,Clarksburg,20871,1.243
184,Damascus,High,25921 Ridge Rd.,Damascus,20872,1.243
185,Albert Einstein,High,11135 Newport Mill Rd.,Kensington,20895,0.758
186,Gaithersburg,High,101 Education Boulevard,Gaithersburg,20877,0.758
187,Walter Johnson,High,6400 Rock Spring Dr.,Bethesda,20814,0.758
188,John F. Kennedy,High,1901 Randolph Rd.,Silver Spring,20902,0.758
189,Col. Zadok Magruder,High,5939 Muncaster Mill Rd.,Rockville,20855,0.758
190,Richard Montgomery,High,250 Richard Montgomery Dr.,Rockville,20852,0.758
191,Northwest,High,13501 Richter Farm Rd.,Germantown,20874,1.001
192,Northwood,High,919 University Blvd. West,Silver Spring,20901,0.758
193,Paint Branch,High,14121 Old Columbia Pike,Burtonsville,20866,0.758
194,Poolesville,High,17501 West Willard Rd.,Poolesville,20837,1.001
195,Quince Orchard,High,15800 Quince Orchard Rd.,Gaithersburg,20878,0.758
196,Rockville,High,2100 Baltimore Rd.,Rockville,20851,0.758
197,Seneca Valley,High,19401 Crystal Rock Dr.,Germantown,20874,1.001
198,Sherwood,High,300 Olneyâ€‘Sandy Spring Rd.,Sandy,20860,0.758
199,Springbrook,High,201 Valleybrook Dr.,Silver Spring,20904,0.758
200,Watkins Mill,High,10301 Apple Ridge Rd.,Gaithersburg,20879,0.758
201,Wheaton,High,12401 Dalewood Dr.,Silver Spring,20906,0.758
202,Walt Whitman,High,7100 Whittier Blvd.,Bethesda,20817,0.758
203,Thomas S. Wootton,High,2100 Wootton Pkwy.,Rockville,20850,0.758`