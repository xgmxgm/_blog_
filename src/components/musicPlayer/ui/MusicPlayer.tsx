import { useEffect, useState } from "react"; 
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { motion } from 'framer-motion'
import { FC } from "react";

import Musics from "@/music";

import "./MusicPlayer.scss"

let index_music: number = 0

export const MusicPlayer: FC = () => {
    const [button_size, setButton_size] = useState<string>('6em')

    const [musicNames, setMusicNames] = useState<string>(Musics[index_music].Music)
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [play, { pause, duration, sound }] = useSound<object>(musicNames);

    type TypeTime = {
        min: number,
        sec: number
    }

    const [currTime, setCurrTime] = useState<TypeTime>({
        min: 0,
        sec: 0,
    });

    const [time, setTime] = useState<TypeTime>({
        min: 0,
        sec: 0,
    });

    const [seconds, setSeconds] = useState<number>();

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

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    const backButton = () => {
        if (index_music > 0) {
            index_music -= 1
        }
        setMusicNames(Musics[index_music].Music)
        pause()
        setIsPlaying(false);
    }
    
    const nextButton = () => {
        if (index_music < Musics.length - 1) {
            index_music += 1
        }
        setMusicNames(Musics[index_music].Music)
        pause()
        setIsPlaying(false);
    }

    useEffect(() => {
        if (window.innerWidth <= 393) {
            setButton_size('3.9em')
        }
    });

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [isPlaying]);

    useEffect(() => {
        const interval = setInterval(() => {
        if (sound) {
            setSeconds(sound.seek([]));
            const min: number = Math.floor(sound.seek([]) / 60);
            const sec: number = Math.floor(sound.seek([]) % 60);
            setCurrTime({
                min,
                sec,
            });
        }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

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
                        <h4 className="text-3xl">{Musics[index_music].Music_name}</h4>
                    </div>
                    <div className="duration">
                        <div className="time">
                            <p>
                                { Number.isNaN(currTime.min) ? 0 : currTime.min}:{ Number.isNaN(currTime.sec) ? 0 : currTime.sec}
                            </p>
                        </div>
                        <input
                            type = "range"
                            min = "0"
                            max = {duration ? duration / 1000 : 0}
                            value = {seconds}
                            className = "timeline"
                            onChange = {(e) => {
                                sound.seek([e.target.value]);
                            }}
                        />
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
                        src = { Musics[index_music].Music_photo }
                    />
                </div>
            </div>
        </motion.div>
    )
}