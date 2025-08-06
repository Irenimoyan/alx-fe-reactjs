function Userprofile() {
    return (
        <div className=" bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img className="rounded-full w-36 h-36 mx-auto"
                src="./img/userimg" alt=""
            />
            <h1 className=" text-xl text-blue-800 my-400">John Doe</h1>
            <p className="text-gray-600 text-base">Developer at Example Co. loves to write code,
                and explore new technologies
            </p>
        </div>
    );
}

export default Userprofile