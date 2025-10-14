export default function CornerBox({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`relative ${className}`}>
            {/* corner */}
        <span className="crop crop-tl" aria-hidden />
        <span className="crop crop-tr" aria-hidden />
        <span className="crop crop-bl" aria-hidden />
        <span className="crop crop-br" aria-hidden />
            {children}
        </div>
    );
}