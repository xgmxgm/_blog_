import { useEffect, useState } from "react"; 
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { motion } from 'framer-motion'
import { FC } from "react";

// MUSICS

import LONELY from "@/music/Imagine Dragons - Lonely.mp3"
import HIGHER from "@/music/Imagine Dragons - Higher Ground.mp3"
import FALLING from "@/music/BoyWithUke_-_Falling_for_You_(musmore.com).mp3"


import "./MusicPlayer.scss"

const Musics: string[] = [FALLING, LONELY, HIGHER]
const Musics_names: string[] = ["BoyWithUke - Falling for You", "Imagine Dragons - Lonely", "Imagine Dragons - Higher Ground"]
let index_music: number = 0

// photos

import BoyWithUke from "../../../../public/img/BoyWithUke.jpg"
import Imagine from "../../../../public/img/imagine_dragons.jpeg"

const Photo_Music: string[] = [BoyWithUke, Imagine, Imagine]
let Photo_index: number = 0

export const MusicPlayer: FC = () => {
    const [button_size, setButton_size] = useState<string>('6em')

    const pVariants = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const [musicNames, setMusicNames] = useState(Musics[index_music])
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause }] = useSound(musicNames);

    const playingButton = () => {
        if (isPlaying) {
            pause(); // приостанавливаем воспроизведение звука
            setIsPlaying(false);
        } else {
            play(); // воспроизводим аудиозапись
            setIsPlaying(true);
        }
    };

    const backButton = () => {
        if (index_music > 0) {
            index_music -= 1

            if (Photo_index > 0) {
                Photo_index -= 1
            }
        }
        setMusicNames(Musics[index_music])
        pause()
        setIsPlaying(false);
    }
    
    const nextButton = () => {
        if (index_music < Musics.length - 1) {
            index_music += 1

            if (Photo_index < Photo_Music.length) {
                Photo_index += 1
            }
        }
        setMusicNames(Musics[index_music])
        pause()
        setIsPlaying(false);
    }

    useEffect(() => {
        if (window.innerWidth <= 393) {
            setButton_size('3.9em')
        }
    });

    return (
        <motion.div
            className = 'body__MusicPlayer'
            initial = "hidden"
            whileInView = "visible"
            variants={pVariants}
        >
            <div className='MusicPlayer'>
                <div className="controller__name">
                    <div className="Music__name">
                        <h3 className="text-center text-3xl">{index_music + 1} / {Musics.length}</h3>
                        <h4 className="text-3xl">{Musics_names[index_music]}</h4>
                    </div>
                    <div className="controller">
                        <button className="playButton" onClick={backButton}>
                        <IconContext.Provider value={{ size: button_size, color: "#27AE60" }}>
                            <BiSkipPrevious />
                        </IconContext.Provider>
                        </button>
                        {!isPlaying ? (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: button_size, color: "#27AE60" }}>
                            <AiFillPlayCircle />
                            </IconContext.Provider>
                        </button>
                        ) : (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: button_size, color: "#27AE60" }}>
                            <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                        )}
                        <button className="playButton" onClick={nextButton}>
                        <IconContext.Provider value={{ size: button_size, color: "#27AE60" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                        </button>
                    </div>
                </div>
                <div className="info__music">
                    <img
                        className="musicCover"
                        src = { Photo_Music[Photo_index] }
                    />
                </div>
            </div>
        </motion.div>
    )
}