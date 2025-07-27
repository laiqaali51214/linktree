export default function LinkItem({ title, url, icon }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 flex items-center gap-3 justify-center px-3 py-2 rounded-xl bg-white shadow hover:scale-105 hover:bg-gray-100 border-purple-500 border-1 transition font-mono"
        >
            {icon}
            <span>{title}</span>
        </a>
    );
}
