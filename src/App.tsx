import UniReloFullPage from "./UniReloFullPage";
import UniReloMobilePage from "./UniReloMobilePage";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutral-200">
      <UniReloMobilePage />
      <UniReloFullPage />
    </div>
  );
}
