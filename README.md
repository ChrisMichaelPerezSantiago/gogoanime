# **:triangular_flag_on_post: GOGOANIME API** (version 1.0.0)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
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
         


         
>Gogoanime is a custom API that provides data from the `10.gogoanime.io` website. You will have access to the entire catalog whether movies, series, current episodes, etc., with English subtitles.

---

## 🚧 API still in development.
*More information and documentation of the API in the coming days.*

### **Installation**

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

*First of all I must mention that the url of the videos work only using the iframe element.*
*To get the videos (servers) of each chapter, you only need to use the `api.animeEpisodeHandler` function that receives the id of the episode as a parameter.* 
*To verify the id of each episode, look at the episodes property:*

```json
 "episodes": 
    [
      { "id": "high-score-girl-ii-episode-1"  },
      { "id": "high-score-girl-ii-episode-2"  },
      { "id": "high-score-girl-ii-episode-3"  },
      { "id": "high-score-girl-ii-episode-4"  },
      { "id": "high-score-girl-ii-episode-5"  },
      { "id": "high-score-girl-ii-episode-6"  }
    ]
```

*You just have to pass the id of the episode*

```javascript
api.animeEpisodeHandler('high-score-girl-ii-episode-1')
  .then(res =>{
    console.log(res)
  });
```

```json
{
  
      "img": "https://cdnimg.xyz/cover/high-score-girl-ii.png",
      "synopsis": "Plot Summary: Second season of High Score Girl.",
      "genres": [
        "comedy",
        "romance",
        "school",
        "seinen"
      ],
      "category": "fall-2019-anime",
      "released": 2019,
      "status": "Ongoing",
      "otherName": "High Score Girl 2, ハイスコアガール II",
      "totalEpisodes": 6,
      "servers": [
        {
          "name": "Vidstreaming",
          "iframe": "vidstreaming.io/streaming.php?id=MTMyNDQ1&title=High+Score+Girl+II+Episode+1"
        },
        {
          "name": "Xstreamcdn",
          "iframe": "https://www.fembed.com/v/e2rl-f-qrq04p06"
        },
        {
          "name": "Vidcdn",
          "iframe": "vidstreaming.io/load.php?id=MTMyNDQ1&title=High+Score+Girl+II+Episode+1"
        },
        {
          "name": "Oload",
          "iframe": "https://oload.tv/embed/eMcrh-3m9t8"
        },
        {
          "name": "OpenUpload",
          "iframe": "https://openload.co/embed/7mmbGh9BEAw"
        },
        {
          "name": "Mp4Upload",
          "iframe": "https://www.mp4upload.com/embed-3itdglzi80nu.html"
        }
      ]
}
```

## api.search([query])

```javascript
{ 
  title: 'Tokyo Ghoul',
  img: 'https://cdnimg.xyz/images/summer/Tokyo Ghoul.jpg',
  synopsis:
   'Plot Summary: Tokyo is haunted by mysterious ghouls who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like he is, at the café he frequents. Little does Kaneki realize that his fate will change overnight.',
  genres:
    [ 
     'action',
     'drama',
     'horror',
     'mystery',
     'psychological',
     'supernatural' 
    ],
  released: 2014,
  status: 'Completed',
  otherName: '東京喰種-トーキョーグール-',
  totalEpisodes: 12,
  episodes:
   [ 
     { id: 'tokyo-ghoul-episode-1' },
     { id: 'tokyo-ghoul-episode-2' },
     { id: 'tokyo-ghoul-episode-3' },
     { id: 'tokyo-ghoul-episode-4' },
     { id: 'tokyo-ghoul-episode-5' },
     { id: 'tokyo-ghoul-episode-6' },
     { id: 'tokyo-ghoul-episode-7' },
     { id: 'tokyo-ghoul-episode-8' },
     { id: 'tokyo-ghoul-episode-9' },
     { id: 'tokyo-ghoul-episode-10' },
     { id: 'tokyo-ghoul-episode-11' },
     { id: 'tokyo-ghoul-episode-12' } 
    ]  
}
```

##  api.recentReleaseEpisodes([page])

| Page From | Limit |
|-----------|--------
| 1         | 257   |         

