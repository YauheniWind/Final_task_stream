const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);


const musicUrl = process.argv[2].split(',');

(async () => {
    for await (let link of musicUrl) {
        const readableVideoStream = ytdl(link)
        const outputPath = path.resolve(`/Users/evgenijgravdin/Desktop/Final_task_stream/music/music_` + `${Math.random()}` + `.mp3`)

        ytdl(link).pipe(fs.createWriteStream(`${process.argv[3]}_${Math.random()}.mp4`))

        ffmpeg(readableVideoStream)
            .withNoVideo()
            .toFormat('mp3')
            .saveToFile(outputPath)
    }
})()