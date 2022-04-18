import React, { useCallback } from 'react';
import { Slider } from 'antd';
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import { useIPFS } from '../hooks/useIPFS';
import useAudio from '../hooks/useAudio';

import './AudioPlayer.css';

const AudioPlayer = ({ nftAlbum }) => {
	const { resolveLink } = useIPFS();

	const [
		isPlaying,
		duration,
		toggle,
		toNextTrack,
		toPrevTrack,
		trackProgress,
		onSearch,
		onSearchEnd,
		onVolume,
		trackIndex,
	] = useAudio(nftAlbum);

	const minSec = useCallback(secs => {
		const minutes = Math.floor(secs / 60);
		const returnMin = minutes < 10 ? `0${minutes}` : minutes;
		const seconds = Math.floor(secs % 60);
		const returnSec = seconds < 10 ? `0${seconds}` : seconds;

		return `${returnMin}:${returnSec}`;
	}, []);
	
	return (
		<React.Fragment>
			<div className="buttons" style={{ width: "300px", justifyContent: "start" }}>
				<img className="cover"
					alt="Current Cover"
					src={resolveLink(JSON.parse(nftAlbum[trackIndex].metadata).image)}/>
			</div>
			<div>
				<div className="songTitle">
					{JSON.parse(nftAlbum[trackIndex].metadata).name}
				</div>
				<div className="songAlbum">
					{nftAlbum[trackIndex].name}
				</div>
			</div>
			<div>
				<div className="buttons">
					<StepBackwardOutlined className="forback" onClick={toPrevTrack} />
					{
						isPlaying
						? <PauseCircleFilled className="pauseplay" onClick={toggle} />
						: <PlayCircleFilled className="pauseplay" onClick={toggle} />
					}
					<StepForwardOutlined className="forback" onClick={toNextTrack} />
				</div>
				<div className="buttons">
					{minSec(trackProgress)}
					<Slider
						className="progress" 
						value={trackProgress}
						step={1}
						min={1}
						max={duration ? duration : 0}
						tooltipVisible={false}
						onChange={onSearch}
						onAfterChange={onSearchEnd} />
					{duration ? minSec(Math.round(duration)) : "00:00"}
				</div>
			</div>
			<div className="soundDiv">
				<SoundOutlined />
				<Slider 
					className="volume"
					defaultValue={100}
					tooltipVisible={false}
					onChange={value => onVolume(value / 100)} />
			</div>
		</React.Fragment>
	);
}

export default AudioPlayer;
