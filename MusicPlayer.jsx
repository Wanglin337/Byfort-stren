export default function MusicPlayer({ src }) {
  return <audio controls src={src} className="w-full mt-2" />;
}