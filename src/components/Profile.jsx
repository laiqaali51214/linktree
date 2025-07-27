import profilePic from "../assets/Laiqa-Ali-Whitebg.png";

export default function Profile() {
    return (
        <div className="mt-2 flex flex-col items-center">
            <img
                src={profilePic}
                alt="Profile"
                className="w-30 h-30 rounded-full border-4 border-purple-400 shadow-lg"
            />
            <h2 className="mt-2 text-xl font-mono">Laiqa Ali</h2>
            <p className="text-gray-600 text-md font-mono">AI-Powered Solutions |  MERN Stack Development</p>
        </div>
    );
}
