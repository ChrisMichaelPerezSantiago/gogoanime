<p align="center">
Gogoanime is a custom API that provides data from the `gogoanime` website. You will have access to the entire catalog whether movies, series, current episodes, etc., with English subtitles.
</p>


<p align="center">
  <img src="https://img.shields.io/badge/node->=10.16.x-brightgreen.svg" />
  <img src="https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg" />
  <a href="https://github.com/ChrisMichaelPerezSantiago/gogoanime/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/gogoanime/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <img src="https://img.shields.io/badge/now.sh-deployed-brightgreen.svg" alt="">
  <img src="https://badgen.net/badge/icon/now?icon=now&label" alt="">
  <img src="https://img.shields.io/badge/gogoanime-API-brightgreen.svg" alt="">
  <img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/gogoanime?style=social" alt="">
</p>

<p align="center">
 <a href="https://nodei.co/npm/gogoanime/"><img src="https://nodei.co/npm/gogoanime.png"></a>
</p>


## :tada: Updates in version v1.0.3 :tada:
- [x] `animeEpisodeHandler` now handles invalid episode ids instead of crashing
- [x] Can now pass the gogoanime website url via a .env file or via an environment variable.

## :rocket: Custom gogoanime API Link
API URL DOES NOT WORK
[gogoanime api](https://gogoanime.now.sh/api/v1/)



### **Installation**

Define the current gogoanime website url in a `.env` file or as an environment variable. An example is provided in the `.env.example` file.

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start Local Node/Express Server

```bash
npm run start
```

or

```bash
npm run dev
```

### Testing API Methods

```bash
npm run dev-api
```

---


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

## API Documentation
```javascript
  const api = require('gogoanime');
```
### 📣Read this please | To get the videos!📣
## api.animeEpisodeHandler([id])
---

*First of all I must mention that the url of the videos work only using the iframe element.*
*To get the videos (servers) of each chapter, you only need to use the `api.animeEpisodeHandler` function that receives the id of the episode as a parameter.* 
*To verify the id of each episode, look at the episodes property:*

```json
"episodes": 
  [
    {
      "id": "actors-songs-connection-episode-1"
    },
    {
      "id": "actors-songs-connection-episode-2"
    },
    {
      "id": "actors-songs-connection-episode-3"
    },
    {
      "id": "actors-songs-connection-episode-4"
    },
    {
      "id": "actors-songs-connection-episode-5"
    },
    {
      "id": "actors-songs-connection-episode-6"
    },
    {
      "id": "actors-songs-connection-episode-7"
    },
    {
      "id": "actors-songs-connection-episode-8"
    },
    {
      "id": "actors-songs-connection-episode-9"
    }
  ]
```

*You just have to pass the id of the episode*

```javascript
api.animeEpisodeHandler('actors-songs-connection-episode-9')
  .then(res =>{
    console.log(res)
});
```

```json
// 20191206103017
// https://gogoanime.now.sh/api/v1/AnimeEpisodeHandler/actors-songs-connection-episode-9

{
  "anime": [
    {
      "img": "https://cdnimg.xyz/cover/actors-songs-connection.png",
      "synopsis": "Plot Summary: Private Tenshou Gakuen is the seventh of ten school districts circled within a 130-meter tall wall with restricted entry and egress aside from officials. The academy is fully autonomous by the government but to strive for independence, the school allows students to engage in club activities after school, which comes with a strangely unique system. Each club is ranked according to its overall accumulated points gathered from various club activities and school events. Points can also be received by winning at the school's periodic Tenshou Gakuen Singing Contest, where many students compete. The members in the clubs work hard to win the contest for their goal.",
      "genres": [
        "music",
        "school"
      ],
      "category": "fall-2019-anime",
      "released": 2019,
      "status": "Ongoing",
      "otherName": "ACTORS -Songs Connection-",
      "totalEpisodes": 9,
      "servers": [
        {
          "name": "Vidstreaming",
          "iframe": "vidstreaming.io/streaming.php?id=MTM0NDQ5&title=Actors%3A+Songs+Connection+Episode+9"
        },
        {
          "name": "Xstreamcdn",
          "iframe": "https://www.fembed.com/v/ln5grsnzq283xe6"
        },
        {
          "name": "Vidcdn",
          "iframe": "vidstreaming.io/load.php?id=MTM0NDQ5&title=Actors%3A+Songs+Connection+Episode+9"
        },
        {
          "name": "Mp4Upload",
          "iframe": "https://www.mp4upload.com/embed-fiib7037qzho.html"
        }
      ]
    }
  ]
}
```

*Now you just need to use the iframe property of each server and pass it to the iframe*

```html
<iframe 
  src="vidstreaming.io/streaming.php?id=MTM0NDQ5&title=Actors%3A+Songs+Connection+Episode+9"
   width="100%"  
   height="100%" 
   frameborder="0" 
   allowfullscreen
>
</iframe>
```

## api.search([query])
---
```javascript
// 20191206103743
// https://gogoanime.now.sh/api/v1/Search/tokyo%20ghoul

{
  "search": [
    {
      "title": "Tokyo Ghoul",
      "img": "https://cdnimg.xyz/images/summer/Tokyo Ghoul.jpg",
      "synopsis": "Plot Summary: Tokyo is haunted by mysterious ghouls who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like he is, at the café he frequents. Little does Kaneki realize that his fate will change overnight.",
      "genres": [
        "action",
        "drama",
        "horror",
        "mystery",
        "psychological",
        "supernatural"
      ],
      "released": 2014,
      "status": "Completed",
      "otherName": "東京喰種-トーキョーグール-",
      "totalEpisodes": 12,
      "episodes": [
        {
          "id": "tokyo-ghoul-episode-1"
        },
        {
          "id": "tokyo-ghoul-episode-2"
        },
        {
          "id": "tokyo-ghoul-episode-3"
        },
        {
          "id": "tokyo-ghoul-episode-4"
        },
        {
          "id": "tokyo-ghoul-episode-5"
        },
        {
          "id": "tokyo-ghoul-episode-6"
        },
        {
          "id": "tokyo-ghoul-episode-7"
        },
        {
          "id": "tokyo-ghoul-episode-8"
        },
        {
          "id": "tokyo-ghoul-episode-9"
        },
        {
          "id": "tokyo-ghoul-episode-10"
        },
        {
          "id": "tokyo-ghoul-episode-11"
        },
        {
          "id": "tokyo-ghoul-episode-12"
        }
      ]
    },
  ]
}
```

##  api.recentReleaseEpisodes([page])
---
| Page From | Limit |
|-----------|--------
| 1         | 257   |         

```json
// 20191206103924
// https://gogoanime.now.sh/api/v1/RecentReleaseEpisodes/1

{
  "anime": [
    {
      "title": "Wan Jie Xian Zong 2nd Season",
      "img": "https://cdnimg.xyz/cover/wan-jie-xian-zong-2nd-season.png",
      "synopsis": "Plot Summary: Second Season of Wonderland of Ten Thousands.\n\n",
      "genres": [
        "action",
        "adventure",
        "demons",
        "fantasy",
        "historical",
        "martial-arts",
        "romance"
      ],
      "category": "ona",
      "episode": 56,
      "totalEpisodes": 56,
      "released": 2019,
      "status": "Ongoing",
      "otherName": "Wonderland 2nd Season, The Wonderland of Ten Thousands 2, 万界仙踪 第2季",
      "servers": [
        {
          "name": "Vidstreaming",
          "iframe": "vidstreaming.io/streaming.php?id=MTM0NTk1&title=Wan+Jie+Xian+Zong+2nd+Season+Episode+56"
        },
        {
          "name": "Xstreamcdn",
          "iframe": "https://www.fembed.com/v/rywg2heplr76xqy"
        },
        {
          "name": "Vidcdn",
          "iframe": "vidstreaming.io/load.php?id=MTM0NTk1&title=Wan+Jie+Xian+Zong+2nd+Season+Episode+56"
        },
        {
          "name": "Mp4Upload",
          "iframe": "https://www.mp4upload.com/embed-q8d1ex59q2ki.html"
        }
      ]
    },
  ]
}
```

# Iframe Decoder for url vidstreaming
*If you don't want to directly load the video iframe in your application, you can use the decoder.*

## api.decodeVidstreamingIframeURL([iframe_url])
*This decoder returns a list of videos type **mp4 or m3u8**. To play the **m3u8** videos you would have to use some **HLS player***

```javascript
  const iframe = 'vidstreaming.io/load.php?id=MTM0NTk1&title=Wan+Jie+Xian+Zong+2nd+Season+Episode+56';
  await api.decodeVidstreamingIframeURL(iframe)
    .then(urls =>{
      console.log(urls)
    });
```

```javascript
[
  {
    option: 1,
    url: 'https://hls12xx.cdnfile.info/hls/9296cf197ecfe26b540cd67afd84dfa9/sub.56.m3u8'
  },
  {
    option: 2,
    url: 'https://st1.cdnfile.info/user1342/9296cf197ecfe26b540cd67afd84dfa9/EP.56.fullp.mp4?token=VOJQfydPCH9VHwRDkrVWpg&expires=1588377949&id=134595'
  }
]
```


## api.recentlyAddedSeries()
---
```json
// 20191206104022
// https://gogoanime.now.sh/api/v1/RecentlyAddedSeries

{
  "anime": [
    {
      "title": "Master Keaton",
      "img": "https://cdnimg.xyz/cover/master-keaton.png",
      "synopsis": "Plot Summary: Taichi Keaton is a half-British half-Japanese archeologist and SAS veteran of the Falklands War. He solves mysteries and investigates insurance fraud for Lloyd's around the world.\n",
      "genres": [
        "adventure",
        "drama",
        "historical",
        "mystery",
        "seinen",
        "slice-of-life"
      ],
      "released": 1998,
      "status": "Completed",
      "otherName": "Master Keaton: Blood and Bullets, マスターキートン",
      "totalEpisodes": 39,
      "episodes": [
        {
          "id": "master-keaton-episode-1"
        },
        {
          "id": "master-keaton-episode-2"
        },
        {
          "id": "master-keaton-episode-3"
        },
        {
          "id": "master-keaton-episode-4"
        },
        {
          "id": "master-keaton-episode-5"
        },
        {
          "id": "master-keaton-episode-6"
        },
        {
          "id": "master-keaton-episode-7"
        },
        {
          "id": "master-keaton-episode-8"
        },
        {
          "id": "master-keaton-episode-9"
        },
        {
          "id": "master-keaton-episode-10"
        },
        {
          "id": "master-keaton-episode-11"
        },
        {
          "id": "master-keaton-episode-12"
        },
        {
          "id": "master-keaton-episode-13"
        },
        {
          "id": "master-keaton-episode-14"
        },
        {
          "id": "master-keaton-episode-15"
        },
        {
          "id": "master-keaton-episode-16"
        },
        {
          "id": "master-keaton-episode-17"
        },
        {
          "id": "master-keaton-episode-18"
        },
        {
          "id": "master-keaton-episode-19"
        },
        {
          "id": "master-keaton-episode-20"
        },
        {
          "id": "master-keaton-episode-21"
        },
        {
          "id": "master-keaton-episode-22"
        },
        {
          "id": "master-keaton-episode-23"
        },
        {
          "id": "master-keaton-episode-24"
        },
        {
          "id": "master-keaton-episode-25"
        },
        {
          "id": "master-keaton-episode-26"
        },
        {
          "id": "master-keaton-episode-27"
        },
        {
          "id": "master-keaton-episode-28"
        },
        {
          "id": "master-keaton-episode-29"
        },
        {
          "id": "master-keaton-episode-30"
        },
        {
          "id": "master-keaton-episode-31"
        },
        {
          "id": "master-keaton-episode-32"
        },
        {
          "id": "master-keaton-episode-33"
        },
        {
          "id": "master-keaton-episode-34"
        },
        {
          "id": "master-keaton-episode-35"
        },
        {
          "id": "master-keaton-episode-36"
        },
        {
          "id": "master-keaton-episode-37"
        },
        {
          "id": "master-keaton-episode-38"
        },
        {
          "id": "master-keaton-episode-39"
        }
      ]
    },
  ]
}
```

## api.alphabetList([letter] , [page])
---
| Letter      | Page Limit |
|-------------|-------------
| '0'         | (zero value means , numbers in the title) [1 .. 53] |
| 'A'         | [1 .. 4]   |    
| 'C'         | [1 .. 3]   |
| 'D'         | [1 .. 4]   |
| 'E'         | [1 .. 1]   |
| 'F'         | [1 .. 2]   |
| 'G'         | [1 .. 3]   |
| 'H'         | [1 .. 4]   |
| 'I'         | [1 .. 2]   |
| 'J'         | [1 .. 1]   |
| 'K'         | [1 .. 4]   |
| 'L'         | [1 .. 2]   |
| 'M'         | [1 .. 4]   |
| 'N'         | [1 .. 2]   |
| 'O'         | [1 .. 2]   |
| 'P'         | [1 .. 1]   |
| 'Q'         | [1 .. 1]   |
| 'R'         | [1 .. 2]   |
| 'S'         | [1 .. 6]   |
| 'T'         | [1 .. 4]   |
| 'U'         | [1 .. 1]   |
| 'V'         | [1 .. 1]   |
| 'W'         | [1 .. 1]   |
| 'Z'         | [1 .. 1]   |
| 'Y'         | [1 .. 2]   |
| 'Z'         | [1 .. 1]   |

```json
// 20191206104143
// https://gogoanime.now.sh/api/v1/Alphabet/a/1

{
  "anime": [
    {
      "title": "A Channel",
      "img": "https://cdnimg.xyz/images/anime/a-channel8.jpg",
      "synopsis": "Plot Summary: Toeru takes a test so she can enter the same high school as Run, the girl she likes. She passes, but when she goes   to tell Run, she finds her hugging a girl she’s never seen before.",
      "genres": [
        "comedy",
        "school",
        "seinen",
        "slice-of-life"
      ],
      "released": 2011,
      "status": "Completed",
      "otherName": "A-Channel: The Animation, Aチャンネル",
      "totalEpisodes": 12,
      "episodes": [
        {
          "id": "a-channel-episode-1"
        },
        {
          "id": "a-channel-episode-2"
        },
        {
          "id": "a-channel-episode-3"
        },
        {
          "id": "a-channel-episode-4"
        },
        {
          "id": "a-channel-episode-5"
        },
        {
          "id": "a-channel-episode-6"
        },
        {
          "id": "a-channel-episode-7"
        },
        {
          "id": "a-channel-episode-8"
        },
        {
          "id": "a-channel-episode-9"
        },
        {
          "id": "a-channel-episode-10"
        },
        {
          "id": "a-channel-episode-11"
        },
        {
          "id": "a-channel-episode-12"
        }
      ]
    },
  ]
}
```

## api.popular([page])
---
| Page From | Limit |
|-----------|--------
| 1         | 345   |   

```json
// 20191206104224
// https://gogoanime.now.sh/api/v1/Popular/1

{
  "popular": [
    {
      "title": "Arifureta Shokugyou de Sekai Saikyou",
      "img": "https://cdnimg.xyz/cover/arifureta-shokugyou-de-sekai-saikyou.png",
      "synopsis": "Plot Summary: Seventeen-year-old Hajime Nagumo is your average, everyday otaku. However, his simple life of pulling all-nighters and sleeping in school is suddenly turned upside down when he, along with the rest of his class, is summoned to a fantasy world! They're treated like heroes and tasked with the duty of saving the human race from utter extinction. But what should have been any otaku's wet dream quickly turns into Hajime's nightmare. While the rest of his class are blessed with godlike powers, Hajime's job, Synergist, only has a single transmutation skill. Ridiculed and bullied by his classmates for being weak, he soon finds himself in despair. Will he be able to survive in this dangerous world of monsters and demons with only a glorified blacksmith's level of strength?",
      "genres": [
        "action",
        "adventure",
        "fantasy",
        "harem"
      ],
      "released": 2019,
      "status": "Completed",
      "otherName": "Arifureta: From Commonplace to World's Strongest, ありふれた職業で世界最強",
      "totalEpisodes": 13,
      "episodes": [
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-1"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-2"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-3"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-4"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-5"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-6"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-7"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-8"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-9"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-10"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-11"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-12"
        },
        {
          "id": "arifureta-shokugyou-de-sekai-saikyou-episode-13"
        }
      ]
    },
  ]
} 
```

## api.genres([genre] , [page])
---
<table>
<tr><th>Genres</th><th>Page Info</th><th>
<tr><td>

|  Genres   | 
|-----------|
| action , adventure                                                                                                                         |
| cars , comedy |
| dementia , demons , drama , dub |
| ecchi |
| fantasy |
| game |
| harem , historical , horror |
| josei |
| kids |
| magic , martial-arts , mecha , military , music , mystery |
| parody , police , psychological |
| romance |
| samurai , school , sci-fi , seinen , shoujo , shoujo-ai , shounen , shounen-ai , slice-of-life , space , orts , super-power , supernatural |
| thriller |
| vampire |
| yaoi , yuri |

</td><td>

| Page From | Limit |
|-----------|--------
| 1         | N/A   |   
</table>



```json
// 20191206104423
// https://gogoanime.now.sh/api/v1/Genre/action/2

{
  "anime": [
    {
      "title": "Tenpou Ibun Ayakashi Ayashi Inferno OVA (Dub)",
      "img": "https://cdnimg.xyz/cover/tenpou-ibun-ayakashi-ayashi-inferno-ova-dub.png",
      "synopsis": "Plot Summary: Specials set six months after the end of Tenpou Ibun Ayakashi Ayashi.",
      "genres": [
        "action",
        "drama",
        "historical",
        "supernatural"
      ],
      "released": 2007,
      "status": "Completed",
      "otherName": "Ghost Slayers Ayashi: Inferno",
      "totalEpisodes": 5,
      "episodes": [
        {
          "id": "tenpou-ibun-ayakashi-ayashi-inferno-ova-dub-episode-1"
        },
        {
          "id": "tenpou-ibun-ayakashi-ayashi-inferno-ova-dub-episode-2"
        },
        {
          "id": "tenpou-ibun-ayakashi-ayashi-inferno-ova-dub-episode-3"
        },
        {
          "id": "tenpou-ibun-ayakashi-ayashi-inferno-ova-dub-episode-4"
        },
        {
          "id": "tenpou-ibun-ayakashi-ayashi-inferno-ova-dub-episode-5"
        }
      ]
    },
    {
      "title": "Strike the Blood II",
      "img": "https://cdnimg.xyz/cover/strike-the-blood-ii.png",
      "synopsis": "Plot Summary: Strike the Blood new OVAs",
      "genres": [
        "action",
        "ecchi",
        "fantasy",
        "school",
        "shounen",
        "supernatural",
        "vampire"
      ],
      "released": 2016,
      "status": "Completed",
      "otherName": "Strike the Blood Second, ストライク・ザ・ブラッドⅡ",
      "totalEpisodes": 8,
      "episodes": [
        {
          "id": "strike-the-blood-ii-episode-1"
        },
        {
          "id": "strike-the-blood-ii-episode-2"
        },
        {
          "id": "strike-the-blood-ii-episode-3"
        },
        {
          "id": "strike-the-blood-ii-episode-4"
        },
        {
          "id": "strike-the-blood-ii-episode-5"
        },
        {
          "id": "strike-the-blood-ii-episode-6"
        },
        {
          "id": "strike-the-blood-ii-episode-7"
        },
        {
          "id": "strike-the-blood-ii-episode-8"
        }
      ]
    },
  ]
}
```

## api.ongoingSeries()
---
```json
// 20191206104537
// https://gogoanime.now.sh/api/v1/OngoingSeries

{
  "anime": [
    {
      "title": "Actors: Songs Connection",
      "img": "https://cdnimg.xyz/cover/actors-songs-connection.png",
      "synopsis": "Plot Summary: Private Tenshou Gakuen is the seventh of ten school districts circled within a 130-meter tall wall with restricted entry and egress aside from officials. The academy is fully autonomous by the government but to strive for independence, the school allows students to engage in club activities after school, which comes with a strangely unique system. Each club is ranked according to its overall accumulated points gathered from various club activities and school events. Points can also be received by winning at the school's periodic Tenshou Gakuen Singing Contest, where many students compete. The members in the clubs work hard to win the contest for their goal.",
      "genres": [
        "music",
        "school"
      ],
      "released": 2019,
      "status": "Ongoing",
      "otherName": "ACTORS -Songs Connection-",
      "totalEpisodes": 9,
      "episodes": [
        {
          "id": "actors-songs-connection-episode-1"
        },
        {
          "id": "actors-songs-connection-episode-2"
        },
        {
          "id": "actors-songs-connection-episode-3"
        },
        {
          "id": "actors-songs-connection-episode-4"
        },
        {
          "id": "actors-songs-connection-episode-5"
        },
        {
          "id": "actors-songs-connection-episode-6"
        },
        {
          "id": "actors-songs-connection-episode-7"
        },
        {
          "id": "actors-songs-connection-episode-8"
        },
        {
          "id": "actors-songs-connection-episode-9"
        }
      ]
    },
    {
      "title": "Actors: Songs Connection (Dub)",
      "img": "https://cdnimg.xyz/cover/actors-songs-connection-dub.png",
      "synopsis": "Plot Summary: Private Tenshou Gakuen is the seventh of ten school districts circled within a 130-meter tall wall with restricted entry and egress aside from officials. The academy is fully autonomous by the government but to strive for independence, the school allows students to engage in club activities after school, which comes with a strangely unique system. Each club is ranked according to its overall accumulated points gathered from various club activities and school events. Points can also be received by winning at the school's periodic Tenshou Gakuen Singing Contest, where many students compete. The members in the clubs work hard to win the contest for their goal.\n",
      "genres": [
        "music",
        "school"
      ],
      "released": 2019,
      "status": "Ongoing",
      "otherName": "ACTORS -Songs Connection-",
      "totalEpisodes": 1,
      "episodes": [
        {
          "id": "actors-songs-connection-dub-episode-1"
        }
      ]
    },
    {
      "title": "Africa no Salaryman (TV)",
      "img": "https://cdnimg.xyz/cover/africa-no-salaryman-tv.png",
      "synopsis": "Plot Summary: The comedy follows a lion, toucan, and lizard as they live the lives of office workers in a capitalist society in Japan, while also dealing with their unique situations as animals living beyond the savanna and the food chain.",
      "genres": [
        "comedy",
        "slice-of-life"
      ],
      "released": 2019,
      "status": "Ongoing",
      "otherName": "Africa Salaryman, アフリカのサラリーマン (TV)",
      "totalEpisodes": 9,
      "episodes": [
        {
          "id": "africa-no-salaryman-tv-episode-1"
        },
        {
          "id": "africa-no-salaryman-tv-episode-2"
        },
        {
          "id": "africa-no-salaryman-tv-episode-3"
        },
        {
          "id": "africa-no-salaryman-tv-episode-4"
        },
        {
          "id": "africa-no-salaryman-tv-episode-5"
        },
        {
          "id": "africa-no-salaryman-tv-episode-6"
        },
        {
          "id": "africa-no-salaryman-tv-episode-7"
        },
        {
          "id": "africa-no-salaryman-tv-episode-8"
        },
        {
          "id": "africa-no-salaryman-tv-episode-9"
        }
      ]
    },
  ]
}
```


### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2019 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).