```json
  {
    "title": "Shounen Kenya",
    "img": "https://cdnimg.xyz/cover/shounen-kenya.png",
    "synopsis": "Plot Summary: It is the year 1941. 11-year-old Murakami Wataru lives with his family, Japanesetextile traders operating in British Kenya, when war breaks out between Japan and the Allies. Fleeing intothe bush, young Wataru falls headlong into a series of fantastic adventures.",
    "genres": [
      "adventure"
    ],
    "category": "movies",
    "episode": 1,
    "totalEpisodes": 1,
    "released": 1984,
    "status": "Completed",
    "otherName": "Kenya Boy, 少年ケニヤ",
    "servers": [
      {
        "name": "Vidstreaming",
        "iframe": "vidstreaming.io/streaming.php?id=MTM0NTkw&title=Shounen+Kenya+Episode+1"
      },
      {
        "name": "Vidcdn",
        "iframe": "vidstreaming.io/load.php?id=MTM0NTkw&title=Shounen+Kenya+Episode+1"
      },
      {
        "name": "Mp4Upload",
        "iframe": "https://www.mp4upload.com/embed-3j9bw9g69xni.html"
      }
    ]
  },
  {
    "title": "Hoshiai no Sora",
    "img": "https://cdnimg.xyz/cover/hoshiai-no-sora.png",
    "synopsis": "Plot Summary: The teen adolescence story revolves around the coming-of-age of boys in a juniorhigh school's soft tennis club, which is on the verge of shutting down. Touma Shinjou asks Maki Katsuragi tojoin the team for his vaunted abilities, and mentions a summer competition. Katsuragi asks for money inreturn for joining the team.",
    "genres": [
      "drama",
      "school",
      "slice-of-life",
      "sports"
    ],
    "category": "fall-2019-anime",
    "episode": 9,
    "totalEpisodes": 9,
    "released": 2019,
    "status": "Ongoing",
    "otherName": "Stars Align, 星合の空",
    "servers": [
      {
        "name": "Vidstreaming",
        "iframe": "vidstreaming.io/streaming.php?id=MTM0NTg5&title=Hoshiai+no+Sora+Episode+9"
      },
      {
        "name": "Vidcdn",
        "iframe": "vidstreaming.io/load.php?id=MTM0NTg5&title=Hoshiai+no+Sora+Episode+9"
      },
      {
        "name": "Mp4Upload",
        "iframe": "https://www.mp4upload.com/embed-4f51v2r9c5xt.html"
      }
    ]
  }
```

## api.recentlyAddedSeries()

```json
{
  "title": "Detective Conan Movie 21: The Crimson Love Letter",
  "img": "https://cdnimg.xyz/cover/detective-conan-movie-21-the-crimson-love-letter.png",
  "synopsis": "Plot Summary: A bombing case at Nichiuri TV in autumn. The Satsuki Cup, which crowns the winner of Japan's Hyakunin Isshu, is currently being filmed inside the facility. The incident results in a big commotion and, while the building is burning to ashes, the only people left inside are Heiji and Kazuha. They get rescued just in time by Conan, who rushes to the scene. Both the identity and purposes of the bomber are unknown. While confusion takes over due to the explosion, Conan meets a mysterious beautiful girl who claims she is \"Heiji's fiancée\". Her name is Momiji Ooka and she is the Kyoto High School champion of the Karuta game. As fate would have it, Kazuha is going to face Momiji in the Hyakunin Isshu, so she begins to train with the help of Heiji's mother, Shizuka, who is a skilled Karuta player. At the same time, in a Japanese house in Arashiyama, Kyoto's outskirts, the reigning Satsuki Cup champion is murdered. Pictures of the crime scene reveal Momji's presence. Additionally, several Karuta cards were spread around the victim. Conan and Heiji, along with the Osaka and Kyoto police departments, begin their investigation on the Satsuki Cup and the related murder case. As the inquiry goes on, they come across a secret connected with the Hyakunin Isshu. ",
  "genres": [
    "action",
    "drama",
    "historical",
    "mystery",
    "police",
    "romance"
  ],
  "released": 2017,
  "status": "Completed",
  "otherName": "Detective Conan Movie 21: Karakurenai no Love Letter",
  "totalEpisodes": 1,
  "episodes": [
    {
      "id": "detective-conan-movie-21-the-crimson-love-letter-episode-1"
    }
  ]
}
```

