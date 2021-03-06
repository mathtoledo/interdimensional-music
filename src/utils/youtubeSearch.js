import play from 'play-dl'

export default async function youtubeSearch(search) {
    const songInfo = await play.search(search, {
        limit: 1
    })
    if (!songInfo.length) {
        console.log(`❌🔎 ${search} não encontrado.`)
        return { error: true, errorMessage: `❌🔎 ${search} não encontrado`}
    }
    return {
        title: songInfo[0].title,
        duration: Math.floor(songInfo[0].durationInSec / 60) + ' min',
        thumbnail: songInfo[0].thumbnails[0].url,
        url: songInfo[0].url,
    }
}