import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="w-screen h-screen bg-zinc-800 text-white">
        <h1>Hello</h1>
      </div>
    </AuthProvider>
  );
}

export default App;