## api.alphabetList([letter] , [page])

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
  {
    "title": "Z/X: Code Reunion",
    "img": "https://cdnimg.xyz/cover/zx-code-reunion.png",
    "synopsis": "Plot Summary: Sequel of Z/X: Ignition.",
    "genres": [
      "fantasy",
      "school",
      "sci-fi",
      "shounen"
    ],
    "released": 2019,
    "status": "Ongoing",
    "otherName": "",
    "totalEpisodes": 9,
    "episodes": [
      {
        "id": "zx-code-reunion-episode-1"
      },
      {
        "id": "zx-code-reunion-episode-2"
      },
      {
        "id": "zx-code-reunion-episode-3"
      },
      {
        "id": "zx-code-reunion-episode-4"
      },
      {
        "id": "zx-code-reunion-episode-5"
      },
      {
        "id": "zx-code-reunion-episode-6"
      },
      {
        "id": "zx-code-reunion-episode-7"
      },
      {
        "id": "zx-code-reunion-episode-8"
      },
      {
        "id": "zx-code-reunion-episode-9"
      }
    ]
  },
  {
    "title": "Z/X: Ignition",
    "img": "https://cdnimg.xyz/images/Z-X_Ignition.jpg",
    "synopsis": "Plot Summary: The story is set in the not-so-distant future. Five “Black Points” suddenlyappeared around the world as portals to parallel worlds. Immediately after, strange creatures began theirinvasion from these portals. These creatures are the inhabitants of five worlds—the same worlds in differenttimeframes. In order to ensure their own future timeframe survives, each of the five invasion forces battleto wipe the other future timeframes out. The key is one card-shaped device.",
    "genres": [
      "adventure",
      "fantasy",
      "game",
      "sci-fi"
    ],
    "released": 2014,
    "status": "Completed",
    "otherName": "Zillions of Enemy X Ignition",
    "totalEpisodes": 12,
    "episodes": [
      {
        "id": "zx-ignition-episode-1"
      },
      {
        "id": "zx-ignition-episode-2"
      },
      {
        "id": "zx-ignition-episode-3"
      },
      {
        "id": "zx-ignition-episode-4"
      },
      {
        "id": "zx-ignition-episode-5"
      },
      {
        "id": "zx-ignition-episode-6"
      },
      {
        "id": "zx-ignition-episode-7"
      },
      {
        "id": "zx-ignition-episode-8"
      },
      {
        "id": "zx-ignition-episode-9"
      },
      {
        "id": "zx-ignition-episode-10"
      },
      {
        "id": "zx-ignition-episode-11"
      },
      {
        "id": "zx-ignition-episode-12"
      }
    ]
  },
```

## api.movies([page])

| Page From | Limit |
|-----------|--------
| 1         | 64    |   


```json
  {
    "title": "Alps no Shoujo Heidi (1979)",
    "img": "https://cdnimg.xyz/cover/alps-no-shoujo-heidi-1979.png",
    "synopsis": "Plot Summary: Condensed version of the entire TV series where all the voice actors,except for Heidi and the grandfather, were replaced.",
    "genres": [
      "drama",
      "historical",
      "slice-of-life"
    ],
    "released": 1979,
    "status": "Completed",
    "otherName": "The Story of Heidi, アルプスの少女ハイジ (1979",
    "totalEpisodes": 1,
    "episodes": [
      {
        "id": "alps-no-shoujo-heidi-1979-episode-1"
      }
    ]
  },
  {
    "title": "Detective Conan Movie 21: The Crimson Love Letter",
    "img": "https://cdnimg.xyz/cover/detective-conan-movie-21-the-crimson-love-letter.png",
    "synopsis": "Plot Summary: A bombing case at Nichiuri TV in autumn. The Satsuki Cup, which crownsthe winner of Japan's Hyakunin Isshu, is currently being filmed inside the facility. The incidentresults in a big commotion and, while the building is burning to ashes, the only people left insideare Heiji and Kazuha. They get rescued just in time by Conan, who rushes to the scene. Both theidentity and purposes of the bomber are unknown. While confusion takes over due to the explosion,Conan meets a mysterious beautiful girl who claims she is \"Heiji's fiancée\". Her name is MomijiOoka and she is the Kyoto High School champion of the Karuta game. As fate would have it, Kazuha isgoing to face Momiji in the Hyakunin Isshu, so she begins to train with the help of Heiji's mother,Shizuka, who is a skilled Karuta player. At the same time, in a Japanese house in Arashiyama,Kyoto's outskirts, the reigning Satsuki Cup champion is murdered. Pictures of the crime scene revealMomji's presence. Additionally, several Karuta cards were spread around the victim. Conan and Heiji,along with the Osaka and Kyoto police departments, begin their investigation on the Satsuki Cup andthe related murder case. As the inquiry goes on, they come across a secret connected with theHyakunin Isshu. ",
    "genres": [
      "action",
      "drama",
      "historical",
      "mystery",
      "police",
      "romance"
    ],
    "released": 2017,
    "status": "Completed",
    "otherName": "Detective Conan Movie 21: Karakurenai no Love Letter",
    "totalEpisodes": 1,
    "episodes": [
      {
        "id": "detective-conan-movie-21-the-crimson-love-letter-episode-1"
      }
    ]
  },
