import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const snap = await getDoc(doc(db, 'videos', id));
      setVideo(snap.data());
    };
    fetchVideo();
  }, [id]);

  if (!video) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <video src={video.url} controls className="w-full rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{video.caption}</h2>
    </div>
  );
}