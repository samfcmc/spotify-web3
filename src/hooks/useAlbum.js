import { useEffect, useState, useCallback } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

export const useAlbum = (contract) => {
	const { token } = useMoralisWeb3Api();
	const { isInitialized } = useMoralis();

	const [albumDetails, setAlbumDetails] = useState();

	const fetchAlbum = useCallback(async () => {
		return await token
			.getAllTokenIds({
				address: contract,
				chain: 'mumbai',
			});
	}, [contract, token]);

	useEffect(() => {
		if (isInitialized) {
			fetchAlbum().then(songs => {
				setAlbumDetails(songs.result);
			})
		}
	}, [fetchAlbum, isInitialized]);

	return {
		albumDetails,
		fetchAlbum,
	};
}