```

## api.popular([page])

| Page From | Limit |
|-----------|--------
| 1         | 345   |   

```json
 {
    "title": "Arifureta Shokugyou de Sekai Saikyou",
    "img": "https://cdnimg.xyz/cover/arifureta-shokugyou-de-sekai-saikyou.png",
    "synopsis": "Plot Summary: Seventeen-year-old Hajime Nagumo is your average, everyday otaku. However his simple life of pulling all-nighters and sleeping in school is suddenly turned upside down whenhe, along with the rest of his class, is summoned to a fantasy world! They're treated like heroesand tasked with the duty of saving the human race from utter extinction. But what should have beenany otaku's wet dream quickly turns into Hajime's nightmare. While the rest of his class are blessedwith godlike powers, Hajime's job, Synergist, only has a single transmutation skill. Ridiculed andbullied by his classmates for being weak, he soon finds himself in despair. Will he be able tosurvive in this dangerous world of monsters and demons with only a glorified blacksmith's level ofstrength?",
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
```

## api.genres([genre] , [page])

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
    {
      "title": "Uchuu Senkan Yamato 2202: Ai no Senshi-tachi",
      "img": "https://cdnimg.xyz/cover/uchuu-senkan-yamato-2202-ai-no-senshi-tachi.png",
      "synopsis": "Plot Summary: Space Battleship Yamato 2202: Warriors of Love continues the story of Space Battleship Yamato 2199.\n\nIt is the year 2202, three Years after the war with Gamillas, the people in the Solar System are finally at peace once again and the Earth has been restored back to life. With the end of the war, there is a peace treaty between Earth and Gamillas which will strengthen their military bond and secure true peace. In addition to the reconstruction of Earth, the joint forces form a new intergalactic defense fleet with a new ship, Andromeda, to be its new symbol of power. Due to these advancements, the Earth is going on a path of military expansion despite Starsha Iscandar's wishes of peace. But when a new threat called the Gatlantis starts to wreak havoc to a newly reformed galaxy, the Goddess Teressa calls upon the Yamato once more in order to fight back against the new threat.",
      "genres": [
        "action",
        "drama",
        "military",
        "sci-fi",
        "space"
      ],
      "released": 2017,
      "status": "Completed",
      "otherName": "宇宙戦艦ヤマト2202 愛の戦士たち",
      "totalEpisodes": 26,
      "episodes": [
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-1"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-2"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-3"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-4"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-5"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-6"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-7"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-8"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-9"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-10"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-11"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-12"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-13"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-14"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-15"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-16"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-17"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-18"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-19"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-20"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-21"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-22"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-23"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-24"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-25"
        },
        {
          "id": "uchuu-senkan-yamato-2202-ai-no-senshi-tachi-episode-26"
        }
      ]
    },
```

## api.ongoingSeries()
```json
{
  "title": "Bakugan: Battle Planet (Dub)",
  "img": "https://cdnimg.xyz/cover/bakugan-battle-planet-dub.png",
  "synopsis": "Plot Summary: Bakugan: Battle Planet is the name of the first season of the upcoming Bakugan reboot.\n\nThe season follows the adventures of Dan Kouzo and his best friends, the first kids on Earth to bond with the mysterious alien creatures known as the Bakugan. The storyline will revolve around friendship, battling, and competition.",
  "genres": [
    "action"
  ],
  "released": 0,
  "status": "Ongoing",
  "otherName": "Bakugan: Battle Planet",
  "totalEpisodes": 15,
  "episodes": [
    {
      "id": "bakugan-battle-planet-dub-episode-1"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-2"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-3"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-4"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-5"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-6"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-7"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-8"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-9"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-10"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-11"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-12"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-13"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-14"
    },
    {
      "id": "bakugan-battle-planet-dub-episode-15"
    }
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
