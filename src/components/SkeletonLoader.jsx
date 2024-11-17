import React from "react";

// Skeleton Loader component
const SkeletonLoader = () => {
    return (
        <div className="w-full h-60 bg-gray-300 animate-pulse rounded-lg shadow-lg">
            {/* شما می‌توانید برای تصاویر و سایر بخش‌ها اسکلنت‌های بیشتری ایجاد کنید */}
            <div className="w-full h-full bg-gray-400 rounded-lg"></div>
        </div>
    );
};

export default SkeletonLoader;
