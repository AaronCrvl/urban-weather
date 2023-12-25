'use client'

export default function LoadingIcon() {
    return (
        <div className="flex p-2">
            <span className="animate-spin">⏳</span>
            <span className="text-white outline text-2xl font-bold">Loading...</span>
        </div>
    )
}