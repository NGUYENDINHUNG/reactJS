import React,{memo,useCallback,useEffect,useRef,useState} from 'react';
import './play.css';









function Play ({name,artist,cover,id,src,onPrevMusic,OnNexMusic}) {
   
  const audioRef = useRef();

  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
  }, [id]);

  const onChangeSlider = useCallback((event) => {
    audioRef.current.currentTime = event.target.value;
  }, []);

  const getTrackLength = () => {
    audioRef.current.addEventListener('loadedmetadata', function () {
      // Thân hàm
      setDuration(audioRef.current.duration);
    });
  }

  useEffect(() => {
    getTrackLength();
  }, []);
  const getDuration = (duration) => {
    const minutes = Math.floor(duration / 60); // Số phút
    const seconds = Math.floor(duration % 60); // Số giây

    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedDuration;
  };

  const onUpdateTimer = useCallback(() => {
    setTimer(audioRef.current.currentTime);
  }, []);

  const onTogglePlayMusic = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the song if it is playing
    } else {
      audioRef.current.play(); // Play the song if it is paused
    }

    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const onReloadMusic = () => {
    audioRef.current.load();
  };


    return (
        <div className="music">
    <div className="music-thumb">
      {/* <img src="https://source.unsplash.com/random" alt="" /> */}
    </div>
    <h3 className="music-name">{name}</h3>
    <input type="range"
    max={duration}
    value={timer}
      id="range" 
      className="range"
       />
    <audio src="./music/holo.mp3" id="song" />
    <div className="timer">
      <div className="duration">2:10</div>
      <div className="remaining">-3:10</div>
    </div>
    <div className="controls">
      <ion-icon name="infinite-outline" className="play-infinite" />
      <ion-icon name="play-back" className="play-back" />
      <div className="play">
        <div className="player-inner">
          <ion-icon name="play" className="play-icon" />
        </div>
      </div>
      <ion-icon name="play-forward" className="play-forward" />
      <ion-icon name="repeat-outline" className="play-repeat" />


   
    
 
    </div>
  </div>


    );
}

export default Play ;