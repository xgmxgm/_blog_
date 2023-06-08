// MUSICS

import LONELY from "@/music/music_list/Imagine Dragons - Lonely.mp3"
import HIGHER from "@/music/music_list/Imagine Dragons - Higher Ground.mp3"
import FALLING from "@/music/music_list/BoyWithUke_-_Falling_for_You_(musmore.com).mp3"
import UNDERSTAND from "@/music/music_list/BoyWithUke - Understand.mp3";
import LOVESICK from "@/music/music_list/Boywithuke - Lovesick.mp3";
import IDGAF from "@/music/music_list/Boywithuke - IDGAF.mp3";
import LOVE from "@/music/music_list/Imagine Dragons - Love.mp3";
import _7_YEARS from "@/music/music_list/Lukas Graham - 7 Years.mp3";

// PHOTOS

import BoyWithUke from "../../public/img/BoyWithUke.webp"
import Imagine from "../../public/img/imagine_dragons.webp"
import Lukas_Graham from "../../public/img/Lukas_Graham.webp"

type TypeMusic = {
    Music: string,
    Music_name: string,
    Music_photo: string,
};

const Music: TypeMusic[] = [
    {
        Music : FALLING,
        Music_name : "BoyWithUke - Falling for You",
        Music_photo : BoyWithUke,
    },
    {
        Music : UNDERSTAND,
        Music_name : "BoyWithUke - Understand",
        Music_photo : BoyWithUke,
    },
    {
        Music : LOVESICK,
        Music_name : "BoyWithUke - Lovesick",
        Music_photo : BoyWithUke,
    },
    {
        Music : IDGAF,
        Music_name : "BoyWithUke - IDGAF",
        Music_photo : BoyWithUke,
    },
    {
        Music : LOVE,
        Music_name : "Imagine Dragons - Love",
        Music_photo : Imagine,
    },
    {
        Music : LONELY,
        Music_name : "Imagine Dragons - Lonely",
        Music_photo : Imagine,
    },
    {
        Music : HIGHER,
        Music_name : "Imagine Dragons - Higher Ground",
        Music_photo : Imagine,
    },
    {
        Music : _7_YEARS,
        Music_name : "Lukas Graham - 7 Years",
        Music_photo : Lukas_Graham,
    },
]

export default Music;