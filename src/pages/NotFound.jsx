import { StarBackgorund } from "@/components/StarBackground"
export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
  <StarBackgorund />
  <div className="min-h-screen flex flex-col items-center justify-center text-white">
    <h1 className="text-6xl font-bold mb-4"><span className="text-primary">4</span>0<span className="text-primary">4</span></h1>
    <p className="text-xl mb-6">Sayfa bulunamadı.</p>
    <a href="/" className="cosmic-button text-black">Ana Sayfaya Dön</a>
  </div>
</div>
  );
}