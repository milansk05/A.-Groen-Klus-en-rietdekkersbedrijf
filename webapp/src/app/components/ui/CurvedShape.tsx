interface CurvedShapeProps {
    className?: string;
    variant?: 'top' | 'bottom';
    colors?: {
        primary: string;
        secondary: string;
    };
}

export default function CurvedShape({
    className = '',
    variant = 'top',
    colors = {
        primary: '#4B5563', // gray-600
        secondary: '#95C11F' // primary green
    }
}: CurvedShapeProps) {
    if (variant === 'top') {
        return (
            <div className={`absolute right-0 w-full overflow-hidden ${className}`} style={{ height: '40px' }}>
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1200 40"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C300,40 900,40 1200,0 L1200,40 L0,40 Z"
                        fill={colors.primary}
                    />
                </svg>
            </div>
        );
    }

    return (
        <div className={`absolute left-0 w-full overflow-hidden ${className}`} style={{ height: '40px' }}>
            <svg
                className="absolute bottom-0 w-full h-full"
                viewBox="0 0 1200 40"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C300,0 900,0 1200,40 L1200,0 L0,0 Z"
                    fill={colors.primary}
                />
                <path
                    d="M0,40 C300,0 900,0 1200,40"
                    fill="none"
                    stroke={colors.secondary}
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}