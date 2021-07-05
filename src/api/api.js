const axios = require('axios');
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const url = require('./urls');


const ongoingSeries = async() =>{
  const res = await axios.get(`${url.BASE_URL}`);
  const body = await res.data;
  const $ = cheerio.load(body);
  const promises = [];

  Array.from({length: 30} , (v , k) =>{
    $('div.main_body div.series nav.menu_series ul li').eq(k + 1).each((index , element) =>{
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
    })
  });
  return await Promise.all(promises);
};

const search = async(query) =>{
  const res = await axios.get(`${url.BASE_URL}/search.html?keyword=${query}`);
  const body = await res.data;
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

const genres = async(genre , page) =>{
  const res = await axios.get(`${url.BASE_URL}/genre/${genre}?page=${page}`);
  const body = await res.data;
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

const alphabetList = async(letter , page) =>{
  const res = await axios.get(`${url.BASE_URL}/anime-list-${letter}?page=${page}`)
  const body = await res.data;
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

const newSeasons = async(page) =>{
  const res = await axios.get(`${url.BASE_URL}/new-season.html?page=${page}`)
  const body = await res.data;
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

const movies = async(page) =>{
  const res = await axios.get(`${url.BASE_URL}/anime-movies.html?page=${page}`);
  const body = await res.data;
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

const popular = async(page) =>{
  const res = await axios.get(`${url.BASE_URL}/popular.html?page=${page}`);
  const body = await res.data;
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
  const res = await axios.get(`${url.BASE_URL}`);
  const body = await res.data;
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

const recentReleaseEpisodes = async(page) =>{
  const res = await axios.get(`${url.BASE_URL}/?page=${page}`);
  const body = await res.data;
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
  const res = await axios.get(`${url.BASE_URL}/${id}`);
  const body = await res.data;
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
  const res = await axios.get(`${url.BASE_URL}${id}`);
  const body = await res.data;
  const $ = cheerio.load(body);
  const promises = [];
  let check_zero_episode = false;
  const check_zero_episode_axios = await axios.get(`${url.BASE_URL}${id.split('/')[2]}`);
  const check_zero_episode_body = await check_zero_episode_axios.data;
  const check_zero_episode_cheerio = cheerio.load(check_zero_episode_body);
  if(check_zero_episode_cheerio('.entry-title').text()!='404') {
    check_zero_episode = true
  }

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
    var totalEpisodes = parseInt($('div.anime_video_body ul#episode_page li').eq(liTotal - 1).find('a').text().split('-')[1] , 10);
    if(!totalEpisodes){
       totalEpisodes = parseInt($('div.anime_video_body ul#episode_page li').eq(liTotal - 1).find('a').text() , 10);
    }
    
    let episodes = Array.from({length: totalEpisodes} , (v , k) =>{
      const animeId = `${id}-episode-${k + 1}`.slice(10);
      return{
        id: animeId
      }
    });
    
    if(check_zero_episode) {
      episodes.unshift({id:id.split('/')[2]});
    }

    promises.push({
      img: img,
      synopsis: synopsis,
      genres: genres,
      released: released,
      status: status,
      otherName: otherName,
      totalEpisodes: check_zero_episode ? totalEpisodes+1 : totalEpisodes,
      episodes: episodes
    });
  });
  return await Promise.all(promises);
};

const decodeVidstreamingIframeURL = async(url) =>{
  const _url = `https://${url}`;
  let realUrl = "";
  if(_url.includes('streaming')){
    realUrl = _url.replace(/streaming/g , 'check').trim();
    if(realUrl.includes('vidcheck.io')){
      realUrl = _url.replace(/vidcheck.io/g , 'vidstreaming.io').trim();
    }
  }
  if(_url.includes('load')){
    realUrl = _url.replace(/load/g , 'check').trim();
  }
  if(_url.includes('server')){
    realUrl = _url.replace(/server/g , 'check').trim();
  }

  const data = await cloudscraper(realUrl);
  const match = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const _URLs = String(data).match(match)
    .filter(url => url.includes('.mp4') || url.includes('m3u8'));

  const URLs = [];
  Array.from({length: _URLs.length} , (v , k) =>{
    const option = k + 1;
    let url  = _URLs[k];
    if(!url.includes('https://')){
      url = `https://${url}`
    }
    URLs.push({
      option: option || null,
      url: url || null
    })
  });
  
  return Promise.all(URLs);
}

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
  genres,
  decodeVidstreamingIframeURL
}