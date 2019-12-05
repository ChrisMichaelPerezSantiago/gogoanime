const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = require('./urls');


//I need to verify how to load data faster
const ongoingSeries = async() =>{
  const res = await fetch(`${url.BASE_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.series nav.menu_series ul li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('a').attr('href');
    const title = $element.find('a').text(); 
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  });
  return await Promise.all(promises);
};

const search = async(query) =>{
  if(!query.length) return null;
  const res = await fetch(`${url.BASE_URL}//search.html?keyword=${query}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.last_episodes ul.items li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  });
  return await Promise.all(promises);
};


// action , adventure
// cars , comedy
// dementia , demons , drama , dub
// ecchi
// fantasy
// game
// harem , historical , horror
// josei
// kids
// magic , martial-arts , mecha , military , music , mystery
// parody , police , psychological
// romance
// samurai , school , sci-fi , seinen , shoujo , shoujo-ai , shounen , shounen-ai , slice-of-life , space , sports , super-power
// supernatural
// thriller
// vampire
// yaoi , yuri
const genres = async(genre , page) =>{
  const res = await fetch(`${url.BASE_URL}/genre/${genre}?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.last_episodes ul.items li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  });
  return await Promise.all(promises);
};

// letter = '0' (zero value means , numbers in the title) page limit [1 .. 53]
// letter = 'A' page limit [1 .. 4]
// letter = 'C' page limit [1 .. 3]
// letter = 'D' page limit [1 .. 4]
// letter = 'E' page limit [1 .. 1]
// letter = 'F' page limit [1 .. 2]
// letter = 'G' page limit [1 .. 3]
// letter = 'H' page limit [1 .. 4]
// letter = 'I' page limit [1 .. 2]
// letter = 'J' page limit [1 .. 1]
// letter = 'K' page limit [1 .. 4]
// letter = 'L' page limit [1 .. 2]
// letter = 'M' page limit [1 .. 4]
// letter = 'N' page limit [1 .. 2]
// letter = 'O' page limit [1 .. 2]
// letter = 'P' page limit [1 .. 1]
// letter = 'Q' page limit [1 .. 1]
// letter = 'R' page limit [1 .. 2]
// letter = 'S' page limit [1 .. 6]
// letter = 'T' page limit [1 .. 4]
// letter = 'U' page limit [1 .. 1]
// letter = 'V' page limit [1 .. 1]
// letter = 'W' page limit [1 .. 1]
// letter = 'Z' page limit [1 .. 1]
// letter = 'Y' page limit [1 .. 2]
// letter = 'Z' page limit [1 .. 1]
const alphabetList = async(letter , page) =>{
  const res = await fetch(`${url.BASE_URL}/anime-list-${letter}?page=${page}`)
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.anime_list_body ul.listing li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  });
  return await Promise.all(promises);
};

// page limit = [1 .. 4]
const newSeasons = async(page) =>{
  const res = await fetch(`${url.BASE_URL}/new-season.html?page=${page}`)
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  
  $('div.main_body div.last_episodes ul.items li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.img a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  })
  return await Promise.all(promises);
};

//page limit = [1 .. 64]
const movies = async(page) =>{
  const res = await fetch(`${url.BASE_URL}/anime-movies.html?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  
  $('div.main_body div.last_episodes ul.items li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.img a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  })
  return await Promise.all(promises);
};

//page limit = [1 .. 354]
const popular = async(page) =>{
  const res = await fetch(`${url.BASE_URL}/popular.html?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  
  $('div.main_body div.last_episodes ul.items li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.img a').attr('href');
    const title = $element.find('a').text().trim();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  })
  return await Promise.all(promises);
};

const recentlyAddedSeries = async() =>{
  const res = await fetch(`${url.BASE_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body.none div.added_series_body ul.listing li').each((index , element) => {
    const $element = $(element);
    const id = $element.find('a').attr('href');
    const title = $element.find('a').text();
    promises.push(animeContentHandler(id).then(extra =>({
      title: title ? title : null,                   
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      episodes: extra[0] ? extra[0].episodes: null
    })));
  });
  return await Promise.all(promises);
};

//page limit = [1 .. 257]
const recentReleaseEpisodes = async(page) =>{
  const res = await fetch(`${url.BASE_URL}/?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.last_episodes.loaddub ul.items li').each((index , element) => {
    const $element = $(element);
    const id = $element.find('p.name a').attr('href');
    const title = $element.find('p.name a').text();
    const episode = parseInt($element.find('p.episode').text().match(/\d+/g) , 10);
    promises.push(animeEpisodeHandler(id).then(extra =>({
      title: title || null,                   
      img: extra[0].img || null,
      synopsis: extra[0].synopsis || null,
      genres: extra[0].genres || null,
      category: extra[0].category || null,
      episode: episode || null,
      totalEpisodes: extra[0].totalEpisodes || null,
      released: extra[0].released || null,
      status: extra[0].status || null,
      otherName: extra[0].otherName || null,
      servers: extra[0].servers || null
    })));
  });
  return await Promise.all(promises);
};

const animeEpisodeHandler = async(id) =>{
  const res = await fetch(`${url.BASE_URL}/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div#wrapper_bg').each((index , element) =>{
    const $element = $(element);
    const animeId = $element.find('div.anime_video_body div.anime_video_body_cate div.anime-info a').attr('href');
    const category = $element.find('div.anime_video_body div.anime_video_body_cate a').attr('href').split('/')[2].trim();

    const servers = [];
    $element.find('div.anime_muti_link ul li').each((j , el) =>{
      const $el = $(el);
      const name = $el.find('a').text().substring(0 , $el.find('a').text().lastIndexOf('C')).trim();
      let iframe = $el.find('a').attr('data-video');
      if(iframe.startsWith('//')){
        iframe = $el.find('a').attr('data-video').slice(2);
      } 
      servers.push({
        name: name,
        iframe: iframe
      });
    })
    promises.push(animeContentHandler(animeId).then(extra =>({
      img: extra[0] ? extra[0].img : null,
      synopsis: extra[0] ? extra[0].synopsis : null,
      genres: extra[0] ? extra[0].genres : null,
      category: category ? category : null,
      released: extra[0] ? extra[0].released : null,
      status: extra[0] ? extra[0].status : null,
      otherName: extra[0] ? extra[0].otherName : null,
      totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
      servers: servers ? servers : null
    })));
  })
  return await Promise.all(promises);
}

const animeContentHandler = async(id) =>{
  const res = await fetch(`${url.BASE_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div#wrapper_bg').each((index , element) =>{
    const $element = $(element);
    const img = $element.find('div.anime_info_body_bg img').attr('src');
    const synopsis = $element.find('div.anime_info_body_bg p.type').eq(1).text();
    const genres = [];
    $element.find('div.anime_info_body_bg p.type').eq(2).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[4];
      genres.push(genre);
    });
    const released = parseInt($element.find('div.anime_info_body_bg p.type').eq(3).text().match(/\d+/g) , 10);
    const status = $element.find('div.anime_info_body_bg p.type').eq(4).text().replace('Status:' , '').trim();
    const otherName = $element.find('div.anime_info_body_bg p.type').eq(5).text().replace('Other name:' , '').trim();
    const liTotal = $('div.anime_video_body ul#episode_page li').length;
    const totalEpisodes = parseInt($('div.anime_video_body ul#episode_page li').eq(liTotal - 1).find('a').text().split('-')[1] , 10);
    const episodes = Array.from({length: totalEpisodes} , (v , k) =>{
      const animeId = `${id}-episode-${k + 1}`.slice(10);
      return{
        id: animeId
      }
    });
    promises.push({
      img: img,
      synopsis: synopsis,
      genres: genres,
      released: released,
      status: status,
      otherName: otherName,
      totalEpisodes: totalEpisodes,
      episodes: episodes
    });
  });
  return await Promise.all(promises);
};


module.exports = {
  animeEpisodeHandler,
  recentReleaseEpisodes,
  recentlyAddedSeries,
  ongoingSeries,
  alphabetList,
  newSeasons,
  movies,
  popular,
  search,
  genres
}