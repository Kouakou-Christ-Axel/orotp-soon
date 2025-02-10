function Bulldozer({className}: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className={className}
            viewBox="0 0 24 24"
        >
            <path fill="currentColor"
                  d="M4 4a1 1 0 0 0-1 1v5c-.46 0-.86.31-.97.76v3.21h.26C2.65 13.37 3.3 13 4 13h9c.7 0 1.35.37 1.71.97h1.32L16 11a1 1 0 0 0-1-1h-2V8a1 1 0 0 0-1-1a1 1 0 0 0-1 1v2H9V5a1 1 0 0 0-1-1zm1 2h2v5H5zm12 5v8h5v-1l-3-1l-1-6zM4 15a2 2 0 0 0-2 2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2a2 2 0 0 0-2-2z"/>
        </svg>
    );
}

export default Bulldozer;