const DataManagement = () => {
    // Placeholder for user's uploaded data
    const dataFiles = [
        { name: "Health Records", date: "2024-10-31" },
        { name: "Browsing History", date: "2024-10-30" },
    ];

    return (
        <ul>
            {dataFiles.map((file, index) => (
                <li key={index} className="flex justify-between items-center border-b py-2">
                    <span>{file.name}</span>
                    <span className="text-gray-500 text-sm">{file.date}</span>
                </li>
            ))}
        </ul>
    );
};

export default DataManagement;
