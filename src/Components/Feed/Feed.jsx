import React, { useEffect, useState } from 'react'
import './Feed.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'
// import thumbnail3 from '../../assets/thumbnail3.png'
// import thumbnail4 from '../../assets/thumbnail4.png'
// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment/moment'


const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=0&key=[YOUR_API_KEY]

    // const fetchData = async () => {
    //     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    //     await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    // }

    const savedData = {
        "kind": "youtube#videoListResponse",
        "etag": "nMKNhbw17b39asQfyjUoEZEGRrQ",
        "items": [
          {
            "kind": "youtube#video",
            "etag": "lCYDnYcESbkzWUhoESf3EZSSKTU",
            "id": "5vsOv_bcnhs",
            "snippet": {
              "publishedAt": "2024-08-05T11:34:12Z",
              "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
              "title": "Chuttamalle | Devara Second Single | NTR | Janhvi Kapoor | Anirudh Ravichander | Shilpa Rao | 27 Sep",
              "description": "Here’s #Chuttamalle from Devara Part - 1 ft. NTR, Janhvi Kapoor. Written & Directed by Koratala Siva. The Film’s music is composed by Anirudh Ravichander. Grand Release on September 27th,2024\n\n#Devara #NTR30 #DevaraSecondSingle #ManOfMassesNTR \n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3SFV58z\nSpotify: https://bit.ly/3SxGlJ2\nHungama: https://bit.ly/4fAfaHq\nApple Music: https://bit.ly/3WRODh6\nGaana: https://bit.ly/3AdnnB5\nAmazon Prime Music: https://bit.ly/3WBgKjk\nWynk: https://bit.ly/46Coeay\nYouTube Music: https://bit.ly/3LRGEua\n------------------------------------\n🎶 Music Slate 🎶\nStarring : Saif Ali Khan, Janhvi Kapoor, Prakash Raj, Srikanth, Shine Tom Chacko\n\nMusic: Anirudh Ravichander\nDOP: Rathnavelu ISC\nProduction Designer : Sabu Cyril\nEditor: Sreekar Prasad\nProducer: Sudhakar Mikkilineni - Kosaraju Harikrishna\nDI: Annapurna Studios\nLyrical Video : Walls & Trends\nPRO:\nDigital Media: Nani\nTelugu: Vamsi Kaka\nMusic Label: T-Series\n\n\nMusic Credits \nSong Title : Chuttamalle \nComposed by Anirudh Ravichander \nLyrics - Ramajogayya Sastry \nVocals - Shilpa Rao \nChoreographer - Bosco Martis \nKeyboards, Synth & Rhythm Programmed by Anirudh Ravichander \nElectric & Acoustic Guitar, Charango - Keba Jeremiah \nSolo Violin - Ananthakrrishnan \nRhythm Produced by Shashank Vijay \nAdditional Rhythm & Percussions Programmed by Karthik Vamsi \nAdditional Keyboard Programmed by Arish, Beven, Narendar S \nMusic Advisor - Ananthakrrishnan \nCreative Consultant - Sajith Satya \nRecorded at Albuquerque Records, Chennai. \nEngineered by Srinivasan M, Shivakiran S \nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai \nMastered by Luca Pretolesi at Studio DMI, Las Vegas, Assisted by Alistair \nMusic Coordinator - Velavan B\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp:- https://whatsapp.com/channel/0029VaYvKJUGehEWUOwOio0q\n\nThanks Everyone for Watching Our Latest Telugu Song 2024. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/5vsOv_bcnhs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/5vsOv_bcnhs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/5vsOv_bcnhs/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/5vsOv_bcnhs/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "T-Series Telugu",
              "tags": [
                "Telugu New song",
                "Telugu Songs",
                "New Songs",
                "Songs Telugu",
                "T-Series",
                "Telugu Video Songs",
                "Latest telugu Songs",
                "telugu songs",
                "latest video",
                "Chuttamalle Lyricla Video",
                "Chuttamalle Devara",
                "Chuttamalle NTR",
                "Chuttamalle Janhvi Kapoor",
                "Chuttamalle Anirudh Ravichander",
                "Chuttamalle Shilpa Rao",
                "Chuttamalle New Song",
                "Chuttamalle Devara Second Single",
                "Devara Second Single",
                "ntr new song",
                "ntr song telugu",
                "ntr Latest songs",
                "Chuttamalle Telugu Song",
                "Anirudh Ravichander",
                "Ramajogayya Sastry"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Chuttamalle | Devara Second Single | NTR | Janhvi Kapoor | Anirudh Ravichander | Shilpa Rao | 27 Sep",
                "description": "Here’s #Chuttamalle from Devara Part - 1 ft. NTR, Janhvi Kapoor. Written & Directed by Koratala Siva. The Film’s music is composed by Anirudh Ravichander. Grand Release on September 27th,2024\n\n#Devara #NTR30 #DevaraSecondSingle #ManOfMassesNTR \n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3SFV58z\nSpotify: https://bit.ly/3SxGlJ2\nHungama: https://bit.ly/4fAfaHq\nApple Music: https://bit.ly/3WRODh6\nGaana: https://bit.ly/3AdnnB5\nAmazon Prime Music: https://bit.ly/3WBgKjk\nWynk: https://bit.ly/46Coeay\nYouTube Music: https://bit.ly/3LRGEua\n------------------------------------\n🎶 Music Slate 🎶\nStarring : Saif Ali Khan, Janhvi Kapoor, Prakash Raj, Srikanth, Shine Tom Chacko\n\nMusic: Anirudh Ravichander\nDOP: Rathnavelu ISC\nProduction Designer : Sabu Cyril\nEditor: Sreekar Prasad\nProducer: Sudhakar Mikkilineni - Kosaraju Harikrishna\nDI: Annapurna Studios\nLyrical Video : Walls & Trends\nPRO:\nDigital Media: Nani\nTelugu: Vamsi Kaka\nMusic Label: T-Series\n\n\nMusic Credits \nSong Title : Chuttamalle \nComposed by Anirudh Ravichander \nLyrics - Ramajogayya Sastry \nVocals - Shilpa Rao \nChoreographer - Bosco Martis \nKeyboards, Synth & Rhythm Programmed by Anirudh Ravichander \nElectric & Acoustic Guitar, Charango - Keba Jeremiah \nSolo Violin - Ananthakrrishnan \nRhythm Produced by Shashank Vijay \nAdditional Rhythm & Percussions Programmed by Karthik Vamsi \nAdditional Keyboard Programmed by Arish, Beven, Narendar S \nMusic Advisor - Ananthakrrishnan \nCreative Consultant - Sajith Satya \nRecorded at Albuquerque Records, Chennai. \nEngineered by Srinivasan M, Shivakiran S \nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai \nMastered by Luca Pretolesi at Studio DMI, Las Vegas, Assisted by Alistair \nMusic Coordinator - Velavan B\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp:- https://whatsapp.com/channel/0029VaYvKJUGehEWUOwOio0q\n\nThanks Everyone for Watching Our Latest Telugu Song 2024. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time."
              },
              "defaultAudioLanguage": "te"
            },
            "contentDetails": {
              "duration": "PT3M45S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "24631851",
              "likeCount": "563475",
              "favoriteCount": "0",
              "commentCount": "25131"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "3RvVcMUTKfo3kYcAqLBPt_Qa9iU",
            "id": "RgOEKdA2mlw",
            "snippet": {
              "publishedAt": "2024-08-05T12:30:19Z",
              "channelId": "UCBnxEdpoZwstJqC1yZpOjRA",
              "title": "Water Packet - Video Song | RAAYAN | Dhanush | Sun Pictures | A.R. Rahman | Santhosh Narayanan",
              "description": "Presenting the official video song \"Water Packet\" from the massive blockbuster #RAAYAN. \nSung by Santhosh Narayanan & Shweta Mohan, Lyrics by Gana Kadhar, \nMusic by A.R. Rahman & Written and Directed by Dhanush.\n--------------------------------------------------------------------------- \nListen to the \"Water Packet \" song on your favorite music service: \n\nSpotify - https://bit.ly/3VfiFL6\nApple Music - https://apple.co/3wFQBar\nGaana - https://bit.ly/4ausglC\nJio Saavn - https://bit.ly/3wDxVrS\nWynk - https://bit.ly/44UMO5u\nInstagram - https://bit.ly/4bPZqwZ\nHungama - https://bit.ly/4e5TFgS\nYT Music - https://bit.ly/44Z1Irm\n--------------------------------------------------------------------------- \nMusic Credits:\n\nMusic by A.R. Rahman\nSingers: Santhosh Narayanan, Shweta Mohan\nLyrics: Gana Kadhar\nMusic Supervisor: A.H. Kaashif\nProject Manager: Karthik Sekaran\nChoreographer: Baba baskar\n\nLanguage Supervisor \nAravind Crescendo\n\nMusicians\nFlute - Kamalakar\nGuitar - Keba Jeremiah\nNadaswaram - Mambalam Sivakumar\nRhythm - Krishna Kishore, Iniyan\nBass - Prashanth Venkat\n\nAdditional Programming\nSanthosh Dhayanidhi, Prashanth Venkat\n\nChoral Supervision\nSuryansh\n\nSound Engineers\nPanchathan Record Inn\nSenior Engineers\nSuresh Permal, Karthik Sekaran\nAssistant Engineers\nAravind Crescendo, Sathish V Saravanan\nPanchathan Studios, Mumbai\nDilshaad Shabbir Shaikh, Harshil Pathak, Naval Chikhilya\n\nMixed by\nPradeep Menon\n\nMastered by\nSuresh Permal\n\nDolby Music Mixed And Mastered By \nRiyasdeen Riyan\n\nHead Of Technical Service\nRiyasdeen Riyan\n\nMusician Coordinator\nSamidurai R, Abdul Haiyum\n----------------------------------------------------------------------------\nMovie Credits:\n\nWritten and Directed by Dhanush\n\nCast: Dhanush, SJ Suryah, Prakash Raj, Selvaraghavan, Sundeep Kishan, Kalidas Jayaram, Dushara Vijayan, Aparna Balamurali, Varalakshmi Sarathkumar, Saravanan\n\nDop: Om Prakash \nEditor: Prasanna \nChoreographer: Prabhu Deva, Baba baskar\nArt: Jacki \nCostume designer : Kavya sriram\nAction: Peter Hein \nStills : theni Murugan \nPublicity : Sivam c kabilan \nProduction controller: Ramesh Kuchirayar\nMakeup: B Raja \nCustomer: Nagu \n Pro: Riyaz Ahmed\nExecutive producer: Sreyas Srinivasan\n----------------------------------------------------\n#WaterPacketVideo #raayan  #waterpacketsong  #santhoshnarayanan  #shwetamohan  #dhanush   #arrahman  #santhoshnarayanansongs #bababaskar #bababaskarmaster #raayandhanush \n#WaterPacketRaayan #RaayanWaterPacket #PrabhuDeva #ARR #ARRmusical #PoetuDhanush #RaayanMovie #RaayanTamilmovie #AdangaathaAsuranSong #AdangaathaAsuranRaayan #RaayanSongs #RaayanMovieSongs #RaayanDhanush #RaayanARRahman #2024Tamilmovies #latesttamilmoviesong  #DhanushMovies #arrahmanmusic  #asuransongs #sjsuryahspeech  #prakashraj  #selvaraghavan  #sundeepkishan   #kalidasjayaram #Sundeepkishansong #aparnabalamurali",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/RgOEKdA2mlw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/RgOEKdA2mlw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/RgOEKdA2mlw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/RgOEKdA2mlw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/RgOEKdA2mlw/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sun TV",
              "tags": [
                "water packet video song",
                "water packet song",
                "water packet song video",
                "water packet song reaction",
                "water packet lyrical video",
                "water packet lyric vide",
                "raayan water packet",
                "water packet tamil song",
                "water packet dhanush song",
                "water packet song raayan",
                "water packet ar rahman",
                "adangaatha asuran song",
                "raayan movie songs",
                "raayan movie",
                "raayan tamil movie",
                "dhanush",
                "dhanush movies",
                "ar rahman musical",
                "ar rahman songs",
                "ar rahman",
                "dhanush new movie",
                "santhosh narayanan songs"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Water Packet - Video Song | RAAYAN | Dhanush | Sun Pictures | A.R. Rahman | Santhosh Narayanan",
                "description": "Presenting the official video song \"Water Packet\" from the massive blockbuster #RAAYAN. \nSung by Santhosh Narayanan & Shweta Mohan, Lyrics by Gana Kadhar, \nMusic by A.R. Rahman & Written and Directed by Dhanush.\n--------------------------------------------------------------------------- \nListen to the \"Water Packet \" song on your favorite music service: \n\nSpotify - https://bit.ly/3VfiFL6\nApple Music - https://apple.co/3wFQBar\nGaana - https://bit.ly/4ausglC\nJio Saavn - https://bit.ly/3wDxVrS\nWynk - https://bit.ly/44UMO5u\nInstagram - https://bit.ly/4bPZqwZ\nHungama - https://bit.ly/4e5TFgS\nYT Music - https://bit.ly/44Z1Irm\n--------------------------------------------------------------------------- \nMusic Credits:\n\nMusic by A.R. Rahman\nSingers: Santhosh Narayanan, Shweta Mohan\nLyrics: Gana Kadhar\nMusic Supervisor: A.H. Kaashif\nProject Manager: Karthik Sekaran\nChoreographer: Baba baskar\n\nLanguage Supervisor \nAravind Crescendo\n\nMusicians\nFlute - Kamalakar\nGuitar - Keba Jeremiah\nNadaswaram - Mambalam Sivakumar\nRhythm - Krishna Kishore, Iniyan\nBass - Prashanth Venkat\n\nAdditional Programming\nSanthosh Dhayanidhi, Prashanth Venkat\n\nChoral Supervision\nSuryansh\n\nSound Engineers\nPanchathan Record Inn\nSenior Engineers\nSuresh Permal, Karthik Sekaran\nAssistant Engineers\nAravind Crescendo, Sathish V Saravanan\nPanchathan Studios, Mumbai\nDilshaad Shabbir Shaikh, Harshil Pathak, Naval Chikhilya\n\nMixed by\nPradeep Menon\n\nMastered by\nSuresh Permal\n\nDolby Music Mixed And Mastered By \nRiyasdeen Riyan\n\nHead Of Technical Service\nRiyasdeen Riyan\n\nMusician Coordinator\nSamidurai R, Abdul Haiyum\n----------------------------------------------------------------------------\nMovie Credits:\n\nWritten and Directed by Dhanush\n\nCast: Dhanush, SJ Suryah, Prakash Raj, Selvaraghavan, Sundeep Kishan, Kalidas Jayaram, Dushara Vijayan, Aparna Balamurali, Varalakshmi Sarathkumar, Saravanan\n\nDop: Om Prakash \nEditor: Prasanna \nChoreographer: Prabhu Deva, Baba baskar\nArt: Jacki \nCostume designer : Kavya sriram\nAction: Peter Hein \nStills : theni Murugan \nPublicity : Sivam c kabilan \nProduction controller: Ramesh Kuchirayar\nMakeup: B Raja \nCustomer: Nagu \n Pro: Riyaz Ahmed\nExecutive producer: Sreyas Srinivasan\n----------------------------------------------------\n#WaterPacketVideo #raayan  #waterpacketsong  #santhoshnarayanan  #shwetamohan  #dhanush   #arrahman  #santhoshnarayanansongs #bababaskar #bababaskarmaster #raayandhanush \n#WaterPacketRaayan #RaayanWaterPacket #PrabhuDeva #ARR #ARRmusical #PoetuDhanush #RaayanMovie #RaayanTamilmovie #AdangaathaAsuranSong #AdangaathaAsuranRaayan #RaayanSongs #RaayanMovieSongs #RaayanDhanush #RaayanARRahman #2024Tamilmovies #latesttamilmoviesong  #DhanushMovies #arrahmanmusic  #asuransongs #sjsuryahspeech  #prakashraj  #selvaraghavan  #sundeepkishan   #kalidasjayaram #Sundeepkishansong #aparnabalamurali"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT4M21S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "4774881",
              "likeCount": "164417",
              "favoriteCount": "0",
              "commentCount": "2211"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "oS8zP9W8TnZ93yzQJeuVIxAfLU8",
            "id": "jMbFUISclyA",
            "snippet": {
              "publishedAt": "2024-08-06T10:06:17Z",
              "channelId": "UC8BwRPVvR0GPBa6h-F1H4XA",
              "title": "Neeraj Chopra qualifies for the Javelin final | Highlights | Paris 2024 | JioCinema & Sports18",
              "description": "8️⃣9️⃣.3️⃣4️⃣🚀\n\nONE THROW IS ALL IT TAKES FOR THE CHAMP! \n\n#neerajchopra qualifies for the Javelin final in style 😎\n\n#cheer4bharat & watch the athlete in action, LIVE NOW on #sports18 & stream FREE on #jiocinema \n\nWatch it here - https://jiocinema.onelink.me/Nnaz/l1q4tdbe\n\n#olympicsonjiocinema #olympicsonsports18 #jiocinemasports  #paris2024olympics #paris2024 \n#javelin #olympics #neerajchopra #sports #olympicgames #olympic #olympics #olympics2024  \n\nAlso follow us on:\nJioCinema App: https://www.jiocinema.com/sports\nInstagram: https://bit.ly/Sports18_Instagram\nTwitter: https://bit.ly/Sports18_Twitter\nFacebook: https://bit.ly/Sports18_Facebook\nWhatsApp Channel - https://whatsapp.com/channel/0029VaIGMoTLSmbUpxVrh63P",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/jMbFUISclyA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/jMbFUISclyA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/jMbFUISclyA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/jMbFUISclyA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/jMbFUISclyA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "JioCinema Sports",
              "tags": [
                "Sports18",
                "Sports18 Khel",
                "Neeraj Chopra",
                "Javelin",
                "Javelin Throw",
                "Athletics",
                "Olympic Games",
                "Olympic Channel",
                "Olympic Medal",
                "Olympics",
                "IOC",
                "Sport",
                "Champion",
                "Olympic Sports",
                "Gold",
                "Silver",
                "Bronze",
                "Olympic Games 2024",
                "Paris 2024",
                "Olympic medal tally",
                "India 2024 Olympics",
                "Olympics 2024 India",
                "Olympics 2024 schedule",
                "Olympics India",
                "Olympics 2024",
                "Paris Olympics 2024 India",
                "India in Olympics 2024",
                "Olympics 2024 schedule and results",
                "Olympics 2024 medals",
                "neeraj chopra olympics 2024"
              ],
              "categoryId": "17",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Neeraj Chopra qualifies for the Javelin final | Highlights | Paris 2024 | JioCinema & Sports18",
                "description": "8️⃣9️⃣.3️⃣4️⃣🚀\n\nONE THROW IS ALL IT TAKES FOR THE CHAMP! \n\n#neerajchopra qualifies for the Javelin final in style 😎\n\n#cheer4bharat & watch the athlete in action, LIVE NOW on #sports18 & stream FREE on #jiocinema \n\nWatch it here - https://jiocinema.onelink.me/Nnaz/l1q4tdbe\n\n#olympicsonjiocinema #olympicsonsports18 #jiocinemasports  #paris2024olympics #paris2024 \n#javelin #olympics #neerajchopra #sports #olympicgames #olympic #olympics #olympics2024  \n\nAlso follow us on:\nJioCinema App: https://www.jiocinema.com/sports\nInstagram: https://bit.ly/Sports18_Instagram\nTwitter: https://bit.ly/Sports18_Twitter\nFacebook: https://bit.ly/Sports18_Facebook\nWhatsApp Channel - https://whatsapp.com/channel/0029VaIGMoTLSmbUpxVrh63P"
              }
            },
            "contentDetails": {
              "duration": "PT25S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                "allowed": [
                  "IN"
                ]
              },
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "562606",
              "likeCount": "8235",
              "favoriteCount": "0",
              "commentCount": "251"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "va6N4LTYE_xkWhkHYFQLRUmShe4",
            "id": "NG0ei6rihQ8",
            "snippet": {
              "publishedAt": "2024-08-03T12:30:06Z",
              "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
              "title": "Spark (Lyrical Video) Tamil |The GOAT| Thalapathy Vijay | Venkat Prabhu |Yuvan Shankar Raja|T-Series",
              "description": "The Greatest of All Time! Our Thalapathy Is Here. Presenting the Song \"Spark\" from the New Tamil Movie \"The Greatest Of All Time\". Starring Thalapathy Vijay, Prashanth, Prabhudeva, Mohan, Jayaram, Sneha, Laila, Ajmal Amir, Meenakshi Chaudhary, Vaibhav, Yogi Babu, Premgi Amaren, Yugendran Vasudevan.\n\n#Spark #ThalapthyVijay #TheGoat #GreatestOfAllTime\n\nSong Credits:\nSong Title : Spark\nAlbum/Movie : The Greatest of All Time\nComposed by : Yuvan Shankar Raja\nLyricist : Gangai Amaren\nVocals : Yuvan Shankar Raja, Vrusha Balu\nWritten & Directed by Venkat Prabhu\nMusic : Yuvan Shankar Raja\nBanner : AGS Entertainment (P) Ltd\nProducers : Kalpathi S Aghoram, Kalpathi S Ganesh, Kalpathi S Suresh\nCreative Producer : Archana Kalpathi\nAssociate Creative Producer : Aishwarya Kalpathi\nExecutive Producer : S.M.Venkat Manickam\nDirector of Photography : Siddhartha Nuni\nProduction Designer : Rajeevan\nAction : Dilip Subbarayan\nEditor : Venkat Raajen\nDialogue Writers : Viji & Venkat Prabhu\nAdditional Screenplay & Dialogue : K.Chandru & Ezhilarasu Gunasekaran\nArt Directors : B.Sekar & Surya Rajeevan\nLyricists : Gangai Amaren, Madhan Karky, Kabilan Vairamuthu, Vivek\nChoreography : Raju Sundarm\nCostume designers : Vasuki Baskar & Pallavi Singh\nSound Mix : T Udayakumar\nSound Design : T Udayakumar , Renjith Venugopal, Saravakumar (Sound Vibe)\nStills : D.Maneksha\nPromo Stills : Sudharsan\nPublicity Designer : Gopi Prasanna\nProduction Executive : M.Senthikumar, Govindraj & Ramkumar\nBalasubramanian VFX Head : R.Harihara Suthan\nDI : B2H Studios\nCharacter Designer : Preetisheel Singh D’Souza\nDirection Team : Kanthan Pitchumani, Saravana Rajan, Veer Ramakrishnan,\nSasikumar Paramasivan, Thirunavukarasu, Senthil Velayudham, H.V.Priyan,\nL.J.Lokie, Prakruthee, Sushmitha Gajendran, Nirmal Chinnayan, Vasanth\nveeraputhiran ( vv ), Kiruba Robert\nCinematography Team : Abhishek Goud, Naveen Sasi, Sreerangam Sravan, Pradeep\nThangavel,Vignesh Madheshwaran, Vivekanandan T.V, Pramod Ganta,Vikas Ravi,\nYuvan\nGimbal Operator - Vivek LR\nEditing Team : Ajith R, Jayasurya D , Vignesh, Sathish\nArt Direction Team : Devaraj, Prakash Ravichandran, Mohanraj, Premkumar B\nMaking & BTS: Team 'The Tabs'\nProduction Managers : S.Mariappan, P.Viswanathan, Sakthi, K.R.Ranganathan\nProduction Team : Kamal Radhakrishnan,Arthi Palanisamy, Suraj J S (Paul)\nAGS Marketing Team :  Sivakumar PK, Poorni Gopinath, Chinna Suresh, S Manoj \nRadhika Anandan, Vengatalakshmi Sama, V Shri Shivani\nPRO : Nikil Murukan & Riaz K Ahmed\nLyric Video by Venky\nMusicians Credit :\nSong Composed, Arranged and Produced by: YuvanShankarRaja\nLyrics : Gangai Amaren\nSingers : YuvanShankarRaja ,Vrusha Balu\nAdditional Percussions: Karthik Vamsi\nFlute : Lalit Talluri\nHarmonies: Balaji Sri, Vikram Pitty, Aravind Annest, Srivardhini Kuchi,\nVanathishree Suresh,Hemambiga\nVoice Supervision: Sam P Keerthan\nSong Produced and Recorded @ U1 Records and Studio Al Watan , Dubai\nRecording Engineers :Kausikan Sivalingam,Sharan Ravin\nMixing Engineer: Kausikan Sivalingam\nMix Assistant: Abinayan Udayakumar\nMixed at Studio Al Watan, Dubai\nMastering Engineer: Dave Kutch\nMastered at The Mastering Palace, NYC, USA\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/NG0ei6rihQ8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/NG0ei6rihQ8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/NG0ei6rihQ8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/NG0ei6rihQ8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/NG0ei6rihQ8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "T-Series",
              "tags": [
                "tseries",
                "tseries songs",
                "spark lyrical video",
                "spark song lyrical video",
                "spark song lyrics",
                "spark lyrical video vijay thalapathy",
                "spark vijay thalapathy",
                "vijay thalapathy spark song",
                "vijay thalapthy spark",
                "vijay thalapathy spark lyrics",
                "vijay thalapathy spark song lyrics",
                "spark song lyrics tamil",
                "spark song tamil",
                "spark tamil song",
                "vijay thalapathy song",
                "vijay thalapthy spark song",
                "vijay thalapathy hero songs",
                "vijay thalapathy movie",
                "greatest of all time",
                "goat song",
                "spark"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Spark (Lyrical Video) Tamil |The GOAT| Thalapathy Vijay | Venkat Prabhu |Yuvan Shankar Raja|T-Series",
                "description": "The Greatest of All Time! Our Thalapathy Is Here. Presenting the Song \"Spark\" from the New Tamil Movie \"The Greatest Of All Time\". Starring Thalapathy Vijay, Prashanth, Prabhudeva, Mohan, Jayaram, Sneha, Laila, Ajmal Amir, Meenakshi Chaudhary, Vaibhav, Yogi Babu, Premgi Amaren, Yugendran Vasudevan.\n\n#Spark #ThalapthyVijay #TheGoat #GreatestOfAllTime\n\nSong Credits:\nSong Title : Spark\nAlbum/Movie : The Greatest of All Time\nComposed by : Yuvan Shankar Raja\nLyricist : Gangai Amaren\nVocals : Yuvan Shankar Raja, Vrusha Balu\nWritten & Directed by Venkat Prabhu\nMusic : Yuvan Shankar Raja\nBanner : AGS Entertainment (P) Ltd\nProducers : Kalpathi S Aghoram, Kalpathi S Ganesh, Kalpathi S Suresh\nCreative Producer : Archana Kalpathi\nAssociate Creative Producer : Aishwarya Kalpathi\nExecutive Producer : S.M.Venkat Manickam\nDirector of Photography : Siddhartha Nuni\nProduction Designer : Rajeevan\nAction : Dilip Subbarayan\nEditor : Venkat Raajen\nDialogue Writers : Viji & Venkat Prabhu\nAdditional Screenplay & Dialogue : K.Chandru & Ezhilarasu Gunasekaran\nArt Directors : B.Sekar & Surya Rajeevan\nLyricists : Gangai Amaren, Madhan Karky, Kabilan Vairamuthu, Vivek\nChoreography : Raju Sundarm\nCostume designers : Vasuki Baskar & Pallavi Singh\nSound Mix : T Udayakumar\nSound Design : T Udayakumar , Renjith Venugopal, Saravakumar (Sound Vibe)\nStills : D.Maneksha\nPromo Stills : Sudharsan\nPublicity Designer : Gopi Prasanna\nProduction Executive : M.Senthikumar, Govindraj & Ramkumar\nBalasubramanian VFX Head : R.Harihara Suthan\nDI : B2H Studios\nCharacter Designer : Preetisheel Singh D’Souza\nDirection Team : Kanthan Pitchumani, Saravana Rajan, Veer Ramakrishnan,\nSasikumar Paramasivan, Thirunavukarasu, Senthil Velayudham, H.V.Priyan,\nL.J.Lokie, Prakruthee, Sushmitha Gajendran, Nirmal Chinnayan, Vasanth\nveeraputhiran ( vv ), Kiruba Robert\nCinematography Team : Abhishek Goud, Naveen Sasi, Sreerangam Sravan, Pradeep\nThangavel,Vignesh Madheshwaran, Vivekanandan T.V, Pramod Ganta,Vikas Ravi,\nYuvan\nGimbal Operator - Vivek LR\nEditing Team : Ajith R, Jayasurya D , Vignesh, Sathish\nArt Direction Team : Devaraj, Prakash Ravichandran, Mohanraj, Premkumar B\nMaking & BTS: Team 'The Tabs'\nProduction Managers : S.Mariappan, P.Viswanathan, Sakthi, K.R.Ranganathan\nProduction Team : Kamal Radhakrishnan,Arthi Palanisamy, Suraj J S (Paul)\nAGS Marketing Team :  Sivakumar PK, Poorni Gopinath, Chinna Suresh, S Manoj \nRadhika Anandan, Vengatalakshmi Sama, V Shri Shivani\nPRO : Nikil Murukan & Riaz K Ahmed\nLyric Video by Venky\nMusicians Credit :\nSong Composed, Arranged and Produced by: YuvanShankarRaja\nLyrics : Gangai Amaren\nSingers : YuvanShankarRaja ,Vrusha Balu\nAdditional Percussions: Karthik Vamsi\nFlute : Lalit Talluri\nHarmonies: Balaji Sri, Vikram Pitty, Aravind Annest, Srivardhini Kuchi,\nVanathishree Suresh,Hemambiga\nVoice Supervision: Sam P Keerthan\nSong Produced and Recorded @ U1 Records and Studio Al Watan , Dubai\nRecording Engineers :Kausikan Sivalingam,Sharan Ravin\nMixing Engineer: Kausikan Sivalingam\nMix Assistant: Abinayan Udayakumar\nMixed at Studio Al Watan, Dubai\nMastering Engineer: Dave Kutch\nMastered at The Mastering Palace, NYC, USA\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT4M10S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "11555301",
              "likeCount": "501000",
              "favoriteCount": "0",
              "commentCount": "28540"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "E31-QhtfUSYvUPZeSFmxoCsXxb0",
            "id": "ym0upoayqJg",
            "snippet": {
              "publishedAt": "2024-08-04T14:24:17Z",
              "channelId": "UC8UDQn1V3-dxaRDu_XtRC4g",
              "title": "Double ISMART Trailer ( Telugu) | Ram Pothineni | Sanjay Dutt | Puri Jagannadh | AUGUST 15th RELEASE",
              "description": "Watch #DoubleIsmartTrailer in Telugu now !!\n\n#DoubleiSmart is an Indian Action Entertainer film, written and directed by Puri Jagannnadh featuring Ram Pothineni in the lead role will be seen in a Massier character than iSmart Shankar. Also stars Sanjay Dutt, Kavya Thapar in the prominent roles. Produced by Puri Jagannadh and Charmme Kaur under Puri Connects, The film will have a much bigger span and will be made with a high budget on a large scale with top-class technical standards. Double iSmart will be releasing worldwide on AUGUST 15th,2024  in Telugu, Tamil, Kannada, Malayalam, and Hindi languages.\n\nMovie Details:\nCast: Ram Pothineni, Sanjay Dutt, Kavya Thapar, Bani J, Ali, Getup Sreenu, Sayaji Shinde, Makrand Deshpande,  Temper Vamsi & others.\nWriter, Director: Puri Jagannadh\nProducers: Puri Jagannadh, Charmme Kaur\nBanner: Puri Connects \nMusic: Manisharma \nCEO: Vish\nDOP: Sam K Naidu, Gianni Giannelli\nEditor: Karthika Sreenivas R\nProduction Designer: Jonny Shaik\nVFX: Anil Paduri\nAction: Kecha Khamphakdee & Real Sathish\nSound Designer: Justin Jose, Cas\nCo-Director: Jiten Sharmaa\nOnline & Co-Editor: Santosh Noozilla\nDI - Sri Sarathi Studios\nColorist - Vishnuvardhan K\nPRO: Vamsi Shekar \nMarketing: Manoj Valluri\nDigital Agency: Haashtag Media \n\n\nSubscribe to me on youtube  : youtube.com/@purijagannadh \nFollow me on twitter : https://twitter.com/puriconnects\nFollow me on facebook : https://www.facebook.com/Puriconnects\nFollow me on  Instagram : https://instagram.com/Puriconnects",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ym0upoayqJg/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ym0upoayqJg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ym0upoayqJg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ym0upoayqJg/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ym0upoayqJg/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Puri Jagannadh",
              "categoryId": "1",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Double ISMART Trailer ( Telugu) | Ram Pothineni | Sanjay Dutt | Puri Jagannadh | AUGUST 15th RELEASE",
                "description": "Watch #DoubleIsmartTrailer in Telugu now !!\n\n#DoubleiSmart is an Indian Action Entertainer film, written and directed by Puri Jagannnadh featuring Ram Pothineni in the lead role will be seen in a Massier character than iSmart Shankar. Also stars Sanjay Dutt, Kavya Thapar in the prominent roles. Produced by Puri Jagannadh and Charmme Kaur under Puri Connects, The film will have a much bigger span and will be made with a high budget on a large scale with top-class technical standards. Double iSmart will be releasing worldwide on AUGUST 15th,2024  in Telugu, Tamil, Kannada, Malayalam, and Hindi languages.\n\nMovie Details:\nCast: Ram Pothineni, Sanjay Dutt, Kavya Thapar, Bani J, Ali, Getup Sreenu, Sayaji Shinde, Makrand Deshpande,  Temper Vamsi & others.\nWriter, Director: Puri Jagannadh\nProducers: Puri Jagannadh, Charmme Kaur\nBanner: Puri Connects \nMusic: Manisharma \nCEO: Vish\nDOP: Sam K Naidu, Gianni Giannelli\nEditor: Karthika Sreenivas R\nProduction Designer: Jonny Shaik\nVFX: Anil Paduri\nAction: Kecha Khamphakdee & Real Sathish\nSound Designer: Justin Jose, Cas\nCo-Director: Jiten Sharmaa\nOnline & Co-Editor: Santosh Noozilla\nDI - Sri Sarathi Studios\nColorist - Vishnuvardhan K\nPRO: Vamsi Shekar \nMarketing: Manoj Valluri\nDigital Agency: Haashtag Media \n\n\nSubscribe to me on youtube  : youtube.com/@purijagannadh \nFollow me on twitter : https://twitter.com/puriconnects\nFollow me on facebook : https://www.facebook.com/Puriconnects\nFollow me on  Instagram : https://instagram.com/Puriconnects"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT2M43S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "16525494",
              "likeCount": "327301",
              "favoriteCount": "0",
              "commentCount": "5917"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "tqQWn_jwyxDqN_Kj4kn_V-IyV5s",
            "id": "WcSpYXyJYYc",
            "snippet": {
              "publishedAt": "2024-08-06T09:52:53Z",
              "channelId": "UCFHhFwEdsLs2wuvh1YdChHw",
              "title": "Vinesh Phogat defeated Olympic Champion | Wrestling Highlights | Paris 2024 | JioCinema & Sports18",
              "description": "WHAT HAVE YOU DONE VINESH!!!\n\nVinesh Phogat has defeated the Tokyo Olympics GOLD medalist\n\nhttps://www.jiocinema.com/sports/multisport/women-s-freestyle-50kg-phogat-vs-susaki/3994203\n\n#olympicsonjiocinema #olympicsonsports18 #jiocinemasports #wrestling  #olympics \n\nHouse of the Dragon S2, Murder In Mahim, Olympics, India Cricket, Zara Hatke Zara Bachke, Anime, Ranneeti, Kids & Family Content, NBA and more!\nWebsite: jiocinema@jio.com\nFacebook: https://www.facebook.com/JioCinema\nTwitter: https://x.com/JioCinema\nhttps://www.instagram.com/officialjiocinema/",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/WcSpYXyJYYc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/WcSpYXyJYYc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/WcSpYXyJYYc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/WcSpYXyJYYc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/WcSpYXyJYYc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "JioCinema Premium",
              "tags": [
                "Vinesh Phogat",
                "Wrestling",
                "Olympic Games",
                "Olympic Channel",
                "Olympic Medal",
                "Olympics",
                "IOC",
                "Sport",
                "Champion",
                "Olympic Sports",
                "Gold",
                "Silver",
                "Bronze",
                "Olympic Games 2024",
                "Paris 2024",
                "Olympic medal tally",
                "India 2024 Olympics",
                "Olympics 2024 India",
                "Olympics 2024 schedule",
                "Olympics India",
                "Olympics 2024",
                "Paris Olympics 2024 India",
                "India in Olympics 2024",
                "Olympics 2024 schedule and results",
                "Olympics 2024 medals"
              ],
              "categoryId": "17",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Vinesh Phogat defeated Olympic Champion | Wrestling Highlights | Paris 2024 | JioCinema & Sports18",
                "description": "WHAT HAVE YOU DONE VINESH!!!\n\nVinesh Phogat has defeated the Tokyo Olympics GOLD medalist\n\nhttps://www.jiocinema.com/sports/multisport/women-s-freestyle-50kg-phogat-vs-susaki/3994203\n\n#olympicsonjiocinema #olympicsonsports18 #jiocinemasports #wrestling  #olympics \n\nHouse of the Dragon S2, Murder In Mahim, Olympics, India Cricket, Zara Hatke Zara Bachke, Anime, Ranneeti, Kids & Family Content, NBA and more!\nWebsite: jiocinema@jio.com\nFacebook: https://www.facebook.com/JioCinema\nTwitter: https://x.com/JioCinema\nhttps://www.instagram.com/officialjiocinema/"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT20S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                "allowed": [
                  "IN"
                ]
              },
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "317180",
              "likeCount": "2124",
              "favoriteCount": "0",
              "commentCount": "150"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "H7wZkA5Yk17l3UBud2stTHE34Ow",
            "id": "CWwx99hxWnM",
            "snippet": {
              "publishedAt": "2024-08-06T13:02:45Z",
              "channelId": "UC_wIGmvdyAQLtl-U2nHV9rg",
              "title": "Karthigai Deepam (கார்த்திகை தீபம்) | தினமும் இரவு 9 மணிக்கு | 06 Aug 24 | Promo | Zee Tamil",
              "description": "Zee5 Paid Subscription Link: https://bit.ly/32gxIJ4\nFree Subscription click here: https://bit.ly/SubscribeFreeZeeTamil\nGet notified about our Latest update by Clicking the Bell Icon 🔔\n\nTo Free Download ZEE5 Mobile app click the link below\nPlaystore: http://bit.ly/Zee5PlayStore\niTunes: http://bit.ly/Zee5ITunes\n\nConnect with Zee Tamil on Social Media\nWhatsapp: https://bit.ly/ZeeTamilWhatsApp\nFacebook: http://bit.ly/ZeeTamilFB\nInstagram: http://bit.ly/ZeeTamilInsta\nTwitter: http://bit.ly/ZeeTamilTwitter\n\nConnect with Zee5 on Social Media\nFacebook: http://bit.ly/Zee5TamilFB\nInstagram: http://bit.ly/Zee5TamilInsta\nTwitter: http://bit.ly/Zee5TamilTwitter",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/CWwx99hxWnM/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/CWwx99hxWnM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/CWwx99hxWnM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/CWwx99hxWnM/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/CWwx99hxWnM/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Zee Tamil",
              "tags": [
                "Zee Tamil",
                "zeetamil",
                "ஜீ தமிழ்",
                "zee தமிழ்",
                "Tamil channel",
                "tamil tv serial",
                "tamil serial",
                "zee tamil show",
                "entertainment",
                "daily soaps",
                "family",
                "drama",
                "comedy",
                "horror",
                "thriller",
                "romance",
                "romantic",
                "tamil",
                "free",
                "download",
                "mobile",
                "story",
                "episode",
                "latest",
                "scene",
                "full episode",
                "best scene",
                "webisode",
                "precap",
                "preview",
                "promo",
                "complete series",
                "video",
                "youtube",
                "tv",
                "popular shows",
                "zee5",
                "ZEEL"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-GB",
              "localized": {
                "title": "Karthigai Deepam (கார்த்திகை தீபம்) | தினமும் இரவு 9 மணிக்கு | 06 Aug 24 | Promo | Zee Tamil",
                "description": "Zee5 Paid Subscription Link: https://bit.ly/32gxIJ4\nFree Subscription click here: https://bit.ly/SubscribeFreeZeeTamil\nGet notified about our Latest update by Clicking the Bell Icon 🔔\n\nTo Free Download ZEE5 Mobile app click the link below\nPlaystore: http://bit.ly/Zee5PlayStore\niTunes: http://bit.ly/Zee5ITunes\n\nConnect with Zee Tamil on Social Media\nWhatsapp: https://bit.ly/ZeeTamilWhatsApp\nFacebook: http://bit.ly/ZeeTamilFB\nInstagram: http://bit.ly/ZeeTamilInsta\nTwitter: http://bit.ly/ZeeTamilTwitter\n\nConnect with Zee5 on Social Media\nFacebook: http://bit.ly/Zee5TamilFB\nInstagram: http://bit.ly/Zee5TamilInsta\nTwitter: http://bit.ly/Zee5TamilTwitter"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT31S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "967975",
              "likeCount": "15971",
              "favoriteCount": "0",
              "commentCount": "189"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "jODBGIHFzYsRrGYtWsnz3VQSH4M",
            "id": "zPtYgRVhNBk",
            "snippet": {
              "publishedAt": "2024-08-07T06:03:16Z",
              "channelId": "UCQC1wGbOOIoC23fRGxt4kbg",
              "title": "Bangladesh Protest : बांग्लादेश में अंतरिम सरकार के प्रमुख बने Muhammad Yunus | Bangladesh Crisis",
              "description": "नोबेल पुरस्कार विजेता मोहम्मद यूनुस (Muhammad Yunus) को बांग्लादेश (Bangladesh) में अंतरिम सरकार का नेतृत्व करने के लिए चुना गया है. बता दें कि बांग्लादेश इस समय बेहिसाब अस्थिरता के दौर से गुजर रहा है. तख्तापलट और शेख हसीना (Sheikh Hasina) के प्रधानमंत्री पद से इस्तीफा देकर देश छोड़कर भाग खड़े होने के बाद उनकी पूर्व कैबिनेट के मंत्रियों पर एक-एक कर गाज गिरनी शुरू हो गई है. खबर है कि बांग्लादेश के पूर्व विदेश मंत्री हसन महमूद को ढाका एयरपोर्ट से हिरासत में ले लिया गया है.\r\n#bangladeshprotest #bangladesh #sheikhhasina #dhaka\n\n\n--------------------------\nGood News Today के साथ देखिये देश-विदेश की सभी और बड़ी खबरें | Watch the latest Hindi news Live on GNT News Channel on YouTube.\n \n#GNT #GNTTV #GNTLive #GNTTVLive #GoodNewsToday\n------------------------------------------------------------------------------------\nGNT TV Live streaming - Watch गुड न्यूज़ टुडे लाइव टीवी Online to know todays good news around the world in Hindi, Free Live streaming of positive news, happy stories, Inspiring News at गुड न्यूज़ टुडे टीवी चैनल.\n \n#GoodNewsTodayLive #GoodNewsToday #GNT\n \nSubscribe to Good News Today and make sure to enable Push Notifications so you'll never miss a new video. All you need to do is PRESS THE BELL ICON next to the Subscribe button!\n \nAbout Channel:\nGood News Today is India's newest news channel that has its heart in the bright place. It focuses on the brighter side of the world, not the gloomy and the dark. Good News Today brings you positive and uplifting news and information from India and around the world.\n \nGood News Today is a 24X7 Hindi news channel that showcases stories of hope, human triumph, innovation, and inspiration from different walks of life.\n \nThe news channel Good News Today rests on the motto of &quot;acchi khabar, sacchi khabar&quot; - true stories that foster goodwill and unite audiences. Good News Today is an initiative of the TV Today Network, part of the India Today Group.\n \nFollow us on\nWebsite: https://www.gnttv.com\nWhatsApp: https://www.whatsapp.com/channel/0029Va76JFy60eBddShdJ12w\nFacebook:  https://www.facebook.com/goodnewstoday\nTwitter: https://www.twitter.com/goodnewstoday\nInstagram: https://www.instagram.com/goodnewstoday\n \n...................................................................................................................\nDownload India's No. 1 Hindi News Mobile App : https://aajtak.app.link/QFAp3ZaHmQ\n \nSubscribe to our other popular youtube channels:\n \nAaj Tak: https://www.youtube.com/aajtak\n \nAaj Tak HD: https://www.youtube.com/aajtakhd\n \nIndia Today: https://www.youtube.com/indiatoday\n \nThe Lallantop : https://www.youtube.com/thelallantop\n \nSaas Bahu Aur Betiyaan: https://www.youtube.com/c/SaasBahuAurBetiyaanOfficial\n \nSo Sorry: https://www.youtube.com/user/sosorrypolitoon",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/zPtYgRVhNBk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/zPtYgRVhNBk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/zPtYgRVhNBk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/zPtYgRVhNBk/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "Good News Today",
              "tags": [
                "Bangladesh Crisis",
                "Bangladesh Crisis update",
                "Bangladesh Freedom",
                "Bangladesh Hindu",
                "Bangladesh Muslims",
                "Bangladesh Protest Updates",
                "China",
                "Dhaka Students Protest",
                "India Bangladesh BORDER",
                "India Bangladesh Relations",
                "International News",
                "Muhammad Yunus",
                "Pakistan",
                "Protest in Bagladesh",
                "Sheikh Hasina Family Killed",
                "Sheikh Hasina Leaves From dhaka",
                "Sheikh Hasina Resigns",
                "bangladesh latest news",
                "pm modi meeting on bangladesh",
                "bangladesh news",
                "bangladesh violence news"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "defaultLanguage": "hi",
              "localized": {
                "title": "Bangladesh Protest : बांग्लादेश में अंतरिम सरकार के प्रमुख बने Muhammad Yunus | Bangladesh Crisis",
                "description": "नोबेल पुरस्कार विजेता मोहम्मद यूनुस (Muhammad Yunus) को बांग्लादेश (Bangladesh) में अंतरिम सरकार का नेतृत्व करने के लिए चुना गया है. बता दें कि बांग्लादेश इस समय बेहिसाब अस्थिरता के दौर से गुजर रहा है. तख्तापलट और शेख हसीना (Sheikh Hasina) के प्रधानमंत्री पद से इस्तीफा देकर देश छोड़कर भाग खड़े होने के बाद उनकी पूर्व कैबिनेट के मंत्रियों पर एक-एक कर गाज गिरनी शुरू हो गई है. खबर है कि बांग्लादेश के पूर्व विदेश मंत्री हसन महमूद को ढाका एयरपोर्ट से हिरासत में ले लिया गया है.\r\n#bangladeshprotest #bangladesh #sheikhhasina #dhaka\n\n\n--------------------------\nGood News Today के साथ देखिये देश-विदेश की सभी और बड़ी खबरें | Watch the latest Hindi news Live on GNT News Channel on YouTube.\n \n#GNT #GNTTV #GNTLive #GNTTVLive #GoodNewsToday\n------------------------------------------------------------------------------------\nGNT TV Live streaming - Watch गुड न्यूज़ टुडे लाइव टीवी Online to know todays good news around the world in Hindi, Free Live streaming of positive news, happy stories, Inspiring News at गुड न्यूज़ टुडे टीवी चैनल.\n \n#GoodNewsTodayLive #GoodNewsToday #GNT\n \nSubscribe to Good News Today and make sure to enable Push Notifications so you'll never miss a new video. All you need to do is PRESS THE BELL ICON next to the Subscribe button!\n \nAbout Channel:\nGood News Today is India's newest news channel that has its heart in the bright place. It focuses on the brighter side of the world, not the gloomy and the dark. Good News Today brings you positive and uplifting news and information from India and around the world.\n \nGood News Today is a 24X7 Hindi news channel that showcases stories of hope, human triumph, innovation, and inspiration from different walks of life.\n \nThe news channel Good News Today rests on the motto of &quot;acchi khabar, sacchi khabar&quot; - true stories that foster goodwill and unite audiences. Good News Today is an initiative of the TV Today Network, part of the India Today Group.\n \nFollow us on\nWebsite: https://www.gnttv.com\nWhatsApp: https://www.whatsapp.com/channel/0029Va76JFy60eBddShdJ12w\nFacebook:  https://www.facebook.com/goodnewstoday\nTwitter: https://www.twitter.com/goodnewstoday\nInstagram: https://www.instagram.com/goodnewstoday\n \n...................................................................................................................\nDownload India's No. 1 Hindi News Mobile App : https://aajtak.app.link/QFAp3ZaHmQ\n \nSubscribe to our other popular youtube channels:\n \nAaj Tak: https://www.youtube.com/aajtak\n \nAaj Tak HD: https://www.youtube.com/aajtakhd\n \nIndia Today: https://www.youtube.com/indiatoday\n \nThe Lallantop : https://www.youtube.com/thelallantop\n \nSaas Bahu Aur Betiyaan: https://www.youtube.com/c/SaasBahuAurBetiyaanOfficial\n \nSo Sorry: https://www.youtube.com/user/sosorrypolitoon"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT4M29S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "123731",
              "likeCount": "905",
              "favoriteCount": "0",
              "commentCount": "46"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "Ae00HJpGXaH3dNVg2b4Te1Nv2oI",
            "id": "joFUpvIzxOY",
            "snippet": {
              "publishedAt": "2024-08-06T05:44:15Z",
              "channelId": "UCnprfRlJB7WE6zAEaOAfVYA",
              "title": "రేవ్ పార్టీ- రేపటి సత్తనాశనం కోసం? | Drugs awareness | My village show | Anil Geela | Raju | Chandu",
              "description": "ACTORS :Raju ,Madhu Aluvala, Anil Geela,Chandu ,Shiva Krishna Burra,  ,Madhu Elkus , Ruchitha , Srilatha, Rfc Ravi ,Kanakam Venkat, Prashanth ,Pavan, Venkat chinthakindi, Mounik , Srikanth , Anil kante , Sagar, Shyam ,Erram Devaiah, Mallareddy , malliah , rajaiah \n\nWritten & Directed by Shiva Krishna Burra\n\nDOP :Raghuram Mudavath, Shyam ,Prem \n\nEditing : Shivakrishnaburra, Anil Konireddy  \n\nAssistant Writer: Naresh Maheshwaram \n\nAssistant directer : Anil Konireddy  \n\nExcutive producer : Prashanth Sriram \n\nSync sound : Amar \n\nLights : Elkus Madhu  \n\nThumbnail: Laxman  \n\nRR : Anil Geela \n\nSong composed by : Yashwant Nag \n\nLyrics : Mallegoda Gangaprasad\n\nProduced by Sriram Srikanth \n\nFor Brand Partnerships and Collaborations, reach us at brands@myvillageshow.in \n\nfollow us on social media :\n\nmy village show Facebook page : https://www.facebook.com/myvillageshow/\n\nmy village show instagram : https://www.instagram.com/myvillageshow/\n\nmy village show twitter : https://twitter.com/myvillageshow\n\nwebsite : www.myvillageshow.in",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/joFUpvIzxOY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/joFUpvIzxOY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/joFUpvIzxOY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/joFUpvIzxOY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/joFUpvIzxOY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "My Village Show",
              "tags": [
                "my village show",
                "village",
                "village life",
                "village show comedy",
                "gangavva",
                "raju",
                "gangavva comedy",
                "gangavva jokes",
                "anil geela",
                "sarpanch",
                "anji mama",
                "daawath",
                "village comedy",
                "telugu short film",
                "telangana comedy",
                "telangana short films",
                "mvs",
                "mvs comedy"
              ],
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "defaultLanguage": "te",
              "localized": {
                "title": "రేవ్ పార్టీ- రేపటి సత్తనాశనం కోసం? | Drugs awareness | My village show | Anil Geela | Raju | Chandu",
                "description": "ACTORS :Raju ,Madhu Aluvala, Anil Geela,Chandu ,Shiva Krishna Burra,  ,Madhu Elkus , Ruchitha , Srilatha, Rfc Ravi ,Kanakam Venkat, Prashanth ,Pavan, Venkat chinthakindi, Mounik , Srikanth , Anil kante , Sagar, Shyam ,Erram Devaiah, Mallareddy , malliah , rajaiah \n\nWritten & Directed by Shiva Krishna Burra\n\nDOP :Raghuram Mudavath, Shyam ,Prem \n\nEditing : Shivakrishnaburra, Anil Konireddy  \n\nAssistant Writer: Naresh Maheshwaram \n\nAssistant directer : Anil Konireddy  \n\nExcutive producer : Prashanth Sriram \n\nSync sound : Amar \n\nLights : Elkus Madhu  \n\nThumbnail: Laxman  \n\nRR : Anil Geela \n\nSong composed by : Yashwant Nag \n\nLyrics : Mallegoda Gangaprasad\n\nProduced by Sriram Srikanth \n\nFor Brand Partnerships and Collaborations, reach us at brands@myvillageshow.in \n\nfollow us on social media :\n\nmy village show Facebook page : https://www.facebook.com/myvillageshow/\n\nmy village show instagram : https://www.instagram.com/myvillageshow/\n\nmy village show twitter : https://twitter.com/myvillageshow\n\nwebsite : www.myvillageshow.in"
              },
              "defaultAudioLanguage": "te"
            },
            "contentDetails": {
              "duration": "PT34M17S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "373099",
              "likeCount": "15255",
              "favoriteCount": "0",
              "commentCount": "490"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "D5R2k9YsUd8J6YRgGbapv46RBAI",
            "id": "MwW-fKMNAoQ",
            "snippet": {
              "publishedAt": "2024-08-06T11:33:10Z",
              "channelId": "UCs81cwIpxLm2HLQOUVRdC2Q",
              "title": "2 Sides || Episode - 1 || Varsha Dsouza || Aakanksha Honey || Telugu Web Series || Infinitum Media",
              "description": "Download FRND App: https://frndapp.onelink.me/Td7S/august2024varsha\n\n2 girls. 2 sides. \nStay tuned to know more.\n\n\"2 Sides\" is a Telugu Romcom Web Series Featuring Varsha Dsouza & Aakanksha Honey as Leads.\n\nCast: Varsha Dsouza, Aakanksha Honey, Rama Krishna, Venkat Ranjith, Omkar, Cherry, Poojitha, Rajeshwar Indumuki.\n\nProduced by Vandana Bandaru \n\nDirector: GS Raj kumar \n\nDop & DI: Vinay Sarukolla \n\nWritten By Anaganaga \n\nScreenplay: Aishwarya - Neha \n\nEditor: Manoj B \n\nMusic: Hari Krishnan\n\nPublicity Designer: Shiva Krishna.T\n\nAssistant Director: Vamsi - Shiva kumar A\n\nAssistant DOP: Lokesh\n\nLine Producer: Harish - Surya T\n\nExecutive Producer: Rahul Nimmakuri\n\n#2Sides #VarshaDsouza #AakankshaHoney #InfinitumMedia #TeluguWebSeries2024",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/MwW-fKMNAoQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/MwW-fKMNAoQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/MwW-fKMNAoQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/MwW-fKMNAoQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/MwW-fKMNAoQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Varsha Dsouza",
              "tags": [
                "2 sides",
                "2 sides web series",
                "varsha dsouza",
                "varsha dsouza web series",
                "varsha dsouza latest",
                "varsha dsouza short films",
                "aakanksha honey",
                "aakanksha honey web series",
                "aakanksha honey short films",
                "varsha dsouza aakanksha honey",
                "telugu web series 2024",
                "latest telugu short films 2024",
                "telugu new short films 2024",
                "telugu short films 2024",
                "telugu short films latest",
                "telugu love short films latest 2024",
                "varsha dsouza 2 sides web series",
                "2 sides episode 1",
                "2 sides web series episode 1"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "2 Sides || Episode - 1 || Varsha Dsouza || Aakanksha Honey || Telugu Web Series || Infinitum Media",
                "description": "Download FRND App: https://frndapp.onelink.me/Td7S/august2024varsha\n\n2 girls. 2 sides. \nStay tuned to know more.\n\n\"2 Sides\" is a Telugu Romcom Web Series Featuring Varsha Dsouza & Aakanksha Honey as Leads.\n\nCast: Varsha Dsouza, Aakanksha Honey, Rama Krishna, Venkat Ranjith, Omkar, Cherry, Poojitha, Rajeshwar Indumuki.\n\nProduced by Vandana Bandaru \n\nDirector: GS Raj kumar \n\nDop & DI: Vinay Sarukolla \n\nWritten By Anaganaga \n\nScreenplay: Aishwarya - Neha \n\nEditor: Manoj B \n\nMusic: Hari Krishnan\n\nPublicity Designer: Shiva Krishna.T\n\nAssistant Director: Vamsi - Shiva kumar A\n\nAssistant DOP: Lokesh\n\nLine Producer: Harish - Surya T\n\nExecutive Producer: Rahul Nimmakuri\n\n#2Sides #VarshaDsouza #AakankshaHoney #InfinitumMedia #TeluguWebSeries2024"
              },
              "defaultAudioLanguage": "te"
            },
            "contentDetails": {
              "duration": "PT24M26S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "222586",
              "likeCount": "11074",
              "favoriteCount": "0",
              "commentCount": "177"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "lq8NAUEddx3BjzHn9E8p3UGhpnY",
            "id": "dvj0iq-bodU",
            "snippet": {
              "publishedAt": "2024-08-07T05:58:08Z",
              "channelId": "UCvrhwpnp2DHYQ1CbXby9ypQ",
              "title": "Muthazhagu | 7th to 10th August 2024 - Promo",
              "description": "முத்தழகு - திங்கள் முதல் சனி மதியம் 3:30 மணிக்கு நம்ம விஜய் டிவில.. Click here -  https://www.hotstar.com/in/tv/muthazhagu/1260073430 to watch the show on Disney+ Hotstar.          #Muthazhagu #VijayTelevision #VijayTV #StarVijayTV #NewFiction  #StarVijay #TamilTV",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/dvj0iq-bodU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/dvj0iq-bodU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/dvj0iq-bodU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/dvj0iq-bodU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/dvj0iq-bodU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Vijay Television",
              "tags": [
                "Muthazhagu",
                "Star",
                "Star Vijay TV",
                "Vijay TV",
                "Vijay",
                "தமிழ்",
                "விஜய்",
                "டிவி",
                "தொலைக்காட்சி",
                "Tamil TV",
                "Tamil Shows",
                "முத்தழகு"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Muthazhagu | 7th to 10th August 2024 - Promo",
                "description": "முத்தழகு - திங்கள் முதல் சனி மதியம் 3:30 மணிக்கு நம்ம விஜய் டிவில.. Click here -  https://www.hotstar.com/in/tv/muthazhagu/1260073430 to watch the show on Disney+ Hotstar.          #Muthazhagu #VijayTelevision #VijayTV #StarVijayTV #NewFiction  #StarVijay #TamilTV"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT52S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "880557",
              "likeCount": "18095",
              "favoriteCount": "0",
              "commentCount": "144"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "m8TOiuVUlYmX5v_7z-m7-xCWbb8",
            "id": "j0GtI121ZBI",
            "snippet": {
              "publishedAt": "2024-08-07T05:56:40Z",
              "channelId": "UCvrhwpnp2DHYQ1CbXby9ypQ",
              "title": "Veetuku Veedu Vaasapadi | 7th to 9th August 2024 - Promo",
              "description": "வீட்டுக்கு வீடு வாசப்படி - திங்கள் - வெள்ளி மாலை 6.30 மணிக்கு நம்ம விஜய் டிவில.. #VeetukuVeeduVaasapadi #VijayTV #VijayTelevision #StarVijayTV #StarVijay #TamilTV",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/j0GtI121ZBI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/j0GtI121ZBI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/j0GtI121ZBI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/j0GtI121ZBI/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/j0GtI121ZBI/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Vijay Television",
              "tags": [
                "Star",
                "Star Vijay TV",
                "Vijay TV",
                "Vijay",
                "தமிழ்",
                "விஜய்",
                "டிவி",
                "தொலைக்காட்சி",
                "Tamil TV",
                "Tamil Shows",
                "Veetuku Veedu Vaasapadi",
                "Promo"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Veetuku Veedu Vaasapadi | 7th to 9th August 2024 - Promo",
                "description": "வீட்டுக்கு வீடு வாசப்படி - திங்கள் - வெள்ளி மாலை 6.30 மணிக்கு நம்ம விஜய் டிவில.. #VeetukuVeeduVaasapadi #VijayTV #VijayTelevision #StarVijayTV #StarVijay #TamilTV"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT43S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "785268",
              "likeCount": "13796",
              "favoriteCount": "0",
              "commentCount": "114"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "DX1f7_4oyBtWC2kt-CQhJIDcd4Q",
            "id": "GxJMuSAYZrE",
            "snippet": {
              "publishedAt": "2024-08-04T13:05:02Z",
              "channelId": "UCAYum5hCyfkSH5T3vSD_kwQ",
              "title": "Main Aur Mumbai | Aakash Gupta | Stand-up Comedy",
              "description": "India Tour Tickets Link : https://linktr.ee/theskygupta .\nUK Tour March 2025 Tickets Link : https://linktr.ee/aakashgupta2024uk .\nJokes on my experience of Mumbai Local train along with my friends .\n\nJoin my EMAIL list for early & exclusive updates about my live shows in your cities:  https://forms.gle/aYNHP2ZZVNxKJiBs8",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/GxJMuSAYZrE/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/GxJMuSAYZrE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/GxJMuSAYZrE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/GxJMuSAYZrE/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/GxJMuSAYZrE/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Aakash Gupta",
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Main Aur Mumbai | Aakash Gupta | Stand-up Comedy",
                "description": "India Tour Tickets Link : https://linktr.ee/theskygupta .\nUK Tour March 2025 Tickets Link : https://linktr.ee/aakashgupta2024uk .\nJokes on my experience of Mumbai Local train along with my friends .\n\nJoin my EMAIL list for early & exclusive updates about my live shows in your cities:  https://forms.gle/aYNHP2ZZVNxKJiBs8"
              },
              "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
              "duration": "PT15M33S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "4866409",
              "likeCount": "282012",
              "favoriteCount": "0",
              "commentCount": "3890"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "AIJAf_UAxW9hWd1DYFVIPLRIL4c",
            "id": "vf2fa7BBk-8",
            "snippet": {
              "publishedAt": "2024-08-06T22:30:05Z",
              "channelId": "UCVhgR0R_67-i_dpb1p5ALww",
              "title": "हरयाली तीज कथा : सावन में आज के दिन यह चमत्कारी कथा सुनने से सभी मनोकामना पूर्ण होती है | Ds Pal",
              "description": "#trimurtibhakti \nहरयाली तीज कथा : सावन में आज के दिन यह चमत्कारी कथा सुनने से सभी मनोकामना पूर्ण होती है  || Sawan Chamatkari Katha\n\n\nTitle : हरयाली तीज कथा \nSinger : Ds Pal\nLyrics : Fauji Suresh Panchal\nMusic Composer : Hansraj Railhan\nMusic : Sonotek\nRecording : Lucky Singh \nEditor : Vishal Athya\nLabel : Trimurti Bhakti\n\n\n#Teej\n#Teej_Katha\n#Sawan_Katha\n\n\nहरयाली तीज कथा,\nHaryali Teej Katha,\nHansraj Railhan,\n Ds Pal Sawan Chamatkari Katha,\nHariyali Teej Ki Katha,\nhariyali Teej Ki Kahani,\nHraiyali teej 2024,\nhariyali teej vrat katha,\nhariyali teej ki puja,\nhariyali teej puja vidhi,\nharyali teej katha,\nharyali teej kahani,\nteej vrat,\nhariyali teej vrat,\nhariyali teej vrat 2024,\nteej vrat katha,\nteej vrat kahani,\nteej vrat ki kahani,\nteej vrat ki katha,\nsawan somwar,\nsawan ki kahani,\nsawan maas ki kahani,\nsawan 2024,\nshiv ji ki kahani,\nkahani,\nkatha,\nVrat Katha,\nhariyali Teej ki Puja kaise karen,",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/vf2fa7BBk-8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/vf2fa7BBk-8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/vf2fa7BBk-8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/vf2fa7BBk-8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/vf2fa7BBk-8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Trimurti Bhakti",
              "tags": [
                "Trimurti Bhakti",
                "Trimurti Bhakti Katha sagar",
                "Katha Khajana",
                "हरयाली तीज कथा",
                "Haryali Teej Katha",
                "Hansraj Railhan",
                "Ds Pal Sawan Chamatkari Katha",
                "Hariyali Teej Ki Katha",
                "hariyali Teej Ki Kahani",
                "Hraiyali teej 2024",
                "hariyali teej vrat katha",
                "hariyali teej ki puja",
                "haryali teej katha",
                "haryali teej kahani",
                "teej vrat",
                "hariyali teej vrat",
                "hariyali teej vrat 2024",
                "teej vrat katha",
                "teej vrat kahani",
                "teej vrat ki kahani",
                "teej vrat ki katha",
                "sawan somwar",
                "kahani"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "हरयाली तीज कथा : सावन में आज के दिन यह चमत्कारी कथा सुनने से सभी मनोकामना पूर्ण होती है | Ds Pal",
                "description": "#trimurtibhakti \nहरयाली तीज कथा : सावन में आज के दिन यह चमत्कारी कथा सुनने से सभी मनोकामना पूर्ण होती है  || Sawan Chamatkari Katha\n\n\nTitle : हरयाली तीज कथा \nSinger : Ds Pal\nLyrics : Fauji Suresh Panchal\nMusic Composer : Hansraj Railhan\nMusic : Sonotek\nRecording : Lucky Singh \nEditor : Vishal Athya\nLabel : Trimurti Bhakti\n\n\n#Teej\n#Teej_Katha\n#Sawan_Katha\n\n\nहरयाली तीज कथा,\nHaryali Teej Katha,\nHansraj Railhan,\n Ds Pal Sawan Chamatkari Katha,\nHariyali Teej Ki Katha,\nhariyali Teej Ki Kahani,\nHraiyali teej 2024,\nhariyali teej vrat katha,\nhariyali teej ki puja,\nhariyali teej puja vidhi,\nharyali teej katha,\nharyali teej kahani,\nteej vrat,\nhariyali teej vrat,\nhariyali teej vrat 2024,\nteej vrat katha,\nteej vrat kahani,\nteej vrat ki kahani,\nteej vrat ki katha,\nsawan somwar,\nsawan ki kahani,\nsawan maas ki kahani,\nsawan 2024,\nshiv ji ki kahani,\nkahani,\nkatha,\nVrat Katha,\nhariyali Teej ki Puja kaise karen,"
              }
            },
            "contentDetails": {
              "duration": "PT20M39S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "109337",
              "likeCount": "953",
              "favoriteCount": "0",
              "commentCount": "56"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "tmgsLfcfCRx4hpwyW6GwoTn4t60",
            "id": "YFqE8p7m88s",
            "snippet": {
              "publishedAt": "2024-08-04T09:00:24Z",
              "channelId": "UCfLuT3JwLx8rvHjHfTymekw",
              "title": "Earth se Badi Roti?? Indian TV Serials Roast",
              "description": "Today we are watching some Indian TV serials and they are great.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/YFqE8p7m88s/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/YFqE8p7m88s/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/YFqE8p7m88s/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/YFqE8p7m88s/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/YFqE8p7m88s/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Triggered Insaan",
              "tags": [
                "triggered insaan",
                "live insaan",
                "indian serials",
                "funny",
                "serials",
                "daily soap",
                "illogical scenes",
                "tv serials"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-IN",
              "localized": {
                "title": "Earth se Badi Roti?? Indian TV Serials Roast",
                "description": "Today we are watching some Indian TV serials and they are great.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT14M23S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "4534365",
              "likeCount": "280159",
              "favoriteCount": "0",
              "commentCount": "12115"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "p6kj49zCkaDoSbOjuZSz0h-RxOo",
            "id": "VeIgrVagbyk",
            "snippet": {
              "publishedAt": "2024-08-06T04:11:45Z",
              "channelId": "UCo17p1v3vJ1Nk-ln7NwMogw",
              "title": "सूरज गेला वैभवच्या अंगावर धावून | Bigg Boss Marathi New Season | Colors Marathi | Suraj & Vaibhav",
              "description": "बिग बॉस मराठीच्या आजच्या भागात कॅप्टन्सी टास्क दरम्यान सूरज वैभवच्या अंगावर धावून गेला आहे. काय घडणार आजच्या भागात पाहा या व्हिडीओमध्ये. \n\n#ColorsMarathi #BIGGBOSSMarathi #JioCinema #bbm #biggbossmarathiseason5 #rajshrimarathishowbuz #episodehighlights #biggbossmarathinewepisode #episodeupdate #surajchavan #vaibhavchavan #biggbossmarathifight \n\nअरबाजला जिंकवण्यासाठी निखिल करणार गद्दारी ? - https://youtu.be/_8Ay-ANQGks\nकॅप्टन होण्यासाठी अरबाज-अभिजितच्या अंगावर बसला - https://youtu.be/68hjLxP-H_0\nपुरूषोत्तम पाटील यांचे मोठे खुलासे - https://youtu.be/oO-TYBZL8tQ\nनिक्की-अरबाजमध्ये जोरदार वाजलं - https://youtu.be/ySLKJha75Zw\n\n\nFor All The Latest Television Updates and Entertainment New Subscribe to Rajshri Marathi ShowBuz: https://www.youtube.com/MarathiShowBuz\n\nSnapchat Rajshri Marathi Showbuz: https://story.snapchat.com/p/16a91788-51c9-451b-bf0b-8b27497fd436/827105165832192",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/VeIgrVagbyk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/VeIgrVagbyk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/VeIgrVagbyk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/VeIgrVagbyk/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/VeIgrVagbyk/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Rajshri Marathi ShowBuz",
              "tags": [
                "bigg boss marathi season 5",
                "bigg boss marathi live",
                "bigg boss marathi",
                "bigg boss marathi 5",
                "bigg boss marathi tasks",
                "bigg boss marathi 5 episode",
                "bigg boss marathi new season",
                "bigg boss marathi season 5 latest update",
                "bigg boss marathi today episode",
                "bigg boss marathi season 5 today episode",
                "colors marathi",
                "bigg boss marathi todays episode",
                "nikki tamboli bigg boss marathi",
                "suraj chavan",
                "vaibhav chavan",
                "suraj chavan and vaibhav chavan fight",
                "सूरज गेला वैभवच्या अंगावर धावून"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "सूरज गेला वैभवच्या अंगावर धावून | Bigg Boss Marathi New Season | Colors Marathi | Suraj & Vaibhav",
                "description": "बिग बॉस मराठीच्या आजच्या भागात कॅप्टन्सी टास्क दरम्यान सूरज वैभवच्या अंगावर धावून गेला आहे. काय घडणार आजच्या भागात पाहा या व्हिडीओमध्ये. \n\n#ColorsMarathi #BIGGBOSSMarathi #JioCinema #bbm #biggbossmarathiseason5 #rajshrimarathishowbuz #episodehighlights #biggbossmarathinewepisode #episodeupdate #surajchavan #vaibhavchavan #biggbossmarathifight \n\nअरबाजला जिंकवण्यासाठी निखिल करणार गद्दारी ? - https://youtu.be/_8Ay-ANQGks\nकॅप्टन होण्यासाठी अरबाज-अभिजितच्या अंगावर बसला - https://youtu.be/68hjLxP-H_0\nपुरूषोत्तम पाटील यांचे मोठे खुलासे - https://youtu.be/oO-TYBZL8tQ\nनिक्की-अरबाजमध्ये जोरदार वाजलं - https://youtu.be/ySLKJha75Zw\n\n\nFor All The Latest Television Updates and Entertainment New Subscribe to Rajshri Marathi ShowBuz: https://www.youtube.com/MarathiShowBuz\n\nSnapchat Rajshri Marathi Showbuz: https://story.snapchat.com/p/16a91788-51c9-451b-bf0b-8b27497fd436/827105165832192"
              },
              "defaultAudioLanguage": "mr"
            },
            "contentDetails": {
              "duration": "PT1M4S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                "allowed": [
                  "IN"
                ]
              },
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "325930",
              "likeCount": "2111",
              "favoriteCount": "0",
              "commentCount": "511"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "20CudPkLShiub_R0UDgNg1Zf538",
            "id": "m1tsVQqy_pc",
            "snippet": {
              "publishedAt": "2024-08-06T10:30:17Z",
              "channelId": "UCGpC20ahRevP-mRPvktYSPA",
              "title": "हरियाली तीज स्पेशल | झूला झूल रही सब सखिया | 2024 Hariyali Teej Bhajan | Jhula Jhul Rahi Sb Sakhiya",
              "description": "#झूलाझूलरहीसबसखिया\n#Shivbhajan\n#mahadevsongs \n#झूलाझूलरहीगौरा\n#JhulaJhulRahiGaura\n#sawanspecialhariyaliteej\n#teejspecialbhajan\n#shivparvatibhajan \n#shivparvatijhulabhajan\n#specialteejgeet\n#shivparvatiteejgeet\n#jhulajhul\n#jhulajhulrahisbsakhiya\n#teejthohaar\n#teejtohaargeet\n#teejkedinbhajansunao\n#teejkebhajansunao\n#bhaktibhajankirtan \n#भक्तिभाजनकीर्तन \n#vianetmedia\n\n1647-DVT_JKB\n\nझूला झूल रही गौरा, Jhula Jhul Rahi Gaura, हरियाली तीज स्पेशल भजन, Sapna Vishwakarma , Rudradhari mahadev, Shiv bhajan, mahadev songs , झूला झूल रही गौरा, Jhula Jhul Rahi Gaura, sawan special hariyali teej,-teej special bhajan, shiv parvati bhajan , shiv parvati jhula bhajan,-special teej geet, shiv parvati teej geet, teej thohaar, teej tohaar geet,jhula jhul rahi gora maharani ke lal , gora jhula jhul rahi bholenath song, sawan mein jhula jhul rahe radhe sang kunj bihari, sawan me jhula, गौरा झूला झूल रही भोलेनाथ सॉन्ग , jhula jhul rahe nandlal, gaura jhula jhul rahi,gaura jhula jhul rahi bholenath sang,jhula jhule gaura rani,goura jhula jhule,gora jhula jhul rahi bholenath sang,gaura jhula jhool rahi bhole nath sang,gora jhula jhul rahi,jhula jhul rahi gaura,gaura jhula jhul rhi,jhula jhul rahe bhagwan,gaura jhula jhul rahi bholenath sonh,jhula jhulo ri radha rani,gaura jhula jhul rahi bholenath sang song,gaura jhula jhul rahi bholenath sang status,gaura jhula jhul rahi bholenath sang bhajan, 2024 hariyali teej bhajan, aaya hariyali teeh ka mela, hariyali teej mela",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/m1tsVQqy_pc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/m1tsVQqy_pc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/m1tsVQqy_pc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/m1tsVQqy_pc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/m1tsVQqy_pc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Bhakti Bhajan Kirtan",
              "tags": [
                "झूला झूल रही गौरा",
                "Jhula Jhul Rahi Gaura",
                "हरियाली तीज स्पेशल भजन",
                "Sapna Vishwakarma",
                "Rudradhari mahadev",
                "Shiv bhajan",
                "mahadev songs",
                "sawan special hariyali teej",
                "-teej special bhajan",
                "shiv parvati bhajan",
                "shiv parvati jhula bhajan",
                "-special teej geet",
                "shiv parvati teej geet",
                "teej thohaar",
                "teej tohaar geet",
                "jhula jhul rahi gora maharani ke lal",
                "gora jhula jhul rahi bholenath song",
                "sawan mein jhula jhul rahe radhe sang kunj bihari"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "हरियाली तीज स्पेशल | झूला झूल रही सब सखिया | 2024 Hariyali Teej Bhajan | Jhula Jhul Rahi Sb Sakhiya",
                "description": "#झूलाझूलरहीसबसखिया\n#Shivbhajan\n#mahadevsongs \n#झूलाझूलरहीगौरा\n#JhulaJhulRahiGaura\n#sawanspecialhariyaliteej\n#teejspecialbhajan\n#shivparvatibhajan \n#shivparvatijhulabhajan\n#specialteejgeet\n#shivparvatiteejgeet\n#jhulajhul\n#jhulajhulrahisbsakhiya\n#teejthohaar\n#teejtohaargeet\n#teejkedinbhajansunao\n#teejkebhajansunao\n#bhaktibhajankirtan \n#भक्तिभाजनकीर्तन \n#vianetmedia\n\n1647-DVT_JKB\n\nझूला झूल रही गौरा, Jhula Jhul Rahi Gaura, हरियाली तीज स्पेशल भजन, Sapna Vishwakarma , Rudradhari mahadev, Shiv bhajan, mahadev songs , झूला झूल रही गौरा, Jhula Jhul Rahi Gaura, sawan special hariyali teej,-teej special bhajan, shiv parvati bhajan , shiv parvati jhula bhajan,-special teej geet, shiv parvati teej geet, teej thohaar, teej tohaar geet,jhula jhul rahi gora maharani ke lal , gora jhula jhul rahi bholenath song, sawan mein jhula jhul rahe radhe sang kunj bihari, sawan me jhula, गौरा झूला झूल रही भोलेनाथ सॉन्ग , jhula jhul rahe nandlal, gaura jhula jhul rahi,gaura jhula jhul rahi bholenath sang,jhula jhule gaura rani,goura jhula jhule,gora jhula jhul rahi bholenath sang,gaura jhula jhool rahi bhole nath sang,gora jhula jhul rahi,jhula jhul rahi gaura,gaura jhula jhul rhi,jhula jhul rahe bhagwan,gaura jhula jhul rahi bholenath sonh,jhula jhulo ri radha rani,gaura jhula jhul rahi bholenath sang song,gaura jhula jhul rahi bholenath sang status,gaura jhula jhul rahi bholenath sang bhajan, 2024 hariyali teej bhajan, aaya hariyali teeh ka mela, hariyali teej mela"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT16M6S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "65260",
              "likeCount": "439",
              "favoriteCount": "0",
              "commentCount": "10"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "LEKmLoVIMUI2LIunPj0hEj7klOk",
            "id": "nyJK3GLJHQw",
            "snippet": {
              "publishedAt": "2024-08-06T15:05:55Z",
              "channelId": "UC8ZRiu_mBJwuMHcdIpKjTfA",
              "title": "Happy Birthday Dipi | I Love You ❤️ \u200b| Blessed To Have You 🤲 | Shoaib Ibrahim | vlog",
              "description": "My instagram:- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc\n\nMy twitter:- https://twitter.com/shoaib_ibrahim1?s=21\n\nMusic: Joy\nMusician: ASHUTOSH\nSite: https://soundcloud.com/grandakt/joy",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nyJK3GLJHQw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nyJK3GLJHQw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nyJK3GLJHQw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/nyJK3GLJHQw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/nyJK3GLJHQw/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Shoaib Ibrahim Official",
              "tags": [
                "shoaib ibrahim",
                "dipika kakar",
                "dipika kakar ibrahim",
                "ramadan",
                "ramadan2021",
                "ibrahim family",
                "shoaib ibrahim official",
                "latest vlog",
                "shoaib ibrahim vlogs",
                "sehri vlog",
                "iftar vlog",
                "family",
                "family fun",
                "sasural simar ka",
                "simar",
                "ssk2",
                "yaar dua",
                "shoaika",
                "shoaika wedding",
                "shoika proposal",
                "daily vlog",
                "saba ibrahim",
                "dipika pregnant",
                "Ruhaan",
                "Daawat",
                "Bigg Boss",
                "Happy birthday dipika",
                "Dipika ka birthday"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Happy Birthday Dipi | I Love You ❤️ \u200b| Blessed To Have You 🤲 | Shoaib Ibrahim | vlog",
                "description": "My instagram:- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc\n\nMy twitter:- https://twitter.com/shoaib_ibrahim1?s=21\n\nMusic: Joy\nMusician: ASHUTOSH\nSite: https://soundcloud.com/grandakt/joy"
              }
            },
            "contentDetails": {
              "duration": "PT14M10S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1406920",
              "likeCount": "70004",
              "favoriteCount": "0",
              "commentCount": "2505"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "DFjc2zlLWeNZ1H9L1tME0sovFwA",
            "id": "-eIiUhsyx_8",
            "snippet": {
              "publishedAt": "2024-08-06T15:30:00Z",
              "channelId": "UCtrovMbRR6h_XLMfdbhqb1A",
              "title": "Malli Serial | Episode 101 Promo | 7th Aug 24 | Nikitha | Vijay | Saregama TV Shows Tamil",
              "description": "👉Subscribe To Saregama TV Shows Tamil - https://bit.ly/SaregamaTVShowsTamil\n\nSUBSCRIBE to Saregama TV Shows Tamil Channel and Don't forget to switch ON your notification for all the upcoming serial episode updates.             \n\nVideo Credits : \nCredits : \nNikitha , Vijay , Rahila Sayedh , Nidhish , Dhanushree , Gracy Thangavel , Poornima Bhagyaraj , Krithika Annamalai , Dev Anand , Nisha Kapoor , Venkat , Nalini , Sai ram , Madhan bob , Bharathi mohan.\n\nCrew:\nExecutive Vice President: B.R.Vijayalakshmi\nCreative Head: Prince\nDirector: Manibharathy\nDOP: Akilan  \nStory: Saregama  \nEditor : K. Shankar\n\nFollow us on \nInstagram : https://instagram.com/saregamatvshows_?igshid=MzRlODBiNWFlZA==\n\nSaregama India Limited, A RPSG Group Company\n\nSubscribe to: http://www.youtube.com/saregamatvshowstamil\nFollow us on X: https://twitter.com/saregamasouth\nLike us on: https://www.facebook.com/saregamatamil\nVisit our website: http://www.saregama.com\n\n#MalliSerial  #MalliSerialPromo  #NikithaRajesh  #VijayVenkatesan #SaregamaTVShowsTamil",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/-eIiUhsyx_8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/-eIiUhsyx_8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/-eIiUhsyx_8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/-eIiUhsyx_8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/-eIiUhsyx_8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Saregama TV Shows Tamil",
              "tags": [
                "Malli Serial",
                "Malli Serial Promo",
                "Malli Serial Sun tv",
                "Malli Serial Promo Latest",
                "Nikitha Rajesh",
                "Rahila Sayedh",
                "promo sun tv serial",
                "Vijay Venkatesan",
                "Ambika",
                "Poornima Bhagyaraj",
                "Malli Promo 101",
                "Sun TV Malli",
                "Malli Sun Tv",
                "Sun tv Serial",
                "Malli Serial Episodes",
                "Malli Latest Promo",
                "Malli",
                "Krithika Annamalai",
                "Malli Serial Vijay",
                "Malli Vijay Romance",
                "Saregama TV Shows Tamil",
                "Malli Serial latest Episodes",
                "Promo",
                "Sun tv Promos",
                "Malli Serial Ep 101"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Malli Serial | Episode 101 Promo | 7th Aug 24 | Nikitha | Vijay | Saregama TV Shows Tamil",
                "description": "👉Subscribe To Saregama TV Shows Tamil - https://bit.ly/SaregamaTVShowsTamil\n\nSUBSCRIBE to Saregama TV Shows Tamil Channel and Don't forget to switch ON your notification for all the upcoming serial episode updates.             \n\nVideo Credits : \nCredits : \nNikitha , Vijay , Rahila Sayedh , Nidhish , Dhanushree , Gracy Thangavel , Poornima Bhagyaraj , Krithika Annamalai , Dev Anand , Nisha Kapoor , Venkat , Nalini , Sai ram , Madhan bob , Bharathi mohan.\n\nCrew:\nExecutive Vice President: B.R.Vijayalakshmi\nCreative Head: Prince\nDirector: Manibharathy\nDOP: Akilan  \nStory: Saregama  \nEditor : K. Shankar\n\nFollow us on \nInstagram : https://instagram.com/saregamatvshows_?igshid=MzRlODBiNWFlZA==\n\nSaregama India Limited, A RPSG Group Company\n\nSubscribe to: http://www.youtube.com/saregamatvshowstamil\nFollow us on X: https://twitter.com/saregamasouth\nLike us on: https://www.facebook.com/saregamatamil\nVisit our website: http://www.saregama.com\n\n#MalliSerial  #MalliSerialPromo  #NikithaRajesh  #VijayVenkatesan #SaregamaTVShowsTamil"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT56S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "494369",
              "likeCount": "6960",
              "favoriteCount": "0",
              "commentCount": "84"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "SF4476DSWj_3KtmMVq3bgOeO4rU",
            "id": "9P03vHjLz9c",
            "snippet": {
              "publishedAt": "2024-08-05T11:34:27Z",
              "channelId": "UCIkLWMNCYzsI6cVQHJgEIqQ",
              "title": "എന്റെ പെണ്ണുകാണൽ ചടങ്ങ് ❤️ My First Experience l UNBOXINGDUDE l",
              "description": "#unboxingdude",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/9P03vHjLz9c/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/9P03vHjLz9c/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/9P03vHjLz9c/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/9P03vHjLz9c/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/9P03vHjLz9c/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "UNBOXINg dude",
              "tags": [
                "UNBOXINGDUDE"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "എന്റെ പെണ്ണുകാണൽ ചടങ്ങ് ❤️ My First Experience l UNBOXINGDUDE l",
                "description": "#unboxingdude"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT10M38S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "380093",
              "likeCount": "15938",
              "favoriteCount": "0",
              "commentCount": "1101"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "yYMXQtOMaUL-36arekLovhDI2Ck",
            "id": "i0psLSoKa3U",
            "snippet": {
              "publishedAt": "2024-08-03T12:33:15Z",
              "channelId": "UCLtCejNl8eAg4PO_9lf2TIg",
              "title": "Bheema Official Trailer | Vijaya Kumar | Charan Raj | Krishna Sarthak | Jagadeesh Gowda",
              "description": "Presenting the Official Trailer from the movie #Bheema Starring: Vijaya Kumar, Ashwini & more. written and directed by #VijayaKumar and produced by #KrishnaSarthak #JagadeeshGowda under the banner #KrishanaCreations #JagadeeshFilms Exclusive Only On Anand Audio Official Youtube Channel..!!! \n----------------------------------------------\n#Bheema #bheemaTrailer\n#VijayaKumar #CharanRaj #DuniyaVijayKumar,\n----------------------------------------------\n♪ Banner: Krishana Creations/Jagadeesh Films \n♪ Film: Bheema  \n♪ Producers: Krishna Sarthak And Jagadeesh Gowda\n♪ Written & Directed by: Vijaya Kumar\n♪ DOP: Shiva Sena\n♪ Music: Charan Raj\n♪ Dialogues: Masthi \n♪ Editor: Deepu S Kumar\n♪ Co-Director: N.R Mahesh Kumar (Thambi)\n♪ Associate Director:  Janardhan Mourya,Veera\n♪ Assistant Director:Jeevan, Samrat Vijay, Dennis\n♪ Poster Designers: Ashwin Ramesh  \n♪ Starcast: Duniya Vijaya Kumar, Ashwini & Others\n♪ Colorist : Ramesh - Unifi Media\n♪ Record Label: AANANDA AUDIO VIDEO\n--------------------------------------------\nTrailer Music Credits\n♪ All Tracks Composed Produced And Arranged by: Charanraj M R\n♪ Vocals: Srilakshmi Belmannu / Rap Vocals: Gubbi \n♪ Mixed And Mastered by: Sujith Sreedhar @2bq Studios \n♪ Music Supervision: Venkatesh G Bhat\n--------------------------------------------\nTo Listen On Your Favourite Music Streaming Platform\n♪ Wynk Music:  \nhttps://tinyurl.com/yn4p5amx\nhttps://tinyurl.com/2uukxz4x\nhttps://tinyurl.com/tazjkxbu\nhttps://tinyurl.com/yc5yj9kz\nhttps://tinyurl.com/4z8u9fht\n♪ JioSaavn: \nhttps://tinyurl.com/4k9rsbea\nhttps://tinyurl.com/5bmsv5es\nhttps://tinyurl.com/3ukd2c34\nhttps://tinyurl.com/bdh58yr9\nhttps://tinyurl.com/5x34h668\n♪ Gaana Music: \nhttps://tinyurl.com/26wvfu46\nhttps://tinyurl.com/y4hc38hz\nhttps://tinyurl.com/4fww9dxv\nhttps://tinyurl.com/sus5yfb3\nhttps://tinyurl.com/bdf9bsd2\n♪ Amazon Prime Music:\nhttps://tinyurl.com/ynuxb2f9\nhttps://tinyurl.com/5w3cejr4\nhttps://tinyurl.com/rwka3wk3\nhttps://tinyurl.com/3fwkut9h\nhttps://tinyurl.com/3fnpt88b\n♪ Hungama: \nhttps://tinyurl.com/36247bdk\nhttps://tinyurl.com/bde7umz2\nhttps://tinyurl.com/37th6crm\nhttps://tinyurl.com/yytbr2z9\nhttps://tinyurl.com/mcwakaux\n♪ YouTube Music: \nhttps://tinyurl.com/2daxpf5a\nhttps://tinyurl.com/h8zcs5sa\nhttps://tinyurl.com/bd3vuwch\nhttps://tinyurl.com/mu85xey4\nhttps://tinyurl.com/347tj9u4\n♪ Apple Music: \nhttps://tinyurl.com/u2t8k9mm\nhttps://tinyurl.com/cp2cxt7s\nhttps://tinyurl.com/3rfubx9m\nhttps://tinyurl.com/59kn6th4\nhttps://tinyurl.com/583fx7ty\n♪ Spotify Music: \nhttps://tinyurl.com/4ma98jd8\nhttps://tinyurl.com/ykt68v5a\nhttps://tinyurl.com/2d77r3ha\nhttps://tinyurl.com/7pyvc9kk\nhttps://tinyurl.com/ycxa3rzc\nInsta Reels Links\nhttps://tinyurl.com/33c99rcm - Bad Boys \nhttps://tinyurl.com/3fks2ux9 -  Love You Kane \nhttps://tinyurl.com/4zw4yvak - Noorupayi Mix\nhttps://tinyurl.com/2s3fb9hv - Don't Worry Baby Chinnamma\nhttps://tinyurl.com/ye29xp4h - Boom Boom Bengaluru\nhttps://tinyurl.com/yczptnpc - Bheema Theme Music\nhttps://tinyurl.com/5hefcsvx - Bheema Theme Music 02\nhttps://tinyurl.com/3cuxmkb9 - Bheema Theme Music 03\n----------------------------------------------\n►Also Watch Kannada Love Songs: https://tinyurl.com/bd33csxw\n►Also Watch Compilation Jukebox: https://tinyurl.com/5ez6s93z \n►Also Kannada Latest Lyrical Videos: https://tinyurl.com/4z885692\n►Also Listen Sing Along To Karaoke Songs: https://tinyurl.com/2x3b3e2t\n►Also Watch Kannada New Movies: https://tinyurl.com/4p5akcjz\n----------------------------------------------\n👉 Follow us on: https://twitter.com/aanandaaudio\n👉 Follow us on: https://www.facebook.com/aanandaaudio\n👉 Follow us on: www.instagram.com/aanandaaudio \n----------------------------------------------\nVISIT OUR OTHER OFFICIAL CHANNELS:-\n►Anand Audio: http://goo.gl/JtObUW\n►Anand Audio Kannada: https://goo.gl/dLSjmK\n►Anand Audio Comedy: https://goo.gl/UFXUhq\n►Anand Audio Audio Songs: https://bit.ly/401TQ5d\n►Anand Audio Video Songs: https://bit.ly/40pbQXb\n►Anand Audio Lyrical Songs: https://bit.ly/40j0sMf\n►Anand Audio Full Movie Story: https://bit.ly/3n9wxYU\n►Anand Audio Karaoke: https://bit.ly/3hFMALq\n►Anand Audio DJ Remix: https://bit.ly/3TvtlCS\n►Anand Audio Entertainment: https://goo.gl/G2yx6X--\n►Anand Audio Shorts: https://bit.ly/40iIFF9\n►Anand Audio Telugu: https://bit.ly/2SVGx3b\n►Anand Audio Tamil: https://bit.ly/2NYSRyN\n►Anand Audio Malayalam: https://bit.ly/3yNQFSS\n►Anand Audio Hindi: https://bit.ly/3FxF91O\n►Anand Audio Devotional: https://goo.gl/73RHJR\n►Anand Audio Naadu Nudi: https://goo.gl/UCLZLj\n►Anand Audio North Karnataka: http://bit.do/eUktp\n►Anand Audio Tulu: https://goo.gl/v4cgYq\n----------------------------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/i0psLSoKa3U/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/i0psLSoKa3U/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/i0psLSoKa3U/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/i0psLSoKa3U/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/i0psLSoKa3U/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Anand Audio",
              "tags": [
                "Bheema trailer",
                "Bheema songs",
                "Bheema full songs",
                "Bheema video songs",
                "Bheema kannada movie",
                "Bheema first look teaser",
                "duniya vijay bheem",
                "duniya vijay new movie bheema",
                "duniya vijay telugu movie",
                "duniya vijay narasimha reddy",
                "kannada new teaser and trailer",
                "kannada new teaser 2024",
                "kannada new trailer video",
                "kannada all new movie trailer",
                "kannada new film trailer",
                "kannada new film trailer 2024",
                "kannada trailer 2024",
                "2024 kannada movie trailer",
                "bheema official trailer"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Bheema Official Trailer | Vijaya Kumar | Charan Raj | Krishna Sarthak | Jagadeesh Gowda",
                "description": "Presenting the Official Trailer from the movie #Bheema Starring: Vijaya Kumar, Ashwini & more. written and directed by #VijayaKumar and produced by #KrishnaSarthak #JagadeeshGowda under the banner #KrishanaCreations #JagadeeshFilms Exclusive Only On Anand Audio Official Youtube Channel..!!! \n----------------------------------------------\n#Bheema #bheemaTrailer\n#VijayaKumar #CharanRaj #DuniyaVijayKumar,\n----------------------------------------------\n♪ Banner: Krishana Creations/Jagadeesh Films \n♪ Film: Bheema  \n♪ Producers: Krishna Sarthak And Jagadeesh Gowda\n♪ Written & Directed by: Vijaya Kumar\n♪ DOP: Shiva Sena\n♪ Music: Charan Raj\n♪ Dialogues: Masthi \n♪ Editor: Deepu S Kumar\n♪ Co-Director: N.R Mahesh Kumar (Thambi)\n♪ Associate Director:  Janardhan Mourya,Veera\n♪ Assistant Director:Jeevan, Samrat Vijay, Dennis\n♪ Poster Designers: Ashwin Ramesh  \n♪ Starcast: Duniya Vijaya Kumar, Ashwini & Others\n♪ Colorist : Ramesh - Unifi Media\n♪ Record Label: AANANDA AUDIO VIDEO\n--------------------------------------------\nTrailer Music Credits\n♪ All Tracks Composed Produced And Arranged by: Charanraj M R\n♪ Vocals: Srilakshmi Belmannu / Rap Vocals: Gubbi \n♪ Mixed And Mastered by: Sujith Sreedhar @2bq Studios \n♪ Music Supervision: Venkatesh G Bhat\n--------------------------------------------\nTo Listen On Your Favourite Music Streaming Platform\n♪ Wynk Music:  \nhttps://tinyurl.com/yn4p5amx\nhttps://tinyurl.com/2uukxz4x\nhttps://tinyurl.com/tazjkxbu\nhttps://tinyurl.com/yc5yj9kz\nhttps://tinyurl.com/4z8u9fht\n♪ JioSaavn: \nhttps://tinyurl.com/4k9rsbea\nhttps://tinyurl.com/5bmsv5es\nhttps://tinyurl.com/3ukd2c34\nhttps://tinyurl.com/bdh58yr9\nhttps://tinyurl.com/5x34h668\n♪ Gaana Music: \nhttps://tinyurl.com/26wvfu46\nhttps://tinyurl.com/y4hc38hz\nhttps://tinyurl.com/4fww9dxv\nhttps://tinyurl.com/sus5yfb3\nhttps://tinyurl.com/bdf9bsd2\n♪ Amazon Prime Music:\nhttps://tinyurl.com/ynuxb2f9\nhttps://tinyurl.com/5w3cejr4\nhttps://tinyurl.com/rwka3wk3\nhttps://tinyurl.com/3fwkut9h\nhttps://tinyurl.com/3fnpt88b\n♪ Hungama: \nhttps://tinyurl.com/36247bdk\nhttps://tinyurl.com/bde7umz2\nhttps://tinyurl.com/37th6crm\nhttps://tinyurl.com/yytbr2z9\nhttps://tinyurl.com/mcwakaux\n♪ YouTube Music: \nhttps://tinyurl.com/2daxpf5a\nhttps://tinyurl.com/h8zcs5sa\nhttps://tinyurl.com/bd3vuwch\nhttps://tinyurl.com/mu85xey4\nhttps://tinyurl.com/347tj9u4\n♪ Apple Music: \nhttps://tinyurl.com/u2t8k9mm\nhttps://tinyurl.com/cp2cxt7s\nhttps://tinyurl.com/3rfubx9m\nhttps://tinyurl.com/59kn6th4\nhttps://tinyurl.com/583fx7ty\n♪ Spotify Music: \nhttps://tinyurl.com/4ma98jd8\nhttps://tinyurl.com/ykt68v5a\nhttps://tinyurl.com/2d77r3ha\nhttps://tinyurl.com/7pyvc9kk\nhttps://tinyurl.com/ycxa3rzc\nInsta Reels Links\nhttps://tinyurl.com/33c99rcm - Bad Boys \nhttps://tinyurl.com/3fks2ux9 -  Love You Kane \nhttps://tinyurl.com/4zw4yvak - Noorupayi Mix\nhttps://tinyurl.com/2s3fb9hv - Don't Worry Baby Chinnamma\nhttps://tinyurl.com/ye29xp4h - Boom Boom Bengaluru\nhttps://tinyurl.com/yczptnpc - Bheema Theme Music\nhttps://tinyurl.com/5hefcsvx - Bheema Theme Music 02\nhttps://tinyurl.com/3cuxmkb9 - Bheema Theme Music 03\n----------------------------------------------\n►Also Watch Kannada Love Songs: https://tinyurl.com/bd33csxw\n►Also Watch Compilation Jukebox: https://tinyurl.com/5ez6s93z \n►Also Kannada Latest Lyrical Videos: https://tinyurl.com/4z885692\n►Also Listen Sing Along To Karaoke Songs: https://tinyurl.com/2x3b3e2t\n►Also Watch Kannada New Movies: https://tinyurl.com/4p5akcjz\n----------------------------------------------\n👉 Follow us on: https://twitter.com/aanandaaudio\n👉 Follow us on: https://www.facebook.com/aanandaaudio\n👉 Follow us on: www.instagram.com/aanandaaudio \n----------------------------------------------\nVISIT OUR OTHER OFFICIAL CHANNELS:-\n►Anand Audio: http://goo.gl/JtObUW\n►Anand Audio Kannada: https://goo.gl/dLSjmK\n►Anand Audio Comedy: https://goo.gl/UFXUhq\n►Anand Audio Audio Songs: https://bit.ly/401TQ5d\n►Anand Audio Video Songs: https://bit.ly/40pbQXb\n►Anand Audio Lyrical Songs: https://bit.ly/40j0sMf\n►Anand Audio Full Movie Story: https://bit.ly/3n9wxYU\n►Anand Audio Karaoke: https://bit.ly/3hFMALq\n►Anand Audio DJ Remix: https://bit.ly/3TvtlCS\n►Anand Audio Entertainment: https://goo.gl/G2yx6X--\n►Anand Audio Shorts: https://bit.ly/40iIFF9\n►Anand Audio Telugu: https://bit.ly/2SVGx3b\n►Anand Audio Tamil: https://bit.ly/2NYSRyN\n►Anand Audio Malayalam: https://bit.ly/3yNQFSS\n►Anand Audio Hindi: https://bit.ly/3FxF91O\n►Anand Audio Devotional: https://goo.gl/73RHJR\n►Anand Audio Naadu Nudi: https://goo.gl/UCLZLj\n►Anand Audio North Karnataka: http://bit.do/eUktp\n►Anand Audio Tulu: https://goo.gl/v4cgYq\n----------------------------------------------"
              },
              "defaultAudioLanguage": "kn"
            },
            "contentDetails": {
              "duration": "PT2M21S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "3715170",
              "likeCount": "104788",
              "favoriteCount": "0",
              "commentCount": "5115"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "VFPr_tUlLBSQ59WNTM5PPC2W5CU",
            "id": "gDIBMy4JoLc",
            "snippet": {
              "publishedAt": "2024-08-06T16:57:50Z",
              "channelId": "UC-CSyyi47VX1lD9zyeABW3w",
              "title": "Will this Asteroid DESTROY Earth in 2038? | Dhruv Rathee",
              "description": "Kickstart a promising career in Data Science and Software Development with SCALER. Check out: https://www.scaler.com/?utm_source=brandedcontent&utm_medium=DhruvAug2024&utm_campaign=brand_scaler_academy_brandedcontent_video-campaign-Dhruv-6thAug2024_india_all&utm_id=brandedcontent&utm_content\n\nIn this video, we debunk the news about NASA's simulated asteroid impact scenario and explain its truth. We explore how asteroids, comets, and meteoroids work, discuss past asteroid events, and detail NASA's current plans for planetary defense. Learn about the various methods we have to predict and prevent asteroid impacts, including kinetic, slow-push-pull, and nuclear techniques. Plus, we dive into the recent exercise by NASA and other agencies to improve our readiness for such scenarios and highlight the gaps that still need to be addressed. \n\nLink to the mentioned videos - https://www.youtube.com/watch?v=doUB1hRzLVQ\n\n----------------------------------------------------\nJOIN DHRUV RATHEE ACADEMY COURSES: \n\n🤖 Master ChatGPT Course: \nhttps://academy.dhruvrathee.com/chatgpt\nLearn to harness the power of ChatGPT and transform your life! \n\n🎥 The YouTube Blueprint Course: \nhttps://academy.dhruvrathee.com/youtube\nLearn how to make content creation your part-time job or full-time career! \n\n✏️ Time Management and Productivity Course :  https://academy.dhruvrathee.com\nLearn how to manage time and maximize productivity! \n\nUse GET20 for a straight up 20% discount on any of the courses.\n\nMY SOCIAL MEDIA HANDLES:\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n\nThis video is made solely with the purpose of spreading awareness and educating the viewers. The information demonstrated and explained in the video are true to the best of our team’s knowledge and research. Nevertheless, if any error is committed, the same was never intended to be and is absolutely unintentional. In the event of any inadvertent error, kindly email us at contact@dhruvrathee.com (mail subject : FEEDBACK) for necessary action, to resolve any error/dispute amicably. \n\nViewer’s discretion is advised w.r.t. the products/services of the sponsors advertised on our platforms. We do not claim any responsibility in any manner whatsoever regarding the product/services provided by the sponsors.\n----------------------------------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gDIBMy4JoLc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gDIBMy4JoLc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gDIBMy4JoLc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/gDIBMy4JoLc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/gDIBMy4JoLc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Dhruv Rathee",
              "tags": [
                "Dhruv Rathee",
                "Dhruv",
                "Rathee",
                "Dhruv Rathee latest video",
                "indian youtuber",
                "khan sir",
                "khan sir patna",
                "asteroids",
                "asteroid",
                "asteroid impact",
                "NASA exercise",
                "planetary defense",
                "NEOs",
                "asteroid prediction",
                "asteroid deflection",
                "asteroid avoidance",
                "comet",
                "meteoroid",
                "meteor",
                "meteorite",
                "space rock",
                "asteroid belt",
                "NASA simulation",
                "asteroid scenario",
                "asteroid threat",
                "DART mission",
                "Apophis asteroid",
                "asteroid detection",
                "FEMA",
                "NASA",
                "ISRO",
                "2038",
                "the end",
                "2012"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Will this Asteroid DESTROY Earth in 2038? | Dhruv Rathee",
                "description": "Kickstart a promising career in Data Science and Software Development with SCALER. Check out: https://www.scaler.com/?utm_source=brandedcontent&utm_medium=DhruvAug2024&utm_campaign=brand_scaler_academy_brandedcontent_video-campaign-Dhruv-6thAug2024_india_all&utm_id=brandedcontent&utm_content\n\nIn this video, we debunk the news about NASA's simulated asteroid impact scenario and explain its truth. We explore how asteroids, comets, and meteoroids work, discuss past asteroid events, and detail NASA's current plans for planetary defense. Learn about the various methods we have to predict and prevent asteroid impacts, including kinetic, slow-push-pull, and nuclear techniques. Plus, we dive into the recent exercise by NASA and other agencies to improve our readiness for such scenarios and highlight the gaps that still need to be addressed. \n\nLink to the mentioned videos - https://www.youtube.com/watch?v=doUB1hRzLVQ\n\n----------------------------------------------------\nJOIN DHRUV RATHEE ACADEMY COURSES: \n\n🤖 Master ChatGPT Course: \nhttps://academy.dhruvrathee.com/chatgpt\nLearn to harness the power of ChatGPT and transform your life! \n\n🎥 The YouTube Blueprint Course: \nhttps://academy.dhruvrathee.com/youtube\nLearn how to make content creation your part-time job or full-time career! \n\n✏️ Time Management and Productivity Course :  https://academy.dhruvrathee.com\nLearn how to manage time and maximize productivity! \n\nUse GET20 for a straight up 20% discount on any of the courses.\n\nMY SOCIAL MEDIA HANDLES:\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n\nThis video is made solely with the purpose of spreading awareness and educating the viewers. The information demonstrated and explained in the video are true to the best of our team’s knowledge and research. Nevertheless, if any error is committed, the same was never intended to be and is absolutely unintentional. In the event of any inadvertent error, kindly email us at contact@dhruvrathee.com (mail subject : FEEDBACK) for necessary action, to resolve any error/dispute amicably. \n\nViewer’s discretion is advised w.r.t. the products/services of the sponsors advertised on our platforms. We do not claim any responsibility in any manner whatsoever regarding the product/services provided by the sponsors.\n----------------------------------------------------"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT20M35S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "true",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "6344061",
              "likeCount": "446832",
              "favoriteCount": "0",
              "commentCount": "31246"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "c2v15sWylNNwhF-MN8wOLdTzNb0",
            "id": "Krda9nJnaX0",
            "snippet": {
              "publishedAt": "2024-08-06T16:08:08Z",
              "channelId": "UC4JCksJF76g_MdzPVBJoC3Q",
              "title": "Kabhi Main Kabhi Tum Episode 10 | Fahad Mustafa | Hania Aamir | 6 August 2024| ARY Digital",
              "description": "Watch all the episode of Kabhi Main Kabhi Tum here : https://bit.ly/3zNNsGu\n\nKabhi Main Kabhi Tum | Episode 10 | Digitally Presented by Master Paints , Food Panda , Sunsilk & Skin White | Fahad Mustafa | Hania Aamir | 6 August 2024 | ARY Digital Drama \n\nThe drama revolves around the concept of ‘Opposites Attract’ where Hania aka Sharjeena will portray the role of a bibliophile, topper and a sorted girl with a practical approach while Fahad’s character is a little laid-back.\n\nWriter: Farhat Ishtiaq\nDirected by: Badar Mehmood\n \nCast:\nFahad Mustafa as Mustafa\nHania Aamir as Sharjeena\nEmmad Irfani as Adeel\nJaved Sheikh as Iftekhar \nBushra Ansari as Shagufta\nMaya Khan as Sidra\nNaeema Butt as Rubab\nTauseeq Haider,\nYousuf Bashir Qureshi.\n\nWatch Kabhi Main Kabhi Tum every Monday & Tuesday at 8 :00 PM on ARY Digital\n\n#kabhimainkabhitum  #fahadmustafa  #haniaaamir  #emmadirfani  #javedsheikh  #bushraansari  #mayakhan  #NaeemaButt\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.\n\nSubscribe: https://bit.ly/2PiWK68\n\nJoin ARY Digital on Whatsapp\n 👉 https://bit.ly/3LnAbHU",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Krda9nJnaX0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Krda9nJnaX0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Krda9nJnaX0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/Krda9nJnaX0/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/Krda9nJnaX0/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "ARY Digital HD",
              "tags": [
                "Kabhi Main Kabhi Tum episode 10",
                "watch Kabhi Main Kabhi Tum ep 10",
                "kabhi main kabhi tum new drama",
                "new drama kabhi mein kabhi tum",
                "New drama Fahad Mustafa kabhi main kabhi tum",
                "Kabhi Main Kabhi Tum",
                "ARY Digital",
                "ARY",
                "Fahad Mustafa",
                "Hania Aamir",
                "Pakistani drama 2024",
                "Pakistani drama 2024 Kabhi Main Kabhi Tum ep 10",
                "latest episode kabhi mein kabhi tum",
                "new episode kabhi mein kabhi tum",
                "hania amir new drama",
                "Pakistani serial",
                "best dramas of Pakistan",
                "Drama"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Kabhi Main Kabhi Tum Episode 10 | Fahad Mustafa | Hania Aamir | 6 August 2024| ARY Digital",
                "description": "Watch all the episode of Kabhi Main Kabhi Tum here : https://bit.ly/3zNNsGu\n\nKabhi Main Kabhi Tum | Episode 10 | Digitally Presented by Master Paints , Food Panda , Sunsilk & Skin White | Fahad Mustafa | Hania Aamir | 6 August 2024 | ARY Digital Drama \n\nThe drama revolves around the concept of ‘Opposites Attract’ where Hania aka Sharjeena will portray the role of a bibliophile, topper and a sorted girl with a practical approach while Fahad’s character is a little laid-back.\n\nWriter: Farhat Ishtiaq\nDirected by: Badar Mehmood\n \nCast:\nFahad Mustafa as Mustafa\nHania Aamir as Sharjeena\nEmmad Irfani as Adeel\nJaved Sheikh as Iftekhar \nBushra Ansari as Shagufta\nMaya Khan as Sidra\nNaeema Butt as Rubab\nTauseeq Haider,\nYousuf Bashir Qureshi.\n\nWatch Kabhi Main Kabhi Tum every Monday & Tuesday at 8 :00 PM on ARY Digital\n\n#kabhimainkabhitum  #fahadmustafa  #haniaaamir  #emmadirfani  #javedsheikh  #bushraansari  #mayakhan  #NaeemaButt\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.\n\nSubscribe: https://bit.ly/2PiWK68\n\nJoin ARY Digital on Whatsapp\n 👉 https://bit.ly/3LnAbHU"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT39M51S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "5093768",
              "likeCount": "116951",
              "favoriteCount": "0",
              "commentCount": "3768"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "zIagQ6vBAq7mbnyeabbP-7IQLgg",
            "id": "IwnrmeUmcRo",
            "snippet": {
              "publishedAt": "2024-08-05T07:30:06Z",
              "channelId": "UChCYMXLO_SfiNwOc2rlNKCA",
              "title": "Bhuvan Bam Aur Farah Khan Ka Perfect Vada Pav! | @FarahKhanK",
              "description": "Bhuvan Bam aka BB Ki Vines ke sath milkar monsoon ke liye maine banaya Mumbai ka iconic Vada Pav! Do like, share, and subscribe to the channel.\n\nDon't forget to subscribe and hit the notification bell so you never miss out on my latest recipes and cooking adventures!\n\nClick here to subscribe my channel:- https://www.youtube.com/channel/UChCYMXLO_SfiNwOc2rlNKCA?sub_confirmation=1\n\nBrand Enquiry: farah.khan@qyuki.com\n\nAlso follow me on:-\nInstagram - https://www.instagram.com/farahkhankunder/\nTwitter - https://twitter.com/thefarahkhan?lang=en\nFacebook - https://www.facebook.com/TheFarahKhan\n\n#farahkhan #bbkivines #bhuvanbam #vadapavrecipe",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/IwnrmeUmcRo/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/IwnrmeUmcRo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/IwnrmeUmcRo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/IwnrmeUmcRo/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/IwnrmeUmcRo/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Farah Khan",
              "tags": [
                "farah khan",
                "farah khan youtube channel",
                "farah khan director",
                "farah khan kunder",
                "farah khan viral recipes",
                "farah khan food recipes",
                "farah khan vlog",
                "farah khan yt channel",
                "farah khan food vlog",
                "food with farah",
                "food vlog",
                "bb ki vines",
                "bb ki vines cooking",
                "bhuvan bam",
                "bhuvam bam and farah khan",
                "bhuvan bam cooking",
                "bb ki vines with farah khan",
                "vada pav recipe",
                "vada pav",
                "mumbai vada pav",
                "farah khan vada pav recipe",
                "bhuvan bam new video",
                "bhuvan bam video"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Bhuvan Bam Aur Farah Khan Ka Perfect Vada Pav! | @FarahKhanK",
                "description": "Bhuvan Bam aka BB Ki Vines ke sath milkar monsoon ke liye maine banaya Mumbai ka iconic Vada Pav! Do like, share, and subscribe to the channel.\n\nDon't forget to subscribe and hit the notification bell so you never miss out on my latest recipes and cooking adventures!\n\nClick here to subscribe my channel:- https://www.youtube.com/channel/UChCYMXLO_SfiNwOc2rlNKCA?sub_confirmation=1\n\nBrand Enquiry: farah.khan@qyuki.com\n\nAlso follow me on:-\nInstagram - https://www.instagram.com/farahkhankunder/\nTwitter - https://twitter.com/thefarahkhan?lang=en\nFacebook - https://www.facebook.com/TheFarahKhan\n\n#farahkhan #bbkivines #bhuvanbam #vadapavrecipe"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT18M34S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1426891",
              "likeCount": "49112",
              "favoriteCount": "0",
              "commentCount": "2276"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "o1JCjGhJ3MuHs4l7quWbGpfUS8Y",
            "id": "0UqZT9Gkt3k",
            "snippet": {
              "publishedAt": "2024-08-06T16:25:18Z",
              "channelId": "UCBnxEdpoZwstJqC1yZpOjRA",
              "title": "Sundari - Promo | 07 Aug 2024  | Tamil Serial | Sun TV",
              "description": "Watch the Latest Promo of popular Tamil Serial #Sundari that airs on Sun TV.\n\nWatch all Sun TV serials immediately after the TV telecast on Sun NXT app. *Free for Indian Users only\n\nDownload here:\nAndroid - http://bit.ly/SunNxtAdroid\niOS: India - http://bit.ly/sunNXT\nWatch on the web - https://www.sunnxt.com/\n\nWith courage, Sundari defies obstacles to realize her IAS dream & takes charge as the collector. Can she keep custody of Thamizh, with the child's father, Karthi, in the picture? Follow her journey as love & duty get pitted against each other.\n\n#SundariPromo #SundariSerial #Sundari #SunTVSerial #SunTV\n\nDon't forget to SUBSCRIBE to the Sun TV YouTube 👉 http://bit.ly/suntvsubscribe\n\n---------------------------------------------------------\nWatch more:\nMovie Clips on SUN NXT - https://bit.ly/3gc1dPI\nShows from Sun Music - http://bit.ly/2YS5eBi\nComedy Shows from AdithyaTV - http://bit.ly/2K6VaiZ\nNews from Sun News - http://bit.ly/2Yyvgsi\n---------------------------------------------------------\nSUN NXT: Watch the latest movies in DOLBY DIGITAL PLUS, 4000+ Movies in HD, 30+ Live TV Channels, TV Shows, TV Serials & Digital Exclusives on SUN NXT anywhere anytime.\n---------------------------------------------------------\nFollow us on Social Media for Latest Updates:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv\n---------------------------------------------------------\n#SuntvSerial #TamilSerialPromo #SunTVshows #NewTamilSerials #SunTV #SunTVserials #SunTVProgram #SunNXT #LatestTamilSerials #SuntvSerialPromo #SuntvSerialEpisodes #SunTVpromos #TamilSerialPromos #TamilTVserials #TamilSerialEpisodes\n---------------------------------------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/0UqZT9Gkt3k/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/0UqZT9Gkt3k/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/0UqZT9Gkt3k/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/0UqZT9Gkt3k/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/0UqZT9Gkt3k/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sun TV",
              "tags": [
                "Sundari",
                "Sundari today",
                "Sundari serial",
                "Sundari promo",
                "Sundari serial promo",
                "Sundari sun tv serial",
                "Sun TV Serial",
                "Sun TV Serials",
                "sun tv tamil serial",
                "SunTV Serial Today",
                "sun tv serial today",
                "Sun tv full episodes",
                "Sun tv tamil full episodes",
                "Sun tv tamil shows",
                "sun tv shows",
                "Tamil Serials",
                "tamil serials sun tv",
                "Tamil Serial episodes"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Sundari - Promo | 07 Aug 2024  | Tamil Serial | Sun TV",
                "description": "Watch the Latest Promo of popular Tamil Serial #Sundari that airs on Sun TV.\n\nWatch all Sun TV serials immediately after the TV telecast on Sun NXT app. *Free for Indian Users only\n\nDownload here:\nAndroid - http://bit.ly/SunNxtAdroid\niOS: India - http://bit.ly/sunNXT\nWatch on the web - https://www.sunnxt.com/\n\nWith courage, Sundari defies obstacles to realize her IAS dream & takes charge as the collector. Can she keep custody of Thamizh, with the child's father, Karthi, in the picture? Follow her journey as love & duty get pitted against each other.\n\n#SundariPromo #SundariSerial #Sundari #SunTVSerial #SunTV\n\nDon't forget to SUBSCRIBE to the Sun TV YouTube 👉 http://bit.ly/suntvsubscribe\n\n---------------------------------------------------------\nWatch more:\nMovie Clips on SUN NXT - https://bit.ly/3gc1dPI\nShows from Sun Music - http://bit.ly/2YS5eBi\nComedy Shows from AdithyaTV - http://bit.ly/2K6VaiZ\nNews from Sun News - http://bit.ly/2Yyvgsi\n---------------------------------------------------------\nSUN NXT: Watch the latest movies in DOLBY DIGITAL PLUS, 4000+ Movies in HD, 30+ Live TV Channels, TV Shows, TV Serials & Digital Exclusives on SUN NXT anywhere anytime.\n---------------------------------------------------------\nFollow us on Social Media for Latest Updates:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv\n---------------------------------------------------------\n#SuntvSerial #TamilSerialPromo #SunTVshows #NewTamilSerials #SunTV #SunTVserials #SunTVProgram #SunNXT #LatestTamilSerials #SuntvSerialPromo #SuntvSerialEpisodes #SunTVpromos #TamilSerialPromos #TamilTVserials #TamilSerialEpisodes\n---------------------------------------------------------"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT41S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "813077",
              "likeCount": "8971",
              "favoriteCount": "0",
              "commentCount": "322"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "uzUEGLVr5VSkMMG-PjP-ELAGlyM",
            "id": "-eKPc_r90wQ",
            "snippet": {
              "publishedAt": "2024-08-07T06:01:46Z",
              "channelId": "UCKUq0fgjo6fzBk0xSI4Um7w",
              "title": "Akashi Ganga - আকাশী গঙ্গা  | 06th August 2024 | Ep No 92",
              "description": "Click here to Subscribe to Rang TV Channel:- http://bit.ly/2zKPoy8\n\nEpisode No :- 92\n--------------------------\n\n#Rangtv #AkashiGanga #Prideeastentertainments\n\nMore Useful Links :\n* Visit us at: http://www.rangtv.org\n* Like us on Facebook: https://www.facebook.com/Rangtvofficial/\n* Follow us on Twitter: https://twitter.com/rangtv2",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/-eKPc_r90wQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/-eKPc_r90wQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/-eKPc_r90wQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Rang TV",
              "tags": [
                "Rang",
                "Rang TV",
                "Rang Serial",
                "Assamese Serial",
                "Assamese TV Serial",
                "Assamese Serial Channel",
                "Assamese Serial Show",
                "TV Serial",
                "TV Show",
                "Akashi Ganga.",
                "Akashi Ganga Latest Episode.",
                "Akashi Ganga 06th aug 2024",
                "Assamese Drama Serial",
                "Akashi Ganga Episode No 92",
                "Axomia Serial",
                "Assamese Serial Full Episode"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Akashi Ganga - আকাশী গঙ্গা  | 06th August 2024 | Ep No 92",
                "description": "Click here to Subscribe to Rang TV Channel:- http://bit.ly/2zKPoy8\n\nEpisode No :- 92\n--------------------------\n\n#Rangtv #AkashiGanga #Prideeastentertainments\n\nMore Useful Links :\n* Visit us at: http://www.rangtv.org\n* Like us on Facebook: https://www.facebook.com/Rangtvofficial/\n* Follow us on Twitter: https://twitter.com/rangtv2"
              },
              "defaultAudioLanguage": "as"
            },
            "contentDetails": {
              "duration": "PT19M1S",
              "dimension": "2d",
              "definition": "sd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "97578",
              "likeCount": "4248",
              "favoriteCount": "0",
              "commentCount": "136"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "zFvwj9ocpNzMWBluVek6tgdtrJ4",
            "id": "EnTQed5zS3M",
            "snippet": {
              "publishedAt": "2024-08-06T06:11:26Z",
              "channelId": "UCVh3tWYARk8wRw8EqjNL6rw",
              "title": "Flight ఎక్కగానే మా అమ్మ ఏడ్చేసింది. మాకు బాధేసింది🥹|| Madam Anthe || Strikers",
              "description": "#MadamAnthe #SreevaniVlogs #Sreevani #vikramadityareddy #rajanandini #Strikers \n\nFlight ఎక్కగానే మా అమ్మ ఏడ్చేసింది. మాకు బాధేసింది || Madam Anthe || Strikers\n\nFollow Us on -\nFollow Me on Instagram 👉 https://www.instagram.com/k.sreevani\nFollow Vikram Aditya Reddy on Instagram 👉 https://instagram.com/vikramaditya1625\nFollow Rajanandini on Instagram 👉 https://www.instagram.com/k_rajanandini/\n------------------------\nFor Branding and Collaborations:\n\nMail us @ sandeep@strikersdigital.com\n\nLinkedIn - https://www.linkedin.com/in/sandeep-miryala-0a348686\n\nCall us @ 9553191194",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/EnTQed5zS3M/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/EnTQed5zS3M/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/EnTQed5zS3M/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/EnTQed5zS3M/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/EnTQed5zS3M/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Madam Anthe",
              "tags": [
                "madam anthe",
                "madam anthe channel",
                "actress sreevani",
                "madam anthe youtube channel",
                "Sreevani",
                "Sreevani Vlogs",
                "madam anthe vlogs",
                "madam anthe home tour",
                "madam anthe sreevani",
                "madam anthe actress sreevani",
                "actress sreevani latest videos",
                "madam anthe latest videos",
                "sreevani home tour",
                "sreevani Latest videos",
                "Sreevani latest Vlogs"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Flight ఎక్కగానే మా అమ్మ ఏడ్చేసింది. మాకు బాధేసింది🥹|| Madam Anthe || Strikers",
                "description": "#MadamAnthe #SreevaniVlogs #Sreevani #vikramadityareddy #rajanandini #Strikers \n\nFlight ఎక్కగానే మా అమ్మ ఏడ్చేసింది. మాకు బాధేసింది || Madam Anthe || Strikers\n\nFollow Us on -\nFollow Me on Instagram 👉 https://www.instagram.com/k.sreevani\nFollow Vikram Aditya Reddy on Instagram 👉 https://instagram.com/vikramaditya1625\nFollow Rajanandini on Instagram 👉 https://www.instagram.com/k_rajanandini/\n------------------------\nFor Branding and Collaborations:\n\nMail us @ sandeep@strikersdigital.com\n\nLinkedIn - https://www.linkedin.com/in/sandeep-miryala-0a348686\n\nCall us @ 9553191194"
              },
              "defaultAudioLanguage": "te"
            },
            "contentDetails": {
              "duration": "PT12M23S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "226403",
              "likeCount": "2739",
              "favoriteCount": "0",
              "commentCount": "64"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "ccH6-ikuVJaNjuQJ1EyomQ2YGLI",
            "id": "G_-UYcf1v4M",
            "snippet": {
              "publishedAt": "2024-08-02T06:30:08Z",
              "channelId": "UCrtOnzd9dWH9lXTAB-64Hfg",
              "title": "F*CK WHAT THEY SAY | King & MC STΔN | Monopoly Moves | Official Music Video",
              "description": "\"F*CK WHAT THEY SAY\" marks King and MC Stan's debut collaboration which arrives as a part of the New Delhi-based artist's latest album \"Monopoly Moves''. A braggadocious track where both of them rap about their luxurious lifestyles, success and swagger, it takes a heavier turn in the second half which sees producer Riz Shain turn things upside down with his bold experimentation of pulsating rhythms as King and MC Stan showcase their aggressive and gritty performance which bumps up the chaotic energy of the song to hit the roof.\n\nSTREAM NOW : https://out-now.lnk.to/MonopolyMoves\n\nSong Name : F*CK WHAT THEY SAY\nArtist : King, MC Stan\nLyrics : King, MC Stan\nMusic Producer : Riz Shain\nComposed by : King, MC Stan\nAdditional Production: Priyanshu Soni\nMixed by : Hanish Taneja\nMastered by : Hanish Taneja\n\nVideo Credits: \n\nDirector : Lendrick Kumar\nDOP : Aswin Sumesh\nChief Associate Director : Ankur Bhatnaagar\nDirector Assistant : Deepika Menon\nAssociate Camera : Akhil Sasidharan\nEditor & VFX : Anush SK\n3D Artist : FL3VI\nColourist : Eldho M Reji\nSet Designer : Neha Pednekar\nArt Director: Ashok Biswas\nArt Assistant : Ejaz Khan\n\nFocus Puller : Ashish Vishwakarma\nGaffer : Sunny Singh\nLights  Light n Light\nCamera : RD Equipment\nRigging: Galaxy Equipment\nPanther Dolly: Cine Grips\n\nHMUA : Dinesh Dhake\nStylist : Khushboo Gupta\nDressmam: Santosh Yadav\n\nProduction House : Simran Bakshi Films\nProducer : Simran Bakshi\nExecutive Producer : Simran Bakshi & Prathmesh Dabir\nLine Producer : Manish Raut\nAssociate Producer : Ankit Nayar & Zerab Aderianwalla\nLine Producer : AnAkproductions\nAssistant Producer : Smriti Ramakrishnan \n\nBTS & Stills : Mihir Shah\nStills Photographer: Jogi Singh\nDIT: Nikhil Jadhav\n\nKing’s Hair Stylist  : Javed\nKing’s Makeup Artist : Swapnil \n\u200bWardrobe Styling : Nikita Jaisinghani\n\nExecutive Producer : Bhavya Anand & Sweta Ojha\nCreative Producer : Bhavya Anand & Rajrishi Murthi\nProduction Head : Chiranshu Thakur\n\nMC Stan's Management : Represent\n\nFollow KING :\nSPOTIFY : https://open.spotify.com/artist/5NHm4TU5Twz7owibYxJfFU\nAPPLE MUSIC : https://music.apple.com/il/artist/king/1489995981\nINSTAGRAM : https://www.instagram.com/ifeelking/ \nFACEBOOK : https://www.facebook.com/ifeelking \nTWITTER : https://twitter.com/ifeelkingOG \nSNAPCHAT : https://www.snapchat.com/add/ifeelkingxo \nBLANKO : https://www.instagram.com/ifeelblanko/\n\nFollow MC Stan :\nSPOTIFY : https://open.spotify.com/artist/5uemEEtB1ZC3s1KM7gReeH?si=_0846yRHQ5OozWLNdsEdAQ\nAPPLE MUSIC : https://music.apple.com/in/artist/mc-stan/1530205305\nINSTAGRAM : https://www.instagram.com/m___c___stan/",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/G_-UYcf1v4M/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/G_-UYcf1v4M/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/G_-UYcf1v4M/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/G_-UYcf1v4M/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/G_-UYcf1v4M/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "King",
              "tags": [
                "King",
                "MC Stan",
                "F*CK WHAT THEY SAY",
                "Monopoly Moves",
                "MM",
                "Hip-Hop",
                "Rap",
                "Big Boss",
                "Bollywood",
                "DHH",
                "IHH",
                "Tadipaar",
                "Basti Ka Hasti",
                "Ek Din Pyaar",
                "Maan Meri Jaan",
                "Tu Aake Dekhle",
                "Latest Rap Songs",
                "Tasha",
                "Nashik Dhol",
                "Pune",
                "Mumbai",
                "Maharashtra",
                "Za*un Taak Mitra Mandal"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "F*CK WHAT THEY SAY | King & MC STΔN | Monopoly Moves | Official Music Video",
                "description": "\"F*CK WHAT THEY SAY\" marks King and MC Stan's debut collaboration which arrives as a part of the New Delhi-based artist's latest album \"Monopoly Moves''. A braggadocious track where both of them rap about their luxurious lifestyles, success and swagger, it takes a heavier turn in the second half which sees producer Riz Shain turn things upside down with his bold experimentation of pulsating rhythms as King and MC Stan showcase their aggressive and gritty performance which bumps up the chaotic energy of the song to hit the roof.\n\nSTREAM NOW : https://out-now.lnk.to/MonopolyMoves\n\nSong Name : F*CK WHAT THEY SAY\nArtist : King, MC Stan\nLyrics : King, MC Stan\nMusic Producer : Riz Shain\nComposed by : King, MC Stan\nAdditional Production: Priyanshu Soni\nMixed by : Hanish Taneja\nMastered by : Hanish Taneja\n\nVideo Credits: \n\nDirector : Lendrick Kumar\nDOP : Aswin Sumesh\nChief Associate Director : Ankur Bhatnaagar\nDirector Assistant : Deepika Menon\nAssociate Camera : Akhil Sasidharan\nEditor & VFX : Anush SK\n3D Artist : FL3VI\nColourist : Eldho M Reji\nSet Designer : Neha Pednekar\nArt Director: Ashok Biswas\nArt Assistant : Ejaz Khan\n\nFocus Puller : Ashish Vishwakarma\nGaffer : Sunny Singh\nLights  Light n Light\nCamera : RD Equipment\nRigging: Galaxy Equipment\nPanther Dolly: Cine Grips\n\nHMUA : Dinesh Dhake\nStylist : Khushboo Gupta\nDressmam: Santosh Yadav\n\nProduction House : Simran Bakshi Films\nProducer : Simran Bakshi\nExecutive Producer : Simran Bakshi & Prathmesh Dabir\nLine Producer : Manish Raut\nAssociate Producer : Ankit Nayar & Zerab Aderianwalla\nLine Producer : AnAkproductions\nAssistant Producer : Smriti Ramakrishnan \n\nBTS & Stills : Mihir Shah\nStills Photographer: Jogi Singh\nDIT: Nikhil Jadhav\n\nKing’s Hair Stylist  : Javed\nKing’s Makeup Artist : Swapnil \n\u200bWardrobe Styling : Nikita Jaisinghani\n\nExecutive Producer : Bhavya Anand & Sweta Ojha\nCreative Producer : Bhavya Anand & Rajrishi Murthi\nProduction Head : Chiranshu Thakur\n\nMC Stan's Management : Represent\n\nFollow KING :\nSPOTIFY : https://open.spotify.com/artist/5NHm4TU5Twz7owibYxJfFU\nAPPLE MUSIC : https://music.apple.com/il/artist/king/1489995981\nINSTAGRAM : https://www.instagram.com/ifeelking/ \nFACEBOOK : https://www.facebook.com/ifeelking \nTWITTER : https://twitter.com/ifeelkingOG \nSNAPCHAT : https://www.snapchat.com/add/ifeelkingxo \nBLANKO : https://www.instagram.com/ifeelblanko/\n\nFollow MC Stan :\nSPOTIFY : https://open.spotify.com/artist/5uemEEtB1ZC3s1KM7gReeH?si=_0846yRHQ5OozWLNdsEdAQ\nAPPLE MUSIC : https://music.apple.com/in/artist/mc-stan/1530205305\nINSTAGRAM : https://www.instagram.com/m___c___stan/"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT5M",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "4407182",
              "likeCount": "322226",
              "favoriteCount": "0",
              "commentCount": "23087"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "KDffvR8EpEvMc6nkH-hY6n6Mzhs",
            "id": "5ApgKn9GodA",
            "snippet": {
              "publishedAt": "2024-08-06T05:11:47Z",
              "channelId": "UC8X0Yt-8MV2Oj8HjnKHEFvg",
              "title": "આદીવાસી તેલ ની હકીકત।Khajur Bhai VLOGS |Jigli and Khajur |Nitin Jani |Adivasi Oil | Orginal or Fake",
              "description": "Buy Adivasi Oil From Here \n\n8105992935\n8296412116\n8296411950\n8105828338\n8197430200\n8123464206\n\nWebsite - www.kmadivasi.com",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/5ApgKn9GodA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/5ApgKn9GodA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/5ApgKn9GodA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/5ApgKn9GodA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/5ApgKn9GodA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Khajur Bhai Vlogs",
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "આદીવાસી તેલ ની હકીકત।Khajur Bhai VLOGS |Jigli and Khajur |Nitin Jani |Adivasi Oil | Orginal or Fake",
                "description": "Buy Adivasi Oil From Here \n\n8105992935\n8296412116\n8296411950\n8105828338\n8197430200\n8123464206\n\nWebsite - www.kmadivasi.com"
              }
            },
            "contentDetails": {
              "duration": "PT13M",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "235526",
              "likeCount": "21318",
              "favoriteCount": "0",
              "commentCount": "767"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "TMHLdiKeYy-aRTlgI47GghpAHkE",
            "id": "nFgsBxw-zWQ",
            "snippet": {
              "publishedAt": "2024-08-01T16:16:53Z",
              "channelId": "UC_A7K2dXFsTMAciGmnNxy-Q",
              "title": "Aayi Nai -Stree 2 | Shraddha Kapoor | Rajkummar Rao | Sachin-Jigar |Pawan Singh,Simran,Divya,Amitabh",
              "description": "Catch Shraddha Kapoor and Rajkummar Rao in their most playful avatars, grooving to this catchy hit! 🎶 With vocals by Pawan Singh, Simran Choudhary, Divya Kumar, and Sachin-Jigar, and beats composed by Sachin-Jigar, this song is a non-stop party starter! 🕺 Lyrics by Amitabh Bhattacharya add a cheeky twist to this high-energy track. Perfect for any celebration! \n\n👉 Subscribe to Saregama Music: https://bit.ly/3FkAS0W\n\nCredits:\nMusic Composer : Sachin - Jigar\nSinger : Pawan Singh, Simran Choudhary, Divya Kumar & Sachin-Jigar\nLyrics : Amitabh Bhattacharya\nAll Music Produced Arranged & Designed By : Sachin-Jigar\nAdditional Programming : Hrishikesh Gangan, Abhishek Singh, Sahil Vishwakarma, Amrit Sharma ( White Noise Collectives)\nMusic Production Head - Romil Ved\nLive Electric & Acoustic Guitars : Indrajit Chetia, Sahil Vishwakarma \nRecording Engineer: Swar Mehta (White Noise Collectives) \nMixed and Mastered by : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nChoreographer : Jani Master \nDOP: Santhana Krishnan Ravichandran\n\nStree 2 in cinemas 15th August 2024\n\nJio Studios & Dinesh Vijan present Stree 2 \n\nStarring: Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee, and Aparshakti Khurana\nDirected by: Amar Kaushik\nProduced by: Dinesh Vijan\nProduced by: Jyoti Deshpande\nWritten by: Niren Bhatt\n\nLyrics:\nJhoothi khaayi thi qasam jo\nNibhaayi नइ ..\n\n(Jhoothi khayi thi qasam jo \nNibhaayi नइ) ×2\n\nKaati raat maine kheton mein\nTu aayi नइ ..\n\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2 \n\nMALE SOLO\n(Le ke aaya bhi main ghar se rajaayi नइ) ×2\n\nNahin aayi aayi aayi\nTu toh aayi नइ\n\nNahin aayi aayi aayi\nTu toh aayi नइ\n\nKaati raat maine kheton mein\nTu aayi नइ\n\nNikal rahi thi main toh सज ke\nसँवर ke\nToka meri amma ne\nAankhein badi kar ke\n\nBoli mujhe kyon ri\nKahan chali कलमूई\n\nKheton mein कुँवारी chhori jaati nahin yunhi\n\nAise ladke jo kheton mein bulaate hain\n\nहाँ\nAise ladke jo kheton mein bulaate hain\n\nBeti bante kabhi bhi vo jamai नइ\n\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2\n\nJaane ye deevaana\nPalkein bichhaana\nAata hai tujhe\nBas karna bahaana\n\nSunke duhaayi\nAayi re qayaamat\nPhir bhi hua न\nKabhi tera aana\n\n(ढली jaaye re jawani intezaar mein) ×2\n\nTere chakkar mein doosri pataayi नइ\n\nCHORUS\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2\n\n#shraddhakapoor \n#rajkummarrao \n#stree2 \n#pawansingh \n#saregamamusic \n#aayinai\n#sachinjigar \n#amitabhbhattacharya \n#divyakumar \n#simranchoudhary \n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nTo Listen To The Songs From Bad Newz, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLefLO2qXLfLhVIiBomnu5Ags\n\nTo Listen To The Songs From Kalki , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLecsCGTUkHwoBl5QvPZmrL65\n\nTo Listen To The Songs From Chamkila, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLedUUkYRQTTiyIw25l7VTuTz\n\nTo Listen To The Songs From Rocky Aur Rani ki Prem Kahani , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLefBprn38xyDfvgL-73WncT9\n\nTo Listen To Saregama Originals, click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLeejQ4QL6fdOGBXFz2G_gDex\n\nAawaz Aapki, Gaane Hamare, Ab Sunegi Duniya Saari\nMake your own cover on this song and we’ll launch it on our Openstage Youtube Channel.\nSend it on content@saregama.com \n\nTo buy Saregama Carvaan, visit  https://www.saregama.com/carvaan/carvaanhindi\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Saregama Music",
              "tags": [
                "aayi nai",
                "ayi nai",
                "aayi nahi",
                "ayi nahi",
                "aai nai",
                "aayi nai stree 2",
                "stree 2 song",
                "stree 2 songs",
                "khet song",
                "shraddha kapoor songs",
                "shraddha kapoor stree 2 songs",
                "shradha kapoor new song",
                "shradha kapoor songs",
                "rajkumar rao songs",
                "rajkumar rao new song",
                "rajkumar rao stree 2",
                "pawan singh new song",
                "pawan singh new song 2024",
                "pawan singh song",
                "pawan singh ke gana",
                "pawan singh aayi nai song",
                "pawan singh aai nahi song",
                "sachin jigar songs",
                "sachin jigar new song"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Aayi Nai -Stree 2 | Shraddha Kapoor | Rajkummar Rao | Sachin-Jigar |Pawan Singh,Simran,Divya,Amitabh",
                "description": "Catch Shraddha Kapoor and Rajkummar Rao in their most playful avatars, grooving to this catchy hit! 🎶 With vocals by Pawan Singh, Simran Choudhary, Divya Kumar, and Sachin-Jigar, and beats composed by Sachin-Jigar, this song is a non-stop party starter! 🕺 Lyrics by Amitabh Bhattacharya add a cheeky twist to this high-energy track. Perfect for any celebration! \n\n👉 Subscribe to Saregama Music: https://bit.ly/3FkAS0W\n\nCredits:\nMusic Composer : Sachin - Jigar\nSinger : Pawan Singh, Simran Choudhary, Divya Kumar & Sachin-Jigar\nLyrics : Amitabh Bhattacharya\nAll Music Produced Arranged & Designed By : Sachin-Jigar\nAdditional Programming : Hrishikesh Gangan, Abhishek Singh, Sahil Vishwakarma, Amrit Sharma ( White Noise Collectives)\nMusic Production Head - Romil Ved\nLive Electric & Acoustic Guitars : Indrajit Chetia, Sahil Vishwakarma \nRecording Engineer: Swar Mehta (White Noise Collectives) \nMixed and Mastered by : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nChoreographer : Jani Master \nDOP: Santhana Krishnan Ravichandran\n\nStree 2 in cinemas 15th August 2024\n\nJio Studios & Dinesh Vijan present Stree 2 \n\nStarring: Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee, and Aparshakti Khurana\nDirected by: Amar Kaushik\nProduced by: Dinesh Vijan\nProduced by: Jyoti Deshpande\nWritten by: Niren Bhatt\n\nLyrics:\nJhoothi khaayi thi qasam jo\nNibhaayi नइ ..\n\n(Jhoothi khayi thi qasam jo \nNibhaayi नइ) ×2\n\nKaati raat maine kheton mein\nTu aayi नइ ..\n\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2 \n\nMALE SOLO\n(Le ke aaya bhi main ghar se rajaayi नइ) ×2\n\nNahin aayi aayi aayi\nTu toh aayi नइ\n\nNahin aayi aayi aayi\nTu toh aayi नइ\n\nKaati raat maine kheton mein\nTu aayi नइ\n\nNikal rahi thi main toh सज ke\nसँवर ke\nToka meri amma ne\nAankhein badi kar ke\n\nBoli mujhe kyon ri\nKahan chali कलमूई\n\nKheton mein कुँवारी chhori jaati nahin yunhi\n\nAise ladke jo kheton mein bulaate hain\n\nहाँ\nAise ladke jo kheton mein bulaate hain\n\nBeti bante kabhi bhi vo jamai नइ\n\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2\n\nJaane ye deevaana\nPalkein bichhaana\nAata hai tujhe\nBas karna bahaana\n\nSunke duhaayi\nAayi re qayaamat\nPhir bhi hua न\nKabhi tera aana\n\n(ढली jaaye re jawani intezaar mein) ×2\n\nTere chakkar mein doosri pataayi नइ\n\nCHORUS\n(Kaati raat maine kheton mein\nTu aayi नइ) ×2\n\n#shraddhakapoor \n#rajkummarrao \n#stree2 \n#pawansingh \n#saregamamusic \n#aayinai\n#sachinjigar \n#amitabhbhattacharya \n#divyakumar \n#simranchoudhary \n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nTo Listen To The Songs From Bad Newz, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLefLO2qXLfLhVIiBomnu5Ags\n\nTo Listen To The Songs From Kalki , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLecsCGTUkHwoBl5QvPZmrL65\n\nTo Listen To The Songs From Chamkila, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLedUUkYRQTTiyIw25l7VTuTz\n\nTo Listen To The Songs From Rocky Aur Rani ki Prem Kahani , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLefBprn38xyDfvgL-73WncT9\n\nTo Listen To Saregama Originals, click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLeejQ4QL6fdOGBXFz2G_gDex\n\nAawaz Aapki, Gaane Hamare, Ab Sunegi Duniya Saari\nMake your own cover on this song and we’ll launch it on our Openstage Youtube Channel.\nSend it on content@saregama.com \n\nTo buy Saregama Carvaan, visit  https://www.saregama.com/carvaan/carvaanhindi\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT3M19S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "29091022",
              "likeCount": "688250",
              "favoriteCount": "0",
              "commentCount": "63837"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "4QXD1JO4C1CeoKnX6r8fpra9wdE",
            "id": "ynMJbldhk8A",
            "snippet": {
              "publishedAt": "2024-08-07T06:21:41Z",
              "channelId": "UCkS7Vxu4PjM99w0Is6idjcg",
              "title": "Aap Ka Aapna Zakir  | Promo | Ep 1 & 2",
              "description": "Aap sab ready ho jao for a laughter-filled ride with Zakir Khan ka naya show \"Aap Ka Apna Zakir\"! 🎤✨\n\nEpisode 1:\nZakir bhai ke saath aayenge Bollywood ke bade director Karan Johar! 🌟 Dono milke karenge zabardast masti aur industry ke kuch ansuni  Baatein. Yeh episode bilkul miss mat karna!\n\nEpisode 2:\nMaze ka silsila continue hoga with Shraddha Kapoor and Rajkummar Rao! 🎬 Inki filmy duniya ki kahaniyan aur latest projects ke baare mein jaaniye, aur hasne ka dose double ho jayega.\n\n📅 Date yaad rakhna! Show shuru ho raha hai 10th August se sirf Sony TV par. Subscribe karo aur bell icon daba do taaki koi episode miss na ho!",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ynMJbldhk8A/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ynMJbldhk8A/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ynMJbldhk8A/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ynMJbldhk8A/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ynMJbldhk8A/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Zakir Khan",
              "tags": [
                "#AapKaApnaZakir",
                "#ZakirKhan",
                "#ComedySho",
                "#KaranJohar",
                "#ShraddhaKapoor",
                "#RajkummarRao",
                "#SonyTV",
                "#Bollywood",
                "#NewShow",
                "#Comedy",
                "#Entertainment",
                "#LaughOutLoud",
                "#StandUpComedy",
                "#BollywoodStars",
                "#BehindTheScenes",
                "#TVShow",
                "#Television",
                "#Promo",
                "#NewEpisode",
                "#LaughterRide"
              ],
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Aap Ka Aapna Zakir  | Promo | Ep 1 & 2",
                "description": "Aap sab ready ho jao for a laughter-filled ride with Zakir Khan ka naya show \"Aap Ka Apna Zakir\"! 🎤✨\n\nEpisode 1:\nZakir bhai ke saath aayenge Bollywood ke bade director Karan Johar! 🌟 Dono milke karenge zabardast masti aur industry ke kuch ansuni  Baatein. Yeh episode bilkul miss mat karna!\n\nEpisode 2:\nMaze ka silsila continue hoga with Shraddha Kapoor and Rajkummar Rao! 🎬 Inki filmy duniya ki kahaniyan aur latest projects ke baare mein jaaniye, aur hasne ka dose double ho jayega.\n\n📅 Date yaad rakhna! Show shuru ho raha hai 10th August se sirf Sony TV par. Subscribe karo aur bell icon daba do taaki koi episode miss na ho!"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT1M",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "110003",
              "likeCount": "7873",
              "favoriteCount": "0",
              "commentCount": "329"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "kWTRNJdxL_0tdOvknxe3byfDQcs",
            "id": "LJFUSgxAi9I",
            "snippet": {
              "publishedAt": "2024-08-04T18:50:38Z",
              "channelId": "UCvwDYLQmuPo8tYk7GZ6c5pw",
              "title": "Superstar Singer 3’s winners Avirbhav & Atharv Bakshi on their journey, winning moment & more!",
              "description": "Superstar Singer 3 finally gets the winners in the name of Avirbhav & Atharv Bakshi. They talk about their journey & winning moment. They share their memories & their favourite judge too. Watch the video to know more! \n\n#superstarsinger3  #superstarsinger  #exclusive  #tvnews  \n\nCatch the latest television gossip of your favourite TV stars under one roof. \nSubscribe to Telly Talk India ► https://www.youtube.com/@TellyTalkIndia\n\nFor Latest Telly News Stay Connected With Us:\nFacebook  ► https://www.facebook.com/TellyTalkIndia/\nTwitter       ► https://twitter.com/TellyTalkIndia\nInstagram ► https://www.instagram.com/tellytalkindia/\n\nSubscribe NOW To Our Network Channels:-\nzoom ►https://bit.ly/SubscribeToZoom",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/LJFUSgxAi9I/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/LJFUSgxAi9I/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/LJFUSgxAi9I/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/LJFUSgxAi9I/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/LJFUSgxAi9I/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "TellyTalkIndia",
              "tags": [
                "telly talk india",
                "telly",
                "shows",
                "tv shows",
                "latest telly news",
                "latest gossips",
                "latest news",
                "superstar singer 3",
                "superstar singer 3 full episode",
                "superstar singer 3 audition 2024",
                "superstar singer 3 episode 1",
                "superstar singer 3 audition 2024 full episode",
                "superstar singer 3 full episode 4",
                "superstar singer 3 shubh",
                "superstar singer 3 full episode 6",
                "superstar singer 3 full episode 1",
                "superstar singer 3 full episode today",
                "superstar singer 3 aryan",
                "pawandeep rajan",
                "arunita kanjilal"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-GB",
              "localized": {
                "title": "Superstar Singer 3’s winners Avirbhav & Atharv Bakshi on their journey, winning moment & more!",
                "description": "Superstar Singer 3 finally gets the winners in the name of Avirbhav & Atharv Bakshi. They talk about their journey & winning moment. They share their memories & their favourite judge too. Watch the video to know more! \n\n#superstarsinger3  #superstarsinger  #exclusive  #tvnews  \n\nCatch the latest television gossip of your favourite TV stars under one roof. \nSubscribe to Telly Talk India ► https://www.youtube.com/@TellyTalkIndia\n\nFor Latest Telly News Stay Connected With Us:\nFacebook  ► https://www.facebook.com/TellyTalkIndia/\nTwitter       ► https://twitter.com/TellyTalkIndia\nInstagram ► https://www.instagram.com/tellytalkindia/\n\nSubscribe NOW To Our Network Channels:-\nzoom ►https://bit.ly/SubscribeToZoom"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT14M37S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "529465",
              "likeCount": "6953",
              "favoriteCount": "0",
              "commentCount": "624"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "f33k2YYaB0CMSi4upqdpM31pj9U",
            "id": "sEAft61cPOg",
            "snippet": {
              "publishedAt": "2024-08-05T08:18:57Z",
              "channelId": "UC7Xtp6_0zYhq8Z18GVI6Bmw",
              "title": "സോണി സൂപ്പർ സ്റ്റാർ സിങ്ങർ കിരീടം ആവിർഭവിന് | സന്തോഷത്തിൽ ടോപ് സിങ്ങർ കുടുംബം",
              "description": "സോണി സൂപ്പർ സ്റ്റാർ സിങ്ങർ കിരീടം ആവിർഭവിന് | സന്തോഷത്തിൽ ടോപ് സിങ്ങർ കുടുംബം\nSony superstar singer | Avirbhav | TOP SINGER",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/sEAft61cPOg/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/sEAft61cPOg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/sEAft61cPOg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/sEAft61cPOg/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/sEAft61cPOg/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "24 News",
              "tags": [
                "24 News",
                "24 news hd",
                "24onlive",
                "Flowers News",
                "Kerala news",
                "exclusive news",
                "flowers 24 news live",
                "kerala news live",
                "kerala news today",
                "latest news kerala",
                "malayalam breaking news",
                "malayalam live",
                "online news",
                "political news",
                "today news"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "സോണി സൂപ്പർ സ്റ്റാർ സിങ്ങർ കിരീടം ആവിർഭവിന് | സന്തോഷത്തിൽ ടോപ് സിങ്ങർ കുടുംബം",
                "description": "സോണി സൂപ്പർ സ്റ്റാർ സിങ്ങർ കിരീടം ആവിർഭവിന് | സന്തോഷത്തിൽ ടോപ് സിങ്ങർ കുടുംബം\nSony superstar singer | Avirbhav | TOP SINGER"
              }
            },
            "contentDetails": {
              "duration": "PT3M39S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "438522",
              "likeCount": "5242",
              "favoriteCount": "0",
              "commentCount": "489"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "ToPr06-JjmkqfpOs3O8j3_cbRqE",
            "id": "jJk0FWCcejA",
            "snippet": {
              "publishedAt": "2024-08-06T16:26:15Z",
              "channelId": "UCBnxEdpoZwstJqC1yZpOjRA",
              "title": "Singappenne - Promo | 07 Aug 2024  | Tamil Serial | Sun TV",
              "description": "Watch the Latest Promo of popular Tamil Serial #Singappenne that airs on Sun TV.\n\nWatch all your favourite serials exclusively ONLY on Sun NXT for FREE. *Free only for Indian Users.\n\nDownload here:\nAndroid - http://bit.ly/SunNxtAdroid\niOS: India - http://bit.ly/sunNXT\nWatch on the web - https://www.sunnxt.com/\n\nBorn into a humble & rustic background troubled by familial & financial concerns, Anandhi takes it upon herself to leave home & fearlessly pursue a better life for her family. Watch her bravely face the odds of life with unwavering spirit.\n\n#SingappennePromo #SingappenneSerial #Singappenne #SunTVSerial #SunTV\n\nDon't forget to SUBSCRIBE to the Sun TV YouTube 👉 http://bit.ly/suntvsubscribe\n\n---------------------------------------------------------\nWatch more:\nMovie Clips on SUN NXT - https://bit.ly/3gc1dPI\nShows from Sun Music - http://bit.ly/2YS5eBi\nComedy Shows from AdithyaTV - http://bit.ly/2K6VaiZ\nNews from Sun News - http://bit.ly/2Yyvgsi\n---------------------------------------------------------\nSUN NXT: Watch the latest movies in DOLBY DIGITAL PLUS, 4000+ Movies in HD, 30+ Live TV Channels, TV Shows, TV Serials & Digital Exclusives on SUN NXT anywhere anytime.\n---------------------------------------------------------\nFollow us on Social Media for Latest Updates:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv\n---------------------------------------------------------\n#SuntvSerial #TamilSerialPromo #SunTVshows #NewTamilSerials #SunTV #SunTVserials #SunTVProgram #SunNXT #LatestTamilSerials #SuntvSerialPromo #SuntvSerialEpisodes #SunTVpromos #TamilSerialPromos #TamilTVserials #TamilSerialEpisodes\n---------------------------------------------------------",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/jJk0FWCcejA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/jJk0FWCcejA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/jJk0FWCcejA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/jJk0FWCcejA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/jJk0FWCcejA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sun TV",
              "tags": [
                "Singappenne",
                "Singappenne serial",
                "Singappenne serial promo",
                "Singappenne today",
                "Singappenne promo today",
                "serial",
                "sun tv serial",
                "Singappenne serial sun",
                "Singappenne sun tv serial",
                "Singappenne tamil serial today",
                "Singappenne todays episode",
                "Singappenne episode",
                "Singappenne sun tv serial today",
                "tamil serial"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Singappenne - Promo | 07 Aug 2024  | Tamil Serial | Sun TV",
                "description": "Watch the Latest Promo of popular Tamil Serial #Singappenne that airs on Sun TV.\n\nWatch all your favourite serials exclusively ONLY on Sun NXT for FREE. *Free only for Indian Users.\n\nDownload here:\nAndroid - http://bit.ly/SunNxtAdroid\niOS: India - http://bit.ly/sunNXT\nWatch on the web - https://www.sunnxt.com/\n\nBorn into a humble & rustic background troubled by familial & financial concerns, Anandhi takes it upon herself to leave home & fearlessly pursue a better life for her family. Watch her bravely face the odds of life with unwavering spirit.\n\n#SingappennePromo #SingappenneSerial #Singappenne #SunTVSerial #SunTV\n\nDon't forget to SUBSCRIBE to the Sun TV YouTube 👉 http://bit.ly/suntvsubscribe\n\n---------------------------------------------------------\nWatch more:\nMovie Clips on SUN NXT - https://bit.ly/3gc1dPI\nShows from Sun Music - http://bit.ly/2YS5eBi\nComedy Shows from AdithyaTV - http://bit.ly/2K6VaiZ\nNews from Sun News - http://bit.ly/2Yyvgsi\n---------------------------------------------------------\nSUN NXT: Watch the latest movies in DOLBY DIGITAL PLUS, 4000+ Movies in HD, 30+ Live TV Channels, TV Shows, TV Serials & Digital Exclusives on SUN NXT anywhere anytime.\n---------------------------------------------------------\nFollow us on Social Media for Latest Updates:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv\n---------------------------------------------------------\n#SuntvSerial #TamilSerialPromo #SunTVshows #NewTamilSerials #SunTV #SunTVserials #SunTVProgram #SunNXT #LatestTamilSerials #SuntvSerialPromo #SuntvSerialEpisodes #SunTVpromos #TamilSerialPromos #TamilTVserials #TamilSerialEpisodes\n---------------------------------------------------------"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT43S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "575127",
              "likeCount": "8133",
              "favoriteCount": "0",
              "commentCount": "452"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "TyqE-WgTCDEIiUgMI7dwUCkgZI8",
            "id": "BS0RkL7njg0",
            "snippet": {
              "publishedAt": "2024-08-07T02:30:05Z",
              "channelId": "UCjvgGbPPn-FgYeguc5nxG4A",
              "title": "Playing Bottle Game 😂",
              "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com\n\n\nDISCLAIMER: This channel is to entertain people and I usually focus on making videos about my life and family . All the videos are purely for fun & Entertainment only.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/BS0RkL7njg0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/BS0RkL7njg0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/BS0RkL7njg0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/BS0RkL7njg0/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/BS0RkL7njg0/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sourav Joshi Vlogs",
              "tags": [
                "sourav joshi",
                "sourav joshi vlogs",
                "family vlogs",
                "daily vlogs",
                "piyush joshi",
                "piyush joshi vlogs",
                "sourav joshi arts",
                "vlogs",
                "family vlog",
                "KUNALI",
                "KUNALI JOSHI",
                "KUNALI JOSHI VLOGS",
                "kunali",
                "kunali vlogs",
                "kunali vlog",
                "kunali k toys",
                "kunali ka dant tut gya",
                "ipl",
                "ipl match",
                "ipl match vlog",
                "new gaming pc",
                "new gaming pc vlog",
                "gaming pc",
                "kunali ka gaming pc",
                "gaming pc for kunali",
                "Secret Room",
                "WE BUILD A HIDDEN SECRET ROOM IN OUR HOUSE",
                "SECRET ROOM IN OUR HOUSE"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Playing Bottle Game 😂",
                "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com\n\n\nDISCLAIMER: This channel is to entertain people and I usually focus on making videos about my life and family . All the videos are purely for fun & Entertainment only."
              }
            },
            "contentDetails": {
              "duration": "PT8M33S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "2446621",
              "likeCount": "150758",
              "favoriteCount": "0",
              "commentCount": "4271"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "gjJFKa5Cy53tGt9x7omtbSzIhl4",
            "id": "sCC6TYCNKRk",
            "snippet": {
              "publishedAt": "2024-08-06T07:30:16Z",
              "channelId": "UCf9FhkQ8SlbX29J_U75g9cA",
              "title": "Umesh Missing On His Birthday *WHAT HAPPENED?*",
              "description": "Join the Hungry Birds team as we celebrate Umesh’s birthday, but there's a twist – Umesh is missing! 🎂🕵️\u200d♂️ Can we find him in time to blow out the candles? \nDon’t miss this exciting birthday adventure!\n\nFor Latest Updates of Our Life Please Follow\nInstagram - https://www.instagram.com/the_hungry_birds_official/?igshid=ZDdkNTZiNTM%3D\nFacebook = https://www.facebook.com/hungrybirds4\u200b \n\nCast= Umesh, Priti, Sanket, Akshada\n\n#umeshismissing #umeshbirthdayvlog",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/sCC6TYCNKRk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/sCC6TYCNKRk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/sCC6TYCNKRk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/sCC6TYCNKRk/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/sCC6TYCNKRk/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Hungry Birds Inside",
              "tags": [
                "hungry birds inside",
                "challenges",
                "birthday vlog",
                "birthday video",
                "birthday surprise vlog",
                "surprise vlog",
                "surprise birthday",
                "surprise birthday vlog",
                "hungry birds inside surprise",
                "hungry birds inside vlog",
                "hungry birds new video",
                "myra",
                "hungry birds birthday surprise",
                "birthday vlog 2024",
                "birthday wishes",
                "shaurya",
                "umesh missing on his birthday",
                "umesh birthday",
                "umesh birthday vlog"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Umesh Missing On His Birthday *WHAT HAPPENED?*",
                "description": "Join the Hungry Birds team as we celebrate Umesh’s birthday, but there's a twist – Umesh is missing! 🎂🕵️\u200d♂️ Can we find him in time to blow out the candles? \nDon’t miss this exciting birthday adventure!\n\nFor Latest Updates of Our Life Please Follow\nInstagram - https://www.instagram.com/the_hungry_birds_official/?igshid=ZDdkNTZiNTM%3D\nFacebook = https://www.facebook.com/hungrybirds4\u200b \n\nCast= Umesh, Priti, Sanket, Akshada\n\n#umeshismissing #umeshbirthdayvlog"
              }
            },
            "contentDetails": {
              "duration": "PT8M4S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "331012",
              "likeCount": "4962",
              "favoriteCount": "0",
              "commentCount": "843"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "EDioOMzJhPwpyXpF-5yCS6uof0s",
            "id": "PXBdyg0-MqU",
            "snippet": {
              "publishedAt": "2024-08-06T13:26:09Z",
              "channelId": "UC_wIGmvdyAQLtl-U2nHV9rg",
              "title": "Veera (வீரா) | Sunday Special | வரும் ஞாயிறு மதியம் 1.30 மணிக்கு | Promo | Zee Tamil",
              "description": "Zee5 Paid Subscription Link: https://bit.ly/32gxIJ4\nFree Subscription click here: https://bit.ly/SubscribeFreeZeeTamil\nGet notified about our Latest update by Clicking the Bell Icon 🔔\n\nTo Free Download ZEE5 Mobile app click the link below\nPlaystore: http://bit.ly/Zee5PlayStore\niTunes: http://bit.ly/Zee5ITunes\n\nConnect with Zee Tamil on Social Media\nWhatsapp: https://bit.ly/ZeeTamilWhatsApp\nFacebook: http://bit.ly/ZeeTamilFB\nInstagram: http://bit.ly/ZeeTamilInsta\nTwitter: http://bit.ly/ZeeTamilTwitter\n\nConnect with Zee5 on Social Media\nFacebook: http://bit.ly/Zee5TamilFB\nInstagram: http://bit.ly/Zee5TamilInsta\nTwitter: http://bit.ly/Zee5TamilTwitter",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/PXBdyg0-MqU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/PXBdyg0-MqU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/PXBdyg0-MqU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/PXBdyg0-MqU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/PXBdyg0-MqU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Zee Tamil",
              "tags": [
                "Zee Tamil",
                "zeetamil",
                "ஜீ தமிழ்",
                "zee தமிழ்",
                "Tamil channel",
                "tamil tv serial",
                "tamil serial",
                "zee tamil show",
                "entertainment",
                "daily soaps",
                "family",
                "drama",
                "comedy",
                "horror",
                "thriller",
                "romance",
                "romantic",
                "tamil",
                "free",
                "download",
                "mobile",
                "story",
                "episode",
                "latest",
                "scene",
                "full episode",
                "best scene",
                "webisode",
                "precap",
                "preview",
                "promo",
                "complete series",
                "video",
                "youtube",
                "tv",
                "popular shows",
                "zee5",
                "ZEEL"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-GB",
              "localized": {
                "title": "Veera (வீரா) | Sunday Special | வரும் ஞாயிறு மதியம் 1.30 மணிக்கு | Promo | Zee Tamil",
                "description": "Zee5 Paid Subscription Link: https://bit.ly/32gxIJ4\nFree Subscription click here: https://bit.ly/SubscribeFreeZeeTamil\nGet notified about our Latest update by Clicking the Bell Icon 🔔\n\nTo Free Download ZEE5 Mobile app click the link below\nPlaystore: http://bit.ly/Zee5PlayStore\niTunes: http://bit.ly/Zee5ITunes\n\nConnect with Zee Tamil on Social Media\nWhatsapp: https://bit.ly/ZeeTamilWhatsApp\nFacebook: http://bit.ly/ZeeTamilFB\nInstagram: http://bit.ly/ZeeTamilInsta\nTwitter: http://bit.ly/ZeeTamilTwitter\n\nConnect with Zee5 on Social Media\nFacebook: http://bit.ly/Zee5TamilFB\nInstagram: http://bit.ly/Zee5TamilInsta\nTwitter: http://bit.ly/Zee5TamilTwitter"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT20S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "684617",
              "likeCount": "9638",
              "favoriteCount": "0",
              "commentCount": "138"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "X2HP35G73z0NS4fCEl7FMWTESdg",
            "id": "EKvsltE7zIU",
            "snippet": {
              "publishedAt": "2024-08-06T07:09:22Z",
              "channelId": "UCFeAgGrp1m3b5jmE1ZoqEPg",
              "title": "மேல் வீட்டில் தியேட்டர் மாதிரி பண்ணியிருக்கோம்🥰🥰மேல் வீடு Home Tour🏡மகிழன் இல்லம்🤩 #ramyoga #மகிழன்",
              "description": "#ramyoga #மகிழன் #keepsupporting #love #trending #shortvideoviral #tamilcouplevlogger #reels #shortvideo #tamil",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/EKvsltE7zIU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/EKvsltE7zIU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/EKvsltE7zIU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/EKvsltE7zIU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/EKvsltE7zIU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Ramyoga channel",
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "மேல் வீட்டில் தியேட்டர் மாதிரி பண்ணியிருக்கோம்🥰🥰மேல் வீடு Home Tour🏡மகிழன் இல்லம்🤩 #ramyoga #மகிழன்",
                "description": "#ramyoga #மகிழன் #keepsupporting #love #trending #shortvideoviral #tamilcouplevlogger #reels #shortvideo #tamil"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT15M35S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "227954",
              "favoriteCount": "0",
              "commentCount": "148"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "GlB235jB1qlRDIHw6MW7CELzqto",
            "id": "udL2jh20QZQ",
            "snippet": {
              "publishedAt": "2024-08-05T11:04:19Z",
              "channelId": "UChpUSSTjbH8Ou8wz7wpkCTg",
              "title": "💁🏻\u200d♀️పోరీకోసం పోరని పాకులాట🤓|Village Comedy🤣| 5star Laxmi Srikanth videos | 5starchannel",
              "description": "For Order  Adivasi oil👇\nOfficial website link : https://hakkipikkiadivasihairoil.com\nPhone number  :7975825433 , 8123130232\nLocation : https://maps.app.goo.gl/RuPJkodJmBQTEh6v5?g_st=ic\n\nDirection & Management: 5starLaxmi,\nsrikanth,Anil\nStory:Raju✍️\nEditing: 5 Star Srikanth Anil\nCamera : Thirumalesh\nCasting: 5star laxmi \nanil ,ramya,thirmalesh,teenmar Raju,Laddu,Raju,manjula\n\nOur Village Location\nVillage : Kondapur & Ambaripet\nMandal : Velgatoor\nDistrict : Jagityal\nState : Telangana\n.........................................................................................................................\n#5strachannel \n#5Staratoz\n#bonalu\n#pochammabonalu\n#pochammajathara\n#LaxmiVideos\n#Pellamthagikodithe\n#5starchannel \n#emotional \n#telugu news channel \n#telugu \n#newcomedyvideos\n#Teluguemotional\n#sentimental \n#trending \n#5StarAtoZ\n#thagubothuramesh \n#comedyvideo \n#01trendingvideos \n#entertainmentvideos \n#02trendingvideos \n#5Starchannelvideos\n#01trendingvideosc\n#Newlovestorys\n#Telugulovestroys\n#Entertainmentvideos\n#Comedyvideos\n#NewTrendingVideos\n#SrikanthVideos\n#5StarNewVideos\n#FullEmotionalvideo\n#thagubothulu\n#comedy \n#trending \n#entertainmentvideos\n#5starcomedyshorts \n#love \n#lovereading",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/udL2jh20QZQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/udL2jh20QZQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/udL2jh20QZQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/udL2jh20QZQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/udL2jh20QZQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "5 STAR",
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "💁🏻\u200d♀️పోరీకోసం పోరని పాకులాట🤓|Village Comedy🤣| 5star Laxmi Srikanth videos | 5starchannel",
                "description": "For Order  Adivasi oil👇\nOfficial website link : https://hakkipikkiadivasihairoil.com\nPhone number  :7975825433 , 8123130232\nLocation : https://maps.app.goo.gl/RuPJkodJmBQTEh6v5?g_st=ic\n\nDirection & Management: 5starLaxmi,\nsrikanth,Anil\nStory:Raju✍️\nEditing: 5 Star Srikanth Anil\nCamera : Thirumalesh\nCasting: 5star laxmi \nanil ,ramya,thirmalesh,teenmar Raju,Laddu,Raju,manjula\n\nOur Village Location\nVillage : Kondapur & Ambaripet\nMandal : Velgatoor\nDistrict : Jagityal\nState : Telangana\n.........................................................................................................................\n#5strachannel \n#5Staratoz\n#bonalu\n#pochammabonalu\n#pochammajathara\n#LaxmiVideos\n#Pellamthagikodithe\n#5starchannel \n#emotional \n#telugu news channel \n#telugu \n#newcomedyvideos\n#Teluguemotional\n#sentimental \n#trending \n#5StarAtoZ\n#thagubothuramesh \n#comedyvideo \n#01trendingvideos \n#entertainmentvideos \n#02trendingvideos \n#5Starchannelvideos\n#01trendingvideosc\n#Newlovestorys\n#Telugulovestroys\n#Entertainmentvideos\n#Comedyvideos\n#NewTrendingVideos\n#SrikanthVideos\n#5StarNewVideos\n#FullEmotionalvideo\n#thagubothulu\n#comedy \n#trending \n#entertainmentvideos\n#5starcomedyshorts \n#love \n#lovereading"
              }
            },
            "contentDetails": {
              "duration": "PT18M32S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "142542",
              "likeCount": "5443",
              "favoriteCount": "0",
              "commentCount": "197"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "0lNz6bxX0Jb_hjZqYcgzlmNfz-U",
            "id": "U3xqKjdWiC8",
            "snippet": {
              "publishedAt": "2024-08-05T09:45:00Z",
              "channelId": "UCehGPL5op4I98Ey8pMyt25g",
              "title": "\"20 வயசுலயே எனக்கு கல்யாணம் ஆகிடுச்சு; அதுக்கு அப்புறமாதான் என் Life-ஏ...\"- Baby Indhira's Personals",
              "description": "#celebrity #exclusive #indira \n\n\"20 வயசுலயே எனக்கு கல்யாணம் ஆகிடுச்சு; அதுக்கு அப்புறமாதான் என் Life-ஏ...\"- Baby Indhira's Personals\n\nVideo Credits:\n###\nHost :  Jinadhattan\nCamera : Suresh Kumar\nCamera: Kathick. N\nEditor : Divith\nVideo Producer: Anandaraj\nThumbnail Artist: Santhosh. C\nChannel Manager: Santhi Ganesh\n###\n\nTo Subscribe:\nAval Vikatan                  ▶ : https://bit.ly/2DUXIQK\nVikatan App                   ▶ : https://vikatanmobile.page.link/aval_vikatan\nHello Vikatan                 ▶ : https://linktr.ee/hellovikatan\nVikatan Website            ▶: https://vikatanmobile.page.link/aval_vikatan\nVikatan Digital Magazine Subscription ▶  : https://bit.ly/3uEfyiY\n\nDo Watch Our Latest Videos:\nநீதான் Youtuber ஆச்சே உனக்கு என்ன கோடி கோடியா வரும்ல... Ammu & Preetha's Atrocities | Ammu Times\n👉https://youtu.be/ZQ6GXH1qPm0\n\n\"சினிமாவுலதான் இதையெல்லாம் பாத்திருக்கேன்; ஆனா, என் Life -லயும்...!\" - Actress Meena Emotional\n👉https://youtu.be/lTP5ywGxe5Q\n\nThanks For Watching..\nFollow our social media handles to stay updated with the trendiest buzz in town!\nInstagram : https://www.instagram.com/avalvikatan/\nFacebook : https://www.facebook.com/avalvikatan/\nTwitter      : https://twitter.com/avalvikatan?lang=en\n\nAval Vikatan is a brand of Vikatan Youtube Network which glorifies women & their achievements, and essaying her aspirations. With the unique distinction of tuning thousand of its readers into sensitive writers, Aval Vikatan is the perfect blend of tradition and change. To subscribe to our Channel to work towards more productive content.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/U3xqKjdWiC8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/U3xqKjdWiC8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/U3xqKjdWiC8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/U3xqKjdWiC8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/U3xqKjdWiC8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Aval Vikatan ",
              "tags": [
                "aval vikatan",
                "vikatan",
                "aval",
                "aval vikatan latest",
                "aval awards",
                "aval vikatan best videos",
                "vikatan awards",
                "vikatan aval",
                "aval vikatan videos",
                "vikatan aval awards",
                "aval vikatan latest news",
                "aval vikatan latest video",
                "aval interview",
                "vikatan app",
                "baby indira",
                "baby indira news",
                "actress baby indira",
                "indira",
                "childactor baby indira",
                "baby indira husband",
                "baby indira child actress",
                "baby indira best scene",
                "baby indira life story",
                "baby indira filmography",
                "baby indira all movies list"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "\"20 வயசுலயே எனக்கு கல்யாணம் ஆகிடுச்சு; அதுக்கு அப்புறமாதான் என் Life-ஏ...\"- Baby Indhira's Personals",
                "description": "#celebrity #exclusive #indira \n\n\"20 வயசுலயே எனக்கு கல்யாணம் ஆகிடுச்சு; அதுக்கு அப்புறமாதான் என் Life-ஏ...\"- Baby Indhira's Personals\n\nVideo Credits:\n###\nHost :  Jinadhattan\nCamera : Suresh Kumar\nCamera: Kathick. N\nEditor : Divith\nVideo Producer: Anandaraj\nThumbnail Artist: Santhosh. C\nChannel Manager: Santhi Ganesh\n###\n\nTo Subscribe:\nAval Vikatan                  ▶ : https://bit.ly/2DUXIQK\nVikatan App                   ▶ : https://vikatanmobile.page.link/aval_vikatan\nHello Vikatan                 ▶ : https://linktr.ee/hellovikatan\nVikatan Website            ▶: https://vikatanmobile.page.link/aval_vikatan\nVikatan Digital Magazine Subscription ▶  : https://bit.ly/3uEfyiY\n\nDo Watch Our Latest Videos:\nநீதான் Youtuber ஆச்சே உனக்கு என்ன கோடி கோடியா வரும்ல... Ammu & Preetha's Atrocities | Ammu Times\n👉https://youtu.be/ZQ6GXH1qPm0\n\n\"சினிமாவுலதான் இதையெல்லாம் பாத்திருக்கேன்; ஆனா, என் Life -லயும்...!\" - Actress Meena Emotional\n👉https://youtu.be/lTP5ywGxe5Q\n\nThanks For Watching..\nFollow our social media handles to stay updated with the trendiest buzz in town!\nInstagram : https://www.instagram.com/avalvikatan/\nFacebook : https://www.facebook.com/avalvikatan/\nTwitter      : https://twitter.com/avalvikatan?lang=en\n\nAval Vikatan is a brand of Vikatan Youtube Network which glorifies women & their achievements, and essaying her aspirations. With the unique distinction of tuning thousand of its readers into sensitive writers, Aval Vikatan is the perfect blend of tradition and change. To subscribe to our Channel to work towards more productive content."
              },
              "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
              "duration": "PT27M37S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "189299",
              "likeCount": "1739",
              "favoriteCount": "0",
              "commentCount": "117"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "hyFuL7tbp5PTOAsdnA7Mes4udpI",
            "id": "qLVSEfFyDUw",
            "snippet": {
              "publishedAt": "2024-08-07T01:38:46Z",
              "channelId": "UCVGiG3GcphUyMzNXg2iMN3A",
              "title": "Yeh Rishta Kya Kehlata Hai Today Episode NEW PROMO | 7th August 2024 |",
              "description": "Star Plus YRKKH / Yeh Rishta Kya Kehlata Hai Today NEW PROMO| 7th August 2024 | \n #yehrishtakyakehlatahai #samridhishukla #rohitpurohit #yrkkh \n➤Subscribe Telly Reporter @ http://bit.do/TellyReporter\n⦿SOCIAL MEDIA Links⦿\n➤https://www.facebook.com/TellyReporter\n➤https://x.com/TellyReporter\n➤https://www.instagram.com/TellyReporter\n⦿ Follow TellyReporter With #TellyReporter #TellyExclusive",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/qLVSEfFyDUw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/qLVSEfFyDUw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/qLVSEfFyDUw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/qLVSEfFyDUw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/qLVSEfFyDUw/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Telly Reporter",
              "tags": [
                "yeh rishta kya kehlata hai",
                "yeh rishta kya kehlata hai full episode today",
                "yeh rishta kya kehlata hai new promo",
                "yrkkh full episode today promo",
                "Yeh Rishta Kya Kehlata hain Full Episode Promo 7th August2024",
                "star plus yeh rishta kya kehlata hai",
                "yeh rishta kya kehlata hai today episode",
                "yeh rishta kya kehlata hai 7th august 2024",
                "yeh rishta kya kehlata hai today full episode",
                "yeh rishta kya kehlata hai aaj ka full episode",
                "yrkkh telly reporter",
                "yrkkh full episode today"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Yeh Rishta Kya Kehlata Hai Today Episode NEW PROMO | 7th August 2024 |",
                "description": "Star Plus YRKKH / Yeh Rishta Kya Kehlata Hai Today NEW PROMO| 7th August 2024 | \n #yehrishtakyakehlatahai #samridhishukla #rohitpurohit #yrkkh \n➤Subscribe Telly Reporter @ http://bit.do/TellyReporter\n⦿SOCIAL MEDIA Links⦿\n➤https://www.facebook.com/TellyReporter\n➤https://x.com/TellyReporter\n➤https://www.instagram.com/TellyReporter\n⦿ Follow TellyReporter With #TellyReporter #TellyExclusive"
              },
              "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
              "duration": "PT1M",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1194837",
              "likeCount": "14482",
              "favoriteCount": "0",
              "commentCount": "255"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "mn_r7ST0J6Ypo8qDCMqvEnaTVL0",
            "id": "Bhfa52YRJCQ",
            "snippet": {
              "publishedAt": "2024-08-06T15:30:03Z",
              "channelId": "UC6-F5tO8uklgE9Zy8IvbdFw",
              "title": "NEW! Taarak Mehta Ka Ooltah Chashmah | Ep 4156 | 6 Aug 2024 | Teaser",
              "description": "Click here to subscribe to SAB: https://www.youtube.com/channel/UC6-F5tO8uklgE9Zy8IvbdFw?sub_confirmation=1\n\nEpisode 4156: Jethalal Misses His Flight\n--------------------------------------------------------\nJethalal is distraught after missing his flight and can't shake off the worry that Bapuji will be furious with him. What will he do now?\n\nShow Name – Taarak Mehta Ka Ooltah Chashmah\nStar Cast –  Dilip Joshi, Disha Vakani, Amit Bhatt, Nitish Bhaluni\nEpisodes No - Ep 4156 | 6 Aug 2024\nProduced By - Asit Kumar Modi\n\n#TaarakMehtaKaOoltahChashmah #तारकमेहताकाउल्टाचश्मा #sab #Latest #New #TaarakMehtaKaOoltahChashmah2024 #tmkocfunnyepisodes #hindicomedy #comedyvideo #15yearsoftmkoc  #4000episodes\n\nAbout the show: \n----------------------------------------------------------------------\nTaarak Mehta Ka Ooltah Chashmah is a SAB Comedy Show inspired by the famous humorous column, Duniya Ne Undha Chashmah written by the eminent Gujarati writer, Mr. Tarak Mehta. This show revolves around the Gada family which consists of businessman, Jethalal Champaklal Gada, Jethalal's wife, Daya & their naughty son, Tipendra Gada living in Gokuldham Co-operative Society, and covers topical issues that are socially relevant. This hilarious show will surely tickle your funny bone.\n\nClick here to watch the episode of Taarak Mehta Ka Ooltah Chashmah :\nhttps://www.sonyliv.com/shows/taarak-mehta-ka-ooltah-chashmah-1000285396\n\nNEW! Taarak Mehta Ka Ooltah Chashmah | Ep 4156 | 6 Aug 2024 | Teaser",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Bhfa52YRJCQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Bhfa52YRJCQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Bhfa52YRJCQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/Bhfa52YRJCQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/Bhfa52YRJCQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sony SAB",
              "tags": [
                "Nitish Bhaluni",
                "तारक मेहता",
                "Ooltah Chashmah",
                "sab tv channel",
                "taarak mehta latest episodes",
                "taarak mehta ka ooltah chashmah",
                "hindi comedy show",
                "sab tv funny show",
                "taarak new episode",
                "ulta chashma",
                "tarak mehta ka ultah chashma",
                "taarak mehta episode",
                "tmkoc todays episode",
                "taark mehta new episodes",
                "tmkoc teaser today",
                "tmkoc new taarak mehta",
                "dilip joshi",
                "dilip joshi jethalal",
                "tmkoc funny episode",
                "tmkoc",
                "tmkoc episode 4156",
                "taarak mehta ka ooltah chashma teaser episode 4156"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "NEW! Taarak Mehta Ka Ooltah Chashmah | Ep 4156 | 6 Aug 2024 | Teaser",
                "description": "Click here to subscribe to SAB: https://www.youtube.com/channel/UC6-F5tO8uklgE9Zy8IvbdFw?sub_confirmation=1\n\nEpisode 4156: Jethalal Misses His Flight\n--------------------------------------------------------\nJethalal is distraught after missing his flight and can't shake off the worry that Bapuji will be furious with him. What will he do now?\n\nShow Name – Taarak Mehta Ka Ooltah Chashmah\nStar Cast –  Dilip Joshi, Disha Vakani, Amit Bhatt, Nitish Bhaluni\nEpisodes No - Ep 4156 | 6 Aug 2024\nProduced By - Asit Kumar Modi\n\n#TaarakMehtaKaOoltahChashmah #तारकमेहताकाउल्टाचश्मा #sab #Latest #New #TaarakMehtaKaOoltahChashmah2024 #tmkocfunnyepisodes #hindicomedy #comedyvideo #15yearsoftmkoc  #4000episodes\n\nAbout the show: \n----------------------------------------------------------------------\nTaarak Mehta Ka Ooltah Chashmah is a SAB Comedy Show inspired by the famous humorous column, Duniya Ne Undha Chashmah written by the eminent Gujarati writer, Mr. Tarak Mehta. This show revolves around the Gada family which consists of businessman, Jethalal Champaklal Gada, Jethalal's wife, Daya & their naughty son, Tipendra Gada living in Gokuldham Co-operative Society, and covers topical issues that are socially relevant. This hilarious show will surely tickle your funny bone.\n\nClick here to watch the episode of Taarak Mehta Ka Ooltah Chashmah :\nhttps://www.sonyliv.com/shows/taarak-mehta-ka-ooltah-chashmah-1000285396\n\nNEW! Taarak Mehta Ka Ooltah Chashmah | Ep 4156 | 6 Aug 2024 | Teaser"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT10M39S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                "allowed": [
                  "IN"
                ]
              },
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1605899",
              "likeCount": "30766",
              "favoriteCount": "0",
              "commentCount": "576"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "sISjvYTUrn_XzviaGkpBUi3WURo",
            "id": "ZWAWOYd2900",
            "snippet": {
              "publishedAt": "2024-08-05T13:49:35Z",
              "channelId": "UCOJlrO9zmDYSlIKrwbUg1hQ",
              "title": "Pellivaramandi | S3 | Ep - 1 | Prasad Behara | Viraajitha | Ft. Committee Kurrollu | Infinitum Media",
              "description": "Download FRND App: https://frndapp.onelink.me/Td7S/august2024romcom\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nGet ready for another exciting season of Pellivaramandi!\n\nCast: Prasad Behara, Viraajitha, Niharika Konidela, JDV Prasad, Swetha Ghattamaneni, Shruthi Rao, Chandu Charms, Sunandhini, Mahindhar, Sri Kumari, Sandeep Saroj, Yaswanth Pendyala, Eshwar Rachiraju, Trinadh Varma, Prasad Behara, Manikanta Parasu, Lokesh Kumar Parimi, Shyam Kalyan, Raghuvaran, Shiva Kumar Matta, Akshay Srinivas.\n\nProduced by Vandana Bandaru\n                       \nWritten and Directed by Prasad Behara\n\nBrands Manager: Bhargav.T \n\nDOP: Dinesh Paruchuri\n\nEditing: Chinna, Madhu Kallepally.\n\nTitle Animation: Sai Baba\n\nPublicity Designer: Nikhil Chotu\n\nSound Engineer: Venkat, Bhaskar, Guru. \n\nLine Producer: Surya\n\nExecutive Producer: Chandu JC\n\n#Pellivaramandi #PrasadBehara #Viraajitha #InfinitumMedia #TeluguWebSeries2024 #CommitteeKurrollu\n\nFollow Prasad Behara on Instagram 👇👇👇\nhttps://instagram.com/prasad.behara?igshid=MzRlODBiNWFlZA==",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ZWAWOYd2900/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ZWAWOYd2900/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ZWAWOYd2900/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ZWAWOYd2900/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ZWAWOYd2900/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Infinitum RomCom",
              "tags": [
                "pellivaramandi web series",
                "prasad behara",
                "prasad behara latest video",
                "prasad behera videos",
                "prasad behara pellivaramandi",
                "prasad behara short films",
                "telugu new short films latest",
                "pellivaramandi",
                "prasad behara comedy",
                "viraajita short film",
                "virajitha",
                "prasad behara viraajitha",
                "telugu web series 2024",
                "telugu short films 2024 latest",
                "prasad behara latest",
                "pellivaramandi season 3 episode 1",
                "pellivaramandi episode 1",
                "pellivaramandi season 3",
                "niharika konidela",
                "committee kurrollu"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Pellivaramandi | S3 | Ep - 1 | Prasad Behara | Viraajitha | Ft. Committee Kurrollu | Infinitum Media",
                "description": "Download FRND App: https://frndapp.onelink.me/Td7S/august2024romcom\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nGet ready for another exciting season of Pellivaramandi!\n\nCast: Prasad Behara, Viraajitha, Niharika Konidela, JDV Prasad, Swetha Ghattamaneni, Shruthi Rao, Chandu Charms, Sunandhini, Mahindhar, Sri Kumari, Sandeep Saroj, Yaswanth Pendyala, Eshwar Rachiraju, Trinadh Varma, Prasad Behara, Manikanta Parasu, Lokesh Kumar Parimi, Shyam Kalyan, Raghuvaran, Shiva Kumar Matta, Akshay Srinivas.\n\nProduced by Vandana Bandaru\n                       \nWritten and Directed by Prasad Behara\n\nBrands Manager: Bhargav.T \n\nDOP: Dinesh Paruchuri\n\nEditing: Chinna, Madhu Kallepally.\n\nTitle Animation: Sai Baba\n\nPublicity Designer: Nikhil Chotu\n\nSound Engineer: Venkat, Bhaskar, Guru. \n\nLine Producer: Surya\n\nExecutive Producer: Chandu JC\n\n#Pellivaramandi #PrasadBehara #Viraajitha #InfinitumMedia #TeluguWebSeries2024 #CommitteeKurrollu\n\nFollow Prasad Behara on Instagram 👇👇👇\nhttps://instagram.com/prasad.behara?igshid=MzRlODBiNWFlZA=="
              },
              "defaultAudioLanguage": "te"
            },
            "contentDetails": {
              "duration": "PT21M2S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1629054",
              "likeCount": "88570",
              "favoriteCount": "0",
              "commentCount": "2334"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "bg_VXj1uVqxuh3G8Lh97PkUDjVA",
            "id": "rkyVg2VRulc",
            "snippet": {
              "publishedAt": "2024-08-05T05:34:29Z",
              "channelId": "UCSXwEK86-OWEn_QF65X7c7Q",
              "title": "AAY - Trailer | Narne Nithiin | Nayan Sarika | Ram Miriyala | Anji K Maniputhra | #AAY Movie",
              "description": "AAY - Trailer | Narne Nithiin | Nayan Sarika | Ram Miriyala | Anji K Maniputhra | #AAY Movie\n\nFun Bath begins with #AAY Premieres on August 15th\n\nTrailer Music Credits :\nMusic : Ajay Arasada\nLyrics : Suresh Banisetti\nSingers(kids) : Ananth Siddharth, Mokshit Y\nFemale vocals : Sindhuja Srinivasan\nKeyboard Programming: Jayaram Pyla \nMixed and Mastered by ABIN PAUL @Mixwithabin, Chennai.\n\nDetails : \nBanner : GA2 Pictures\nPresenter : Allu Aravind\nDirector : Anji K Maniputhra\nProducers : Bunny Vas & Vidya Koppineedi\nCo-Producers : Bhanu Pratapa, Riyaz Chowdary\nDOP : Sameer Kalyani \nMusic : Ram Miriyala, Ajay Arasada\nEditor : Kodati Pavan Kalyan \nArt Director : Kiran Kumar Manne\nExecutive Producer : Ajay Gadde\nCo-Director : Rama Naresh Nunna\nD.I : Pixel Light Studio\nVFX Head : Srikanth Kandala (Stunner FX)\nAssistant Directors : Ravuri Vamsi Krishna – Nani Krishvan Yadav - Kamal \nVihari Chukka\nAssociate Directors : Shankar Kotha – Akshay Pirapu\nProduction Controller : Ravuri Jyothi Krishna Swarup\nStills : Sai Ram Maganti\nCostumes : Susmitha & Shilpa\nPRO : Vamsi Kaka \nMarketing : Vishnu Thej Putta\nPosters : Anil & Bhanu\nAudio : Junglee Music\n\nFor more updates in youtube subscribe to : https://www.youtube.com/channel/UCSXwEK86-OWEn_QF65X7c7Q  \nClick here to share on Facebook : https://shorturl.at/qCDX6\n\nEnjoy & stay connected with us!\n👉 Subscribe to https://www.youtube.com/@jungleemusictelugu\n👉 Like us on Facebook:   /Timesmusicsouth\n👉 Follow us on X:   @JungleeMusicSTH  \n👉 Follow us on Instagram:  https://www.instagram.com/\n\nSUBSCRIBE Junglee Music Channels for unlimited entertainment: \n►For Kannada Songs & Videos : http://bit.ly/1WmC9H2\n►For Tamil Songs & Videos:  http://bit.ly/1Z2vfsO\n►For South Devotional Songs: http://bit.ly/1VD5kc0\n\n© 2024 Times Music",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/rkyVg2VRulc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/rkyVg2VRulc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/rkyVg2VRulc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/rkyVg2VRulc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/rkyVg2VRulc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Junglee Music Telugu",
              "tags": [
                "AAY Trailer",
                "AAY Teaser",
                "ranganayaki",
                "aay",
                "aay movie",
                "aay telugu movie",
                "aay movie first look",
                "aay film",
                "ranganayaki new promo",
                "narne nithin",
                "telugu new songs",
                "aay movie song",
                "new songs telugu",
                "telugu songs 2024",
                "AAY First Look",
                "telugu latest songs",
                "telugu new songs 2024",
                "narne Nithin aay movie",
                "new telugu movies",
                "latest telugu songs 2024",
                "new telugu songs 2024",
                "AAY First Look Poster",
                "AAY First Look Motion Poster",
                "junglee music telugu"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "AAY - Trailer | Narne Nithiin | Nayan Sarika | Ram Miriyala | Anji K Maniputhra | #AAY Movie",
                "description": "AAY - Trailer | Narne Nithiin | Nayan Sarika | Ram Miriyala | Anji K Maniputhra | #AAY Movie\n\nFun Bath begins with #AAY Premieres on August 15th\n\nTrailer Music Credits :\nMusic : Ajay Arasada\nLyrics : Suresh Banisetti\nSingers(kids) : Ananth Siddharth, Mokshit Y\nFemale vocals : Sindhuja Srinivasan\nKeyboard Programming: Jayaram Pyla \nMixed and Mastered by ABIN PAUL @Mixwithabin, Chennai.\n\nDetails : \nBanner : GA2 Pictures\nPresenter : Allu Aravind\nDirector : Anji K Maniputhra\nProducers : Bunny Vas & Vidya Koppineedi\nCo-Producers : Bhanu Pratapa, Riyaz Chowdary\nDOP : Sameer Kalyani \nMusic : Ram Miriyala, Ajay Arasada\nEditor : Kodati Pavan Kalyan \nArt Director : Kiran Kumar Manne\nExecutive Producer : Ajay Gadde\nCo-Director : Rama Naresh Nunna\nD.I : Pixel Light Studio\nVFX Head : Srikanth Kandala (Stunner FX)\nAssistant Directors : Ravuri Vamsi Krishna – Nani Krishvan Yadav - Kamal \nVihari Chukka\nAssociate Directors : Shankar Kotha – Akshay Pirapu\nProduction Controller : Ravuri Jyothi Krishna Swarup\nStills : Sai Ram Maganti\nCostumes : Susmitha & Shilpa\nPRO : Vamsi Kaka \nMarketing : Vishnu Thej Putta\nPosters : Anil & Bhanu\nAudio : Junglee Music\n\nFor more updates in youtube subscribe to : https://www.youtube.com/channel/UCSXwEK86-OWEn_QF65X7c7Q  \nClick here to share on Facebook : https://shorturl.at/qCDX6\n\nEnjoy & stay connected with us!\n👉 Subscribe to https://www.youtube.com/@jungleemusictelugu\n👉 Like us on Facebook:   /Timesmusicsouth\n👉 Follow us on X:   @JungleeMusicSTH  \n👉 Follow us on Instagram:  https://www.instagram.com/\n\nSUBSCRIBE Junglee Music Channels for unlimited entertainment: \n►For Kannada Songs & Videos : http://bit.ly/1WmC9H2\n►For Tamil Songs & Videos:  http://bit.ly/1Z2vfsO\n►For South Devotional Songs: http://bit.ly/1VD5kc0\n\n© 2024 Times Music"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT2M29S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "880603",
              "likeCount": "23865",
              "favoriteCount": "0",
              "commentCount": "364"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "G4itEY_SUAlN5MEzaSSmeXL41Ps",
            "id": "fqLCas2sWW0",
            "snippet": {
              "publishedAt": "2024-08-05T12:25:07Z",
              "channelId": "UC_A7K2dXFsTMAciGmnNxy-Q",
              "title": "#Martin - New Movie Trailer 1 [4K Video] | Dhruva Sarja | AP Arjun | Uday K Mehta",
              "description": "Check Out the Action Prince Dhruva Sarja's Power Packed #Martin Trailer-1.Directed by AP Arjun & Produced by Uday K Mehta, Suraj Uday Mehta.\n\nReleasing in Kannada - Telugu - Tamil - Hindi - Malayalam - Bengali\n\n#dhruvasarja #aparjun #udaykmehta #arjunsarja #manisharma #ravibasrur #VasaviEnterprises #UdayKMehtaProduction\n#anveshijain\n#newmovie #newrelease\n--------------\n\nFilm Details:\n\nBanner: Vaasavi Enterprise\nDirected By: A P Arjun \nStory: Arjun Sarja\nProduced By: Uday K Mehta, Suraj Uday Mehta\nStarring: Dhruva Sarja, Vaibhavi Shandilya, Anveshi Jain, Georgia Andriani, Chikkanna, Malavika Avinash, Achyuth Kumar, Nikitin Dheer, Nawab Shah, Rohit Pathak, Nathan Jones, Rubiel Mosquera\nDialogues: Gopinath Krishna Murthy, A P Arjun\nScreenplay Team: Swamiji (Hyd), Dhruva Sarja, Uday K Mehta, A P Arjun, Arun Balaji\nMusic: Mani Sharma \nBackground Score & Sound Design: Ravi Basrur\nCinematography: Satya Hegde \nEditor: K M Prakash, M S Reddy\nAction: Ram Laxman, Dr K Ravi Varma, Ganesh, Mass Mada \nChoreographers: Imran Sardhariya, V Murali\nProduction Design: Mohan B Kere\nProduction Head: Shivarjun \nExecutive Producer: Darshan Somasekhara\nCo-Director: S Swamy\nSound Effects & Dolby Atmos: Nanndhu j (KGF)\nMarketing Head: Ashwin Kumar\nPost Production Head: Panda\nColourist: Ashik Kusugolli\nPost Production Supervisor: M S Reddy \nTeaser & Trailer Edit By: Panda\nVfx Supervisor: Panda, Vijaya Chandra R, Bharath Yogananda\nAssociate Director: N S Venkatesh, Abhijeet C Angadi \nDirection Team: Ashwath Jaggi, Yogi Jinnappa, Bharath Yogananda, Arun S P, Manjunath J, Swamy Lakkur\nProduction Manager: Suresh K Mysuru\nAssistant Managers: Manoj, Rakesh, Karthik, Krishna\nFinance Manager: Ramesh\nAccountant: Purushotham T\nCostume Designer: Chethan Ra, Harini Ramakrishna, Prithi zadhwani \nSecond Unit DOP: Sanketh Mys, Swamy Gowda, Girish R Gowd\nStills: Bharath Kumar U\nOnline Editor: Panda\nPublicity Design: Kaani Studio, Akhil\nPromotional Co-Ordinate: Shreya S Javaraya\nPro: Kannada - Sudhindra Venkatesh\nHindi - Communique Films \nTelugu - Vamsi Kaka \nTamil - Sathish (AIM)\nMalayalam - Leniko Solutions \n\nRavi Basrur Music Team\n\nMusic Producers\nRavi Basrur, Chethan Handattu, Pavan Basrur, Sachin Basrur, Bharath Madhusudanan, Jagadish Venky, Krishna Basrur\n\nEnglish Rap: Rapper RO\nSound Effects: Nanndhu J K.G.F\nSongs Stereo Mix & Mastered By: Ravi Basrur\nMusic licensing courtesy: Songs To Your Eyes Ltd. and CRETIC\n\nRBM Studio Coordinators\nNagaprakash Kota, Prakash Kumar Bangalore\nVijay Basrur, Nikhil Basrur, Shivakumar Jayaram\n\nSongs Stereo Mix & Mastered @\nRAVI BASRUR Music Studio BASRUR\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/fqLCas2sWW0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/fqLCas2sWW0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/fqLCas2sWW0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/fqLCas2sWW0/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/fqLCas2sWW0/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Saregama Music",
              "tags": [
                "dhruva sarja",
                "kannada cinema",
                "sandalwood",
                "south indian movies",
                "film star",
                "kannada movies",
                "martin",
                "dhruva sarja new movie 2024",
                "martin movie release date",
                "martin dhruva sarja",
                "new kannada movie",
                "new telugu movie",
                "new hindi movie",
                "new tamil movie",
                "new south movie",
                "top teaser",
                "trailer",
                "arjun sarja",
                "anveshi jain",
                "ravi basrur",
                "saregama hindi video",
                "Saregama",
                "south",
                "new",
                "global movie",
                "martin trailer"
              ],
              "categoryId": "1",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "#Martin - New Movie Trailer 1 [4K Video] | Dhruva Sarja | AP Arjun | Uday K Mehta",
                "description": "Check Out the Action Prince Dhruva Sarja's Power Packed #Martin Trailer-1.Directed by AP Arjun & Produced by Uday K Mehta, Suraj Uday Mehta.\n\nReleasing in Kannada - Telugu - Tamil - Hindi - Malayalam - Bengali\n\n#dhruvasarja #aparjun #udaykmehta #arjunsarja #manisharma #ravibasrur #VasaviEnterprises #UdayKMehtaProduction\n#anveshijain\n#newmovie #newrelease\n--------------\n\nFilm Details:\n\nBanner: Vaasavi Enterprise\nDirected By: A P Arjun \nStory: Arjun Sarja\nProduced By: Uday K Mehta, Suraj Uday Mehta\nStarring: Dhruva Sarja, Vaibhavi Shandilya, Anveshi Jain, Georgia Andriani, Chikkanna, Malavika Avinash, Achyuth Kumar, Nikitin Dheer, Nawab Shah, Rohit Pathak, Nathan Jones, Rubiel Mosquera\nDialogues: Gopinath Krishna Murthy, A P Arjun\nScreenplay Team: Swamiji (Hyd), Dhruva Sarja, Uday K Mehta, A P Arjun, Arun Balaji\nMusic: Mani Sharma \nBackground Score & Sound Design: Ravi Basrur\nCinematography: Satya Hegde \nEditor: K M Prakash, M S Reddy\nAction: Ram Laxman, Dr K Ravi Varma, Ganesh, Mass Mada \nChoreographers: Imran Sardhariya, V Murali\nProduction Design: Mohan B Kere\nProduction Head: Shivarjun \nExecutive Producer: Darshan Somasekhara\nCo-Director: S Swamy\nSound Effects & Dolby Atmos: Nanndhu j (KGF)\nMarketing Head: Ashwin Kumar\nPost Production Head: Panda\nColourist: Ashik Kusugolli\nPost Production Supervisor: M S Reddy \nTeaser & Trailer Edit By: Panda\nVfx Supervisor: Panda, Vijaya Chandra R, Bharath Yogananda\nAssociate Director: N S Venkatesh, Abhijeet C Angadi \nDirection Team: Ashwath Jaggi, Yogi Jinnappa, Bharath Yogananda, Arun S P, Manjunath J, Swamy Lakkur\nProduction Manager: Suresh K Mysuru\nAssistant Managers: Manoj, Rakesh, Karthik, Krishna\nFinance Manager: Ramesh\nAccountant: Purushotham T\nCostume Designer: Chethan Ra, Harini Ramakrishna, Prithi zadhwani \nSecond Unit DOP: Sanketh Mys, Swamy Gowda, Girish R Gowd\nStills: Bharath Kumar U\nOnline Editor: Panda\nPublicity Design: Kaani Studio, Akhil\nPromotional Co-Ordinate: Shreya S Javaraya\nPro: Kannada - Sudhindra Venkatesh\nHindi - Communique Films \nTelugu - Vamsi Kaka \nTamil - Sathish (AIM)\nMalayalam - Leniko Solutions \n\nRavi Basrur Music Team\n\nMusic Producers\nRavi Basrur, Chethan Handattu, Pavan Basrur, Sachin Basrur, Bharath Madhusudanan, Jagadish Venky, Krishna Basrur\n\nEnglish Rap: Rapper RO\nSound Effects: Nanndhu J K.G.F\nSongs Stereo Mix & Mastered By: Ravi Basrur\nMusic licensing courtesy: Songs To Your Eyes Ltd. and CRETIC\n\nRBM Studio Coordinators\nNagaprakash Kota, Prakash Kumar Bangalore\nVijay Basrur, Nikhil Basrur, Shivakumar Jayaram\n\nSongs Stereo Mix & Mastered @\nRAVI BASRUR Music Studio BASRUR\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal"
              },
              "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
              "duration": "PT2M8S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "true",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "22295828",
              "likeCount": "263237",
              "favoriteCount": "0",
              "commentCount": "28137"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "2TmEzTqoW1X1TcXQ7-0sSk9F0D8",
            "id": "zJO6Qisjl6M",
            "snippet": {
              "publishedAt": "2024-08-05T05:30:14Z",
              "channelId": "UC38uTErPWmP2wGN55xweQQg",
              "title": "Kaleshi Couple is Back !! @lovekataria3889",
              "description": "Business queries ➭ Businesswithashna@gmail.com\n\nCheckout my Wishlink - https://www.wishlink.com/ashnachand\n\nSocials & more : \n\nInstagram ➭ @Chand_ashna \nLink ➭ https://www.instagram.com/chand_ashna\nBusiness Handle  ➭ @Thriftiness.in\nLink ➭  https://instagram.com/thriftiness.in?utm_medium=copy_link\nWebsite ➭https://thriftiness.in/?orderby=date\n\nSubscribe and Stay Tuned Next Video Dropping Soon. ❤️\n\nAshna Chand Vlogs",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/zJO6Qisjl6M/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/zJO6Qisjl6M/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/zJO6Qisjl6M/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/zJO6Qisjl6M/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/zJO6Qisjl6M/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Ashna Chand",
              "tags": [
                "vlogger",
                "travel vlogger",
                "latest vlogs",
                "vlogs",
                "female creator",
                "ashna chand",
                "aashna",
                "north india youtuber",
                "female vlogger"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Kaleshi Couple is Back !! @lovekataria3889",
                "description": "Business queries ➭ Businesswithashna@gmail.com\n\nCheckout my Wishlink - https://www.wishlink.com/ashnachand\n\nSocials & more : \n\nInstagram ➭ @Chand_ashna \nLink ➭ https://www.instagram.com/chand_ashna\nBusiness Handle  ➭ @Thriftiness.in\nLink ➭  https://instagram.com/thriftiness.in?utm_medium=copy_link\nWebsite ➭https://thriftiness.in/?orderby=date\n\nSubscribe and Stay Tuned Next Video Dropping Soon. ❤️\n\nAshna Chand Vlogs"
              },
              "defaultAudioLanguage": "en"
            },
            "contentDetails": {
              "duration": "PT8M20S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "1130375",
              "likeCount": "54261",
              "favoriteCount": "0",
              "commentCount": "5152"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "YTSYQlNAIbULxgoCUCOXE7xyIRc",
            "id": "CHHdSj4mkuQ",
            "snippet": {
              "publishedAt": "2024-08-05T18:45:00Z",
              "channelId": "UC3prwMn9aU2z5Y158ZdGyyA",
              "title": "Bangladesh Frees Protesters, Hasina Rival Khaleda Zia As 56 Killed In Violence, Military Ends Curfew",
              "description": "Over 50 people were killed in Bangladesh on August 5 as Prime Minister Sheikh Hasina was ousted and protesters stormed her official residence. President Mohammed Shahabuddin ordered the release of jailed former prime minister and key opposition leader Khaleda Zia. A meeting led by Shahabuddin \"decided unanimously\" to free the Bangladesh Nationalist Party (BNP) chairperson\", his office said. Chiefs of the army, navy and airforce and top leaders of several opposition parties including the BNP and Jamaat-e-Islami party, attended the meeting. \"The meeting has also decided to free all the people who have been arrested during the student protests,\" Shahabuddin's office said.  Celebrations erupted in Dhaka as PM Sheikh Hasina resigned, ending her 15 years in power. Watch the video to know the latest updates on Bangladesh crisis. \n\n#bangladesh #sheikhhasina #bangladeshcrisis\n\n\n00:00 - INTRODUCTION \n03:48 - “DISAPPOINTED” HASINA WON’T MAKE POLITICAL COMEBACK\n05:15 - HASINA IN INDIA\n06:13 - UK URGES ‘SWIFT ACTION TO ENSURE DEMOCRACY PREVAILS’\n\n\n\n\n\n\nn18oc_world      n18oc_crux\n\nCRUX is your daily video news guide to the big events that are shaping our world. We track news, geopolitics, diplomacy and defence strategies and explain how they shape national policies. Crux makes sense of global developments, and analyses their impact on daily lives.\n\nFollow CRUX on Telegram: https://bit.ly/3fnlLua\nFollow CRUX on Instagram (@crux.india): https://bit.ly/3qSFx1K\nFollow CRUX on Facebook: https://bit.ly/2Lte7iF\n#GetCloserToTheNews with latest headlines on politics, sports and entertainment on news18.com  https://bit.ly/2Y4QccL\n\nAlso watch: \nCrux Decode: https://bit.ly/3MjzIoG\nCrux+ : https://bit.ly/35mm97B\nCrux Most Watched: https://bit.ly/3KhJ8iX",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/CHHdSj4mkuQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/CHHdSj4mkuQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/CHHdSj4mkuQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/CHHdSj4mkuQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/CHHdSj4mkuQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "CRUX",
              "tags": [
                "sheikh hasina",
                "bangladesh army chief",
                "pm sheikh hasina resigns",
                "interim government",
                "sheikh hasina resigns",
                "sheikh hasina bangladesh",
                "sheikh hasina resignation",
                "sheikh hasina news",
                "bangladesh pm sheikh hasina",
                "prime minister sheikh hasina resigns",
                "sheikh hasina resignation speech",
                "sheikh hasina resign",
                "sheikh hasina resign live",
                "pm sheikh hasina",
                "sheikh hasina resigned",
                "sheikh hasina quits",
                "sheikh hasina resigns today",
                "pm sheikh hasina resigns breaking news"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Bangladesh Frees Protesters, Hasina Rival Khaleda Zia As 56 Killed In Violence, Military Ends Curfew",
                "description": "Over 50 people were killed in Bangladesh on August 5 as Prime Minister Sheikh Hasina was ousted and protesters stormed her official residence. President Mohammed Shahabuddin ordered the release of jailed former prime minister and key opposition leader Khaleda Zia. A meeting led by Shahabuddin \"decided unanimously\" to free the Bangladesh Nationalist Party (BNP) chairperson\", his office said. Chiefs of the army, navy and airforce and top leaders of several opposition parties including the BNP and Jamaat-e-Islami party, attended the meeting. \"The meeting has also decided to free all the people who have been arrested during the student protests,\" Shahabuddin's office said.  Celebrations erupted in Dhaka as PM Sheikh Hasina resigned, ending her 15 years in power. Watch the video to know the latest updates on Bangladesh crisis. \n\n#bangladesh #sheikhhasina #bangladeshcrisis\n\n\n00:00 - INTRODUCTION \n03:48 - “DISAPPOINTED” HASINA WON’T MAKE POLITICAL COMEBACK\n05:15 - HASINA IN INDIA\n06:13 - UK URGES ‘SWIFT ACTION TO ENSURE DEMOCRACY PREVAILS’\n\n\n\n\n\n\nn18oc_world      n18oc_crux\n\nCRUX is your daily video news guide to the big events that are shaping our world. We track news, geopolitics, diplomacy and defence strategies and explain how they shape national policies. Crux makes sense of global developments, and analyses their impact on daily lives.\n\nFollow CRUX on Telegram: https://bit.ly/3fnlLua\nFollow CRUX on Instagram (@crux.india): https://bit.ly/3qSFx1K\nFollow CRUX on Facebook: https://bit.ly/2Lte7iF\n#GetCloserToTheNews with latest headlines on politics, sports and entertainment on news18.com  https://bit.ly/2Y4QccL\n\nAlso watch: \nCrux Decode: https://bit.ly/3MjzIoG\nCrux+ : https://bit.ly/35mm97B\nCrux Most Watched: https://bit.ly/3KhJ8iX"
              },
              "defaultAudioLanguage": "en-GB"
            },
            "contentDetails": {
              "duration": "PT7M",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "160218",
              "likeCount": "806",
              "favoriteCount": "0",
              "commentCount": "200"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "HqZ5Lp02YgyO9EnUwC9PyoVbPEQ",
            "id": "1NwQ3FlJmlc",
            "snippet": {
              "publishedAt": "2024-08-05T17:49:59Z",
              "channelId": "UCU8v1Rn64Q1n7Cg2jelHpog",
              "title": "Chiyaan Vikram Amazing Speech | Thangalaan Audio Launch | Pa Ranjith | GV Prakash | Studio Green",
              "description": "Chiyaan Vikram Amazing Speech at Thangalaan Audio Launch on Studio Green. Watch Thangalaan Audio Launch LIVE now: https://www.youtube.com/live/EUUTR1kVz_I\n\nThangalaan movie starring 'Chiyaan' Vikram, Parvathy and Malavika Mohanan. Directed by Pa Ranjith, music by GV Prakash Kumar, and produced by Studio Green & Neelam Productions. \n\n#Thangalaan Releasing Worldwide on August 15th.\n\n#ThangalaanAudioLaunch #chiyaanvikram #paranjith #parvathy #malavikamohanan #gvprakash #kegnanavelraja #studiogreen #neelamproductions \n\nWritten & Directed By : Pa. Ranjith\nProduced By : K.E. Gnanavelraja\nCo-Produced By : Neha Gnanavelraja\nStudio Green CEO : G. Dhananjeyan\nExecutive Producer : A.G.Raja\nProduction House : Studio Green & Neelam Productions\nMusic : G V Prakash Kumar\nCo-Writer : Tamil Praba\nDialogues : Azhagiya Periyavan\nDirector of Photography : A. Kishor Kumar\nEditor : Selva R K\nArt Director : S S Murthi\nAction : Stunner Sam\nSound Designer : Anthony BJ Ruban\nSound Recordist : Ajayan Adat\nCostume Designer : Aegan Ekambaram, Anitha Sundaresan\nVFX : Hybrid 360\nProsthetics Designer : Baldev (TOM)\nStills : R S Raja\nPublicity Designer : Kabilan\nLyricist : KU.Umadevi, Arivu, Mounan Yathrigan\nProduction Controller : S.Sivakumar \nProduction Executive : S.Barath \nProduction Managers : G.Kamaraj, T.Hari hara Sudhan, Maria Josh, Nithish, Vignesh Raghava\nProduction Co-Ordinator : E.V.  Dinesh Kumar\nExecutive Producers : Sanjay, Rupesh\nDigital Promotions : Digitally\nPRO : Yuvraaj, Guna\nCreative Promotions : BeatRoute \nDigital Partner: Mango Mass Media\nAudio On : Junglee Music\n\nFor More Updates, Follow Studio Green on:\nTwitter: https://twitter.com/StudioGreen2\nInstagram: https://www.instagram.com/studiogreen_official\nFacebook: https://www.facebook.com/StudioGreenOfficial",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/1NwQ3FlJmlc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/1NwQ3FlJmlc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/1NwQ3FlJmlc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/1NwQ3FlJmlc/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/1NwQ3FlJmlc/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Studio Green",
              "tags": [
                "LIVE: Thangalaan Pre Release Event - Hyderabad",
                "Chiyaan Vikram",
                "Pa Ranjith",
                "G V Prakash",
                "Studio Green",
                "Thangalaan Pre Release Event",
                "Thangalaan pre release event hyderabad",
                "Thangalaan tour",
                "Thangalaan tour hyderabad",
                "thangalaan song",
                "thangalaan hyderabad",
                "thangalaan hyderabad event live",
                "thangalaan audio launch",
                "thangalaan pre release",
                "thangalaan team interview",
                "thangalaan war song",
                "thangalaan songs",
                "thangalaan review"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Chiyaan Vikram Amazing Speech | Thangalaan Audio Launch | Pa Ranjith | GV Prakash | Studio Green",
                "description": "Chiyaan Vikram Amazing Speech at Thangalaan Audio Launch on Studio Green. Watch Thangalaan Audio Launch LIVE now: https://www.youtube.com/live/EUUTR1kVz_I\n\nThangalaan movie starring 'Chiyaan' Vikram, Parvathy and Malavika Mohanan. Directed by Pa Ranjith, music by GV Prakash Kumar, and produced by Studio Green & Neelam Productions. \n\n#Thangalaan Releasing Worldwide on August 15th.\n\n#ThangalaanAudioLaunch #chiyaanvikram #paranjith #parvathy #malavikamohanan #gvprakash #kegnanavelraja #studiogreen #neelamproductions \n\nWritten & Directed By : Pa. Ranjith\nProduced By : K.E. Gnanavelraja\nCo-Produced By : Neha Gnanavelraja\nStudio Green CEO : G. Dhananjeyan\nExecutive Producer : A.G.Raja\nProduction House : Studio Green & Neelam Productions\nMusic : G V Prakash Kumar\nCo-Writer : Tamil Praba\nDialogues : Azhagiya Periyavan\nDirector of Photography : A. Kishor Kumar\nEditor : Selva R K\nArt Director : S S Murthi\nAction : Stunner Sam\nSound Designer : Anthony BJ Ruban\nSound Recordist : Ajayan Adat\nCostume Designer : Aegan Ekambaram, Anitha Sundaresan\nVFX : Hybrid 360\nProsthetics Designer : Baldev (TOM)\nStills : R S Raja\nPublicity Designer : Kabilan\nLyricist : KU.Umadevi, Arivu, Mounan Yathrigan\nProduction Controller : S.Sivakumar \nProduction Executive : S.Barath \nProduction Managers : G.Kamaraj, T.Hari hara Sudhan, Maria Josh, Nithish, Vignesh Raghava\nProduction Co-Ordinator : E.V.  Dinesh Kumar\nExecutive Producers : Sanjay, Rupesh\nDigital Promotions : Digitally\nPRO : Yuvraaj, Guna\nCreative Promotions : BeatRoute \nDigital Partner: Mango Mass Media\nAudio On : Junglee Music\n\nFor More Updates, Follow Studio Green on:\nTwitter: https://twitter.com/StudioGreen2\nInstagram: https://www.instagram.com/studiogreen_official\nFacebook: https://www.facebook.com/StudioGreenOfficial"
              },
              "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
              "duration": "PT23M36S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "205165",
              "likeCount": "8462",
              "favoriteCount": "0",
              "commentCount": "301"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "1nbDfF3mcayq07IxxLyaSkDEAfQ",
            "id": "dIutHmeVQLY",
            "snippet": {
              "publishedAt": "2024-08-06T07:11:01Z",
              "channelId": "UCbf0XHULBkTfv2hBjaaDw9Q",
              "title": "Bangladesh News : বাংলাদেশের অভ্যুত্থান নিয়ে সর্বদল বৈঠক সংসদে, 'ধীরে চলো নীতিতে' আস্থা Delhiর| N18G",
              "description": "Bangladesh News : বাংলাদেশ পরিস্থিতি নিয়ে সর্বদল বৈঠক। বাংলাদেশ ইস্যুতে সরকারের পাশে বিরোধীরা। পরিস্থিতি নিয়ে বৈঠকে বিবৃতি বিদেশমন্ত্রীর। দেশের সীমান্ত সুরক্ষিত বলে জানাল নয়াদিল্লি। পরিস্থিতির উপর সতর্ক নজর কেন্দ্রের। আপাতত বাংলাদেশ নিয়ে ধীরে চলো নীতি দিল্লির\n\n#bangladeshnews #bangladeshnewstoday #bangladeshprotest   #sheikhhasina #sheikhhasinadeport #bangladeshprotest #banglanews #news18bangla\n\nn18oc_international n180c_national \n\nNews 18 Bangla is an exclusive news channel on YouTube which streams news related to West Bengal, Nation and the World. The channel also has contemporary topic based debate and subject special series which are interesting & informative. Our channel aims to update the viewers with the current news.\n\nবাংলার প্রথম সারির খবরের চ্যানেল নিউজ18 বাংলা ৷ গত বেশ কয়েকবছর ধরে সাফল্যের সঙ্গে খবর পরিবেশন করে আসছে এই চ্যানেল ৷ ব্রেকিং নিউজ থেকে শুরু করে রাজনীতির খবর ৷ জেলা, ক্রাইম, বিনোদন, খেলা, ব্যবসা-বাণিজ্য, প্রাইম টাইম ডিবেট- সব খবর সবার আগে জানতে, দেখতে থাকুন News18 Bangla ৷ চ্যানেলের পাশাপাশি নিউজ18 বাংলার ওয়েবসাইট https://bengali.news18.com/-এ নজর রাখুন ৷\n\n\nConnect us on social:\nVisit us: https://bengali.news18.com/\nFacebook: https://facebook.com/News18Bangla\nTwitter: https://twitter.com/News18Bengali\nInstagram: https://instagram.com/News18Bangla\nNews18 Mobile App: https://onelink.to/desc-youtube",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/dIutHmeVQLY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/dIutHmeVQLY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/dIutHmeVQLY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/dIutHmeVQLY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/dIutHmeVQLY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "News18 Bangla",
              "tags": [
                "bangladesh protest",
                "bangladesh news",
                "sheikh hasina step down",
                "sheikh hasina leaves bangladesh",
                "sheikh hasina leaves dhaka",
                "sheikh hasina news today",
                "sheikh hasina leaves dhaka today",
                "bangladesh latest update",
                "sheikh hasina leaves for safer place",
                "sheikh hasinas resignation",
                "sheikh hasina resigned",
                "sheikh hasina resign",
                "bangladesh news today",
                "sheikh hasina leave bangladesh today",
                "bangladesh pm sheikh hasina resigned",
                "gana bhavan news",
                "bangla news",
                "news18 bangla",
                "Waker-uz-Zaman"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Bangladesh News : বাংলাদেশের অভ্যুত্থান নিয়ে সর্বদল বৈঠক সংসদে, 'ধীরে চলো নীতিতে' আস্থা Delhiর| N18G",
                "description": "Bangladesh News : বাংলাদেশ পরিস্থিতি নিয়ে সর্বদল বৈঠক। বাংলাদেশ ইস্যুতে সরকারের পাশে বিরোধীরা। পরিস্থিতি নিয়ে বৈঠকে বিবৃতি বিদেশমন্ত্রীর। দেশের সীমান্ত সুরক্ষিত বলে জানাল নয়াদিল্লি। পরিস্থিতির উপর সতর্ক নজর কেন্দ্রের। আপাতত বাংলাদেশ নিয়ে ধীরে চলো নীতি দিল্লির\n\n#bangladeshnews #bangladeshnewstoday #bangladeshprotest   #sheikhhasina #sheikhhasinadeport #bangladeshprotest #banglanews #news18bangla\n\nn18oc_international n180c_national \n\nNews 18 Bangla is an exclusive news channel on YouTube which streams news related to West Bengal, Nation and the World. The channel also has contemporary topic based debate and subject special series which are interesting & informative. Our channel aims to update the viewers with the current news.\n\nবাংলার প্রথম সারির খবরের চ্যানেল নিউজ18 বাংলা ৷ গত বেশ কয়েকবছর ধরে সাফল্যের সঙ্গে খবর পরিবেশন করে আসছে এই চ্যানেল ৷ ব্রেকিং নিউজ থেকে শুরু করে রাজনীতির খবর ৷ জেলা, ক্রাইম, বিনোদন, খেলা, ব্যবসা-বাণিজ্য, প্রাইম টাইম ডিবেট- সব খবর সবার আগে জানতে, দেখতে থাকুন News18 Bangla ৷ চ্যানেলের পাশাপাশি নিউজ18 বাংলার ওয়েবসাইট https://bengali.news18.com/-এ নজর রাখুন ৷\n\n\nConnect us on social:\nVisit us: https://bengali.news18.com/\nFacebook: https://facebook.com/News18Bangla\nTwitter: https://twitter.com/News18Bengali\nInstagram: https://instagram.com/News18Bangla\nNews18 Mobile App: https://onelink.to/desc-youtube"
              }
            },
            "contentDetails": {
              "duration": "PT9M36S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "3236416",
              "likeCount": "21208",
              "favoriteCount": "0",
              "commentCount": "1775"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "ROGzvmXZbEo9HqjvyoMrV2kP-zo",
            "id": "V41Iou1O0uQ",
            "snippet": {
              "publishedAt": "2024-08-05T12:00:02Z",
              "channelId": "UCpXLDGcGtqkC7MIF5sKYU0w",
              "title": "Babbu Maan - NEELI CHHAT | Official Teaser | New Punjabi Song 2024",
              "description": "Title - NEELI CHHAT (Teaser)\nSinger/Lyrics/Music - Babbu Maan\n\n© Babbu Maan\n\nSubscribe Official Channel - http://goo.gl/6HLLiV\n\nFacebook - http://www.facebook.com/babbumaan\n\nTwitter - http://www.twitter.com/babbumaan\n\nInstagram - https://www.instagram.com/babbumaaninsta\n\nDigitally Powered  By - Bull18 [ https://www.instagram.com/Bull18Network ]",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/V41Iou1O0uQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/V41Iou1O0uQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/V41Iou1O0uQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/V41Iou1O0uQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/V41Iou1O0uQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Babbu Maan",
              "tags": [
                "Babbu Maan",
                "Babbu Mann",
                "Pop",
                "Folk",
                "Punjabi",
                "Punjabi Songs",
                "Babbu Maan new songs",
                "Hit Punjabi Songs"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Babbu Maan - NEELI CHHAT | Official Teaser | New Punjabi Song 2024",
                "description": "Title - NEELI CHHAT (Teaser)\nSinger/Lyrics/Music - Babbu Maan\n\n© Babbu Maan\n\nSubscribe Official Channel - http://goo.gl/6HLLiV\n\nFacebook - http://www.facebook.com/babbumaan\n\nTwitter - http://www.twitter.com/babbumaan\n\nInstagram - https://www.instagram.com/babbumaaninsta\n\nDigitally Powered  By - Bull18 [ https://www.instagram.com/Bull18Network ]"
              }
            },
            "contentDetails": {
              "duration": "PT22S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
            },
            "statistics": {
              "viewCount": "167090",
              "likeCount": "16508",
              "favoriteCount": "0",
              "commentCount": "2707"
            }
          }
        ],
        "nextPageToken": "CDIQAA",
        "pageInfo": {
          "totalResults": 151,
          "resultsPerPage": 50
        }
      }

    // console.log(savedData.items.length);
    
      

    useEffect(() => {
        // fetchData();
        setData(savedData.items);
    }, [category])

    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}


        </div>
    )
}

export default Feed
