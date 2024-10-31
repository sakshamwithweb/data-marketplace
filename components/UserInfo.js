const UserInfo = ({ user }) => {
    return (
        <div className="flex items-center space-x-4">
            <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full" />
            <div>
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
            </div>
        </div>
    );
};

export default UserInfo;
