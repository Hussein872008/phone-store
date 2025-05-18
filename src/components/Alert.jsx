import React, { useEffect } from "react";

const Alert = ({ message, duration = 3000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer); // تنظيف التايمر لو المكون اتشال بسرعة
    }, [duration, onClose]);

    return (
        <div className="mb-4 px-4 py-2 bg-green-100 text-green-700 border border-green-400 rounded">
            {message}
        </div>
    );
};

export default Alert;
