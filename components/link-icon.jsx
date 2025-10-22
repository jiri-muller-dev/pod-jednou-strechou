export function LinkIcon({ className, url }) {
    return (
        <a href={url} target="_blank" className={`inline-block ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.2rem"
                height="1.2rem"
                fill="purple"
                className="inline"
            >
                <use href="\images\arrow-up-right-from-square-solid-full.svg" />
            </svg>
        </a>
    );
}
