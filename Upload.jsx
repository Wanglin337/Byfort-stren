import { useState } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default function Upload() {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState('');

  const handleUpload = async () => {
    if (!video) return;
    const videoRef = ref(storage, `videos/${uuidv4()}`);
    await uploadBytes(videoRef, video);
    const url = await getDownloadURL(videoRef);
    await addDoc(collection(db, 'videos'), { url, caption });
    alert('Upload berhasil!');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Upload Video</h1>
      <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
      <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} className="w-full p-2 mt-2 bg-gray-800 rounded" />
      <button onClick={handleUpload} className="bg-green-600 px-4 py-2 rounded mt-2">Upload</button>
    </div>
  );
}